import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp34AboutComponent } from './chp-34-about.component';

describe('Chp34AboutComponent', () => {
  let component: Chp34AboutComponent;
  let fixture: ComponentFixture<Chp34AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp34AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp34AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
