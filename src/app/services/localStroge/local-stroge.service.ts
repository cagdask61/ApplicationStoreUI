import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStrogeService {

  constructor() { }

  setLocalStrogeItem(key:string,value:string){
    localStorage.setItem(key,value);
  }
  getLocalStrogeItem(key:string){
    localStorage.getItem(key);
  }
  
  setLocalStrogeJsonItem(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }
  getLocalStrogeJsonItem(item:any,key:string){
    item = JSON.parse(localStorage.getItem(key));
  }

  clearLocalStroge(){
    localStorage.clear();
  }
  removeLocalStrogeItem(key:string){
    localStorage.removeItem(key);
  }

}
