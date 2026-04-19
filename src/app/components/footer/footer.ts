import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Service Area', path: '/service-area' },
    { label: 'Contact Us', path: '/contact' },
  ];

  services = [
    'Car Opening',
    'Car Key Programming',
    'Lock Installation',
    'Safe Box Opening',
    'Residential Door Opening',
    'Electronic Locks',
    'Master Key Making',
    'Access Cards & Remote',
  ];
}
