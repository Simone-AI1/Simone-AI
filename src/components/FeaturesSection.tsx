import React, { useEffect, useRef } from 'react';
import { Brain, Rocket, Link as LinkIcon } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={featureRef} 
      className="appear bg-[#0a0a23]/60 border border-[#1a1a4a] rounded-xl p-8 transition-all duration-300 hover:border-[#00f0ff]/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
    >
      <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-r from-[#050510] to-[#0a0a23] border border-[#1a1a4a] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-[#00f0ff]" />,
      title: "Chatbot AI Personalizzati",
      description: "Assistenti virtuali intelligenti che imparano dal tuo business e offrono risposte immediate ai tuoi clienti, 24/7.",
      delay: 300
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#8e00ff]" />,
      title: "Lead Generation Potenziata",
      description: "Identifica e converte potenziali clienti con strategie di acquisizione personalizzate e automatizzate.",
      delay: 500
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-[#00f0ff]" />,
      title: "Integrazione Perfetta con il tuo CRM",
      description: "Connessione fluida con i tuoi sistemi esistenti per un'esperienza unificata e processi ottimizzati.",
      delay: 700
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef} 
          className="appear text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          Tecnologie All'Avanguardia
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;