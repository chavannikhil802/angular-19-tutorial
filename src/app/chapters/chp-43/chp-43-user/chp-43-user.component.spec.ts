import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp43UserComponent } from './chp-43-user.component';

describe('Chp43UserComponent', () => {
  let component: Chp43UserComponent;
  let fixture: ComponentFixture<Chp43UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp43UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp43UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
