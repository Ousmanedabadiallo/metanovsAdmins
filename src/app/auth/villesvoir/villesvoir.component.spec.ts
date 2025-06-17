import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesvoirComponent } from './villesvoir.component';

describe('VillesvoirComponent', () => {
  let component: VillesvoirComponent;
  let fixture: ComponentFixture<VillesvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillesvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillesvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
