import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlTrackingService {
  private selectedUrlSource = new BehaviorSubject<string>('');
  currentUrl = this.selectedUrlSource.asObservable();
  constructor() { }
  updateUrl(url: string): void {
    this.selectedUrlSource.next(url);
  }
}
