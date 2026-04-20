const disciplines = [
  {
    icon: '⬛',
    title: 'Frontend Development',
    description:
      'Responsive interfaces with a strong focus on hierarchy, interaction clarity, and polished delivery.',
    techs: ['React', 'Tailwind'],
  },
  {
    icon: '⚙️',
    title: 'Backend & Database System',
    description:
      'APIs, services, and database layers that support production-ready AI and web applications.',
    techs: ['Node.js', 'PostgreSQL'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Deployment, containers, observability, and workflow automation to keep systems stable after launch.',
    techs: ['Docker', 'Vercel'],
  },
  {
    icon: '📊',
    title: 'Data Processing & Visualization',
    description:
      'Leveraging big data principles to transform complex dataset into actionable insights through efficient ETL pipelines.',
    techs: ['Python', 'Pandas'],
  },
  {
    icon: '🔐',
    title: 'Cryptography & Data Security',
    description:
      'APIs, services, and database layers that support production-ready AI and web applications.',
    techs: ['OpenSSL', 'JWT'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Deployment, containers, observability, and workflow automation to keep systems stable after launch.',
    techs: ['Figma', 'Framer'],
  },
];

export default function CoreDisciplines() {
  return (
    <section id="disciplines" className="py-20 px-6 bg-(--dark-teal)">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-10">Core Disciplines</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {disciplines.map((item) => (
            <div
              key={item.title}
              className="relative bg-[--mint-leaf]/40 backdrop-blur-xl border border-(--mint-leaf)/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-transform duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-(--mint-leaf) text-2xl leading-snug pr-2">{item.title}</h3>
                <span className="text-xl shrink-0">{item.icon}</span>
              </div>

              <p className="text-(--pearl-aqua) text-sm leading-relaxed mb-9">{item.description}</p>

              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-0.5 rounded-full bg-(--pacific-cyan) text-white text-xs font-normal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}