import { MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import dehuLogo from '../../images/dehologo1.png';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Get current time on mount
  useEffect(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    setCurrentTime(timeString);
  }, []);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- Main Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 sm:h-20 md:h-20 ${isSticky ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-3 sm:px-4 h-full">
          <div className="flex items-center justify-between h-full gap-2 sm:gap-3">
            {/* Logos */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={dehuLogo}
                  alt="Dehu Pathology Lab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start justify-center min-w-0">
                <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600 leading-tight whitespace-nowrap sm:whitespace-normal" style={{ fontFamily: "'Noto Sans Devanagari', 'Shree Lipi', sans-serif" }}>
                  देहू पॅथॉलॉजी लॅबोरेटरी
                </p>
              </div>
            </div>

            {/* Book Test Button (Direct Google Form Link) */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeI7q3N4FLtAQnlutZFLuTcrY_jEfdP_cxsfFA5qiUBCMOCew/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-8 md:px-9 py-2 sm:py-2.5 md:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 transition-colors shadow-lg hover:shadow-xl cursor-pointer flex-shrink-0 min-h-10 sm:min-h-11 md:min-h-11"
            >
              <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="hidden sm:inline font-medium text-xs sm:text-sm md:text-base">Book Test</span>
              <span className="sm:hidden font-medium text-xs">Book</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/919325251932?text=${encodeURIComponent(
                ` Home Collection – Test Booking\n\nHello!\nI want to book a Home Collection lab test \n\n Patient Name:\n Mobile No:\n Date:\n Time: ${currentTime}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-2.5 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 transition-colors shadow-lg hover:shadow-xl cursor-pointer flex-shrink-0 min-h-10 sm:min-h-11 md:min-h-11"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="hidden sm:inline font-medium text-xs sm:text-sm md:text-base">WhatsApp</span>
              <span className="sm:hidden font-medium text-xs">Chat</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
