import React from 'react';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] py-16 px-6 border-t border-[#1a1a4a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-8 w-8 text-[#00f0ff] neon-glow-blue" />
              <span className="text-2xl font-bold gradient-text">Simone AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Soluzioni di intelligenza artificiale avanzate per potenziare il tuo business e automatizzare i processi.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1a1a4a] text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Soluzioni</h3>
            <ul className="space-y-4">
              {['Chatbot AI', 'Lead Generation', 'Integrazione CRM', 'Analisi Dati', 'Automazione Marketing'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00f0ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Link utili</h3>
            <ul className="space-y-4">
              {['Chi siamo', 'Blog', 'Casi studio', 'Termini di servizio', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00f0ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00f0ff] mt-1" />
                <span className="text-gray-400">Via dell'Innovazione, 42<br />Milano, Italia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00f0ff]" />
                <a href="tel:+390123456789" className="text-gray-400 hover:text-[#00f0ff]">+39 01 2345 6789</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00f0ff]" />
                <a href="mailto:info@simoneai.com" className="text-gray-400 hover:text-[#00f0ff]">info@simoneai.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1a1a4a] mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Simone AI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;