import { FaEye } from "react-icons/fa";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";

// Contribution activity grid — nanti diganti data real dari API/GitHub
// Simulasi: array 7 baris x 15 kolom dengan nilai 0-4 (intensity)
function generateMockActivity() {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 15 }, () => Math.floor(Math.random() * 5))
  );
}

const activityGrid = generateMockActivity();

const intensityClass = {
  0: 'bg-(--dark-teal)',
  1: 'bg-(--pacific-cyan)',
  2: 'bg-(--pearl-aqua)',
  3: 'bg-(--mint-leaf)',
  4: 'bg-white',
};

export default function AdminConsole() {
  return (
    <section className="mb-14">
      <h2 id="adminConsole" className="text-3xl font-bold text-(--mint-leaf) mb-6">Admin Console</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Left: stats stacked */}
        <div className="flex flex-col gap-4">
          {/* Total Visitors */}
          <div className="bg-(--dark-teal) border border-(--pacific-cyan) rounded-2xl p-5">
            <p className="text-xs font-bold text-white tracking-widest uppercase mb-2">Total Visitors</p>
            <p className="text-5xl font-bold text-(--mint-leaf) mb-2">24</p>
            <p className="text-(--pearl-aqua) text-sm flex items-center gap-1">
              <span className="text-(--mint-leaf)"><IoMdTrendingUp/></span> +10% this month
            </p>
          </div>

          {/* Project Views */}
          <div className="bg-(--dark-teal) border border-(--pacific-cyan) rounded-2xl p-5">
            <p className="text-xs font-bold text-white tracking-widest uppercase mb-2">Project Views</p>
            <p className="text-5xl font-bold text-(--mint-leaf) mb-2">35</p>
            <p className="text-(--pearl-aqua) text-sm flex items-center gap-1">
              <span><FaEye /></span> Across 4 projects
            </p>
          </div>
        </div>

        {/* Right: Contribution activity */}
        <div className="md:col-span-2 bg-(--dark-teal) border border-(--pacific-cyan) rounded-2xl p-5">
          <p className="text-sm font-bold text-white tracking-widest uppercase mb-4">Contribution Activity</p>

          {/* Grid */}
          <div className="flex flex-col gap-1">
            {activityGrid.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-1">
                {row.map((val, colIdx) => (
                  <div
                    key={colIdx}
                    className={`w-5 h-5 rounded-sm ${intensityClass[val]}`}
                    title={`Activity: ${val}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <p className="text-(--pearl-aqua) text-sm mt-4">Total of 5 updates in the last year</p>
        </div>
      </div>
    </section>
  );
}