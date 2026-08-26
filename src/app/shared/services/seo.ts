import { Injectable, Inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  /** Path only, e.g. '/services/' — the domain is prepended automatically */
  path: string;
  ogImage?: string;
}

const SITE_URL = 'https://goldenkeyuae.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/shop-exterior-2.webp`;

@Injectable({ providedIn: 'root' })
export class Seo {
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  update(data: SeoData): void {
    const url = `${SITE_URL}${data.path}`;
    const ogImage = data.ogImage ?? DEFAULT_OG_IMAGE;

    // <title>
    this.title.setTitle(data.title);

    // Standard description
    this.meta.updateTag({ name: 'description', content: data.description });

    // Canonical — Angular has no built-in helper for <link>, so we manage it directly
    this.setCanonical(url);

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: ogImage });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
