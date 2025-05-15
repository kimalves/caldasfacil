import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary-teal text-white pt-10 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Caldas Fácil" width={40} height={40} className="bg-white rounded-full p-1" />
              <h3 className="text-xl font-bold ml-2">Caldas Fácil</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Conectamos clientes a prestadores de serviços de forma rápida e eficiente.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-gray-200 hover:text-white">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/meus-servicos" className="text-gray-200 hover:text-white">
                  Meus Serviços
                </Link>
              </li>
              <li>
                <Link href="/plano-destaque" className="text-gray-200 hover:text-white">
                  Plano Destaque
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/fotografia" className="text-gray-200 hover:text-white">
                  Fotografia
                </Link>
              </li>
              <li>
                <Link href="/servicos/video" className="text-gray-200 hover:text-white">
                  Produção de Vídeo
                </Link>
              </li>
              <li>
                <Link href="/servicos/web" className="text-gray-200 hover:text-white">
                  Design Web
                </Link>
              </li>
              <li>
                <Link href="/servicos/mobile" className="text-gray-200 hover:text-white">
                  Desenvolvimento Mobile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-200 mr-2 mt-0.5" />
                <span className="text-gray-200">Caldas, MG - Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-200 mr-2" />
                <span className="text-gray-200">+55 11 99222-4777</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-200 mr-2" />
                <span className="text-gray-200">contato@caldasfacil.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-600 mt-8 pt-6 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Caldas Fácil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
