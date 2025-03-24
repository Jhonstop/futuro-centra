
import React, { useEffect, useRef } from 'react';
import { Beaker, Warehouse, Building2 } from 'lucide-react';

const industries = [
  {
    icon: <Beaker className="h-10 w-10" />,
    name: "Indústria Química",
    percentage: "40%",
    description: "Fabricantes e distribuidores de produtos químicos buscando eficiência nas compras e fornecimento.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    icon: <Warehouse className="h-10 w-10" />,
    name: "Agropecuária",
    percentage: "35%",
    description: "Compradores e fornecedores do setor agropecuário focados em otimização de operações.",
    color: "from-green-600 to-teal-500"
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    name: "Construção Civil",
    percentage: "25%",
    description: "Empresas que necessitam de materiais de construção de forma rápida e confiável.",
    color: "from-amber-600 to-orange-500"
  }
];

const Industries = () => {
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = industriesRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (industriesRef.current) {
      observer.observe(industriesRef.current);
    }

    return () => {
      if (industriesRef.current) {
        observer.unobserve(industriesRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="indústrias" 
      className="py-24 bg-white relative overflow-hidden"
      ref={industriesRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-centra-blue-primary opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-centra-blue-secondary opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block reveal">
            <span className="bg-centra-blue-primary/10 text-centra-blue-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              Setores que Atendemos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal">
            Soluções específicas para 
            <span className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent ml-2">
              múltiplos setores
            </span>
          </h2>
          <p className="text-lg text-centra-dark/80 reveal">
            A plataforma Centra é versátil e atende às necessidades específicas de diferentes segmentos do mercado B2B.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col reveal">
                <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${industry.color} text-white`}>
                  {industry.icon}
                </div>
                
                <div className="flex items-end gap-2 mb-4">
                  <h3 className="text-2xl font-bold">{industry.name}</h3>
                  <span className="text-lg font-semibold text-centra-blue-primary">{industry.percentage}</span>
                </div>
                
                <p className="text-centra-dark/70 mb-6">{industry.description}</p>
                
                <div className="mt-auto">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${industry.color}`}
                      style={{ width: industry.percentage }}
                    ></div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm text-centra-dark/60">Participação na plataforma</span>
                    <span className="font-semibold">{industry.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-centra-blue-light to-white border border-centra-blue-light/30 shadow-lg text-centra-dark reveal">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Está em outro setor?</h3>
            <p className="text-centra-dark/80 mb-6">
              A Centra está em constante expansão. Estamos trabalhando para integrar novos setores à nossa plataforma. Entre em contato para saber mais sobre como podemos atender às necessidades específicas do seu negócio.
            </p>
            <button className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white rounded-lg px-6 py-3 font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Fale com um Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
