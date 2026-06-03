import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp10Component } from './chp-10.component';

describe('Chp10Component', () => {
  let component: Chp10Component;
  let fixture: ComponentFixture<Chp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
