import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Tracking - Acme Corporation Site Information',
  description: 'View current site data, version information, and tracking details for web crawling verification.',
};

export default function DataTrackingPage() {
  const lastUpdated = new Date().toISOString();
  const siteVersion = '3.0.0';
  const buildDate = new Date().toISOString().split('T')[0];

  // Site statistics
  const siteStats = {
    totalPages: 11,
    totalCustomers: 15000,
    totalInvoices: 75000,
    countriesServed: 52,
    teamMembers: 320,
    productsOffered: 4,
    faqCount: 20,
  };

  // Key data points that can be tracked
  const trackableData = {
    companyName: 'Acme Corporation',
    foundedDate: '2017-03-22',
    headquarters: {
      street: '789 Innovation Drive',
      city: 'San Francisco',
      state: 'CA',
      zip: '94107',
      country: 'United States',
    },
    contact: {
      email: 'info@acme.com',
      phone: '+1 (555) 987-6543',
      supportEmail: 'support@acme.com',
    },
    socialMedia: {
      linkedin: 'acme-corporation',
      twitter: '@acmecorp',
      facebook: 'acmecorporation',
    },
    awards: [
      'Best Business Software 2024',
      'Top 5 SaaS Platform 2024',
      'Customer Choice Award 2023',
      'Innovation in Business Tools 2023',
    ],
  };

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${lusitana.className} text-4xl font-bold mb-2`}>
          Data Tracking & Site Information
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          This page contains key data points and version information for web crawling verification
        </p>

        <div
          itemScope
          itemType="https://schema.org/WebSite"
          className="space-y-6"
        >
          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Site Version Information</h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Site Version:</span>
                <span className="font-semibold" data-site-version={siteVersion}>{siteVersion}</span>
              </div>
              <div className="flex justify-between">
                <span>Build Date:</span>
                <span className="font-semibold" data-build-date={buildDate}>{buildDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated:</span>
                <span className="font-semibold">
                  <time dateTime={lastUpdated} data-last-updated={lastUpdated}>
                    {new Date(lastUpdated).toLocaleString()}
                  </time>
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Site Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 bg-blue-50 rounded">
                <div className="text-2xl font-bold text-blue-600">{siteStats.totalPages}</div>
                <div className="text-sm text-gray-600">Total Pages</div>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <div className="text-2xl font-bold text-green-600">{siteStats.totalCustomers.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Customers</div>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <div className="text-2xl font-bold text-purple-600">{siteStats.totalInvoices.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Invoices</div>
              </div>
              <div className="p-3 bg-orange-50 rounded">
                <div className="text-2xl font-bold text-orange-600">{siteStats.countriesServed}</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="p-3 bg-pink-50 rounded">
                <div className="text-2xl font-bold text-pink-600">{siteStats.teamMembers}</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded">
                <div className="text-2xl font-bold text-indigo-600">{siteStats.productsOffered}</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
            <div
              itemScope
              itemType="https://schema.org/Organization"
              className="space-y-3 text-gray-700"
            >
              <div>
                <strong>Company Name:</strong>
                <div itemProp="name" data-company-name={trackableData.companyName}>
                  {trackableData.companyName}
                </div>
              </div>
              <div>
                <strong>Founded:</strong>
                <div>
                  <time itemProp="foundingDate" dateTime={trackableData.foundedDate} data-founded-date={trackableData.foundedDate}>
                    {new Date(trackableData.foundedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
              </div>
              <div>
                <strong>Headquarters:</strong>
                <address
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                  className="not-italic"
                >
                  <div itemProp="streetAddress" data-hq-street={trackableData.headquarters.street}>
                    {trackableData.headquarters.street}
                  </div>
                  <div>
                    <span itemProp="addressLocality" data-hq-city={trackableData.headquarters.city}>
                      {trackableData.headquarters.city}
                    </span>, 
                    <span itemProp="addressRegion" data-hq-state={trackableData.headquarters.state}>
                      {' '}{trackableData.headquarters.state}
                    </span>{' '}
                    <span itemProp="postalCode" data-hq-zip={trackableData.headquarters.zip}>
                      {trackableData.headquarters.zip}
                    </span>
                  </div>
                  <div itemProp="addressCountry" data-hq-country={trackableData.headquarters.country}>
                    {trackableData.headquarters.country}
                  </div>
                </address>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2 text-gray-700">
              <div>
                <strong>Email:</strong>
                <div itemProp="email" data-contact-email={trackableData.contact.email}>
                  {trackableData.contact.email}
                </div>
              </div>
              <div>
                <strong>Phone:</strong>
                <div itemProp="telephone" data-contact-phone={trackableData.contact.phone}>
                  {trackableData.contact.phone}
                </div>
              </div>
              <div>
                <strong>Support Email:</strong>
                <div data-support-email={trackableData.contact.supportEmail}>
                  {trackableData.contact.supportEmail}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
            <ul className="space-y-2" data-awards-count={trackableData.awards.length}>
              {trackableData.awards.map((award, idx) => (
                <li key={idx} className="text-gray-700" data-award={award}>
                  🏆 {award}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Tracking Instructions</h2>
            <p className="text-gray-700 mb-4">
              This page contains structured data with <code className="bg-gray-200 px-2 py-1 rounded">data-*</code> attributes
              that can be used to track changes. Key elements include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Version numbers (<code className="bg-gray-200 px-1 rounded">data-site-version</code>)</li>
              <li>Dates and timestamps (<code className="bg-gray-200 px-1 rounded">data-last-updated</code>, <code className="bg-gray-200 px-1 rounded">data-build-date</code>)</li>
              <li>Company information (<code className="bg-gray-200 px-1 rounded">data-company-name</code>, <code className="bg-gray-200 px-1 rounded">data-founded-date</code>)</li>
              <li>Contact details (<code className="bg-gray-200 px-1 rounded">data-contact-email</code>, <code className="bg-gray-200 px-1 rounded">data-contact-phone</code>)</li>
              <li>Location data (<code className="bg-gray-200 px-1 rounded">data-hq-*</code> attributes)</li>
            </ul>
          </section>

          <div className="text-sm text-gray-500 text-center pt-4 border-t">
            <p>Tracking Page Version: <span data-version={siteVersion}>{siteVersion}</span></p>
            <p>Last Updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleString()}</time></p>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              href="/"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

