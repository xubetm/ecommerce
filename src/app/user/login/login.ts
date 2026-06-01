import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user';
import { UserStoreService } from '../../shared/services/user-store';
import { NotificationService } from '../../shared/services/notification.service';

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
    private notificationService: NotificationService,
    private userStore: UserStoreService,
    private router: Router,
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

        this.notificationService.show('Login correcto ✔');

        this.router.navigate(['/article/list']);
      },
      error: (err) => {
        console.error('LOGIN ERROR', err);

        this.notificationService.show('Usuario o contraseña incorrectos ❌');
      },
    });
  }
}
