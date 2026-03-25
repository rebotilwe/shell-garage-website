
import HeroSection from '../components/HeroSection';
import PromoSection from '../components/PromoSection';
import ServicesSection from '../components/ServicesSection';
import SocialFeed from '../components/SocialFeed';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import QuickActions from '../components/QuickActions'
import FuelTypesSection from '../components/FuelTypesSection'

export default function Home() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      
      <HeroSection />
      <QuickActions />
      <PromoSection />
      <FuelTypesSection />
      <ServicesSection />
      <SocialFeed />
      <ContactInfo />
    
    </div>
  );
}