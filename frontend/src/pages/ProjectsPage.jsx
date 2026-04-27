import Navbar from '../components/Navbar';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectList from '../components/projects/ProjectList';
import ProjectsCTA from '../components/projects/ProjectsCTA';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <ProjectsHero />
        <ProjectList />
      </main>
      <ProjectsCTA />
      <Footer />
    </div>
  );
}