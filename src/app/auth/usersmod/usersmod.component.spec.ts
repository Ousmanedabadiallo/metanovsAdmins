import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersmodComponent } from './usersmod.component';

describe('UsersmodComponent', () => {
  let component: UsersmodComponent;
  let fixture: ComponentFixture<UsersmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
