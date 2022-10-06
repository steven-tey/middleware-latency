import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     */
    "/((?!api|_next).*)",
  ],
};

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const path = req.nextUrl.pathname;
  const key = decodeURIComponent(path.split("/")[1]);

  if (key === "vercel") {
    return NextResponse.redirect("https://vercel.com");
  }

  return NextResponse.next();
}
