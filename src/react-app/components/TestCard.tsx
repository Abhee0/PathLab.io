import { MessageCircle } from 'lucide-react';

interface TestCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export default function TestCard({ icon, name, description }: TestCardProps) {
  const whatsappLink = `https://wa.me/919325251932?text=Hello,%20I%20want%20to%20book%20a%20${encodeURIComponent(name)}%20test.%20Name:%20___%20Preferred%20Date:%20___`;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col group hover:scale-105 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-teal-200 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{name}</h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium shadow-md hover:shadow-lg"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Book Test</span>
      </a>
    </div>
  );
}
