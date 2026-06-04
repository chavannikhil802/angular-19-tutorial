import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp14Component } from './chp-14.component';

describe('Chp14Component', () => {
  let component: Chp14Component;
  let fixture: ComponentFixture<Chp14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
