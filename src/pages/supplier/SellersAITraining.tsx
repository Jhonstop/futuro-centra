
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
  Upload,
  FileText,
  PlusCircle,
  HelpCircle,
  Bot,
  Play,
  CheckCircle,
  RotateCcw,
  AlertCircle,
  RefreshCw,
  Brain,
  Video,
  MessageSquareText,
  Wand2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock data for training sessions
const trainingSessions = [
  {
    id: 1,
    name: "Apresentação de Produtos Químicos",
    status: "Completo",
    progress: 100,
    lastUpdated: "12/06/2024",
    type: "Script",
    interactions: 125
  },
  {
    id: 2,
    name: "Negociação de Preços",
    status: "Em treinamento",
    progress: 75,
    lastUpdated: "15/06/2024",
    type: "Diálogo",
    interactions: 89
  },
  {
    id: 3,
    name: "Respostas Técnicas",
    status: "Em treinamento",
    progress: 45,
    lastUpdated: "17/06/2024",
    type: "FAQ",
    interactions: 42
  }
];

// Mock data for product knowledge
const productKnowledge = [
  {
    id: 1,
    name: "Ácido Sulfúrico Industrial",
    trainingStatus: "Completo",
    accuracy: 97,
    documents: 5
  },
  {
    id: 2,
    name: "Solvente Ecológico",
    trainingStatus: "Completo",
    accuracy: 94,
    documents: 3
  },
  {
    id: 3,
    name: "Resina Epóxi Industrial",
    trainingStatus: "Em treinamento",
    accuracy: 82,
    documents: 4
  },
  {
    id: 4,
    name: "Pigmento Azul Ultramarino",
    trainingStatus: "Pendente",
    accuracy: 0,
    documents: 1
  }
];

const SellersAITraining = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("sessions");
  const [chatMessage, setChatMessage] = useState("");
  
  // Mock chat conversation
  const [chatConversation, setChatConversation] = useState([
    { sender: "bot", message: "Olá! Sou o assistente de vendas virtual da Química Global. Como posso ajudar você hoje?" },
    { sender: "user", message: "Você pode me falar sobre o Ácido Sulfúrico Industrial?" },
    { sender: "bot", message: "Claro! O Ácido Sulfúrico Industrial que oferecemos é um produto de alta pureza (98%) ideal para aplicações industriais. É utilizado principalmente em processos de tratamento de metais, fabricação de fertilizantes e processos químicos diversos. Temos disponibilidade para entrega em diferentes volumes, desde tambores de 200L até caminhões tanque. Gostaria de informações específicas sobre alguma aplicação ou sobre as condições comerciais?" }
  ]);
  
  const sendMessage = () => {
    if (chatMessage.trim()) {
      setChatConversation([...chatConversation, { sender: "user", message: chatMessage }]);
      setChatMessage("");
      
      // Simulate bot response after a short delay
      setTimeout(() => {
        setChatConversation(prev => [...prev, { 
          sender: "bot", 
          message: "Entendi sua solicitação. Nosso produto pode atender essas especificações. Seria interessante agendarmos uma reunião técnica para discutir em detalhes. Posso auxiliar com isso?" 
        }]);
      }, 1000);
    }
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
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-muted"
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
              <h1 className="text-3xl font-bold">Sellers IA</h1>
              <p className="text-muted-foreground">Treine assistentes virtuais para vender seus produtos</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Tutorial
              </Button>
              <Button size="sm" className="bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                <PlusCircle className="h-4 w-4 mr-2" />
                Nova Sessão de Treinamento
              </Button>
            </div>
          </div>
          
          {/* Main Content Tabs */}
          <Tabs defaultValue="sessions" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="sessions">Sessões de Treinamento</TabsTrigger>
              <TabsTrigger value="products">Conhecimento de Produtos</TabsTrigger>
              <TabsTrigger value="test">Testar IA</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>
            
            {/* Training Sessions Tab */}
            <TabsContent value="sessions">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingSessions.map((session) => (
                  <Card key={session.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{session.name}</CardTitle>
                        <Badge 
                          variant={session.status === "Completo" ? "default" : "secondary"}
                          className={session.status === "Completo" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                        >
                          {session.status}
                        </Badge>
                      </div>
                      <CardDescription>Atualizado em {session.lastUpdated}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progresso</span>
                            <span>{session.progress}%</span>
                          </div>
                          <Progress value={session.progress} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground">Tipo</p>
                            <p className="font-medium">{session.type}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Interações</p>
                            <p className="font-medium">{session.interactions}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                      {session.status === "Completo" ? (
                        <Button size="sm" className="bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                          <Play className="h-3 w-3 mr-2" />
                          Testar
                        </Button>
                      ) : (
                        <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                          <RefreshCw className="h-3 w-3 mr-2" />
                          Continuar
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
                
                {/* Add New Session Card */}
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center h-full py-12">
                    <PlusCircle className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-center text-muted-foreground mb-4">Criar uma nova sessão de treinamento para sua IA de vendas</p>
                    <Button size="sm" className="bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                      Nova Sessão
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Product Knowledge Tab */}
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Biblioteca de Conhecimento de Produtos</CardTitle>
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Adicionar Documentos
                    </Button>
                  </div>
                  <CardDescription>Arquivos e informações que o Sellers IA utiliza para responder sobre seus produtos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {productKnowledge.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-muted rounded-md">
                            <FileText className="h-6 w-6 text-centra-blue-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.documents} documentos</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge 
                              variant={
                                product.trainingStatus === "Completo" ? "default" : 
                                product.trainingStatus === "Em treinamento" ? "secondary" : "outline"
                              }
                              className={
                                product.trainingStatus === "Completo" ? "bg-green-100 text-green-800 hover:bg-green-100" : 
                                product.trainingStatus === "Em treinamento" ? "bg-amber-100 text-amber-800 hover:bg-amber-100" : ""
                              }
                            >
                              {product.trainingStatus}
                            </Badge>
                            {product.trainingStatus !== "Pendente" && (
                              <p className="text-sm mt-1">Precisão: {product.accuracy}%</p>
                            )}
                          </div>
                          <Button variant="outline" size="sm">
                            Gerenciar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Test AI Tab */}
            <TabsContent value="test">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Simular Conversa com Cliente</CardTitle>
                    <CardDescription>Teste como sua IA responde a perguntas de clientes</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[500px] flex flex-col">
                    <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                      {chatConversation.map((msg, idx) => (
                        <div 
                          key={idx} 
                          className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-lg p-3 ${
                              msg.sender === 'bot' 
                                ? 'bg-muted text-foreground' 
                                : 'bg-centra-blue-primary text-white'
                            }`}
                          >
                            {msg.message}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Digite sua mensagem..." 
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <Button 
                        className="bg-centra-blue-primary hover:bg-centra-blue-primary/90"
                        onClick={sendMessage}
                      >
                        Enviar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configurações do Teste</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="persona">Persona do Cliente</Label>
                        <Select defaultValue="purchasing">
                          <SelectTrigger id="persona">
                            <SelectValue placeholder="Selecione a persona" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="purchasing">Gerente de Compras</SelectItem>
                            <SelectItem value="technical">Engenheiro Técnico</SelectItem>
                            <SelectItem value="executive">Executivo C-Level</SelectItem>
                            <SelectItem value="newcustomer">Novo Cliente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="product-focus">Foco de Produto</Label>
                        <Select defaultValue="acid">
                          <SelectTrigger id="product-focus">
                            <SelectValue placeholder="Selecione o produto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="acid">Ácido Sulfúrico Industrial</SelectItem>
                            <SelectItem value="solvent">Solvente Ecológico</SelectItem>
                            <SelectItem value="resin">Resina Epóxi Industrial</SelectItem>
                            <SelectItem value="pigment">Pigmento Azul Ultramarino</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="scenario">Cenário</Label>
                        <Textarea 
                          id="scenario" 
                          placeholder="Descreva o cenário de vendas para teste..."
                          defaultValue="Cliente em busca de informações técnicas e preços para uma compra recorrente."
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reiniciar Conversa
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Análise de Desempenho</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Precisão Técnica</span>
                            <span className="text-sm font-medium">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Persuasão</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Velocidade de Resposta</span>
                            <span className="text-sm font-medium">96%</span>
                          </div>
                          <Progress value={96} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da IA</CardTitle>
                  <CardDescription>Personalize como seu assistente de vendas virtual se comporta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ai-name">Nome do Vendedor Virtual</Label>
                      <Input id="ai-name" defaultValue="Vendedor Química Global" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ai-personality">Personalidade</Label>
                      <Select defaultValue="professional">
                        <SelectTrigger id="ai-personality">
                          <SelectValue placeholder="Selecione a personalidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Profissional e Técnico</SelectItem>
                          <SelectItem value="friendly">Amigável e Acessível</SelectItem>
                          <SelectItem value="persuasive">Persuasivo e Assertivo</SelectItem>
                          <SelectItem value="expert">Especialista Detalhado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="intro-message">Mensagem de Introdução</Label>
                    <Textarea 
                      id="intro-message" 
                      rows={3}
                      defaultValue="Olá! Sou o assistente de vendas virtual da Química Global. Como posso ajudar você hoje?" 
                    />
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="advanced">
                      <AccordionTrigger>Configurações Avançadas</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="temperature">Temperatura da IA</Label>
                            <Input id="temperature" type="number" min="0" max="1" step="0.1" defaultValue="0.7" />
                            <p className="text-xs text-muted-foreground">Valores mais altos = respostas mais criativas</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="max-tokens">Tamanho Máximo de Resposta</Label>
                            <Input id="max-tokens" type="number" min="100" max="4000" step="50" defaultValue="1000" />
                            <p className="text-xs text-muted-foreground">Número máximo de tokens na resposta</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="model">Modelo de IA</Label>
                            <Select defaultValue="gpt-4">
                              <SelectTrigger id="model">
                                <SelectValue placeholder="Selecione o modelo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="gpt-4">GPT-4 (Recomendado)</SelectItem>
                                <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                                <SelectItem value="claude">Claude 2</SelectItem>
                                <SelectItem value="custom">Modelo Personalizado</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Restaurar Padrões</Button>
                  <Button className="bg-centra-blue-primary hover:bg-centra-blue-primary/90">Salvar Configurações</Button>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Bot className="h-5 w-5 mr-2 text-centra-blue-primary" />
                      Integrações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Conecte seu Sellers IA com outras plataformas</p>
                    <div className="mt-4 space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquareText className="h-4 w-4 mr-2" />
                        WhatsApp Business
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat do Site
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-centra-blue-primary" />
                      Treinamento Avançado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Métodos adicionais para melhorar seu Sellers IA</p>
                    <div className="mt-4 space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Video className="h-4 w-4 mr-2" />
                        Webinar de Treinamento
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Wand2 className="h-4 w-4 mr-2" />
                        Assistente de Configuração
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-centra-blue-primary" />
                      Suporte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Precisa de ajuda com seu Sellers IA?</p>
                    <div className="mt-4 space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat de Suporte
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Documentação
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default SellersAITraining;
