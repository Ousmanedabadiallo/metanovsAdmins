import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsmodComponent } from './pointsmod.component';

describe('PointsmodComponent', () => {
  let component: PointsmodComponent;
  let fixture: ComponentFixture<PointsmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
