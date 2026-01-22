import { X, Calendar, Bell } from 'lucide-react';
import { useState } from 'react';

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 md:py-3 px-3 md:px-4 z-40 shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-3 flex-1">
          <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-4 md:w-5 h-4 md:h-5" />
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Calendar className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-medium">
              Appointments available via WhatsApp & Email
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 rounded-full p-1 transition-colors flex-shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="w-4 md:w-5 h-4 md:h-5" />
        </button>
      </div>
    </div>
  );
}
