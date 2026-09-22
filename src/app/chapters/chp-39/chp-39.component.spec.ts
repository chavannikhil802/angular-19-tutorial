import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp39Component } from './chp-39.component';

describe('Chp39Component', () => {
  let component: Chp39Component;
  let fixture: ComponentFixture<Chp39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp39Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
