export default function ProblemSolution({ problem, solution }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">

      {/* Problem */}
      <div>
        <h2 className="text-2xl font-bold text-[#4ecdc4] mb-4">The Problem Statement</h2>
        <ul className="space-y-2">
          {problem.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
              <span className="text-gray-500 mt-0.5">–</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Solution */}
      <div>
        <h2 className="text-2xl font-bold text-[#4ecdc4] mb-4">The Architectural Solution</h2>
        <ul className="space-y-2">
          {solution.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
              <span className="text-gray-500 mt-0.5">–</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}