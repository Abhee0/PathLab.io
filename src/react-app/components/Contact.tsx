import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import labImage from '../../images/lab.png';

export default function Contact() {
  const whatsappLink = "https://wa.me/919325251932?text=Hello,%20I%20have%20a%20question%20about%20your%20services";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us or get in touch for any queries
          </p>
        </div>

        {/* Lab Building Image */}
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={labImage}
            alt="Dehu Pathology Lab Building"
            className="w-full h-69 object-cover"
          />
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
                  <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.7!3d18.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQyJzAwLjAiTiA3M8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
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
