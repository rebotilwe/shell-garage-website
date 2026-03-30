import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function SocialFeed() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.2 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const features = [
    { text: 'V-Power price updates', icon: '⛽', color: '#DA291C' },
    { text: 'V+ Rewards wins', icon: '⭐', color: '#FFCD00' },
    { text: 'Spar Express specials', icon: '🛒', color: '#ED1B2F' },
    { text: 'Station promotions', icon: '🏪', color: '#DA291C' },
    { text: '24/7 service alerts', icon: '⏰', color: '#FFCD00' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <FaFacebookF />, 
      url: 'https://www.facebook.com/profile.php?id=61576227726268',
      color: '#1877F2',
      hoverColor: '#1877F2'
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/shell_ottawa',
      color: '#E4405F',
      hoverColor: '#E1306C'
    },
    { 
      name: 'TikTok', 
      icon: <FaTiktok />, 
      url: 'https://www.tiktok.com/@shellspar.express',
      color: '#000000',
      hoverColor: '#000000'
    },
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#FFCD00]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#DA291C]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#DA291C]/10 px-5 py-2 rounded-full mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 w-2 h-2 bg-[#FFCD00] rounded-full animate-ping opacity-75" />
              <div className="w-2 h-2 bg-[#FFCD00] rounded-full" />
            </div>
            <span className="text-[#FFCD00] text-xs font-bold uppercase tracking-[2px]">
              Live Updates
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Stay Connected With
            <span className="block text-[#FFCD00]">Shell South Africa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Follow us for real-time updates, promotions, and exclusive deals
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#FFCD00]/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <p className="text-white/70 text-xs font-medium">{feature.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Social Media Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group relative w-64 px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${social.color}20, ${social.color}05)`,
                border: `1px solid ${social.color}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = social.color;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${social.color}20, ${social.color}05)`;
                e.currentTarget.style.color = '#fff';
              }}
            >
              <span className="text-xl">{social.icon}</span>
              <span className="font-bold text-white">Follow on {social.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Facebook Feed Alternative - Latest Post Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                <FaFacebookF className="text-white text-sm" />
              </div>
              <span className="text-white font-semibold">Shell Spar Express Ottawa</span>
              <span className="ml-auto text-gray-500 text-xs">Follow for updates</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Get the latest fuel prices, specials, and promotions directly from our Facebook page.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61576227726268"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0d5ed7] transition-all duration-300"
            >
              Visit Our Facebook Page
              <span>→</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Follow us for the latest fuel prices, promotions, and community updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}