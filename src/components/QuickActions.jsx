import { Link } from 'react-router-dom';
import { FaGasPump, FaStar, FaChevronRight, FaFacebook } from "react-icons/fa";

const FuelIcon = () => <FaGasPump />;
const StarIcon = () => <FaStar />;
const ChevronIcon = () => <FaChevronRight />;
const FacebookIcon = () => <FaFacebook />;

export default function QuickActions() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Promo Card */}
        <a
          href="https://www.facebook.com/ShellSparExpressOttawa"
          target="_blank"
          rel="noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all duration-300 hover:shadow-xl border border-gray-800">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DA291C]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#DA291C]/20 flex items-center justify-center mb-5 group-hover:bg-[#DA291C]/30 transition-colors">
                <FuelIcon className="text-2xl text-[#DA291C]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white mb-2">
                Latest Specials
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md">
                Check our Facebook page for the latest promos, fuel updates and in-store deals.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-[#FFCD00] text-sm" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs font-medium">
                  Follow us for deals
                </span>
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-[#DA291C] font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                <FacebookIcon className="text-sm" />
                View Promotions
                <ChevronIcon className="text-xs" />
              </div>
            </div>
          </div>
        </a>

        {/* Bottom Strip: Services CTA */}
        <div className="mt-6 bg-gray-50 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#DA291C]/10 flex items-center justify-center">
              <FuelIcon className="text-[#DA291C] text-lg" />
            </div>
            <div>
              <p className="text-gray-900 font-bold text-sm">
                See Everything We Offer
              </p>
              <p className="text-gray-500 text-xs">
                Fuel · Spar Express · ATMs · The Courier Guy · Shell Select
              </p>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#DA291C]/30 text-[#DA291C] font-bold text-xs uppercase tracking-wide hover:bg-[#DA291C]/10 hover:border-[#DA291C] transition-all"
          >
            All Services
            <ChevronIcon className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}