import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp40Component } from './chp-40.component';

describe('Chp40Component', () => {
  let component: Chp40Component;
  let fixture: ComponentFixture<Chp40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
