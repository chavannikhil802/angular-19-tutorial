import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp38Component } from './chp-38.component';

describe('Chp38Component', () => {
  let component: Chp38Component;
  let fixture: ComponentFixture<Chp38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp38Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
