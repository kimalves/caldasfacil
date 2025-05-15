"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, MapPin, CreditCard, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ChatPagamentoProps {
  isOpen: boolean
  onClose: () => void
  onPagamentoRealizado: () => void
  servicoInfo: {
    titulo: string
    prestador: string
    data?: string
    horario?: string
    local?: string
    valor: number
  }
}

export function ChatPagamento({ isOpen, onClose, onPagamentoRealizado, servicoInfo }: ChatPagamentoProps) {
  const [metodoPagamento, setMetodoPagamento] = useState<string>("cartao")
  const [pagamentoRealizado, setPagamentoRealizado] = useState(false)

  const handlePagamento = () => {
    // Simulação de processamento de pagamento
    setTimeout(() => {
      setPagamentoRealizado(true)
    }, 1500)
  }

  const handleFechar = () => {
    if (pagamentoRealizado) {
      onPagamentoRealizado()
    }
    onClose()
    // Reset do estado após fechar
    setTimeout(() => {
      setPagamentoRealizado(false)
    }, 300)
  }

  const taxaServico = servicoInfo.valor * 0.05 // 5% de taxa

  return (
    <Dialog open={isOpen} onOpenChange={handleFechar}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-primary-teal">
            {pagamentoRealizado ? "Pagamento Confirmado!" : "Finalizar Pagamento"}
          </DialogTitle>
        </DialogHeader>

        {pagamentoRealizado ? (
          // Tela de confirmação de pagamento
          <div className="py-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Pagamento realizado com sucesso!</h3>
            <p className="text-gray-600 mb-6">O prestador foi notificado e você receberá a confirmação por e-mail.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span>Valor pago:</span>
                <span className="font-bold">R$ {(servicoInfo.valor + taxaServico).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Método:</span>
                <span>
                  {metodoPagamento === "cartao" ? "Cartão de Crédito" : metodoPagamento === "pix" ? "PIX" : "Boleto"}
                </span>
              </div>
            </div>
            <Link href="/meus-servicos">
              <Button className="w-full bg-primary-teal hover:bg-primary-teal/90">Ver Meus Serviços</Button>
            </Link>
          </div>
        ) : (
          // Tela de pagamento
          <div className="py-4">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{servicoInfo.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Prestador: {servicoInfo.prestador}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  {servicoInfo.data && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{servicoInfo.data}</span>
                    </div>
                  )}
                  {servicoInfo.horario && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{servicoInfo.horario}</span>
                    </div>
                  )}
                </div>
                {servicoInfo.local && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{servicoInfo.local}</span>
                  </div>
                )}
                <Separator />
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between">
                    <span>Valor do serviço</span>
                    <span>R$ {servicoInfo.valor.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Taxa de serviço (5%)</span>
                    <span>R$ {taxaServico.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R$ {(servicoInfo.valor + taxaServico).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Escolha o método de pagamento:</h3>
              <RadioGroup value={metodoPagamento} onValueChange={setMetodoPagamento} className="space-y-2">
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                  <RadioGroupItem value="cartao" id="cartao" />
                  <Label htmlFor="cartao" className="flex items-center cursor-pointer">
                    <CreditCard className="h-4 w-4 mr-2 text-primary-teal" />
                    Cartão de Crédito
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex items-center cursor-pointer">
                    <Image src="/pix-icon.png" alt="PIX" width={16} height={16} className="mr-2" />
                    PIX
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                  <RadioGroupItem value="boleto" id="boleto" />
                  <Label htmlFor="boleto" className="flex items-center cursor-pointer">
                    <Image src="/boleto-icon.png" alt="Boleto" width={16} height={16} className="mr-2" />
                    Boleto Bancário
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-6">
              <p className="text-sm text-blue-700">
                Ao finalizar o pagamento, você concorda com os termos de serviço e política de privacidade do Caldas
                Fácil.
              </p>
            </div>
          </div>
        )}

        {!pagamentoRealizado && (
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handlePagamento} className="bg-primary-orange hover:bg-primary-orange/90">
              Pagar R$ {(servicoInfo.valor + taxaServico).toFixed(2)}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
