import { MessageCircle, Mail } from 'lucide-react';

export default function Hero() {
  const whatsappLink = `https://wa.me/919325251932?text=${encodeURIComponent(
    `Hello \nI would like to book a home visit for tests.\nPlease contact me.\n\nThank you.\nDEHU PATHOLOGY LABORATORY`
  )}`;
  const emailSubject = "Pathology Test Booking Request";
  const emailBody = "Hello,%0A%0AI want to book a pathology test.%0A%0AName: ___%0APhone: ___%0AEmail: ___%0ATest Required: ___%0APreferred Date: ___%0A%0AThank you.";
  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dehupathology897@gmail.com&su=${emailSubject}&body=${emailBody}`;

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-teal-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-teal-100/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
              Trusted Pathology & Diagnostic Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-10">
              Accurate and timely reporting for routine and special pathology tests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Book on WhatsApp</span>
              </a>
              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Mail className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Book via Email</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/hero-lab-technician.png"
                alt="Professional pathology lab technician examining samples"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-30" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
