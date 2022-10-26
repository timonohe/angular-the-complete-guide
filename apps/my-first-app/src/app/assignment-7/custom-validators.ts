import { AbstractControl, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s: string]: boolean} | null {
    if (control.value === 'Test') {
      return {'invalidProjectName': true};
    }

    return null;
  }

  static asyncInvalidProjectName(control: AbstractControl):
  Promise<any> | Observable<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'Testproject') {
        resolve({'invalidProjectName': true});
      } else {
        resolve(null)
      }
    }, 2000)
  })
}
}
