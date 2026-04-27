import { useState, useRef, useEffect } from 'react';
import Delete from './Delete';
import { FaSearch, FaEye, FaTrash, FaFilter } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";

const categories = ['All Projects', 'Full-stack', 'Frontend', 'Backend', 'Database'];

const options = [
  { label: "Latest", value: "latest" },
  { label: "Release Date", value: "release" },
  { label: "Last Updated", value: "updated" },
  { label: "A → Z", value: "az" },
  { label: "Z → A", value: "za" },
  { label: "Most Popular", value: "popular" },
];

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
  const [sort, setSort] = useState("latest");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef(null);

  const filtered = mockProjects.filter((p) => {
    const matchCat = activeCategory === 'All Projects' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
        case "az":
        return a.title.localeCompare(b.title);
        case "za":
        return b.title.localeCompare(a.title);
        case "updated":
        return new Date(b.updatedAt) - new Date(a.updatedAt);
        case "popular":
        return b.views - a.views;
        default:
        return 0;
    }
  });

  const handleDeleteConfirm = () => {
    // TODO: panggil API DELETE /projects/:id
    console.log('Delete project id:', deleteTargetId);
    setDeleteTargetId(null);
  };

  // dropdown effect
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (opt) => {
    setSelected(opt);
    setSort(opt.value);
    setOpen(false);
  };

  return (
    <section>
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 id="projectInventory" className="text-3xl font-bold text-(--mint-leaf)">Project Inventory</h2>

            {/* Search */}
            <div className="flex items-center gap-2 bg-(--dark-teal) rounded-lg px-4 py-4 w-full sm:w-64">
                <span className="text-(--pacific-cyan) text-sm"><FaSearch /></span>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent text-sm text-white placeholder-(--pacific-cyan) outline-none w-full"
                />
            </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                        ? 'bg-(--mint-leaf) text-white'
                        : 'border border-(--mint-leaf)/40 text-(--pearl-aqua) hover:bg-(--dark-teal)'
                    }`}>{cat}
                </button>
                ))}
            </div>

            <div className='flex items-center gap-3'>
                {/* Filter */}
                <div ref={ref} className="relative">
                    <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--mint-leaf)/40 text-(--pearl-aqua)"
                    >
                    <FaFilter className="text-xs" />
                    {selected.label}
                    </button>

                    {open && (
                        <div className="absolute right-0 top-full mt-2 w-32 z-50 
                                        rounded-xl bg-(--dark-teal) border border-(--mint-leaf)/20 shadow-lg">
                        
                        {options.map((opt, i) => (
                            <button
                            key={opt.value}
                            onClick={() => handleSelect(opt)}
                            className={`w-full text-left px-4 py-2 text-sm transition
                                ${i === 0 ? "rounded-t-xl" : ""}
                                ${i === options.length - 1 ? "rounded-b-xl" : ""}
                                ${selected.value === opt.value
                                ? "bg-(--mint-leaf)/30 text-white"
                                : "text-(--pearl-aqua) hover:bg-(--mint-leaf)/20"
                                }`}
                            >
                            {opt.label}
                            </button>
                        ))}
                        </div>
                    )}
                </div>

                {/* Add button */}
                <button className="px-5 py-2 rounded-lg bg-(--pacific-cyan) hover:bg-(--pacific-cyan)/80 text-white">
                + Add Project
                </button>
            </div>

        </div>
        </div>

      {/* Projects */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No projects found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((project) => (
            <div
              key={project.id}
              className="relative bg-(--mint-leaf)/30 border border-(--dark-teal) rounded-2xl hover:border-(--pacific-cyan) transition-transform duration-300 transform hover:scale-105 hover:rounded-2xl"
            >
              {/* Image placeholder */}
              <div className="rounded-t-2xl w-full h-44 bg-[#091828] flex items-center justify-center text-gray-700 text-sm">
                {/* Ganti dengan <img src={project.image} /> nanti */}
                Project image
              </div>

              {/* badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-sm bg-(--mint-leaf) text-white text-xs font-semibold">{project.status}</span>

                <span className="px-2 py-0.5 rounded-full border border-(--mint-leaf) text-(--mint-leaf) text-xs">{project.year}</span>
              </div>

              {/* Content */}
              <div className="p-4 bg-linear-to-t from-[rgb(var(--mint-leaf))] to-(--dark-teal)">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-(--mint-leaf) text-lg">{project.title}</h3>

                  {/* Edit & Delete actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors"
                      title="Edit project"
                      onClick={() => {
                        // TODO: navigasi ke halaman edit project
                        console.log('Edit project:', project.id);
                      }}
                    ><MdEdit /></button>
                    <button
                      className="text-(--pacific-cyan) hover:text-(--pearl-aqua) transition-colors"
                      title="Delete project"
                      onClick={() => setDeleteTargetId(project.id)}
                    ><FaTrash /></button>
                  </div>
                </div>

                <p className="text-white text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between text-xs text-(--pacific-cyan)">
                  <span>Updated {project.updatedAt}</span>
                  <span className="flex items-center gap-1">
                    <FaEye /> {project.views}
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