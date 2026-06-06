import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp17Component } from './chp-17.component';

describe('Chp17Component', () => {
  let component: Chp17Component;
  let fixture: ComponentFixture<Chp17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
