import { MessageCircle, X, Calendar, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import dehuLogo from '../../images/dehologo1.png';
import labLogo from '../../images/lablogo4.png';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    preferredTime: ''
  });

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTo = "dehupathology897@gmail.com";
    const subject = "General Booking Request";
    const body = `Hello, I would like to book a test.\n\n` +
      `Patient Name: ${formData.userName}\n` +
      `Preferred Time: ${formData.preferredTime}`;

    // --- CHANGE: Use Gmail specific URL instead of mailto: ---
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({ userName: '', preferredTime: '' });
  };

  return (
    <>
      {/* --- Main Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logos */}
            <div className="flex items-center gap-3">
              <div className="w-19 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={dehuLogo}
                  alt="Dehu Pathology Lab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <img
                  src={labLogo}
                  alt="Lab Logo"
                  className="h-16 md:h- object-contain"
                />
              </div>
            </div>

            {/* Book Test Button (Triggers Modal) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden md:inline font-medium">Book Test</span>
              <span className="md:hidden font-medium">Book</span>
            </button>
          </div>
        </div>
      </header>

      {/* --- Popup Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">Book an Appointment</h3>
            <p className="text-gray-500 text-sm mb-6">
              Enter your details below to schedule a test.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Patient Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="Enter your full name"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Time Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Preferred Date & Time
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="preferredTime"
                    required
                    placeholder="e.g. Tomorrow at 9:00 AM"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in Gmail</span>
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}