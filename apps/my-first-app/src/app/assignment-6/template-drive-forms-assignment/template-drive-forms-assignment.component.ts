import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-drive-forms-assignment',
  templateUrl: './template-drive-forms-assignment.component.html',
  styleUrls: ['./template-drive-forms-assignment.component.scss'],
})
export class TemplateDriveFormsAssignmentComponent {
  @ViewChild('signupForm') signupForm!: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  onSubmit() {
    console.log(this.signupForm);
  }
}
