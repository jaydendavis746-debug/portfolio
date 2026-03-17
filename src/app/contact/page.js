export default function ContactPage() {
  return (
    <main className="py-20 max-w-2xl mx-auto space-y-10 animate-fadeUp">
      
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-600 text-lg">
          I’m always open to new opportunities, collaborations, or conversations about 
          software engineering. If you’d like to reach out, the best way to contact me 
          is by email — I’d love to hear from you.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <a 
            href="mailto:jaydendavis746@gmail.com"
            className="text-blue-600 hover:underline text-lg"
          >
            jaydendavis746@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a 
                href="https://github.com/jaydendavis746-debug" 
                target="_blank" 
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="www.linkedin.com/in/jayden-davis-8292bb379" 
                target="_blank" 
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
