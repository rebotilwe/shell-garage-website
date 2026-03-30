import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import petrolImage from '../assets/images/Afribiz03069.webp';
import rewardsImage from '../assets/images/Afribiz03036.webp';
import sparImage from '../assets/images/Afribiz03005.webp';

const PROMOS = [
  {
    title:   'Fuel & Petrol',
    tag:     'FUELS',
    badge:   '🔥 Best Prices',
    desc:    'Shell FuelSave 93, 95, V-Power and Diesel — all available 24/7 at the best prices in Ottawa.',
    image:   petrolImage,
    accent:  '#DA291C',
    cta:     { label: 'View Fuel Prices', to: 'https://www.facebook.com/profile.php?id=61576227726268', external: true }, // Facebook link
  },
  {
    title:   'Spar Express Specials',
    tag:     'CONVENIENCE',
    badge:   '🛒 Fresh Daily',
    desc:    'Visit our Spar Express for fresh sandwiches, hot meals, cold drinks, and everyday essentials — open 24/7.',
    image:   sparImage,
    accent:  '#ED1B2F',
    cta:     { label: 'Shop Now', to: 'https://www.facebook.com/profile.php?id=61576227726268', external: true }, // Facebook link
  },
  {
    title:   'Rewards Program',
    tag:     'REWARDS',
    badge:   '⭐ Earn Points',
    desc:    'Every litre fuelled and every purchase earns you V+ points. Redeem for fuel, food and exclusive rewards.',
    image:   rewardsImage,
    accent:  '#DA291C',
    cta:     { label: 'Join V+ Rewards', to: '/contact', external: false }, // Contact page
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
  hover:   { y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } },
};

function PromoCard({ promo, index }) {
  const [hovered, setHovered] = useState(false);
  const isSpar = promo.accent === '#ED1B2F';
  const isRed = promo.accent === '#DA291C';

  const ctaStyle = {
    border: `2px solid ${promo.accent}`,
    padding: '8px 18px',
    borderRadius: 40,
    background: hovered ? promo.accent : 'transparent',
    color: hovered ? (isSpar ? '#1a1a1a' : '#ffffff') : promo.accent,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
  };

  // Determine if link is external or internal
  const isExternal = promo.cta.external;
  const linkProps = isExternal
    ? { href: promo.cta.to, target: "_blank", rel: "noopener noreferrer" }
    : { to: promo.cta.to };

  const LinkComponent = isExternal ? 'a' : Link;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl overflow-hidden bg-white flex flex-col h-full transition-all duration-300"
      style={{
        boxShadow: hovered
          ? `0 20px 35px -12px rgba(0,0,0,0.15), 0 0 0 1px ${promo.accent}40`
          : '0 4px 20px rgba(0,0,0,0.05)',
      }}
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <motion.img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Tag */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
          className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-[1px] uppercase shadow-lg"
          style={{ background: promo.accent, color: isSpar ? '#1a1a1a' : '#ffffff' }}
        >
          {promo.tag}
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
          className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full"
        >
          {promo.badge}
        </motion.div>
      </div>

      {/* Accent Bar */}
      <motion.div
        className="h-1"
        style={{
          background: `linear-gradient(90deg, ${promo.accent}, ${isSpar ? '#DA291C' : '#ED1B2F'})`,
          transformOrigin: 'left',
        }}
        animate={{ scaleX: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">
          {promo.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-5 flex-1">
          {promo.desc}
        </p>
        <LinkComponent
          {...linkProps}
          className="inline-flex items-center gap-2 self-start transition-all duration-200"
          style={ctaStyle}
          onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
          onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
        >
          {promo.cta.label}
          <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
            →
          </motion.span>
        </LinkComponent>
      </div>
    </motion.div>
  );
}

export default function PromoSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#DA291C]/10 px-5 py-2 rounded-full mb-5"
          >
            <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse" />
            <span className="text-[#DA291C] text-xs font-bold uppercase tracking-[2px]">
              What's On
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            >
              Current{' '}
              <span className="text-[#DA291C] relative inline-block">
                Promotions
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DA291C] to-[#ED1B2F] rounded-full" />
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
                View all services
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROMOS.map((promo, i) => (
            <PromoCard key={i} promo={promo} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 md:mt-16 bg-gradient-to-r from-[#DA291C] to-[#b71c1c] rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-[#FFCD00] text-xs font-bold uppercase tracking-wider mb-1">
                Shell Ottawa · Verulam
              </p>
              <p className="text-white text-lg md:text-xl font-bold">
                Open 24/7 — We're always here for you
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-[#FFCD00] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:shadow-lg transition-shadow"
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