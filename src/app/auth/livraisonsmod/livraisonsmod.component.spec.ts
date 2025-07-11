import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonsmodComponent } from './livraisonsmod.component';

describe('LivraisonsmodComponent', () => {
  let component: LivraisonsmodComponent;
  let fixture: ComponentFixture<LivraisonsmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonsmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonsmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
