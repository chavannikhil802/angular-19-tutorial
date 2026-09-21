import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp34HomeComponent } from './chp-34-home.component';

describe('Chp34HomeComponent', () => {
  let component: Chp34HomeComponent;
  let fixture: ComponentFixture<Chp34HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp34HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp34HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
