import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import real images from assets - USE EXACT FILENAMES (capital A)
import heroImage from '../assets/images/Afribiz03065.webp';
import architectureImage from '../assets/images/Afribiz03005.webp';
import detailImage from '../assets/images/Afribiz03052.webp';
import communityImage from '../assets/images/Afribiz03069.webp';
import storeImage from '../assets/images/Afribiz03019.webp';
import carWashImage from '../assets/images/Afribiz03005.webp';

// Common Image Wrapper with Skeleton Loader
function SmartImage({ src, alt, className, style }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative w-full h-full bg-gray-100 overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
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

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section with Red Background */}
      <div className="relative bg-gradient-to-br from-[#DD1D21] to-[#b5181b] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBCE07] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBCE07] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <span className="text-[#FBCE07] text-xs font-bold tracking-[4px] uppercase mb-4 block">
              Est. Ottawa · Verulam
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              More Than{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBCE07] to-white">
                  Just Fuel
                </span>
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#FBCE07] mx-auto rounded-full mb-6" />
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Shell Ottawa Verulam is your 24/7 community hub. We're more than a fuel station — 
              we're the precision stop for the modern traveler, engineered for speed and service.
            </p>
          </div>
        </div>
      </div>

      {/* Origin Section - White Background */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#DD1D21] text-xs font-bold tracking-[4px] uppercase mb-4 block">
                01 — Our Legacy
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
                Built on a Foundation of{' '}
                <span className="text-[#DD1D21]">Trust</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Serving the Ottawa and Verulam community for years, we have built a reputation 
                as the region's most dependable stop. Our focus remains on safety, reliability, 
                and the Shell standard of excellence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                What started as a simple petrol station has evolved into a full-service hub, 
                combining fuel, vehicle care, courier services, and a fully stocked convenience 
                store — all under one roof, open 24 hours a day.
              </p>
              <div className="mt-8 flex gap-6">
                <div>
                  <div className="text-3xl font-black text-[#DD1D21]">24/7</div>
                  <div className="text-gray-500 text-sm">Always Open</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#DD1D21]">6+</div>
                  <div className="text-gray-500 text-sm">Core Services</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#DD1D21]">365</div>
                  <div className="text-gray-500 text-sm">Days a Year</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <SmartImage src={architectureImage} alt="Shell Station" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Light Gray Background */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <SmartImage src={detailImage} alt="Fuel Nozzle Detail" className="rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#DD1D21] text-xs font-bold tracking-[4px] uppercase mb-4 block">
                02 — Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
                Engineered for{' '}
                <span className="text-[#FBCE07] bg-[#1a1a1a] px-2">Excellence</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Reliability', desc: 'Open 24/7. When you need us, we\'re here — no exceptions, no excuses.' },
                  { title: 'Quality', desc: 'Shell FuelSave and V-Power fuels, fresh food, and premium services. We never compromise on what we offer.' },
                  { title: 'Community', desc: 'We\'re not just a fuel station — we\'re a neighbourhood hub. Built by Ottawa, for Ottawa and Verulam.' },
                  { title: 'Convenience', desc: 'Fuel, car wash, courier, ATM, and a fully stocked shop. Everything under one roof to keep you moving.' },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-[#DD1D21] pl-4">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Promise Section - White Background */}
      <section className="bg-white py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#DD1D21]/10 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DD1D21] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DD1D21]" />
            </span>
            <span className="text-[#DD1D21] text-xs font-bold tracking-wider uppercase">03 — The 24/7 Promise</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight">
            When The World <span className="relative inline-block">Sleeps
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                <path d="M0 2 L200 2" stroke="#DD1D21" strokeWidth="4" strokeDasharray="6 6" />
              </svg>
            </span>
            ,<br />
            We Stay <span className="text-[#FBCE07] bg-[#1a1a1a] px-2">Open</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Whether it's 3 AM or midday rush, our team is operational every second of the day. 
            The lights are always on, and we're always ready to serve you.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '24/7', label: 'Always Open' },
              { value: '6+', label: 'Core Services' },
              { value: '1000+', label: 'Happy Customers' },
              { value: '365', label: 'Days a Year' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#DD1D21]">{stat.value}</div>
                <div className="text-gray-500 text-xs md:text-sm font-bold tracking-[2px] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Light Gray Background */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#DD1D21] text-xs font-bold tracking-[4px] uppercase mb-4 block">
              04 — Community Hub
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">
              The Heart of <span className="text-[#DD1D21]">Ottawa</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than just a pit stop — we're woven into the fabric of this community.
              From the early morning commuter to the late-night traveler, we're here for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <SmartImage src={communityImage} alt="Community" className="rounded-2xl" />
            </div>
            <div className="md:col-span-5 grid grid-rows-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[200px] md:h-[215px]">
                <SmartImage src={storeImage} alt="Shell Select Store" className="rounded-2xl" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-[200px] md:h-[215px]">
                <SmartImage src={carWashImage} alt="Car Wash Service" className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#DD1D21] to-[#b5181b] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Whether it's about our services, fuel prices, or anything else — reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FBCE07] text-[#1a1a1a] px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}