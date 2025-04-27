import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const btn = btnRef.current;

    if (heading) {
      setTimeout(() => {
        heading.classList.add('visible');
      }, 300);
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('visible');
      }, 700);
    }

    if (btn) {
      setTimeout(() => {
        btn.classList.add('visible');
      }, 1100);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer 
          url="https://prod.spline.design/5hh8YCDBvJhHebQY/scene.splinecode"
          className="w-full h-full"
          style={{ 
            background: 'transparent',
            font: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgb(255, 255, 255)'
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8 bg-[#0a0a23]/30 p-8 rounded-2xl">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold leading-tight appear"
          >
            <span className="block">Automatizza il Futuro.</span>
            <span className="block gradient-text">Potenzia il tuo Business con <span className="text-[#00f0ff] neon-glow-blue">Simone AI</span>.</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-300 appear max-w-2xl mx-auto"
          >
            Chatbot AI avanzati, Lead Generation su misura e integrazioni CRM di nuova generazione.
          </p>
          
          <div>
            <a 
              href="#contact" 
              ref={btnRef}
              className="inline-block appear neon-button px-8 py-4 rounded-md bg-gradient-to-r from-[#00f0ff] to-[#8e00ff] text-white font-semibold text-lg shadow-xl transition-all"
            >
              Prenota una consulenza
            </a>
          </div>
          
          <div className="mt-16 appear visible">
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#00f0ff] opacity-80"
                  style={{
                    animation: `pulse 1.5s infinite ${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
