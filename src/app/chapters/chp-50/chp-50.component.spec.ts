import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp50Component } from './chp-50.component';

describe('Chp50Component', () => {
  let component: Chp50Component;
  let fixture: ComponentFixture<Chp50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp50Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
