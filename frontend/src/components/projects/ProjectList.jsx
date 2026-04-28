import { useState } from 'react';
import FeaturedCard from './FeaturedCard';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';
import { FaSearch } from 'react-icons/fa';

const categories = ['All Projects', 'Full-stack', 'Frontend', 'Backend', 'Database'];

// Data dummy — nanti diambil dari GET /api/projects
const mockProjects = [
  {
    id: 1,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by organizing tasks based on day and priority level.',
    role: 'Role',
    level: 'Featured',
    year: '2025',
    category: 'Full-stack',
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2025',
    category: 'Frontend',
    featured: false,
    image: null,
  },
  {
    id: 3,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Beginner',
    year: '2025',
    category: 'Backend',
    featured: false,
    image: null,
  },
  {
    id: 4,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2024',
    category: 'Full-stack',
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2024',
    category: 'Database',
    featured: false,
    image: null,
  },
  {
    id: 1,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by organizing tasks based on day and priority level.',
    role: 'Role',
    level: 'Featured',
    year: '2025',
    category: 'Full-stack',
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2025',
    category: 'Frontend',
    featured: false,
    image: null,
  },
  {
    id: 3,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Beginner',
    year: '2025',
    category: 'Backend',
    featured: false,
    image: null,
  },
  {
    id: 4,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2024',
    category: 'Full-stack',
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2024',
    category: 'Database',
    featured: false,
    image: null,
  },
  {
    id: 1,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by organizing tasks based on day and priority level.',
    role: 'Role',
    level: 'Featured',
    year: '2025',
    category: 'Full-stack',
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2025',
    category: 'Frontend',
    featured: false,
    image: null,
  },
  {
    id: 3,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Beginner',
    year: '2025',
    category: 'Backend',
    featured: false,
    image: null,
  },
  {
    id: 4,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2024',
    category: 'Full-stack',
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: 'Project Name',
    description:
      'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by.',
    role: 'Role',
    level: 'Intermediate',
    year: '2024',
    category: 'Database',
    featured: false,
    image: null,
  },
];

const ITEMS_PER_PAGE = 4; // jumlah kartu biasa per halaman (di luar featured)

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter
  const filtered = mockProjects.filter((p) => {
    const matchCat = activeCategory === 'All Projects' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  // Pagination hanya untuk kartu biasa
  const totalPages = Math.max(1, Math.ceil(regular.length / ITEMS_PER_PAGE));
  const paginated = regular.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section>
      {/* Filter + Search row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-(--mint-leaf) text-white'
                  : 'border border-(--mint-leaf)/40 text-(--pearl-aqua) hover:bg-(--dark-teal)'
              }`}
            >{cat}</button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-(--dark-teal) rounded-lg px-4 py-4 w-full sm:w-64">
          <span className="text-(--pacific-cyan) text-sm"><FaSearch /></span>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
          />
        </div>
      </div>

      {/* Result count */}
      <p className="text-(--mint-leaf) text-sm mb-6">
        Showing {filtered.length} Project{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Featured card */}
      {featured && <FeaturedCard project={featured} />}

      {/* Regular grid */}
      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {paginated.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-20">No projects found.</div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}