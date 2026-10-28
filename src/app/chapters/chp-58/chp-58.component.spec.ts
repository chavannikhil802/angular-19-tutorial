import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp58Component } from './chp-58.component';

describe('Chp58Component', () => {
  let component: Chp58Component;
  let fixture: ComponentFixture<Chp58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp58Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
