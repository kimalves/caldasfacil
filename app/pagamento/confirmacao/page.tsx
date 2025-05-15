import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Calendar, MapPin, MessageSquare, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConfirmacaoPagamento() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background-beige py-8">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Seu pagamento foi processado com sucesso e o serviço foi confirmado.
            </p>
            <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Pedido #12345 • R$ 1.050,00
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detalhes do Serviço</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Prestador" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Fotografia Profissional para Eventos</h3>
                  <p className="text-gray-500">Prestador: Maria Silva</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Data: 25/05/2025 • Horário: 14:00 - 18:00</span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Local: Salão de Festas Central, Caldas</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Serviço (4 horas)</span>
                  <span>R$ 1.000,00</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Taxa de serviço</span>
                  <span>R$ 50,00</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total pago</span>
                  <span>R$ 1.050,00</span>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-1">Informações importantes:</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• O prestador já foi notificado sobre a confirmação do serviço.</li>
                  <li>• Você pode entrar em contato com o prestador pelo chat a qualquer momento.</li>
                  <li>• Após a conclusão do serviço, não esqueça de avaliá-lo.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <Link href="/chat/cliente">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" /> Abrir Chat
                  </Button>
                </Link>
                <Link href="/meus-servicos">
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" /> Ver Detalhes
                  </Button>
                </Link>
              </div>
              <Link href="/">
                <Button className="w-full bg-primary-teal hover:bg-primary-teal/90">
                  Voltar para a Página Inicial
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="text-center">
            <p className="text-gray-500 mb-2">Obrigado por usar o Caldas Fácil!</p>
            <p className="text-sm text-gray-500">
              Um comprovante foi enviado para seu e-mail. Você também pode acessá-lo em{" "}
              <Link href="/financeiro" className="text-primary-teal hover:underline">
                Meu Financeiro
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
