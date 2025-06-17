import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesnewComponent } from './villesnew.component';

describe('VillesnewComponent', () => {
  let component: VillesnewComponent;
  let fixture: ComponentFixture<VillesnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillesnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
