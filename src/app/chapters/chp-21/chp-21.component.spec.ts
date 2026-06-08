import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp21Component } from './chp-21.component';

describe('Chp21Component', () => {
  let component: Chp21Component;
  let fixture: ComponentFixture<Chp21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
