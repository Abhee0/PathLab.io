import { Star, User } from 'lucide-react';

/* eslint-disable react/no-unescaped-entities */
export default function Reviews() {
  const reviews = [
    { name: "Dhananjay Gargote", rating: 5, text: "Friendly staff, clean equipment, professional service." },
    { name: "Ravi Kumbhar", rating: 5, text: "Fast service, reasonable rates, very satisfied." },
    { name: "S Waghmare", rating: 5, text: "My experience is very good, report is fast and clear thank you" },
    { name: "Nilesh", rating: 5, text: "My experience is good. They give Same day report with best market price." },
    { name: "Jyoti Patil", rating: 5, text: "Very good experience and good service" },
    { name: "Yuvraj Pawar", rating: 5, text: "1 boy is very good lab tech job gives 100 pasent on lab you" },
    { name: "Ajay Jadhav", rating: 5, text: "very nice service" },
    { name: "Amol Andil", rating: 5, text: "Accurate report ,fast service" },
    { name: "Omkar Mane", rating: 5, text: "Efficient and quick service" },
    { name: "Ramesh Wakode", rating: 5, text: "Very good sarvice am happy" },
    { name: "Shalesh Kumar Mishra", rating: 5, text: "My experience is very good, report is fast and clear thank you" },
    { name: "Suhas Borade", rating: 5, text: "Very Good 👍" },
    { name: "Krishna Mech", rating: 4, text: "Nice service, quick reports." },
    { name: "Neha Kharat", rating: 5, text: "Nice lab" },
    { name: "Nirmala Thorat", rating: 5, text: "Very nice service" },
    { name: "Mahamad Pathan", rating: 5, text: "Good experience in lab, reports received on time..." },
    { name: "Akshay More", rating: 5, text: "Fast service" },
    { name: "Vinod Kharade", rating: 5, text: "Urgent & efficient service...." },
    { name: "Ranjeet Kumar", rating: 5, text: "Very good sarvic" },
    { name: "Nadim Shaikh", rating: 5, text: "Best service" },
    { name: "Arti Jadhav", rating: 5, text: "Best Pathology Lab in Dehu👍" },
    { name: "Ganesh Jadhav", rating: 5, text: "💯💯Good communication skills., good advice., good for health." },
    { name: "Pooja Irbatanwad", rating: 5, text: "Good" },
    { name: "Jitendra Patle", rating: 5, text: "Good service" },
    { name: "Gaurav Babar", rating: 5, text: "Ok" },
    { name: "Akash Kasbe", rating: 5, text: "Good communication and guidance" },
    { name: "Nirmala Bornare", rating: 5, text: "Good" },
    { name: "Harsh Nayak", rating: 5, text: "Best lab" },
    { name: "Indrakshi Waghmare", rating: 5, text: "Best pathology lab in dehu" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">Patient Reviews</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            What our patients say about us
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="flex animate-scroll hover:animation-play-state-paused w-max gap-8 px-4">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-800 text-sm md:text-lg truncate">{review.name}</p>
                  <div className="flex gap-0.5 md:gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 md:w-4 md:h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base leading-relaxed line-clamp-4">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
