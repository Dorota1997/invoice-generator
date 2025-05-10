import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function countValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value === null || value === undefined) {
      return { required: true };
    }

    if (!Number.isInteger(value)) {
      return { integer: true };
    }

    if (value < 1 || value > 100) {
      return { range: { min: 1, max: 100 } };
    }

    return null;
  };
}
