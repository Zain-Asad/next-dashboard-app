import ClientSideComponent from './ClientSideComponent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getData() {
  console.log("Fetching users from server...");
  const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  const data = await res.json();

  return data;
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices - Acme Dashboard',
  description: 'View and manage your invoices, track payments, and monitor billing status.',
};

export default async function InvoicesPage() {
  const data = await getData();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Invoices</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage invoices, track payments, and monitor billing status
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
      <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
        <p className="text-xs font-semibold text-orange-900 mb-1">📄 Invoice Page Guide:</p>
        <div className="text-xs text-orange-800 space-y-1">
          <p>• <strong>View Invoices:</strong> Invoice data is displayed in the table below</p>
          <p>• <strong>Invoice Data:</strong> Shows user information from external API (dummyjson.com)</p>
          <p>• <strong>Navigation:</strong> Use "Back to Dashboard" button or sidebar to navigate</p>
          <p>• <strong>Dashboard Overview:</strong> See invoice statistics on the main dashboard page</p>
          <p>• <strong>Data Source:</strong> Invoices loaded from external API on each page load</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="text-lg font-semibold mb-4">Invoice Management</h2>
        <ClientSideComponent users={data.users} />
      </div>
    </div>
  );
}