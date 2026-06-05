import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp16Component } from './chp-16.component';

describe('Chp16Component', () => {
  let component: Chp16Component;
  let fixture: ComponentFixture<Chp16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
