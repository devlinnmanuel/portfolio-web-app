export default function TopicsLearning({ topics, learning, challenges }) {
  return (
    <div className="mb-14">
      {/* Related Topics */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#4ecdc4] mb-4">Related Topics</h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-4 py-1.5 rounded-full border border-[#1e3a5f] text-[#4ecdc4] text-sm hover:bg-[#4ecdc4]/10 transition-colors cursor-default"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* What I Learned + Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* What I Learned */}
        <div className="bg-[#0d2035] border border-[#1e3a5f] rounded-2xl p-6 hover:border-[#4ecdc4] transition-all duration-200">
          <h3 className="text-[#4ecdc4] font-bold text-lg mb-4">What I Learned</h3>
          <ul className="space-y-2">
            {learning.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                <span className="text-gray-500 mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-[#0d2035] border border-[#1e3a5f] rounded-2xl p-6 hover:border-[#4ecdc4] transition-all duration-200">
          <h3 className="text-[#4ecdc4] font-bold text-lg mb-4">Challenges</h3>
          <ul className="space-y-2">
            {challenges.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                <span className="text-gray-500 mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}