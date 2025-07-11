import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreursnewComponent } from './livreursnew.component';

describe('LivreursnewComponent', () => {
  let component: LivreursnewComponent;
  let fixture: ComponentFixture<LivreursnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreursnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreursnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
