import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FUELS = [
  {
    name: 'Shell V-Power',
    tag: 'PREMIUM',
    icon: '⚡',
    desc: 'Ultimate performance fuel with Nitrogen Enriched Cleaning Technology for maximum engine protection.',
    accent: '#DA291C',
    octane: '95 RON',
  },
  {
    name: 'Shell FuelSave 93',
    tag: 'UNLEADED',
    icon: '⛽',
    desc: 'Reliable unleaded fuel for everyday driving with proven efficiency.',
    accent: '#FFCD00',
    octane: '93 RON',
  },
  {
    name: 'Shell FuelSave 95',
    tag: 'ENHANCED',
    icon: '🔋',
    desc: 'Advanced unleaded with superior engine cleaning for modern vehicles.',
    accent: '#DA291C',
    octane: '95 RON',
  },
  {
    name: 'Shell Diesel',
    tag: 'DIESEL',
    icon: '🚛',
    desc: 'Premium clean diesel for trucks and vehicles, available 24/7.',
    accent: '#FFCD00',
    octane: null,
  },
];

export default function FuelTypesSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-0 -right-48 w-96 h-96 bg-[#DA291C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-[#FFCD00]/5 rounded-full blur-3xl" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_2rem_2rem,#DA291C_1px,transparent_0)] bg-[length:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#DA291C]/10 px-6 py-2.5 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse" />
            <span className="text-[#DA291C] font-bold text-sm uppercase tracking-[2px]">
              Quality Fuels
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
          >
            Premium Fuel You{' '}
            <span className="text-[#DA291C] relative inline-block">
              Can Trust
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DA291C] to-[#FFCD00] rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Full Shell fuel range — always fresh, quality assured, available 24/7 at  Shell Ottawa, Verulam.
          </motion.p>
        </motion.div>

        {/* Fuel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUELS.map((fuel, i) => {
            const isYellow = fuel.accent === '#FFCD00';
            return (
              <motion.div
                key={fuel.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#DA291C]/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent strip */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ 
                    background: `linear-gradient(90deg, ${fuel.accent}, ${isYellow ? '#DA291C' : '#FFCD00'})`
                  }}
                />

                {/* Octane badge */}
                {fuel.octane && (
                  <div className="absolute top-4 right-4 bg-[#DA291C]/10 text-[#DA291C] px-2.5 py-1 rounded-full text-xs font-bold">
                    {fuel.octane}
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${fuel.accent}10` }}
                >
                  {fuel.icon}
                </div>

                {/* Tag */}
                <div 
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: fuel.accent }}
                >
                  {fuel.tag}
                </div>

                {/* Name */}
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {fuel.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {fuel.desc}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 w-8 h-0.5 bg-gray-200 group-hover:w-12 group-hover:bg-[#DA291C] transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600 font-medium">
              All fuels available 24/7 • Shell Ottawa, Verulam
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}