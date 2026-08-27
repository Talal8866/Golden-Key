import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
 services = [
    {
      id: 'car-opening',
      title: 'Car Opening',
      tagline: 'Locked out? We\'re on our way.',
      icon: '🚗',
      image: '/images/car-opening.webp',
      imageAlt: 'Locksmith opening a car door using professional tools',
      desc: `Locked out of your car? Our roadside technicians will be at your rescue in no time.
             Equipped with innovative tools and gadgets, they will open your vehicle without
             denting or scratching it. Available 24/7 anywhere in Dubai.`,
      features: ['All makes & models', 'No damage guaranteed', 'Rapid response', '24/7 availability'],
    },
    {
      id: 'car-key-programming',
      title: 'Car Key Programming',
      tagline: 'Lost your car key? We\'ll make a new one.',
      icon: '🔑',
      image: '/images/programing.webp',
      imageAlt: 'Assorted car key remotes and transponder keys at Golden Key Dubai',
      desc: `With the innovative tools we possess, we fabricate and program a new car key for your
             vehicle. The new key carries out all the functions of the original — including
             transponder chips and remote control features — without any side effects on the car.`,
      features: ['All major brands', 'Transponder key cutting', 'Remote programming', 'Smart key duplication'],
    },
    {
      id: 'lock-installation',
      title: 'Lock Installation',
      tagline: 'Secure your space with expert fitting.',
      icon: '🔒',
      image: '/images/installation.webp',
      imageAlt: 'High security door lock installation by professional locksmith',
      desc: `We install secure locks for your doors, safes, and more. We make it easy for you
             to secure your valuables without putting you under any pressure, while making it
             very hard for intruders to gain access.`,
      features: ['High-security door locks', 'Safe installation', 'Deadbolt upgrades', 'Insurance-grade locks'],
    },
    {
      id: 'safe-box-opening',
      title: 'Safe Box Opening',
      tagline: 'Can\'t open your safe? We can.',
      icon: '🗄️',
      image: '/images/safe.webp',
      imageAlt: 'Combination safe box being opened by professional locksmith',
      desc: `Is opening your safe box becoming too complicated? Golden Key Repairing Establishment is here
             to assist you in opening any safe deposit box to retrieve your valuable items —
             quickly, professionally, and without damage.`,
      features: ['All safe brands', 'Combination recovery', 'No safe damage', 'Confidential service'],
    },
    {
      id: 'residential-door',
      title: 'Residential Door Opening',
      tagline: 'Locked out of your home? Call Us.',
      icon: '🏠',
      image: '/images/residential.webp',
      imageAlt: 'Residential door lock replacement and opening service in Dubai',
      desc: `We offer unlock services for residential apartments and villas. We change residential
             locks and keys, sell, install, and service a wide variety of residential locks.
             Drawer opening, door opening, and lock changing — all handled by experts.`,
      features: ['Apartment lockouts', 'Lock change & rekey', 'Drawer & cabinet locks', 'All door types'],
    },
    {
      id: 'electronic-access',
      title: 'Electronic Locks & Access',
      tagline: 'Modern security for the modern world.',
      icon: '💳',
      image: '/images/smartlock.webp',
      imageAlt: 'Electronic lock and access card system installation in Dubai',
      desc: `Our shop stocks access cards, parking remotes, parking cards, electronic locks, master
             key systems, smart keys, car remotes, and missing high-security door keys.
             All modern security solutions handled by certified technicians.`,
      features: ['Access card systems', 'Parking remotes & cards', 'Electronic lock fitting', 'Master key systems'],
    },
  ];
 
  roadsidePartners = [
    'Land Rover', 'Jaguar', 'Ford Lincoln Mercury',
    'Porsche', 'Audi', 'Ferrari & Maserati',
    'Chevrolet GMC', 'CADILLAC',
  ];
}
