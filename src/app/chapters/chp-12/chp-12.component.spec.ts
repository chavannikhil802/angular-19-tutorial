import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp12Component } from './chp-12.component';

describe('Chp12Component', () => {
  let component: Chp12Component;
  let fixture: ComponentFixture<Chp12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
