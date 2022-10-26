import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveFormsAssignmentComponent } from './template-drive-forms-assignment.component';

describe('TemplateDriveFormsAssignmentComponent', () => {
  let component: TemplateDriveFormsAssignmentComponent;
  let fixture: ComponentFixture<TemplateDriveFormsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDriveFormsAssignmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDriveFormsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
