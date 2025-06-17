import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsnewComponent } from './clientsnew.component';

describe('ClientsnewComponent', () => {
  let component: ClientsnewComponent;
  let fixture: ComponentFixture<ClientsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
