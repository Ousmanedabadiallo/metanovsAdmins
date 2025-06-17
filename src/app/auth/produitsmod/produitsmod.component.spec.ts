import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsmodComponent } from './produitsmod.component';

describe('ProduitsmodComponent', () => {
  let component: ProduitsmodComponent;
  let fixture: ComponentFixture<ProduitsmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
