import { MessageCircle, X, Calendar, User, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import dehuLogo from '../../images/dehologo1.png';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    preferredDate: '',
    preferredTime: ''
  });

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

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailTo = "dehupathology897@gmail.com";
    const subject = "General Booking Request";
    const body = `Hello, I would like to book a test.\n\n` +
      `Patient Name: ${formData.userName}\n` +
      `Preferred Date: ${formData.preferredDate}\n` +
      `Preferred Time: ${formData.preferredTime}`;

    // --- CHANGE: Use Gmail specific URL instead of mailto: ---
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({ userName: '', preferredDate: '', preferredTime: '' });
  };

  return (
    <>
      {/* --- Main Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 sm:h-20 md:h-20 ${isSticky ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-3 sm:px-4 h-full">
          <div className="flex items-center justify-between h-full gap-2 sm:gap-3">
            {/* Logos */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={dehuLogo}
                  alt="Dehu Pathology Lab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start justify-center min-w-0">
                <p className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-600 leading-tight whitespace-nowrap sm:whitespace-normal" style={{ fontFamily: "'Noto Sans Devanagari', 'Shree Lipi', sans-serif" }}>
                  देहू पॅथॉलॉजी लॅबोरेटरी
                </p>
              </div>
            </div>

            {/* Book Test Button (Triggers Modal) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-8 md:px-9 py-2 sm:py-2.5 md:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 transition-colors shadow-lg hover:shadow-xl cursor-pointer flex-shrink-0 min-h-10 sm:min-h-11 md:min-h-11"
            >
              <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="hidden sm:inline font-medium text-xs sm:text-sm md:text-base">Book Test</span>
              <span className="sm:hidden font-medium text-xs">Book</span>
            </button>

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

      {/* --- Popup Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 py-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md p-4 sm:p-6 relative animate-in zoom-in-95 duration-200">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 sm:right-4 top-3 sm:top-4 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            >
              <X className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>

            {/* Modal Header */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Book an Appointment</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
              Enter your details below to schedule a test.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Patient Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400" />
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="Enter your full name"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Date Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400" />
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Time Slot Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full pl-3 sm:pl-4 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-xs sm:text-sm appearance-none"
                  >
                    <option value="">Select a time slot</option>
                    <option value="9:00 AM">7:00 AM</option>
                    <option value="9:00 AM">7:30 AM</option>
                    <option value="9:00 AM">8:00 AM</option>
                    <option value="9:00 AM">8:30 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Phone Contact */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Call Us
                </label>
                <a
                  href="tel:9325251932"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>9325251932</span>
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 mt-2 text-xs sm:text-sm"
              >
                <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>Open in Gmail</span>
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}