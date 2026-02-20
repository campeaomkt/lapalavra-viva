import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  Star, 
  CheckCircle, 
  Globe, 
  Users, 
  Feather, 
  Lightbulb, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

// --- Data ---
const bookSummaries = [
  { title: 'Romanos', summary: 'La base doctrinal de nuestra fe. Un estudio profundo sobre la justicia de Dios y la redención.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_romanos_v2.png' },
  { title: '1 Corintios', summary: 'Instrucciones vitales sobre la unidad, los dones espirituales y el amor supremo.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_1corintios_v3.png' },
  { title: '2 Corintios', summary: 'El corazón pastoral de Pablo y la suficiencia de la gracia en medio de la debilidad.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_2corintios_v2.png' },
  { title: 'Gálatas', summary: 'El manifiesto de la libertad cristiana. La ley frente a la promesa de la gracia.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_galatas_v2.png' },
  { title: 'Efesios', summary: 'Nuestra posición en los lugares celestiales y la armadura para la victory espiritual.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_efesios_v2.png' },
  { title: 'Filipenses', summary: 'El secreto del gozo inquebrantable y la paz que sobrepasa todo entendimiento.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_filipenses_v2.png' },
  { title: 'Colosenses', summary: 'La preeminencia de Cristo y la plenitud que tenemos al estar unidos a Él.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_colosenses_v2.png' },
  { title: '1 Tesalonicenses', summary: 'Vivir en santidad mientras esperamos con gozo el glorioso regreso del Señor.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_1tesalonicenses_v2.png' },
  { title: '2 Tesalonicenses', summary: 'Firmeza ante la persecución y claridad sobre los eventos de los últimos tiempos.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_2tesalonicenses_v2.png' },
  { title: '1 Timoteo', summary: 'Manual de liderazgo y orden para la iglesia, la columna y baluarte de la verdad.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_1timoteo_v2.png' },
  { title: '2 Timoteo', summary: 'El legado final de Pablo. Un llamado a predicar la Palabra con valentía y fidelidad.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_2timoteo_v2.png' },
  { title: 'Tito', summary: 'La sana doctrina manifestada en buenas obras y el carácter de un líder piadoso.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_tito_v2.png' },
  { title: 'Filemón', summary: 'Una poderosa lección sobre el perdón y la igualdad de todos los crepreyentes en Cristo.', image: 'https://eliabcamposteclas.com/wp-content/uploads/2026/02/capa_filemon_v2.png' },
];

const testimonies = [
  { name: "Carlos Méndez", role: "Pastor Local", text: "Este material cambió mi forma de preparar sermones. La profundidad es asombrosa.", rating: 5 },
  { name: "Elena Rodríguez", role: "Estudiante de Teología", text: "Finalmente entiendo el contexto histórico de Pablo. Todo tiene sentido ahora.", rating: 5 },
  { name: "Juan Pablo Silva", role: "Líder de Jóvenes", text: "Fácil de explicar y muy profundo. Ideal para grupos de estudio.", rating: 5 },
];

// --- Navigation Helper ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-bible-dark/90 backdrop-blur-md border-b border-gray-800 py-4 px-6 md:px-12 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold tracking-tighter text-white uppercase">LA PALABRA VIVA</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
      <button onClick={() => scrollToSection('contenido')} className="hover:text-gold transition cursor-pointer">Contenido</button>
      <button onClick={() => scrollToSection('beneficios')} className="hover:text-gold transition cursor-pointer">Beneficios</button>
      <button onClick={() => scrollToSection('testimonios')} className="hover:text-gold transition cursor-pointer">Testimonios</button>
      <button onClick={() => scrollToSection('precio')} className="hover:text-gold transition cursor-pointer font-bold text-white">Oferta</button>
    </div>
    <button 
      onClick={() => scrollToSection('precio')} 
      className="bg-gold text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition cursor-pointer"
    >
      ADQUIRIR AHORA
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
      <img src="https://picsum.photos/seed/ancient/1920/1080" alt="Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-bible-dark via-transparent to-bible-dark"></div>
    </div>
    <div className="max-w-4xl text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold mb-6 animate-pulse">
        <Award size={16} />
        <span className="text-xs font-bold uppercase tracking-widest">Contenido Teológico Premium</span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] text-white">
        Domine las <span className="text-gold italic">Cartas de Pablo</span> como nunca antes
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        Transforme su lectura bíblica en una experiencia reveladora con un estudio profundo, versículo por versículo, de las enseñanzas que fundaron la fe cristiana.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <button 
          onClick={() => scrollToSection('precio')} 
          className="gradient-gold text-black px-10 py-5 rounded-xl font-black text-lg md:text-xl flex items-center gap-3 hover:scale-105 transition shadow-2xl shadow-gold/20 text-center w-full md:w-auto justify-center cursor-pointer"
        >
          QUIERO MI ACCESO AHORA <ArrowRight size={24} />
        </button>
        <p className="text-gray-500 text-sm flex items-center gap-2">
          <ShieldCheck className="text-green-500" size={18} /> Pago seguro y acceso inmediato
        </p>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-gold/30 transition-all group hover:-translate-y-2 text-left">
    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Benefits = () => (
  <section id="beneficios" className="py-24 px-6 bg-bible-dark">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 italic text-center">¿Por qué este estudio es para usted?</h2>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={BookOpen} 
          title="Comprensión Profunda" 
          desc="Cada versículo analizado en su contexto original, eliminando confusiones y revelando significados ocultos." 
        />
        <FeatureCard 
          icon={Zap} 
          title="Aplicación Práctica" 
          desc="No es solo teoría; aprenda cómo aplicar las verdades eternas de Pablo a los desafíos de la vida moderna." 
        />
        <FeatureCard 
          icon={Users} 
          title="Ideal para Líderes" 
          desc="Material listo para ser compartido en grupos de estudio, células o desde el púlpito con autoridad." 
        />
      </div>
    </div>
  </section>
);

const BookSection = () => (
  <section id="contenido" className="py-24 px-6 bg-black">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
        <div className="max-w-2xl">
          <p className="text-gold font-bold tracking-widest uppercase mb-4">El Mapa Completo</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Explora las 13 Epístolas Paulinas</h2>
        </div>
        <div className="bg-gold text-black px-4 py-2 rounded-lg font-black text-sm">COLECCIÓN COMPLETA</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 text-left">
        {bookSummaries.map((book, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[2/3] card-shadow bg-gray-900">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-full object-contain group-hover:scale-110 transition duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bible-dark/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{book.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                {book.summary}
              </p>
              <div className="w-12 h-1 bg-gold mt-4 transform origin-left group-hover:scale-x-150 transition"></div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => scrollToSection('precio')} 
        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-lg hover:bg-gold transition-colors w-full md:w-auto justify-center cursor-pointer"
      >
        QUIERO ACCEDER A TODO EL CONTENIDO <ChevronRight />
      </button>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonios" className="py-24 px-6 bg-bible-dark">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white italic">Historias de Transformación</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
        {testimonies.map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-gray-900 border border-gray-800">
            <div className="flex gap-1 text-gold mb-4">
              {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg text-gray-300 italic mb-6">"{t.text}"</p>
            <div>
              <p className="text-white font-bold">{t.name}</p>
              <p className="text-gold text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button 
          onClick={() => scrollToSection('precio')} 
          className="text-gold font-bold uppercase tracking-widest text-sm border-b border-gold/30 pb-2 hover:text-white hover:border-white transition cursor-pointer"
        >
          Únase a miles de alumnos hoy mismo
        </button>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="precio" className="py-24 px-6 bg-black relative overflow-hidden">
    {/* Decorative element */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full"></div>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-white mb-4">Invierta en su Crecimiento Espiritual</h2>
        <p className="text-gray-400">Elija el plan que mejor se adapte a su hambre de la Palabra.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch text-left">
        {/* Basic Plan */}
        <div className="p-10 rounded-[2.5rem] bg-gray-900 border border-gray-800 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Plan Esencial</h3>
          <p className="text-gray-500 mb-8">Acceso solo a los módulos básicos de las epístolas.</p>
          <div className="mb-8">
            <span className="text-5xl font-black text-white">$3.90</span>
            <span className="text-gray-500">/ pago único</span>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            {['Las 13 Cartas Explicadas Versículo por Versículo', 'Acceso por 12 meses', 'Material descargable en PDF', 'Área de miembros premium'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-tight">
                <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
          <a 
            href="https://pay.hotmart.com/P104544275Y?checkoutMode=10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 rounded-2xl border-2 border-gray-700 text-white font-bold hover:bg-white hover:text-black transition text-center uppercase tracking-widest text-sm"
          >
            ADQUIRIR PLAN ESENCIAL
          </a>
        </div>

        {/* Pro Plan - The Requested Full Combo */}
        <div className="p-1 rounded-[2.5rem] bg-gradient-to-b from-gold to-yellow-600 scale-100 md:scale-105 shadow-2xl shadow-gold/20 relative mt-8 md:mt-0">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
            COMBO COMPLETO - MEJOR VALOR
          </div>
          <div className="p-6 md:p-10 rounded-[2.4rem] bg-bible-dark h-full flex flex-col">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tighter">Combo Pro + 7 Bonus</h3>
            <p className="text-gold/90 mb-8 font-semibold text-sm">Toda la colección premium con acceso inmediato a todo.</p>
            <div className="mb-8">
              <span className="text-gray-500 line-through mr-3 text-lg md:text-xl">$50.00</span>
              <span className="text-5xl md:text-6xl font-black text-white">$7.90</span>
            </div>
            
            <ul className="space-y-3 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-white font-bold border-b border-gray-800 pb-2 mb-2">
                <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" /> Las 13 Cartas de Pablo Explicadas Individualmente
              </li>
              {[
                'BONO#01 - Comunicación Eficaz en el Púlpito.',
                'BONO#02 - Desarrollo Espiritual del Predicador.',
                'BONO#03 - Exégesis y Hermenéutica Bíblica.',
                'BONO#04 - Historia de la Predicación Cristiana.',
                'BONO#05 - Predicación Expositiva.',
                'BONO#06 - Predicación Temática.',
                'BONO#07 - Preparación de Sermones Guía Práctica.',
              ].map((bonus, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> <span className="font-semibold text-gray-100">{bonus.split(' - ')[0]}</span> - {bonus.split(' - ')[1]}
                </li>
              ))}
              
              <li className="flex items-start gap-3 pt-4 border-t border-gray-800 mt-4 text-gold font-black italic uppercase text-sm">
                <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" /> Sumando Son: <span className="underline">$ 50,00</span> en contenido.
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> Acceso a área de miembros exclusiva.
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> Soporte: Vía E-mail.
              </li>
            </ul>

            <a 
              href="https://pay.hotmart.com/Y104544132W?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-5 px-4 rounded-2xl gradient-gold text-black font-black text-lg md:text-xl hover:scale-[1.03] active:scale-95 transition-all shadow-xl uppercase tracking-tighter text-center"
            >
              QUIERO EL COMBO COMPLETO
            </a>
            <p className="text-center text-gray-500 text-[10px] mt-4 uppercase font-bold flex items-center justify-center gap-2">
               <ShieldCheck size={12} className="text-green-500" /> Compra segura y garantizada
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "¿Cómo recibo el material?", a: "Inmediatamente después del pago, recibirás un correo electrónico con tus credenciales de acceso a nuestra plataforma exclusiva." },
    { q: "¿Es un libro físico?", a: "Es un material digital de alta definición que puedes leer en cualquier dispositivo (celular, tablet o computadora) y descargar para imprimir." },
    { q: "¿Necesito conocimientos previos?", a: "No. El estudio está diseñado para ser claro desde el nivel principiante hasta el avanzado." },
    { q: "¿Qué formas de pago aceptan?", a: "Aceptamos tarjetas de crédito, débito, PayPal y otros métodos locales según tu país." }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-bible-dark text-left">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-900 transition"
              >
                <span className="font-bold text-white">{f.q}</span>
                <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="p-6 pt-0 text-gray-400 border-t border-gray-800">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 bg-black border-t border-gray-900">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl font-bold tracking-tighter text-white uppercase">LA PALABRA VIVA</span>
      </div>
      <p className="text-gray-500 max-lg max-w-lg mb-8">
        Dedicados a llevar la profundidad de las Escrituras a cada hogar con excelencia teológica y claridad pastoral.
      </p>
      <button 
        onClick={() => scrollToSection('precio')} 
        className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-sm font-bold transition uppercase tracking-widest cursor-pointer"
      >
        VOLVER A LA OFERTA
      </button>
    </div>
    <div className="text-center pt-12 border-t border-gray-900 text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} Instituto La Palabra Viva. Todos los derechos reservados.
    </div>
  </footer>
);

export default function App() {
  const [timeLeft, setTimeLeft] = useState(3600 * 2 + 450); // 2 hours 7 mins for urgency

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen text-center md:text-left selection:bg-gold selection:text-black">
      {/* Sticky Urgency Bar - Clickable to Offer */}
      <div 
        onClick={() => scrollToSection('precio')} 
        className="fixed bottom-0 w-full z-[60] bg-gold py-2 px-4 flex justify-center items-center gap-4 text-black font-black text-sm md:text-base hover:bg-yellow-400 transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-2 uppercase tracking-tighter"><Zap size={18} fill="currentColor" /> ¡OFERTA LIMITADA!</span>
        <span className="hidden md:inline">El descuento del 85% expira en:</span>
        <span className="bg-bible-dark text-gold px-3 py-1 rounded font-mono text-lg">{formatTime(timeLeft)}</span>
      </div>

      <Navbar />
      <Hero />
      <Benefits />
      
      {/* Social Proof Stats */}
      <div className="py-12 bg-black/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 px-6">
          <div className="text-center">
            <p className="text-4xl font-black text-gold">+15,000</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Alumnos activos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-gold">4.9/5</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Calificación media</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-gold">100%</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Garantía de acceso</p>
          </div>
        </div>
      </div>

      <BookSection />
      
      {/* High Authority Section */}
      <section className="py-24 px-6 bg-bible-dark overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full"></div>
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2026/02/instituto-palabra-viva.jpg" 
              alt="Instituto La Palabra Viva" 
              className="relative w-full aspect-square object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition duration-1000"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Quién está detrás del material</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              El <strong>Instituto La Palabra Viva</strong> nace de la pasión de teólogos y pastores con más de 25 años de experiencia en el estudio exegético de las Escrituras.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed italic border-l-4 border-gold pl-6 mb-10">
              "Nuestra misión es simple: que cada cristiano, sin importar su formación previa, pueda saborear la riqueza teológica de las cartas que transformaron el imperio romano y que hoy pueden transformar su vida."
            </p>
            <button 
              onClick={() => scrollToSection('precio')} 
              className="inline-flex items-center gap-3 bg-gold text-black px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition shadow-lg w-full md:w-auto justify-center cursor-pointer"
            >
              COMENZAR MI ESTUDIO <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}