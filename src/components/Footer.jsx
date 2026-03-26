import { Link } from 'react-router-dom';
import logo from '../assets/images/shell-logo1.png';

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// TikTok Icon Component
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.64a6.34 6.34 0 0 0 10.86 4.27 6.34 6.34 0 0 0 1.82-4.27V9.56a8.53 8.53 0 0 0 5 1.65V7.65a4.83 4.83 0 0 1-3.09-.96z"/>
  </svg>
);

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const SERVICES = [
  'Fuel & Petrol',
  'Car Wash',
  'ATM',
  'The Courier Guy',
  'Shell Select',
  'V+ Rewards',
];

const SOCIAL = [
  { icon: <FacebookIcon />, href: 'https://www.facebook.com/ShellSparExpressOttawa', label: 'Facebook', color: '#1877F2' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/shell_ottawa', label: 'Instagram', color: '#E1306C' },
  { icon: <TikTokIcon />, href: 'https://www.tiktok.com/@shellspar.express', label: 'TikTok', color: '#000000' },
];

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white/55 hover:text-[#FBCE07] text-sm flex items-center gap-1.5 transition-colors duration-200"
  >
    <span className="text-[#DD1D21] text-[10px]">▶</span>
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="font-['Trebuchet_MS',sans-serif]">
      {/* Top Red/Yellow Stripe */}
      <div className="h-1 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07]" />

      {/* Main Footer */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          {/* Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Brand */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                <img
                  src={logo}
                  alt="Shell Ottawa Logo"
                  className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
                />
                <div>
                  <div className="text-[#DD1D21] font-black text-lg uppercase tracking-wide">Shell</div>
                  <div className="text-[#FBCE07] font-bold text-xs uppercase tracking-wider -mt-1">Ottawa</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
                Your 24/7 convenience stop in Ottawa, Verulam. Premium fuels, quality services and everything you need — all under one roof.
              </p>
              {/* Social Icons */}
              <div className="flex justify-center sm:justify-start gap-3">
                {SOCIAL.map(({ icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
                    style={{ 
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = color;
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links (Centered) */}
            <div className="text-center">
              <h3 className="text-[#FBCE07] text-xs font-bold tracking-[2.5px] uppercase mb-5">
                Quick Links
              </h3>
              <div className="flex flex-col items-center gap-3">
                {QUICK_LINKS.map(({ label, to }) => (
                  <FooterLink key={to} to={to}>{label}</FooterLink>
                ))}
              </div>
            </div>

            {/* Column 3 - Services (Centered) */}
            <div className="text-center">
              <h3 className="text-[#FBCE07] text-xs font-bold tracking-[2.5px] uppercase mb-5">
                Our Services
              </h3>
              <div className="flex flex-col items-center gap-3">
                {SERVICES.map(s => (
                  <Link
                    key={s}
                    to="/services"
                    className="text-white/55 hover:text-[#FBCE07] text-sm flex items-center justify-center gap-1.5 transition-colors duration-200"
                  >
                    <span className="text-[#DD1D21] text-[10px]">▶</span>
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4 - Contact */}
            <div className="text-center sm:text-left">
              <h3 className="text-[#FBCE07] text-xs font-bold tracking-[2.5px] uppercase mb-5">
                Contact Us
              </h3>
              <div className="space-y-4">
                {[
                  { icon: '📍', text: '59 Chris Hani Road, Ottawa, Verulam', href: 'https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam' },
                  { icon: '⏰', text: 'Open 24 / 7 — Including Holidays', href: null },
                  { icon: '📞', text: '075 321 4777', href: 'tel:+2753214777' },
                  { icon: '✉️', text: 'shellgarageottawa@gmail.com', href: 'mailto:shellgarageottawa@gmail.com' },
                ].map(({ icon, text, href }) => {
                  const content = (
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <span className="text-base flex-shrink-0">{icon}</span>
                      <span className={`text-sm leading-relaxed ${href ? 'text-white/60' : 'text-white/40'}`}>
                        {text}
                      </span>
                    </div>
                  );
                  return href ? (
                    <a
                      key={text}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={text}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Shell Ottawa. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use'].map(label => (
                <a
                  key={label}
                  href="#"
                  className="text-white/30 text-xs hover:text-white/70 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}