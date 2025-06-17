import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquesnewComponent } from './marquesnew.component';

describe('MarquesnewComponent', () => {
  let component: MarquesnewComponent;
  let fixture: ComponentFixture<MarquesnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquesnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
