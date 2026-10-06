import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp47Component } from './chp-47.component';

describe('Chp47Component', () => {
  let component: Chp47Component;
  let fixture: ComponentFixture<Chp47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp47Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
