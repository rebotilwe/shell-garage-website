import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import petrolImage from '../assets/images/Afribiz03065.webp';


const SERVICES = [
   {
     title:   'Fuel & Petrol',
     tag:     'FUELS',
     badge:   '🔥 Best Prices',
     desc:    'Shell FuelSave 93, 95, V-Power and Diesel — all available 24/7 at the best prices in Ottawa.',
     image:   petrolImage,
     accent:  '#DD1D21',
     cta:     { label: 'View Fuel Prices', to: '/services' },
   },
  {
    name:    'Car Wash',
    tag:     'VALET',
    icon:    '🚗',
    desc:    'From a quick rinse to a full valet detail — our car wash leaves your vehicle spotless every time.',
    image:   'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
    accent:  '#FBCE07',
    to:      '/services',
  },
  {
    name:    'ATM',
    tag:     'BANKING',
    icon:    '🏧',
    desc:    '24-hour ATM on site so you always have access to cash whenever you need it, day or night.',
    image:   'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80',
    accent:  '#DD1D21',
    to:      '/services',
  },
  {
    name:    'The Courier Guy',
    tag:     'COURIER',
    icon:    '📦',
    desc:    'Send and receive parcels easily. We are an official The Courier Guy drop-off and collection point.',
    image:   'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
    accent:  '#FBCE07',
    to:      '/services',
  },
  {
    name:    'Shell Select',
    tag:     'SHOP',
    icon:    '🛒',
    desc:    'Hot food, cold drinks, snacks and everyday essentials — all stocked fresh in our convenience store.',
    image:   'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
    accent:  '#DD1D21',
    to:      '/services',
  },
  {
    name:    'V+ Rewards',
    tag:     'LOYALTY',
    icon:    '⭐',
    desc:    'Earn points on every fuel up and in-store purchase. Redeem for discounts, fuel and exclusive deals.',
    image:   'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    accent:  '#FBCE07',
    to:      '/contact',
  },
];

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
      delay: index * 0.08,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -7,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function ServiceCard({ svc, index }) {
  const [hovered, setHovered] = useState(false);
  const isYellow = svc.accent === '#FBCE07';

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
      className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer h-full"
      style={{
        boxShadow: hovered
          ? `0 20px 48px rgba(0,0,0,0.14), 0 0 0 2px ${svc.accent}`
          : '0 2px 16px rgba(0,0,0,0.07)',
      }}
    >
      {/* Image Section */}
      <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
        <motion.img
          src={svc.image}
          alt={svc.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Tag */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
          className="absolute top-3 left-3 px-2 py-1 rounded text-[9px] font-extrabold tracking-[2px] uppercase"
          style={{
            background: svc.accent,
            color: isYellow ? '#1a1a1a' : '#ffffff',
          }}
        >
          {svc.tag}
        </motion.div>

        {/* Icon circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
          className="absolute bottom-3 right-3 w-10 h-10 md:w-[42px] md:h-[42px] rounded-full backdrop-blur-sm flex items-center justify-center text-xl transition-colors duration-300"
          style={{
            background: hovered ? svc.accent : 'rgba(0,0,0,0.55)',
          }}
        >
          {svc.icon}
        </motion.div>
      </div>

      {/* Accent Line */}
      <motion.div
        className="h-0.5"
        style={{
          background: `linear-gradient(90deg, ${svc.accent}, ${isYellow ? '#DD1D21' : '#FBCE07'})`,
          transformOrigin: 'left',
        }}
        animate={{ scaleX: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-black text-[#1a1a1a] mb-2 tracking-tight">
          {svc.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {svc.desc}
        </p>
        <Link
          to={svc.to}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wide uppercase transition-all duration-200 group"
          style={{ color: svc.accent }}
          onMouseEnter={e => { e.currentTarget.style.gap = '10px'; }}
          onMouseLeave={e => { e.currentTarget.style.gap = '6px'; }}
        >
          Learn more
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Animation variants for header elements
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.1 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4, ease: "easeOut" }
    }
  };

  const bottomBannerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mb-8 md:mb-12 lg:mb-14"
        >
          <motion.p
            variants={tagVariants}
            className="text-[#DD1D21] text-[10px] sm:text-[11px] font-extrabold tracking-[3px] uppercase mb-2"
          >
            Shell Ottawa · Verulam
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2
              variants={titleVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-[#1a1a1a]"
            >
              Everything You Need,{' '}
              <span className="text-[#DD1D21] border-b-4 border-[#FBCE07] pb-0.5">
                One Stop
              </span>
            </motion.h2>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/services"
                className="text-[#DD1D21] text-xs sm:text-[13px] font-bold uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                All services →
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={dividerVariants}
            className="mt-4 sm:mt-5 h-0.5 w-16 sm:w-20 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] rounded-full"
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} />
          ))}
        </div>

        {/* Bottom Banner - Responsive */}
        <motion.div
          variants={bottomBannerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section - Dark */}
            <div className="bg-[#1a1a1a] p-5 sm:p-6 md:p-8 lg:p-10 text-center md:text-left">
              <p className="text-[#FBCE07] text-[10px] sm:text-[11px] font-extrabold tracking-[2px] uppercase mb-2">
                Open 24 Hours
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-extrabold">
                Fuel up any time — day or night
              </p>
            </div>
            
            {/* Right Section - Red */}
            <div className="bg-[#DD1D21] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-white text-sm sm:text-base font-bold">
                Questions about our services?
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#FBCE07] text-[#1a1a1a] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-[11px] sm:text-xs font-extrabold tracking-wide uppercase whitespace-nowrap hover:shadow-lg transition-shadow"
                >
                  Contact Us →
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}