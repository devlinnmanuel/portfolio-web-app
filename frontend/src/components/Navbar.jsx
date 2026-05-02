import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ page }) {
  const [lang, setLang] = useState('EN');
  const location = useLocation();

  const isActive = (link) => {
    if (link.href === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-[--mint-leaf]/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {navLinks.map((link) => {
          const isScrollLink = link.label === 'Projects' && page === 'Home' ||
            (link.label === 'Contact' && page === 'Home');

          if (isScrollLink) {
            return (
                <button
                key={link.label}
                onClick={() => {
                    const sectionId = link.label.toLowerCase();
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link)
                    ? 'bg-(--mint-leaf) text-white'
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
                >
                {link.label}
                </button>
            );
          }

          return (
            <Link
              key={link.label}
              to={link.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(link)
                  ? 'bg-(--mint-leaf) text-white'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Language Toggle */}
        <div className="ml-2 flex items-center bg-(--dark-teal) rounded-full overflow-hidden border border-(--pacific-cyan)">
          {['EN', 'ID'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs font-semibold transition-all duration-300 ${
                lang === l ? 'bg-(--mint-leaf) text-white' : 'text-(--pacific-cyan) hover:text-white'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}