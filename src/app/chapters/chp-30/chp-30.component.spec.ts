import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp30Component } from './chp-30.component';

describe('Chp30Component', () => {
  let component: Chp30Component;
  let fixture: ComponentFixture<Chp30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
