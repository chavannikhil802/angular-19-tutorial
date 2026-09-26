import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp41Component } from './chp-41.component';

describe('Chp41Component', () => {
  let component: Chp41Component;
  let fixture: ComponentFixture<Chp41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp41Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
