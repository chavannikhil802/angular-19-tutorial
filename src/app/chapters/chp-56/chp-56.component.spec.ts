import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp56Component } from './chp-56.component';

describe('Chp56Component', () => {
  let component: Chp56Component;
  let fixture: ComponentFixture<Chp56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp56Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
