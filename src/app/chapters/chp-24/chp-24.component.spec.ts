import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp24Component } from './chp-24.component';

describe('Chp24Component', () => {
  let component: Chp24Component;
  let fixture: ComponentFixture<Chp24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
