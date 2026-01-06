import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard - Business Management Platform',
  description: 'Acme is a leading business management platform providing comprehensive solutions for customer management, invoicing, and analytics. Founded in 2015, serving over 10,000 businesses worldwide.',
  keywords: 'business management, dashboard, invoicing, customer management, analytics, Acme',
  authors: [{ name: 'Acme Corporation' }],
  openGraph: {
    title: 'Acme Dashboard - Business Management Platform',
    description: 'Comprehensive business management solutions for modern companies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Acme Corporation',
    url: 'https://acme-dashboard.com',
    logo: 'https://acme-dashboard.com/logo.png',
    description: 'Leading business management platform providing comprehensive solutions for customer management, invoicing, and analytics',
    foundingDate: '2015-01-15',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 250
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Avenue',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'Customer Service',
      email: 'support@acme.com'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
