import { NextResponse } from 'next/server'

export function middleware(request) {
  
  const userToken = request.cookies.get ( 'token' )?.value;
  
  // If the user is authenticated, continue as normal
  if (userToken) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*'


}