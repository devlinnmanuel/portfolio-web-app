export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border border-[#1e3a5f] text-gray-400 flex items-center justify-center hover:border-[#4ecdc4] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ‹
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-full text-sm font-semibold transition-all duration-200 ${
            page === currentPage
              ? 'bg-[#4ecdc4] text-[#0a1628] border border-[#4ecdc4]'
              : 'border border-[#1e3a5f] text-gray-400 hover:border-[#4ecdc4] hover:text-white'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border border-[#1e3a5f] text-gray-400 flex items-center justify-center hover:border-[#4ecdc4] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ›
      </button>
    </div>
  );
}