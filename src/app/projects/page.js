export default function ProjectsPage() {
  return (
    <main className="py-20 space-y-16">
      <h1 className="text-4xl font-bold">Projects</h1>

      <p className="text-gray-600 max-w-2xl">
        A collection of full‑stack and frontend projects built using modern web
        technologies. Each project focuses on clean engineering, usability, and
        thoughtful design.
      </p>

      <div className="space-y-12 animate-stagger" >
        <div className="border rounded-xl p-6 hover:shadow-lg hover-lift">
          <img  
            src="/firstlook.png" 
            alt="FirstLook Salon Booking App screenshot" 
            className="rounded-lg border mb-4"
          />

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

        <div className="border rounded-xl p-6 hover:shadow-lg hover-lift">

          <img 
            src="/careerboards.png"
            alt="CareerBoards job tracking app screenshot"
            className="rounded-lg border mb-4"
          />

          <h2 className="text-2xl font-semibold mb-2">CareerBoards — MERN Job Tracking App</h2>

          <p className="text-gray-600 mb-4">
            A full‑stack job tracking application built with the MERN stack, designed to help 
            users visually manage their job applications. CareerBoards features custom drag‑and‑drop 
            functionality, protected routes, job detail modals, and note‑taking for each application.
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>Custom drag‑and‑drop job board (no external libraries)</li>
            <li>User authentication with JWT + protected routes</li>
            <li>CRUD operations for job cards and notes</li>
            <li>Modal‑style job details using background routing</li>
            <li>Dedicated job pages with notes and status updates</li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React Router</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS Modules</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Context API</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Fetch API</span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/jaydendavis746-debug/Mern-job-tracker-front-end-project" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              GitHub (Frontend)
            </a>
            <a 
              href="https://github.com/jaydendavis746-debug/Mern-job-tracker-back-end-project" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              GitHub (Backend)
            </a>
            <a 
              href="https://careerboards.netlify.app/" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>


        <div className="border rounded-xl p-6 hover:shadow-lg hover-lift">

          <img 
            src="/comicuniverse.png"
            alt="Comic Universe MEN stack app screenshot"
            className="rounded-lg border mb-4"
          />

          <h2 className="text-2xl font-semibold mb-2">Comic Universe — MEN Stack Comic Manager</h2>

          <p className="text-gray-600 mb-4">
            A full‑stack comic management platform built with the MEN stack (MongoDB, 
            Express, Node.js). Comic Universe allows users to browse, filter, and manage 
            comics, track genres, submit support requests, and personalise their experience 
            with features like night mode and favouriting.
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>User authentication with sign‑in and sign‑up</li>
            <li>CRUD functionality for comics and genres</li>
            <li>Genre‑based filtering and search</li>
            <li>Heart/favourite comics + “Most Popular” section</li>
            <li>Night mode toggle for improved UX</li>
            <li>Support request system with view/delete options</li>
            <li>RESTful API architecture with secure environment configuration</li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Mongoose</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">EJS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">bcrypt</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">express-session</span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/jaydendavis746-debug/Men-stack-comic-app" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              GitHub
            </a>
            <a 
              href="https://men-stack-comics-app-c28ddb016a20.herokuapp.com/" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>


        <div className="border rounded-xl p-6 hover:shadow-lg hover-lift">

          <img 
            src="/battleships.png"
            alt="Battleship JavaScript game screenshot"
            className="rounded-lg border mb-4"
          />

          <h2 className="text-2xl font-semibold mb-2">Battleship — Vanilla JavaScript Strategy Game</h2>

          <p className="text-gray-600 mb-4">
            A classic Battleship game built with HTML, CSS, and vanilla JavaScript, featuring a 
            fully custom drag‑and‑drop ship placement system, ship rotation, turn‑based gameplay, 
            and a simple CPU opponent. The project also includes an experimental multiplayer mode 
            using WebSockets, showcasing early exploration into real‑time game logic.
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>Custom drag‑and‑drop ship placement (no external libraries)</li>
            <li>Ship rotation logic with collision detection</li>
            <li>Turn‑based single‑player mode with hit/miss feedback</li>
            <li>CPU opponent using randomised attack logic</li>
            <li>Win/lose conditions with reset functionality</li>
            <li>Prototype multiplayer mode built with WebSockets</li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">HTML</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">WebSockets</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">DOM Manipulation</span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/jaydendavis746-debug/Battleship-game-project" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              GitHub
            </a>
            <a 
              href="https://jaydendavis746-debug.github.io/Battleship-game-project" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>




      </div>
    </main>
  )
}
