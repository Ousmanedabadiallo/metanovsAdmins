import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesmodComponent } from './villesmod.component';

describe('VillesmodComponent', () => {
  let component: VillesmodComponent;
  let fixture: ComponentFixture<VillesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
