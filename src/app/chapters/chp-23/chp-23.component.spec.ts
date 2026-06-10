import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp23Component } from './chp-23.component';

describe('Chp23Component', () => {
  let component: Chp23Component;
  let fixture: ComponentFixture<Chp23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
