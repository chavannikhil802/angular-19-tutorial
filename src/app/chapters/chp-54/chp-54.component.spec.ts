import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp54Component } from './chp-54.component';

describe('Chp54Component', () => {
  let component: Chp54Component;
  let fixture: ComponentFixture<Chp54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp54Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
