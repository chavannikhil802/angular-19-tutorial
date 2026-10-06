import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp45Component } from './chp-45.component';

describe('Chp45Component', () => {
  let component: Chp45Component;
  let fixture: ComponentFixture<Chp45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp45Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
