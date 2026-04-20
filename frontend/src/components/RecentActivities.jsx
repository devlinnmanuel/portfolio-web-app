// Data ini nantinya diambil dari API backend
const activities = [
  {
    id: 1,
    title: 'IT & Big Data Analytics',
    description: 'Ongoing academic focus on distributed systems and big data modeling.',
  },
  {
    id: 2,
    title: 'Cybersecurity Basics',
    description: 'Exploring secure coding practices and network vulnerability assessment.',
  },
  {
    id: 3,
    title: 'Open Source Work',
    description: 'Collaborating on web tools during volunteer at YLSA.',
  },
  {
    id: 4,
    title: 'Leadership Work',
    description: 'Active leadership role in Student Association IT & Big Data Analytics.',
  },
];

export default function RecentActivities() {
  return (
    <section id="activities" className="py-20 px-6 bg-(--pacific-cyan)">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--pearl-aqua) mb-10">Recent Activities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-(--dark-teal) border border-(--pearl-aqua) text-center rounded-2xl p-5 hover:border-white hover:-translate-y-1 transition-transform duration-300 transform hover:scale-105"
            >
              <h3 className="font-bold text-(--mint-leaf) text-sm mb-2 leading-snug">{activity.title}</h3>
              <p className="text-(--pearl-aqua) text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}