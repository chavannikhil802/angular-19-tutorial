import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp19Component } from './chp-19.component';

describe('Chp19Component', () => {
  let component: Chp19Component;
  let fixture: ComponentFixture<Chp19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
