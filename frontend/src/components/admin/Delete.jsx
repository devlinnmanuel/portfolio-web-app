export default function DeleteModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1a3a4a]/90 backdrop-blur-md border border-[#2a5560] rounded-2xl px-10 py-8 text-center max-w-sm w-full mx-4 shadow-2xl">
        <p className="text-white font-bold text-xl leading-snug mb-6">
          Are you sure want to delete this project?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-8 py-2.5 rounded-full bg-[#4ecdc4] text-[#0a1628] font-semibold hover:bg-[#3ab8b0] transition-all duration-200"
          >
            Delete
          </button>
          <button
            onClick={onCancel}
            className="px-8 py-2.5 rounded-full bg-[#e85d4a] text-white font-semibold hover:bg-[#d04a38] transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}