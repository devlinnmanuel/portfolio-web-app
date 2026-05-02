import { useState } from 'react';

const suggestedQuestions = [
  'How does authentication work?',
  'Explain the API Structure',
  'Why using Flask Framework?',
];

export default function AskAI({ projectTitle }) {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (text) => {
    const q = text || query.trim();
    if (!q) return;
    setQuery(q);
    setLoading(true);
    setAnswer('');

    // TODO: ganti dengan POST /api/chat dengan body:
    // { message: q, context: `Project: ${projectTitle}` }
    await new Promise((r) => setTimeout(r, 1000));
    setAnswer(
      `This is a simulated answer about "${projectTitle}". Connect to the AI backend to get real project-specific answers about implementation details, architecture decisions, and technical challenges.`
    );
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAsk();
  };

  return (
    <div className="bg-[#0d2035]/80 border border-[#1e3a5f] rounded-2xl p-7">
      <h2 className="text-xl font-bold text-white mb-1">Ask AI Assistant</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Have questions about the technical implementation, choices or challenges? Ask my
        project-specific AI assistant for deep-dive answers.
      </p>

      {/* Input row */}
      <div className="flex items-center gap-3 bg-[#091828] border border-[#1e3a5f] rounded-xl px-4 py-3 mb-4 focus-within:border-[#4ecdc4] transition-colors">
        <span className="text-gray-500 text-sm shrink-0">✦</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about the database schema or Flask optimizations..."
          className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
        />
        <button
          onClick={() => handleAsk()}
          disabled={loading || !query.trim()}
          className="px-5 py-1.5 rounded-lg bg-[#4ecdc4] text-[#0a1628] font-semibold text-sm hover:bg-[#3ab8b0] disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
        >
          {loading ? '...' : 'Ask Now'}
        </button>
      </div>

      {/* Suggested questions */}
      <div className="flex flex-wrap gap-2 mb-5">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            onClick={() => handleAsk(q)}
            className="px-3 py-1.5 rounded-full bg-[#1e3a5f] border border-[#2a4a6f] text-gray-300 text-xs hover:border-[#4ecdc4] hover:text-white transition-all duration-200"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Answer */}
      {answer && (
        <div className="bg-[#091828] border border-[#1e3a5f] rounded-xl p-4 text-gray-300 text-sm leading-relaxed">
          <p className="text-[#4ecdc4] text-xs font-semibold mb-2 uppercase tracking-wider">
            AI Response
          </p>
          {answer}
        </div>
      )}

      {loading && (
        <div className="bg-[#091828] border border-[#1e3a5f] rounded-xl p-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4ecdc4] animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-[#4ecdc4] animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-[#4ecdc4] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      )}
    </div>
  );
}