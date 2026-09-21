import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp33Component } from './chp-33.component';

describe('Chp33Component', () => {
  let component: Chp33Component;
  let fixture: ComponentFixture<Chp33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
