const stats = [
  { value: '5+', label: 'Projects' },
  { value: '3',  label: 'Categories' },
  { value: '2+', label: 'Years Exp.' },
];

export default function ProjectsHero() {
  return (
    <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">

      {/* Left: title & description */}
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4ecdc4] mb-4 leading-tight">
          Project Inventory
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          A curated collection of projects showcasing my expertise in web development,
          software engineering, and cybersecurity.
        </p>
      </div>

      {/* Right: stat cards */}
      <div className="grid grid-cols-2 gap-3 shrink-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-[#0d2035] border border-[#1e3a5f] rounded-2xl px-6 py-4 flex items-center justify-center
              ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <span className="text-3xl font-bold text-white">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}