import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
interface ContactForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 submitted = signal(false);
 
  form: ContactForm = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };
 
  services = [
    'Car Opening',
    'Car Key Programming',
    'Lock Installation',
    'Safe Box Opening',
    'Residential Door Opening',
    'Electronic Locks & Access Cards',
    'Master Key Making',
    'Other',
  ];
 
  contactInfo = [
    {
      icon: 'phone',
      label: 'Mobile Numbers',
      lines: ['0506512422', '0507751708'],
      action: 'tel:0506512422',
    },
    {
      icon: 'landline',
      label: 'Landline & Fax',
      lines: ['Landline: 043350177', 'Fax: 043355583'],
      action: 'tel:043350177',
    },
    {
      icon: 'email',
      label: 'Email Address',
      lines: ['goldenkey89@hotmail.com'],
      action: 'mailto:goldenkey89@hotmail.com',
    },
    {
      icon: 'location',
      label: 'Shop Address',
      lines: [
        'Next to Families Supermarket',
        'Al Kwuait Street - Al Karama',
        'Dubai, U.A.E.',
      ],
      action: 'https://maps.google.com/?q=Al+Karama+Dubai',
    },
  ];
 
  onSubmit() {
    // Static site: just show success state
    if (this.form.name && this.form.phone) {
      this.submitted.set(true);
    }
  }
 
  resetForm() {
    this.submitted.set(false);
    this.form = { name: '', phone: '', email: '', service: '', message: '' };
  }
}
