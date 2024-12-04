import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { HirerComponent } from '../hirer/hirer.component';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, NgIf, EmployeeComponent, HirerComponent, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  activeForm: string = 'employer';
  dynamicStyle: string = 'active';
  setActiveForm(value: any) {
    this.activeForm = value;

    console.log(this.activeForm);
  }
}
