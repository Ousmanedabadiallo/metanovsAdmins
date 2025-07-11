import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonsgestsComponent } from './livraisonsgests.component';

describe('LivraisonsgestsComponent', () => {
  let component: LivraisonsgestsComponent;
  let fixture: ComponentFixture<LivraisonsgestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonsgestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonsgestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
