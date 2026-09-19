export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6">
        <p className="text-lg font-semibold">
          Selin Keskin
        </p>

        <div className="flex gap-8">
          <a href="#about" className="hover:opacity-60">
            About
          </a>

          <a href="#projects" className="hover:opacity-60">
            Projects
          </a>

          <a href="#experience" className="hover:opacity-60">
            Experience
          </a>

          <a href="#contact" className="hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>


      {/* HERO */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">

          <p className="text-lg mb-4">
            Hello, I&apos;m
          </p>

          <h1 className="text-6xl font-bold">
            Selin Keskin
          </h1>

          <h2 className="mt-4 text-2xl">
            Software Engineer
          </h2>

          <p className="mt-6 text-lg leading-8">
            I build software and AI-powered products with a focus on
            creating useful and simple digital experiences.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-white hover:opacity-80"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black px-6 py-3 hover:bg-black hover:text-white"
            >
              Contact Me
            </a>

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            I enjoy turning ideas into software.
          </h2>

          <p className="mt-6 text-lg leading-8">
            I&apos;m a Software Engineering graduate interested in software
            development, artificial intelligence and data. I enjoy building
            applications that solve real problems and learning new
            technologies along the way.
          </p>

          <p className="mt-4 text-lg leading-8">
            I have worked with technologies including C#, Java, Python,
            TypeScript, Next.js, .NET and Spring Boot.
          </p>

        </div>
      </section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="w-full max-w-5xl">

          <p className="text-sm uppercase tracking-widest">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Projects
          </h2>

          <p className="mt-4 text-lg">
            A selection of projects I&apos;ve worked on.
          </p>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* SYLLABAI */}
            <div className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">

              <p className="text-sm">
                AI-Powered Learning Platform
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                SyllabAI
              </h3>

              <p className="mt-4 leading-7">
                An AI-powered education platform designed to create more
                personalized and useful learning experiences for students
                and instructors.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  Next.js
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  TypeScript
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  AI
                </span>
              </div>

              <p className="mt-8 text-sm font-medium">
                Case study coming soon →
              </p>

            </div>


            {/* AGENTIC DOCUMENT UNDERSTANDING */}
            <div className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">

              <p className="text-sm">
                AI & Document Intelligence
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Agentic Document Understanding
              </h3>

              <p className="mt-4 leading-7">
                A document analysis application that extracts summaries,
                keywords, entities and key findings from uploaded PDF
                documents.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  Python
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  Streamlit
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  NLP
                </span>

              </div>

              <a
                href="https://github.com/selinkeskinn/agentic-document-understanding-system"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block font-medium hover:opacity-60"
              >
                View on GitHub →
              </a>

            </div>

          </div>

        </div>
      </section>
            {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="w-full max-w-4xl">

          <p className="text-sm uppercase tracking-widest">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Where I&apos;ve worked
          </h2>

          <div className="mt-12 space-y-10">

            {/* HALKBANK */}
            <div className="border-l-2 border-gray-200 pl-8">

              <p className="text-sm">
                Software Developer Intern
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Halkbank
              </h3>

              <p className="mt-4 leading-7">
                Worked on enterprise banking applications using .NET and
                Windows Forms, including the modernization of legacy banking
                screens and application flows.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  C#
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  .NET
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  WinForms
                </span>
              </div>

            </div>


            {/* TAKASBANK */}
            <div className="border-l-2 border-gray-200 pl-8">

              <p className="text-sm">
                Software Development Intern
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Takasbank
              </h3>

              <p className="mt-4 leading-7">
                Gained experience with backend software development and
                software quality tools in a Java-based enterprise environment.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  Java
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  Spring Boot
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  Maven
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  SonarQube
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>
            {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="w-full max-w-4xl text-center">

          <p className="text-sm uppercase tracking-widest">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 text-lg leading-8">
            I&apos;m open to software development opportunities,
            collaborations and interesting projects.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:selinkeskin11@gmail.com"
              className="rounded-full bg-black px-6 py-3 text-white hover:opacity-80"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/selin-keskin-99451421b/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black px-6 py-3 hover:bg-black hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/selinkeskinn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black px-6 py-3 hover:bg-black hover:text-white"
            >
              GitHub
            </a>

          </div>

          <p className="mt-16 text-sm">
            © 2026 Selin Keskin
          </p>

        </div>
      </section>

    </main>
  );
}