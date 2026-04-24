import { useState } from 'react';

const navLinks = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Analytics', href: '#adminConsole' },
  { label: 'Projects', href: '#projectInventory' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ page }) {
  const [active, setActive] = useState(page || 'Dashboard');
  const [lang, setLang] = useState('EN');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
        <div className="
            flex items-center gap-1
            px-3 py-2 rounded-full

            bg-[--mint-leaf]/40
            backdrop-blur-xl
            border border-white/20

            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            ">
            {navLinks.map((link) => (
            <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === link.label
                    ? 'bg-(--mint-leaf) text-white'
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
            >
                {link.label}
            </a>
            ))}

            {/* Language Toggle */}
            <div className="ml-2 flex items-center bg-(--dark-teal) rounded-full overflow-hidden border border-(--pacific-cyan)">
            {['EN', 'ID'].map((l) => (
                <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold transition-all duration-300 ${
                    lang === l
                    ? 'bg-(--mint-leaf) text-white'
                    : 'text-(--pacific-cyan) hover:text-white'
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