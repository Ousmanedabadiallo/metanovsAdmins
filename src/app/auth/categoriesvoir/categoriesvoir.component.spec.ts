import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesvoirComponent } from './categoriesvoir.component';

describe('CategoriesvoirComponent', () => {
  let component: CategoriesvoirComponent;
  let fixture: ComponentFixture<CategoriesvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
