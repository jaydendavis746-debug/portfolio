export default function AboutPage() {
  return (
    <main className="py-20 space-y-16 max-w-3xl mx-auto">
      
      <section className="space-y-4  animate-fadeIn">
        <h1 className="text-black dark:text-black text-4xl md:text-5xl font-bold leading-snug tracking-tight">
          About Me
        </h1>
        <p className="text-gray-600 text-lg">
          Hi, I’m Jayden — a full‑stack developer who blends clean engineering with 
          editorial‑grade design. I build modern, thoughtful applications that balance 
          technical reliability with a premium user experience.
        </p>
      </section>

      <section className="space-y-4  animate-fadeIn">
        <h2 className="text-2xl font-semibold">My Journey</h2>
        <p className="text-gray-600">
          I started my development journey through a software engineering bootcamp, where 
          I built full‑stack applications across multiple stacks — MEN, MERN, Django, and 
          now Next.js. Each project pushed me to solve real problems, design clean 
          interfaces, and understand how to build systems that feel good to use.
        </p>
        <p className="text-gray-600">
          Throughout my projects, I’ve used Trello to plan features, track progress, and stay 
          organised. It’s helped me build apps with clear structure while still adapting as ideas evolve.
        </p>
        <p className="text-gray-600">
          Since then, I’ve continued sharpening my skills by building projects that 
          challenge both my logic and my creativity. Whether it’s a luxury salon booking 
          platform, a drag‑and‑drop job tracker, or a pure‑JavaScript strategy game, I’m 
          always looking for ways to push my understanding further.
        </p>
      </section>

      <section className="space-y-4  animate-fadeIn">
        <h2 className="text-2xl font-semibold">How I Work</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Clean, intentional UI inspired by editorial and luxury design</li>
          <li>Reliable backend logic and structured data modelling</li>
          <li>User‑focused thinking and natural interactions</li>
          <li>Fast learning and adaptability across frameworks</li>
        </ul>
      </section>

      <section className="space-y-4  animate-fadeIn">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>

        <div className="space-y-2">
          <h3 className="font-medium">Frontend</h3>
          <p className="text-gray-600">React, Next.js, Tailwind CSS, JavaScript, HTML/CSS, EJS</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Backend</h3>
          <p className="text-gray-600">Node.js, Express, Django,Python, MongoDB, PostgreSQL, REST APIs</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Other</h3>
          <p className="text-gray-600">Git, Postman, Trello, Lucidcharts,Miro, WebSockets (prototype), Vercel, Heroku, Netlify, JWT, Sessions</p>
        </div>
      </section>

      <section className="space-y-4  animate-fadeIn">
        <h2 className="text-2xl font-semibold">Beyond the Code</h2>
        <p className="text-gray-600">
          Before software engineering, I worked as a children’s sports coach — rugby and 
          football. That experience taught me patience, communication, and how to break 
          down complex ideas into simple steps. Those skills translate directly into how 
          I build software today: clear structure, thoughtful planning, and a focus on 
          people.
        </p>
      </section>

      <section className="space-y-4  animate-fadeIn">
        <h2 className="text-2xl font-semibold">What I’m Working Toward</h2>
        <p className="text-gray-600">
          I’m currently focused on refining my portfolio, deepening my understanding of 
          modern frameworks, building production‑ready applications, and securing my first 
          role as a junior software engineer.
        </p>
      </section>

    </main>
  );
}
