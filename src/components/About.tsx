import { useEffect, useRef } from 'react';
import { Users, Award, Lightbulb, Briefcase } from 'lucide-react';

const Shield = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const Zap = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const valueItems = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Inovação",
    description: "Constantemente buscando soluções criativas e disruptivas."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Confiabilidade",
    description: "Compromisso com a transparência e segurança em todas as operações."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Eficiência",
    description: "Processos otimizados para economizar tempo e recursos."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Qualidade",
    description: "Excelência em cada aspecto da plataforma e do atendimento."
  }
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = aboutRef.current?.querySelectorAll('.reveal');
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="sobre" 
      className="py-24 bg-centra-light/50 relative overflow-hidden"
      ref={aboutRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{
          backgroundImage: 'radial-gradient(rgba(41, 70, 229, 0.3) 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block reveal">
              <span className="bg-centra-blue-primary/10 text-centra-blue-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                Nossa História
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal">
              Transformando o mercado B2B com 
              <span className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent ml-2">
                experiência e inovação
              </span>
            </h2>
            
            <p className="text-lg text-centra-dark/80 mb-6 reveal">
              A Centra nasceu da experiência prática de seu fundador, Guilherme Bosak, enquanto trabalhava em uma fábrica de tintas. Durante o processo, ele enfrentou desafios ao realizar cotações de baldes e insumos, percebendo o tempo e a complexidade envolvidos.
            </p>
            
            <p className="text-lg text-centra-dark/80 mb-8 reveal">
              Além disso, vender os produtos fabricados revelou-se igualmente difícil, evidenciando como a compra e venda são pilares fundamentais para qualquer empresa. Essa jornada inspirou a criação da Centra, uma solução completa para simplificar e conectar negócios no mercado B2B.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8 reveal">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-centra-dark/70">Empresas conectadas</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white flex items-center justify-center">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-centra-dark/70">Setores atendidos</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative reveal">
            {/* Main image container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-centra-blue-primary to-centra-blue-secondary relative">
                {/* Placeholder for actual founder image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                  Guilherme Bosak, Fundador
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-64 h-64 rounded-full bg-centra-blue-secondary opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-48 h-48 rounded-full bg-centra-blue-primary opacity-20 blur-3xl"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 z-20 opacity-30 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block reveal">
              <span className="bg-centra-blue-primary/10 text-centra-blue-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                Nossos Valores
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal">
              Princípios que nos
              <span className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent ml-2">
                guiam diariamente
              </span>
            </h2>
            <p className="text-lg text-centra-dark/80 reveal">
              Na Centra, acreditamos que valores sólidos são a base para construir relacionamentos duradouros e soluções impactantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 reveal"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-centra-blue-primary/10 to-centra-blue-secondary/10 text-centra-blue-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-centra-dark/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
