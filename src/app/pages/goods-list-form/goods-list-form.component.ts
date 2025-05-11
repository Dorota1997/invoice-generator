import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-goods-list-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './goods-list-form.component.html',
  styleUrl: './goods-list-form.component.scss',
})
export class GoodsListFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  ngOnInit(): void {
    this.invoiceForm = this.createForm();
  }
  private createForm(): FormGroup {
    return this.fb.group({
      items: this.fb.array([]),
    });
  }
}
