import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicationdto } from 'src/app/models/applicationModels/applicationdto';
import { ApplicationService } from 'src/app/services/applicationServices/application.service';

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

  constructor(private applicationService:ApplicationService, private activatedRoute:ActivatedRoute) { }

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
}
