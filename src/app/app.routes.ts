import { Routes } from '@angular/router';

import { SeoData } from './shared/services/seo';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'Locksmith in Dubai | Golden Key Locks Repairing Establishment',
    data: {
      seo: {
        title: 'Locksmith in Dubai | Golden Key Locks Repairing Establishment',
        description: 'Trusted locksmith in Dubai since 1989. 24/7 emergency car lockout, key programming, lock installation & safe opening in Al Karama. Call 0506512422.',
        path: '/'
      } satisfies SeoData
    }
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
    title: 'About Us | Golden Key Locks Repairing Establishment Dubai',
    data: {
      seo: {
        title: 'About Us | Golden Key Locks Repairing Establishment Dubai',
        description: 'Golden Key Locks Repairing Establishment has served Dubai since 1989. Learn about our licensed, insured locksmith team trusted by Emirates Airlines and Dragon Oil.',
        path: '/about/'
      } satisfies SeoData
    }
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then(m => m.Services),
    title: 'Locksmith Services in Dubai | Golden Key Locks Repairing Establishment',
    data: {
      seo: {
        title: 'Locksmith Services in Dubai | Golden Key Locks Repairing Establishment',
        description: 'Full locksmith services in Dubai: car opening, key programming, lock installation, safe opening & electronic access. 24/7 dispatch across Dubai. Call 0506512422.',
        path: '/services/'
      } satisfies SeoData
    }
  },
  {
    path: 'service-area',
    loadComponent: () =>
      import('./pages/service-area/service-area').then(m => m.ServiceArea),
    title: 'Locksmith Near Me | Dubai-Wide Coverage | Golden Key',
    data: {
      seo: {
        title: 'Locksmith Near Me | Dubai-Wide Coverage | Golden Key',
        description: 'Searching for a locksmith near me in Dubai? Golden Key dispatches from Al Karama to every Dubai district — Marina, Deira, Bur Dubai & beyond. Fast response, 24/7.',
        path: '/service-area/'
      } satisfies SeoData
    }
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact Us | Golden Key Locks Repairing Establishment Dubai',
    data: {
      seo: {
        title: 'Contact Us | Golden Key Locks Repairing Establishment Dubai',
        description: 'Contact Golden Key Locks Repairing Establishment in Al Karama, Dubai. Call 0506512422 or 0507751708 for 24/7 emergency locksmith service.',
        path: '/contact/'
      } satisfies SeoData
    }
  },
  { path: '**', redirectTo: '' }
];