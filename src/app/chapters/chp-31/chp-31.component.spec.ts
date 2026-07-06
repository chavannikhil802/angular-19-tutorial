import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp31Component } from './chp-31.component';

describe('Chp31Component', () => {
  let component: Chp31Component;
  let fixture: ComponentFixture<Chp31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
