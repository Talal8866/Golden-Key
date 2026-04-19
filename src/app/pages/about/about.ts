import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
 coreValues = [
    {
      icon: '⚡',
      title: 'Timely',
      desc: 'We are available 24/7, at the fingertips of our clients. We have the capability of arriving at the scene promptly and swiftly delivering the service you called us for.'
    },
    {
      icon: '🎯',
      title: 'Efficiency',
      desc: 'We have perfected our locksmith skills over the years we have been practicing. We are highly efficient at delivering quality services to our clients.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      desc: 'Our services depend largely on trust — the client having absolute confidence in us. Our technicians are honest and our teaming clients attest to that.'
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      desc: 'Our clients can take our word for it. We are insured and fully licensed, so our clients have absolutely nothing to fear when we handle their needs.'
    },
  ];
 
  milestones = [
    { year: '1989', event: 'Golden Key Lock Repairing EST founded in Karama, Dubai.' },
    { year: '2000', event: 'Expanded service fleet with dedicated mobile locksmith units.' },
    { year: '2010', event: 'Partnered with top automotive roadside assistance programs.' },
    { year: '2015', event: 'Introduced electronic lock, smart key & access card services.' },
    { year: '2024', event: 'Serving 10,000+ clients with a 35-year legacy of excellence.' },
  ];
 
  clients = ['MERAS', 'Dragon Oil (Enoc & Epco)', 'Millennium Tower Hotel (The First Group)', 'Emirates Airlines', '3M Gulf Limited'];
}
