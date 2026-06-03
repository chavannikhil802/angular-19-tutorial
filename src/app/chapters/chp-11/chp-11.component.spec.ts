import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp11Component } from './chp-11.component';

describe('Chp11Component', () => {
  let component: Chp11Component;
  let fixture: ComponentFixture<Chp11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
