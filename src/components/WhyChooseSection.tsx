import React, { useState, useEffect, useRef } from 'react';
import { Zap, Shield, HeartHandshake } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "Simone AI ha trasformato completamente il nostro servizio clienti. I tempi di risposta sono diminuiti del 70% e la soddisfazione è aumentata.",
    author: "Alessia Moretti",
    role: "Marketing Director",
    company: "Tech Solutions Italia"
  },
  {
    quote: "L'implementazione è stata incredibilmente fluida. In poche settimane, il nostro sistema di lead generation è diventato completamente automatizzato.",
    author: "Marco Bianchi",
    role: "CEO",
    company: "Innovate SpA"
  },
  {
    quote: "La capacità di integrare perfettamente Simone AI con il nostro CRM esistente ha semplificato enormemente i nostri processi interni.",
    author: "Giulia Romano",
    role: "CTO",
    company: "Digital Growth"
  }
];

const WhyChooseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-[#00f0ff]" />,
      title: "Velocità",
      description: "Implementazione rapida e risultati immediati per il tuo business."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#8e00ff]" />,
      title: "Personalizzazione",
      description: "Soluzioni su misura per le specifiche esigenze della tua azienda."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-[#00f0ff]" />,
      title: "Supporto Continuo",
      description: "Assistenza dedicata e aggiornamenti regolari per un'esperienza ottimale."
    }
  ];

  return (
    <section ref={sectionRef} id="why-choose" className="py-24 px-6 bg-[#050510]">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef} 
          className="appear text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          Perché Scegliere Simone AI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="appear visible flex items-start gap-4 p-6 rounded-lg bg-[#0a0a23]/60 border border-[#1a1a4a] transition-all hover:border-[#00f0ff]/40"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mt-1 rounded-full p-2 bg-[#0a0a23] border border-[#1a1a4a]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            ref={carouselRef}
            className="appear relative overflow-hidden rounded-xl border border-[#1a1a4a] shadow-[0_0_30px_rgba(142,0,255,0.1)]"
          >
            <div className="bg-gradient-to-br from-[#0a0a23] to-[#0a0a35] p-8">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#8e00ff] opacity-70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative h-64">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
                      activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <blockquote className="text-lg text-gray-200 italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? 'bg-[#00f0ff] scale-110' : 'bg-gray-500 opacity-50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;