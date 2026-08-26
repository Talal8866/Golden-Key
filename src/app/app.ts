import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Seo, SeoData } from './shared/services/seo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar />
    <main id="main-content">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    main { min-height: calc(100vh - 80px); }
  `]
})
export class AppComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private seo = inject(Seo);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const seoData = data['seo'] as SeoData | undefined;
        if (seoData) {
          this.seo.update(seoData);
        }
      });
  }
}