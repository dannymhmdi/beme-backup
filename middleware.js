import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(req) {
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
  const token = cookies().get("access-token");
    const url = req.nextUrl.clone();

    if (url.pathname === "/login") {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  return NextResponse.next();
}

// Specify the path(s) to apply the middleware
export const config = {
  matcher: ["/become-guide"],
};




