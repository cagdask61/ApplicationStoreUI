import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStrogeService } from 'src/app/services/localStroge/local-stroge.service';
import { MessagesService } from 'src/app/services/messageServices/messages.service';
import { ShowPanelService } from 'src/app/services/panels/show-panel.service';
import { RouterNavigateService } from 'src/app/services/routerServices/router-navigate.service';
import { AuthService } from 'src/app/services/userServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAddForm:FormGroup;
  
  constructor(private authService:AuthService,
    private routerNavigateService:RouterNavigateService,
    private formBuilder:FormBuilder,
    private messagesService:MessagesService,
    private showPanelService:ShowPanelService,
    private localStrogeService:LocalStrogeService) { }

  ngOnInit(): void {
    this.createLoginAddForm();
  }

  createLoginAddForm(){
    this.loginAddForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }



  login(){
    if (this.loginAddForm.valid) {
      let loginModel = Object.assign({},this.loginAddForm.value);
      this.authService.login(loginModel).subscribe(response=>{
        this.messagesService.leftBottomMessage(response.message)
        //localStorage.setItem("usertoken",response.data.token)
        this.localStrogeService.setLocalStrogeItem('usertoken',response.data.token)
        this.routerNavigateService.getRouter("profile")
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
      this.messagesService.centerBottomMessage("Lütfen boş bırakmayınız.")
    }
  }


  
}
