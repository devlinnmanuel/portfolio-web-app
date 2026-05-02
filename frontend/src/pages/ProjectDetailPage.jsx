import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetailHero from '../components/project-detail/ProjectDetailHero.jsx';
import ProblemSolution from '../components/project-detail/ProblemSolution';
import ArchitectureTech from '../components/project-detail/ArchitectureTech';
import Documentation from '../components/project-detail/Documentation';
import TopicsLearning from '../components/project-detail/TopicsLearning';
import AskAI from '../components/project-detail/AskAI';


// bisa diganti fetch GET /api/projects/:id
const mockProject = {
  id: 1,
  year: '2025',
  category: 'Full Stack Development',
  title: 'Full Stack To Do List Application',
  description:
    'A Simple Task Application built using Vue.js as the front end and REST API as the back end, to help users manage daily tasks efficiently by organizing tasks based on day and priority level.',
  role: 'Frontend Development',
  deliverables: 'Login page, Schedule management',
  liveDemo: 'https://example.com',
  githubRepo: 'https://github.com/devlinmanuel',
  problem: [
    'Users struggle to manage daily tasks',
    'No priority-based organization',
    'Lack of simple UI',
  ],
  solution: [
    'Built task categorization system',
    'Implemented priority-based sorting',
    'Designed clean UI with Vue.js',
  ],
  architecture: {
    label: 'System Topology',
    nodes: [
      { name: 'Frontend', sub: 'Vue' },
      { name: 'API', sub: 'Flask' },
      { name: 'Database', sub: 'MySQL' },
    ],
  },
  technologies: {
    Frontend: ['Vue.js', 'CSS'],
    Backend: ['Flask'],
    Database: ['MySQL'],
  },
  documentation: [null, null, null], // array gambar, isi path nanti
  topics: ['#Frontend', '#Database', '#FullStack'],
  learning: [
    'Learned REST API integration',
    'Improved state management',
    'Applied clean architecture',
  ],
  challenges: [
    'Handling async API calls',
    'Designing scalable structure',
  ],
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const topRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // TODO: useEffect fetch GET /api/projects/${id}
  const project = mockProject;

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <div ref={topRef} />
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Back button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-[#4ecdc4] text-sm mb-6 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects</button>

        <ProjectDetailHero project={project} />
        <ProblemSolution problem={project.problem} solution={project.solution} />
        <ArchitectureTech architecture={project.architecture} technologies={project.technologies} />
        <Documentation images={project.documentation} />
        <TopicsLearning
          topics={project.topics}
          learning={project.learning}
          challenges={project.challenges}
        />
        <AskAI projectTitle={project.title} />
      </main>

      <Footer />
    </div>
  );
}