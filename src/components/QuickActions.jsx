import { Link } from 'react-router-dom';
import { FaGasPump, FaChevronRight, FaFacebook } from "react-icons/fa";

const FuelIcon = () => <FaGasPump />;
const ChevronIcon = () => <FaChevronRight />;
const FacebookIcon = () => <FaFacebook />;

export default function QuickActions() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Promo Card */}
        <a
          href="https://www.facebook.com/profile.php?id=61576227726268"
          target="_blank"
          rel="noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 transition-all duration-300 hover:shadow-xl border border-gray-800">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DA291C]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center md:text-left">
              {/* Icon - Centered on mobile, left on desktop */}
              <div className="w-14 h-14 rounded-xl bg-[#DA291C]/20 flex items-center justify-center mb-5 mx-auto md:mx-0 group-hover:bg-[#DA291C]/30 transition-colors">
                <FacebookIcon className="text-2xl text-[#DA291C]" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 text-center md:text-left">
                Follow Us on Facebook
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md mx-auto md:mx-0">
                Get the latest fuel prices, promotions, and store specials at Shell Ottawa, Verulam.
              </p>

              {/* CTA - Centered on mobile, left on desktop */}
              <div className="inline-flex items-center gap-2 text-[#FFCD00] font-semibold text-sm group-hover:gap-3 transition-all mx-auto md:mx-0">
                <FacebookIcon className="text-sm" />
                View Promotions
                <ChevronIcon className="text-xs" />
              </div>
            </div>
          </div>
        </a>

        {/* Quick Links Strip - Fixed alignment */}
        <div className="mt-6 bg-gray-50 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DA291C]/10 flex items-center justify-center flex-shrink-0">
              <FuelIcon className="text-[#DA291C] text-sm" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm text-center sm:text-left">
                Quick Links
              </p>
              <p className="text-gray-500 text-xs hidden sm:block">
                Fuel · Spar Express · ATMs · Courier
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 text-[#DA291C] text-xs font-semibold hover:bg-[#DA291C]/10 hover:border-[#DA291C] transition-all whitespace-nowrap"
            >
              View Fuel Prices
              <ChevronIcon className="text-xs" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 text-[#DA291C] text-xs font-semibold hover:bg-[#DA291C]/10 hover:border-[#DA291C] transition-all whitespace-nowrap"
            >
              Spar Express Specials
              <ChevronIcon className="text-xs" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 text-[#DA291C] text-xs font-semibold hover:bg-[#DA291C]/10 hover:border-[#DA291C] transition-all whitespace-nowrap"
            >
              Contact Us
              <ChevronIcon className="text-xs" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}