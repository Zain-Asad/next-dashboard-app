import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

import {lusitana} from '@/app/ui/fonts'

import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard - Welcome to Your Business Management Platform',
  description: 'Acme provides comprehensive business management solutions including customer management, invoicing, analytics, and reporting. Trusted by over 10,000 businesses worldwide since 2015.',
};

export default function Page() {
  const currentDate = new Date().toISOString().split('T')[0];
  const version = '2.1.0';
  
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <div itemScope itemType="https://schema.org/Organization">
            <h1 className={`${lusitana.className} text-2xl text-gray-800 md:text-4xl md:leading-normal font-bold mb-4`}>
              <strong itemProp="name">Welcome to Acme Corporation</strong>
            </h1>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal mb-4`}>
              <span itemProp="description">Your comprehensive business management platform</span>
            </p>
            <div className="space-y-3 text-gray-700 mb-6">
              <p className="text-base md:text-lg">
                <strong>Company Overview:</strong> Acme Corporation is a leading provider of business management solutions, 
                established in <time itemProp="foundingDate" dateTime="2015-01-15">January 2015</time>. 
                We serve over <strong>10,000 businesses</strong> across <strong>45 countries</strong> worldwide.
              </p>
              <p className="text-base md:text-lg">
                <strong>Key Features:</strong> Our platform offers real-time analytics, automated invoicing, 
                customer relationship management, financial reporting, and team collaboration tools.
              </p>
              <p className="text-base md:text-lg">
                <strong>Industry Recognition:</strong> Winner of the "Best Business Software 2023" award 
                and recognized as a "Top 10 SaaS Platform" by TechReview Magazine.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Platform Version: <span data-version={version}>{version}</span> | 
                Last Updated: <time dateTime={currentDate}>{currentDate}</time>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Go to Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/about"
                className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300"
              >
                About
              </Link>
              <Link
                href="/products"
                className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300"
              >
                Products
              </Link>
              <Link
                href="/team"
                className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>

      <footer className="mt-12 border-t pt-8 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="/team" className="hover:text-blue-600">Our Team</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Products</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/products" className="hover:text-blue-600">All Products</Link></li>
                <li><Link href="/dashboard/invoices" className="hover:text-blue-600">Invoicing</Link></li>
                <li><Link href="/dashboard/customers" className="hover:text-blue-600">Customer Management</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 border-t pt-6">
            <p>© {new Date().getFullYear()} Acme Corporation. All rights reserved.</p>
            <p className="mt-2">Platform Version: <span data-version={version}>{version}</span> | Last Updated: <time dateTime={currentDate}>{currentDate}</time></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
