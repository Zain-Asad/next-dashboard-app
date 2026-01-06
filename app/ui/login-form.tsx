/**
 * LOGIN FORM COMPONENT - AI AGENT NOTE
 * 
 * This is a simple form component that collects email and password.
 * The form submits to the parent page's handleLogin function.
 * 
 * FORM FIELDS:
 * - email: Any email address (required by HTML, but accepts any value)
 * - password: Any password (no minimum length in actual validation)
 * 
 * AI AGENT NOTE: The form has HTML5 "required" attributes, but the actual
 * validation in handleLogin is very permissive for demo purposes.
 */

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Hint:</strong> This is a demo system. Use any email and password to login.
        </p>
        <div className="w-full">
          {/* AI AGENT NOTE: Email input field - accepts any email format */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Any email works (e.g., test@example.com)"
                required
                autoComplete="email"
                defaultValue="test@example.com"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          
          {/* AI AGENT NOTE: Password input field - accepts any password, even empty */}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Any password works (even empty)"
                required
                autoComplete="current-password"
                defaultValue="test"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        
        {/* AI AGENT NOTE: Submit button - triggers form submission to handleLogin */}
        <Button type="submit" className="mt-4 w-full">
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </div>
    </div>
  );
}
