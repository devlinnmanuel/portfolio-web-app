import { useState } from 'react';
import MessageModal from '../chat/MessageModal';
import ChatWidget from '../chat/ChatWidget';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";


export default function Contact() {
  const [messageOpen, setMessageOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMode, setChatMode] = useState("AI");

  const contactOptions = [
    {
      title: 'Send me a message',
      subtitle: 'I reply within a day',
      onClick: () => {
        setChatMode('Admin');
        setChatOpen(true);
      },
    },
    {
      title: 'Chat with my assistant',
      subtitle: 'Instant AI Response',
      onClick: () => {
        setChatMode('AI');
        setChatOpen(true);
      },
    },
    {
      title: 'Send an email',
      subtitle: 'devlinmanuel05@gmail.com',
      // onClick: () => window.location.href = 'mailto:devlinmanuel05@gmail.com',
      onClick: () => {
        setMessageOpen(true),
        setChatOpen(false);
      },
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-6 bg-(--deepspace-blue)">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 60px 60px, 60px 60px"
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        <h2 id="projects" className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-2">Contact</h2>

        {/* Card utama */}
        <div className="mt-8 bg-(--dark-teal) border border-(--pacific-cyan) rounded-2xl p-8">
          <div className="text-left mb-6">
            <h3 className="text-(--mint-leaf) font-bold text-2xl">Let's talk</h3>
            <p className="text-white text-sm mt-1">Open to projects & works</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactOptions.map((opt) => (
              <button
                key={opt.title}
                onClick={opt.onClick}
                className={`bg-(--pacific-cyan) border border-none rounded-xl p-4 text-left hover:bg-(--mint-leaf) transition-all duration-200 group`}
              >
                <p className="text-white text-sm font-semibold mb-1 transition-colors">{opt.title}</p>
                <p className="text-(--pearl-aqua) text-xs group-hover:text-white">{opt.subtitle}</p>
                <div className="mt-4 text-white text-lg place-items-end">→</div>
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="mt-8 flex justify-center gap-3 text-(--pacific-cyan)">
            {/* Ganti href dengan link asli nanti */}
            <a href="https://www.linkedin.com/in/devlinmanuel" className="hover:text-[#4ecdc4] transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/62895605248875" className="hover:text-[#4ecdc4] transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/devlinnmanuel" className="hover:text-[#4ecdc4] transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/devlinmanuel_" className="hover:text-[#4ecdc4] transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      <MessageModal isOpen={messageOpen} onClose={() => setMessageOpen(false)} />
      <ChatWidget isOpen={chatOpen} onClose={() => setChatOpen(false)} onMode={chatMode} />
    </section>
  );
}