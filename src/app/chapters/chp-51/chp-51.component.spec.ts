import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp51Component } from './chp-51.component';

describe('Chp51Component', () => {
  let component: Chp51Component;
  let fixture: ComponentFixture<Chp51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp51Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
