import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonsnewComponent } from './livraisonsnew.component';

describe('LivraisonsnewComponent', () => {
  let component: LivraisonsnewComponent;
  let fixture: ComponentFixture<LivraisonsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonsnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
