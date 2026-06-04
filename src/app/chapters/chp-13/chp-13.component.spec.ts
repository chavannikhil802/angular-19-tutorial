import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp13Component } from './chp-13.component';

describe('Chp13Component', () => {
  let component: Chp13Component;
  let fixture: ComponentFixture<Chp13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
