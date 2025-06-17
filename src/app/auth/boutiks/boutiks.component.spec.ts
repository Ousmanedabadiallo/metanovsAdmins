import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiksComponent } from './boutiks.component';

describe('BoutiksComponent', () => {
  let component: BoutiksComponent;
  let fixture: ComponentFixture<BoutiksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
