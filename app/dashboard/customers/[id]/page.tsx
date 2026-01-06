'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CustomerDetailsPage() {
  const { id } = useParams();
  const [localCustomer, setLocalCustomer] = useState<Customer | null>(null);
  const lastUpdated = new Date().toISOString();

  const { data: swrCustomer, error, isLoading } = useSWR<Customer>(
    !localCustomer && id ? `https://jsonplaceholder.typicode.com/users/${id}` : null,
    fetcher
  );

  useEffect(() => {
    const cached = localStorage.getItem('customers');
    if (cached && id) {
      const parsed = JSON.parse(cached) as Customer[];
      const customer = parsed.find(c => c.id === Number(id));
      if (customer) setLocalCustomer(customer);
    }
  }, [id]);

  useEffect(() => {
    if (swrCustomer) setLocalCustomer(swrCustomer);
  }, [swrCustomer]);

  if (isLoading && !localCustomer) return <p>Loading customer details...</p>;
  if (error || !localCustomer) return <p>Customer not found.</p>;

  const customer = localCustomer;

  // Mock additional data for demonstration
  const customerStats = {
    totalInvoices: Math.floor(Math.random() * 50) + 10,
    totalSpent: Math.floor(Math.random() * 50000) + 10000,
    lastPurchase: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'Active',
    customerSince: new Date(Date.now() - Math.random() * 365 * 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2" itemProp="name">{customer.name}</h1>
          <p className="text-gray-600">Customer ID: <span data-customer-id={customer.id}>{customer.id}</span></p>
        </div>
        <Link
          href="/dashboard/customers"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
        >
          ← Back to Customers
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section
          itemScope
          itemType="https://schema.org/Person"
          className="bg-white p-6 rounded-lg shadow-sm border"
        >
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <strong>Email:</strong>
              <div itemProp="email">
                <a href={`mailto:${customer.email}`} className="text-blue-600 hover:underline">
                  {customer.email}
                </a>
              </div>
            </div>
            <div>
              <strong>Phone:</strong>
              <div itemProp="telephone">
                <a href={`tel:${customer.phone}`} className="text-blue-600 hover:underline">
                  {customer.phone}
                </a>
              </div>
            </div>
            <div>
              <strong>Website:</strong>
              <div>
                <a 
                  href={customer.website.startsWith('http') ? customer.website : `https://${customer.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {customer.website}
                </a>
              </div>
            </div>
            {customer.username && (
              <div>
                <strong>Username:</strong>
                <div>{customer.username}</div>
              </div>
            )}
          </div>
        </section>

        {customer.address && (
          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <address
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="not-italic text-gray-700 space-y-1"
            >
              <div itemProp="streetAddress">{customer.address.street}, {customer.address.suite}</div>
              <div>
                <span itemProp="addressLocality">{customer.address.city}</span>, 
                <span itemProp="postalCode"> {customer.address.zipcode}</span>
              </div>
              {customer.address.geo && (
                <div className="text-sm text-gray-500 mt-2">
                  Coordinates: {customer.address.geo.lat}, {customer.address.geo.lng}
                </div>
              )}
            </address>
          </section>
        )}

        {customer.company && (
          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <div className="space-y-2 text-gray-700">
              <div>
                <strong>Company Name:</strong>
                <div>{customer.company.name}</div>
              </div>
              <div>
                <strong>Catchphrase:</strong>
                <div className="italic">{customer.company.catchPhrase}</div>
              </div>
              <div>
                <strong>Business:</strong>
                <div>{customer.company.bs}</div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Customer Statistics</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Invoices:</span>
              <span className="font-semibold" data-total-invoices={customerStats.totalInvoices}>
                {customerStats.totalInvoices}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Spent:</span>
              <span className="font-semibold" data-total-spent={customerStats.totalSpent}>
                ${customerStats.totalSpent.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Purchase:</span>
              <span className="font-semibold">
                <time dateTime={customerStats.lastPurchase}>{customerStats.lastPurchase}</time>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer Since:</span>
              <span className="font-semibold">
                <time dateTime={customerStats.customerSince}>{customerStats.customerSince}</time>
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-gray-600">Status:</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                {customerStats.status}
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
        <p>Page Last Updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleString()}</time></p>
        <p>Customer Data Version: <span data-version="2.1.0">2.1.0</span></p>
      </div>
    </div>
  );
}
