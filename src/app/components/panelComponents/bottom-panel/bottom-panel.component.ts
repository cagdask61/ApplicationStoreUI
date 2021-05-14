import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messageServices/messages.service';
import { AuthService } from 'src/app/services/userServices/auth.service';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit {

  logoutText:string;
  isHideLogoutText:boolean = true;
  constructor(private authService:AuthService,private messagesService:MessagesService) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
    if (this.authService.isAuthenticated()) {
      this.isHideLogoutText = false;
      this.logoutText = " Logout ";
      
    }
    else{
      this.isHideLogoutText = true;
      this.logoutText = "";
      
    }
  }

  logout(){
    this.authService.logout();
    this.messagesService.centerBottomMessage("Çıkış yapıldı");
  }

}
