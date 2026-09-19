"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "tr">("en");

  const text = {
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
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
          "An AI-powered education platform designed to create personalized and useful learning experiences for students and instructors.",
        comingSoon: "Case study coming soon →",

        agenticType: "AI & Document Intelligence",
        agenticDescription:
          "A document analysis application that extracts summaries, keywords, entities and key findings from uploaded PDF documents.",
        github: "View on GitHub →",
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
          "Öğrenciler ve eğitmenler için daha kişiselleştirilmiş ve verimli öğrenme deneyimleri oluşturmayı amaçlayan yapay zekâ destekli bir eğitim platformu.",
        comingSoon: "Proje detayları yakında →",

        agenticType: "Yapay Zekâ & Doküman Analizi",
        agenticDescription:
          "Yüklenen PDF dokümanlarından özet, anahtar kelimeler, varlıklar ve önemli bulgular çıkaran bir doküman analiz uygulaması.",
        github: "GitHub'da görüntüle →",
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
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f8f6]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="font-semibold tracking-tight">
            Selin Keskin
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden gap-8 text-sm md:flex">
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
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-24">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm">
            {t.hero.badge}
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl">
            Selin Keskin
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-black/60 sm:text-2xl sm:leading-9">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
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
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-black/40">
            {t.projects.label}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* SYLLABAI */}
          <article className="group flex min-h-[430px] flex-col justify-between rounded-[32px] border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div>
              <p className="text-sm text-black/40">
                {t.projects.syllabaiType}
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                SyllabAI
              </h3>

              <p className="mt-6 leading-7 text-black/60">
                {t.projects.syllabaiDescription}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  Next.js
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  TypeScript
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  AI
                </span>
              </div>

              <p className="mt-8 text-sm font-medium">
                {t.projects.comingSoon}
              </p>
            </div>
          </article>

          {/* AGENTIC DOCUMENT UNDERSTANDING */}
          <article className="group flex min-h-[430px] flex-col justify-between rounded-[32px] border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div>
              <p className="text-sm text-black/40">
                {t.projects.agenticType}
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Agentic Document Understanding
              </h3>

              <p className="mt-6 leading-7 text-black/60">
                {t.projects.agenticDescription}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  Python
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  Streamlit
                </span>

                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">
                  NLP
                </span>
              </div>

              <a
                href="https://github.com/selinkeskinn/agentic-document-understanding-system"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block text-sm font-medium transition group-hover:translate-x-1"
              >
                {t.projects.github}
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
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
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
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
                  <p className="text-lg font-medium sm:text-xl">
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
      <footer className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-sm text-black/40">
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