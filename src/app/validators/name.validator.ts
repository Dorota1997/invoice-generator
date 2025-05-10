import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return { required: true };
    }

    if (value.length < 3) {
      return { minlength: { requiredLength: 3, actualLength: value.length } };
    }

    if (value.length > 30) {
      return { maxlength: { requiredLength: 30, actualLength: value.length } };
    }

    return null;
  };
}
