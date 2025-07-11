import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonsvoirComponent } from './livraisonsvoir.component';

describe('LivraisonsvoirComponent', () => {
  let component: LivraisonsvoirComponent;
  let fixture: ComponentFixture<LivraisonsvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonsvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonsvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
