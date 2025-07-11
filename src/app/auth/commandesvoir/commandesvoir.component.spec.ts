import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesvoirComponent } from './commandesvoir.component';

describe('CommandesvoirComponent', () => {
  let component: CommandesvoirComponent;
  let fixture: ComponentFixture<CommandesvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
