import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Acme Corporation FAQ',
  description: 'Find answers to common questions about Acme Corporation\'s business management platform, pricing, features, support, and more.',
};

export default function FAQPage() {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const faqVersion = '3.0.0';

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is Acme Corporation?',
          a: 'Acme Corporation is a leading provider of comprehensive business management solutions. We offer a unified platform that includes customer management, invoicing, analytics, and team collaboration tools designed to help businesses of all sizes streamline their operations.'
        },
        {
          q: 'When was Acme Corporation founded?',
          a: 'Acme Corporation was founded on March 22, 2017, in San Francisco, California. We have been serving businesses worldwide for over 7 years.'
        },
        {
          q: 'How many customers does Acme serve?',
          a: 'We currently serve over 15,000 active customers across 52 countries worldwide. Our customer base includes small businesses, mid-market companies, and large enterprises.'
        }
      ]
    },
    {
      category: 'Products & Features',
      questions: [
        {
          q: 'What products does Acme offer?',
          a: 'Acme offers four main product suites: Customer Management System (CRM), Advanced Invoicing Platform, Business Analytics Dashboard, and Team Collaboration Suite. Each product can be used independently or integrated together for a complete solution.'
        },
        {
          q: 'Can I integrate Acme with other business tools?',
          a: 'Yes! Acme integrates with popular business tools including Stripe, PayPal, QuickBooks, Xero, Slack, Microsoft Teams, Google Workspace, and Salesforce. We also offer custom API access for enterprise customers.'
        },
        {
          q: 'Is there a mobile app available?',
          a: 'Yes, Acme offers mobile applications for both iOS and Android devices. The mobile apps provide full access to customer management, invoicing, and analytics features on the go.'
        },
        {
          q: 'What security measures does Acme have in place?',
          a: 'Acme takes security seriously. We use industry-standard encryption (SSL/TLS), regular security audits, SOC 2 compliance, GDPR compliance, and offer two-factor authentication. Enterprise customers can also access advanced security features and compliance certifications.'
        }
      ]
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          q: 'What are the pricing options?',
          a: 'Our pricing starts at $35/month for basic plans. Customer Management starts at $59/month, Invoicing at $49/month, Analytics at $69/month, and Team Collaboration at $35/user/month. We also offer custom enterprise solutions with dedicated support.'
        },
        {
          q: 'Is there a free trial available?',
          a: 'Yes, we offer a 14-day free trial for all our products. No credit card required. You can explore all features during the trial period.'
        },
        {
          q: 'Can I cancel my subscription at any time?',
          a: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.'
        },
        {
          q: 'Do you offer discounts for annual plans?',
          a: 'Yes, we offer a 20% discount when you choose annual billing instead of monthly billing. This applies to all our product plans.'
        }
      ]
    },
    {
      category: 'Support & Service',
      questions: [
        {
          q: 'What support options are available?',
          a: 'We offer multiple support channels: 24/7 email support, phone support during business hours, live chat, comprehensive documentation, video tutorials, and webinars. Enterprise customers receive dedicated account managers and priority support.'
        },
        {
          q: 'How quickly do you respond to support requests?',
          a: 'Standard support requests are typically responded to within 4-6 hours during business hours. Enterprise customers receive priority support with guaranteed response times as outlined in their SLA (typically under 1 hour for critical issues).'
        },
        {
          q: 'Do you provide training for new users?',
          a: 'Yes, we offer comprehensive onboarding programs, live training sessions, video tutorials, documentation, and webinars. Enterprise customers can also access custom training programs tailored to their needs.'
        },
        {
          q: 'What is your uptime guarantee?',
          a: 'We maintain a 99.9% uptime SLA for all customers. Enterprise customers receive enhanced SLA guarantees with compensation for any downtime exceeding the agreed thresholds.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What are the system requirements?',
          a: 'Acme is a cloud-based platform accessible through any modern web browser (Chrome, Firefox, Safari, Edge). No installation required. Mobile apps require iOS 13+ or Android 8+.'
        },
        {
          q: 'Can I export my data?',
          a: 'Yes, you can export your data at any time in various formats (CSV, JSON, Excel). We also provide full data portability to ensure you maintain control of your information.'
        },
        {
          q: 'Is my data backed up?',
          a: 'Yes, all data is automatically backed up daily with point-in-time recovery available. We maintain multiple redundant backups across geographically distributed data centers.'
        },
        {
          q: 'Do you offer API access?',
          a: 'Yes, we provide comprehensive REST APIs for all our products. API documentation is available for all customers, and enterprise customers can access advanced API features and custom integrations.'
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${lusitana.className} text-4xl font-bold mb-2`}>
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Find answers to common questions about Acme Corporation and our products
        </p>

        <div
          itemScope
          itemType="https://schema.org/FAQPage"
          className="space-y-8"
        >
          {faqs.map((category, catIdx) => (
            <section key={catIdx} className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    itemScope
                    itemType="https://schema.org/Question"
                    className="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-600" itemProp="name">
                      {faq.q}
                    </h3>
                    <div
                      itemScope
                      itemType="https://schema.org/Answer"
                      className="text-gray-700"
                    >
                      <p itemProp="text">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mt-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            Can't find what you're looking for? Our support team is here to help. 
            Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View Products
            </Link>
          </div>
        </section>

        <div className="text-sm text-gray-500 text-center pt-4 border-t">
          <p>FAQ Version: <span data-version={faqVersion}>{faqVersion}</span></p>
          <p>Last Updated: <time dateTime={lastUpdated}>{lastUpdated}</time></p>
          <p className="mt-2">Total Questions: <strong>{faqs.reduce((acc, cat) => acc + cat.questions.length, 0)}</strong></p>
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
    </main>
  );
}

