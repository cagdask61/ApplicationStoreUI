import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/categoryModels/category';
import { ApplicationService } from 'src/app/services/applicationServices/application.service';
import { CategoryService } from 'src/app/services/categoryServices/category.service';
import { MessagesService } from 'src/app/services/messageServices/messages.service';
import { ShowPanelService } from 'src/app/services/panels/show-panel.service';
import { RouterNavigateService } from 'src/app/services/routerServices/router-navigate.service';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.css']
})
export class ApplicationAddComponent implements OnInit {

  formTitle:string = " Application Add ";

  applicationAddForm:FormGroup;

  categoriesData:Category[];

  applicationIconPath:string;

  constructor(private formBuilder:FormBuilder,
    private applicationService:ApplicationService,
    private messagesService:MessagesService,
    private routerNavigateService:RouterNavigateService,
    private categoryService:CategoryService,
    private showPanelService:ShowPanelService) { }

  ngOnInit(): void {
    this.createApplicationAddForm();
    this.getCategories();
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

  applicationAdd(){
    if(this.applicationAddForm.valid){
      let applicationModel = Object.assign({},this.applicationAddForm.value)
        this.applicationService.applicationAdd(applicationModel).subscribe(response=>{

          this.messagesService.leftBottomMessage(applicationModel.applicationName + " - " + response.message);
          this.routerNavigateService.getDefaultRouter();

        },responseError=>{
          if(responseError.error.Errors.length>0){
            this.messagesService.leftBottomMessage(responseError.error.Errors)
            for(let i=0; i < responseError.error.Errors.length; i++){
              console.log(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
              this.messagesService.centerBottomMessage(responseError.error.Errors[i].ErrorMessage);
            }
          }
        })
    }
    else{
      this.messagesService.centerBottomMessage("Not Null");
    }
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categoriesData = response.data
    })
  }

}
