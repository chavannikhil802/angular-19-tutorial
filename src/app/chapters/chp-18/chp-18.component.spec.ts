import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp18Component } from './chp-18.component';

describe('Chp18Component', () => {
  let component: Chp18Component;
  let fixture: ComponentFixture<Chp18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
