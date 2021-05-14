import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/userModels/tokenModel';
import { UserForLoginModel } from 'src/app/models/userModels/userForLoginModel';
import { UserForRegisterModel } from 'src/app/models/userModels/userForRegisterModel';
import { LocalStrogeService } from '../localStroge/local-stroge.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://localhost:44319/api/auth";
  private registerApiUrl = "https://localhost:44319/api/auth/register";
  private loginApiUrl = "https://localhost:44319/api/auth/login";
  constructor(private httpClient:HttpClient,private localStrogeService:LocalStrogeService) { }


  register(userForRegister:UserForRegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.registerApiUrl,userForRegister);
  }

  login(userForLogin:UserForLoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.loginApiUrl,userForLogin);
  }

  isAuthenticated():boolean{
    if(this.localStrogeService.getLocalStrogeItem('usertoken')){
      return true;
    }
    else{
      return false;
    }
  }


  logout(){
    this.localStrogeService.removeLocalStrogeItem('usertoken');
  }
}
