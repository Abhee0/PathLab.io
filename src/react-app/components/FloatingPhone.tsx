import { Phone } from 'lucide-react';

export default function FloatingPhone() {
    return (
        <a
            href="tel:9325251932"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-vibrate"
            aria-label="Call Us"
        >
            <Phone className="w-6 h-6 md:w-8 md:h-8" />
        </a>
    );
}
