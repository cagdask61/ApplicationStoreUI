import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterNavigateService {

  constructor(private router:Router) { }


  getDefaultRouter(){
    this.router.navigate(['/'])
  }

  getRouter(navigate:string){
    this.router.navigate(["/" + navigate.trim()])
  }

}
