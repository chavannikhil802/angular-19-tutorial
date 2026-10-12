import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp52Component } from './chp-52.component';

describe('Chp52Component', () => {
  let component: Chp52Component;
  let fixture: ComponentFixture<Chp52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp52Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
