import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Professional themed images from Unsplash
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1562610275-582f136efbb1?q=80&w=1600&auto=format&fit=crop',
  architecture: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1200&auto=format&fit=crop',
  detail: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=800&auto=format&fit=crop',
community: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  store: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600&auto=format&fit=crop',
  carWash: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=600&auto=format&fit=crop',
};

// Common Image Wrapper with Skeleton Loader (FIXED - removed PageWrapper)
function SmartImage({ src, alt, className, style }) {
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
        className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={style}
      />
    </div>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans">
      
      <AboutHero heroImage={IMAGES.hero} />
      <AboutOrigin architectureImage={IMAGES.architecture} />
      <AboutValues detailImage={IMAGES.detail} />
      <AboutPromise />
      <AboutCommunity
        communityImage={IMAGES.community}
        storeImage={IMAGES.store}
        carWashImage={IMAGES.carWash}
      />
  
    </div>
  );
}

// ============================================
// HERO SECTION with Framer Motion
// ============================================
function AboutHero({ heroImage }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[#0A0A0A] flex items-end">
      {/* Background Image with Motion */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: visible ? 1 : 1.1, opacity: visible ? 0.45 : 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <SmartImage
          src={heroImage}
          alt="Shell Station Night"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#FBCE07] text-[10px] font-bold tracking-[4px] uppercase"
          >
            Est. Ottawa · Verulam
          </motion.span>
          
          <motion.h1 
            className="mt-5 text-white text-[clamp(45px,10vw,90px)] font-black uppercase leading-[0.85] tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            More Than<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#DD1D21] to-[#FBCE07]">
              Just Fuel
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: visible ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            className="mt-10 flex items-start gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="hidden md:block w-[2px] h-20 bg-gradient-to-b from-[#DD1D21] to-transparent flex-shrink-0 mt-2" />
            <p className="max-w-lg text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Shell Ottawa Verulam is a 24/7 kinetic ecosystem. We are the precision stop
              for the modern traveler, engineered for speed and service.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// ORIGIN SECTION with Framer Motion
// ============================================
function AboutOrigin({ architectureImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <motion.div 
          className="px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[#DD1D21] text-[10px] font-bold tracking-[4px] uppercase mb-6 block"
          >
            01 — Our Legacy
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-[#0A0A0A] text-[clamp(32px,4vw,52px)] font-black leading-[1.05] tracking-tight mb-8"
          >
            Built on a Foundation of <span className="text-[#DD1D21]">Trust</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-[#555] text-lg leading-relaxed font-light"
          >
            Serving the Ottawa and Verulam community for years, we have built a reputation 
            as the region's most dependable stop. Our focus remains on safety, reliability, 
            and the Shell standard of excellence.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative min-h-[400px]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <SmartImage src={architectureImage} alt="Modern Station Design" />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// VALUES SECTION with Framer Motion
// ============================================
const VALUES = [
  { num: '01', title: 'Reliability', desc: 'Open 24/7. When you need us, we’re here.' },
  { num: '02', title: 'Quality', desc: 'Shell V-Power and world-class service standards.' },
  { num: '03', title: 'Community', desc: 'Proudly serving the heart of Ottawa and Verulam.' },
  { num: '04', title: 'Convenience', desc: 'Everything you need in one precise stop.' },
];

function AboutValues({ detailImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const valueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section ref={ref} className="bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          className="relative min-h-[500px] lg:min-h-[800px] order-2 lg:order-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <SmartImage src={detailImage} alt="Industrial Detail" />
        </motion.div>
        
        <div className="px-6 md:px-12 lg:px-20 py-24 order-1 lg:order-2">
          <motion.span 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-[#DD1D21] text-[10px] font-bold tracking-[4px] uppercase mb-6 block"
          >
            02 — Engineering
          </motion.span>
          <motion.h2 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-white text-[clamp(32px,4vw,52px)] font-black leading-[1.05] tracking-tight mb-12"
          >
            Engineered for <span className="text-[#FBCE07]">Excellence</span>
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {VALUES.map((item, i) => (
              <motion.div 
                key={i} 
                custom={i}
                variants={valueVariants}
                className="group relative pl-16 py-10 border-b border-white/5 last:border-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="absolute left-0 top-11 text-[#FBCE07] text-[11px] font-bold font-mono"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.num}
                </motion.span>
                <h3 className="text-white text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-white/40 text-lg font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 24/7 PROMISE with Framer Motion
// ============================================
function AboutPromise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0A0A0A] py-32 text-center border-y border-white/5 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DD1D21] rounded-full blur-[120px]"
      />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
          className="w-12 h-[2px] bg-[#DD1D21] mx-auto mb-10"
        />
        
        <motion.h2 
          className="text-white text-[clamp(35px,7vw,80px)] font-black uppercase leading-none tracking-tighter mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          We Never{' '}
          <motion.span 
            className="text-[#FBCE07] relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Close
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#FBCE07] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-white/50 text-xl font-light leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          From the early morning commute to the late-night journey, 
          our team is operational every second of the day. 
          The lights are always on.
        </motion.p>
      </div>
    </section>
  );
}

// ============================================
// COMMUNITY SECTION with Framer Motion
// ============================================
function AboutCommunity({ communityImage, storeImage, carWashImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="bg-white py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.span 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-[#DD1D21] text-[10px] font-bold tracking-[4px] uppercase mb-6 block"
        >
          04 — Community Hub
        </motion.span>
        
        <motion.h2 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-[#0A0A0A] text-[clamp(32px,4vw,52px)] font-black leading-none tracking-tight mb-16"
        >
          The Heart of <span className="text-[#DD1D21]">Ottawa</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
          <motion.div 
            className="md:col-span-7 h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ delay: 0.1 }}
          >
            <SmartImage src={communityImage} alt="Community" className="rounded-2xl" />
          </motion.div>
          
          <div className="md:col-span-5 grid grid-rows-2 gap-6 h-[400px] md:h-[600px]">
            <motion.div 
              className="rounded-2xl overflow-hidden"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
              transition={{ delay: 0.2 }}
            >
              <SmartImage src={storeImage} alt="Shell Select Store" className="rounded-2xl" />
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
              transition={{ delay: 0.3 }}
            >
              <SmartImage src={carWashImage} alt="Car Wash Service" className="rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}