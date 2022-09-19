import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFiveControlComponent } from './assignment-five-control.component';

describe('AssignmentFiveControlComponent', () => {
  let component: AssignmentFiveControlComponent;
  let fixture: ComponentFixture<AssignmentFiveControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentFiveControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentFiveControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
