"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, FileText, DollarSign, Send, Check, X } from "lucide-react"
import Link from "next/link"

interface ChatOrcamentoProps {
  isOpen: boolean
  onClose: () => void
  onSend: (orcamento: any) => void
  isPrestador?: boolean
  servicoInfo?: {
    titulo: string
    descricao: string
    data?: string
    horario?: string
    local?: string
  }
}

export function ChatOrcamento({
  isOpen,
  onClose,
  onSend,
  isPrestador = true,
  servicoInfo = {
    titulo: "Fotografia para Evento",
    descricao: "Serviço de fotografia profissional para evento corporativo",
  },
}: ChatOrcamentoProps) {
  const [orcamento, setOrcamento] = useState({
    titulo: servicoInfo.titulo || "",
    descricao: servicoInfo.descricao || "",
    data: servicoInfo.data || "",
    horario: servicoInfo.horario || "",
    local: servicoInfo.local || "",
    valor: "",
    itens: [{ descricao: "Serviço de fotografia", valor: "" }],
    observacoes: "",
  })

  const [novoItem, setNovoItem] = useState({ descricao: "", valor: "" })

  const adicionarItem = () => {
    if (novoItem.descricao.trim() && novoItem.valor.trim()) {
      setOrcamento({
        ...orcamento,
        itens: [...orcamento.itens, { ...novoItem }],
      })
      setNovoItem({ descricao: "", valor: "" })
    }
  }

  const removerItem = (index: number) => {
    const novosItens = [...orcamento.itens]
    novosItens.splice(index, 1)
    setOrcamento({ ...orcamento, itens: novosItens })
  }

  const calcularTotal = () => {
    return orcamento.itens.reduce((total, item) => {
      const valor = Number.parseFloat(item.valor) || 0
      return total + valor
    }, 0)
  }

  const handleSubmit = () => {
    const orcamentoCompleto = {
      ...orcamento,
      valorTotal: calcularTotal(),
      status: "pendente",
      data_criacao: new Date().toISOString(),
    }
    onSend(orcamentoCompleto)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-primary-teal">
            {isPrestador ? "Enviar Orçamento" : "Visualizar Orçamento"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {isPrestador ? (
            // Formulário para prestador criar orçamento
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="titulo" className="text-sm font-medium">
                    Título do Serviço
                  </label>
                  <Input
                    id="titulo"
                    value={orcamento.titulo}
                    onChange={(e) => setOrcamento({ ...orcamento, titulo: e.target.value })}
                    placeholder="Ex: Fotografia para Evento"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="valor" className="text-sm font-medium">
                    Valor Total (R$)
                  </label>
                  <Input
                    id="valor"
                    value={orcamento.valor}
                    onChange={(e) => setOrcamento({ ...orcamento, valor: e.target.value })}
                    placeholder="0,00"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="descricao" className="text-sm font-medium">
                  Descrição do Serviço
                </label>
                <Textarea
                  id="descricao"
                  value={orcamento.descricao}
                  onChange={(e) => setOrcamento({ ...orcamento, descricao: e.target.value })}
                  placeholder="Descreva o serviço a ser realizado"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="data" className="text-sm font-medium">
                    Data
                  </label>
                  <Input
                    id="data"
                    type="date"
                    value={orcamento.data}
                    onChange={(e) => setOrcamento({ ...orcamento, data: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="horario" className="text-sm font-medium">
                    Horário
                  </label>
                  <Input
                    id="horario"
                    type="time"
                    value={orcamento.horario}
                    onChange={(e) => setOrcamento({ ...orcamento, horario: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="local" className="text-sm font-medium">
                    Local
                  </label>
                  <Input
                    id="local"
                    value={orcamento.local}
                    onChange={(e) => setOrcamento({ ...orcamento, local: e.target.value })}
                    placeholder="Local do serviço"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">Itens do Orçamento</label>
                  <div className="text-xs text-gray-500">Total: R$ {calcularTotal().toFixed(2)}</div>
                </div>

                <div className="space-y-3 mb-3">
                  {orcamento.itens.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={item.descricao}
                        onChange={(e) => {
                          const novosItens = [...orcamento.itens]
                          novosItens[index].descricao = e.target.value
                          setOrcamento({ ...orcamento, itens: novosItens })
                        }}
                        placeholder="Descrição do item"
                        className="flex-1"
                      />
                      <Input
                        value={item.valor}
                        onChange={(e) => {
                          const novosItens = [...orcamento.itens]
                          novosItens[index].valor = e.target.value
                          setOrcamento({ ...orcamento, itens: novosItens })
                        }}
                        placeholder="Valor"
                        className="w-24"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removerItem(index)}
                        className="h-8 w-8"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Input
                    value={novoItem.descricao}
                    onChange={(e) => setNovoItem({ ...novoItem, descricao: e.target.value })}
                    placeholder="Novo item"
                    className="flex-1"
                  />
                  <Input
                    value={novoItem.valor}
                    onChange={(e) => setNovoItem({ ...novoItem, valor: e.target.value })}
                    placeholder="Valor"
                    className="w-24"
                  />
                  <Button type="button" variant="outline" size="icon" onClick={adicionarItem} className="h-8 w-8">
                    <Check className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="observacoes" className="text-sm font-medium">
                  Observações
                </label>
                <Textarea
                  id="observacoes"
                  value={orcamento.observacoes}
                  onChange={(e) => setOrcamento({ ...orcamento, observacoes: e.target.value })}
                  placeholder="Informações adicionais, condições, prazos, etc."
                  rows={3}
                />
              </div>
            </>
          ) : (
            // Visualização do orçamento para o cliente
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{orcamento.titulo}</CardTitle>
                <p className="text-sm text-gray-500">{orcamento.descricao}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  {orcamento.data && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{orcamento.data}</span>
                    </div>
                  )}
                  {orcamento.horario && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{orcamento.horario}</span>
                    </div>
                  )}
                  {orcamento.local && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{orcamento.local}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1 text-gray-500" /> Itens do Orçamento
                  </h4>
                  <div className="space-y-2">
                    {orcamento.itens.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.descricao}</span>
                        <span>R$ {Number.parseFloat(item.valor || "0").toFixed(2)}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>R$ {calcularTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {orcamento.observacoes && (
                  <div>
                    <h4 className="font-medium mb-1">Observações</h4>
                    <p className="text-sm text-gray-600">{orcamento.observacoes}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={onClose}>
                  Fechar
                </Button>
                <Link href="/pagamento/checkout">
                  <Button className="bg-primary-orange hover:bg-primary-orange/90">
                    <DollarSign className="h-4 w-4 mr-1" /> Pagar Agora
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>

        {isPrestador && (
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit} className="bg-primary-teal hover:bg-primary-teal/90">
              <Send className="h-4 w-4 mr-1" /> Enviar Orçamento
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
