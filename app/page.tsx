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

    </main>
  );
}