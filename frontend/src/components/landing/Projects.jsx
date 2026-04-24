// Data ini nantinya akan diambil dari API backend
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Lorem ipsum tempor praesent aenean ornare nam enim gravida tristique.',
    role: 'Role',
    year: '2025',
    category: 'Fullstack',
    image: null, // ganti dengan path gambar nanti
  },
  {
    id: 2,
    title: 'Project Name',
    description: 'Lorem ipsum tempor praesent aenean ornare nam enim gravida tristique.',
    role: 'Role',
    year: '2025',
    category: 'Frontend',
    image: null,
  },
  {
    id: 3,
    title: 'Project Name',
    description: 'Lorem ipsum tempor praesent aenean ornare nam enim gravida tristique.',
    role: 'Role',
    year: '2025',
    category: 'Backend',
    image: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 bg-(--deepspace-blue)">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 60px 60px, 60px 60px"
        }}
      />
      
      <div className="relative z-0 max-w-5xl mx-auto">
        <h2 id="projects" className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-(--mint-leaf)/30 border border-(--dark-teal) rounded-2xl hover:border-(--pacific-cyan) transition-transform duration-300 transform hover:scale-105 hover:rounded-2xl"
            >
              {/* Image placeholder */}
              <div className="w-full h-44 bg-[#112828] flex items-center justify-center text-gray-600 text-sm rounded-t-2xl transition-transform duration-300 transform hover:rounded-2xl">
                {/* Ganti dengan <img src={project.image} /> nanti */}
                Project image
              </div>

              {/* tag */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                <span className="px-2 py-0.5 rounded-sm bg-(--mint-leaf)/80 text-white text-xs">{project.role}</span>

                <span className="px-2 py-0.5 rounded-full bg-none text-white text-xs border border-white">{project.year}</span>
              </div>

              {/* Hover overlay */}
              <div className="bg-[--mint-leaf]/40 backdrop-blur-sm border border-white/10 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:rounded-2xl">
                <button className="px-5 py-2 rounded-full border border-(--mint) text-white text-sm hover:bg-white hover:text-black transition-all duration-200">View Details</button>
              </div>

              {/* Content */}
              <div className="p-4 bg-linear-to-t from-[rgb(var(--mint-leaf))] to-(--dark-teal)">
                <h3 className="text-2xl font-bold text-(--mint-leaf) mb-1">{project.title}</h3>
                <p className="text-white text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>


        {/* View all link */}
        <div className="mt-10 text-right">
          <a
            href="/projects"
            className="text-(--pearl-aqua) text-sm font-medium hover:underline inline-flex items-center gap-1"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}