import { useState } from 'react';
import Delete from './Delete';

const categories = ['All Projects', 'Full-stack', 'Frontend', 'Backend', 'Database'];

// Data dummy — nanti diambil dari API backend
const mockProjects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Lorem ipsum tempor praesent aenean ornare nam enim gravida tristique.',
    status: 'Draft',
    year: '2025',
    category: 'Full-stack',
    views: 10,
    updatedAt: 'Apr 09, 2026',
    image: null,
  },
  {
    id: 2,
    title: 'Project Name',
    description: 'Lorem ipsum tempor praesent aenean ornare nam enim gravida tristique.',
    status: 'Draft',
    year: '2025',
    category: 'Frontend',
    views: 10,
    updatedAt: 'Apr 09, 2026',
    image: null,
  },
  {
    id: 3,
    title: 'Project Name',
    description: 'Lorem ipsum tempor praesent aenean ornare nam enim gravida tristique.',
    status: 'Draft',
    year: '2025',
    category: 'Backend',
    views: 8,
    updatedAt: 'Apr 09, 2026',
    image: null,
  },
];

export default function ProjectInventory() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [search, setSearch] = useState('');
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const filtered = mockProjects.filter((p) => {
    const matchCat = activeCategory === 'All Projects' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleDeleteConfirm = () => {
    // TODO: panggil API DELETE /projects/:id
    console.log('Delete project id:', deleteTargetId);
    setDeleteTargetId(null);
  };

  return (
    <section>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-[#4ecdc4]">Project Inventory</h2>

        {/* Search */}
        <div className="flex items-center gap-2 bg-[#0d2035] border border-[#1e3a5f] rounded-full px-4 py-2 w-full sm:w-64">
          <span className="text-gray-500 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
          />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-[#4ecdc4] text-[#0a1628] border-[#4ecdc4]'
                : 'border-[#1e3a5f] text-gray-400 hover:text-white hover:border-[#4ecdc4]'
            }`}
          >
            {cat}
          </button>
        ))}

        {/* Filter button */}
        <button className="ml-auto flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e3a5f] text-gray-400 text-sm hover:text-white hover:border-[#4ecdc4] transition-all duration-200">
          <span>⚙</span> Filter
        </button>
      </div>

      {/* Add new project button */}
      <div className="mb-6">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4ecdc4] text-[#0a1628] font-semibold text-sm hover:bg-[#3ab8b0] transition-all duration-200">
          <span className="text-lg leading-none">+</span> Add New Project
        </button>
      </div>

      {/* Project cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No projects found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d2035] border border-[#1e3a5f] rounded-2xl overflow-hidden hover:border-[#4ecdc4] transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="w-full h-44 bg-[#091828] flex items-center justify-center text-gray-700 text-sm">
                {/* Ganti dengan <img src={project.image} /> nanti */}
                Project image
              </div>

              {/* Meta badges */}
              <div className="px-4 pt-3 flex items-center justify-between">
                <span className="px-3 py-0.5 rounded-full bg-[#4ecdc4]/20 text-[#4ecdc4] text-xs font-semibold border border-[#4ecdc4]/30">
                  {project.status}
                </span>
                <span className="px-3 py-0.5 rounded-full border border-[#1e3a5f] text-gray-400 text-xs">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-[#4ecdc4] text-base">{project.title}</h3>

                  {/* Edit & Delete actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Edit project"
                      onClick={() => {
                        // TODO: navigasi ke halaman edit project
                        console.log('Edit project:', project.id);
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete project"
                      onClick={() => setDeleteTargetId(project.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Updated {project.updatedAt}</span>
                  <span className="flex items-center gap-1">
                    👁 {project.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete confirmation modal */}
      <Delete
        isOpen={deleteTargetId !== null}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />
    </section>
  );
}