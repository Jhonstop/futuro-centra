
import { useEffect, useRef } from 'react';
import { MessageSquare, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = contactRef.current?.querySelectorAll('.reveal');
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contato" 
      className="py-24 bg-centra-light/70 relative overflow-hidden"
      ref={contactRef}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-centra-blue-primary/20 to-centra-blue-secondary/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-centra-blue-primary/20 to-centra-blue-secondary/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block reveal">
              <span className="bg-centra-blue-primary/10 text-centra-blue-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                Entre em Contato
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal">
              Pronto para
              <span className="bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary bg-clip-text text-transparent ml-2">
                revolucionar suas operações B2B?
              </span>
            </h2>
            
            <p className="text-lg text-centra-dark/80 mb-8 reveal">
              Entre em contato com nossa equipe para saber como a Centra pode transformar seus processos de compra e venda, aumentando a eficiência e reduzindo custos.
            </p>
            
            <div className="space-y-6 reveal">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-centra-blue-primary/10 flex items-center justify-center text-centra-blue-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-centra-dark/70">Telefone</div>
                  <div className="font-medium">(12) 3456-7890</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-centra-blue-primary/10 flex items-center justify-center text-centra-blue-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-centra-dark/70">Email</div>
                  <div className="font-medium">contato@centrab2b.com.br</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-centra-blue-primary/10 flex items-center justify-center text-centra-blue-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-centra-dark/70">Suporte</div>
                  <div className="font-medium">suporte@centrab2b.com.br</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 shadow-xl border border-white/50 reveal">
            <h3 className="text-2xl font-bold mb-6 text-centra-dark">Agende uma Demonstração</h3>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-centra-dark/70 mb-1">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-centra-blue-primary focus:ring-1 focus:ring-centra-blue-primary outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-centra-dark/70 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-centra-blue-primary focus:ring-1 focus:ring-centra-blue-primary outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-centra-dark/70 mb-1">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-centra-blue-primary focus:ring-1 focus:ring-centra-blue-primary outline-none transition-all"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-centra-dark/70 mb-1">Setor</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-centra-blue-primary focus:ring-1 focus:ring-centra-blue-primary outline-none transition-all appearance-none bg-white"
                  >
                    <option value="" disabled selected>Selecione seu setor</option>
                    <option value="quimica">Indústria Química</option>
                    <option value="agro">Agropecuária</option>
                    <option value="construcao">Construção Civil</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-centra-dark/70 mb-1">Mensagem</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-centra-blue-primary focus:ring-1 focus:ring-centra-blue-primary outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar você?"
                    rows={4}
                  ></textarea>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-centra-blue-primary to-centra-blue-secondary text-white py-6 hover:shadow-lg transition-all duration-300"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
