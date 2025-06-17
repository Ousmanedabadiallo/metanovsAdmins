import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysnewComponent } from './paysnew.component';

describe('PaysnewComponent', () => {
  let component: PaysnewComponent;
  let fixture: ComponentFixture<PaysnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
