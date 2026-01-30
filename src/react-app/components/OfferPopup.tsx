import { X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenOfferPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenOfferPopup', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;



  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative shadow-2xl animate-in zoom-in-50 duration-500 mx-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 md:top-4 right-3 md:right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 md:w-6 h-5 md:h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-4 md:mb-6 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/discount-icon.png"
              alt="Special Offer"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Special Offer!</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-lg">Call our health advisor to know today's offer.</p>

          <div className="flex items-center justify-center">
            <div className="relative flex-shrink-0">
              {/* Pulse rings */}
              <span className="absolute inset-0 rounded-full bg-[#0A84FF]/40 animate-ping"></span>
              <span className="absolute inset-0 rounded-full bg-[#0A84FF]/30 animate-ping delay-1000"></span>

              {/* Main button */}
              <a
                href="tel:9325251932"
                className="relative flex items-center justify-center bg-[#0A84FF] hover:bg-[#007AFF] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-vibrate"
                aria-label="Call Us"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
