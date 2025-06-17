import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiksNewComponent } from './boutiks-new.component';

describe('BoutiksNewComponent', () => {
  let component: BoutiksNewComponent;
  let fixture: ComponentFixture<BoutiksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiksNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
