import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersvoirComponent } from './usersvoir.component';

describe('UsersvoirComponent', () => {
  let component: UsersvoirComponent;
  let fixture: ComponentFixture<UsersvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
