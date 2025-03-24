
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, Box, Wallet } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Indústria Química",
    subcategories: ["Solventes", "Resinas", "Pigmentos", "Adesivos", "Reagentes", "Polímeros", "Catalisadores", "Ácidos"]
  },
  {
    name: "Agropecuária",
    subcategories: ["Sementes", "Fertilizantes", "Equipamentos", "Defensivos", "Irrigação", "Tratores", "Implementos", "Rações"]
  },
  {
    name: "Construção Civil",
    subcategories: ["Cimento", "Madeira", "Metais", "Ferramentas", "Elétricos", "Hidráulicos", "Revestimentos", "Isolamentos"]
  },
  {
    name: "Têxtil e Vestuário",
    subcategories: ["Tecidos", "Fios", "Aviamentos", "Máquinas", "Confecções", "Estamparia", "Tinturaria", "Couro"]
  },
  {
    name: "Metalurgia",
    subcategories: ["Aços", "Alumínio", "Cobre", "Fundição", "Forjaria", "Usinagem", "Tratamento Térmico", "Ferramentas"]
  },
  {
    name: "Alimentos e Bebidas",
    subcategories: ["Insumos", "Embalagens", "Maquinário", "Panificação", "Laticínios", "Conservantes", "Bebidas", "Açúcar"]
  },
  {
    name: "Tecnologia",
    subcategories: ["Componentes", "Equipamentos", "Servidores", "Software", "Automação", "Periféricos", "Infraestrutura", "Segurança"]
  },
  {
    name: "Farmacêutico",
    subcategories: ["Matéria-prima", "Equipamentos", "Embalagens", "Reagentes", "Insumos", "Higiene", "Cosméticos", "Testes"]
  },
  {
    name: "Plásticos e Borracha",
    subcategories: ["Polímeros", "Resinas", "Extrusão", "Injeção", "Elastômeros", "Tubos", "Filmes", "Componentes"]
  },
  {
    name: "Energia",
    subcategories: ["Painéis Solares", "Geradores", "Transformadores", "Baterias", "Caldeiras", "Turbinas", "Transmissão", "Controle"]
  }
];

const MarketplaceNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-centra-blue-primary">CENTRA</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <NavigationMenuLink asChild>
                            <Link
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              to={`/marketplace?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory)}`}
                            >
                              <div className="text-sm font-medium leading-none">{subcategory}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="hidden md:flex relative w-full max-w-sm mx-6">
          <Input
            type="search"
            placeholder="Busque produtos, fornecedores..."
            className="pr-10"
          />
          <Button variant="ghost" size="icon" className="absolute right-0 top-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/marketplace/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/centrapay">
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2"
            >
              <Wallet className="h-4 w-4" />
              Centra Pay
            </Button>
          </Link>
          
          <Link to="/supplier">
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2"
            >
              <Box className="h-4 w-4" />
              Central do Fornecedor
            </Button>
          </Link>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Busque produtos, fornecedores..."
              className="pr-10"
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="font-medium">{category.name}</div>
                <div className="pl-4 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <Link 
                      key={subcategory}
                      to={`/marketplace?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory)}`}
                      className="block text-sm text-muted-foreground hover:text-foreground py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-2 space-y-2">
            <Button 
              className="w-full bg-centra-blue-primary hover:bg-centra-blue-primary/90"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link to="/centrapay" className="flex items-center justify-center">
                <Wallet className="mr-2 h-4 w-4" />
                Centra Pay
              </Link>
            </Button>
            
            <Button 
              className="w-full bg-centra-blue-primary hover:bg-centra-blue-primary/90"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link to="/supplier" className="flex items-center justify-center">
                <Box className="mr-2 h-4 w-4" />
                Central do Fornecedor
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MarketplaceNav;
