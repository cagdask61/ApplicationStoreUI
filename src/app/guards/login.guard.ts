import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessagesService } from '../services/messageServices/messages.service';
import { RouterNavigateService } from '../services/routerServices/router-navigate.service';
import { AuthService } from '../services/userServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private messagesService:MessagesService,private routerNavigate:RouterNavigateService,private authService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAuthenticated()){
        return true;
      }else{
        this.routerNavigate.getRouter("login")
        this.messagesService.leftBottomMessage("Lütfen Giriş yapınız");
        return false;
      }
  }
  
}
