import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserStoreService } from '../services/user-store';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const userStore = inject(UserStoreService);
  const router = inject(Router);

  if (userStore.isLoggedIn()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
