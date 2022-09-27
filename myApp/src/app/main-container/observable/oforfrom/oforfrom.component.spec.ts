import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OforfromComponent } from './oforfrom.component';

describe('OforfromComponent', () => {
  let component: OforfromComponent;
  let fixture: ComponentFixture<OforfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OforfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OforfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
