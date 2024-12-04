import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  isSubmitted: boolean = false;
  myForm = new FormGroup(
    {
      firstname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5),
      ]),
      email: new FormControl(null, Validators.required),
      number: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ]),
      confirmPassword: new FormControl(null, Validators.required),
    },
    this.passwordsMatch
  );
  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsMismatch: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    console.log(this.myForm);
    this.isSubmitted = true;
  }
  get password() {
    return this.myForm.get('password');
  }

  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }
}
