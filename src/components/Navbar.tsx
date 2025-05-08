
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Box, Wallet, Server, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent">
              Centra
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Recursos', 'Sobre', 'Indústrias', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-centra-dark font-medium hover-link"
            >
              {item}
            </a>
          ))}
          
          <Button 
            variant="ghost"
            className="text-centra-blue-primary hover:bg-centra-blue-primary/5"
            asChild
          >
            <Link to="/marketplace" className="flex items-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Marketplace
            </Link>
          </Button>
          
          <Button 
            variant="ghost"
            className="text-centra-blue-primary hover:bg-centra-blue-primary/5"
            asChild
          >
            <Link to="/centrapay" className="flex items-center">
              <Wallet className="mr-2 h-4 w-4" />
              Centra Pay
            </Link>
          </Button>
          
          <Button 
            variant="ghost"
            className="text-centra-blue-primary hover:bg-centra-blue-primary/5"
            asChild
          >
            <Link to="/erp" className="flex items-center">
              <Server className="mr-2 h-4 w-4" />
              Sistema
            </Link>
          </Button>
          
          <Button 
            variant="ghost"
            className="text-centra-blue-primary hover:bg-centra-blue-primary/5"
            asChild
          >
            <Link to="/register-company" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Cadastrar Empresas
            </Link>
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/supplier">
              <Box className="mr-2 h-4 w-4" />
              Área do Fornecedor
            </Link>
          </Button>
        </nav>

        <button 
          className="md:hidden text-centra-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container mx-auto px-6">
            <div className="flex flex-col space-y-4">
              {['Início', 'Recursos', 'Sobre', 'Indústrias', 'Contato'].map((item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-centra-dark font-medium py-2 hover:text-centra-blue-primary transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <Link 
                to="/marketplace"
                className="text-centra-dark font-medium py-2 hover:text-centra-blue-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Marketplace
              </Link>
              
              <Link 
                to="/centrapay"
                className="text-centra-dark font-medium py-2 hover:text-centra-blue-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wallet className="mr-2 h-4 w-4" />
                Centra Pay
              </Link>
              
              <Link 
                to="/erp"
                className="text-centra-dark font-medium py-2 hover:text-centra-blue-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Server className="mr-2 h-4 w-4" />
                Sistema
              </Link>
              
              <Link 
                to="/register-company"
                className="text-centra-dark font-medium py-2 hover:text-centra-blue-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="mr-2 h-4 w-4" />
                Cadastrar Empresas
              </Link>
              
              <Button 
                className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white w-full"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to="/supplier">
                  <Box className="mr-2 h-4 w-4" />
                  Área do Fornecedor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
