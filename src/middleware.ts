import { clerkMiddleware } from "@clerk/nextjs/server";
import { sources } from "next/dist/compiled/webpack/webpack";

export default clerkMiddleware();

export const config = {
  matcher: [
     // Skip Clerk authentication for these specific routes
     '/(api/uploadthing|site)(.*)',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};