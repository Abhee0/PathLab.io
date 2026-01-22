export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-wide">Dehu Pathology Lab</h3>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base font-light">
              Trusted pathology and diagnostic services with accurate and timely reporting.
            </p>
          </div>
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6 text-blue-400 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li><a href="#tests" className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 font-light">Tests & Services</a></li>
              <li><a href="#booking" className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 font-light">Book Appointment</a></li>
              <li><a href="#contact" className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 font-light">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6 text-blue-400 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li className="text-xs sm:text-sm font-light">Phone: <span className="font-medium">9325251932</span></li>
              <li className="text-xs sm:text-sm font-light">Email: <span className="font-medium">dehupathology897@gmail.com</span></li>
              <li className="text-xs sm:text-sm font-light">Location: <span className="font-medium">Kumbharwada, Dehu</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-light">
            <p>&copy; {new Date().getFullYear()} Dehu Pathology Lab. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-300 transition-colors duration-300 font-light">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300 font-light">Medical Disclaimer</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-6 leading-relaxed font-light">
            Medical Disclaimer: This website is for informational purposes only. Please consult with healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
