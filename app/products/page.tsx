import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products & Services - Acme Business Management Solutions',
  description: 'Explore Acme\'s comprehensive suite of business management products including customer management, invoicing, analytics, reporting, and team collaboration tools.',
};

export default function ProductsPage() {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const productsVersion = '3.0.0';

  const products = [
    {
      id: 'customer-management',
      name: 'Customer Management System',
      description: 'Comprehensive CRM solution for managing customer relationships, contact information, interaction history, and customer lifecycle.',
      features: [
        'Contact Management',
        'Interaction Tracking',
        'Customer Segmentation',
        'Automated Workflows',
        'Email Integration',
        'Mobile Access'
      ],
      price: 'Starting at $59/month',
      category: 'CRM'
    },
    {
      id: 'invoicing',
      name: 'Advanced Invoicing Platform',
      description: 'Streamline your billing process with automated invoice generation, payment tracking, and financial reporting.',
      features: [
        'Automated Invoice Generation',
        'Payment Processing',
        'Multi-Currency Support',
        'Recurring Billing',
        'Payment Reminders',
        'Financial Reports'
      ],
      price: 'Starting at $49/month',
      category: 'Finance'
    },
    {
      id: 'analytics',
      name: 'Business Analytics Dashboard',
      description: 'Real-time insights and analytics to help you make data-driven decisions for your business growth.',
      features: [
        'Real-Time Analytics',
        'Custom Reports',
        'Data Visualization',
        'Predictive Analytics',
        'Export Capabilities',
        'API Access'
      ],
      price: 'Starting at $69/month',
      category: 'Analytics'
    },
    {
      id: 'team-collaboration',
      name: 'Team Collaboration Suite',
      description: 'Enhance team productivity with integrated collaboration tools, task management, and communication features.',
      features: [
        'Task Management',
        'Team Chat',
        'File Sharing',
        'Project Tracking',
        'Calendar Integration',
        'Role-Based Access'
      ],
      price: 'Starting at $35/user/month',
      category: 'Collaboration'
    }
  ];

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${lusitana.className} text-4xl font-bold mb-2`}>
          Products & Services
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Comprehensive business management solutions designed to help your business thrive
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {products.map((product) => (
            <article
              key={product.id}
              itemScope
              itemType="https://schema.org/Product"
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                  {product.category}
                </span>
                <h2 className="text-2xl font-semibold mb-2" itemProp="name">
                  {product.name}
                </h2>
                <p className="text-gray-700 mb-4" itemProp="description">
                  {product.description}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-sm text-gray-600 mb-2">Key Features:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-lg font-semibold text-blue-600" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price">{product.price}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Solutions</h2>
          <p className="text-gray-700 mb-4">
            For larger organizations, we offer custom enterprise solutions with dedicated support, 
            advanced security features, custom integrations, and priority assistance.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>✓ Custom API Development</li>
            <li>✓ Dedicated Account Manager</li>
            <li>✓ 24/7 Priority Support</li>
            <li>✓ Advanced Security & Compliance</li>
            <li>✓ Custom Training Programs</li>
            <li>✓ SLA Guarantees</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Contact Sales for Enterprise Solutions
          </Link>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-4">Integration Capabilities</h2>
          <p className="text-gray-700 mb-4">
            Our platform integrates seamlessly with popular business tools and services:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-gray-50 rounded">Stripe</div>
            <div className="p-3 bg-gray-50 rounded">PayPal</div>
            <div className="p-3 bg-gray-50 rounded">QuickBooks</div>
            <div className="p-3 bg-gray-50 rounded">Xero</div>
            <div className="p-3 bg-gray-50 rounded">Slack</div>
            <div className="p-3 bg-gray-50 rounded">Microsoft Teams</div>
            <div className="p-3 bg-gray-50 rounded">Google Workspace</div>
            <div className="p-3 bg-gray-50 rounded">Salesforce</div>
          </div>
        </section>

        <div className="text-sm text-gray-500 text-center pt-4 border-t">
          <p>Products Catalog Version: <span data-version={productsVersion}>{productsVersion}</span></p>
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
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

