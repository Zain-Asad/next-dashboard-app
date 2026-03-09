import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Acme Corporation',
  description: 'Contact Acme Corporation for sales inquiries, customer support, partnerships, or general questions. We\'re here to help your business succeed.',
};

export default function ContactPage() {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const contactVersion = '3.0.0';

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${lusitana.className} text-4xl font-bold mb-2`}>
          Contact Us
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          We'd love to hear from you. Get in touch with our team for any questions or inquiries.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <section
            itemScope
            itemType="https://schema.org/ContactPage"
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h2 className="text-2xl font-semibold mb-4">Office Information</h2>
            <address
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="not-italic text-gray-700 space-y-2"
            >
              <div>
                <strong>Headquarters:</strong>
                <div itemProp="streetAddress">789 Innovation Drive</div>
                <div>
                  <span itemProp="addressLocality">San Francisco</span>, 
                  <span itemProp="addressRegion"> CA</span> 
                  <span itemProp="postalCode"> 94107</span>
                </div>
                <div itemProp="addressCountry">United States</div>
              </div>
            </address>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Contact Methods</h2>
            <div
              itemScope
              itemType="https://schema.org/Organization"
              className="space-y-3 text-gray-700"
            >
              <div>
                <strong>General Inquiries:</strong>
                <div itemProp="email">info@acme.com</div>
              </div>
              <div>
                <strong>Sales:</strong>
                <div itemProp="email">sales@acme.com</div>
                <div itemProp="telephone">+1 (555) 987-6000</div>
              </div>
              <div>
                <strong>Customer Support:</strong>
                <div itemProp="email">support@acme.com</div>
                <div itemProp="telephone">+1 (555) 987-6122</div>
                <div className="text-sm text-gray-600">Available 24/7</div>
              </div>
              <div>
                <strong>Partnerships:</strong>
                <div itemProp="email">partners@acme.com</div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <div className="text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span><strong>Monday - Friday:</strong></span>
              <span>9:00 AM - 6:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span><strong>Saturday:</strong></span>
              <span>10:00 AM - 4:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span><strong>Sunday:</strong></span>
              <span>Closed</span>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <p className="text-sm">
                <strong>Note:</strong> Customer support is available 24/7 via email and phone. 
                Sales inquiries are responded to within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regional Offices</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">New York Office</h3>
              <p className="text-sm">234 Market Plaza</p>
              <p className="text-sm">New York, NY 10002</p>
              <p className="text-sm">+1 (555) 876-5432</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">London Office</h3>
              <p className="text-sm">567 Corporate Center</p>
              <p className="text-sm">London, UK EC2A 2BB</p>
              <p className="text-sm">+44 20 9876 5432</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tokyo Office</h3>
              <p className="text-sm">890 Digital Tower</p>
              <p className="text-sm">Tokyo, Japan 100-0002</p>
              <p className="text-sm">+81 3 9876 5432</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sydney Office</h3>
              <p className="text-sm">123 Enterprise Way</p>
              <p className="text-sm">Sydney, Australia 2001</p>
              <p className="text-sm">+61 2 9876 5432</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
          <p className="text-gray-700 mb-4">
            Connect with us on social media for updates, news, and community discussions:
          </p>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              LinkedIn
            </a>
            <a href="#" className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
              Twitter
            </a>
            <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Facebook
            </a>
            <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Instagram
            </a>
          </div>
        </section>

        <div className="text-sm text-gray-500 text-center pt-4 border-t">
          <p>Contact Page Version: <span data-version={contactVersion}>{contactVersion}</span></p>
          <p>Last Updated: <time dateTime={lastUpdated}>{lastUpdated}</time></p>
        </div>

        <div className="flex gap-4 mt-6">
          <Link
            href="/"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/about"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </main>
  );
}

