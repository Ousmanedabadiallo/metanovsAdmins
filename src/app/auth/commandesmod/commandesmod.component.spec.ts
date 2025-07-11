import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesmodComponent } from './commandesmod.component';

describe('CommandesmodComponent', () => {
  let component: CommandesmodComponent;
  let fixture: ComponentFixture<CommandesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
