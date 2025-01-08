import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UrlTrackingService } from '../../services/url-tracking.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  currentUrl: string = '';
  constructor(
    private router: Router,
    private urlTrackingService: UrlTrackingService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects; 
        this.urlTrackingService.updateUrl(url)
      });
      this.urlTrackingService.currentUrl.subscribe((url) => {
        this.currentUrl = url;
      });
    }
}
