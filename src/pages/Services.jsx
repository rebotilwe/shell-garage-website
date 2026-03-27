import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, ShoppingCart, Truck, CreditCard, Star, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

import petrolImage from '../assets/images/Afribiz03009.webp';
import dieselImage from '../assets/images/Afribiz03065.webp';
import fnbImage from '../assets/images/fnb.png';
import absaImage from '../assets/images/absa.jpg';
import shellSelectImage from '../assets/images/Afribiz03059.webp';
import sparImage from '../assets/images/Afribiz03047.webp';
import courierImage from '../assets/images/courier.png';
import rewardsImage from '../assets/images/Afribiz03048.webp';

const PLACEHOLDER_URL = "https://placehold.co/400x400/f0f0f0/333?text=";

const serviceImages = {
  'Shell V-Power 95': petrolImage,
  'Shell FuelSave Unleaded': dieselImage,
  'Shell Select Store': shellSelectImage,
  'Spar Express': sparImage,
  'FNB & ABSA ATMs': fnbImage,
  'The Courier Guy': courierImage,
  'V+ Rewards Program': rewardsImage,
};

const getServiceIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('v-power') || n.includes('fuel')) return <Fuel className="w-6 h-6" />;
  if (n.includes('select') || n.includes('spar')) return <ShoppingCart className="w-6 h-6" />;
  if (n.includes('courier')) return <Truck className="w-6 h-6" />;
  if (n.includes('atm') || n.includes('fnb') || n.includes('absa')) return <CreditCard className="w-6 h-6" />;
  if (n.includes('rewards') || n.includes('v+')) return <Star className="w-6 h-6" />;
  return <Clock className="w-6 h-6" />;
};

const SERVICES = [
  { name: 'Shell V-Power 95', desc: 'Premium performance fuel for maximum engine protection.', image: petrolImage, accent: '#DA291C' },
  { name: 'Shell FuelSave Unleaded', desc: 'High-quality unleaded fuel for everyday efficiency.', image: dieselImage, accent: '#FFCD00' },
  { name: 'Spar Express', desc: 'Convenience store with groceries, bakery, and hot meals.', image: sparImage, accent: '#ED1B2F' },
  { name: 'Shell Select Store', desc: '24/7 convenience with snacks and motoring essentials.', image: shellSelectImage, accent: '#DA291C' },
  { name: 'FNB & ABSA ATMs', desc: 'Secure 24/7 cash access from leading banks.', image: fnbImage, accent: '#0055A4' },
  { name: 'The Courier Guy', desc: 'Fast, reliable parcel services.', image: courierImage, accent: '#F7941E' },
  { name: 'V+ Rewards Program', desc: 'Earn points and enter exclusive draws.', image: rewardsImage, accent: '#FFCD00' }
];

function SmartImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgSrc = src || `${PLACEHOLDER_URL}${encodeURIComponent(alt)}`;

  return (
    <div className={`relative w-full h-full rounded-xl overflow-hidden ${className} bg-gray-100`}>
      {!loaded && !error && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
      {error && <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
        <MapPin className="w-10 h-10 opacity-50 mb-2"/>
        <div className="text-sm text-center">Service Available</div>
      </div>}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      />
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
  hover: { y: -6, scale: 1.02, transition: { duration: 0.3 } }
};

function ServiceCard({ service, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#DA291C]/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {service.image && (
          <div className="absolute inset-0 -z-10">
            <SmartImage src={service.image} alt={service.name} className="h-40 object-cover rounded-2xl" />
          </div>
        )}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center shadow-md mx-auto mb-4">
            {getServiceIcon(service.name)}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
          <p className="text-gray-700 text-sm mb-4">{service.desc}</p>
          <Link
            to="/contact"
            className="inline-block text-sm font-semibold text-[#DA291C] hover:underline"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function PremiumGallery({ images }) {
  const [selected, setSelected] = useState(null);
  const nextImage = () => setSelected((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelected((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => setSelected(index)}
          >
            <SmartImage src={img} alt={`Station ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition-all duration-300"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white text-3xl hover:scale-110 transition-all duration-300"
          >
            ‹
          </button>
          <motion.img
            key={images[selected]}
            src={images[selected]}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] max-w-[95vw] rounded-2xl object-contain"
            alt="Station"
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white text-3xl hover:scale-110 transition-all duration-300"
          >
            ›
          </button>
        </motion.div>
      )}
    </>
  );
}

export default function Services() {
  const galleryImages = [petrolImage, dieselImage, shellSelectImage, sparImage];

  return (
    <PageWrapper>
      <div className="bg-gray-50 min-h-screen">
    

        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={petrolImage} alt="Shell Station" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          <div className="relative z-10 text-white px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Complete Station<br />
              <span className="text-[#FFCD00]">Services</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Fuel, Spar Express, banking, courier and more — all in one place, 24/7.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
              Our Station
            </h2>
            <PremiumGallery images={galleryImages} />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#DA291C] to-[#b71c1c] py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready When You Are
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Fuel up, shop at Spar Express, or bank — everything is available around the clock.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FFCD00] text-[#1a1a1a] px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Visit Station →
            </Link>
          </div>
        </section>

       
      </div>
    </PageWrapper>
  );
}