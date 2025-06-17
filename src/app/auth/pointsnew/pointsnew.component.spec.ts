import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsnewComponent } from './pointsnew.component';

describe('PointsnewComponent', () => {
  let component: PointsnewComponent;
  let fixture: ComponentFixture<PointsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
