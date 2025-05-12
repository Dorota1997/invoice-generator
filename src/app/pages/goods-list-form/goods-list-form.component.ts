import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

import { InvoiceService } from '../../services/invoice.service';
import { materialModules } from '../../shared/material-imports';
import { nameValidator, countValidator, priceValidator } from '../../validators';

@Component({
  selector: 'app-goods-list-form',
  imports: [CommonModule, ReactiveFormsModule, ...materialModules],
  templateUrl: './goods-list-form.component.html',
  styleUrl: './goods-list-form.component.scss',
})
export class GoodsListFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private invoiceService = inject(InvoiceService);
  invoiceForm!: FormGroup;
  errorMessage = '';

  ngOnInit(): void {
    this.invoiceForm = this.createForm();
    this.addItem();
  }

  get items(): FormArray<FormGroup> {
    return this.invoiceForm.get('items') as FormArray<FormGroup>;
  }

  private createForm(): FormGroup {
    return this.fb.group({
      items: this.fb.array([]),
    });
  }

  private createItem(): FormGroup {
    return this.fb.group({
      name: ['', nameValidator()],
      count: [1, countValidator()],
      price: [1, priceValidator()],
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.items.length) {
      this.errorMessage = 'Please add items';
      return;
    }

    const isAnyValid = this.items.controls.some((item) => item.valid);

    if (isAnyValid) {
      this.invoiceService.setItems(this.items.value);
      this.router.navigate(['/summary']);
    } else {
      this.errorMessage = 'Please correct errors before submitting';
    }
  }
}
