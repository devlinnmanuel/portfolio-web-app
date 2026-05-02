export default function ProjectDetailHero({ project }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#1e3a5f] mb-12">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-[#091828]">
        {/* Ganti dengan:
            <img src={project.image} className="w-full h-full object-cover opacity-30" /> */}
        <div className="w-full h-full bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-7 md:p-10 min-h-[240px]">

        {/* Left: main info */}
        <div className="flex-1">
          {/* Year + Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border border-[#2a5560] text-gray-300 text-xs">
              {project.year}
            </span>
            <span className="flex items-center gap-1.5 text-gray-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#4ecdc4] inline-block" />
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            {project.description}
          </p>
        </div>

        {/* Right: role, deliverables, links */}
        <div className="md:w-64 bg-[#0d2035]/80 border border-[#1e3a5f] rounded-xl p-5 flex flex-col gap-4 self-start">
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Role</p>
            <p className="text-white text-sm font-medium">{project.role}</p>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">
              Deliverables
            </p>
            <p className="text-white text-sm">{project.deliverables}</p>
          </div>

          <div className="border-t border-[#1e3a5f] pt-3 flex flex-col gap-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#4ecdc4] text-sm font-medium hover:underline"
              >
                <span>👁</span> Live Demo →
              </a>
            )}
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#4ecdc4] text-sm font-medium hover:underline"
              >
                <span>⚙</span> Github Repo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}