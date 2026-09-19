"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const text = {
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        menu: "Menu",
      },

      hero: {
        badge: "Software Engineer · AI & Software Development",
        description:
          "I build software and AI-powered products focused on solving real-world problems through simple and thoughtful digital experiences.",
        work: "Explore my work",
        contact: "Contact me",
        cv: "View CV",
      },

      about: {
        label: "About",
        title: "I enjoy turning ideas into useful software.",
        first:
          "I'm a Software Engineering graduate interested in software development, artificial intelligence and data. I enjoy learning new technologies and using them to build products that solve meaningful problems.",
        second:
          "My experience includes C#, Java, Python, TypeScript, Next.js, .NET, Spring Boot and enterprise software development.",
      },

      projects: {
        label: "Selected Work",
        title: "Projects",

        syllabaiType: "AI-Powered Learning Platform",
        syllabaiDescription:
          "An AI-supported academic platform designed for students and instructors. It brings courses, deadlines, announcements, feedback and syllabus information into one experience, while an AI assistant helps users interact with course content.",

        agenticType: "AI & Document Intelligence",
        agenticDescription:
          "An intelligent document analysis system that processes PDF, TXT and DOCX files and generates structured outputs including summaries, categories, keywords, named entities and key findings.",

        github: "GitHub",
        liveDemo: "Live Demo",
      },

      experience: {
        label: "Experience",

        halkbankRole: "Software Developer Intern",
        halkbankDescription:
          "Worked on enterprise banking applications using .NET and Windows Forms, including modernization of legacy banking screens and application flows.",

        takasbankRole: "Software Development Intern",
        takasbankDescription:
          "Gained experience with backend software development and software quality tools in a Java-based enterprise environment.",
      },

      contact: {
        label: "Contact",
        title: "Have an opportunity or an idea? Let's talk.",
        description:
          "I'm open to software engineering opportunities, collaborations and projects in software, AI and technology.",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        connect: "Connect with me",
        code: "View my code",
      },

      footer: {
        top: "Back to top ↑",
      },
    },

    tr: {
      nav: {
        about: "Hakkımda",
        projects: "Projeler",
        experience: "Deneyim",
        contact: "İletişim",
        menu: "Menü",
      },

      hero: {
        badge: "Yazılım Mühendisi · Yapay Zekâ & Yazılım Geliştirme",
        description:
          "Gerçek problemlere sade, işlevsel ve kullanıcı odaklı çözümler üreten yazılım ve yapay zekâ projeleri geliştiriyorum.",
        work: "Projelerimi incele",
        contact: "İletişime geç",
        cv: "CV'yi Görüntüle",
      },

      about: {
        label: "Hakkımda",
        title: "Fikirleri kullanışlı yazılımlara dönüştürmeyi seviyorum.",
        first:
          "Yazılım Mühendisliği mezunuyum. Yazılım geliştirme, yapay zekâ ve veri alanlarıyla ilgileniyorum. Yeni teknolojiler öğrenmeyi ve bunları gerçek problemlere çözüm üreten ürünler geliştirmek için kullanmayı seviyorum.",
        second:
          "C#, Java, Python, TypeScript, Next.js, .NET, Spring Boot ve kurumsal yazılım geliştirme alanlarında deneyim sahibiyim.",
      },

      projects: {
        label: "Seçili Çalışmalar",
        title: "Projeler",

        syllabaiType: "Yapay Zekâ Destekli Eğitim Platformu",
        syllabaiDescription:
          "Öğrenciler ve eğitmenler için geliştirilen yapay zekâ destekli akademik bir platform. Dersler, teslim tarihleri, duyurular, geri bildirimler ve ders içeriklerini tek deneyimde bir araya getirirken, AI asistanı kullanıcıların ders içerikleriyle etkileşim kurmasını sağlıyor.",

        agenticType: "Yapay Zekâ & Doküman Analizi",
        agenticDescription:
          "PDF, TXT ve DOCX dosyalarını analiz ederek özet, kategori, anahtar kelimeler, adlandırılmış varlıklar ve önemli bulgular gibi yapılandırılmış çıktılar oluşturan akıllı bir doküman analiz sistemi.",

        github: "GitHub",
        liveDemo: "Canlı Demo",
      },

      experience: {
        label: "Deneyim",

        halkbankRole: "Yazılım Geliştirici Stajyeri",
        halkbankDescription:
          ".NET ve Windows Forms kullanarak kurumsal bankacılık uygulamalarında çalıştım; eski bankacılık ekranlarının ve uygulama akışlarının modernizasyonunda görev aldım.",

        takasbankRole: "Yazılım Geliştirme Stajyeri",
        takasbankDescription:
          "Java tabanlı kurumsal bir ortamda backend geliştirme süreçleri ve yazılım kalite araçları konusunda deneyim kazandım.",
      },

      contact: {
        label: "İletişim",
        title: "Bir fırsatınız veya fikriniz mi var? Konuşalım.",
        description:
          "Yazılım mühendisliği fırsatlarına, iş birliklerine ve yazılım, yapay zekâ ve teknoloji alanındaki projelere açığım.",
        email: "E-posta",
        linkedin: "LinkedIn",
        github: "GitHub",
        connect: "Benimle bağlantı kur",
        code: "Kodlarımı incele",
      },

      footer: {
        top: "Yukarı dön ↑",
      },
    },
  };

  const t = text[language];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f8f6]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-5">
            <a
              href="#"
              className="font-semibold tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              Selin Keskin
            </a>

            <div className="flex items-center gap-3">
              {/* DESKTOP MENU */}
              <div className="hidden items-center gap-8 text-sm md:flex">
                <a href="#about" className="transition hover:opacity-50">
                  {t.nav.about}
                </a>

                <a href="#projects" className="transition hover:opacity-50">
                  {t.nav.projects}
                </a>

                <a href="#experience" className="transition hover:opacity-50">
                  {t.nav.experience}
                </a>

                <a href="#contact" className="transition hover:opacity-50">
                  {t.nav.contact}
                </a>
              </div>

              {/* LANGUAGE SWITCH */}
              <div className="flex rounded-full border border-black/10 p-1 text-xs">
                <button
                  onClick={() => setLanguage("tr")}
                  className={`rounded-full px-3 py-1.5 transition ${
                    language === "tr"
                      ? "bg-black text-white"
                      : "hover:bg-black/5"
                  }`}
                >
                  TR
                </button>

                <button
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-3 py-1.5 transition ${
                    language === "en"
                      ? "bg-black text-white"
                      : "hover:bg-black/5"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-full border border-black/10 px-4 py-2 text-xs transition hover:bg-black hover:text-white md:hidden"
              >
                {menuOpen ? "✕" : t.nav.menu}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="border-t border-black/5 py-5 md:hidden">
              <div className="flex flex-col gap-5 text-sm">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.about}
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.projects}
                </a>

                <a
                  href="#experience"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.experience}
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid min-h-[90vh] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:py-24">
        {/* HERO TEXT */}
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs sm:text-sm">
            {t.hero.badge}
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Selin Keskin
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-2xl sm:leading-9">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.03]"
            >
              {t.hero.work}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              {t.hero.contact}
            </a>

            <a
              href={
                language === "tr"
                  ? "/Selin-Keskin-CV-TR.pdf"
                  : "/Selin-Keskin-CV-EN.pdf"
              }
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              {t.hero.cv} ↗
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-3 text-sm text-black/50">
            <span>Python</span>
            <span>•</span>
            <span>C#</span>
            <span>•</span>
            <span>Java</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>.NET</span>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <div className="mx-auto w-full max-w-[320px] lg:max-w-[340px]">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[32px] bg-black/5">
            <Image
  src="/projects/selin-profile.jpeg"
  alt="Selin Keskin"
  fill
  priority
  sizes="(max-width: 1024px) 320px, 340px"
  className="object-cover object-[center_58%] transition duration-500 group-hover:scale-[1.02]"
/>-cover transition duration-500 group-hover:scale-[1.02]"

          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-black/40">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span>
              {language === "tr"
                ? "Yeni fırsatlara açığım"
                : "Open to opportunities"}
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">
              {t.about.label}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              {t.about.first}
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
              {t.about.second}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
      >
        <div className="mb-12 sm:mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-black/40">
            {t.projects.label}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.projects.title}
          </h2>
        </div>

        <div className="space-y-8">
          {/* SYLLABAI */}
          <article className="overflow-hidden rounded-[28px] border border-black/10 bg-white sm:rounded-[32px]">
            <div className="grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="flex items-center bg-[#f3f5f8] p-5 sm:p-8">
                <div className="group w-full overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-sm sm:rounded-[20px]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src="/projects/syllabai-dashboard.png"
                      alt="SyllabAI student dashboard"
                      width={1800}
                      height={1000}
                      className="h-full w-full object-cover object-left transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-7 sm:p-12">
                <p className="text-sm text-black/40">
                  {t.projects.syllabaiType}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  SyllabAI
                </h3>

                <p className="mt-6 max-w-xl leading-7 text-black/60">
                  {t.projects.syllabaiDescription}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    Next.js
                  </span>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    TypeScript
                  </span>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    AI
                  </span>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    UI/UX
                  </span>
                </div>

                <div className="mt-9">
                  <a
                    href="https://github.com/selinkeskinn/syllabai-final"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
                  >
                    {t.projects.github} ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* AGENTIC */}
          <article className="overflow-hidden rounded-[28px] border border-black/10 bg-white sm:rounded-[32px]">
            <div className="grid lg:grid-cols-2">
              {/* CONTENT */}
              <div className="order-2 flex flex-col justify-center p-7 sm:p-12 lg:order-1">
                <p className="text-sm text-black/40">
                  {t.projects.agenticType}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Agentic Document Understanding
                </h3>

                <p className="mt-6 max-w-xl leading-7 text-black/60">
                  {t.projects.agenticDescription}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    Python
                  </span>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    Streamlit
                  </span>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    NLP
                  </span>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                    AI
                  </span>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://agentic-document-understanding-system.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-75"
                  >
                    {t.projects.liveDemo} ↗
                  </a>

                  <a
                    href="https://github.com/selinkeskinn/agentic-document-understanding-system"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
                  >
                    {t.projects.github} ↗
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="order-1 flex items-center bg-[#f3f5f8] p-5 sm:p-8 lg:order-2">
                <div className="group w-full overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-sm sm:rounded-[20px]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src="/projects/agentic-document.png"
                      alt="Agentic Document Understanding System"
                      width={1800}
                      height={1000}
                      className="h-full w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">
              {t.experience.label}
            </p>
          </div>

          <div className="divide-y divide-black/10">
            {/* HALKBANK */}
            <div className="pb-8">
              <h3 className="text-2xl font-semibold">
                Halkbank
              </h3>

              <p className="mt-1 text-black/50">
                {t.experience.halkbankRole}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-black/60">
                {t.experience.halkbankDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  C#
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  .NET
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  WinForms
                </span>
              </div>
            </div>

            {/* TAKASBANK */}
            <div className="py-8">
              <h3 className="text-2xl font-semibold">
                Takasbank
              </h3>

              <p className="mt-1 text-black/50">
                {t.experience.takasbankRole}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-black/60">
                {t.experience.takasbankDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  Java
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  Spring Boot
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  Maven
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
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
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
      >
        <div className="border-t border-black/10 pt-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                {t.contact.label}
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.contact.title}
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
                {t.contact.description}
              </p>
            </div>

            <div className="flex flex-col justify-end">
              {/* EMAIL */}
              <a
                href="mailto:selinkeskin11@gmail.com"
                className="group border-b border-black/10 py-6"
              >
                <p className="text-sm text-black/40">
                  {t.contact.email}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="break-all text-lg font-medium sm:text-xl">
                    selinkeskin11@gmail.com
                  </p>

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/selin-keskin-99451421b/"
                target="_blank"
                rel="noreferrer"
                className="group border-b border-black/10 py-6"
              >
                <p className="text-sm text-black/40">
                  {t.contact.linkedin}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-medium sm:text-xl">
                    {t.contact.connect}
                  </p>

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/selinkeskinn"
                target="_blank"
                rel="noreferrer"
                className="group border-b border-black/10 py-6"
              >
                <p className="text-sm text-black/40">
                  {t.contact.github}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-medium sm:text-xl">
                    {t.contact.code}
                  </p>

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-black/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Selin Keskin</p>

        <a
          href="#"
          className="transition hover:text-black"
        >
          {t.footer.top}
        </a>
      </footer>
    </main>
  );
}