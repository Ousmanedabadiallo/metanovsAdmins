import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreursvoirComponent } from './livreursvoir.component';

describe('LivreursvoirComponent', () => {
  let component: LivreursvoirComponent;
  let fixture: ComponentFixture<LivreursvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreursvoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreursvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
