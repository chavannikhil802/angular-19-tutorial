import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp34ContactComponent } from './chp-34-contact.component';

describe('Chp34ContactComponent', () => {
  let component: Chp34ContactComponent;
  let fixture: ComponentFixture<Chp34ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp34ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp34ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
