import { useState } from 'react';
import Bio from './Bio';


const hero = {
  Profile: (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
        Developer Delivering <br />
        <span className="text-(--mint-leaf)">Secure Data Solutions</span>
      </h1>

      <p className="text-(--pearl-aqua) text-sm md:text-base leading-relaxed max-w-xl">
        I am a Devlin Manuel, sixth-semester college student with in-depth knowledge of Web & Software Development specializing in
        Python and REST API development, with strong foundation in software engineering, database design, and cybersecurity
        fundamentals. I focus on building systems that are not only functional, but also secure and reliable.
      </p>
    </div>
  ),
};


export default function AboutHero() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 h-125 rounded-full bg-[#0d3d3d]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-10">

        {/* Placeholder */}
        <div className='relative flex justify-center items-end'>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 right-0 h-95 w-70 bg-linear-to-t from-(--pearl-aqua) to-(--mint-leaf) rounded-t-full"/>
          
          {/* Image */}
          <div className="relative z-10">
            <img src="././public/devlin-profile.png" className="w-90 object-cover rounded-2xl" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <div className="flex gap-2 mb-5">
            {['Profile', 'Bio'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-(--mint-leaf) text-white'
                    : 'border border-(--pearl-aqua)/40 text-(--pearl-aqua) hover:bg-(--dark-teal)'
                }`}
              >{tab}</button>
            ))}
          </div>

          {/* Choose content */}
          <div>
            <div className="min-h-50">
              {activeTab === 'Profile' && hero.Profile}
              {activeTab === 'Bio' && <Bio />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}