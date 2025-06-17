import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysmodComponent } from './paysmod.component';

describe('PaysmodComponent', () => {
  let component: PaysmodComponent;
  let fixture: ComponentFixture<PaysmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
