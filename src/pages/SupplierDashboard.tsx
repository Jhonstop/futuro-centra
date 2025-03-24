
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  BarChart as BarChartIcon, 
  Users, 
  MessageSquare, 
  Settings, 
  Lightbulb, 
  LogOut, 
  Menu, 
  X, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  ChevronUp, 
  ChevronDown, 
  Package as PackageIcon,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from "recharts";

import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const sales = [
  { month: "Jan", value: 45000 },
  { month: "Fev", value: 52000 },
  { month: "Mar", value: 49000 },
  { month: "Abr", value: 63000 },
  { month: "Mai", value: 58000 },
  { month: "Jun", value: 72000 },
  { month: "Jul", value: 78000 },
];

const recentOrders = [
  { 
    id: "ORD-7851", 
    customer: "Indústrias ABC", 
    product: "Ácido Sulfúrico Industrial", 
    quantity: 500,
    total: 52500,
    status: "Confirmado",
    date: "12/06/2024"
  },
  { 
    id: "ORD-7843", 
    customer: "Química Brasileira", 
    product: "Solvente Ecológico", 
    quantity: 200,
    total: 17800,
    status: "Enviado",
    date: "10/06/2024"
  },
  { 
    id: "ORD-7835", 
    customer: "TechQuímica", 
    product: "Resina Epóxi Industrial", 
    quantity: 50,
    total: 170000,
    status: "Entregue",
    date: "05/06/2024"
  },
  { 
    id: "ORD-7829", 
    customer: "Polímeros Industriais", 
    product: "Pigmento Azul Ultramarino", 
    quantity: 25,
    total: 42500,
    status: "Entregue",
    date: "02/06/2024"
  }
];

const topProducts = [
  { name: "Ácido Sulfúrico", value: 78 },
  { name: "Solvente Ecológico", value: 65 },
  { name: "Resina Epóxi", value: 42 },
  { name: "Pigmento Azul", value: 38 },
  { name: "Hidróxido de Sódio", value: 25 }
];

const customerInsights = [
  { name: "SP", value: 45 },
  { name: "MG", value: 23 },
  { name: "RJ", value: 15 },
  { name: "PR", value: 12 },
  { name: "Outros", value: 5 }
];

const salesByCategory = [
  { name: "Reagentes", value: 40 },
  { name: "Solventes", value: 30 },
  { name: "Resinas", value: 20 },
  { name: "Pigmentos", value: 10 }
];

const performanceData = [
  { name: "Jan", conversions: 65, leads: 100 },
  { name: "Fev", conversions: 70, leads: 120 },
  { name: "Mar", conversions: 75, leads: 130 },
  { name: "Abr", conversions: 80, leads: 135 },
  { name: "Mai", conversions: 85, leads: 140 },
  { name: "Jun", conversions: 90, leads: 150 },
  { name: "Jul", conversions: 95, leads: 160 },
];

const SupplierDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Simplified data for charts
  const salesConfig = {
    sales: { 
      label: "Vendas",
      theme: { light: "#2946e5", dark: "#2946e5" } 
    },
  };
  
  const performanceConfig = {
    conversions: { 
      label: "Conversões",
      theme: { light: "#2946e5", dark: "#2946e5" } 
    },
    leads: { 
      label: "Leads",
      theme: { light: "#4eb8f2", dark: "#4eb8f2" } 
    },
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 z-20 flex h-full w-72 flex-col border-r bg-background transition-transform duration-300 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0
        `}
      >
        <div className="border-b p-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-centra-blue-primary">
            CENTRA
            <span className="text-xs px-2 py-1 rounded bg-centra-blue-primary text-white">Fornecedor</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-auto p-4">
          <ul className="space-y-1">
            <li>
              <Link
                to="/supplier"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-muted"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/catalog"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Catálogo de Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/orders"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Pedidos
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/analytics"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <BarChartIcon className="h-5 w-5" />
                Análise de Vendas
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/sellers-ai"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Lightbulb className="h-5 w-5" />
                Sellers IA
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/customers"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Clientes
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/messages"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <MessageSquare className="h-5 w-5" />
                Mensagens
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Settings className="h-5 w-5" />
                Configurações
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="border-t p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>QG</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Química Global</p>
              <p className="text-xs text-muted-foreground">contato@quimicaglobal.com.br</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="ml-auto flex items-center gap-4">
            <Link to="/marketplace">
              <Button variant="outline" size="sm">
                Ver Marketplace
              </Button>
            </Link>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Visão geral do seu negócio na Centra</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                Baixar Relatório
              </Button>
              <Button size="sm" className="bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                Novo Produto
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Vendas Totais</p>
                    <h3 className="text-2xl font-bold mt-1">R$ 417.300</h3>
                    <div className="flex items-center mt-1 text-sm text-green-600">
                      <ChevronUp className="h-4 w-4" />
                      <span>12,5%</span>
                      <span className="text-muted-foreground ml-1">vs mês anterior</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-green-100">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pedidos</p>
                    <h3 className="text-2xl font-bold mt-1">42</h3>
                    <div className="flex items-center mt-1 text-sm text-green-600">
                      <ChevronUp className="h-4 w-4" />
                      <span>8,3%</span>
                      <span className="text-muted-foreground ml-1">vs mês anterior</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-blue-100">
                    <ShoppingCart className="h-5 w-5 text-centra-blue-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
                    <h3 className="text-2xl font-bold mt-1">24,8%</h3>
                    <div className="flex items-center mt-1 text-sm text-green-600">
                      <ChevronUp className="h-4 w-4" />
                      <span>3,2%</span>
                      <span className="text-muted-foreground ml-1">vs mês anterior</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-purple-100">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Produtos Ativos</p>
                    <h3 className="text-2xl font-bold mt-1">18</h3>
                    <div className="flex items-center mt-1 text-sm text-green-600">
                      <ChevronUp className="h-4 w-4" />
                      <span>2</span>
                      <span className="text-muted-foreground ml-1">novos este mês</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-amber-100">
                    <PackageIcon className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Visão Geral de Vendas</CardTitle>
                <CardDescription>Últimos 7 meses</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ChartContainer config={salesConfig} className="aspect-[4/3]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={sales}
                      margin={{ top: 10, right: 10, left: 10, bottom: 24 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                        tickMargin={8}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) =>
                          `R$${value.toLocaleString('pt-BR', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            currency: 'BRL',
                          })}`
                        }
                      />
                      <ChartTooltip
                        formatter={(value) =>
                          `R$${value.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            currency: 'BRL',
                          })}`
                        }
                      />
                      <Bar
                        dataKey="value"
                        name="sales"
                        fill="var(--color-sales)"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Performance de Conversão</CardTitle>
                <CardDescription>Leads vs. Conversões</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ChartContainer config={performanceConfig} className="aspect-[4/3]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={performanceData}
                      margin={{ top: 10, right: 10, left: 10, bottom: 24 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                        tickMargin={8}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <ChartTooltip />
                      <Line
                        type="monotone"
                        dataKey="conversions"
                        name="conversions"
                        stroke="var(--color-conversions)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="leads"
                        name="leads"
                        stroke="var(--color-leads)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Legend />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Orders */}
          <div className="mb-8">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Pedidos Recentes</CardTitle>
                    <CardDescription>Últimas transações recebidas</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver Todos
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50 text-left text-sm">
                      <tr>
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">Cliente</th>
                        <th className="px-6 py-3 font-medium">Produto</th>
                        <th className="px-6 py-3 font-medium">Quantidade</th>
                        <th className="px-6 py-3 font-medium">Total</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium">Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-muted/30">
                          <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                          <td className="px-6 py-4 text-sm">{order.customer}</td>
                          <td className="px-6 py-4 text-sm">{order.product}</td>
                          <td className="px-6 py-4 text-sm">{order.quantity}</td>
                          <td className="px-6 py-4 text-sm">
                            R$ {order.total.toLocaleString('pt-BR')}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <Badge 
                              variant="outline" 
                              className={
                                order.status === "Confirmado" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                order.status === "Enviado" ? "bg-amber-50 text-amber-700 border-amber-200" :
                                "bg-green-50 text-green-700 border-green-200"
                              }
                            >
                              {order.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
                <CardDescription>Top 5 produtos por vendas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        <span>{product.name}</span>
                      </div>
                      <div className="font-medium">{product.value} un.</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Categoria</CardTitle>
                <CardDescription>Distribuição de vendas por tipo de produto</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart
                    data={salesByCategory}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#2946e5"
                      fill="#2946e5"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {salesByCategory.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-sm font-medium">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Clientes por Região</CardTitle>
                <CardDescription>Distribuição geográfica dos clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={customerInsights}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4eb8f2" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupplierDashboard;
