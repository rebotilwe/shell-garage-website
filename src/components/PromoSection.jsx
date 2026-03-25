import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
const petrolImage = '/images/afribiz03069.webp';

const PROMOS = [
  {
    title:   'Fuel & Petrol',
    tag:     'FUELS',
    badge:   '🔥 Best Prices',
    desc:    'Shell FuelSave 93, 95, V-Power and Diesel — all available 24/7 at the best prices in Ottawa.',
 image:   'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
    accent:  '#DD1D21',
    cta:     { label: 'View Fuel Prices', to: '/services' },
  },
  {
    title:   'Car Wash Deals',
    tag:     'CAR WASH',
    badge:   '✨ This Week',
    desc:    'Keep your car showroom-fresh with our premium quick-wash packages. Available every day at Shell Ottawa.',
    cta:     { label: 'See Packages', to: '/services' },
    image:   'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
    accent:  '#FBCE07',
  },
  {
    title:   'Rewards Program',
    tag:     'REWARDS',
    badge:   '⭐ Earn Points',
    desc:    'Every litre fuelled and every purchase earns you V+ points. Redeem for fuel, food and exclusive rewards.',
    cta:     { label: 'Join V+ Rewards', to: '/contact' },
    image:   'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    accent:  '#DD1D21',
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function PromoCard({ promo, index }) {
  const [hovered, setHovered] = useState(false);
  const isYellow = promo.accent === '#FBCE07';

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
      className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      style={{
        boxShadow: hovered
          ? `0 24px 56px rgba(0,0,0,0.16), 0 0 0 2px ${promo.accent}`
          : '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <motion.img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

        {/* Tag pill top-left */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
          className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 py-1 rounded text-[10px] font-extrabold tracking-[2px] uppercase"
          style={{
            background: promo.accent,
            color: isYellow ? '#1a1a1a' : '#ffffff',
          }}
        >
          {promo.tag}
        </motion.div>

        {/* Badge bottom-left */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
          className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/65 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full"
        >
          {promo.badge}
        </motion.div>
      </div>

      {/* Accent Bar */}
      <motion.div
        className="h-1"
        style={{
          background: `linear-gradient(90deg, ${promo.accent}, ${isYellow ? '#DD1D21' : '#FBCE07'})`,
          transformOrigin: 'left',
        }}
        animate={{ scaleX: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.4 }}
      />

      {/* Body */}
      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-2 tracking-tight">
          {promo.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-5 flex-1">
          {promo.desc}
        </p>
        <Link
          to={promo.cta.to}
          className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wide uppercase transition-all duration-200 self-start"
          style={{
            color: promo.accent,
            border: `2px solid ${promo.accent}`,
            padding: '8px 16px',
            borderRadius: 4,
            background: hovered ? promo.accent : 'transparent',
            color: hovered ? (isYellow ? '#1a1a1a' : '#ffffff') : promo.accent,
          }}
          onMouseEnter={e => { e.currentTarget.style.gap = '10px'; }}
          onMouseLeave={e => { e.currentTarget.style.gap = '8px'; }}
        >
          {promo.cta.label}
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.25 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function PromoSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Animation variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3, ease: "easeOut" }
    }
  };

  const bottomStripVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F7F7F7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mb-8 md:mb-12 lg:mb-14"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.5 } }
            }}
            className="text-[#DD1D21] text-[10px] sm:text-[11px] font-extrabold tracking-[3px] uppercase mb-2"
          >
            What's On
          </motion.p>
          
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-[#1a1a1a]">
              Current{' '}
              <span className="bg-[#DD1D21] text-white px-2 py-0.5 rounded">
                Promotions
              </span>
            </h2>
            
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/services"
                className="text-[#DD1D21] text-xs sm:text-[13px] font-bold uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                View all services →
              </Link>
            </motion.div>
          </div>

          {/* Red/yellow divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="mt-4 sm:mt-5 h-0.5 w-16 sm:w-20 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] rounded-full"
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {PROMOS.map((promo, i) => (
            <PromoCard key={i} promo={promo} index={i} />
          ))}
        </div>

        {/* Bottom CTA Strip - Responsive */}
        <motion.div
          variants={bottomStripVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-[#DD1D21] rounded-lg p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-[10px] sm:text-[11px] font-extrabold tracking-[2px] uppercase text-white/70 mb-1">
                Shell Ottawa · Verulam
              </p>
              <p className="text-base sm:text-lg md:text-xl font-extrabold text-white">
                Open 24 / 7 — We're always here for you
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-[#FBCE07] text-[#1a1a1a] px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded text-[11px] sm:text-xs md:text-[13px] font-extrabold tracking-wide uppercase whitespace-nowrap hover:shadow-lg transition-shadow"
              >
                Get Directions →
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}