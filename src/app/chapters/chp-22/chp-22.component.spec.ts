import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp22Component } from './chp-22.component';

describe('Chp22Component', () => {
  let component: Chp22Component;
  let fixture: ComponentFixture<Chp22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
