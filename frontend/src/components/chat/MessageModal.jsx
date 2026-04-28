import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";


export default function MessageModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // TODO: POST /api/messages
    await new Promise((r) => setTimeout(r, 800)); // simulasi delay
    setSending(false);
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); setForm({ name: '', email: '', message: '' }); }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-(--deepspace-blue)/80 backdrop-blur-sm px-4">
      <div className="bg-(--pacific-cyan) backdrop-blur-md border border-[#2a6060] rounded-2xl p-6 w-full max-w-sm shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="text-white font-bold text-2xl">Message</h3>
            <p className="text-(--pearl-aqua) text-sm mt-0.5">send a direct message</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-(--dark-teal)/50 border border-[#2a5555] text-gray-400 hover:text-white flex items-center justify-center text-sm transition-colors"
          ><IoClose /></button>
        </div>

        <div className="mt-4 space-y-3">
          {/* Name & Email row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-white font-medium mb-1 block">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-(--dark-teal)/50 border border-(--pearl-aqua)/50 rounded-lg px-3 py-2 text-sm text-white placeholder-(--pacific-cyan) outline-none focus:border-[#4ecdc4] transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-white font-medium mb-1 block">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className="w-full bg-(--dark-teal)/50 border border-(--pearl-aqua)/50 rounded-lg px-3 py-2 text-sm text-white placeholder-(--pacific-cyan) outline-none focus:border-[#4ecdc4] transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-white font-medium mb-1 block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hello! I'd like to discuss..."
              rows={4}
              className="w-full bg-(--dark-teal)/50 border border-(--pearl-aqua)/50 rounded-lg px-3 py-2 text-sm text-white placeholder-(--pacific-cyan) outline-none focus:border-[#4ecdc4] transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={sending || sent}
            className="w-full py-2.5 rounded-full bg-(--mint-leaf) text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-(--mint-leaf)/70 disabled:opacity-70 transition-all duration-200"
          >{sent ? '✓ Sent!' : sending ? 'Sending...' : <><span><IoIosSend /></span> Send Message</>}</button>
        
          <div className="mt-4 flex justify-center gap-2 text-(--dark-teal)/50">
            {/* Ganti href dengan link asli nanti */}
            <a href="https://www.linkedin.com/in/devlinmanuel" className="hover:text-(--dark-teal)/80 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/62895605248875" className="hover:text-(--dark-teal)/80 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/devlinnmanuel" className="hover:text-(--dark-teal)/80 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/devlinmanuel_" className="hover:text-(--dark-teal)/80 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}