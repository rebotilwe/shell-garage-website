import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';
import { garageInfo } from '../data/siteData';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=59+Chris+Hani+Road+Ottawa+Verulam&output=embed";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#DA291C] to-[#b71c1c] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCD00] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCD00] rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
            <span className="text-[#FFCD00] text-xs font-bold tracking-[4px] uppercase mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-[#FFCD00] mx-auto rounded-full mb-6" />
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              We're here 24/7 to help you. Reach out anytime!
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8">

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 text-gray-900">Get in Touch</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    text: garageInfo.address,
                    href: 'https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam'
                  },
                  { icon: '⏰', text: `Open ${garageInfo.hours} — Including Holidays`, href: null },
                  { icon: '📞', text: garageInfo.phone, href: `tel:${garageInfo.phone}` },
                  { icon: '✉️', text: garageInfo.email, href: `mailto:${garageInfo.email}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="text-xl sm:text-2xl w-7 sm:w-8 flex-shrink-0">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#DA291C] transition-colors break-words text-sm sm:text-base"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base break-words">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-100">
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href={garageInfo.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DA291C]/10 rounded-full flex items-center justify-center hover:bg-[#DA291C] hover:scale-105 transition duration-300"
                  >
                    <FaFacebookF className="text-[#DA291C] hover:text-white text-lg sm:text-xl" />
                  </a>
                  <a
                    href={garageInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DA291C]/10 rounded-full flex items-center justify-center hover:bg-[#DA291C] hover:scale-105 transition duration-300"
                  >
                    <FaInstagram className="text-[#DA291C] hover:text-white text-lg sm:text-xl" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@shellspar.express"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DA291C]/10 rounded-full flex items-center justify-center hover:bg-black hover:scale-105 transition duration-300"
                  >
                    <FaTiktok className="text-[#DA291C] hover:text-white text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 text-gray-900">Send us a message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DA291C] border border-gray-200 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="p-3 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DA291C] border border-gray-200 text-sm sm:text-base"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="p-3 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DA291C] border border-gray-200 resize-none text-sm sm:text-base"
                />
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`bg-gradient-to-r from-[#DA291C] to-[#b71c1c] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 ${
                    formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-sm text-center mt-2">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 h-fit sticky top-32">
            <div className="relative w-full pt-[75%] sm:pt-[56.25%]">
              <iframe
                title="Shell Spar Express Ottawa Location"
                src={mapEmbedUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 sm:p-5 text-center border-t border-gray-100">
              <p className="text-gray-500 text-xs sm:text-sm break-words">📍 {garageInfo.address}</p>
              <a
                href="https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam"
                target="_blank"
                rel="noreferrer"
                className="text-[#DA291C] text-xs sm:text-sm font-semibold hover:underline mt-2 sm:mt-3 inline-block"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>

        </section>
      </div>
    </PageWrapper>
  );
}