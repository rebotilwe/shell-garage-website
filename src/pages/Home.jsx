import HeroSection from '../components/HeroSection';
import FuelTypesSection from '../components/FuelTypesSection';
import PromoSection from '../components/PromoSection';
import ServicesSection from '../components/ServicesSection';
import SocialFeed from '../components/SocialFeed';
import ContactInfo from '../components/ContactInfo';
import QuickActions from '../components/QuickActions';

// Import local images
import fnbLogo from '../assets/images/fnb.png';
import absaLogo from '../assets/images/absa.jpg';
import cashExpressImage from '../assets/images/cashExpressImage.png';
import sparLogo from '../assets/images/Afribiz03005.webp';
import courierLogo from '../assets/images/courier.png';
import shellSelectLogo from '../assets/images/Afribiz03059.webp';

// Bank and Partner Logos
const bankLogos = [
  { name: 'FNB', image: fnbLogo, description: '24/7 ATM Available' },
  { name: 'ABSA', image: absaLogo, description: '24/7 ATM Available' },
  { name: 'Cash Express', image: cashExpressImage, description: '24/7 Cash Access' },
];

const partners = [
  { name: 'Spar Express', image: sparLogo, description: '24/7 Groceries & Essentials' },
  { name: 'The Courier Guy', image: courierLogo, description: 'Fast Parcel Services' },
  { name: 'Shell Select', image: shellSelectLogo, description: 'Fuel & Convenience' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Fuel Types */}
      <FuelTypesSection />
      
      {/* Promotions */}
      <PromoSection />
      
      {/* Services */}
      <ServicesSection />
      
      {/* Banking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">24/7 Banking Services</h2>
            <p className="text-gray-600 mt-2">Secure ATMs available around the clock</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bankLogos.map((bank) => (
              <div key={bank.name} className="text-center p-6 bg-gray-50 rounded-xl">
                <img src={bank.image} alt={bank.name} className="w-24 h-24 mx-auto object-contain mb-4" />
                <h3 className="font-bold text-gray-900">{bank.name}</h3>
                <p className="text-sm text-gray-500">{bank.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">More at Shell Ottawa, Verulam</h2>
            <p className="text-gray-600 mt-2">Everything you need, all in one place</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <img src={partner.image} alt={partner.name} className="w-20 h-20 mx-auto object-contain mb-4" />
                <h3 className="font-bold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SocialFeed />
      <ContactInfo />
      <QuickActions />
    </div>
  );
}