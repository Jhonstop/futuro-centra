
import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShoppingBag, Box, Wallet, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  // Animation for the grid background pattern
  useEffect(() => {
    const animateGridPattern = () => {
      const elem = elementRef.current;
      if (!elem) return;
      
      const mouseMove = (e: MouseEvent) => {
        if (!elem) return;
        const { left, top, width, height } = elem.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        elem.style.setProperty('--mouse-x', `${x * 15}px`);
        elem.style.setProperty('--mouse-y', `${y * 15}px`);
      };
      
      document.addEventListener('mousemove', mouseMove);
      return () => document.removeEventListener('mousemove', mouseMove);
    };
    
    const cleanup = animateGridPattern();
    return cleanup;
  }, []);

  return (
    <section 
      id="início" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      ref={elementRef}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-centra-light via-white to-centra-light opacity-70 pointer-events-none"></div>
      
      {/* Grid pattern that moves with mouse */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(41, 70, 229, 0.15) 0%, transparent 8%)`,
          backgroundSize: '60px 60px',
          transform: 'translate3d(var(--mouse-x, 0), var(--mouse-y, 0), 0)',
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-[15%] w-40 h-40 rounded-full bg-centra-blue-primary opacity-10 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[15%] w-32 h-32 rounded-full bg-centra-blue-secondary opacity-10 blur-3xl animate-float animation-delay-300 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 md:pr-8">
            <div className="inline-block">
              <span className="bg-centra-blue-primary/10 text-centra-blue-primary px-4 py-1.5 rounded-full text-sm font-semibold animate-fade-in">
                Revolucionando o e-commerce B2B
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
              <span className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent">
                Conectando
              </span> empresas com inteligência
            </h1>
            
            <p className="text-lg md:text-xl text-centra-dark/80 animate-fade-in animation-delay-200">
              Plataforma de e-commerce B2B avançada que simplifica a conexão entre fabricantes, distribuidores e compradores com foco em matérias-primas.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animation-delay-300">
              <Button 
                className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white hover:shadow-lg transition-all duration-300 hover:scale-105 text-base py-6 px-8"
                asChild
              >
                <Link to="/marketplace">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Acessar Marketplace
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-centra-blue-primary/30 text-centra-blue-primary hover:bg-centra-blue-primary/5 transition-all duration-300 text-base py-6 px-8"
                asChild
              >
                <Link to="/supplier">
                  <Box className="mr-2 h-5 w-5" />
                  Área do Fornecedor
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-centra-blue-primary/30 text-centra-blue-primary hover:bg-centra-blue-primary/5 transition-all duration-300 text-base py-6 px-8"
                asChild
              >
                <Link to="/centrapay">
                  <Wallet className="mr-2 h-5 w-5" />
                  Centra Pay
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-centra-blue-primary/30 text-centra-blue-primary hover:bg-centra-blue-primary/5 transition-all duration-300 text-base py-6 px-8"
                asChild
              >
                <Link to="/erp">
                  <Server className="mr-2 h-5 w-5" />
                  Sistema
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4 opacity-80 animate-fade-in animation-delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-centra-blue-primary to-centra-blue-secondary flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm">
                + 500 empresas já conectadas
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 h-full flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-centra-blue-primary/20 to-centra-blue-secondary/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
              <div className="relative glass rounded-3xl p-6 w-full h-full flex items-center justify-center animate-scale-in shadow-xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Replace with actual dashboard image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-centra-blue-primary to-centra-blue-secondary flex items-center justify-center">
                    <div className="text-white text-3xl font-bold">Dashboard Centra</div>
                  </div>
                </div>
              </div>
              
              {/* Small floating card elements */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-lg animate-float animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-centra-blue-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Cotação automática</p>
                    <p className="text-xs text-centra-dark/60">Processo simplificado</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4 shadow-lg animate-float animation-delay-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-centra-blue-secondary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Sellers IA</p>
                    <p className="text-xs text-centra-dark/60">Vendedores virtuais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
