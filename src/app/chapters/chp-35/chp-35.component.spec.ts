import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp35Component } from './chp-35.component';

describe('Chp35Component', () => {
  let component: Chp35Component;
  let fixture: ComponentFixture<Chp35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp35Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
