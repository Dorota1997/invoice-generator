import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { InvoiceItem } from '../../models/invoice-item.model';
import { CompanyInfo } from '../../models/company-info.model';
import { InvoiceService } from '../../services/invoice.service';
import { CompanyService } from '../../services/company.service';
import { materialModules } from '../../shared/material-imports';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ...materialModules],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  private invoiceService = inject(InvoiceService);
  private companyService = inject(CompanyService);

  companyInfo!: CompanyInfo | null;
  items: InvoiceItem[] = [];
  total = 0;
  isLoading = true;
  dataSource: InvoiceItem[] = [];
  displayedColumns: string[] = ['name', 'count', 'price'];

  ngOnInit(): void {
    this.loadInvoiceItems();
    this.loadCompanyInfo();
  }

  private async loadInvoiceItems(): Promise<void> {
    this.items = this.invoiceService.getItems();
    this.total = this.invoiceService.calculateTotal(this.items);
    this.dataSource = this.items;
  }

  private async loadCompanyInfo(): Promise<void> {
    try {
      const data = await firstValueFrom(this.companyService.getCompanyInfo());
      this.companyInfo = data;
    } catch (error) {
      this.companyInfo = null;
    } finally {
      this.isLoading = false;
    }
  }
}
