import { FaUser, FaBriefcase, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

const bioCards = [
  {
    icon: <FaUser />,
    label: 'Name',
    value: 'Devlin Manuel',
  },
  {
    icon: <FaBriefcase />,
    label: 'Role',
    value: 'College Student, Web Developer, Software Engineer',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Jakarta, Indonesia',
  },
  {
    icon: <FaGraduationCap />,
    label: 'IT & Big Data Analytics',
    value: 'Calvin Institute of Technology',
    sub: 'Semester VI',
  },
];

const stats = [
  { value: '2+', label: (<>Years of<br/>Learning</>) },
  { value: '5+', label: (<>Projects<br/>Completed</>) },
];

export default function Bio() {
  return (
    // <section id="bio" className="py-16 px-6">
    // <div className="max-w-5xl mx-auto">
    <div>
      <h2 className="text-3xl font-bold text-(--mint-leaf) mb-6">Bio</h2>

      {/* Bio cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {bioCards.map((card) => (
          <div
            key={card.label}
            className="bg-(--dark-teal)/40 rounded-2xl p-4 backdrop-blur-xl border border-(--mint-leaf)/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-md hover:-translate-y-1 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="text-1xl mb-2 p-2 bg-(--pacific-cyan) inline-flex rounded-lg">{card.icon}</div>
            <p className="text-s text-white mb-1 font-medium">{card.label}</p>
            <p className="text-(--pearl-aqua) text-sm font-semibold leading-snug">{card.value}</p>
            {card.sub && <p className="text-gray-400 text-xs mt-1">{card.sub}</p>}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <span className="text-4xl font-bold text-(--mint-leaf)">{stat.value}</span>
            <p className="text-(--pearl-aqua) font-bold text-sm mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}