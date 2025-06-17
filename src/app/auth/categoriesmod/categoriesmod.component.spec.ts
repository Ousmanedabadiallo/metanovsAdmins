import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesmodComponent } from './categoriesmod.component';

describe('CategoriesmodComponent', () => {
  let component: CategoriesmodComponent;
  let fixture: ComponentFixture<CategoriesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
