export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dehu Pathology Lab</h3>
            <p className="text-gray-300">
              Trusted pathology and diagnostic services with accurate and timely reporting.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tests" className="hover:text-blue-400 transition-colors">Tests & Services</a></li>
              <li><a href="#booking" className="hover:text-blue-400 transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: 9325251932</li>
              <li>Email: dehupathology897@gmail.com</li>
              <li>Location: Kumbharwada, Dehu</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dehu Pathology Lab. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Medical Disclaimer</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Medical Disclaimer: This website is for informational purposes only. Please consult with healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
