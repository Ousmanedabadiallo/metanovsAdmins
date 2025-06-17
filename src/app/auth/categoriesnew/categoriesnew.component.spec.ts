import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesnewComponent } from './categoriesnew.component';

describe('CategoriesnewComponent', () => {
  let component: CategoriesnewComponent;
  let fixture: ComponentFixture<CategoriesnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
