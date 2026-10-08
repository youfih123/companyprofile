// proxy.js
import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

// Halaman yang wajib login
const protectedPaths = ["/messages"];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Maintenance mode (tetap seperti sebelumnya)
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  const isMaintenancePage = pathname === "/maintenance";

  if (isMaintenance && !isMaintenancePage) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  // 2. Segarkan sesi Supabase dan ambil user
  const { supabaseResponse, user } = await updateSession(request);

  // 3. Auth guard: belum login → lempar ke /login
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtected && !user) {
    const redirectResponse = NextResponse.redirect(
      new URL("/login", request.url)
    );
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });
    return redirectResponse;
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // semua path, kecuali file internal Next.js
};