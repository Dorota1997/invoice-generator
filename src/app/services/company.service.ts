import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { CompanyInfo } from '../models/company-info.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private http = inject(HttpClient);

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>('/company.json');
  }
}
