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
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Customers</h1>
      <ul className="space-y-2">
        {customers?.map((customer) => (
          <li key={customer.id}>
            <Link
              href={`/dashboard/customers/${customer.id}`}
              className="block rounded bg-gray-100 p-3 hover:bg-blue-100"
            >
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-gray-600">{customer.email}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
