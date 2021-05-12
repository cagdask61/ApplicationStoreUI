import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicationdto } from 'src/app/models/applicationModels/applicationdto';
import { ApplicationService } from 'src/app/services/applicationServices/application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {

    developerFirstName:string;
    developerLastName:string;
    applicationName:string;
    categoryName:string;
    description:string;
    applicationPath:string;
    applicaitonIconPath:string;
    releaseDate:Date;
  constructor(private router:Router,private applicationService:ApplicationService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActivedRoute();
  }

  getActivedRoute(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["applicationid"]){
        this.getApplicationDetail(params["applicationid"])
      }
      else{
          this.router.navigate(["/"]);
      }
    })
  }
  getApplicationDetail(applicationId:number){
    this.applicationService.getApplicationDetail(applicationId).subscribe(response=>{
      this.applicationName = response.data.applicationName
      this.categoryName = response.data.categoryName
      this.developerFirstName = response.data.developerFirstName
      this.developerLastName = response.data.developerLastName
      this.description = response.data.description
      this.applicationPath = response.data.applicationPath
      this.applicaitonIconPath = response.data.applicationIconPath
      this.releaseDate = response.data.releaseDate;
    })
  }
}
