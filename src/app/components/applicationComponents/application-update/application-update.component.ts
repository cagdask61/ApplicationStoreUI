import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Applicationdto } from 'src/app/models/applicationModels/applicationdto';
import { Category } from 'src/app/models/categoryModels/category';
import { ApplicationService } from 'src/app/services/applicationServices/application.service';
import { CategoryService } from 'src/app/services/categoryServices/category.service';
import { MessagesService } from 'src/app/services/messageServices/messages.service';
import { RouterNavigateService } from 'src/app/services/routerServices/router-navigate.service';

@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css']
})
export class ApplicationUpdateComponent implements OnInit {

  testIconPath:string;

  applicationId:number;
  developerId:number;
  categoryId:number;
  applicationName:string;
  applicationIconPath:string;
  applicationPath:string;
  categoryName:string;
  applicationDescription:string;
  developerFirstName:string;
  developerLastName:string;
  isActiveApplication:boolean;
  isHomeApplication:boolean;
  releaseDate:Date;

  applicationAddForm:FormGroup;

  categories:Category[];

  constructor(private applicationService:ApplicationService,
    private messageService:MessagesService,
    private routerNavigateService:RouterNavigateService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getActiveRouter();
    this.createApplicationAddForm();
    this.getCategories();
  }

  getActiveRouter(){
    this.activatedRoute.params.subscribe(params=>{
     if(params["applicationId"]){
      this.getApplication(params["applicationId"]);
     }
     else{
       console.log("hata");
     }
    })
  }

  getApplication(applicationId:number){
    this.applicationService.getApplicationDetail(applicationId).subscribe(response=>{
      this.applicationId = response.data.applicationId
      this.categoryId = response.data.categoryId
      this.developerId = response.data.developerId
      this.applicationName = response.data.applicationName
      this.applicationIconPath = response.data.applicationIconPath
      this.applicationPath = response.data.applicationPath
      this.categoryName = response.data.categoryName
      this.applicationDescription = response.data.description
      this.developerFirstName = response.data.developerFirstName
      this.developerLastName = response.data.developerLastName
      this.isActiveApplication = response.data.isActiveApplication
      this.isHomeApplication = response.data.isHomeApplication
      this.releaseDate = response.data.releaseDate
    })
  }

  createApplicationAddForm(){
    this.applicationAddForm = this.formBuilder.group({
      categoryId:["",Validators.required],
      developerId:["",Validators.required],
      applicationName:["",Validators.required],
      description:["",Validators.required],
      applicationPath:["",Validators.required],
      iconPath:["",Validators.required]
    })
  }

  
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })
  }

  applicationUpdate(){
    if(this.applicationAddForm.valid){
      let applicationModel = Object.assign({},this.applicationAddForm.value)
      this.applicationService.applicationUpdate(applicationModel).subscribe(response=>{
        this.messageService.leftBottomMessage("Başarılı" + response.message);
      },responseError=>{
          if(responseError.error.Errors.length>0){
            this.messageService.leftBottomMessage(responseError.error.Errors)
            for(let i=0; i < responseError.error.Errors.length; i++){
              console.log(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
              this.messageService.centerBottomMessage(responseError.error.Errors[i].ErrorMessage);
            }
          }
        })
    }

  }
}
