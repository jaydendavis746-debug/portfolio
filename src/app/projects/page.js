export default function ProjectsPage() {
  return (
    <main className="py-20 space-y-16">
      <h1 className="text-4xl font-bold">Projects</h1>

      <p className="text-gray-600 max-w-2xl">
        A collection of full‑stack and frontend projects built using modern web
        technologies. Each project focuses on clean engineering, usability, and
        thoughtful design.
      </p>

      <div className="space-y-12">
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <img  src="/firstlook.png" alt="FirstLook Salon Booking App screenshot" className="rounded-lg border mb-4"/>

          <h2 className="text-2xl font-semibold mb-2">FirstLook — Salon Booking Platform</h2>

          <p className="text-gray-600 mb-4">
            A full‑stack luxury salon booking platform built with Django, designed to deliver 
            an editorial‑grade beauty experience. The app includes a complete client booking 
            flow, stylist dashboards, availability management, and a cohesive glass‑UI design 
            system inspired by high‑fashion brands.
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>Client booking flow with real‑time stylist availability</li>
            <li>Role‑based dashboards for stylists</li>
            <li>CRUD management for services, bookings, and availability</li>
            <li>Frosted‑glass UI with animated micro‑interactions</li>
            <li>Reusable Django templates + global CSS design system</li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Django</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PostgreSQL</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">HTML</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Git</span>
          </div>

          <div className="flex gap-4">
            <a 
            href="https://github.com/jaydendavis746-debug/django-crud-app-salon-project" 
            className="text-blue-600 hover:underline"
            target="_blank">
            GitHub
            </a>
            <a 
            href="https://firstlook-salon-3904214644a9.herokuapp.com/" 
            className="text-blue-600 hover:underline"
            target="_blank">
            Live Demo
            </a>
          </div>
        </div>





        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">CareerBoards</h2>

          <p className="text-gray-600 mb-4">
            Short description of the project goes here. Explain what it does and why
            you built it.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Javascript </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>


      </div>
    </main>
  )
}
