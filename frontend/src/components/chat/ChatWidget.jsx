import { useState, useRef, useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

const quickActions = [
  { label: 'Work', sublabel: 'Projects' },
  { label: 'Career', sublabel: 'Professional Background' },
  { label: 'Contact', sublabel: "Let's connect" },
];

const WELCOME = {
  id: 'ai',
  role: 'assistant',
  text: "Hi! I'm Devlin\nask me anything you'd like to know.",
  greet: "Hi! I'm Devlin",
  desc: "ask me anything you'd like to know."
};

const WELCOME_ADMIN = [
  { id: 1, role: 'admin', text: 'Halo, ini Devlin 👋' },
  // { id: 2, role: 'user', text: 'Saya butuh bantuan' },
  // { id: 2, role: 'admin', text: 'Baik, saya bantu ya.' },
];

export default function ChatWidget({ isOpen, onClose, onMode }) {
  const [messages, setMessages] = useState([WELCOME]);
  const [adminMessages, setAdminMessages] = useState(WELCOME_ADMIN);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  const displayedMessages = onMode === 'Admin' ? adminMessages : messages;

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    setInput('');
    const userMsg = { id: Date.now(), role: 'user', text: userText };
    // setMessages((prev) => [...prev, userMsg]);
    if (onMode === 'Admin') {
      setAdminMessages((prev) => [...prev, userMsg]);
    } else {
      setMessages((prev) => [...prev, userMsg]);
    }
    setIsTyping(true);
    setLoading(true);

    // TODO: ganti dengan fetch ke POST /api/chat dengan body { message: userText }
    // Simulasi response AI
    await new Promise((r) => setTimeout(r, 1000));
    const replyMsg = {
      id: Date.now() + 1,
      role: onMode === 'Admin' ? 'admin' : 'assistant',
      text:
        onMode === 'Admin'
          ? 'Admin akan segera merespon pesan Anda...'
          : 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };

    if (onMode === 'Admin') {
      setAdminMessages((prev) => [...prev, replyMsg]);
    } else {
      setMessages((prev) => [...prev, replyMsg]);
    }
    setIsTyping(false);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 h-150 w-80 shadow-2xl flex flex-col rounded-2xl overflow-hidden border border-(--dark-teal) bg-(--pacific-cyan)">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-(--pearl-aqua) border-b border-(--dark-teal)">
        <div className="flex items-center gap-2">
          {/* Avatar placeholder */}
          <div className="w-8 h-8 rounded-full bg-black border border-(--dark-teal) flex items-center justify-center text-sm text-(--pearl-aqua)">
            {/* <img src="..." className="w-full h-full object-cover rounded-full" /> */}
            DM
          </div>
          <span className="text-black font-semibold text-sm">Devlin Manuel</span>
        </div>
        <button
          onClick={onClose}
          className="w-6 h-6 rounded-full bg-[#1e4040] text-gray-400 hover:text-white flex items-center justify-center text-xs transition-colors"
        >✕</button>
      </div>

      {/* Message thread */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 max-h-80 min-h-48 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2a5555]">
        {onMode === 'Admin' && (
          <div className="flex items-center place-content-center gap-2 text-xs text-(--pearl-aqua)">
            <span><FaLock /></span>
            <p>Encrypted Message</p>
          </div>
        )}
        {displayedMessages.map((msg) => (
          <div
          key={msg.id}
          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {/* avatar */}
            {(msg.role === 'assistant' || msg.role === 'admin') && (
              <div className="w-6 h-6 rounded-full bg-(--dark-teal)/20 border border-(--pacific-cyan)/40 flex items-center justify-center text-[10px] text-(--pearl-aqua) mr-2 mt-0.5 shrink-0">
                {msg.role === 'admin' ? 'DM' : 'AI'}
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-(--pearl-aqua) text-(--dark-teal) rounded-tr-sm'
                  : 'bg-(--dark-teal) text-gray-200 rounded-tl-sm'
              }`}
            >{msg.text}</div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="w-6 h-6 rounded-full bg-[#4ecdc4]/20 border border-[#4ecdc4]/40 flex items-center justify-center text-[10px] text-[#4ecdc4] mr-2 mt-0.5 shrink-0">
              AI
            </div>
            <div className="bg-[#1e4040] rounded-2xl rounded-tl-sm px-4 py-2.5 flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick action menu — hanya muncul jika belum ada percakapan */}
      {onMode === "AI" && messages.length === 1 && (
        <div className="px-3 pb-2 space-y-1.5">
          {messages.map((msg) => (
            <div className="flex flex-col items-center justify-center mb-8">
              <span className="px-4 py-1 rounded-full border border-(--pearl-aqua) text-(--pearl-aqua) text-xs font-medium mb-3">AI ASSISTANT</span>
              <p className='text-sm font-bold text-white'>{msg.greet}</p>
              <p className='text-xs text-(--pearl-aqua)'>{msg.desc}</p>
            </div>
          ))}

          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => sendMessage(`Tell me about your ${action.label} - ${action.sublabel}`)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-full bg-[--mint-leaf]/40 backdrop-blur-xl border border-(--mint-leaf) hover:border-white text-sm text-white transition-all duration-200 group"
            >
              <div className="flex items-center gap-2">
                <div className="text-left">
                  <span className="px-3 py-0.5 rounded-full border border-(--pearl-aqua) text-white text-xs">{action.label}</span>
                  <span className="text-white ml-2 text-xs font-medium">{action.sublabel}</span>
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-[#4ecdc4] transition-colors">›</span>
            </button>
          ))}
        </div>
      )}

      {/* Topic filter chips - muncul setelah ada percakapan */}
      {onMode === 'AI' && messages.length > 1 && (
        <div className="px-3 py-3 border-t border-(--pearl-aqua) flex justify-between flex-wrap">
          {['Projects', 'Experience', 'Contact', 'Skills'].map((chip) => (
            <button
              key={chip}
              onClick={() => sendMessage(chip)}
              className="px-3 py-1 rounded-full border border-(--pearl-aqua) text-xs text-(--pearl-aqua) hover:border-white hover:text-white transition-all duration-200"
            >{chip}</button>
          ))}
        </div>
      )}

      {/* Input row */}
      <div className="flex items-center gap-2 px-3 pb-3 mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          disabled={loading}
          className="flex-1 bg-(--dark-teal)/50 border border-(--pacific-cyan)/20 rounded-lg px-4 py-2 text-sm text-white placeholder-(--pacific-cyan) outline-none focus:border-(--pearl-aqua) transition-colors disabled:opacity-50"
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="w-9 h-9 rounded-lg bg-(--mint-leaf) text-white flex items-center justify-center hover:bg-(--mint-leaf)/70 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
        ><IoIosSend/></button>
      </div>
    </div>
  );
}