import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuPanelComponent } from './show-menu-panel.component';

describe('ShowMenuPanelComponent', () => {
  let component: ShowMenuPanelComponent;
  let fixture: ComponentFixture<ShowMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
