import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Overview - Acme Business Management',
  description: 'View your business metrics, revenue analytics, latest invoices, and customer data in real-time on the Acme dashboard.',
};

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
    totalPaidInvoicesRaw,
    totalPendingInvoicesRaw,
  } = await fetchCardData();

  const dashboardVersion = '3.0.0';
  const lastUpdated = new Date().toISOString();
  // Use raw numeric values for calculations
  const totalRevenue = totalPaidInvoicesRaw + totalPendingInvoicesRaw;
  const collectionRate = totalRevenue > 0 
    ? ((totalPaidInvoicesRaw / totalRevenue) * 100).toFixed(1) 
    : '0.0';
 
  return (
    <main>
      <div className="mb-6">
        <h1 className={`${lusitana.className} mb-2 text-xl md:text-2xl`}>
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-600">
          Real-time business metrics and analytics | Last updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleString()}</time>
        </p>
        
        {/* Navigation hints for AI agents */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs font-semibold text-blue-900 mb-1">📊 Dashboard Navigation Guide:</p>
          <div className="text-xs text-blue-800 space-y-1">
            <p>• <strong>Sidebar:</strong> Use left sidebar to navigate between Dashboard, Invoices, and Customers</p>
            <p>• <strong>Customers:</strong> Click "Customers" in sidebar → View list → Click any customer for details</p>
            <p>• <strong>Invoices:</strong> Click "Invoices" in sidebar to view and manage invoices</p>
            <p>• <strong>Sign Out:</strong> Click "Sign Out" button at bottom of sidebar to logout</p>
            <p>• <strong>Home:</strong> Click logo at top of sidebar to return to home page</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Revenue:</span>
              <span className="font-semibold">${totalRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Collection Rate:</span>
              <span className="font-semibold">{collectionRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg. Invoice Value:</span>
              <span className="font-semibold">
                ${numberOfInvoices > 0 ? (totalRevenue / numberOfInvoices).toFixed(2) : '0.00'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customers per Invoice:</span>
              <span className="font-semibold">
                {numberOfCustomers > 0 ? (numberOfInvoices / numberOfCustomers).toFixed(1) : '0.0'}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Business Status</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-700">System Operational</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-gray-700">Data Sync: Active</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-gray-700">API Status: Healthy</span>
            </div>
            <div className="pt-2 border-t text-xs text-gray-500">
              Dashboard Version: <span data-version={dashboardVersion}>{dashboardVersion}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
          <div className="space-y-2">
            <a href="/dashboard/invoices" className="block text-sm text-blue-600 hover:text-blue-800">
              → Create New Invoice
            </a>
            <a href="/dashboard/customers" className="block text-sm text-blue-600 hover:text-blue-800">
              → Add Customer
            </a>
            <a href="/products" className="block text-sm text-blue-600 hover:text-blue-800">
              → View Products
            </a>
            <a href="/contact" className="block text-sm text-blue-600 hover:text-blue-800">
              → Contact Support
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}