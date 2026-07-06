import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp32Component } from './chp-32.component';

describe('Chp32Component', () => {
  let component: Chp32Component;
  let fixture: ComponentFixture<Chp32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
