import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicationdto } from 'src/app/models/applicationModels/applicationdto';
import { ApplicationService } from 'src/app/services/applicationServices/application.service';
import { MessagesService } from 'src/app/services/messageServices/messages.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications:Applicationdto[];
  dataCount:number;
  isDataNull:boolean = true;
  filterText:string = "";

  constructor(private applicationService:ApplicationService, private activatedRoute:ActivatedRoute,private messagesService:MessagesService) { }

  ngOnInit(): void {
    this.getRoute();
    
  }

  getRoute(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryid"]){
          this.getByCateogry(params["categoryid"]);
      }
      else{
        this.getApplicationList();
      }
    })
  }

  getApplicationList(){
    this.applicationService.getApplications().subscribe(response=>{
      this.applications =  response.data
      this.dataCount = response.count
      this.isDataNull = false;
    })
  }

  getByCateogry(categoryId:number){
    this.applicationService.getApplicationsByCategory(categoryId).subscribe(response=>{
      this.applications = response.data
      this.isDataNull = false;
    })
  }

  applicationDelete(applicationDto:Applicationdto){
    this.applicationService.applicationDelete({
      id:applicationDto.applicationId,
      applicationName:applicationDto.applicationName,
      applicationPath:applicationDto.applicationPath,
      categoryId:applicationDto.categoryId,
      description:applicationDto.description,
      developerId:applicationDto.developerId,
      iconPath:applicationDto.applicationIconPath,
      isActive:applicationDto.isActiveApplication,
      isHome:applicationDto.isHomeApplication,
      releaseDate:applicationDto.releaseDate
    }).subscribe(response=>{
      this.messagesService.leftBottomMessage(response.message);
    },responseError=>{
      if(responseError.error.Errors.length>0){
        this.messagesService.leftBottomMessage(responseError.error.Errors)
        for(let i=0; i < responseError.error.Errors.length; i++){
          console.log(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          this.messagesService.centerBottomMessage(responseError.error.Errors[i].ErrorMessage);
        }
      }
    });
  }
}
