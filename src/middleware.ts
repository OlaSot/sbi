import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define supported languages
const locales = ['en', 'de', 'ru', 'lt'];
const defaultLocale = 'en';

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Get the locale from the cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a valid locale
  const pathnameHasValidLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a valid locale, just update the cookie if needed
  if (pathnameHasValidLocale) {
    const currentLocale = pathname.split('/')[1];
    const response = NextResponse.next();
    if (request.cookies.get('NEXT_LOCALE')?.value !== currentLocale) {
      response.cookies.set('NEXT_LOCALE', currentLocale, { path: '/' });
    }
    return response;
  }

  // If no valid locale in pathname, redirect to the preferred locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  // Set the locale cookie
  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });
  
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|.*\\..*).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}; 