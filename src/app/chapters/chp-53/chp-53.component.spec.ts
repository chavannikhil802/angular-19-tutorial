import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp53Component } from './chp-53.component';

describe('Chp53Component', () => {
  let component: Chp53Component;
  let fixture: ComponentFixture<Chp53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp53Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
