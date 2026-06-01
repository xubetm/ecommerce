import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  form;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService,
    private router: Router,
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

        this.notificationService.show('Registro completado ✔');

        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('REGISTER ERROR', err);

        this.notificationService.show('Error en el registro ❌');
      },
    });
  }
}
