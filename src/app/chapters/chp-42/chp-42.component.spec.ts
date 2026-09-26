import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp42Component } from './chp-42.component';

describe('Chp42Component', () => {
  let component: Chp42Component;
  let fixture: ComponentFixture<Chp42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp42Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
