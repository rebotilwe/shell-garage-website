import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import images for slides
import slideFuelImage from '../assets/images/Afribiz03009.webp';
import slideRewardsImage from '../assets/images/Afribiz03048.webp';
import slideHelixImage from '../assets/images/Afribiz03036.webp';

const slides = [
  {
    title: "Feel the Fuel",
    subtitle: "Shell V-Power Unleashed",
    cta: "Find Station",
    desc: "Experience premium performance with the fuel trusted by Scuderia Ferrari on South Africa's roads.",
    accent: "#DA291C",
    image: slideFuelImage,
    link: "/services"
  },
  {
    title: "Win R100,000 Weekly!",
    subtitle: "V+ Rewards & Spar",
    cta: "Join V+ Now", 
    desc: "Scan your V+ card at Ottawa Express. Earn extra entries when you shop at Spar Express.",
    accent: "#FFCD00",
    image: slideRewardsImage,
    link: "/contact"
  },
  {
    title: "24/7 Convenience",
    subtitle: "Spar Express Freshness",
    cta: "View Shop",
    desc: "Fresh meals, groceries, and secure ATMs available anytime at our Shell Verulam station.",
    accent: "#ED1B2F",
    image: slideHelixImage,
    link: "/services"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const slide = slides[currentSlide];

  // Manual slide change
  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Animation variants
  const bgVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { scale: 1.05, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }
  };

  const tagVariants = { 
    initial: { opacity: 0, x: -30 }, 
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }, 
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } } 
  };
  
  const titleVariants = { 
    initial: { opacity: 0, y: 30 }, 
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }, 
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } } 
  };
  
  const subVariants = { 
    initial: { opacity: 0, y: 20 }, 
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.35 } }, 
    exit: { opacity: 0, y: 15, transition: { duration: 0.3 } } 
  };
  
  const descVariants = { 
    initial: { opacity: 0, y: 20 }, 
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }, 
    exit: { opacity: 0, y: 15, transition: { duration: 0.3 } } 
  };
  
  const buttonsVariants = { 
    initial: { opacity: 0, y: 20 }, 
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.65 } }, 
    exit: { opacity: 0, y: 15, transition: { duration: 0.3 } } 
  };

  return (
    <section className="relative overflow-hidden h-screen min-h-[600px] flex items-center justify-center bg-black">
      
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Enhanced Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#DA291C]/20 via-transparent to-[#FFCD00]/20" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_80%)] opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col justify-center h-full">

        {/* Slide Progress Bar */}
        <div className="flex justify-center gap-2 absolute top-8 left-1/2 -translate-x-1/2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="group relative h-1 w-16 bg-white/30 rounded-full overflow-hidden transition-all hover:scale-105"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={`absolute inset-0 bg-white/50 transition-opacity ${i === currentSlide ? 'opacity-0' : 'opacity-100'}`} />
              {i === currentSlide && (
                <motion.div 
                  layoutId="progress-bar"
                  className="absolute inset-0 bg-gradient-to-r from-[#FFCD00] to-[#DA291C]"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Hero Text */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide} 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >

            {/* Location Tag */}
            <motion.div
              variants={tagVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="inline-block bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-lg"
            >
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-[0.2em]">
                Shell Ottawa Express • Verulam
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-2"
            >
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${slide.accent}, #FFCD00)`, 
                  WebkitBackgroundClip: 'text' 
                }}
              >
                {slide.title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={subVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-xl sm:text-2xl md:text-4xl font-bold text-white/95 max-w-4xl mx-auto mb-2"
            >
              {slide.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={descVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            >
              {slide.desc}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={buttonsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={slide.link}
                  className="group relative bg-gradient-to-r from-[#DA291C] to-[#b71c1c] text-white px-10 py-4 md:px-12 md:py-5 rounded-2xl text-base md:text-lg font-black uppercase tracking-widest shadow-2xl hover:shadow-[#DA291C]/50 transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {slide.cta}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block"
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFCD00] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/services"
                  className="flex items-center gap-3 text-base md:text-lg font-bold uppercase tracking-widest text-white/80 hover:text-white transition-all group"
                >
                  Explore Services
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#FFCD00] inline-block"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Scroll Hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-[2px] h-10 bg-gradient-to-b from-[#FFCD00] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-black">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}