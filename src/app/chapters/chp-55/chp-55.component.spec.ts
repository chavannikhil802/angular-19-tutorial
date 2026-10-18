import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp55Component } from './chp-55.component';

describe('Chp55Component', () => {
  let component: Chp55Component;
  let fixture: ComponentFixture<Chp55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp55Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
