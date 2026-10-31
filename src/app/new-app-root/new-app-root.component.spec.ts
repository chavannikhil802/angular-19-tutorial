import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppRootComponent } from './new-app-root.component';

describe('NewAppRootComponent', () => {
  let component: NewAppRootComponent;
  let fixture: ComponentFixture<NewAppRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAppRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
