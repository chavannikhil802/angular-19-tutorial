import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp15Component } from './chp-15.component';

describe('Chp15Component', () => {
  let component: Chp15Component;
  let fixture: ComponentFixture<Chp15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
