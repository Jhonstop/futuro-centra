import React, { useState } from 'react';
import { Wallet, CreditCard, ArrowRightLeft, Receipt, Users, BarChart3, HelpCircle, BadgeCheck, Building, Banknote, FileText, PieChart, Landmark, GanttChart, ArrowUpRight, Clock, CalendarDays, Download, Filter, Search, Coins, PiggyBank, TrendingUp, Percent, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CentraPayNav from '@/components/CentraPayNav';

const CentraPay = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  
  const transactions = [
    { id: 1, description: "Pagamento Fornecedor XYZ", amount: "- R$ 12.500,00", date: "Hoje, 09:45", type: "debit", category: "fornecedores" },
    { id: 2, description: "Recebimento Cliente ABC", amount: "+ R$ 8.750,50", date: "Ontem, 15:30", type: "credit", category: "vendas" },
    { id: 3, description: "Taxa de Serviço", amount: "- R$ 250,00", date: "22/10/2023", type: "debit", category: "taxas" },
    { id: 4, description: "Transferência Recebida", amount: "+ R$ 15.000,00", date: "20/10/2023", type: "credit", category: "transferências" },
    { id: 5, description: "Pagamento Fornecedor 123", amount: "- R$ 5.800,00", date: "18/10/2023", type: "debit", category: "fornecedores" },
    { id: 6, description: "Pagamento Funcionários", amount: "- R$ 32.450,00", date: "15/10/2023", type: "debit", category: "folha" },
    { id: 7, description: "Recebimento Vendas Online", amount: "+ R$ 27.320,00", date: "12/10/2023", type: "credit", category: "vendas" },
    { id: 8, description: "Rendimento CDB", amount: "+ R$ 1.230,45", date: "10/10/2023", type: "credit", category: "investimentos" },
  ];

  const cards = [
    { id: 1, type: "Cartão Corporativo", lastDigits: "3456", limit: "R$ 50.000,00", available: "R$ 35.420,00", status: "active" },
    { id: 2, type: "Cartão Virtual", lastDigits: "7890", limit: "R$ 15.000,00", available: "R$ 15.000,00", status: "active" },
    { id: 3, type: "Cartão Adicional", lastDigits: "1234", limit: "R$ 10.000,00", available: "R$ 8.750,00", status: "inactive" },
  ];

  const invoices = [
    { id: 1, description: "Fatura Outubro/2023", amount: "R$ 12.450,00", dueDate: "05/11/2023", status: "pending" },
    { id: 2, description: "Fatura Setembro/2023", amount: "R$ 9.870,00", dueDate: "05/10/2023", status: "paid" },
    { id: 3, description: "Fatura Agosto/2023", amount: "R$ 11.230,00", dueDate: "05/09/2023", status: "paid" },
  ];

  const investments = [
    { id: 1, type: "CDB Centra", value: "R$ 50.000,00", return: "120% CDI", profitability: "R$ 3.250,00", maturity: "01/03/2024" },
    { id: 2, type: "Tesouro Direto", value: "R$ 25.000,00", return: "IPCA + 5.54%", profitability: "R$ 1.870,00", maturity: "15/08/2026" },
    { id: 3, type: "Fundo Multimercado", value: "R$ 35.000,00", return: "12.5% a.a.", profitability: "R$ 2.150,00", maturity: "Resgate D+1" },
  ];

  const chargesReceivable = [
    { id: 1, customer: "Empresa ABC Ltda", amount: "R$ 15.800,00", dueDate: "10/11/2023", status: "pending" },
    { id: 2, customer: "Comércio XYZ", amount: "R$ 8.450,00", dueDate: "15/11/2023", status: "pending" },
    { id: 3, customer: "Indústria 123", amount: "R$ 32.000,00", dueDate: "20/11/2023", status: "pending" },
    { id: 4, customer: "Distribuidora JKL", amount: "R$ 7.340,00", dueDate: "25/10/2023", status: "overdue" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <CentraPayNav />
      
      <main className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-64 space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                  <AvatarFallback>QG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Química Global</p>
                  <p className="text-xs text-muted-foreground">Conta Business</p>
                </div>
              </div>
              
              <Separator />
              
              <nav className="space-y-1">
                <Button 
                  variant={activeTab === "dashboard" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("dashboard")}
                  className="w-full justify-start text-sm"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  variant={activeTab === "extract" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("extract")}
                  className="w-full justify-start text-sm"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Extrato
                </Button>
                <Button 
                  variant={activeTab === "cards" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("cards")}
                  className="w-full justify-start text-sm"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Cartões
                </Button>
                <Button 
                  variant={activeTab === "payments" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("payments")}
                  className="w-full justify-start text-sm"
                >
                  <Banknote className="mr-2 h-4 w-4" />
                  Pagamentos
                </Button>
                <Button 
                  variant={activeTab === "transfers" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("transfers")}
                  className="w-full justify-start text-sm"
                >
                  <ArrowRightLeft className="mr-2 h-4 w-4" />
                  Transferências
                </Button>
                <Button 
                  variant={activeTab === "investments" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("investments")}
                  className="w-full justify-start text-sm"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Investimentos
                </Button>
                <Button 
                  variant={activeTab === "charges" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("charges")}
                  className="w-full justify-start text-sm"
                >
                  <Receipt className="mr-2 h-4 w-4" />
                  Cobranças
                </Button>
                <Button 
                  variant={activeTab === "reports" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("reports")}
                  className="w-full justify-start text-sm"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Relatórios
                </Button>
              </nav>
              
              <Separator />
              
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <Coins className="h-4 w-4 text-blue-500 mr-2" />
                  <p className="text-sm font-medium">Saldo Disponível</p>
                </div>
                <p className="text-xl font-bold">R$ 25.800,00</p>
                <p className="text-xs text-muted-foreground mt-1">Atualizado: hoje às 10:45</p>
              </div>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Dicas Financeiras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="p-1.5 rounded-full bg-amber-100">
                    <Percent className="h-3.5 w-3.5 text-amber-600" />
                  </div>
                  <div className="text-xs">
                    <p className="font-medium">Aumente seus rendimentos</p>
                    <p className="text-muted-foreground">Aplique em CDBs com até 130% do CDI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="p-1.5 rounded-full bg-green-100">
                    <ArrowUpRight className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <div className="text-xs">
                    <p className="font-medium">Melhore seu fluxo de caixa</p>
                    <p className="text-muted-foreground">Antecipe recebíveis com taxas especiais</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <section className="mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Dashboard Financeiro</h1>
                      <p className="text-muted-foreground mt-1">Visão geral das suas finanças</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="gap-2">
                            <CreditCard className="h-4 w-4" />
                            Solicitar Cartão
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Solicitar Cartão Centra Pay</DialogTitle>
                            <DialogDescription>
                              Preencha o formulário para solicitar seu cartão físico ou virtual.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="cardType" className="text-right text-sm">Tipo</label>
                              <select id="cardType" className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                                <option>Cartão Físico Corporativo</option>
                                <option>Cartão Virtual</option>
                                <option>Cartão Adicional</option>
                              </select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="limit" className="text-right text-sm">Limite</label>
                              <Input id="limit" type="text" placeholder="R$ 0.000,00" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="holder" className="text-right text-sm">Titular</label>
                              <Input id="holder" className="col-span-3" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="button" variant="secondary">Cancelar</Button>
                            <Button type="button">Solicitar</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      
                      <Button className="gap-2 bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary">
                        <ArrowRightLeft className="h-4 w-4" />
                        Nova Transferência
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Saldo Disponível</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">R$ 25.800,00</div>
                        <p className="text-xs text-muted-foreground mt-1">Atualizado: hoje às 10:45</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" size="sm" className="w-full" onClick={() => setActiveTab("extract")}>
                          Ver Extrato
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Faturamento Mensal</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">R$ 158.450,75</div>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-green-600 font-semibold">+12.5%</span>
                          <span className="text-xs text-muted-foreground ml-2">vs. último mês</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" size="sm" className="w-full" onClick={() => setActiveTab("reports")}>
                          Ver Relatório
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Rendimento da Conta</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">R$ 1.250,40</div>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-muted-foreground">Rendimento de 120% do CDI</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" size="sm" className="w-full" onClick={() => setActiveTab("investments")}>
                          Investir Mais
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
                
                <section>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Últimas Transações</CardTitle>
                          <CardDescription>Histórico das suas transações recentes</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("extract")}>
                          Ver Todos
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {transactions.slice(0, 5).map((transaction) => (
                          <li key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                                {transaction.type === 'credit' ? (
                                  <ArrowRightLeft className={`h-4 w-4 text-green-600`} />
                                ) : (
                                  <ArrowRightLeft className={`h-4 w-4 text-red-600`} />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-sm text-muted-foreground">{transaction.date}</p>
                              </div>
                            </div>
                            <span className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                              {transaction.amount}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}
            
            {activeTab === "extract" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold">Extrato da Conta</h1>
                    <p className="text-muted-foreground">Visualize todas as suas movimentações</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex gap-3">
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filtrar
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Exportar
                    </Button>
                  </div>
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-9">Hoje</Button>
                        <Button variant="ghost" size="sm" className="h-9">Esta semana</Button>
                        <Button variant="ghost" size="sm" className="h-9">Este mês</Button>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <Input placeholder="Pesquisar transação..." className="h-9" />
                        <Button className="h-9 px-3">
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Todos</Badge>
                        <Badge variant="outline">Entrada</Badge>
                        <Badge variant="outline">Saída</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Exibindo {showAllTransactions ? 
                          transactions.length : Math.min(5, transactions.length)} de {transactions.length} transações
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {(showAllTransactions ? transactions : transactions.slice(0, 5)).map((transaction) => (
                        <li key={transaction.id} className="flex items-center justify-between py-3 border-b last:border-0">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                              {transaction.type === 'credit' ? (
                                <ArrowRightLeft className={`h-4 w-4 text-green-600`} />
                              ) : (
                                <ArrowRightLeft className={`h-4 w-4 text-red-600`} />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <div className="flex items-center">
                                <p className="text-sm text-muted-foreground">{transaction.date}</p>
                                <Badge variant="outline" className="ml-2 text-xs">
                                  {transaction.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <span className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 text-center">
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowAllTransactions(!showAllTransactions)}
                      >
                        {showAllTransactions ? "Mostrar menos" : "Mostrar mais"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === "cards" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold">Meus Cartões</h1>
                    <p className="text-muted-foreground">Gerencie seus cartões físicos e virtuais</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 md:mt-0 gap-2 bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary">
                        <CreditCard className="h-4 w-4" />
                        Solicitar Novo Cartão
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Solicitar Cartão Centra Pay</DialogTitle>
                        <DialogDescription>
                          Preencha o formulário para solicitar seu cartão físico ou virtual.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="cardType" className="text-right text-sm">Tipo</label>
                          <select id="cardType" className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                            <option>Cartão Físico Corporativo</option>
                            <option>Cartão Virtual</option>
                            <option>Cartão Adicional</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="limit" className="text-right text-sm">Limite</label>
                          <Input id="limit" type="text" placeholder="R$ 0.000,00" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="holder" className="text-right text-sm">Titular</label>
                          <Input id="holder" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="secondary">Cancelar</Button>
                        <Button type="button">Solicitar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cards.map((card, index) => (
                    <Card key={card.id} className={`overflow-hidden ${card.status === 'inactive' ? 'opacity-60' : ''}`}>
                      <div className={`h-44 p-6 flex flex-col justify-between ${index % 3 === 0 ? 'bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary' : index % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'} text-white`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs opacity-80">Centra Pay</p>
                            <p className="font-medium">{card.type}</p>
                          </div>
                          <CreditCard className="h-6 w-6" />
                        </div>
                        
                        <div>
                          <p className="font-mono text-lg">•••• •••• •••• {card.lastDigits}</p>
                          <div className="flex justify-between items-end mt-2">
                            <div>
                              <p className="text-xs opacity-80">Titular</p>
                              <p className="font-medium">Química Global</p>
                            </div>
                            <div>
                              <p className="text-xs opacity-80">Validade</p>
                              <p className="font-medium">08/28</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-medium">Limite Disponível</p>
                          <p className="font-medium">{card.available}</p>
                        </div>
                        <Progress value={parseInt(card.available.replace(/\D/g, '')) / parseInt(card.limit.replace(/\D/g, '')) * 100} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Utilizado: {parseInt(card.limit.replace(/\D/g, '')) - parseInt(card.available.replace(/\D/g, ''))}</span>
                          <span>Limite: {card.limit}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-0">
                        <Button variant="ghost" size="sm">
                          Ver fatura
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              {card.status === 'active' ? 'Bloquear' : 'Desbloquear'}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{card.status === 'active' ? 'Bloquear' : 'Desbloquear'} Cartão</DialogTitle>
                              <DialogDescription>
                                Você tem certeza que deseja {card.status === 'active' ? 'bloquear' : 'desbloquear'} este cartão?
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="secondary">Cancelar</Button>
                              <Button variant={card.status === 'active' ? 'destructive' : 'default'}>
                                {card.status === 'active' ? 'Bloquear' : 'Desbloquear'}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Faturas</CardTitle>
                    <CardDescription>Visualize e gerencie as faturas dos seus cartões</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50 text-left text-sm">
                          <tr>
                            <th className="px-6 py-3 font-medium">Descrição</th>
                            <th className="px-6 py-3 font-medium">Valor</th>
                            <th className="px-6 py-3 font-medium">Vencimento</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Ações</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {invoices.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-muted/30">
                              <td className="px-6 py-4 text-sm font-medium">{invoice.description}</td>
                              <td className="px-6 py-4 text-sm">{invoice.amount}</td>
                              <td className="px-6 py-4 text-sm">{invoice.dueDate}</td>
                              <td className="px-6 py-4 text-sm">
                                <Badge 
                                  variant="outline" 
                                  className={
                                    invoice.status === "pending" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                    invoice.status === "paid" ? "bg-green-50 text-green-700 border-green-200" :
                                    "bg-red-50 text-red-700 border-red-200"
                                  }
                                >
                                  {invoice.status === "pending" ? "Pendente" : 
                                   invoice.status === "paid" ? "Pago" : "Atrasado"}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 text-sm">
                                <div className="flex space-x-2">
                                  <Button size="sm" variant="ghost">Visualizar</Button>
                                  {invoice.status === "pending" && (
                                    <Button size="sm" variant="outline">Pagar</Button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === "investments" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold">Investimentos</h1>
                    <p className="text-muted-foreground">Gerencie suas aplicações financeiras</p>
                  </div>
                  
                  <Button className="mt-4 md:mt-0 gap-2 bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary">
                    <PiggyBank className="h-4 w-4" />
                    Nova Aplicação
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Investido</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 110.000,00</div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-green-600 font-semibold">+15.3%</span>
                        <span className="text-xs text-muted-foreground ml-2">rentabilidade</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CentraPay;
