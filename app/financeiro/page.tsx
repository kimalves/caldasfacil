import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Download,
  FileText,
  ArrowUpRight,
  ArrowDownLeft,
  Calendar,
  Filter,
  CreditCard,
  Wallet,
  PieChart,
  DollarSign,
} from "lucide-react"

// Dados simulados de transações
const transacoes = [
  {
    id: "tx-001",
    tipo: "entrada",
    descricao: "Pagamento - Fotografia para Evento",
    cliente: "João Silva",
    data: "15/05/2025",
    valor: 950.0,
    status: "concluído",
    metodo: "cartão",
  },
  {
    id: "tx-002",
    tipo: "saida",
    descricao: "Taxa de serviço - Caldas Fácil",
    cliente: "Caldas Fácil",
    data: "15/05/2025",
    valor: 47.5,
    status: "concluído",
    metodo: "automático",
  },
  {
    id: "tx-003",
    tipo: "entrada",
    descricao: "Pagamento - Ensaio Fotográfico",
    cliente: "Maria Oliveira",
    data: "10/05/2025",
    valor: 350.0,
    status: "concluído",
    metodo: "pix",
  },
  {
    id: "tx-004",
    tipo: "saida",
    descricao: "Taxa de serviço - Caldas Fácil",
    cliente: "Caldas Fácil",
    data: "10/05/2025",
    valor: 17.5,
    status: "concluído",
    metodo: "automático",
  },
  {
    id: "tx-005",
    tipo: "entrada",
    descricao: "Pagamento - Filmagem de Evento",
    cliente: "Empresa ABC",
    data: "05/05/2025",
    valor: 1200.0,
    status: "pendente",
    metodo: "boleto",
  },
]

// Dados simulados de saldo
const saldoInfo = {
  saldoAtual: 2435.0,
  recebimentosPendentes: 1200.0,
  recebimentosMes: 1300.0,
  taxasMes: 65.0,
}

export default function Financeiro() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background-beige py-8">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary-teal">Meu Financeiro</h1>
            <p className="text-gray-600">Gerencie seus pagamentos e acompanhe suas transações</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Coluna lateral com resumo financeiro */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Saldo Disponível</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">R$ {saldoInfo.saldoAtual.toFixed(2)}</div>
                  <Button className="w-full bg-primary-teal hover:bg-primary-teal/90 mb-2">Sacar Saldo</Button>
                  <Button variant="outline" className="w-full">
                    Adicionar Conta Bancária
                  </Button>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Recebimentos Pendentes</p>
                      <p className="font-medium">R$ {saldoInfo.recebimentosPendentes.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Recebimentos do Mês</p>
                      <p className="font-medium">R$ {saldoInfo.recebimentosMes.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Taxas do Mês</p>
                      <p className="font-medium">R$ {saldoInfo.taxasMes.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Relatórios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <PieChart className="h-4 w-4 mr-2" /> Resumo Mensal
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" /> Relatório por Período
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" /> Declaração de Rendimentos
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="h-4 w-4 mr-2" /> Taxas e Impostos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conteúdo principal */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Histórico de Transações</CardTitle>
                      <CardDescription>Acompanhe seus pagamentos e recebimentos</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" /> Filtrar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" /> Exportar
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Tabs defaultValue="todas">
                    <div className="flex justify-between items-center mb-4">
                      <TabsList>
                        <TabsTrigger
                          value="todas"
                          className="data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                        >
                          Todas
                        </TabsTrigger>
                        <TabsTrigger
                          value="entradas"
                          className="data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                        >
                          Entradas
                        </TabsTrigger>
                        <TabsTrigger
                          value="saidas"
                          className="data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                        >
                          Saídas
                        </TabsTrigger>
                      </TabsList>

                      <div className="relative w-full max-w-xs">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input type="search" placeholder="Buscar transação..." className="pl-8" />
                      </div>
                    </div>

                    <TabsContent value="todas" className="space-y-4">
                      {transacoes.map((transacao) => (
                        <div
                          key={transacao.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border hover:shadow-sm transition-shadow"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                transacao.tipo === "entrada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                              }`}
                            >
                              {transacao.tipo === "entrada" ? (
                                <ArrowDownLeft className="h-5 w-5" />
                              ) : (
                                <ArrowUpRight className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{transacao.descricao}</h4>
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                                <span className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" /> {transacao.data}
                                </span>
                                <span>{transacao.cliente}</span>
                                <span className="flex items-center">
                                  {transacao.metodo === "cartão" && <CreditCard className="h-3 w-3 mr-1" />}
                                  {transacao.metodo === "pix" && <Wallet className="h-3 w-3 mr-1" />}
                                  {transacao.metodo === "boleto" && <FileText className="h-3 w-3 mr-1" />}
                                  {transacao.metodo === "automático" && <DollarSign className="h-3 w-3 mr-1" />}
                                  {transacao.metodo.charAt(0).toUpperCase() + transacao.metodo.slice(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end mt-3 sm:mt-0">
                            <div
                              className={`font-bold ${
                                transacao.tipo === "entrada" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {transacao.tipo === "entrada" ? "+" : "-"}R$ {transacao.valor.toFixed(2)}
                            </div>
                            <Badge
                              variant={transacao.status === "concluído" ? "default" : "outline"}
                              className={
                                transacao.status === "concluído" ? "bg-green-500 mt-1" : "text-yellow-600 mt-1"
                              }
                            >
                              {transacao.status === "concluído" ? "Concluído" : "Pendente"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="entradas" className="space-y-4">
                      {transacoes
                        .filter((t) => t.tipo === "entrada")
                        .map((transacao) => (
                          <div
                            key={transacao.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border hover:shadow-sm transition-shadow"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                <ArrowDownLeft className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="font-medium">{transacao.descricao}</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                                  <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" /> {transacao.data}
                                  </span>
                                  <span>{transacao.cliente}</span>
                                  <span className="flex items-center">
                                    {transacao.metodo === "cartão" && <CreditCard className="h-3 w-3 mr-1" />}
                                    {transacao.metodo === "pix" && <Wallet className="h-3 w-3 mr-1" />}
                                    {transacao.metodo === "boleto" && <FileText className="h-3 w-3 mr-1" />}
                                    {transacao.metodo.charAt(0).toUpperCase() + transacao.metodo.slice(1)}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end mt-3 sm:mt-0">
                              <div className="font-bold text-green-600">+R$ {transacao.valor.toFixed(2)}</div>
                              <Badge
                                variant={transacao.status === "concluído" ? "default" : "outline"}
                                className={
                                  transacao.status === "concluído" ? "bg-green-500 mt-1" : "text-yellow-600 mt-1"
                                }
                              >
                                {transacao.status === "concluído" ? "Concluído" : "Pendente"}
                              </Badge>
                            </div>
                          </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="saidas" className="space-y-4">
                      {transacoes
                        .filter((t) => t.tipo === "saida")
                        .map((transacao) => (
                          <div
                            key={transacao.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border hover:shadow-sm transition-shadow"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                <ArrowUpRight className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="font-medium">{transacao.descricao}</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                                  <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" /> {transacao.data}
                                  </span>
                                  <span>{transacao.cliente}</span>
                                  <span className="flex items-center">
                                    {transacao.metodo === "automático" && <DollarSign className="h-3 w-3 mr-1" />}
                                    {transacao.metodo.charAt(0).toUpperCase() + transacao.metodo.slice(1)}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end mt-3 sm:mt-0">
                              <div className="font-bold text-red-600">-R$ {transacao.valor.toFixed(2)}</div>
                              <Badge
                                variant={transacao.status === "concluído" ? "default" : "outline"}
                                className={
                                  transacao.status === "concluído" ? "bg-green-500 mt-1" : "text-yellow-600 mt-1"
                                }
                              >
                                {transacao.status === "concluído" ? "Concluído" : "Pendente"}
                              </Badge>
                            </div>
                          </div>
                        ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
