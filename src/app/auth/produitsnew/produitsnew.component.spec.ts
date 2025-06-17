import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsnewComponent } from './produitsnew.component';

describe('ProduitsnewComponent', () => {
  let component: ProduitsnewComponent;
  let fixture: ComponentFixture<ProduitsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
