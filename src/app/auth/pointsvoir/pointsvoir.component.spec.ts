import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsvoirComponent } from './pointsvoir.component';

describe('PointsvoirComponent', () => {
  let component: PointsvoirComponent;
  let fixture: ComponentFixture<PointsvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
