import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowMenuPanelComponent } from 'src/app/components/panelComponents/show-menu-panel/show-menu-panel.component';

@Injectable({
  providedIn: 'root'
})
export class ShowPanelService {

  constructor(public dialog: MatDialog) { }

  getDefaultPanel(){
    
    this.dialog.open(ShowMenuPanelComponent);
  }
}
