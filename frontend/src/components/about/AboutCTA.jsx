export default function AboutCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) leading-snug mb-1">Any interesting ideas?</h2>
        <p className="text-3xl md:text-4xl font-bold text-(--pearl-aqua) mb-10">Let's create something together.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-(--pacific-cyan) text-white font-medium hover:bg-(--mint-leaf) transition-all duration-200"
          >View My Projects</a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-(--pacific-cyan) text-white font-medium hover:bg-(--mint-leaf) transition-all duration-200"
          >Let's Talk</a>
        </div>
      </div>
    </section>
  );
}