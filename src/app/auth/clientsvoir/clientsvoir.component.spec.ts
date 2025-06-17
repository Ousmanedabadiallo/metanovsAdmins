import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsvoirComponent } from './clientsvoir.component';

describe('ClientsvoirComponent', () => {
  let component: ClientsvoirComponent;
  let fixture: ComponentFixture<ClientsvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
