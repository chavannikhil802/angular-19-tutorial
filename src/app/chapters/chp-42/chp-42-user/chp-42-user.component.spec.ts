import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chp42UserComponent } from './chp-42-user.component';

describe('Chp42UserComponent', () => {
  let component: Chp42UserComponent;
  let fixture: ComponentFixture<Chp42UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chp42UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chp42UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
