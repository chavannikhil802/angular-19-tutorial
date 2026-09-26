import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp43Component } from './chp-43.component';

describe('Chp43Component', () => {
  let component: Chp43Component;
  let fixture: ComponentFixture<Chp43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp43Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
