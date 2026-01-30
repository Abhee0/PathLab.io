import { Phone } from "lucide-react";

export default function FloatingPhone() {
    return (
        <a
            href="tel:9325251932"
            aria-label="Call Us"
            className="fixed bottom-16 right-10 z-50 group"
        >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#0A84FF]/40 animate-ping"></span>
            <span className="absolute inset-0 rounded-full bg-[#0A84FF]/30 animate-ping delay-1000"></span>

            {/* Main button */}
            <span className="relative flex items-center justify-center bg-[#0A84FF] hover:bg-[#007AFF] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-vibrate">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
            </span>
        </a>
    );
}
