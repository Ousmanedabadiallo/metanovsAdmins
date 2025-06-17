import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiksmodComponent } from './boutiksmod.component';

describe('BoutiksmodComponent', () => {
  let component: BoutiksmodComponent;
  let fixture: ComponentFixture<BoutiksmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiksmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiksmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
