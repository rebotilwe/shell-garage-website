import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services } from '../data/siteData';
import { Fuel, ShoppingCart, Waves, Truck, CreditCard, Clock } from 'lucide-react';
import PageWrapper from '../components/PageWrapper'

// Placeholder image base
const PLACEHOLDER_URL = "https://placehold.co/400x400/1a1a1a/DD1D21?text=";

// Icon fallback based on service name
const getIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('fuel') || n.includes('power')) return <Fuel size={40} />;
  if (n.includes('store') || n.includes('select')) return <ShoppingCart size={40} />;
  if (n.includes('wash')) return <Waves size={40} />;
  if (n.includes('courier') || n.includes('delivery')) return <Truck size={40} />;
  if (n.includes('atm') || n.includes('pay')) return <CreditCard size={40} />;
  return <Clock size={40} />;
};

// Smart Image Component with skeleton loader
function SmartImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    
    <div className={`relative w-full h-full bg-[#1a1a1a] overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}

// Animation variants for cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.96
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Service Card Component
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const imageSrc = service.image || `${PLACEHOLDER_URL}${encodeURIComponent(service.name)}`;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 cursor-pointer bg-[#111]"
      style={{
        boxShadow: hovered ? '0 15px 30px -10px rgba(0,0,0,0.25)' : '0 5px 15px -5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
        <SmartImage src={imageSrc} alt={service.name} className="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Icon Badge - Animated */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
          className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#DD1D21] to-[#FBCE07] flex items-center justify-center text-2xl shadow-lg"
        >
          {getIcon(service.name)}
        </motion.div>
        
        {/* Hover Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] transition-opacity duration-500`}
          animate={{ opacity: hovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-black text-white mb-2 tracking-tight">{service.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">
          {service.desc || "Experience the highest standard of Shell quality and reliability at our Ottawa station."}
        </p>
        
        {/* Accent Line */}
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] rounded-full"
          animate={{ width: hovered ? 80 : 48 }}
          transition={{ duration: 0.3 }}
          style={{ width: 48 }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.1 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.35 }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.8, ease: "easeOut" }
    }
  };

  return (
    <PageWrapper>
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">
  
      {/* Hero Section with Framer Motion */}
      <div className="relative pt-32 pb-20 text-center overflow-hidden">
        {/* Animated Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DD1D21] rounded-full blur-[120px]"
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span
            ref={headerRef}
            variants={tagVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-[#FBCE07] text-[10px] font-bold tracking-[4px] uppercase mb-4 block"
          >
            Reliability Defined
          </motion.span>
          
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-[clamp(40px,8vw,80px)] font-black uppercase tracking-tighter leading-none mb-6"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD1D21] to-[#FBCE07]">
              Services
            </span>
          </motion.h1>
          
          <motion.p
            variants={descVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From fuel to convenience, we've got everything you need under one roof — available 24/7.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-[#111] py-16 text-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Need Something? We're Here 24/7
          </motion.h2>
          
          <motion.p 
            className="text-white/50 text-lg max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Whether it's 3 AM or midday rush, our team is always ready to serve you.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

     
    </div>
    </PageWrapper>
  );
}