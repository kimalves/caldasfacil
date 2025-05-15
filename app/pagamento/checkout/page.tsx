import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, CreditCard, Calendar, Lock, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Checkout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background-beige py-8">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary-teal">Finalizar Pagamento</h1>
            <p className="text-gray-600">Complete seu pagamento para confirmar a contratação do serviço</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resumo do serviço */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Resumo do Serviço</CardTitle>
                  <CardDescription>Detalhes do serviço que você está contratando</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Prestador"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Fotografia Profissional para Eventos</h3>
                      <p className="text-gray-500">Prestador: Maria Silva</p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Data: 25/05/2025 • Horário: 14:00 - 18:00</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Local: Salão de Festas Central, Caldas</p>
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
                      <span>Total</span>
                      <span>R$ 1.050,00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Métodos de pagamento */}
              <Card>
                <CardHeader>
                  <CardTitle>Método de Pagamento</CardTitle>
                  <CardDescription>Escolha como deseja pagar pelo serviço</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="cartao">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger
                        value="cartao"
                        className="data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                      >
                        <CreditCard className="h-4 w-4 mr-2" /> Cartão
                      </TabsTrigger>
                      <TabsTrigger
                        value="pix"
                        className="data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                      >
                        <Image src="/pix-icon.png" alt="PIX" width={16} height={16} className="mr-2" /> PIX
                      </TabsTrigger>
                      <TabsTrigger
                        value="boleto"
                        className="data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                      >
                        <Image src="/boleto-icon.png" alt="Boleto" width={16} height={16} className="mr-2" /> Boleto
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cartao">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="card-number">Número do Cartão</Label>
                            <div className="relative mt-1">
                              <Input id="card-number" placeholder="0000 0000 0000 0000" />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                                <Image src="/visa-icon.png" alt="Visa" width={24} height={16} />
                                <Image src="/mastercard-icon.png" alt="Mastercard" width={24} height={16} />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Validade</Label>
                              <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <div className="relative mt-1">
                                <Input id="cvv" placeholder="123" />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <AlertCircle className="h-4 w-4 text-gray-400" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="card-name">Nome no Cartão</Label>
                            <Input id="card-name" placeholder="Como está impresso no cartão" className="mt-1" />
                          </div>

                          <div>
                            <Label htmlFor="installments">Parcelamento</Label>
                            <RadioGroup defaultValue="1" className="mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1" id="installment-1" />
                                <Label htmlFor="installment-1">1x de R$ 1.050,00 (sem juros)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2" id="installment-2" />
                                <Label htmlFor="installment-2">2x de R$ 525,00 (sem juros)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3" id="installment-3" />
                                <Label htmlFor="installment-3">3x de R$ 350,00 (sem juros)</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="pix">
                      <div className="text-center p-4">
                        <div className="bg-gray-100 p-6 rounded-lg inline-block mb-4">
                          <Image src="/qrcode-placeholder.png" alt="QR Code PIX" width={200} height={200} />
                        </div>
                        <p className="mb-4">Escaneie o QR Code acima com o aplicativo do seu banco</p>
                        <div className="bg-gray-100 p-3 rounded text-sm mb-4 max-w-md mx-auto">
                          <p className="font-medium">Ou copie o código PIX abaixo:</p>
                          <div className="flex mt-2">
                            <Input
                              value="00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-f24e2b675d7b5204000053039865802BR5925CALDAS FACIL PAGAMENTOS6009SAO PAULO62070503***63041D57"
                              readOnly
                              className="text-xs"
                            />
                            <Button variant="outline" className="ml-2 whitespace-nowrap">
                              Copiar
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          O pagamento será confirmado automaticamente em até 5 minutos após a transferência.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="boleto">
                      <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Valor do Boleto:</p>
                              <p className="text-lg font-bold">R$ 1.050,00</p>
                            </div>
                            <div>
                              <p className="font-medium">Vencimento:</p>
                              <p>27/05/2025</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="bg-primary-teal hover:bg-primary-teal/90 flex-1">Gerar Boleto</Button>
                          <Button variant="outline" className="flex-1">
                            Enviar por Email
                          </Button>
                        </div>

                        <p className="text-sm text-gray-500">
                          O boleto será compensado em até 3 dias úteis após o pagamento. O serviço será confirmado
                          somente após a compensação.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Resumo e finalização */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Resumo da Compra</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>R$ 1.000,00</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Taxa de serviço</span>
                        <span>R$ 50,00</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>R$ 1.050,00</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-green-700">Pagamento Seguro</p>
                        <p className="text-green-600">
                          Suas informações de pagamento são criptografadas e processadas com segurança.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Lock className="h-4 w-4" />
                      <span>Ambiente seguro</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-primary-orange hover:bg-primary-orange/90 py-6">
                    Finalizar Pagamento
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Ao finalizar, você concorda com os{" "}
                    <Link href="/termos" className="text-primary-teal hover:underline">
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link href="/privacidade" className="text-primary-teal hover:underline">
                      Política de Privacidade
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
