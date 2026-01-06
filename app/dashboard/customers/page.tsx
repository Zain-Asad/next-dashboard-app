'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type Customer = {
  id: number;
  name: string;
  email: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CustomersPage() {
  const [localCustomers, setLocalCustomers] = useState<Customer[] | null>(null);

  const { data: swrData, error, isLoading } = useSWR<Customer[]>(
    !localCustomers ? 'https://jsonplaceholder.typicode.com/users' : null,
    fetcher
  );

  useEffect(() => {
    const cached = localStorage.getItem('customers');
    if (cached) {
      setLocalCustomers(JSON.parse(cached));
    }
  }, []);

  useEffect(() => {
    if (swrData) {
      localStorage.setItem('customers', JSON.stringify(swrData));
      setLocalCustomers(swrData);
    }
  }, [swrData]);

  if (isLoading && !localCustomers) return <p>Loading customers...</p>;
  if (error && !localCustomers) return <p>Failed to load customers.</p>;

  const customers = localCustomers;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your customer relationships and view detailed customer information
          </p>
        </div>
        <Link
          href="/dashboard"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
        >
          ← Back to Dashboard
        </Link>
      </div>
      
      {/* Navigation hints for AI agents */}
      <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
        <p className="text-xs font-semibold text-purple-900 mb-1">👥 Customer Page Guide:</p>
        <div className="text-xs text-purple-800 space-y-1">
          <p>• <strong>View List:</strong> All customers are displayed below with name and email</p>
          <p>• <strong>View Details:</strong> Click on any customer card to see full details (address, company, stats)</p>
          <p>• <strong>Customer URLs:</strong> Format is /dashboard/customers/[id] where [id] is the customer number</p>
          <p>• <strong>Navigation:</strong> Use "Back to Dashboard" button or sidebar to navigate</p>
          <p>• <strong>Data Source:</strong> Customers loaded from external API and cached in browser</p>
        </div>
      </div>
      
      {customers && customers.length > 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600 mb-4">
            Total Customers: <strong>{customers.length}</strong>
          </p>
          <ul className="space-y-2">
            {customers.map((customer) => (
              <li key={customer.id}>
                <Link
                  href={`/dashboard/customers/${customer.id}`}
                  className="block rounded bg-gray-50 p-4 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-colors"
                >
                  <p className="font-medium text-gray-900">{customer.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{customer.email}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <p className="text-gray-600">No customers found.</p>
        </div>
      )}
    </div>
  );
}
