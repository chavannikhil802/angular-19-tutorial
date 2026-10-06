import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp48Component } from './chp-48.component';

describe('Chp48Component', () => {
  let component: Chp48Component;
  let fixture: ComponentFixture<Chp48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp48Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
