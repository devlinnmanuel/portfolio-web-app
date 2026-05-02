export default function ArchitectureTech({ architecture, technologies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">

      {/* Architecture schema */}
      <div>
        <h2 className="text-2xl font-bold text-[#4ecdc4] mb-1">Architechture Schema</h2>
        <p className="text-gray-400 text-sm mb-6">{architecture.label}</p>

        {/* Flow diagram */}
        <div className="flex items-center gap-3 flex-wrap">
          {architecture.nodes.map((node, i) => (
            <div key={node.name} className="flex items-center gap-3">
              {/* Node box */}
              <div className="bg-[#0d2035] border border-[#1e3a5f] rounded-xl px-5 py-3 text-center min-w-20 hover:border-[#4ecdc4] transition-all duration-200">
                {/* Icon placeholder */}
                <div className="w-6 h-6 rounded bg-[#1e3a5f] mx-auto mb-1.5" />
                <p className="text-white text-sm font-bold">{node.name}</p>
                <p className="text-gray-400 text-xs">{node.sub}</p>
              </div>

              {/* Arrow between nodes */}
              {i < architecture.nodes.length - 1 && (
                <span className="text-[#4ecdc4] text-lg font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-2xl font-bold text-[#4ecdc4] mb-6">Technologies</h2>

        <div className="bg-[#0d2035] border border-[#1e3a5f] rounded-2xl p-5 space-y-4">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 bg-[#1e3a5f] border border-[#2a4a6f] rounded-lg px-3 py-1.5 hover:border-[#4ecdc4] transition-all duration-200"
                  >
                    {/* Icon placeholder — ganti dengan react-icons nanti */}
                    <div className="w-4 h-4 rounded bg-[#4ecdc4]/20 shrink-0" />
                    <span className="text-white text-xs font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}