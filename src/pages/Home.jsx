import HeroSection from '../components/HeroSection';
import PromoSection from '../components/PromoSection';
import ServicesSection from '../components/ServicesSection';
import SocialFeed from '../components/SocialFeed';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import QuickActions from '../components/QuickActions';
import FuelTypesSection from '../components/FuelTypesSection';

// Import local images
import fnbLogo from '../assets/images/fnb.png';
import absaLogo from '../assets/images/absa.jpg';
import sparLogo from '../assets/images/Afribiz03005.webp';
import spar from '../assets/images/Afribiz03047.webp';

// Bank and Partner Logos with Images
const bankLogos = [
  { 
    name: 'FNB', 
    icon: '🏦', 
    image: fnbLogo,
    color: '#0055A4', 
    bgColor: '#ffffff' 
  },
  { 
    name: 'ABSA', 
    icon: '🏦', 
    image: absaLogo,
    color: '#004B87', 
    bgColor: '#ffffff' 
  },
  { 
    name: 'Cash Express', 
    icon: '💵', 
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&q=80',
    color: '#FF6600', 
    bgColor: '#ffffff' 
  },
];

const partners = [
  { 
    name: 'Spar Express', 
    icon: '🛒', 
    image: sparLogo,
    description: 'Convenience store', 
    color: '#ED1B2F' 
  },
  { 
    name: 'The Courier Guy', 
    icon: '📦', 
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
    description: 'Parcel services', 
    color: '#F7941E' 
  },
  { 
    name: 'Shell Select', 
    icon: '⛽', 
    image: spar,
    description: 'Fuel & convenience', 
    color: '#DD1D21' 
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      
      {/* Spar Express & Banking Partners Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Spar Express Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-50 px-6 py-2 rounded-full mb-4">
              <span className="text-[#ED1B2F] font-bold text-sm uppercase tracking-wide">Convenience Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6">
              Shop at{' '}
              <span className="text-[#ED1B2F] relative inline-block">
                Spar Express
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path d="M0 2 L200 2" stroke="#ED1B2F" strokeWidth="4" strokeDasharray="6 6" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Grab your daily essentials, fresh snacks, and cold drinks at our fully stocked Spar Express — open 24/7 for your convenience.
            </p>
          </div>

          {/* Spar Express Card */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl overflow-hidden mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="w-20 h-20 bg-[#ED1B2F] rounded-2xl flex items-center justify-center mb-6">
                  <img 
                    src={sparLogo} 
                    alt="Spar Express" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-4">
                  Spar Express at Shell Ottawa
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your one-stop convenience store for groceries, beverages, snacks, and everyday essentials. 
                  Stocked fresh daily and open 24/7 — because hunger doesn't wait for business hours.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Fresh sandwiches and hot meals',
                    'Cold drinks and coffee',
                    'Snacks and sweets',
                    'Household essentials',
                    'Car accessories',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="text-[#ED1B2F]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <span className="bg-[#ED1B2F] text-white px-4 py-2 rounded-full text-sm font-bold">
                    24/7 Open
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-bold">
                    Fresh Daily
                  </span>
                </div>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <img 
                  src={sparLogo} 
                  alt="Spar Express Store"
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
              </div>
            </div>
          </div>

          {/* Banking Partners Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 px-6 py-2 rounded-full mb-4">
              <span className="text-[#004B87] font-bold text-sm uppercase tracking-wide">24/7 Banking</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6">
              Multiple ATMs Available
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access cash anytime with our secure, well-lit ATMs from South Africa's leading banks.
            </p>
          </div>

          {/* Bank ATMs Grid with Local Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {bankLogos.map((bank, index) => (
              <div
                key={bank.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
                  <img 
                    src={bank.image} 
                    alt={`${bank.name} ATM`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md"
                    style={{ background: `${bank.color}15` }}
                  >
                    {bank.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-2">{bank.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">24/7 ATM Available</p>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Always Open
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Partners with Images */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-2">More Services at Shell Ottawa</h3>
              <p className="text-gray-500">Everything you need, all in one place</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="h-40 bg-gray-50 flex items-center justify-center p-4">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: `${partner.color}15` }}
                    >
                      {partner.icon}
                    </div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1">{partner.name}</h4>
                    <p className="text-gray-500 text-sm">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuickActions />
      <PromoSection />
      <FuelTypesSection />
      <ServicesSection />
      <SocialFeed />
      <ContactInfo />
      {/* <Footer /> */}
    </div>
  );
}