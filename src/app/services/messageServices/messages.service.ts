import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private defaultDurationValue:number = 4000;
  
  constructor(private snackBar:MatSnackBar) { }
    
  public get getDefaultDurationValue():number{
    return this.defaultDurationValue;
  }

  // public set setDefaultDurationValue(durationValue:number){
  //   this.defaultDurationValue = durationValue;
  // }

  leftBottomMessage(message:string,action:string = null,durationValue:number = null){
    let checkDuration = durationValue === null ? this.getDefaultDurationValue : durationValue;
    let checkAction = action === null ? "Ok" : action;
    this.snackBar.open(message,checkAction,{
      duration:checkDuration,
      horizontalPosition:'left',
      verticalPosition:'bottom'
    })
  }

  centerBottomMessage(message:string,action:string = null,durationValue:number = null){
    let checkDuration = durationValue === null ? this.getDefaultDurationValue : durationValue;
    let checkAction = action === null ? "Ok" : action;
    this.snackBar.open(message,checkAction,{
      duration: checkDuration,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  
}
