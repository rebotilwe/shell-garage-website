import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { garageInfo } from '../data/siteData';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  // Reliable map embed URL
  const mapEmbedUrl = "https://maps.google.com/maps?q=59+Chris+Hani+Road+Ottawa+Verulam&output=embed";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans">
       

        {/* Hero Section with Red Background */}
        <div className="relative bg-gradient-to-br from-[#DD1D21] to-[#b5181b] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBCE07] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBCE07] rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center">
              <span className="text-[#FBCE07] text-xs font-bold tracking-[4px] uppercase mb-4 block">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-[#FBCE07] mx-auto rounded-full mb-6" />
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                We're here 24/7 to help you. Reach out anytime!
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Info & Form */}
            <div>
              {/* Contact Info Cards */}
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: '📍', text: garageInfo.address, href: 'https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam' },
                    { icon: '⏰', text: `Open ${garageInfo.hours} — Including Holidays`, href: null },
                    { icon: '📞', text: garageInfo.phone, href: `tel:${garageInfo.phone}` },
                    { icon: '✉️', text: garageInfo.email, href: `mailto:${garageInfo.email}` },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <span className="text-2xl w-8">{item.icon}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-[#DD1D21] transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.text}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-4 text-[#1a1a1a]">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href={garageInfo.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-[#DD1D21]/10 rounded-full flex items-center justify-center hover:bg-[#DD1D21] hover:scale-110 transition-all duration-300 group"
                    >
                      <FaFacebookF className="text-[#DD1D21] group-hover:text-white text-xl" />
                    </a>
                    <a
                      href={garageInfo.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-[#DD1D21]/10 rounded-full flex items-center justify-center hover:bg-[#DD1D21] hover:scale-110 transition-all duration-300 group"
                    >
                      <FaInstagram className="text-[#DD1D21] group-hover:text-white text-xl" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@shellspar.express"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-[#DD1D21]/10 rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300 group"
                    >
                      <FaTiktok className="text-[#DD1D21] group-hover:text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Send us a message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-3 rounded-lg bg-gray-50 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#DD1D21] border border-gray-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="p-3 rounded-lg bg-gray-50 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#DD1D21] border border-gray-200"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="p-3 rounded-lg bg-gray-50 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#DD1D21] border border-gray-200 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`bg-gradient-to-r from-[#DD1D21] to-[#b5181b] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 ${
                      formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                  {formStatus === 'success' && (
                    <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 h-fit sticky top-32">
              <div className="h-[450px] w-full">
                <iframe
                  title="Shell Spar Express Ottawa Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 text-center border-t border-gray-100">
                <p className="text-gray-500 text-sm">📍 {garageInfo.address}</p>
                <a
                  href="https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#DD1D21] text-sm font-semibold hover:underline mt-3 inline-block"
                >
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </PageWrapper>
  );
}