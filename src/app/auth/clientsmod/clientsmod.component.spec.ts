import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsmodComponent } from './clientsmod.component';

describe('ClientsmodComponent', () => {
  let component: ClientsmodComponent;
  let fixture: ComponentFixture<ClientsmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
