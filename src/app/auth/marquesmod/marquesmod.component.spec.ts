import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquesmodComponent } from './marquesmod.component';

describe('MarquesmodComponent', () => {
  let component: MarquesmodComponent;
  let fixture: ComponentFixture<MarquesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
