export default function Home() {
  return (
    <main className="py-20 space-y-20">

      <h1 className="text-5xl font-bold leading-tight">
        Jayden Davis — Junior Software Engineer
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Software engineer with a strong foundation in full‑stack development, gained through
        hands‑on project work and an intensive software engineering bootcamp. I build clean,
        reliable, user‑focused applications with a focus on clarity, performance, and modern
        web practices.
      </p>
    

    <section className="mt-16">
  <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <a href="/projects" className="p-6 border rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">CareerBoards - Job Tracker App</h3>
      <p className="text-gray-600">A full‑stack application for managing job applications and tracking progress.</p>
    </a>

    <a href="/projects" className="p-6 border rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">Firtslook - Salon Booking App</h3>
      <p className="text-gray-600">A booking platform with role‑based access, scheduling, and admin dashboard.</p>
    </a>
  </div>
</section>

<section className="mt-20">
  <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
    <span>JavaScript</span>
    <span>Python</span>
    <span>React</span>
    <span>Django</span>
    <span>PostgreSQL</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MongoDB</span>
    <span>Next.js</span>
    <span>Tailwind CSS</span>
  </div>
</section>

</main>
  )
}
