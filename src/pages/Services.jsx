import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services } from '../data/siteData';
import { Fuel, ShoppingCart, Waves, Truck, CreditCard, Clock } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

// Real images
import petrolImage from '../assets/images/Afribiz03009.webp';
import dieselImage from '../assets/images/Afribiz03065.webp';
import carWashImage from '../assets/images/Afribiz03053.webp';
import fnbImage from '../assets/images/fnb.png';
import absaImage from '../assets/images/absa.jpg';
import cashExpressImage from '../assets/images/Afribiz03048.webp';
import shellSelectImage from '../assets/images/Afribiz03059.webp';

// Try to import courier image - with error handling
let courierGuy;
try {
  courierGuy = require('../assets/images/courier.png');
} catch (e) {
  console.log('Courier image not found, using placeholder');
  courierGuy = null;
}

import spar from '../assets/images/afribiz03072.webp';

// Placeholder fallback
const PLACEHOLDER_URL = "https://placehold.co/400x400/f0f0f0/333?text=";

// Map services to images
const serviceImages = {
  'Petrol': petrolImage,
  'Diesel': dieselImage,
  'Car Wash': carWashImage,
  'FNB ATM': fnbImage,
  'ABSA ATM': absaImage,
  'Cash Express ATM': cashExpressImage,
  'Shell Select': shellSelectImage,
  'V+ Rewards': null,
  'The Courier Guy': courierGuy,
  'Water (R1 per litre)': null,
  'Spar Convenience Store': spar,
};
// Icons - Improved to handle all services
const getIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('fuel') || n.includes('petrol') || n.includes('diesel')) return <Fuel size={24} />;
  if (n.includes('store') || n.includes('select') || n.includes('spar')) return <ShoppingCart size={24} />;
  if (n.includes('wash')) return <Waves size={24} />;
  if (n.includes('courier')) return <Truck size={24} />;
  if (n.includes('atm')) return <CreditCard size={24} />;
  if (n.includes('water')) return <Clock size={24} />;
  if (n.includes('rewards') || n.includes('v+')) return <Clock size={24} />;
  return <Clock size={24} />;
};

// Smart Image with error handling
function SmartImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Image not available
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

// Service Card
function ServiceCard({ service, index }) {
  const imageSrc =
    serviceImages[service.name] ||
    service.image ||
    `${PLACEHOLDER_URL}${encodeURIComponent(service.name)}`;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <SmartImage src={imageSrc} alt={service.name} />
      </div>

      <div className="p-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-[#DD1D21] mb-3">
          {getIcon(service.name)}
        </div>

        <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
          {service.name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {service.desc || "Premium service available 24/7 at our Shell station."}
        </p>
      </div>
    </motion.div>
  );
}

// Premium Gallery with Lightbox
function PremiumGallery({ images }) {
  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-2xl cursor-pointer group h-[300px]"
            onClick={() => setSelected(index)}
          >
            <img
              src={img}
              alt="Shell Station"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-3xl hover:scale-110 transition"
          >
            ‹
          </button>

          <motion.img
            key={images[selected]}
            src={images[selected]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default function Services() {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen">

        {/* Hero Section */}
        <div className="relative h-[70vh] flex items-center justify-center text-center">
          <img
            src={petrolImage}
            alt="Shell Garage"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

          <div className="relative z-10 text-white px-6 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Everything you need — fuel, convenience, and more — all in one place.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Premium Gallery */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-center text-[#1a1a1a] mb-4"
            >
              Our Station
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Take a look at our modern Shell station, designed for convenience and speed.
            </motion.p>

            <PremiumGallery
              images={[
                petrolImage,
                carWashImage,
                shellSelectImage,
                dieselImage,
              ]}
            />
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#DD1D21] to-[#b5181b] py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Visit Us Today
          </h2>
          <p className="mb-6 text-white/90">
            Open 24/7 for your convenience.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FBCE07] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Contact Us →
          </Link>
        </div>

     
      </div>
    </PageWrapper>
  );
}