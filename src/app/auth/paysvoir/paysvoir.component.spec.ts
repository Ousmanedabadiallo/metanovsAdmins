import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysvoirComponent } from './paysvoir.component';

describe('PaysvoirComponent', () => {
  let component: PaysvoirComponent;
  let fixture: ComponentFixture<PaysvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
