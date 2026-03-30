import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, ShoppingCart, Truck, CreditCard, Star, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

import petrolImage from '../assets/images/Afribiz03009.webp';
import dieselImage from '../assets/images/Afribiz03065.webp';
import shellSelectImage from '../assets/images/Afribiz03059.webp';
import sparImage from '../assets/images/Afribiz03047.webp';
import courierImage from '../assets/images/courier.png';
import rewardsImage from '../assets/images/Afribiz03048.webp';
import fnbImage from '../assets/images/fnb.png';

const PLACEHOLDER_URL = "https://placehold.co/400x400/f0f0f0/333?text=";

const getServiceIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('fuel')) return <Fuel className="w-5 h-5" />;
  if (n.includes('spar') || n.includes('select')) return <ShoppingCart className="w-5 h-5" />;
  if (n.includes('courier')) return <Truck className="w-5 h-5" />;
  if (n.includes('bank') || n.includes('atm')) return <CreditCard className="w-5 h-5" />;
  if (n.includes('reward')) return <Star className="w-5 h-5" />;
  return <Clock className="w-5 h-5" />;
};

const SERVICES = [
  {
    name: 'Shell V-Power & FuelSave',
    desc: 'Premium and everyday fuels designed for performance, efficiency, and engine protection.',
    image: petrolImage,
    accent: '#DA291C',
    link: '/contact'
  },
  {
    name: 'Spar Express',
    desc: 'Fresh groceries, bakery items, hot meals, and essentials available 24/7.',
    image: sparImage,
    accent: '#ED1B2F',
    link: '/contact'
  },
  {
    name: 'Shell Select Store',
    desc: 'Convenient snacks, drinks, and everyday essentials anytime you need them.',
    image: shellSelectImage,
    accent: '#DA291C',
    link: '/contact'
  },
  {
    name: 'Banking Services',
    desc: '24/7 ATM access including FNB, ABSA, and Cash Express for your convenience.',
    image: fnbImage,
    accent: '#0055A4',
    link: '/contact'
  },
  {
    name: 'The Courier Guy',
    desc: 'Reliable parcel drop-off and collection point for fast deliveries.',
    image: courierImage,
    accent: '#F7941E',
    link: '/contact'
  },
  {
    name: 'V+ Rewards Program',
    desc: 'Earn points on fuel and purchases with access to exclusive offers and rewards.',
    image: rewardsImage,
    accent: '#FFCD00',
    link: '/contact'
  }
];

function SmartImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgSrc = src || `${PLACEHOLDER_URL}${encodeURIComponent(alt)}`;

  return (
    <div className={`relative w-full h-full rounded-xl overflow-hidden ${className} bg-gray-100`}>
      {!loaded && !error && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <MapPin className="w-8 h-8 opacity-50 mb-2"/>
          <span className="text-xs">Available</span>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
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
      className="group"
    >
      <div className="relative bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">

        {/* Background Image */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <SmartImage src={service.image} alt={service.name} />
        </div>

        {/* Content */}
        <div className="relative text-center">
          
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: `${service.accent}15` }}
          >
            <div style={{ color: service.accent }}>
              {getServiceIcon(service.name)}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#DA291C] transition-colors">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
            {service.desc}
          </p>

          {/* CTA */}
          <Link
            to={service.link}
            className="text-sm font-semibold text-[#DA291C] hover:underline"
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="h-56 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelected(index)}
          >
            <SmartImage src={img} alt="Station" />
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <img
            src={images[selected]}
            className="max-h-[80vh] max-w-[90vw] rounded-xl"
            alt="Preview"
          />
        </div>
      )}
    </>
  );
}

export default function Services() {
  const galleryImages = [petrolImage, dieselImage, shellSelectImage, sparImage];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <div className="bg-gray-50 min-h-screen">
      

        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <img src={petrolImage} className="w-full h-full object-cover" alt="Shell" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Our Services
            </h1>
            <p className="text-sm md:text-base text-white/90">
              Everything you need in one convenient stop, 24/7.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
  What We Offer
</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Station
            </h2>
            <PremiumGallery images={galleryImages} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#DA291C] py-16 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Open 24 Hours
          </h2>
          <p className="text-sm md:text-base mb-6 text-white/90">
            Visit us anytime for fuel, food, and convenience.
          </p>
          <Link
            to="/contact"
            className="bg-[#FFCD00] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Directions →
          </Link>
        </section>

      </div>
    </PageWrapper>
  );
}