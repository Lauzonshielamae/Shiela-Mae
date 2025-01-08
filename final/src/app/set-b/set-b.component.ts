import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-set-b',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './set-b.component.html',
  styleUrl: './set-b.component.css'
})
export class SetBComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Show success message on successful registration
      alert('Registration Successful!');
      console.log(this.registrationForm.value);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
