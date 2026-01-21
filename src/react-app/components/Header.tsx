import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import dehuLogo from '../../images/dehologo.png';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/919325251932?text=Hello,%20I%20want%20to%20book%20a%20pathology%20test";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-19 h-16 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={dehuLogo}
                alt="Dehu Pathology Lab Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-800">Dehu Pathology Lab</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-3 h-3" />
                <span>9325251932</span>
              </div>
            </div>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline font-medium">Book Test</span>
            <span className="md:hidden font-medium">Book</span>
          </a>
        </div>
      </div>
    </header>
  );
}
