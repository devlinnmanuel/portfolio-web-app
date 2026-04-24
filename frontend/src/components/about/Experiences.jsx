import {
  FaChartLine,
  FaBuilding,
  FaCode,
  FaUsers,
  FaPaintBrush
} from "react-icons/fa";


const experiences = [
  {
    id: 1,
    period: '2025 – Present',
    title: 'President',
    description:
      'Leading the Student Association of IT & Big Data Analytics into future-focused analytical organization.',
    tag: 'ACADEMIC LEADERSHIP',
    tagIcon: <FaChartLine />,
    side: 'left',
  },
  {
    id: 2,
    period: '2025',
    title: 'Internal Division Member & SOL Leader',
    description:
      'Assisted in coordinating events and internal affair within the student association & facilitated student orientation and organizational cohesion.',
    tag: 'INTERNAL OPERATIONS',
    tagIcon: <FaBuilding />,
    side: 'right',
  },
  {
    id: 3,
    period: '2025',
    title: 'Volunteer Web Developer',
    description:
      'Contributed to digital literacy and organizational web presence through technical implementation in YLSA.',
    tag: 'SOCIAL IMPACT TECH',
    tagIcon: <FaCode />,
    side: 'left',
  },
  {
    id: 4,
    period: '2024 – 2025',
    title: 'Floor Leader Assistant & Gym Attendant',
    description:
      'Focused on community management and campus services in Dormitory leadership and Student Employment Program roles.',
    tag: 'STUDENT LIFE SERVICES',
    tagIcon: <FaUsers />,
    side: 'right',
  },
  {
    id: 5,
    period: '2020 – 2022',
    title: 'Multimedia & Design',
    description:
      'Multimedia & Documentation for Student Council (2021–2022) and Samsung Odyssey Jersey Design Finalist (2020).',
    tag: 'CREATIVE BACKGROUND',
    tagIcon: <FaPaintBrush />,
    side: 'left',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-10">Volunteer & Experiences</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-(--pearl-aqua)/40" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`relative flex items-start gap-6 ${
                  exp.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${exp.side === 'left' ? 'pr-10 text-right' : 'pl-10 text-left'} hover:-translate-y-1 transition-transform duration-300 transform hover:scale-105`}>
                  <p className="text-(--mint-leaf) text-xs font-semibold mb-1">{exp.period}</p>
                  <h3 className="text-white font-bold text-1xl mb-2">{exp.title}</h3>
                  <p className="text-(--pearl-aqua) text-sm leading-relaxed">{exp.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4ecdc4] border-2 border-[#0a1a1a] mt-1.5 z-10" />

                {/* Tag card */}
                <div className={`w-1/2${exp.side === 'left' ? 'ml-10' : 'mr-10'}`}>
                  <div className="inline-flex items-center gap-2 bg-(--dark-teal)/40 rounded-xl px-4 py-3 backdrop-blur-xl border border-(--mint-leaf)/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-md hover:-translate-y-1 transition-transform duration-300 transform hover:scale-105">
                    <span className="text-base">{exp.tagIcon}</span>
                    <span className="text-(--pearl-aqua) text-xs font-semibold tracking-wide">{exp.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}