import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const INFO_ITEMS = [
  {
    icon:  '📍',
    label: 'Address',
    value: '59 Chris Hani Road, Ottawa, Verulam',
    link:  'https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam',
    cta:   'Get Directions',
  },
  {
    icon:  '⏰',
    label: 'Hours',
    value: 'Open 24 / 7',
    sub:   'Including public holidays',
    link:  null,
  },
  {
    icon:  '📞',
    label: 'Phone',
    value: '075 321 4777',
    link:  'tel:+2753214777',
    cta:   'Call Now',
  },
  {
    icon:  '✉️',
    label: 'Email',
    value: 'shellgarageottawa@gmail.com',
    link:  'mailto:shellgarageottawa@gmail.com',
    cta:   'Send Email',
  },
];

function InfoCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       'flex',
        alignItems:    'flex-start',
        gap:           16,
        background:    '#ffffff',
        borderRadius:  8,
        padding:       '20px 22px',
        boxShadow:     hovered
          ? '0 10px 32px rgba(0,0,0,0.12), 0 0 0 2px #DD1D21'
          : '0 2px 12px rgba(0,0,0,0.07)',
        transform:     visible
          ? hovered ? 'translateY(-3px)' : 'translateY(0)'
          : 'translateY(20px)',
        opacity:       visible ? 1 : 0,
        transition:    `opacity 0.5s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s, box-shadow 0.3s`,
        fontFamily:    "'Trebuchet MS', sans-serif",
      }}
    >
      <div style={{
        width:          44, height: 44, borderRadius: '50%',
        background:     hovered ? '#DD1D21' : '#FFF0F0',
        display:        'flex', alignItems: 'center', justifyContent: 'center',
        fontSize:       20, flexShrink: 0,
        transition:     'background 0.3s',
      }}>
        {item.icon}
      </div>

      <div style={{ flex: 1 }}>
        <p style={{
          fontSize: 10, fontWeight: 800, letterSpacing: 2,
          textTransform: 'uppercase', color: '#DD1D21',
          marginBottom: 3,
        }}>
          {item.label}
        </p>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: item.sub ? 2 : 0 }}>
          {item.value}
        </p>
        {item.sub && (
          <p style={{ fontSize: 12, color: '#999' }}>{item.sub}</p>
        )}
        {item.link && item.cta && (
          <a
            href={item.link}
            target={item.link.startsWith('http') ? '_blank' : '_self'}
            rel="noreferrer"
            style={{
              display:        'inline-block',
              marginTop:      8,
              fontSize:       11, fontWeight: 800, letterSpacing: 1,
              textTransform:  'uppercase',
              color:          '#DD1D21', textDecoration: 'none',
            }}
          >
            {item.cta} →
          </a>
        )}
      </div>
    </div>
  );
}

export default function ContactInfo() {
  const sectionRef            = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Social media links
  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/ShellSparExpressOttawa', label: 'Facebook', bgHover: '#1877F2' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/shell_ottawa', label: 'Instagram', bgHover: '#E1306C' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@shellspar.express', label: 'TikTok', bgHover: '#000000' },
  ];

  // Reliable map embed URL
  const mapEmbedUrl = "https://maps.google.com/maps?q=59+Chris+Hani+Road+Ottawa+Verulam&output=embed";

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#ffffff',
        padding:    'clamp(60px, 8vw, 100px) 0',
        borderTop:  '1px solid #f0f0f0',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* HEADER */}
        <div style={{
          marginBottom: 52,
          opacity:      visible ? 1 : 0,
          transform:    visible ? 'translateY(0)' : 'translateY(20px)',
          transition:   'opacity 0.6s, transform 0.6s',
        }}>
          <p style={{
            fontSize: 11, fontWeight: 800, letterSpacing: 3,
            textTransform: 'uppercase', color: '#DD1D21',
            marginBottom: 10,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}>
            Shell Ottawa · Verulam
          </p>
          <h2 style={{
            fontSize:    'clamp(28px, 4vw, 44px)',
            fontWeight:  900, letterSpacing: -1, lineHeight: 1.1,
            color:       '#1a1a1a', margin: '0 0 20px',
            fontFamily:  "'Trebuchet MS', 'Franklin Gothic Medium', sans-serif",
          }}>
            Find Us &{' '}
            <span style={{
              color: '#DD1D21',
              borderBottom: '4px solid #FBCE07',
              paddingBottom: 2,
            }}>
              Get in Touch
            </span>
          </h2>
          <div style={{
            height: 3, width: 80, borderRadius: 2,
            background: 'linear-gradient(90deg,#DD1D21,#FBCE07)',
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'opacity 0.5s 0.3s, transform 0.5s 0.3s',
          }} />
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
        }}>
          {/* Use media query for larger screens */}
          <style>
            {`@media (min-width: 768px) {
              .contact-grid {
                grid-template-columns: 1fr 1fr;
              }
            }`}
          </style>

          <div className="contact-grid" style={{ display: 'grid', gap: 40 }}>

            {/* LEFT — Info cards + Social Media */}
            <div>
              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                {INFO_ITEMS.map((item, i) => (
                  <InfoCard key={i} item={item} index={i} visible={visible} />
                ))}
              </div>

              {/* Social Media Section */}
              <div style={{
                background: '#ffffff',
                borderRadius: 8,
                padding: '20px 22px',
                boxShadow: visible ? '0 2px 12px rgba(0,0,0,0.07)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease 0.4s, transform 0.4s ease 0.4s`,
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: 2,
                  textTransform: 'uppercase', color: '#DD1D21',
                  marginBottom: 16,
                }}>
                  Follow Us
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 16,
                }}>
                  {socialLinks.map((social, idx) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#DD1D21',
                        fontSize: 20,
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.bgHover;
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f5f5f5';
                        e.currentTarget.style.color = '#DD1D21';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Google Map (Fixed) */}
            <div style={{
              borderRadius:  10,
              overflow:      'hidden',
              boxShadow:     '0 8px 40px rgba(0,0,0,0.12)',
              opacity:       visible ? 1 : 0,
              transform:     visible ? 'translateY(0)' : 'translateY(28px)',
              transition:    'opacity 0.6s 0.3s, transform 0.6s 0.3s',
              height:        '100%',
              minHeight:     400,
              position:      'relative',
            }}>
              <iframe
                title="Shell Ottawa Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: 400 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Badge Overlay */}
              <div style={{
                position:      'absolute',
                top:           16, left: 16,
                background:    '#DD1D21',
                color:         '#ffffff',
                padding:       '8px 14px',
                borderRadius:  6,
                fontSize:      12, fontWeight: 800,
                letterSpacing: .5,
                boxShadow:     '0 4px 16px rgba(221,29,33,0.4)',
                fontFamily:    "'Trebuchet MS', sans-serif",
                display:       'flex', alignItems: 'center', gap: 6,
                pointerEvents: 'none',
              }}>
                📍 Shell Ottawa · Verulam
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM RED STRIP */}
        <div style={{
          marginTop:      48,
          borderRadius:   8,
          background:     'linear-gradient(90deg, #DD1D21 0%, #b5181b 100%)',
          padding:        '24px 32px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          flexWrap:       'wrap',
          gap:            16,
          opacity:        visible ? 1 : 0,
          transform:      visible ? 'translateY(0)' : 'translateY(16px)',
          transition:     'opacity 0.6s 0.5s, transform 0.6s 0.5s',
          boxShadow:      '0 8px 32px rgba(221,29,33,0.25)',
        }}>
          <div style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>
              Shell Ottawa
            </p>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', margin: 0 }}>
              We're open 24/7 — come visit us anytime
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=59+Chris+Hani+Road+Ottawa+Verulam"
            target="_blank"
            rel="noreferrer"
            style={{
              background:     '#FBCE07', color: '#1a1a1a',
              padding:        '12px 24px', borderRadius: 4,
              fontSize:       12, fontWeight: 800,
              letterSpacing:  '.7px', textTransform: 'uppercase',
              textDecoration: 'none', whiteSpace: 'nowrap',
              fontFamily:     "'Trebuchet MS', sans-serif",
            }}
          >
            Get Directions →
          </a>
        </div>

      </div>
    </section>
  );
}