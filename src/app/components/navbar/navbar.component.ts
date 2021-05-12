import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomCategoryPanelComponent } from '../panelComponents/bottom-category-panel/bottom-category-panel.component';
import { BottomPanelComponent } from '../panelComponents/bottom-panel/bottom-panel.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openHomePanel():void {
    this._bottomSheet.open(BottomPanelComponent);
  }

  openCategoryPanel():void {
    this._bottomSheet.open(BottomCategoryPanelComponent);
  }
}
