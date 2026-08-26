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
  styleUrl: './contact.scss',
})
export class Contact {
 submitted = signal(false);
  loading = signal(false);
  error = signal<string | null>(null);
 
  private readonly FORMSPREE_URL = 'https://formspree.io/f/xqewykzz';
 
  form: ContactForm = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
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
        'Shop 34, Kuwait Street',
        'Next to Life Pharmacy - Al Karama',
        'Dubai, U.A.E.',
      ],
      action: 'https://maps.app.goo.gl/k62D6DB4zTfERHJKA',
    },
  ];
 
  async onSubmit(): Promise<void> {
    // Client-side guard: name + phone are required
    if (!this.form.name.trim() || !this.form.phone.trim()) {
      this.error.set('Please fill in your name and phone number.');
      return;
    }
 
    this.loading.set(true);
    this.error.set(null);
 
    try {
      const response = await fetch(this.FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email || '(not provided)',
          service: this.form.service || '(not selected)',
          message: this.form.message || '(no message)',
        }),
      });
 
      if (response.ok) {
        this.submitted.set(true);
      } else {
        // Formspree returns JSON errors on 4xx/5xx
        const data = await response.json().catch(() => ({}));
        const msg =
          (data as any)?.errors?.[0]?.message ??
          'Something went wrong. Please try again or call us directly.';
        this.error.set(msg);
      }
    } catch {
      this.error.set('Network error. Please check your connection and try again.');
    } finally {
      this.loading.set(false);
    }
  }
 
  resetForm(): void {
    this.submitted.set(false);
    this.error.set(null);
    this.form = { name: '', phone: '', email: '', service: '', message: '' };
  }

  mapLoaded = signal(false);
 
  loadMap() {
    this.mapLoaded.set(true);
  }
}
