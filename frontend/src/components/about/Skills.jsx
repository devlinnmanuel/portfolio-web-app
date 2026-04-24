const skills = [
  'Web Development',
  'Frontend Development',
  'Backend Engineering',
  'Software Engineering',
  'UI/UX Design',
  'Cybersecurity Fundamentals',
  'Problem Solving',
  'Team Management',
  'Teamwork & Leadership',
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-10">Skill & Core Competencies</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-(--pearl-aqua) text-sm bg-(--dark-teal) hover:bg-(--pearl-aqua) hover:text-(--dark-teal) transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}