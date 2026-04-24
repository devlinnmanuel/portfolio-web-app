import AdminNavbar from '../components/admin/AdminNavbar';
import AdminConsole from '../components/admin/AdminConsole';
import ProjectInventory from '../components/admin/ProjectInventory';
import Footer from '../components/Footer';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <AdminNavbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Welcome header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4ecdc4] mb-2">
            Welcome back, Devlin 👋
          </h1>
          <p className="text-white font-semibold text-lg md:text-xl">
            Here's what's happening with your projects today
          </p>
        </div>

        <AdminConsole />
        <ProjectInventory />
      </main>

      <Footer />
    </div>
  );
}