import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {
  form;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.form.invalid) return;

    const { username, password } = this.form.value;

    this.userService.register(username!, password!).subscribe({
      next: (res: any) => {
        console.log('REGISTER OK', res);
      },
      error: (err: any) => {
        console.error('REGISTER ERROR', err);
      },
    });
  }
}
