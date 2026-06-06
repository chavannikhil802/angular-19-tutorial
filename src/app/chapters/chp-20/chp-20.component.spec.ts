import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp20Component } from './chp-20.component';

describe('Chp20Component', () => {
  let component: Chp20Component;
  let fixture: ComponentFixture<Chp20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
