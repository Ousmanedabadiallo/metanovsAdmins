import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersnewComponent } from './usersnew.component';

describe('UsersnewComponent', () => {
  let component: UsersnewComponent;
  let fixture: ComponentFixture<UsersnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
