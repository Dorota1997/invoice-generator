import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { CompanyInfo } from '../../models/company-info.model';
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
  private companyService = inject(CompanyService);

  companyInfo!: CompanyInfo | null;
  isLoading = true;

  ngOnInit(): void {
    this.loadCompanyInfo();
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
