import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
stats = [
    { number: '35+', label: 'Years of Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '100%', label: 'Licensed & Insured' },
  ];
 
  services = [
    {
      icon: 'car',
      title: 'Car Opening',
      desc: 'Locked out of your car? Our roadside technicians will be at your rescue with innovative tools — no dents, no damage.',
    },
    {
      icon: 'key',
      title: 'Car Key Programming',
      desc: 'We fabricate and program new car keys with full functionality to replace lost or damaged originals.',
    },
    {
      icon: 'lock',
      title: 'Lock Installation',
      desc: 'High-security lock installation for doors, safes and more. Expert-fitted to protect what matters most.',
    },
    {
      icon: 'safe',
      title: 'Safe Box Opening',
      desc: 'Forgotten your safe combination? We assist in opening any safe deposit box to retrieve your valuables.',
    },
    {
      icon: 'home',
      title: 'Residential Door Opening',
      desc: 'Full residential unlock, lock replacement and key cutting services for apartments and homes.',
    },
    {
      icon: 'chip',
      title: 'Electronic Locks & Access',
      desc: 'Smart keys, access cards, parking cards, electronic locks, and master key making for modern security needs.',
    },
  ];
 
  whyUs = [
    { icon: '🕐', title: '24/7 Emergency Service', desc: 'Lockouts don\'t follow a schedule. Our rapid-response team is always at your fingertips.' },
    { icon: '🛡️', title: 'Insured & Licensed',     desc: 'Fully insured and licensed so our clients have absolute peace of mind.' },
    { icon: '⚡', title: 'Fast & Reliable',         desc: '35+ years of prompt, quality service. We respond as soon as you call in.' },
    { icon: '👥', title: 'Dedicated Team',           desc: 'Expert technicians driven by your satisfaction. We deliver the best to suit your needs.' },
  ];
 
  clients = ['MERAS', 'Dragon Oil (Enoc & Epco)', 'Millennium Tower Hotel', 'Emirates Airlines', '3M Gulf Limited'];
}
