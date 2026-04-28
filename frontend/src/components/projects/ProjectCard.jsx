export default function ProjectCard({ project }) {
  const levelColor = {
    Beginner: 'text-green-400',
    Intermediate: 'text-yellow-400',
    Advanced: 'text-red-400',
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#1e3a5f] hover:border-[#4ecdc4] transition-transform duration-300 transform hover:scale-105 group">

      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-[#091828]">
        {/* Ganti dengan:
            <img src={project.image} alt={project.title}
                 className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
        */}
        <div className="w-full h-full bg-linear-to-t from-[#0a1628] via-[#0a1628]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 min-h-55 flex flex-col justify-between">

        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className={`text-xs font-semibold ${levelColor[project.level] || 'text-(--pearl-aqua)'}`}>{project.level}</span>
          <span className="px-3 py-0.5 rounded-full border border-white text-white text-xs">{project.year}</span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-(--pearl-aqua) mb-2">{project.title}</h3>
          <p className="text-white text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
          <span className="px-4 py-1.5 rounded-lg bg-(--mint-leaf) text-white text-xs font-semibold">{project.role}</span>
        </div>
      </div>
    </div>
  );
}