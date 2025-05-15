import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background-beige flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="Caldas Fácil" width={180} height={180} priority />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Bem-vindo ao Caldas Fácil</h1>

          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-900">
            Conectamos clientes a prestadores de serviços de forma rápida e eficiente. Escolha como deseja acessar:
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/login/cliente">
              <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white px-6 py-3 text-base w-full md:w-auto">
                Login Cliente →
              </Button>
            </Link>

            <Link href="/login/prestador">
              <Button className="bg-primary-teal hover:bg-primary-teal/90 text-white px-6 py-3 text-base w-full md:w-auto">
                Login Prestador →
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
