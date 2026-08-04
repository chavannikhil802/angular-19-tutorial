import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp34HeaderComponent } from './chp-34-header.component';

describe('Chp34HeaderComponent', () => {
  let component: Chp34HeaderComponent;
  let fixture: ComponentFixture<Chp34HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp34HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp34HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
