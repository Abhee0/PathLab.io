import { X, MessageCircle } from 'lucide-react';
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

  const whatsappLink = "https://wa.me/919325251932?text=Hello,%20I%20want%20to%20know%20about%20today's%20test%20discounts";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-in zoom-in-50 duration-500">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/discount-icon.png"
              alt="Special Offer"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Offer!</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Contact us on WhatsApp to know today's test discounts.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsVisible(false)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Get Offer Details</span>
          </a>
        </div>
      </div>
    </div>
  );
}
