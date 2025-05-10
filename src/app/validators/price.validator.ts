import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function priceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value === null || value === undefined) {
      return { required: true };
    }

    if (!Number.isInteger(value)) {
      return { integer: true };
    }

    if (value < 1 || value > 1000000) {
      return { range: { min: 1, max: 1000000 } };
    }

    return null;
  };
}
