import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-area',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-area.html',
  styleUrl: './service-area.scss',
})
export class ServiceArea {
 primaryAreas = [
    { name: 'Al Karama',          desc: 'Our home base — fastest response times guaranteed.' },
    { name: 'Bur Dubai',          desc: 'Full locksmith coverage across the Bur Dubai district.' },
    { name: 'Deira',              desc: 'Serving all Deira neighborhoods and business districts.' },
    { name: 'Jumeirah',           desc: 'Residential and commercial locksmith services.' },
    { name: 'Al Barsha',          desc: 'Rapid response to Al Barsha apartments and villas.' },
    { name: 'Downtown Dubai',     desc: 'High-rise lockouts and lock installation experts.' },
    { name: 'Dubai Marina',       desc: 'Marina, JBR and waterfront residence coverage.' },
    { name: 'Satwa & Mankhool',   desc: 'Dense residential area — quick deployment.' },
    { name: 'Al Quoz',            desc: 'Industrial and residential locksmith services.' },
    { name: 'Oud Metha',          desc: 'Hospital area and surroundings coverage.' },
    { name: 'Al Nahda',           desc: 'Border zone — both Dubai & Sharjah side covered.' },
    { name: 'Al Qusais',          desc: 'Full coverage including Airport Free Zone area.' },
  ];
 
  serviceTypes = [
    { icon: '🚗', label: 'Car Lockouts' },
    { icon: '🏠', label: 'Residential' },
    { icon: '🏢', label: 'Commercial' },
    { icon: '🛣️', label: 'Roadside Assist' },
    { icon: '💳', label: 'Electronic Locks' },
    { icon: '🔑', label: 'Key Cutting' },
  ];
}
