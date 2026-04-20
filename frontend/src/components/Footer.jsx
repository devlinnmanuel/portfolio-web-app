export default function Footer() {
  return (
    <footer className="bg-black border-t border-(--dark-teal) px-6 py-10 text-sm text-gray-500">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Branding */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-white font-bold text-base mb-1">Devlin Manuel</p>
          <p className="text-(--pearl-aqua) text-xs leading-relaxed mb-2">
            Building modern web applications, scalable systems, and secure digital solutions.
          </p>
          <p className="text-(--pearl-aqua) text-xs">IT & Big Data Analytics Student</p>
        </div>

        {/* Social Media */}
        <div>
          <p className="text-white font-semibold uppercase text-xs tracking-widest mb-3">Social Media</p>
          <ul className="space-y-2">
            <li key={'LinkedIn'}>
                <a href="https://www.linkedin.com/in/devlinmanuel/" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors" target="_blank" rel="noopener noreferrer">
                    {'LinkedIn'}
                </a>
            </li>
            <li key={'GitHub'}>
                <a href="https://github.com/devlinnmanuel" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors" target="_blank" rel="noopener noreferrer">
                    {'GitHub'}
                </a>
            </li>
            <li key={'Instagram'}>
                <a href="https://www.instagram.com/devlinmanuel_/" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors" target="_blank" rel="noopener noreferrer">
                    {'Instagram'}
                </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <p className="text-white font-semibold uppercase text-xs tracking-widest mb-3">Contacts</p>
          <ul className="space-y-2">
            <li key={'Email'}>
                <a href="mailto:devlinmanuel05@gmail.com?subject=Collaboration%20Opportunity" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors" target="_blank" rel="noopener noreferrer">
                    {'Email'}
                </a>
            </li>
            <li key={'WhatsApp'}>
                <a href="https://wa.me/62895605248875" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors" target="_blank" rel="noopener noreferrer">
                    {'WhatsApp'}
                </a>
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-white font-semibold uppercase text-xs tracking-widest mb-3">Tech Stack</p>
          <ul className="space-y-2 text-(--pacific-cyan)">
            {['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'GSAP', 'LENIS', 'Spline'].map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-[#1a3030] flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
        <p className="text-(--pacific-cyan)">© 2025 – 2026 All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors">Terms & Conditions</a>
          <a href="#" className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}