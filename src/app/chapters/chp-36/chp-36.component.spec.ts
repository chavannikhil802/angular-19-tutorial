import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp36Component } from './chp-36.component';

describe('Chp36Component', () => {
  let component: Chp36Component;
  let fixture: ComponentFixture<Chp36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
