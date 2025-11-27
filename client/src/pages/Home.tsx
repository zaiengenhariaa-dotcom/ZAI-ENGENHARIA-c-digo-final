import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { ChevronDown, Phone, Mail, Linkedin, Instagram, Clock, MapPin, Shield, Lightbulb, Users } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { services } from "@/data/services";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <WhatsAppWidget />
      <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={APP_LOGO} alt="Zai Engenharia" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('servicos')} className="text-sm font-medium hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-sm font-medium hover:text-primary transition-colors">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-sm font-medium hover:text-primary transition-colors">
                Contato
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-background via-background to-muted">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[20rem] md:text-[30rem] font-bold text-muted/10 select-none leading-none">
            ZAI
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Engenharia e Soluções Técnicas de{" "}
              <span className="text-primary">Excelência</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformamos projetos em realidade com expertise técnica, inovação e compromisso com a qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-6"
                onClick={() => scrollToSection('servicos')}
              >
                Conheça Nossos Serviços
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em engenharia com qualidade, segurança e compromisso com prazos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Precisa de um serviço específico ou tem dúvidas?
            </p>
            <Button size="lg" onClick={() => scrollToSection('contato')}>
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem Somos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="/founder-photo.jpg" 
                alt="Fundador da Zai Engenharia" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                A <span className="font-bold text-primary">Zai Engenharia</span> é uma empresa especializada em engenharia e soluções técnicas, comprometida em entregar projetos de excelência com foco em qualidade, segurança e inovação.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Com uma equipe altamente qualificada e experiente, atuamos em diversos segmentos da engenharia civil, oferecendo desde projetos estruturais completos até consultoria técnica especializada.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Nossa missão é transformar ideias em realidade, garantindo que cada projeto seja executado com precisão técnica, cumprimento de prazos e total conformidade com as normas vigentes.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-12">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold">Qualidade e Segurança</h4>
                <p className="text-muted-foreground">
                  Compromisso com a excelência em cada detalhe do projeto
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold">Inovação</h4>
                <p className="text-muted-foreground">
                  Soluções criativas e tecnológicas para desafios complexos
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold">Compromisso</h4>
                <p className="text-muted-foreground">
                  Dedicação total ao sucesso de cada cliente e projeto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você e transformar seu projeto em realidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="https://wa.me/5517997913799" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-2">Atendimento rápido</p>
              <p className="text-sm font-medium">(17) 99791-3799</p>
            </a>
            
            <a 
              href="mailto:zai.engenhariaa@gmail.com"
              className="block p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-sm text-muted-foreground mb-2">Envie sua mensagem</p>
              <p className="text-sm font-medium break-all">zai.engenhariaa@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/lazaro-junior-a0b878185" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-2">Conecte-se conosco</p>
              <p className="text-sm font-medium">/in/lazaro-junior</p>
            </a>
            
            <a 
              href="https://www.instagram.com/zai.engenharia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/10 text-pink-500 mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground mb-2">Siga nossos projetos</p>
              <p className="text-sm font-medium">@zai.engenharia</p>
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Atendimento via WhatsApp disponível 24/7 para emergências
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Localização</h3>
                  <p className="text-sm text-muted-foreground">
                    R. Gastão Vidigal, 2150 - sala 13<br />
                    Santos Dumont<br />
                    São José do Rio Preto - SP<br />
                    CEP: 15020-090
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Centro Empresarial Odilon Garces I
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8!2d-49.3973313!3d-20.8162559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad806c9d3de9%3A0x31e655ffcb4fb388!2sZai%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Zai Engenharia"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={APP_LOGO} alt="Zai Engenharia" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Zai Engenharia. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/5517997913799" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:zai.engenhariaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/lazaro-junior-a0b878185" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/zai.engenharia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
