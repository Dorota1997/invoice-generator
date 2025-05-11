import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
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
  ngOnInit(): void {
    this.invoiceForm = this.createForm();
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

}
