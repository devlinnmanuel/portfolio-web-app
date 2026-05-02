import { useState } from 'react';

export default function Documentation({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Tampilkan 3 item sekaligus (current-1, current, current+1)
  const visible = [-1, 0, 1].map((offset) => {
    const idx = (current + offset + total) % total;
    return { idx, image: images[idx], offset };
  });

  if (total === 0) return null;

  return (
    <div className="mb-14">
      <h2 className="text-2xl font-bold text-[#4ecdc4] mb-6">Project Documentation</h2>

      <div className="relative flex items-center gap-4">
        {/* Prev button */}
        <button
          onClick={prev}
          className="shrink-0 w-9 h-9 rounded-full border border-[#1e3a5f] text-gray-400 flex items-center justify-center hover:border-[#4ecdc4] hover:text-white transition-all"
        >
          ‹
        </button>

        {/* Slides */}
        <div className="flex-1 grid grid-cols-3 gap-4 overflow-hidden">
          {visible.map(({ idx, image, offset }) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                offset === 0
                  ? 'border-[#4ecdc4] scale-100'
                  : 'border-[#1e3a5f] opacity-60 hover:opacity-80'
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt={`Documentation ${idx + 1}`}
                  className="w-full h-40 object-cover"
                />
              ) : (
                // Placeholder — ganti dengan gambar nyata nanti
                <div className="w-full h-40 bg-[#0d2035] flex items-center justify-center text-gray-600 text-xs">
                  Screenshot {idx + 1}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="shrink-0 w-9 h-9 rounded-full border border-[#1e3a5f] text-gray-400 flex items-center justify-center hover:border-[#4ecdc4] hover:text-white transition-all"
        >
          ›
        </button>
      </div>

      {/* Dot indicator */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === current ? 'bg-[#4ecdc4] w-4' : 'bg-[#1e3a5f]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}