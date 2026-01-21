import { Users, Sparkles, Clock, IndianRupee, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Friendly & Professional Staff",
      description: "Experienced team dedicated to your comfort and care",
      image: "https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/sample-collection.png"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: "Clean and Hygienic Lab",
      description: "Maintaining highest standards of cleanliness and safety",
      image: "https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/clean-lab-interior.png"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Fast and Accurate Reports",
      description: "Quick turnaround time with precise results",
      image: "https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/report-analysis.png"
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-green-600" />,
      title: "Reasonable Pricing",
      description: "Quality diagnostic services at affordable rates",
      image: "https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/clean-lab-interior.png"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
      title: "Trusted Local Diagnostic Center",
      description: "Serving the community with reliable healthcare",
      image: "https://019be015-a079-7fd3-ab74-b37b99e843e8.mochausercontent.com/sample-collection.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your health deserves the best care and attention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md -mt-12 relative z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
