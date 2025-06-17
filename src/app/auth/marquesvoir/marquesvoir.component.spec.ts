import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquesvoirComponent } from './marquesvoir.component';

describe('MarquesvoirComponent', () => {
  let component: MarquesvoirComponent;
  let fixture: ComponentFixture<MarquesvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquesvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquesvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
