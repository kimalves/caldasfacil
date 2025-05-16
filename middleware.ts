import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Verificar se a rota é uma rota administrativa protegida
  if (request.nextUrl.pathname.startsWith("/admin-panel")) {
    // Verificar se o usuário está autenticado como administrador
    const adminAuthenticated = request.cookies.get("adminAuthenticated")?.value === "true"

    if (!adminAuthenticated) {
      // Redirecionar para a página de login administrativo
      return NextResponse.redirect(new URL("/admin-login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin-panel/:path*"],
}
