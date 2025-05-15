"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Caldas Fácil" width={32} height={32} />
            <span className="font-bold text-xl text-primary-teal ml-2">Caldas Fácil</span>
          </Link>
        </div>

        {/* Menu principal */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-base font-medium hover:text-primary-teal">
            Início
          </Link>
          <Link href="/quem-somos" className="text-base font-medium hover:text-primary-teal">
            Quem Somos
          </Link>
          <Link href="/meus-servicos" className="text-base font-medium hover:text-primary-teal">
            Meus Serviços
          </Link>
          <Link href="/plano-destaque" className="text-base font-medium hover:text-primary-teal">
            Plano Destaque
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login/cliente">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-orange text-primary-orange hover:bg-primary-orange/10"
            >
              Cliente
            </Button>
          </Link>
          <Link href="/login/prestador">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
            >
              Prestador
            </Button>
          </Link>
        </div>

        {/* Menu mobile - simplificado para este exemplo */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/login/cliente">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-orange text-primary-orange hover:bg-primary-orange/10"
            >
              Cliente
            </Button>
          </Link>
          <Link href="/login/prestador">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
            >
              Prestador
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
