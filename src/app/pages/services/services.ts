import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      id: 'car-opening',
      title: 'Car Opening',
      tagline: 'Locked out? We are on our way.',
      icon: '🚗',
      desc: `Locked out of your car? This can be a very stressful situation. But with us, no need to panic.
             Our roadside technicians will be at your rescue in no time. Equipped with innovative tools and gadgets,
             they will open your vehicle for you without denting or scratching it.`,
      features: [
        'All makes & models',
        'No damage guaranteed',
        'Rapid response times',
        '24/7 availability',
      ],
    },
    {
      id: 'car-key-programming',
      title: 'Car Key Programming',
      tagline: 'Lost your car key? We\'ll make a new one.',
      icon: '🔑',
      desc: `With the innovative tools we possess, we can fabricate and program a new car key for your vehicle to replace
             the lost one. The new key will be able to carry out all the functions of the old key without any harmful
             side effect on the car — including transponder chips and remote functions.`,
      features: [
        'All major car brands',
        'Transponder key cutting',
        'Remote programming',
        'Smart key duplication',
      ],
    },
    {
      id: 'lock-installation',
      title: 'Lock Installation',
      tagline: 'Secure your space with expert fitting.',
      icon: '🔒',
      desc: `We install secure locks for your doors, safes, and so on. We understand that in this critical time, security
             is a necessity. We make it easy for you to secure your valuables without putting you under any tension or
             pressure, while we make it hard for intruders to lay hands on them.`,
      features: [
        'High-security door locks',
        'Safe installation',
        'Deadbolt upgrades',
        'Insurance-grade locks',
      ],
    },
    {
      id: 'safe-box-opening',
      title: 'Safe Box Opening',
      tagline: 'Can\'t open your safe? We can.',
      icon: '🗄️',
      desc: `Is opening your safe box becoming too complicated for you? Golden Key Repairing EST is here to assist you
             in opening that safe deposit box for you to retrieve your valuable items — quickly, professionally, and
             without damage.`,
      features: [
        'All safe brands & models',
        'Combination recovery',
        'No safe damage',
        'Confidential service',
      ],
    },
    {
      id: 'residential-door',
      title: 'Residential Door Opening',
      tagline: 'Locked out of your home? Call us.',
      icon: '🏠',
      desc: `We offer unlock services for residential apartments and villas. We can also change residential locks and keys.
             We sell, install, and service a wide variety of residential locks. Also, we do all kinds of door opening,
             drawer opening, and locks changing.`,
      features: [
        'Apartment lockouts',
        'Lock change & rekey',
        'Drawer & cabinet locks',
        'All door types',
      ],
    },
    {
      id: 'electronic-access',
      title: 'Electronic Locks & Access',
      tagline: 'Modern security for the modern world.',
      icon: '💳',
      desc: `Our retail shop offers door handles, drawer locks, padlocks, tools, key cutting, car keys, car remote,
             smart keys, key chains, access cards, parking remote, parking card, electronic locks, master key making,
             missing car keys, and missing high-security door keys.`,
      features: [
        'Access card systems',
        'Parking remotes & cards',
        'Electronic lock fitting',
        'Master key systems',
      ],
    },
  ];
 
  roadsidePartners = [
    'Land Rover', 'Jaguar', 'Ford Lincoln Mercury',
    'Porsche', 'Audi', 'Ferrari & Maserati',
    'Chevrolet GMC', 'CADILLAC',
  ];
}
