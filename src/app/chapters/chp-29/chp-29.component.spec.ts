import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp29Component } from './chp-29.component';

describe('Chp29Component', () => {
  let component: Chp29Component;
  let fixture: ComponentFixture<Chp29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
