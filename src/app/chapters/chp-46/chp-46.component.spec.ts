import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp46Component } from './chp-46.component';

describe('Chp46Component', () => {
  let component: Chp46Component;
  let fixture: ComponentFixture<Chp46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp46Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
