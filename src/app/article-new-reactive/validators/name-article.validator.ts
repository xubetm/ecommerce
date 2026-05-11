import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NameArticleValidator {
  static forbiddenNames(forbidden: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const value = control.value.toLowerCase();

      const isForbidden = forbidden.some((name) => name.toLowerCase() === value);

      return isForbidden ? { forbiddenName: true } : null;
    };
  }
}
