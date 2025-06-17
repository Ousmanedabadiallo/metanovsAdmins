import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsvoirComponent } from './produitsvoir.component';

describe('ProduitsvoirComponent', () => {
  let component: ProduitsvoirComponent;
  let fixture: ComponentFixture<ProduitsvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
