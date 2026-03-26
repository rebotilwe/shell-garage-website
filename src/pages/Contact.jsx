import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { garageInfo } from '../data/siteData';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
  // Static map image URL (works without iframe issues)
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(garageInfo.address)}&zoom=15&size=600x400&markers=color:red%7C${encodeURIComponent(garageInfo.address)}&key=YOUR_API_KEY`;
  
  // Alternative: Use a reliable iframe URL without timestamp issues
  const mapEmbedUrl = "https://maps.google.com/maps?q=59+Chris+Hani+Road+Ottawa+Verulam&output=embed";

  return (
    <PageWrapper>
      <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">
        <Navbar />

        <div className="pt-32 max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're here 24/7 to help you. Reach out anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#FBCE07]">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <p className="text-gray-300">{garageInfo.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏰</span>
                    <p className="text-gray-300">Open {garageInfo.hours} — Including Holidays</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <a
                      href={`tel:${garageInfo.phone}`}
                      className="text-gray-300 hover:text-[#FBCE07] transition-colors"
                    >
                      {garageInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <a
                      href={`mailto:${garageInfo.email}`}
                      className="text-gray-300 hover:text-[#FBCE07] transition-colors"
                    >
                      {garageInfo.email}
                    </a>
                  </div>
                </div>

                {/* Social Media - Added TikTok */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href={garageInfo.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-[#DD1D21] rounded-full flex items-center justify-center hover:bg-[#FBCE07] hover:scale-110 transition-all duration-300"
                    >
                      <FaFacebookF className="text-white text-xl" />
                    </a>
                    <a
                      href={garageInfo.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-[#DD1D21] rounded-full flex items-center justify-center hover:bg-[#FBCE07] hover:scale-110 transition-all duration-300"
                    >
                      <FaInstagram className="text-white text-xl" />
                    </a>
                    {/* TikTok Link */}
                    <a
                      href="https://www.tiktok.com/@shellspar.express"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-[#DD1D21] rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300"
                    >
                      <FaTiktok className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#FBCE07]">Send us a message</h2>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCE07] border border-gray-700"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCE07] border border-gray-700"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCE07] border border-gray-700"
                    rows="5"
                  />
                  <button className="bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] text-[#0A0A0A] font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
                    Send Message →
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section - Using Reliable Embed */}
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl h-full">
              <div className="h-[500px] w-full">
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
              <div className="p-4 text-center border-t border-gray-800">
                <p className="text-gray-400 text-sm">📍 {garageInfo.address}</p>
                <a
                  href="https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FBCE07] text-sm hover:underline mt-2 inline-block"
                >
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}