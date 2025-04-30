'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CustomerDetailsPage() {
  const { id } = useParams();
  const [localCustomer, setLocalCustomer] = useState<Customer | null>(null);

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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{customer.name}</h1>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Website:</strong> {customer.website}</p>
    </div>
  );
}
