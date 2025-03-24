
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  LayoutDashboard, 
  PackageOpen, 
  Users, 
  Receipt, 
  Truck, 
  Settings, 
  LineChart, 
  Database, 
  FileStack, 
  ShoppingCart, 
  CreditCard, 
  ScanLine, 
  Building, 
  Download, 
  Upload, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  PlusCircle,
  Clock,
  BarChart3,
  Boxes,
  BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';

const ErpSystem = () => {
  const [activeTab, setActiveTab] = useState("integration");
  const [integrationStatus, setIntegrationStatus] = useState("not-started"); // can be: not-started, in-progress, completed, error
  const [progress, setProgress] = useState(0);
  
  const startIntegration = () => {
    setIntegrationStatus("in-progress");
    setProgress(0);
    
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIntegrationStatus("completed");
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  // Mock data for ERP dashboard
  const recentOrders = [
    { id: "OD-7851", customer: "Indústrias ABC", date: "Hoje, 14:30", status: "pending", value: "R$ 12.450,00" },
    { id: "OD-7850", customer: "Química Brasileira", date: "Hoje, 11:15", status: "processing", value: "R$ 8.900,00" },
    { id: "OD-7842", customer: "TechQuímica", date: "Ontem, 16:40", status: "completed", value: "R$ 15.320,00" },
    { id: "OD-7835", customer: "Laboratórios Unidos", date: "22/10/2023", status: "completed", value: "R$ 27.800,00" },
  ];
  
  const inventoryItems = [
    { id: 1, name: "Ácido Sulfúrico Industrial", sku: "AS-001", stock: 1250, unit: "litros", minStock: 500, status: "ok" },
    { id: 2, name: "Solvente Ecológico", sku: "SE-002", stock: 350, unit: "galões", minStock: 400, status: "low" },
    { id: 3, name: "Resina Epóxi", sku: "RE-003", stock: 820, unit: "kg", minStock: 300, status: "ok" },
    { id: 4, name: "Pigmento Azul Ultramarino", sku: "PA-004", stock: 75, unit: "kg", minStock: 50, status: "ok" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container mx-auto py-16 px-4 md:px-6">
        {/* ERP Integration Section */}
        {activeTab === "integration" && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Sistema ERP Centra</h1>
                <p className="text-muted-foreground mt-1">Conecte seus sistemas e centralize sua gestão</p>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <Link to="/">
                    Voltar
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary">
                  Acessar Demo
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Integração com seu ERP atual</CardTitle>
                    <CardDescription>
                      Conecte seus sistemas existentes à plataforma Centra
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {integrationStatus === "not-started" && (
                      <>
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="text-blue-600 mt-0.5" />
                            <div>
                              <h3 className="font-medium text-blue-800">Por que integrar?</h3>
                              <p className="text-sm text-blue-700">
                                A integração permite sincronizar dados entre seu ERP atual e a Centra, 
                                mantendo consistência nas informações e otimizando seus processos.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Selecione seu sistema atual:</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="border p-4 rounded-lg hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_SAP.svg/2560px-Logo_SAP.svg.png" 
                                alt="SAP" className="h-8 object-contain" />
                              <span className="text-sm">SAP</span>
                            </button>
                            <button className="border p-4 rounded-lg hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2">
                              <img src="https://logodownload.org/wp-content/uploads/2017/11/totvs-logo-0.png" 
                                alt="TOTVS" className="h-8 object-contain" />
                              <span className="text-sm">TOTVS</span>
                            </button>
                            <button className="border p-4 rounded-lg hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2">
                              <img src="https://www.oracle.com/a/ocom/img/cb71-netsuite-logo.png" 
                                alt="Oracle NetSuite" className="h-8 object-contain" />
                              <span className="text-sm">NetSuite</span>
                            </button>
                            <button className="border p-4 rounded-lg hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2">
                              <Database className="h-6 w-6 text-gray-600" />
                              <span className="text-sm">Outro</span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-4 pt-4">
                          <h3 className="font-medium">Dados a sincronizar:</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="products" checked readOnly className="h-4 w-4" />
                              <label htmlFor="products" className="text-sm">Produtos e Catálogo</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="inventory" checked readOnly className="h-4 w-4" />
                              <label htmlFor="inventory" className="text-sm">Estoque e Inventário</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="orders" checked readOnly className="h-4 w-4" />
                              <label htmlFor="orders" className="text-sm">Pedidos e Vendas</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="customers" checked readOnly className="h-4 w-4" />
                              <label htmlFor="customers" className="text-sm">Clientes e CRM</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="finances" checked readOnly className="h-4 w-4" />
                              <label htmlFor="finances" className="text-sm">Financeiro e Pagamentos</label>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {integrationStatus === "in-progress" && (
                      <div className="space-y-6 py-6">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
                            <Database className="h-8 w-8 text-blue-600 animate-pulse" />
                          </div>
                          <h3 className="text-lg font-medium">Integração em andamento</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Aguarde enquanto conectamos seus sistemas
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Progresso</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                        
                        <div className="space-y-3 border rounded-lg divide-y">
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Verificando credenciais</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Concluído
                            </Badge>
                          </div>
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Testando conexão</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Concluído
                            </Badge>
                          </div>
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {progress >= 50 ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Clock className="h-4 w-4 text-blue-600 animate-spin" />
                              )}
                              <span className="text-sm">Mapeando campos</span>
                            </div>
                            <Badge variant="outline" className={progress >= 50 ? "bg-green-50 text-green-700 border-green-200" : "bg-blue-50 text-blue-700 border-blue-200"}>
                              {progress >= 50 ? "Concluído" : "Em andamento"}
                            </Badge>
                          </div>
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {progress >= 80 ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Clock className="h-4 w-4 text-blue-600 animate-spin" />
                              )}
                              <span className="text-sm">Sincronizando dados</span>
                            </div>
                            <Badge variant="outline" className={progress >= 80 ? "bg-green-50 text-green-700 border-green-200" : "bg-blue-50 text-blue-700 border-blue-200"}>
                              {progress >= 80 ? "Concluído" : "Aguardando"}
                            </Badge>
                          </div>
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {progress >= 100 ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Clock className="h-4 w-4 text-blue-600" />
                              )}
                              <span className="text-sm">Finalizando configuração</span>
                            </div>
                            <Badge variant="outline" className={progress >= 100 ? "bg-green-50 text-green-700 border-green-200" : "bg-blue-50 text-blue-700 border-blue-200"}>
                              {progress >= 100 ? "Concluído" : "Aguardando"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {integrationStatus === "completed" && (
                      <div className="space-y-6 py-6">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-lg font-medium">Integração concluída com sucesso!</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Seus sistemas estão sincronizados e prontos para uso
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <BadgeCheck className="text-green-600 mt-0.5" />
                              <div>
                                <h3 className="font-medium text-green-800">Dados sincronizados</h3>
                                <ul className="text-sm text-green-700 mt-2 space-y-1">
                                  <li className="flex items-center gap-1">
                                    <span>✓</span> 124 produtos importados
                                  </li>
                                  <li className="flex items-center gap-1">
                                    <span>✓</span> 45 clientes conectados
                                  </li>
                                  <li className="flex items-center gap-1">
                                    <span>✓</span> Estoque atualizado com sucesso
                                  </li>
                                  <li className="flex items-center gap-1">
                                    <span>✓</span> Pedidos sincronizados
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Próximos passos</h3>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                                <span className="text-sm">Personalize seu dashboard Centra ERP</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                                <span className="text-sm">Configure alertas e notificações</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                                <span className="text-sm">Treine sua equipe para utilizar a plataforma</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {integrationStatus === "not-started" && (
                      <Button className="w-full" onClick={startIntegration}>
                        Iniciar Integração
                      </Button>
                    )}
                    
                    {integrationStatus === "in-progress" && (
                      <Button variant="outline" className="w-full" disabled>
                        Integrando...
                      </Button>
                    )}
                    
                    {integrationStatus === "completed" && (
                      <Button className="w-full" onClick={() => setActiveTab("dashboard")}>
                        Acessar ERP Centra
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
              
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Migre para o ERP Centra</CardTitle>
                    <CardDescription>
                      Conheça nosso sistema ERP completo e integrado
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
                        alt="ERP Dashboard" 
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Principais recursos:</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-blue-100 shrink-0">
                            <PackageOpen className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Gestão completa de estoque</h4>
                            <p className="text-sm text-muted-foreground">
                              Controle total sobre seus produtos, com alertas de baixo estoque e relatórios detalhados.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-purple-100 shrink-0">
                            <ShoppingCart className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Pedidos e vendas centralizados</h4>
                            <p className="text-sm text-muted-foreground">
                              Acompanhe todas as suas vendas em um único lugar, com integração ao marketplace Centra.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-green-100 shrink-0">
                            <LineChart className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Relatórios e análises avançadas</h4>
                            <p className="text-sm text-muted-foreground">
                              Dados e insights para tomada de decisões estratégicas para o seu negócio.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-amber-100 shrink-0">
                            <Building className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Múltiplas unidades e filiais</h4>
                            <p className="text-sm text-muted-foreground">
                              Gerencie diversas unidades de negócio com controle individualizado.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <Button className="w-full" onClick={() => setActiveTab("dashboard")}>
                      Acessar Demo do ERP
                    </Button>
                    <Button variant="outline" className="w-full">
                      Agendar Demonstração
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="p-2 w-fit rounded-full bg-blue-100 mb-2">
                    <ScanLine className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle>Integração Automática</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    O ERP Centra detecta e mapeia automaticamente campos e estruturas de dados do seu sistema atual.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="p-2 w-fit rounded-full bg-purple-100 mb-2">
                    <FileStack className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle>Migração Assistida</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Equipe especializada para apoiar o processo de migração, garantindo a preservação dos seus dados.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="p-2 w-fit rounded-full bg-green-100 mb-2">
                    <ArrowRight className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle>Continuidade de Negócios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mantenha seus processos funcionando normalmente durante toda a transição para o ERP Centra.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {/* ERP Dashboard Section */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard ERP</h1>
                <p className="text-muted-foreground mt-1">Visão geral do seu negócio</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button variant="outline" onClick={() => setActiveTab("integration")}>
                  Voltar para Integração
                </Button>
                <Button className="gap-2 bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary">
                  <Download className="h-4 w-4" />
                  Exportar Relatórios
                </Button>
              </div>
            </div>
            
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden md:block w-64 bg-white border rounded-lg p-4 mr-6">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-sm font-medium">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <PackageOpen className="mr-2 h-4 w-4" />
                    Produtos
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Pedidos
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <Users className="mr-2 h-4 w-4" />
                    Clientes
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <Truck className="mr-2 h-4 w-4" />
                    Logística
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Financeiro
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <LineChart className="mr-2 h-4 w-4" />
                    Relatórios
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3 border">
                      <AvatarImage src="/placeholder.svg" alt="Avatar" />
                      <AvatarFallback>QG</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">Química Global</p>
                      <p className="text-xs text-muted-foreground">Administrador</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">Suporte</Button>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Pedidos Hoje</p>
                          <h3 className="text-2xl font-bold mt-1">12</h3>
                          <div className="flex items-center mt-1 text-sm text-green-600">
                            <ArrowRight className="h-4 w-4" />
                            <span>5 a processar</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-full bg-blue-100">
                          <ShoppingCart className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Faturamento</p>
                          <h3 className="text-2xl font-bold mt-1">R$ 43.250</h3>
                          <div className="flex items-center mt-1 text-sm text-green-600">
                            <ArrowRight className="h-4 w-4" />
                            <span>+18% vs ontem</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-full bg-green-100">
                          <CreditCard className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Produtos em Baixa</p>
                          <h3 className="text-2xl font-bold mt-1">3</h3>
                          <div className="flex items-center mt-1 text-sm text-amber-600">
                            <ArrowRight className="h-4 w-4" />
                            <span>Reposição urgente</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-full bg-amber-100">
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Entregas Pendentes</p>
                          <h3 className="text-2xl font-bold mt-1">8</h3>
                          <div className="flex items-center mt-1 text-sm text-purple-600">
                            <ArrowRight className="h-4 w-4" />
                            <span>4 hoje</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-full bg-purple-100">
                          <Truck className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Tabs defaultValue="orders" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="orders">Pedidos Recentes</TabsTrigger>
                    <TabsTrigger value="inventory">Estoque</TabsTrigger>
                    <TabsTrigger value="sales">Vendas</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="orders" className="mt-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Pedidos Recentes</CardTitle>
                            <CardDescription>Acompanhe os últimos pedidos recebidos</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">Ver Todos</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-muted/50 text-left text-sm">
                              <tr>
                                <th className="px-6 py-3 font-medium">ID</th>
                                <th className="px-6 py-3 font-medium">Cliente</th>
                                <th className="px-6 py-3 font-medium">Data</th>
                                <th className="px-6 py-3 font-medium">Valor</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Ações</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-muted/30">
                                  <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                                  <td className="px-6 py-4 text-sm">{order.customer}</td>
                                  <td className="px-6 py-4 text-sm">{order.date}</td>
                                  <td className="px-6 py-4 text-sm">{order.value}</td>
                                  <td className="px-6 py-4 text-sm">
                                    <Badge 
                                      variant="outline" 
                                      className={
                                        order.status === "pending" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                        order.status === "processing" ? "bg-amber-50 text-amber-700 border-amber-200" :
                                        "bg-green-50 text-green-700 border-green-200"
                                      }
                                    >
                                      {order.status === "pending" ? "Pendente" : 
                                      order.status === "processing" ? "Em processamento" : 
                                      "Concluído"}
                                    </Badge>
                                  </td>
                                  <td className="px-6 py-4 text-sm">
                                    <Button variant="ghost" size="sm">Ver Detalhes</Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="inventory" className="mt-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Controle de Estoque</CardTitle>
                            <CardDescription>Monitoramento de produtos e inventário</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" className="gap-1">
                                  <PlusCircle className="h-4 w-4" />
                                  Novo Produto
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Adicionar Produto</DialogTitle>
                                  <DialogDescription>
                                    Preencha os dados do novo produto a ser adicionado ao estoque.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="name" className="text-right text-sm">Nome</label>
                                    <Input id="name" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="sku" className="text-right text-sm">SKU</label>
                                    <Input id="sku" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="stock" className="text-right text-sm">Estoque</label>
                                    <Input id="stock" type="number" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="unit" className="text-right text-sm">Unidade</label>
                                    <Input id="unit" className="col-span-3" />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button type="button" variant="secondary">Cancelar</Button>
                                  <Button type="button">Adicionar</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-muted/50 text-left text-sm">
                              <tr>
                                <th className="px-6 py-3 font-medium">Produto</th>
                                <th className="px-6 py-3 font-medium">SKU</th>
                                <th className="px-6 py-3 font-medium">Estoque</th>
                                <th className="px-6 py-3 font-medium">Estoque Min.</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Ações</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {inventoryItems.map((item) => (
                                <tr key={item.id} className="hover:bg-muted/30">
                                  <td className="px-6 py-4 text-sm font-medium">{item.name}</td>
                                  <td className="px-6 py-4 text-sm">{item.sku}</td>
                                  <td className="px-6 py-4 text-sm">{item.stock} {item.unit}</td>
                                  <td className="px-6 py-4 text-sm">{item.minStock} {item.unit}</td>
                                  <td className="px-6 py-4 text-sm">
                                    <Badge 
                                      variant="outline" 
                                      className={
                                        item.status === "ok" ? "bg-green-50 text-green-700 border-green-200" :
                                        "bg-red-50 text-red-700 border-red-200"
                                      }
                                    >
                                      {item.status === "ok" ? "Normal" : "Baixo"}
                                    </Badge>
                                  </td>
                                  <td className="px-6 py-4 text-sm">
                                    <div className="flex space-x-2">
                                      <Button variant="ghost" size="sm">Editar</Button>
                                      <Button variant="ghost" size="sm">Ajustar</Button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="sales" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Vendas por Período</CardTitle>
                          <CardDescription>Comparativo dos últimos 6 meses</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80 flex items-center justify-center">
                          <div className="p-4 rounded-full bg-blue-100 mr-3">
                            <BarChart3 className="h-6 w-6 text-blue-600" />
                          </div>
                          <span className="text-muted-foreground">Gráfico de vendas em desenvolvimento</span>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Produtos Mais Vendidos</CardTitle>
                          <CardDescription>Top 5 produtos no mês atual</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Ácido Sulfúrico Industrial</span>
                                <span className="text-sm">2.450 litros</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Solvente Ecológico</span>
                                <span className="text-sm">1.800 galões</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Resina Epóxi</span>
                                <span className="text-sm">1.250 kg</span>
                              </div>
                              <Progress value={45} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Pigmento Azul</span>
                                <span className="text-sm">950 kg</span>
                              </div>
                              <Progress value={35} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Hidróxido de Sódio</span>
                                <span className="text-sm">800 kg</span>
                              </div>
                              <Progress value={25} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Atividades Recentes</CardTitle>
                      <CardDescription>Acompanhe as últimas ações no sistema</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-5">
                        <div className="flex gap-3">
                          <div className="p-2 rounded-full bg-blue-100 h-fit">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Novo cliente cadastrado: Indústrias XYZ</p>
                            <p className="text-xs text-muted-foreground">Hoje, 15:30 - por Carlos Silva</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="p-2 rounded-full bg-green-100 h-fit">
                            <ShoppingCart className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Pedido #OD-7851 aprovado e enviado para produção</p>
                            <p className="text-xs text-muted-foreground">Hoje, 14:45 - por Ana Mendes</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="p-2 rounded-full bg-purple-100 h-fit">
                            <Boxes className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Estoque atualizado: +500 litros de Ácido Sulfúrico</p>
                            <p className="text-xs text-muted-foreground">Hoje, 11:20 - por Rafael Costa</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="p-2 rounded-full bg-amber-100 h-fit">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Alerta: Nível baixo de estoque para Solvente Ecológico</p>
                            <p className="text-xs text-muted-foreground">Hoje, 10:05 - sistema</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="p-2 rounded-full bg-blue-100 h-fit">
                            <Upload className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Integração com fornecedor ABC concluída</p>
                            <p className="text-xs text-muted-foreground">Ontem, 16:50 - sistema</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Tarefas Pendentes</CardTitle>
                      <CardDescription>Lista de ações a serem concluídas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="task1" className="h-4 w-4" />
                          <label htmlFor="task1" className="text-sm">Aprovar pedido #OD-7850</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="task2" className="h-4 w-4" />
                          <label htmlFor="task2" className="text-sm">Repor estoque de Solvente Ecológico</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="task3" className="h-4 w-4" />
                          <label htmlFor="task3" className="text-sm">Revisar relatório mensal de vendas</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="task4" className="h-4 w-4" />
                          <label htmlFor="task4" className="text-sm">Contatar cliente Química Brasileira</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="task5" className="h-4 w-4" />
                          <label htmlFor="task5" className="text-sm">Programar manutenção de equipamentos</label>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="outline" size="sm" className="w-full">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Adicionar Tarefa
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ErpSystem;
