import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const INFO_ITEMS = [
  {
    icon: '📍',
    label: 'Station Address',
    value: '59 Chris Hani Road, Ottawa, Verulam',
    link: 'https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam',
    cta: 'Get Directions',
  },
  {
    icon: '⏰',
    label: 'Operating Hours',
    value: 'Open 24/7',
    sub: 'Every day including holidays',
    link: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '075 321 4777',
    link: 'tel:+2753214777',
    cta: 'Call Station',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'shellgarageottawa@gmail.com',
    link: 'mailto:shellgarageottawa@gmail.com',
    cta: 'Send Message',
  },
];

const SOCIAL = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/profile.php?id=61576227726268', label: 'Facebook', bgHover: '#1877F2' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/shell_ottawa', label: 'Instagram', bgHover: '#E1306C' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@shellspar.express', label: 'TikTok', bgHover: '#000000' },
];

export default function ContactInfo() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#DA291C]/10 px-4 py-2 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse" />
            <span className="text-[#DA291C] text-xs font-bold uppercase tracking-[2px]">
              Shell Ottawa · Verulam
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 px-4"
          >
            Find Your{' '}
            <span className="text-[#DA291C] relative inline-block whitespace-nowrap">
              Shell Ottawa, Verulam
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DA291C] to-[#FFCD00] rounded-full hidden sm:block" />
            </span>
          </motion.h2>
          <div className="block sm:hidden w-24 h-1 mx-auto bg-gradient-to-r from-[#DA291C] to-[#FFCD00] rounded-full mt-2 mb-4" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto px-4"
          >
            Visit us at our Verulam station — open 24/7 for all your fuel and convenience needs
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {INFO_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 p-4 sm:p-5 md:p-6 rounded-xl bg-white border border-gray-100 hover:border-[#DA291C]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#DA291C]/10 flex items-center justify-center text-lg sm:text-xl group-hover:bg-[#DA291C]/20 transition-all duration-300">
                  {item.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-[#DA291C] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 mb-1 break-words">
                    {item.value}
                  </p>
                  {item.sub && (
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.sub}</p>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1 text-[#DA291C] text-xs sm:text-sm font-semibold hover:gap-2 transition-all"
                    >
                      {item.cta}
                      <span>→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-5 sm:p-6 rounded-xl bg-gray-50 border border-gray-100 text-center"
            >
              <p className="text-[#DA291C] text-xs font-bold uppercase tracking-wider mb-4">
                Stay Connected
              </p>
              <div className="flex justify-center gap-4 sm:gap-5">
                {SOCIAL.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                    style={{ color: social.bgHover }}
                  >
                    <span className="sr-only">{social.label}</span>
                    <span className="text-base sm:text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200"
          >
            <div className="relative w-full pt-[75%] sm:pt-[56.25%] md:pt-[100%] lg:pt-[75%]">
              <iframe
                title="Shell Ottawa Station Location"
                src="https://maps.google.com/maps?q=59+Chris+Hani+Road+Ottawa+Verulam&output=embed"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-[#DA291C] to-[#b71c1c] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow-lg">
              📍 Shell Ottawa · Verulam
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="mt-10 md:mt-12 lg:mt-16 rounded-xl overflow-hidden bg-gradient-to-r from-[#DA291C] to-[#b71c1c]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 md:p-10">
            <div className="text-center sm:text-left">
              <p className="text-[#FFCD00] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                Shell South Africa
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                Open 24 Hours Every Day
              </p>
            </div>
            <motion.a
              href="https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#FFCD00] text-[#1a1a1a] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide hover:shadow-lg transition-all whitespace-nowrap"
            >
              Get Directions →
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}