export default function ProjectsCTA() {
  return (
    <section className="py-24 px-6 bg-[#071220] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4ecdc4] mb-3">
          Have a Project in Mind?
        </h2>
        <p className="text-white text-xl md:text-2xl font-semibold leading-snug mb-10">
          Let's build scalable and secure solutions together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-[#0d2035] border border-[#1e3a5f] text-white font-medium hover:border-[#4ecdc4] hover:text-[#4ecdc4] transition-all duration-200"
          >
            Let's Talk
          </a>
          <a
            href="/resume"
            className="px-7 py-3 rounded-full bg-[#0d2035] border border-[#1e3a5f] text-white font-medium hover:border-[#4ecdc4] hover:text-[#4ecdc4] transition-all duration-200"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}