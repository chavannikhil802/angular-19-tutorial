import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp28Component } from './chp-28.component';

describe('Chp28Component', () => {
  let component: Chp28Component;
  let fixture: ComponentFixture<Chp28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
