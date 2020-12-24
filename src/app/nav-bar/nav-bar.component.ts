import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private scrollToService: ScrollToService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const config: ScrollToConfigOptions = {
          target: event.urlAfterRedirects.replace('/', '#')
        };
        setTimeout(() => {
          this.scrollToService.scrollTo(config);
        }, 100);
      }
    });
  }

  ngOnInit(): void {
  }

}
