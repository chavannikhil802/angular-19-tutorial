import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp57Component } from './chp-57.component';

describe('Chp57Component', () => {
  let component: Chp57Component;
  let fixture: ComponentFixture<Chp57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp57Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
