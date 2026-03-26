import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/shell-logo1.png';

// Import real images for slides
import slideFuelImage from '../assets/images/afribiz03009.webp';
import slide247Image from '../assets/images/afribiz03048.webp';
import slideSelectImage from '../assets/images/afribiz03036.webp';

const SLIDES = [
  {
    image: slideFuelImage,
    label: 'Quality Fuels',
    title: 'Premium Fuels for\nEvery Journey',
    sub: 'Shell FuelSave technology helps your engine run cleaner and go further on every litre.',
    cta: { label: 'Our Fuel Range', to: '/services' },
  },
  {
    image: slide247Image,
    label: '24 / 7 Service',
    title: 'Always Open.\nAlways Ready.',
    sub: 'Day or night, Shell Ottawa is your trusted stop in Verulam for fuel, snacks and more.',
    cta: { label: 'Find Us', to: '/contact' },
  },
  {
    image: slideSelectImage,
    label: 'Shell Select',
    title: 'Fresh Food &\nConvenience',
    sub: 'Hot meals, cold drinks, everyday essentials — all under one roof at our Shell Select store.',
    cta: { label: 'Explore Services', to: '/services' },
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  /* Auto-advance every 6 s */
  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % SLIDES.length), 6000);
    return () => clearTimeout(t);
  }, [current]);

  function goTo(idx) {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 500);
  }

  const slide = SLIDES[current];

  // Animation variants
  const backgroundVariants = {
    initial: { scale: 1.08, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { scale: 1.04, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }
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

  const lineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1, transition: { duration: 0.5, delay: 0.35 } },
    exit: { scaleX: 0, opacity: 0, transition: { duration: 0.3 } }
  };

  const subVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.45 } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.3 } }
  };

  const buttonsVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.3 } }
  };

  return (
    <section style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      minHeight: '92vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      {/* Background Image with Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(100deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 60%, rgba(0,0,0,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(221,29,33,0.18) 0%, transparent 60%)',
      }} />

      {/* Bottom Gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
      }} />

      {/* Content with Framer Motion */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1280px', margin: '0 auto',
        padding: 'clamp(80px,12vw,140px) 48px clamp(60px,8vw,100px)',
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        width: '100%',
      }}>
        <AnimatePresence mode="wait">
          <div key={current}>
            {/* Logo + label */}
            <motion.div
              variants={tagVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}
            >
              <img 
                src={logo} 
                alt="Shell Ottawa" 
                style={{ 
                  width: 48, 
                  height: 48, 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 24px rgba(251,206,7,0.45))'
                }} 
              />
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase',
                color: '#FBCE07', fontFamily: "'Trebuchet MS', sans-serif",
              }}>
                Shell Ottawa &nbsp;·&nbsp; {slide.label}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                fontSize: 'clamp(38px, 6vw, 72px)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-1.5px',
                color: '#ffffff',
                marginBottom: 20,
                maxWidth: 640,
                whiteSpace: 'pre-line',
                fontFamily: "'Trebuchet MS', 'Franklin Gothic Medium', sans-serif",
              }}
            >
              {slide.title}
            </motion.h1>

            {/* Red accent line */}
            <motion.div
              variants={lineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                width: 64, height: 4, background: '#DD1D21', borderRadius: 2,
                marginBottom: 24,
                transformOrigin: 'left',
              }}
            />

            {/* Subtitle */}
            <motion.p
              variants={subVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 40,
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              {slide.sub}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={buttonsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <Link to={slide.cta.to}
                style={{
                  background: '#FBCE07', color: '#1a1a1a',
                  padding: '14px 32px', borderRadius: 4,
                  fontSize: 13, fontWeight: 800, letterSpacing: '.7px', textTransform: 'uppercase',
                  textDecoration: 'none', display: 'inline-block',
                  boxShadow: '0 6px 24px rgba(251,206,7,0.35)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  fontFamily: "'Trebuchet MS', sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(251,206,7,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(251,206,7,0.35)'; }}
              >
                {slide.cta.label}
              </Link>

              <Link to="/contact"
                style={{
                  background: 'transparent', color: '#ffffff',
                  padding: '14px 32px', borderRadius: 4,
                  fontSize: 13, fontWeight: 800, letterSpacing: '.7px', textTransform: 'uppercase',
                  textDecoration: 'none', display: 'inline-block',
                  border: '2px solid rgba(255,255,255,0.4)',
                  transition: 'border-color 0.2s, background 0.2s',
                  fontFamily: "'Trebuchet MS', sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#FBCE07'; e.currentTarget.style.background = 'rgba(251,206,7,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent'; }}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Slide Dots */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, display: 'flex', gap: 10, alignItems: 'center',
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              background: i === current ? '#FBCE07' : 'rgba(255,255,255,0.4)',
              transition: 'width 0.35s, background 0.35s',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide Arrows */}
      {[
        { dir: 'prev', symbol: '‹', style: { left: 24 } },
        { dir: 'next', symbol: '›', style: { right: 24 } },
      ].map(({ dir, symbol, style }) => (
        <button key={dir}
          onClick={() => goTo(dir === 'next' ? (current + 1) % SLIDES.length : (current - 1 + SLIDES.length) % SLIDES.length)}
          aria-label={dir}
          style={{
            position: 'absolute', top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            background: 'rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#ffffff',
            width: 44, height: 44, borderRadius: '50%',
            fontSize: 26, lineHeight: 1, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
            ...style,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#DD1D21'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)'; }}
        >
          {symbol}
        </button>
      ))}

      {/* Bottom Stripe */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, zIndex: 4,
        background: 'linear-gradient(90deg, #DD1D21 0%, #FBCE07 100%)',
      }} />
    </section>
  );
}