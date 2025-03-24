
import { Link } from "react-router-dom";
import { Wallet, Bell, User, Menu, X, Home } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CentraPayNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent">
              CENTRA PAY
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link to="/centrapay" className="text-foreground font-medium">Dashboard</Link>
            <Link to="/centrapay" className="text-muted-foreground hover:text-foreground transition-colors">Extrato</Link>
            <Link to="/centrapay" className="text-muted-foreground hover:text-foreground transition-colors">Cartões</Link>
            <Link to="/centrapay" className="text-muted-foreground hover:text-foreground transition-colors">Pagamentos</Link>
            <Link to="/centrapay" className="text-muted-foreground hover:text-foreground transition-colors">Cobranças</Link>
            <Link to="/centrapay" className="text-muted-foreground hover:text-foreground transition-colors">Investimentos</Link>
          </nav>
          
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Home className="h-5 w-5" />
              <span className="sr-only">Ir para página inicial</span>
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificações</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>CP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Ajuda</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/centrapay" 
              className="text-foreground font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            {["Extrato", "Cartões", "Pagamentos", "Cobranças", "Investimentos"].map((item) => (
              <Link 
                key={item}
                to="/centrapay" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              Página Inicial
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CentraPayNav;
