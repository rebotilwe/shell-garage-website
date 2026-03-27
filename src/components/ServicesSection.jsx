import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import petrolImage from '../assets/images/Afribiz03065.webp';
import atmImage from '../assets/images/absa.jpg';
import courierImage from '../assets/images/courier.png';
import selectImage from '../assets/images/Afribiz03036.webp';
import rewardsImage from '../assets/images/Afribiz03048.webp';
import sparImage from '../assets/images/Afribiz03005.webp';

const SERVICES = [
  {
    name: 'V-Power Fuel',
    tag: 'FUELS',
    icon: '⛽',
    desc: 'Shell V-Power 95, FuelSave 93, Diesel Power — premium quality at competitive prices, 24/7.',
    image: petrolImage,
    accent: '#DA291C',
    to: '/services',
  },
  {
    name: 'ATM Services', 
    tag: 'BANKING',
    icon: '🏧',
    desc: 'FNB, ABSA & Cash Express ATMs — secure 24/7 cash access with contactless withdrawals.',
    image: atmImage,
    accent: '#004B87',
    to: '/services',
  },
  {
    name: 'The Courier Guy',
    tag: 'COURIER',
    icon: '📦',
    desc: 'Official drop-off & collection point. Track parcels instantly at your Shell station.',
    image: courierImage,
    accent: '#F7941E',
    to: '/services',
  },
  {
    name: 'Shell Select', 
    tag: 'SHOP',
    icon: '🛒',
    desc: 'Hot meals, cold drinks, snacks & essentials — fresh stock for motorists on the move.',
    image: selectImage,
    accent: '#DA291C',
    to: '/services',
  },
  {
    name: 'Spar Express',
    tag: 'GROCERY',
    icon: '🏪',
    desc: '24/7 convenience store with fresh produce, bakery items & daily essentials.',
    image: sparImage,
    accent: '#ED1B2F',
    to: '/services',
  },
  {
    name: 'V+ Rewards',
    tag: 'LOYALTY',
    icon: '⭐',
    desc: 'Earn points on fuel & shopping. Win R100k weekly + exclusive Shell discounts.',
    image: rewardsImage,
    accent: '#FFCD00',
    to: '/contact',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
  hover: { y: -6, scale: 1.01, transition: { duration: 0.2 } },
};

function ServiceCard({ svc, index }) {
  const isYellow = svc.accent === '#FFCD00';
  const isSpar = svc.accent === '#ED1B2F';
  const isCourier = svc.accent === '#F7941E';
  const isBank = svc.accent === '#004B87';

  const getTextColor = () => {
    if (isYellow || isSpar || isCourier) return '#1a1a1a';
    if (isBank) return '#ffffff';
    return '#ffffff';
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        <motion.img
          src={svc.image}
          alt={svc.name}
          className="w-full h-full object-cover"
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Tag Badge */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 + index * 0.05 }}
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg"
          style={{ 
            backgroundColor: svc.accent, 
            color: getTextColor()
          }}
        >
          {svc.tag}
        </motion.div>

        {/* Icon Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg"
        >
          {svc.icon}
        </motion.div>
      </div>

      {/* Accent Bar */}
      <div 
        className="h-1 w-full"
        style={{ 
          background: `linear-gradient(90deg, ${svc.accent}, ${isYellow ? '#DA291C' : '#FFCD00'})`
        }}
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 group-hover:text-[#DA291C] transition-colors">
          {svc.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
          {svc.desc}
        </p>
        <Link
          to={svc.to}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:gap-3 group/link"
          style={{ color: svc.accent }}
        >
          Learn more
          <span className="text-base">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#DA291C]/10 px-5 py-2 rounded-full mb-5"
          >
            <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse" />
            <span className="text-[#DA291C] text-xs font-bold uppercase tracking-[2px]">
              Shell Ottawa · Verulam
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            >
              Everything You Need,{' '}
              <span className="text-[#DA291C] relative inline-block">
                One Stop
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DA291C] to-[#FFCD00] rounded-full" />
              </span>
            </motion.h2>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/services"
                className="text-[#DA291C] text-sm font-bold uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                All services
                <span>→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto h-0.5 w-20 bg-gradient-to-r from-[#DA291C] to-[#FFCD00] rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} index={i} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 rounded-2xl overflow-hidden bg-gradient-to-r from-[#DA291C] to-[#b71c1c] shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
            <div className="text-center md:text-left">
              <p className="text-[#FFCD00] text-xs font-bold uppercase tracking-wider mb-2">
                Open 24 Hours
              </p>
              <p className="text-white text-xl md:text-2xl font-bold">
                Fuel up any time — day or night
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-white/90 text-sm font-semibold">
                Questions about our services?
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#FFCD00] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:shadow-lg transition-shadow"
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