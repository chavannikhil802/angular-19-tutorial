import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp34ProfileComponent } from './chp-34-profile.component';

describe('Chp34ProfileComponent', () => {
  let component: Chp34ProfileComponent;
  let fixture: ComponentFixture<Chp34ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp34ProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp34ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
