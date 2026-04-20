const contactOptions = [
  {
    title: 'Send me a message',
    subtitle: 'I reply within a day',
    href: '#',
    bg: 'bg-[#0d2a2a]',
  },
  {
    title: 'Chat with my assistant',
    subtitle: 'Instant AI Response',
    href: '#',
    bg: 'bg-[#112828]',
  },
  {
    title: 'Send an email',
    subtitle: 'devlinmanuel05@gmail.com',
    href: 'mailto:devlinmanuel05@gmail.com',
    bg: 'bg-[#0a1f1f]',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-(--deepspace-blue)">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-2">Contact</h2>

        {/* Card utama */}
        <div className="mt-8 bg-(--dark-teal) border border-(--pacific-cyan) rounded-2xl p-8">
          <div className="text-left mb-6">
            <h3 className="text-(--mint-leaf) font-bold text-2xl">Let's talk</h3>
            <p className="text-white text-sm mt-1">Open to projects & works</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactOptions.map((opt) => (
              <a
                key={opt.title}
                href={opt.href}
                className={`bg-(--pacific-cyan) border border-none rounded-xl p-4 text-left hover:bg-(--mint-leaf) transition-all duration-200 group`}
              >
                <p className="text-white text-sm font-semibold mb-1 transition-colors">{opt.title}</p>
                <p className="text-(--pearl-aqua) text-xs group-hover:text-white">{opt.subtitle}</p>
                <div className="mt-4 text-white text-lg place-items-end">→</div>
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="mt-8 flex justify-center gap-5 text-gray-500">
            {/* Ganti href dengan link asli nanti */}
            <a href="#" className="hover:text-[#4ecdc4] transition-colors text-sm">in</a>
            <a href="#" className="hover:text-[#4ecdc4] transition-colors text-sm">gh</a>
            <a href="#" className="hover:text-[#4ecdc4] transition-colors text-sm">tw</a>
            <a href="#" className="hover:text-[#4ecdc4] transition-colors text-sm">ig</a>
          </div>
        </div>
      </div>
    </section>
  );
}