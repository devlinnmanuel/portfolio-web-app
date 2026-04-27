export default function FeaturedCard({ project }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#1e3a5f] hover:border-[#4ecdc4] transition-all duration-300 mb-5">

      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-[#091828]">
        {/* Ganti dengan:
            <img src={project.image} alt={project.title}
                 className="w-full h-full object-cover opacity-40" />
        */}
        <div className="w-full h-full bg-linear-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 p-7 md:p-10 min-h-60 flex flex-col justify-between">

        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="flex items-center gap-2 text-yellow-400 font-semibold text-sm">
            ★ Featured Project
          </span>
          <span className="px-3 py-1 rounded-full border border-[#2a5560] text-gray-300 text-xs">
            {project.year}
          </span>
        </div>

        {/* Bottom content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-lg mb-5">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="px-4 py-1.5 rounded-full bg-[#4ecdc4] text-[#0a1628] text-xs font-semibold">
              {project.role}
            </span>
            <a
              href={`/projects/${project.id}`}
              className="flex items-center gap-2 text-white font-semibold text-sm hover:text-[#4ecdc4] transition-colors"
            >
              View Details →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}