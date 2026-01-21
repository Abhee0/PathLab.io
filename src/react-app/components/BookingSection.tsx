import { MessageCircle, Mail } from 'lucide-react';

export default function BookingSection() {
  const whatsappLink = "https://wa.me/919325251932?text=Hello,%20I%20want%20to%20book%20a%20pathology%20test.%20Name:%20___%20Test:%20___%20Preferred%20Date:%20___";
  const emailSubject = "Pathology Test Booking Request";
  const emailBody = "Hello,%0A%0AI want to book a pathology test.%0A%0AName: ___%0APhone Number: ___%0AEmail: ___%0ATest Required: ___%0APreferred Date: ___%0A%0AThank you.";
  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dehupathology897@gmail.com&su=${emailSubject}&body=${emailBody}`;

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred booking method - quick WhatsApp booking or detailed email form
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* WhatsApp Booking */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">WhatsApp Booking</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Quick and easy booking through WhatsApp. Get instant confirmation and communicate directly with our staff.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg w-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Center Image */}
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/booking-consultation.png"
                alt="Healthcare consultation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Email Booking */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Email Booking</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Prefer email? Send us your booking details and we'll get back to you with confirmation.
            </p>
            <a 
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg w-full font-semibold"
            >
              <Mail className="w-5 h-5" />
              <span>Book via Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
