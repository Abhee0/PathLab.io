import Header from '../components/Header';
import Hero from '../components/Hero';
import TestsSection from '../components/TestsSection';
import BookingSection from '../components/BookingSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import OfferPopup from '../components/OfferPopup';
import NotificationBanner from '../components/NotificationBanner';

export default function Home() {
  return (
    <div className="font-['Inter',sans-serif]">
      <Header />
      <Hero />
      <TestsSection />
      <BookingSection />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
      <OfferPopup />
      <NotificationBanner />
    </div>
  );
}
