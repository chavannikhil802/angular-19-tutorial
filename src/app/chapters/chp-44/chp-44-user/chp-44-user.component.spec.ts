import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp44UserComponent } from './chp-44-user.component';

describe('Chp44UserComponent', () => {
  let component: Chp44UserComponent;
  let fixture: ComponentFixture<Chp44UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp44UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp44UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
