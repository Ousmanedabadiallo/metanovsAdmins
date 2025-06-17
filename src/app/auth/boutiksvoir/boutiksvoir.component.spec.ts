import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiksvoirComponent } from './boutiksvoir.component';

describe('BoutiksvoirComponent', () => {
  let component: BoutiksvoirComponent;
  let fixture: ComponentFixture<BoutiksvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiksvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiksvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
