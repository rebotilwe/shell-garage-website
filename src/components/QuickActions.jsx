import { Link } from 'react-router-dom';

export default function QuickLinksSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#DD1D21] text-xs tracking-[4px] uppercase font-bold">
            Quick Access
          </span>

          <h2 className="text-4xl font-black text-[#0A0A0A] mt-4">
            Everything You Need
          </h2>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact */}
          <Link
            to="/contact"
            className="group bg-[#0A0A0A] text-white p-8 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">Find Us</h3>
            <p className="text-white/50 mb-4">
              Get directions to our location in Ottawa, Verulam.
            </p>
            <span className="text-[#FBCE07] group-hover:underline">
              View Map →
            </span>
          </Link>

          {/* Services */}
          <Link
            to="/services"
            className="group bg-[#DD1D21] text-white p-8 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">Our Services</h3>
            <p className="text-white/80 mb-4">
              Explore everything we offer 24/7.
            </p>
            <span className="text-white group-hover:underline">
              View Services →
            </span>
          </Link>

          {/* Promotions */}
          <a
            href="https://www.facebook.com/ShellSparExpressOttawa"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#FBCE07] text-black p-8 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">Latest Specials</h3>
            <p className="text-black/70 mb-4">
              Check our latest promotions and updates.
            </p>
            <span className="group-hover:underline">
              View Promotions →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}