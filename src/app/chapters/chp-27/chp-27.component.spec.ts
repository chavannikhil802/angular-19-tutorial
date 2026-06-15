import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp27Component } from './chp-27.component';

describe('Chp27Component', () => {
  let component: Chp27Component;
  let fixture: ComponentFixture<Chp27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
