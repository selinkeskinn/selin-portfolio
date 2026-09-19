export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
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
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-black px-6 py-3"
          >
            Contact Me
          </a>
        </div>

      </div>
    </main>
  );
}