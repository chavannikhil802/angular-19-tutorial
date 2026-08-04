import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp34Component } from './chp-34.component';

describe('Chp34Component', () => {
  let component: Chp34Component;
  let fixture: ComponentFixture<Chp34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp34Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
