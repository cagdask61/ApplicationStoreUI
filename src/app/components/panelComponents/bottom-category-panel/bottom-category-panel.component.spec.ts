import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCategoryPanelComponent } from './bottom-category-panel.component';

describe('BottomCategoryPanelComponent', () => {
  let component: BottomCategoryPanelComponent;
  let fixture: ComponentFixture<BottomCategoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCategoryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
