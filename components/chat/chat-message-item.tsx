"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChatOrcamento } from "@/components/chat/chat-orcamento"
import { ChatPagamento } from "@/components/chat/chat-pagamento"
import { FileText, DollarSign, Calendar, MapPin, Clock, CheckCircle, ThumbsUp } from "lucide-react"
import Link from "next/link"

export interface ChatMessage {
  id: string
  sender: {
    id: string
    name: string
    avatar?: string
    type: "cliente" | "prestador" | "system"
  }
  content: string
  timestamp: Date
  isRead: boolean
  attachments?: Array<{
    id: string
    type: string
    url: string
    name: string
  }>
  orcamento?: {
    id: string
    titulo: string
    descricao: string
    valor: number
    data?: string
    horario?: string
    local?: string
    status: "pendente" | "aceito" | "recusado" | "pago" | "concluido"
  }
}

interface ChatMessageItemProps {
  message: ChatMessage
  currentUserId: string
  currentUserType: "cliente" | "prestador"
  onAcceptOrcamento?: (orcamentoId: string) => void
  onRejectOrcamento?: (orcamentoId: string) => void
  onFinishService?: (orcamentoId: string) => void
}

export function ChatMessageItem({
  message,
  currentUserId,
  currentUserType,
  onAcceptOrcamento,
  onRejectOrcamento,
  onFinishService,
}: ChatMessageItemProps) {
  const [showOrcamento, setShowOrcamento] = useState(false)
  const [showPagamento, setShowPagamento] = useState(false)

  const isO = useState(false)

  const isOwner = message.sender.id === currentUserId
  const isSystemMessage = message.sender.type === "system"
  const isPrestador = currentUserType === "prestador"
  const isCliente = currentUserType === "cliente"

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const handleAcceptOrcamento = () => {
    if (onAcceptOrcamento && message.orcamento) {
      onAcceptOrcamento(message.orcamento.id)
    }
  }

  const handleRejectOrcamento = () => {
    if (onRejectOrcamento && message.orcamento) {
      onRejectOrcamento(message.orcamento.id)
    }
  }

  const handleFinishService = () => {
    if (onFinishService && message.orcamento) {
      onFinishService(message.orcamento.id)
    }
  }

  return (
    <div className={`flex ${isOwner ? "justify-end" : "justify-start"} mb-4`}>
      {!isOwner && !isSystemMessage && (
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
          <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}

      <div className={`max-w-[80%] ${isSystemMessage ? "w-full" : ""}`}>
        {isSystemMessage ? (
          <div className="text-center my-4">
            <Badge variant="outline" className="bg-gray-100 text-gray-600">
              {message.content}
            </Badge>
          </div>
        ) : message.orcamento ? (
          <Card className={`${isOwner ? "bg-primary-teal/10 border-primary-teal/20" : "bg-gray-50"}`}>
            <CardContent className="p-3">
              <div className="flex items-start gap-2 mb-2">
                <FileText className="h-4 w-4 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">{message.orcamento.titulo}</h4>
                  <p className="text-xs text-gray-600">{message.orcamento.descricao}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 mb-2">
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  <span>R$ {message.orcamento.valor.toFixed(2)}</span>
                </div>
                {message.orcamento.data && (
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{message.orcamento.data}</span>
                  </div>
                )}
                {message.orcamento.horario && (
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{message.orcamento.horario}</span>
                  </div>
                )}
                {message.orcamento.local && (
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{message.orcamento.local}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <Badge
                  variant={
                    message.orcamento.status === "aceito" ||
                    message.orcamento.status === "pago" ||
                    message.orcamento.status === "concluido"
                      ? "default"
                      : message.orcamento.status === "recusado"
                        ? "destructive"
                        : "outline"
                  }
                  className={
                    message.orcamento.status === "aceito"
                      ? "bg-blue-500"
                      : message.orcamento.status === "pago"
                        ? "bg-primary-orange"
                        : message.orcamento.status === "concluido"
                          ? "bg-green-500"
                          : ""
                  }
                >
                  {message.orcamento.status === "pendente" && "Aguardando resposta"}
                  {message.orcamento.status === "aceito" && "Aceito"}
                  {message.orcamento.status === "recusado" && "Recusado"}
                  {message.orcamento.status === "pago" && "Pago"}
                  {message.orcamento.status === "concluido" && "Concluído"}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-2 pt-0 flex gap-2 justify-end">
              <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => setShowOrcamento(true)}>
                Ver Detalhes
              </Button>

              {isCliente && message.orcamento.status === "pendente" && (
                <>
                  <Button variant="outline" size="sm" className="text-xs h-7" onClick={handleRejectOrcamento}>
                    Recusar
                  </Button>
                  <Button
                    size="sm"
                    className="text-xs h-7 bg-primary-teal hover:bg-primary-teal/90"
                    onClick={handleAcceptOrcamento}
                  >
                    Aceitar
                  </Button>
                </>
              )}

              {isCliente && message.orcamento.status === "aceito" && (
                <Button
                  size="sm"
                  className="text-xs h-7 bg-primary-orange hover:bg-primary-orange/90"
                  onClick={() => setShowPagamento(true)}
                >
                  <DollarSign className="h-3 w-3 mr-1" /> Pagar
                </Button>
              )}

              {isPrestador && message.orcamento.status === "pago" && (
                <Button size="sm" className="text-xs h-7 bg-green-500 hover:bg-green-600" onClick={handleFinishService}>
                  <CheckCircle className="h-3 w-3 mr-1" /> Finalizar Serviço
                </Button>
              )}

              {isCliente && message.orcamento.status === "concluido" && (
                <Link href="/avaliar">
                  <Button size="sm" className="text-xs h-7 bg-yellow-500 hover:bg-yellow-600">
                    <ThumbsUp className="h-3 w-3 mr-1" /> Avaliar
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ) : (
          <div
            className={`rounded-lg px-3 py-2 ${
              isOwner ? "bg-primary-teal text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"
            }`}
          >
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2 space-y-1">
                {message.attachments.map((attachment) => (
                  <div key={attachment.id} className="flex items-center text-xs">
                    <FileText className="h-3 w-3 mr-1" />
                    <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {attachment.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
            <div className={`text-xs mt-1 ${isOwner ? "text-white/70 text-right" : "text-gray-500"}`}>
              {formatTime(message.timestamp)}
            </div>
          </div>
        )}
      </div>

      {isOwner && !isSystemMessage && (
        <Avatar className="h-8 w-8 ml-2">
          <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
          <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}

      {/* Modal de orçamento */}
      <ChatOrcamento
        isOpen={showOrcamento}
        onClose={() => setShowOrcamento(false)}
        onSend={() => {}}
        isPrestador={false}
        servicoInfo={{
          titulo: message.orcamento?.titulo || "",
          descricao: message.orcamento?.descricao || "",
          data: message.orcamento?.data,
          horario: message.orcamento?.horario,
          local: message.orcamento?.local,
        }}
      />

      {/* Modal de pagamento */}
      {message.orcamento && (
        <ChatPagamento
          isOpen={showPagamento}
          onClose={() => setShowPagamento(false)}
          onPagamentoRealizado={() => {
            if (onAcceptOrcamento && message.orcamento) {
              // Atualizar status para pago
              onAcceptOrcamento(message.orcamento.id)
            }
          }}
          servicoInfo={{
            titulo: message.orcamento.titulo,
            prestador: message.sender.name,
            data: message.orcamento.data,
            horario: message.orcamento.horario,
            local: message.orcamento.local,
            valor: message.orcamento.valor,
          }}
        />
      )}
    </div>
  )
}
