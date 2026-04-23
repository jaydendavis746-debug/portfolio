export default function Home() {
  return (
    <main className="py-40 space-y-32 text-center">

      <section className="space-y-6 max-w-3xl mx-auto animate-fadeIn animate-fadeUp">
       <h1 className="text-black dark:text-black text-4xl md:text-5xl font-bold leading-snug tracking-tight">
          Jayden Davis — Junior Software Engineer
        </h1>


        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Full‑stack developer with a strong foundation in modern web technologies, gained 
          through hands‑on project work and an intensive software engineering bootcamp. 
          I build clean, reliable, user‑focused applications with a focus on clarity, 
          structure, and premium UI design.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a 
            href="/projects" 
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-[1.02] transition"
          >
            View Projects
          </a>

          <a 
            href="/contact" 
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 hover:scale-[1.02] transition"
          >
            Contact Me
          </a>
        </div>
      </section>


      
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-lg animate-stagger">
          <span>JavaScript</span>
          <span>Python</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Django</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>Tailwind CSS</span>
        </div>
      </section>

    </main>
  );
}
