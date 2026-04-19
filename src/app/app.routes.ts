import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'Golden Key Lock Repairing EST - Dubai'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
    title: 'About Us - Golden Key Lock Repairing EST'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then(m => m.Services),
    title: 'Our Services - Golden Key Lock Repairing EST'
  },
  {
    path: 'service-area',
    loadComponent: () =>
      import('./pages/service-area/service-area').then(m => m.ServiceArea),
    title: 'Service Area - Golden Key Lock Repairing EST'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact Us - Golden Key Lock Repairing EST'
  },
  { path: '**', redirectTo: '' }
];