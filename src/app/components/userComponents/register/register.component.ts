import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messageServices/messages.service';
import { RouterNavigateService } from 'src/app/services/routerServices/router-navigate.service';
import { AuthService } from 'src/app/services/userServices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerAddForm:FormGroup

  constructor(private formBuilder:FormBuilder,
    private routerNavigate:RouterNavigateService,
    private authService:AuthService,
    private messageService:MessagesService) { }

  ngOnInit(): void {
    this.createRegisterAddForm();
  }

  createRegisterAddForm(){
    this.registerAddForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      description:["",Validators.required]
    })
  }


  register(){
    if(this.registerAddForm.valid){
      let registerModel = Object.assign({},this.registerAddForm.value);
      this.authService.register(registerModel).subscribe(response=>{
        this.messageService.leftBottomMessage(response.message);
        this.routerNavigate.getDefaultRouter();
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
    else{
      this.messageService.centerBottomMessage("lütfen boş bırakmayınız.")
    }
  }
}
