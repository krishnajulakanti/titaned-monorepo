import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req) {
  const pathname = req.nextUrl.pathname;

  const token = req.cookies.get('auth_token');

  if (!token && pathname.includes('/auth/users')) {
    const url = req.nextUrl.clone();
    url.pathname = '/users';
    return NextResponse.redirect(url);
  }

  // Check if the path matches a React route
  if (token && pathname.includes('/auth')) {
    const url = new URL(`/dashboard?path=${pathname}`, req.nextUrl.origin); // Replace with React app base URL
    return NextResponse.redirect(url); // Redirect to React app
  }

  return NextResponse.next(); // Allow Next.js to handle other routes
}
