
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  BarChart, 
  Users, 
  MessageSquare, 
  Settings, 
  Lightbulb, 
  LogOut, 
  Menu, 
  X, 
  Search,
  Plus,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Edit,
  Trash,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Ácido Sulfúrico Industrial",
    category: "Reagentes",
    stock: 1200,
    price: 105.00,
    status: "Ativo",
    lastUpdated: "15/06/2024",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Solvente Ecológico",
    category: "Solventes",
    stock: 850,
    price: 89.00,
    status: "Ativo",
    lastUpdated: "12/06/2024",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Resina Epóxi Industrial",
    category: "Resinas",
    stock: 320,
    price: 340.00,
    status: "Ativo",
    lastUpdated: "10/06/2024",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Pigmento Azul Ultramarino",
    category: "Pigmentos",
    stock: 540,
    price: 170.00,
    status: "Ativo",
    lastUpdated: "08/06/2024",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Hidróxido de Sódio",
    category: "Reagentes",
    stock: 900,
    price: 95.00,
    status: "Inativo",
    lastUpdated: "05/06/2024",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Adesivo Industrial",
    category: "Adesivos",
    stock: 250,
    price: 125.00,
    status: "Ativo",
    lastUpdated: "02/06/2024",
    image: "/placeholder.svg"
  }
];

const ProductCatalog = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/catalog"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-muted"
              >
                <Package className="h-5 w-5" />
                Catálogo de Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/supplier/analytics"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <BarChart className="h-5 w-5" />
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
        
        {/* Content */}
        <main className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Catálogo de Produtos</h1>
              <p className="text-muted-foreground">Gerencie seus produtos disponíveis no marketplace</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button size="sm" className="bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Novo Produto
              </Button>
            </div>
          </div>
          
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar produtos..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Products Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-right">Estoque</TableHead>
                    <TableHead className="text-right">Preço (R$)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Atualizado</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9 rounded-md">
                            <AvatarImage src={product.image} alt={product.name} />
                            <AvatarFallback className="rounded-md">{product.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{product.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right">{product.stock}</TableCell>
                      <TableCell className="text-right">{product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={product.status === "Ativo" ? "default" : "secondary"}
                          className={product.status === "Ativo" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Visualizar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ProductCatalog;
