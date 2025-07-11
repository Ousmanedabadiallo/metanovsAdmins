import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurmodComponent } from './livreurmod.component';

describe('LivreurmodComponent', () => {
  let component: LivreurmodComponent;
  let fixture: ComponentFixture<LivreurmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreurmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
