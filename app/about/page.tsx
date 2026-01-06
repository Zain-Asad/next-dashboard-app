import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Acme Corporation - Our Story, Mission, and Values',
  description: 'Learn about Acme Corporation, our mission to revolutionize business management, company history since 2015, core values, and our commitment to customer success.',
};

export default function AboutPage() {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const companyVersion = '2.1.0';
  
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${lusitana.className} text-4xl font-bold mb-6`} itemProp="name">
          About Acme Corporation
        </h1>
        
        <div itemScope itemType="https://schema.org/Organization" className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Acme Corporation was founded on <time itemProp="foundingDate" dateTime="2015-01-15">January 15, 2015</time> 
              by a team of experienced entrepreneurs and software engineers who recognized the need for a more 
              integrated approach to business management. What started as a small startup in San Francisco has 
              grown into a global platform serving over <strong>10,000 businesses</strong> across <strong>45 countries</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey began when our founders, frustrated with the complexity of existing business management 
              tools, decided to build a solution that was both powerful and intuitive. Today, we're proud to be 
              recognized as one of the leading business management platforms in the industry.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong itemProp="slogan">"Empowering businesses to thrive through intelligent management solutions"</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that every business, regardless of size, deserves access to enterprise-grade management tools. 
              Our mission is to democratize business intelligence and make sophisticated management capabilities 
              accessible to all.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Innovation:</span>
                <span>We continuously push the boundaries of what's possible in business management technology.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Customer-Centricity:</span>
                <span>Our customers' success is our success. We listen, adapt, and evolve based on their needs.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Integrity:</span>
                <span>We operate with transparency, honesty, and ethical practices in everything we do.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Excellence:</span>
                <span>We strive for excellence in product quality, customer service, and user experience.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Company Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm text-gray-600 mt-1">Active Customers</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">45</div>
                <div className="text-sm text-gray-600 mt-1">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">250</div>
                <div className="text-sm text-gray-600 mt-1">Team Members</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">9</div>
                <div className="text-sm text-gray-600 mt-1">Years in Business</div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
            <ul className="space-y-2 text-gray-700">
              <li>🏆 <strong>Best Business Software 2023</strong> - TechReview Awards</li>
              <li>⭐ <strong>Top 10 SaaS Platform 2023</strong> - TechReview Magazine</li>
              <li>🎯 <strong>Customer Choice Award 2022</strong> - Business Software Association</li>
              <li>💡 <strong>Innovation in Business Tools 2021</strong> - Industry Innovation Council</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="not-italic text-gray-700">
              <div itemProp="streetAddress">123 Business Avenue</div>
              <div>
                <span itemProp="addressLocality">San Francisco</span>, 
                <span itemProp="addressRegion"> CA</span> 
                <span itemProp="postalCode"> 94105</span>
              </div>
              <div itemProp="addressCountry">United States</div>
            </address>
          </section>

          <div className="text-sm text-gray-500 text-center pt-4 border-t">
            <p>Page Version: <span data-version={companyVersion}>{companyVersion}</span></p>
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
              href="/contact"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

