
import { useEffect, useRef } from 'react';
import { 
  BarChart, 
  ShieldCheck, 
  Truck, 
  Bot, 
  LineChart, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Automação de Cotações",
    description: "Processos simplificados para solicitar e receber cotações de forma rápida e eficiente.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Rede Verificada",
    description: "Garantia de que todas as empresas cadastradas sejam confiáveis e atendam aos padrões de qualidade.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Integração Logística",
    description: "Conexão direta com transportadoras e seguradoras para cotações de frete em tempo real.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Sellers IA",
    description: "IA treinada para atuar como vendedores virtuais, respondendo perguntas e negociando automaticamente.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Dashboard Centralizado",
    description: "Interface intuitiva para fornecedores gerenciarem seus produtos, pedidos e promoções.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Análise Inteligente",
    description: "Insights de mercado e análises preditivas para otimizar decisões de compra e venda.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = featuresRef.current?.querySelectorAll('.reveal');
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="recursos" 
      className="py-24 bg-white relative overflow-hidden" 
      ref={featuresRef}
    >
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-centra-blue-primary opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-centra-blue-secondary opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="bg-centra-blue-primary/10 text-centra-blue-primary px-4 py-1.5 rounded-full text-sm font-semibold reveal">
              Funcionalidades
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal">
            Tecnologia inovadora para 
            <span className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent ml-2">
              transformar seu negócio
            </span>
          </h2>
          <p className="text-lg text-centra-dark/80 reveal">
            Nossa plataforma oferece ferramentas poderosas para otimizar seus processos de compra e venda no mercado B2B.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 reveal"
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${feature.color} text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-centra-dark/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Impulsione seus resultados com a Centra</h3>
              <p className="opacity-90 mb-6">Nossa plataforma foi projetada para simplificar processos, reduzir custos e aumentar a eficiência operacional.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2 items-center">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Transações seguras</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Bot className="h-5 w-5" />
                  <span>Automação inteligente</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Truck className="h-5 w-5" />
                  <span>Logística integrada</span>
                </div>
                <div className="flex gap-2 items-center">
                  <LineChart className="h-5 w-5" />
                  <span>Análise avançada</span>
                </div>
              </div>
            </div>
            <div className="glass-dark rounded-xl p-6 overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                </div>
                <div className="text-sm opacity-70">dashboard.centra.com.br</div>
              </div>
              <div className="bg-centra-dark/50 rounded-lg p-4 h-40 flex items-center justify-center">
                <p className="text-white/60 text-center">Visualização do Dashboard</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="bg-white/10 rounded p-2">
                  <div className="text-xs opacity-70">Cotações</div>
                  <div className="text-lg font-bold">128</div>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <div className="text-xs opacity-70">Pedidos</div>
                  <div className="text-lg font-bold">64</div>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <div className="text-xs opacity-70">ROI</div>
                  <div className="text-lg font-bold">+37%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
