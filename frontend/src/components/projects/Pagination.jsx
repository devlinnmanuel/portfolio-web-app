import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 text-3xl leading-none rounded-full text-(--pacific-cyan) flex items-center justify-center hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      ><FaAngleLeft /></button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-md text-1xl font-semibold transition-all duration-200 ${
            page === currentPage
              ? 'bg-(--mint-leaf) text-(--deepspace-blue)'
              : 'text-(--pacific-cyan) bg-(--dark-teal) hover:bg-(--dark-teal)/70 hover:text-(--pearl-aqua)'
          }`}
        >{page}</button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 text-3xl rounded-full text-(--pacific-cyan) flex items-center justify-center hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      ><FaAngleRight /></button>
    </div>
  );
}