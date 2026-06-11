import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp26Component } from './chp-26.component';

describe('Chp26Component', () => {
  let component: Chp26Component;
  let fixture: ComponentFixture<Chp26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
