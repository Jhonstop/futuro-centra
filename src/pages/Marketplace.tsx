
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MarketplaceNav from "@/components/MarketplaceNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Truck, Filter, ShieldCheck, Leaf, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock data for products with expanded categories
const mockProducts = [
  {
    id: 1,
    name: "Ácido Sulfúrico Industrial",
    supplier: "Química Global",
    price: 1250.00,
    minOrder: 100,
    unit: "litros",
    image: "https://images.unsplash.com/photo-1616069531665-0ce5ce2ab8c1?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.8,
    reviews: 124,
    verified: true,
    category: "Indústria Química",
    subcategory: "Reagentes",
    location: "São Paulo, SP",
    delivery: "5-7 dias",
    sustainable: true
  },
  {
    id: 2,
    name: "Solvente Ecológico Multiuso",
    supplier: "EcoSolv Brasil",
    price: 890.00,
    minOrder: 50,
    unit: "galões",
    image: "https://images.unsplash.com/photo-1616250163935-d1d921b1e897?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.5,
    reviews: 87,
    verified: true,
    category: "Indústria Química",
    subcategory: "Solventes",
    location: "Campinas, SP",
    delivery: "3-5 dias",
    sustainable: true
  },
  {
    id: 3,
    name: "Fertilizante Orgânico Premium",
    supplier: "AgroVerde",
    price: 780.00,
    minOrder: 200,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1584941963259-780e261eaa53?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.7,
    reviews: 156,
    verified: true,
    category: "Agropecuária",
    subcategory: "Fertilizantes",
    location: "Ribeirão Preto, SP",
    delivery: "5-7 dias",
    sustainable: true
  },
  {
    id: 4,
    name: "Cimento CP-II Estrutural",
    supplier: "ConstruBuild",
    price: 2200.00,
    minOrder: 100,
    unit: "sacos",
    image: "https://images.unsplash.com/photo-1607224610576-918ec9d0b29c?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.6,
    reviews: 98,
    verified: true,
    category: "Construção Civil",
    subcategory: "Cimento",
    location: "Belo Horizonte, MG",
    delivery: "2-3 dias",
    sustainable: false
  },
  {
    id: 5,
    name: "Resina Epóxi Industrial",
    supplier: "ResiBond",
    price: 3400.00,
    minOrder: 25,
    unit: "galões",
    image: "https://images.unsplash.com/photo-1635241161466-541f065683ba?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.9,
    reviews: 76,
    verified: true,
    category: "Indústria Química",
    subcategory: "Resinas",
    location: "Joinville, SC",
    delivery: "7-10 dias",
    sustainable: false
  },
  {
    id: 6,
    name: "Fertilizante Mineral NPK",
    supplier: "Nutrisolos",
    price: 920.00,
    minOrder: 150,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1632923058016-adb7aa036cd2?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.6,
    reviews: 112,
    verified: true,
    category: "Agropecuária",
    subcategory: "Fertilizantes",
    location: "Londrina, PR",
    delivery: "3-5 dias",
    sustainable: false
  },
  {
    id: 7,
    name: "Pigmento Azul Ultramarino",
    supplier: "ColorTech",
    price: 1700.00,
    minOrder: 10,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1557178985-891ca9b9b01c?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.7,
    reviews: 64,
    verified: true,
    category: "Indústria Química",
    subcategory: "Pigmentos",
    location: "Curitiba, PR",
    delivery: "5-7 dias",
    sustainable: false
  },
  {
    id: 8,
    name: "Kit Ferramentas Elétricas",
    supplier: "ToolMaster",
    price: 4200.00,
    minOrder: 5,
    unit: "kits",
    image: "https://images.unsplash.com/photo-1581147036324-c47a03a31afd?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.8,
    reviews: 93,
    verified: true,
    category: "Construção Civil",
    subcategory: "Ferramentas",
    location: "São José dos Campos, SP",
    delivery: "5-7 dias",
    sustainable: false
  },
  {
    id: 9,
    name: "Tecido Algodão Orgânico",
    supplier: "EcoFibras",
    price: 45.00,
    minOrder: 100,
    unit: "metros",
    image: "https://images.unsplash.com/photo-1620814153812-ca5c014e6312?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.9,
    reviews: 78,
    verified: true,
    category: "Têxtil e Vestuário",
    subcategory: "Tecidos",
    location: "São Paulo, SP",
    delivery: "2-4 dias",
    sustainable: true
  },
  {
    id: 10,
    name: "Aço Carbono Estrutural",
    supplier: "AçoForte",
    price: 3800.00,
    minOrder: 10,
    unit: "toneladas",
    image: "https://images.unsplash.com/photo-1547623542-de3ff5e71629?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.6,
    reviews: 112,
    verified: true,
    category: "Metalurgia",
    subcategory: "Aços",
    location: "Belo Horizonte, MG",
    delivery: "7-10 dias",
    sustainable: false
  },
  {
    id: 11,
    name: "Kits de Embalagens para Alimentos",
    supplier: "FoodPack",
    price: 2300.00,
    minOrder: 500,
    unit: "unidades",
    image: "https://images.unsplash.com/photo-1607215895663-8d3cd15235bc?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.7,
    reviews: 89,
    verified: true,
    category: "Alimentos e Bebidas",
    subcategory: "Embalagens",
    location: "Curitiba, PR",
    delivery: "3-5 dias",
    sustainable: true
  },
  {
    id: 12,
    name: "Servidor Rack 2U Enterprise",
    supplier: "TechPower",
    price: 15800.00,
    minOrder: 1,
    unit: "unidades",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.9,
    reviews: 42,
    verified: true,
    category: "Tecnologia",
    subcategory: "Servidores",
    location: "São Paulo, SP",
    delivery: "10-15 dias",
    sustainable: false
  },
  {
    id: 13,
    name: "Álcool Cetílico Farmacêutico",
    supplier: "PharmaQuímica",
    price: 780.00,
    minOrder: 25,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1563804447971-6e113ab80713?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.8,
    reviews: 63,
    verified: true,
    category: "Farmacêutico",
    subcategory: "Matéria-prima",
    location: "Campinas, SP",
    delivery: "3-5 dias",
    sustainable: false
  },
  {
    id: 14,
    name: "Filme Stretch PVC Industrial",
    supplier: "PlastiPack",
    price: 420.00,
    minOrder: 50,
    unit: "rolos",
    image: "https://images.unsplash.com/photo-1601522268029-cecbf53e8dfc?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.5,
    reviews: 74,
    verified: true,
    category: "Plásticos e Borracha",
    subcategory: "Filmes",
    location: "Joinville, SC",
    delivery: "2-4 dias",
    sustainable: false
  },
  {
    id: 15,
    name: "Painel Solar 450W Monocristalino",
    supplier: "SolarTech",
    price: 1250.00,
    minOrder: 10,
    unit: "unidades",
    image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.9,
    reviews: 98,
    verified: true,
    category: "Energia",
    subcategory: "Painéis Solares",
    location: "São Paulo, SP",
    delivery: "7-10 dias",
    sustainable: true
  },
  {
    id: 16,
    name: "Máquina de Costura Industrial",
    supplier: "TextilEquip",
    price: 7800.00,
    minOrder: 1,
    unit: "unidades",
    image: "https://images.unsplash.com/photo-1522319920965-3d8cbc5dfaf2?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    rating: 4.7,
    reviews: 42,
    verified: true,
    category: "Têxtil e Vestuário",
    subcategory: "Máquinas",
    location: "Blumenau, SC",
    delivery: "10-15 dias",
    sustainable: false
  }
];

const Marketplace = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [sortOption, setSortOption] = useState("relevance");
  const [viewType, setViewType] = useState("grid");
  const [sustainableOnly, setSustainableOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const categoryFilter = searchParams.get("category");
  const subcategoryFilter = searchParams.get("subcategory");

  useEffect(() => {
    let filtered = [...mockProducts];
    
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    if (subcategoryFilter) {
      filtered = filtered.filter(product => product.subcategory === subcategoryFilter);
    }
    
    if (sustainableOnly) {
      filtered = filtered.filter(product => product.sustainable);
    }

    if (verifiedOnly) {
      filtered = filtered.filter(product => product.verified);
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // relevance is default, keep original order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [categoryFilter, subcategoryFilter, sortOption, sustainableOnly, verifiedOnly]);

  return (
    <div className="min-h-screen flex flex-col">
      <MarketplaceNav />
      
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-centra-blue-primary">
            {subcategoryFilter || categoryFilter || "Todos os Produtos"}
          </h1>
          <p className="text-muted-foreground mt-2">
            Encontre as melhores soluções para sua empresa
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Mobile View */}
          <div className="md:hidden mb-4">
            <Button variant="outline" className="w-full flex items-center justify-between">
              <span>Filtros</span>
              <Filter className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          {/* Filters - Desktop View */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="font-medium text-lg">Filtros</div>
            
            <div>
              <h3 className="font-medium mb-2">Localização</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="loc-sp" className="mr-2" />
                  <label htmlFor="loc-sp" className="text-sm">São Paulo</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="loc-rj" className="mr-2" />
                  <label htmlFor="loc-rj" className="text-sm">Rio de Janeiro</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="loc-mg" className="mr-2" />
                  <label htmlFor="loc-mg" className="text-sm">Minas Gerais</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="loc-sc" className="mr-2" />
                  <label htmlFor="loc-sc" className="text-sm">Santa Catarina</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="loc-pr" className="mr-2" />
                  <label htmlFor="loc-pr" className="text-sm">Paraná</label>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Preço</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="mr-2" />
                  <label htmlFor="price-1" className="text-sm">Até R$ 1.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="mr-2" />
                  <label htmlFor="price-2" className="text-sm">R$ 1.000 - R$ 2.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="mr-2" />
                  <label htmlFor="price-3" className="text-sm">R$ 2.000 - R$ 5.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="mr-2" />
                  <label htmlFor="price-4" className="text-sm">Acima de R$ 5.000</label>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Avaliação</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="rating-4" className="mr-2" />
                  <label htmlFor="rating-4" className="text-sm flex items-center">
                    4★ & acima
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="rating-3" className="mr-2" />
                  <label htmlFor="rating-3" className="text-sm flex items-center">
                    3★ & acima
                  </label>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Fornecedor</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="verified" 
                    className="mr-2"
                    checked={verifiedOnly}
                    onChange={() => setVerifiedOnly(!verifiedOnly)}
                  />
                  <label htmlFor="verified" className="text-sm flex items-center">
                    Verificado
                    <Check className="h-3 w-3 ml-1 text-green-500" />
                  </label>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Sustentabilidade</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="sustainable" 
                    className="mr-2"
                    checked={sustainableOnly}
                    onChange={() => setSustainableOnly(!sustainableOnly)}
                  />
                  <label htmlFor="sustainable" className="text-sm flex items-center">
                    Produtos Sustentáveis
                    <Leaf className="h-3 w-3 ml-1 text-green-500" />
                  </label>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Prazo de Entrega</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="delivery-1" className="mr-2" />
                  <label htmlFor="delivery-1" className="text-sm">Até 3 dias</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="delivery-2" className="mr-2" />
                  <label htmlFor="delivery-2" className="text-sm">3-7 dias</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="delivery-3" className="mr-2" />
                  <label htmlFor="delivery-3" className="text-sm">7+ dias</label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="text-sm text-muted-foreground">
                {filteredProducts.length} resultados
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-sm mr-2">Ordenar por:</label>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Relevância" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevância</SelectItem>
                      <SelectItem value="price-low">Menor Preço</SelectItem>
                      <SelectItem value="price-high">Maior Preço</SelectItem>
                      <SelectItem value="rating">Melhor Avaliação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex rounded-md border overflow-hidden">
                  <Button 
                    variant={viewType === "grid" ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setViewType("grid")}
                    className="rounded-none px-3"
                  >
                    Grade
                  </Button>
                  <Button 
                    variant={viewType === "list" ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setViewType("list")}
                    className="rounded-none px-3"
                  >
                    Lista
                  </Button>
                </div>
              </div>
            </div>
            
            {viewType === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {product.sustainable && (
                        <Badge variant="outline" className="absolute top-2 right-2 bg-green-50 text-green-700 border-green-200">
                          <Leaf className="h-3 w-3 mr-1" /> Sustentável
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base line-clamp-2">
                          <a href={`/product/${product.id}`}>{product.name}</a>
                        </CardTitle>
                        {product.verified && (
                          <Badge variant="outline" className="ml-2 flex items-center gap-1 text-xs bg-green-50 text-green-700 border-green-200">
                            <ShieldCheck className="h-3 w-3" /> Verificado
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {product.supplier}
                      </div>
                      <div className="flex items-center mt-2 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 font-medium">{product.rating}</span>
                        </div>
                        <span className="mx-1 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{product.reviews} avaliações</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="font-bold text-lg text-centra-blue-primary">
                        R$ {product.price.toLocaleString('pt-BR')}
                        <span className="text-xs font-normal text-muted-foreground ml-1">
                          / {product.unit}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Pedido mínimo: {product.minOrder} {product.unit}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Truck className="h-3 w-3 mr-1" />
                          {product.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Entrega: {product.delivery}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                        Solicitar Cotação
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 relative">
                        <div className="aspect-video md:h-full overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        {product.sustainable && (
                          <Badge variant="outline" className="absolute top-2 right-2 bg-green-50 text-green-700 border-green-200">
                            <Leaf className="h-3 w-3 mr-1" /> Sustentável
                          </Badge>
                        )}
                      </div>
                      <div className="md:w-3/4 p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-lg">
                                <a href={`/product/${product.id}`}>{product.name}</a>
                              </h3>
                              {product.verified && (
                                <Badge variant="outline" className="flex items-center gap-1 text-xs bg-green-50 text-green-700 border-green-200">
                                  <ShieldCheck className="h-3 w-3" /> Verificado
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{product.supplier}</p>
                            <div className="flex items-center mt-1 text-sm">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span className="ml-1 font-medium">{product.rating}</span>
                              </div>
                              <span className="mx-1 text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{product.reviews} avaliações</span>
                            </div>
                            <div className="mt-2">
                              <Badge className="mr-2">{product.category}</Badge>
                              <Badge variant="outline">{product.subcategory}</Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-muted-foreground">
                              <div className="flex items-center">
                                <Truck className="h-3 w-3 mr-1" />
                                {product.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                Entrega: {product.delivery}
                              </div>
                            </div>
                          </div>
                          
                          <div className="md:text-right">
                            <div className="font-bold text-lg text-centra-blue-primary">
                              R$ {product.price.toLocaleString('pt-BR')}
                              <span className="text-xs font-normal text-muted-foreground ml-1">
                                / {product.unit}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Pedido mínimo: {product.minOrder} {product.unit}
                            </div>
                            <Button className="mt-4 w-full md:w-auto bg-centra-blue-primary hover:bg-centra-blue-primary/90">
                              Solicitar Cotação
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-auto border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2024 Centra. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Marketplace;
