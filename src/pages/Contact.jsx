import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { garageInfo } from '../data/siteData';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper'

export default function Contact() {
  return (
    <PageWrapper>
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">
 

      <div className="pt-32 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-gray-300 mb-2">📍 {garageInfo.address}</p>
          <p className="text-gray-300 mb-2">⏰ {garageInfo.hours}</p>
          <p className="text-gray-300 mb-2">📞 {garageInfo.phone}</p>
          <p className="text-gray-300 mb-4">✉ {garageInfo.email}</p>

          {/* Social Media */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href={garageInfo.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#DD1D21] rounded-full hover:bg-[#FBCE07] transition-colors"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href={garageInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#DD1D21] rounded-full hover:bg-[#FBCE07] transition-colors"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>

          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCE07]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCE07]"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCE07]"
              rows="5"
            />
            <button className="bg-[#FBCE07] text-[#0A0A0A] font-semibold px-6 py-3 rounded hover:bg-[#DD1D21] transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Shell Spar Express Ottawa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.948603398231!2d31.344644275423563!3d-29.59410548205192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa13c5aa2f9b%3A0x6e7b5fa830431e1e!2sShell%20Spar%20Express%20Ottawa!5e0!3m2!1sen!2sza!4v1703456789012!5m2!1sen!2sza"
            width="100%"
            height="100%"
            className="min-h-[400px] w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

   
    </div>
    </PageWrapper>
  );
}