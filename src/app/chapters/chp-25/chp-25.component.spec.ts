import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp25Component } from './chp-25.component';

describe('Chp25Component', () => {
  let component: Chp25Component;
  let fixture: ComponentFixture<Chp25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
