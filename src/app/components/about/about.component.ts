import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/applicationServices/application.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dataCount:number;
  dataMessage:string;
  dataState:boolean;
  constructor(private applicationService:ApplicationService) { }

  ngOnInit(): void {
    this.getAboutData();
  }

  getAboutData(){
    this.applicationService.getApplications().subscribe(response=>{
      this.dataCount = response.count
      this.dataMessage = response.message
      this.dataState = response.state
    })
  }
}
