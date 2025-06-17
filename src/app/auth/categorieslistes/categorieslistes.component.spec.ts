import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieslistesComponent } from './categorieslistes.component';

describe('CategorieslistesComponent', () => {
  let component: CategorieslistesComponent;
  let fixture: ComponentFixture<CategorieslistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieslistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieslistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
