import { useEffect, useRef, useState } from 'react';

export default function SocialFeed() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    // Load Facebook SDK
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }

    return () => obs.disconnect();
  }, []);

  const features = [
    { text: 'Fuel price updates', icon: '⛽', color: '#DD1D21' },
    { text: 'Car wash specials', icon: '🚗', color: '#FBCE07' },
    { text: 'Store promotions', icon: '🏪', color: '#DD1D21' },
    { text: 'Community updates', icon: '🤝', color: '#FBCE07' },
    { text: '24/7 service alerts', icon: '⏰', color: '#DD1D21' },
  ];

  return (
    <section 
      ref={ref} 
      className="relative bg-gradient-to-b from-[#0A0A0A] to-[#111] py-28 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#DD1D21] rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBCE07] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1.5px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-[#DD1D21]/10 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBCE07] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FBCE07]" />
            </span>
            <span className="text-[#FBCE07] text-xs tracking-[3px] uppercase font-bold">
              Live Updates
            </span>
          </div>

          <h2 className="text-[clamp(36px,7vw,64px)] font-black text-white leading-tight">
            Stay Connected{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD1D21] to-[#FBCE07]">
                With Us
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="4" strokeDasharray="6 6" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DD1D21" />
                    <stop offset="100%" stopColor="#FBCE07" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-white/40 mt-6 max-w-xl mx-auto text-lg">
            Real-time updates, promotions, and announcements — straight from our Facebook page.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          {/* LEFT SIDE - INFO & FEATURES */}
          <div className="space-y-8">
            {/* Main Message */}
            <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Never Miss a Special
              </h3>
              <p className="text-white/50 leading-relaxed text-lg">
                We post fuel updates, promotions, and important announcements regularly.
                Follow us to stay ahead and get the best deals.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 hover:translate-x-1"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-white/70 text-sm font-medium group-hover:text-white transition">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.facebook.com/ShellSparExpressOttawa"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1877F2] to-[#0d5ed7] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                Follow on Facebook
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a
                href="https://www.instagram.com/shell_ottawa"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#E4405F] to-[#bc2a8d] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17" y1="7" x2="17.01" y2="7" />
                </svg>
                Follow on Instagram
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl font-black text-[#FBCE07]">24/7</div>
                <div className="text-white/40 text-xs uppercase tracking-wide">Active Service</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#FBCE07]">Real-time</div>
                <div className="text-white/40 text-xs uppercase tracking-wide">Updates</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#FBCE07]">Instant</div>
                <div className="text-white/40 text-xs uppercase tracking-wide">Notifications</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FACEBOOK FEED */}
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] rounded-2xl opacity-30 blur-lg" />
            
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(221,29,33,0.3)]">
              <div className="bg-gradient-to-r from-[#DD1D21] to-[#FBCE07] px-4 py-3 flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                <span className="text-white font-semibold text-sm">Shell Spar Express Ottawa</span>
                <span className="ml-auto text-white/70 text-xs">Live Feed</span>
              </div>
              
              <div className="p-3 bg-white">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/ShellSparExpressOttawa"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="550"
                  data-adapt-container-width="true"
                  data-small-header="false"
                  data-hide-cover="false"
                  data-show-facepile="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}