import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/shell-logo1.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07]" />

      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md border-b-2 border-[#FBCE07]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img
              src={logo}
              alt="Shell Ottawa Logo"
              className={`transition-all duration-300 object-contain ${
                scrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            />
            <div className="leading-tight">
              <div className="text-[#DD1D21] font-black text-sm md:text-lg uppercase tracking-wide group-hover:text-[#b5181b] transition-colors">
                Shell
              </div>
              <div className="text-[#FBCE07] font-bold text-xs md:text-sm uppercase tracking-wider -mt-1">
                Ottawa
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 text-xs md:text-sm font-bold uppercase rounded border-b-2 transition-all duration-300 ${
                    active 
                      ? 'text-[#DD1D21] border-[#DD1D21]' 
                      : 'text-[#1a1a1a] border-transparent hover:text-[#DD1D21] hover:border-[#DD1D21] hover:bg-red-50'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 text-xs md:text-sm font-bold uppercase rounded bg-gradient-to-r from-[#DD1D21] to-[#b5181b] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2 bg-[#DD1D21]' : ''
              }`}
            />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2 bg-[#DD1D21]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-t border-gray-100`}
        >
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`py-3 font-bold uppercase border-b transition-all duration-300 ${
                    active 
                      ? 'text-[#DD1D21] border-[#DD1D21]' 
                      : 'text-[#1a1a1a] border-gray-100 hover:text-[#DD1D21] hover:border-[#DD1D21]'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-2 py-3 font-bold uppercase bg-gradient-to-r from-[#DD1D21] to-[#b5181b] text-white text-center rounded hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}