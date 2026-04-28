export default function ProjectsCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-3">Have a Project in Mind?</h2>
        <p className="text-(--pearl-aqua) text-xl md:text-2xl font-semibold leading-snug mb-10">
          Let's build scalable and secure solutions together.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-(--pacific-cyan) text-white font-medium hover:bg-(--mint-leaf) transition-all duration-200"
          >Let's Talk</a>
          <a
            href="https://drive.google.com/file/d/18z41btgVFC6nn2U1EViHfICLg67y2Imf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-(--pacific-cyan) text-white font-medium hover:bg-(--mint-leaf) transition-all duration-200"
          >View Resume</a>
        </div>
      </div>
    </section>
  );
}