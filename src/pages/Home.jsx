import HeroSection from '../components/HeroSection';
import FuelTypesSection from '../components/FuelTypesSection';
import PromoSection from '../components/PromoSection';
import ServicesSection from '../components/ServicesSection';
import SocialFeed from '../components/SocialFeed';
import ContactInfo from '../components/ContactInfo';
import QuickActions from '../components/QuickActions';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FuelTypesSection />
      <PromoSection />
      <ServicesSection />
      <SocialFeed />
      <ContactInfo />
      <QuickActions />
    </div>
  );
}