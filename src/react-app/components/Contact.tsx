import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
// import labImage from '../../images/lab.png';

export default function Contact() {
  const whatsappLink = "https://wa.me/919325251932?text=Hello,%20I%20have%20a%20question%20about%20your%20services";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">Contact Us</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us or get in touch for any queries
          </p>
        </div>



        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-2">Address</h3>
                  <p className="text-gray-700">
                    Ground Floor, Opposite Union Bank,<br />
                    Golden Leaf Building, Kumbharwada, Dehu
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <a href="tel:9325251932" className="text-gray-700 hover:text-blue-600 transition-colors">
                    9325251932
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:dehupathology897@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors break-all">
                    dehupathology897@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Contact on WhatsApp</span>
            </a>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-auto">
            <iframe
              src="https://maps.google.com/maps?q=18.7196862,73.7667686&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dehu Pathology Lab Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
