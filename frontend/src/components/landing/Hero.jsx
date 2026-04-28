import Spline from '@splinetool/react-spline';


export default function Hero() {
  const roles = ['Web Development', 'Software Engineer', 'Cybersecurity'];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-(--deepspace-blue)"
    >
      <div className="absolute inset-0 z-0">
          {/* <Spline
            scene="https://prod.spline.design/BJemW-DRwm-eeX3z/scene.splinecode" 
            className='w-full h-full'
          /> */}
      </div>

      <div className="absolute inset-0 bg-(--deepspace-blue)/70 z-0" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[#0d3d3d]/40 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16 max-w-3xl mx-auto">

        {/* badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {roles.map((role) => (
            <span
              key={role}
              className="px-4 py-1 rounded-full border border-(--pacific-cyan) text-(--pacific-cyan) text-sm bg-none backdrop-blur-sm"
            >{role}</span>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
          Hi! I am <span className="text-(--mint-leaf)">Devlin Manuel</span>
        </h1>

        {/* Subheading */}
        <p className="text-(--pearl-aqua) text-base md:text-lg max-w-xl leading-relaxed mb-10">
          an Undergraduate Student, with a strong focus on building modern web applications,
          designing scalable systems, and exploring the world of cybersecurity to create secure
          digital solutions.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();

              const el = document.getElementById("projects");
              if (el) {
                window.autoLenis?.scrollTo(el);
              }
            }}
            className="px-6 py-3 rounded-full bg-(--pacific-cyan) text-white font-medium hover:bg-(--mint-leaf) transition-all duration-200"
            >View My Projects</a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();

              const el = document.getElementById("contact");
              if (el) {
                window.autoLenis?.scrollTo(el);
              }
            }}
            className="px-6 py-3 rounded-full bg-(--pacific-cyan) text-white font-medium hover:bg-(--mint-leaf) transition-all duration-200"
          >Let's Talk</a>
        </div>
      </div>
    </section>
  );
}