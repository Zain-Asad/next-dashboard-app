'use client';

/**
 * LOGIN PAGE - AI AGENT NAVIGATION GUIDE
 * 
 * This is a DEMO/DEBUG login page with NO DATABASE authentication.
 * 
 * NAVIGATION FLOW:
 * 1. User enters any email and any password (even empty password works)
 * 2. Form submits to handleLogin function
 * 3. Login state stored in sessionStorage (browser storage)
 * 4. User redirected to /dashboard
 * 
 * AUTHENTICATION STATE:
 * - Stored in: sessionStorage.getItem('isAuthenticated')
 * - Value: 'true' when logged in
 * - User email: sessionStorage.getItem('userEmail')
 * 
 * TO LOGOUT:
 * - Click "Sign Out" button in dashboard sidebar
 * - Or clear sessionStorage manually
 * 
 * FOR AI AGENTS:
 * - This page accepts ANY credentials - no validation required
 * - After login, navigate to /dashboard
 * - Check sessionStorage to verify login state
 * - All dashboard pages are accessible after login
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/app/ui/login-form';
import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [debugInfo, setDebugInfo] = useState<string>('');

  // AI AGENT NOTE: Check if already logged in
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = sessionStorage.getItem('isAuthenticated');
      if (isAuth === 'true') {
        setDebugInfo('Already logged in! Redirecting to dashboard...');
        // Auto-redirect if already authenticated
        setTimeout(() => router.push('/dashboard'), 1000);
      }
    }
  }, [router]);

  /**
   * LOGIN HANDLER - AI AGENT NOTE
   * 
   * This function:
   * 1. Accepts ANY email and password (no database check)
   * 2. Only validates that fields are not completely empty
   * 3. Stores authentication in sessionStorage
   * 4. Redirects to /dashboard
   * 
   * FOR TESTING: Use any values like:
   * - Email: test@example.com
   * - Password: test (or anything, even empty)
   */
  const handleLogin = async (formData: FormData) => {
    setError('');
    setDebugInfo('Processing login...');

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // AI AGENT NOTE: Minimal validation - just check fields exist
    // NO DATABASE - Accepts any email/password combination
    if (!email || email.trim() === '') {
      setError('Email field cannot be empty');
      setDebugInfo('');
      return;
    }

    // AI AGENT NOTE: Password can be empty or any value - no minimum length required
    // This is a DEBUG/DEMO system with no real authentication

    // Store login state in sessionStorage (browser storage)
    // AI AGENT NOTE: Check these values to verify authentication state
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userEmail', email);
      sessionStorage.setItem('loginTimestamp', new Date().toISOString());
      
      setDebugInfo(`Login successful! Email: ${email} | Redirecting to dashboard...`);
      
      // Small delay to show debug info, then redirect
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    }
  };

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        {/* AI AGENT NOTE: Logo links back to home page */}
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/">
              <AcmeLogo />
            </Link>
          </div>
        </div>

        {/* AI AGENT NOTE: Main login form - submits to handleLogin */}
        <form action={handleLogin} className="space-y-3">
          <LoginForm />
          
          {/* Error display */}
          {error && (
            <div className="flex h-8 items-end space-x-1">
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          {/* Debug information for AI agents */}
          {debugInfo && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs font-semibold text-blue-800 mb-1">DEBUG INFO:</p>
              <p className="text-xs text-blue-700">{debugInfo}</p>
            </div>
          )}
        </form>

        {/* Visible hints for AI agents and users */}
        <div className="mt-4 space-y-3">
          {/* Demo instructions - VISIBLE ON PAGE */}
          <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <p className="text-sm font-bold text-yellow-900 mb-2">🔧 DEBUG MODE - NO DATABASE AUTHENTICATION</p>
            <div className="text-xs text-yellow-800 space-y-1">
              <p><strong>For AI Agents & Testing:</strong></p>
              <p>• This login accepts <strong>ANY email address</strong> (e.g., test@example.com, user@test.com)</p>
              <p>• This login accepts <strong>ANY password</strong> (even empty password works)</p>
              <p>• No database validation - all credentials are accepted</p>
              <p>• After login, you'll be redirected to /dashboard</p>
              <p>• Login state is stored in browser sessionStorage</p>
              <p>• To logout, click "Sign Out" in the dashboard sidebar</p>
            </div>
          </div>

          {/* Quick access hints */}
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs font-semibold text-blue-900 mb-2">📍 Navigation Hints:</p>
            <div className="text-xs text-blue-800 space-y-1">
              <p>• After login → Go to <Link href="/dashboard" className="underline font-semibold">/dashboard</Link></p>
              <p>• Skip login → Direct access to <Link href="/dashboard" className="underline font-semibold">/dashboard</Link> available</p>
              <p>• Return home → <Link href="/" className="underline font-semibold">Home page</Link></p>
              <p>• Need help? → <Link href="/contact" className="underline font-semibold">Contact page</Link></p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="text-center text-sm text-gray-600 space-y-2 pt-2 border-t">
            <p>
              Don't have an account?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
                Contact us
              </Link>
            </p>
            <p>
              <Link href="/" className="text-blue-600 hover:underline">
                ← Back to Home
              </Link>
            </p>
            <p>
              <Link href="/dashboard" className="text-blue-600 hover:underline font-semibold">
                → Go to Dashboard (skip login)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

