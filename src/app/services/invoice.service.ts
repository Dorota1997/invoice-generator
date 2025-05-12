import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InvoiceItem } from '../models/invoice-item.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private itemsSubject = new BehaviorSubject<InvoiceItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  setItems(items: InvoiceItem[]): void {
    this.itemsSubject.next(items);
  }

  getItems(): InvoiceItem[] {
    return this.itemsSubject.value;
  }

  calculateTotal(items: InvoiceItem[]): number {
    return items.reduce((sum, item) => sum + item.count * item.price, 0);
  }
}
