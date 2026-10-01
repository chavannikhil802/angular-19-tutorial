import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp44Component } from './chp-44.component';

describe('Chp44Component', () => {
  let component: Chp44Component;
  let fixture: ComponentFixture<Chp44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp44Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
