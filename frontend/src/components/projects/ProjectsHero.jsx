const stats = [
  { value: '5+', label: 'Projects' },
  { value: '3',  label: 'Domains' },
  { value: '2+', label: 'Years Experiences' },
];

export default function ProjectsHero() {
  return (
    <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">

      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-(--mint-leaf) mb-4 leading-tight">Project Inventory</h1>
        <p className="text-(--pearl-aqua) text-base leading-relaxed">
          A curated collection of projects showcasing my expertise in web development,
          software engineering, and cybersecurity.
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-wrap max-w-1xl justify-end content-end gap-3 shrink-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-(--dark-teal)/40 backdrop-blur-xl border border-(--mint-leaf)/30 rounded-2xl px-4 py-4 flex items-center justify-center gap-2 transition-transform duration-300 transform hover:scale-105
              ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <span className="text-3xl font-bold text-(--mint-leaf)">{stat.value}</span>
            <p className="text-(--pearl-aqua) font-bold text-sm mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}