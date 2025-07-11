import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesnewComponent } from './commandesnew.component';

describe('CommandesnewComponent', () => {
  let component: CommandesnewComponent;
  let fixture: ComponentFixture<CommandesnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
