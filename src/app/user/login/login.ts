import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user';
import { UserStoreService } from '../../shared/services/user-store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private userStore: UserStoreService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.invalid) return;

    const { username, password } = this.form.value;

    this.userService.login(username!, password!).subscribe({
      next: (res: any) => {
        console.log('LOGIN OK', res);
        this.userStore.setToken(res.token);
      },
      error: (err) => {
        console.error('LOGIN ERROR', err);
      },
    });
  }
}
