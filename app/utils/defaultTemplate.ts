export const defaultHtml = `<article
  lang="en"
  class="relative bg-white w-[210mm] min-w-[210mm] flex h-[594mm]"
>
  <aside
    class="w-[38%] text-white bg-black px-5 py-5 flex flex-col gap-10 leading-[16px] text-[10pt]"
  >
    <header class="flex flex-col gap-4">
      <h1
        class="font-semibold leading-[50px] text-[32pt]"
        style="font-family: Amatic SC"
      >
        Rasten Remizov
      </h1>
      <p class="font-mono text-[14pt] leading-[28px]">
        Senior Software Developer
      </p>
    </header>
    <img
      class="w-full rounded-[14px]"
      src="https://i.postimg.cc/kM2xdFzx/photo-2024-02-20-18-49-10.jpg"
      alt="Profile picture missing"
    />
    <nav class="flex flex-col gap-2 font-mono">
      <a
        href="https://rastuharem.netlify.app"
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center text-blue-200 gap-2 break-word no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="size-4 fill-white"
        >
          <path
            d="M11.767 3.166a6.411 6.411 0 019.067 9.067l-.001.001-1.716 1.717a1.558 1.558 0 11-2.204-2.204l1.717-1.717a3.295 3.295 0 10-4.659-4.66l-.002.002-1.716 1.716a1.558 1.558 0 01-2.204-2.204l1.717-1.717z"
          ></path>
          <path
            d="M14.34 7.457a1.558 1.558 0 112.203 2.204l-6.864 6.863a1.558 1.558 0 01-2.203-2.203l6.863-6.864z"
          ></path>
          <path
            d="M4.902 10.03a1.558 1.558 0 012.204 2.204L5.39 13.95a3.295 3.295 0 004.66 4.66l1.715-1.715a1.558 1.558 0 012.204 2.204l-1.715 1.715a6.374 6.374 0 01-4.535 1.878 6.411 6.411 0 01-4.533-10.944l1.716-1.717z"
          ></path>
        </svg>
        rastuharem.netlify.app
      </a>
      <a
        href="https://rastuharem.netlify.app"
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center text-blue-200 gap-2 break-word no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="size-4 fill-white"
        >
          <title>Telegram</title>
          <path
            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
          ></path>
        </svg>
        Telegram
      </a>
      <a
        href="mailto:hi@rastuharem.me"
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center text-blue-200 gap-2 break-word no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="size-4 fill-white"
        >
          <title>Email</title>
          <path
            d="M19.68 20c1.414 0 2.56-1.194 2.56-2.667V10.5l-9.765 4.072a1.005 1.005 0 01-.475.095c-.232 0-.392-.034-.472-.099L1.76 10.5v6.833C1.76 18.806 2.906 20 4.32 20h15.36z"
          ></path>
          <path
            d="M12 11.9l10.24-4.267v-.966C22.24 5.194 21.094 4 19.68 4H4.32C2.906 4 1.76 5.194 1.76 6.667v.966L12 11.9z"
          ></path>
        </svg>
        hi@rastuharem.me
      </a>
      <a
        href="https://www.linkedin.com/in/rasten-remizov/"
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center text-blue-200 gap-2 break-word no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="size-4 fill-white"
        >
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          ></path>
        </svg>
        LinkedIn
      </a>
      <a
        href="https://github.com/rastuhacode"
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center text-blue-200 gap-2 break-word no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="size-4 fill-white"
        >
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          ></path>
        </svg>
        GitHub
      </a>
    </nav>
    <section class="flex flex-col gap-4 break-word">
      <h2
        class="border-white border-b border-t text-center py-1 font-bold uppercase text-[13.5pt] leading-[22px] tracking-[0.5px]"
      >
        Profile
      </h2>
      <p>
        <strong>Senior Software Developer</strong>
        with
        <strong>4+ years of production experience</strong>
        delivering scalable
        <strong>SPA and SSR applications</strong>
        using
        <strong>Vue 3, Nuxt 3/4, and TypeScript.</strong>
      </p>
      <p>
        Strong focus on
        <strong>performance optimization, frontend architecture, and UX</strong
        >, with hands-on experience improving
        <strong>Core Web Vitals, bundle size, and state management.</strong>
      </p>
      <p>
        Cross-ecosystem expertise with
        <strong>React, Next.js, Solid.js, Svelte, and many more,</strong>
        enabling effective collaboration, gradual migrations, and informed
        technology decisions.
      </p>
      <p>
        Driven by translating product and business requirements into
        <strong>clean, testable, and accessible UI solutions</strong>, while
        contributing to
        <strong
          >code quality, frontend standards, and long-term technical
          strategy</strong
        >
      </p>
    </section>
  </aside>

  <main
    class="bg-white w-full px-5 pb-5 pt-8 text-black flex flex-col gap-14 leading-[16px] text-[10pt]"
  >
    <section id="Professional Experience" class="flex flex-col gap-7">
      <h2
        class="border-black border-b border-t text-center py-1 font-bold uppercase text-[13.5pt] leading-[22px] tracking-[0.5px]"
      >
        Professional Experience
      </h2>

      <article class="flex flex-col gap-2">
        <header class="flex flex-col gap-0.5">
          <div class="flex items-center leading-[18px] text-[11.5pt]">
            <a
              href="https://astra.ru/software-services/astra-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-800 no-underline flex items-center"
            >
              <span class="font-bold">ASTRA Consulting</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                class="size-4 fill-blue-800"
              >
                <path
                  d="M17.6 24.32l-2.46 2.44a4 4 0 01-5.62 0 3.92 3.92 0 010-5.55l4.69-4.65a4 4 0 015.62 0 3.86 3.86 0 011 1.71 2 2 0 00.27-.27l1.29-1.28a5.89 5.89 0 00-1.15-1.62 6 6 0 00-8.44 0l-4.7 4.69a5.91 5.91 0 000 8.39 6 6 0 008.44 0l3.65-3.62h-.5a8 8 0 01-2.09-.24z"
                ></path>
                <path
                  d="M28.61 7.82a6 6 0 00-8.44 0l-3.65 3.62h.49a8 8 0 012.1.28l2.46-2.44a4 4 0 015.62 0 3.92 3.92 0 010 5.55l-4.69 4.65a4 4 0 01-5.62 0 3.86 3.86 0 01-1-1.71 2 2 0 00-.28.23l-1.29 1.28a5.89 5.89 0 001.15 1.62 6 6 0 008.44 0l4.69-4.65a5.92 5.92 0 000-8.39z"
                ></path>
                <path fill="none" d="M0 0H36V36H0z"></path>
              </svg>
            </a>
            <span class="font-bold">, Senior Software Developer</span>
          </div>
          <p class="flex flex-wrap leading-[18px]">
            02/2024 – Present
            <span class="whitespace-pre"> | </span>
            Moscow, Russia
          </p>
        </header>
        <p>
          Product and project-based development of a
          <strong>low-code CMS platform</strong>
          and multiple applications built on top of it. Worked in an
          <strong>Agile team of 6 developers</strong>, collaborating closely on
          architecture, feature design, and delivery. Integrated frontend and
          backend systems via <strong>REST APIs and WebSockets</strong>.
        </p>
        <ul class="list-inside break-word flex flex-col gap-2">
          <li>
            <strong
              >Designed and developed a full-fledged frontend application
              builder</strong
            >, including <strong>AST-based application model</strong>, visual
            editor, bundler, Vue component parser, and runtime renderer for
            generating applications dynamically
          </li>
          <li>
            <strong>Implemented advanced performance optimizations</strong>
            for the visual editor, including
            <strong>viewport culling</strong>,
            <strong>QuadTree-based selection</strong>, and
            <strong>topological graph sorting for hoisting</strong>,
            significantly improving responsiveness on large projects
          </li>
          <li>
            <strong>Built and maintained a monorepo</strong>
            for frontend application tooling using
            <strong>pnpm, Turborepo, TypeScript, Vite, and Changesets</strong>,
            enabling scalable development and versioning
          </li>
          <li>
            <strong>Developed core CMS platform functionality</strong>: data
            rendering components, authorization, project and entity management,
            tables, drag-and-drop areas, and
            <strong>AI-assisted form generation</strong>
          </li>
          <li>
            <strong>Created a backend microservice</strong>
            for building generated frontend applications using
            <strong>Node.js, NestJS, and TypeScript</strong>, enabling automated
            compilation and deployment workflows
          </li>
          <li>
            <strong>Implemented real-time build status updates</strong>
            via
            <strong>WebSockets</strong>, improving transparency and user
            feedback during application generation
          </li>
          <li>
            <strong>Led architectural refactoring initiatives</strong>,
            including migration to
            <strong>Feature-Sliced Design (FSD)</strong>
            and removal of unused dependencies, improving maintainability and
            long-term scalability
          </li>
          <li>
            <strong>Migrated a legacy React application to Vue/Nuxt</strong>,
            reducing technical debt and unifying the frontend stack
          </li>
          <li>
            <strong>Upgraded and migrated npm dependencies</strong>, including
            major-version upgrades, ensuring platform stability and security
          </li>
          <li>
            <strong>Led task estimation and module ownership</strong>, conducted
            code reviews, and mentored teammates on complex technical challenges
          </li>
          <li>
            <strong>Contributed to Open Source</strong>, submitting a fix to
            <strong>bpmn-js</strong> to unblock product localization
          </li>
        </ul>
        <p>
          <span class="text-[12pt] font-bold text-violet-800">
            Tech Stack
          </span>
          <br />
          <strong
            >Nuxt / Vue 3, TypeScript, Vite, TailwindCSS, Pinia, shadcn-vue,
            REST API, WebSockets, Node.js, NestJS, AST, Babel, pnpm, Turborepo,
            Agile</strong
          >
        </p>
      </article>

      <article class="flex flex-col gap-2">
        <header class="flex flex-col gap-0.5">
          <div class="flex items-center leading-[18px] text-[11.5pt]">
            <a
              href="https://www.huawei.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-800 no-underline flex items-center"
            >
              <span class="font-bold">HUAWEI</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                class="size-4 fill-blue-800"
              >
                <path
                  d="M17.6 24.32l-2.46 2.44a4 4 0 01-5.62 0 3.92 3.92 0 010-5.55l4.69-4.65a4 4 0 015.62 0 3.86 3.86 0 011 1.71 2 2 0 00.27-.27l1.29-1.28a5.89 5.89 0 00-1.15-1.62 6 6 0 00-8.44 0l-4.7 4.69a5.91 5.91 0 000 8.39 6 6 0 008.44 0l3.65-3.62h-.5a8 8 0 01-2.09-.24z"
                ></path>
                <path
                  d="M28.61 7.82a6 6 0 00-8.44 0l-3.65 3.62h.49a8 8 0 012.1.28l2.46-2.44a4 4 0 015.62 0 3.92 3.92 0 010 5.55l-4.69 4.65a4 4 0 01-5.62 0 3.86 3.86 0 01-1-1.71 2 2 0 00-.28.23l-1.29 1.28a5.89 5.89 0 001.15 1.62 6 6 0 008.44 0l4.69-4.65a5.92 5.92 0 000-8.39z"
                ></path>
                <path fill="none" d="M0 0H36V36H0z"></path>
              </svg>
            </a>
            <span class="font-bold">, Frontend Developer</span>
          </div>
          <p class="flex flex-wrap leading-[18px]">
            11/2020 – 02/2024
            <span class="whitespace-pre"> | </span>
            Nizhniy Novgorod, Russia
          </p>
        </header>
        <p>
          Product development of a
          <strong>cloud-based CAD/CAE platform</strong>
          used for engineering workflows. Worked in an
          <strong>Agile frontend team of 6 developers</strong>, collaborating
          via <strong>Jira and Confluence</strong>, and integrating with
          multiple backend services through <strong>REST APIs</strong>.
        </p>
        <ul class="list-inside break-word flex flex-col gap-2">
          <li>
            <strong>Led the migration</strong>
            of a large production frontend from
            <strong>Vue CLI (Webpack) to Vite</strong>, significantly improving
            build speed, developer experience, and configuration maintainability
          </li>
          <li>
            <strong>Developed complex, high-performance UI components</strong>
            using
            <strong>Vue 3, TypeScript, Pinia, and SCSS</strong>, including
            <strong>virtual scrolling</strong>,
            <strong>dynamic widgets generated from JSON schemas</strong>, and
            <strong>role-based authorization</strong>
          </li>
          <li>
            <strong>Implemented end-to-end frontend architecture</strong>
            for core product features such as
            <strong
              >project listing, configuration persistence, and settings
              management</strong
            >, integrating with multiple backend services via REST APIs
          </li>

          <li class="mt-8">
            <strong
              >Designed and implemented an abstraction layer over
              Playwright</strong
            >, enabling engineers to write
            <strong>E2E tests faster and more consistently</strong>, improving
            test scalability and maintainability
          </li>
          <li>
            <strong>Built and maintained automated testing coverage</strong>,
            writing
            <strong>E2E tests with Playwright</strong>
            and
            <strong>unit tests with Vitest</strong>, contributing to higher
            release confidence
          </li>
          <li>
            <strong>Collaborated cross-functionally and internationally</strong
            >, discussing requirements and reviewing code in
            <strong>English</strong> with distributed teams, including
            colleagues from China
          </li>
          <li>
            <strong>Performed code reviews and task estimation</strong>,
            contributing to sprint planning, technical decision-making, and
            frontend quality standards
          </li>
          <li>
            <strong>Developed a backend microservice prototype</strong>
            using
            <strong>Node.js (Express)</strong> for
            <strong>JWT-based authentication</strong>, strengthening
            understanding of full-stack architecture
          </li>
        </ul>
        <p>
          <span class="text-[12pt] font-bold text-violet-800">
            Tech Stack
          </span>
          <br />
          <strong
            >Vue 3, TypeScript, Pinia, Vite, SCSS, REST API, Playwright, Vitest,
            Node.js, Express, JWT, Agile, Jira, Confluence</strong
          >
        </p>
      </article>
    </section>

    <section id="Education" class="flex flex-col gap-7">
      <h2
        class="border-black border-b border-t text-center py-1 font-bold uppercase text-[13.5pt] leading-[22px] tracking-[0.5px]"
      >
        Education
      </h2>

      <article class="flex flex-col gap-2">
        <header class="flex flex-col gap-0.5">
          <div class="flex items-center leading-[18px] text-[11.5pt]">
            <a
              href="https://www.linkedin.com/school/%D0%BD%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-%D0%B8%D0%BC.-%D0%BD.%D0%B8.-%D0%BB%D0%BE%D0%B1%D0%B0%D1%87%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BD%D0%BD%D0%B3%D1%83-/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-800 no-underline flex items-center"
            >
              <span class="font-bold"
                >State University of Nizhniy Novgorod named after
                N.I.Lobachevsky</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                class="size-4 fill-blue-800"
              >
                <path
                  d="M17.6 24.32l-2.46 2.44a4 4 0 01-5.62 0 3.92 3.92 0 010-5.55l4.69-4.65a4 4 0 015.62 0 3.86 3.86 0 011 1.71 2 2 0 00.27-.27l1.29-1.28a5.89 5.89 0 00-1.15-1.62 6 6 0 00-8.44 0l-4.7 4.69a5.91 5.91 0 000 8.39 6 6 0 008.44 0l3.65-3.62h-.5a8 8 0 01-2.09-.24z"
                ></path>
                <path
                  d="M28.61 7.82a6 6 0 00-8.44 0l-3.65 3.62h.49a8 8 0 012.1.28l2.46-2.44a4 4 0 015.62 0 3.92 3.92 0 010 5.55l-4.69 4.65a4 4 0 01-5.62 0 3.86 3.86 0 01-1-1.71 2 2 0 00-.28.23l-1.29 1.28a5.89 5.89 0 001.15 1.62 6 6 0 008.44 0l4.69-4.65a5.92 5.92 0 000-8.39z"
                ></path>
                <path fill="none" d="M0 0H36V36H0z"></path>
              </svg>
            </a>
          </div>
          <span class="font-bold text-[11.5pt]">
            Bachelor's degree, Applied Computer Science
          </span>
          <p class="flex flex-wrap leading-[18px]">
            09/2019 – 09/2023
            <span class="whitespace-pre"> | </span>
            Nizhniy Novgorod, Russia
          </p>
        </header>
        <ul class="list-inside break-word flex flex-col gap-2">
          <li>
            Focused on computer science fundamentals and software engineering,
            with coursework in algorithms, data structures, databases, operating
            systems, and computer networks
          </li>
          <li>
            Gained practical experience developing algorithmic and
            computationally intensive programs in C# and C++, applying data
            structures, graph algorithms, and optimization techniques.
            Additionally, explored modern frontend development, building React
            applications as part of study work and side projects
          </li>
          <li>
            Completed several team projects through GitHub repos, gaining
            practical experience in building applications from concept to
            deployment
          </li>
        </ul>
      </article>
    </section>

    <section id="Languages" class="flex flex-col gap-7">
      <h2
        class="border-black border-b border-t text-center py-1 font-bold uppercase text-[13.5pt] leading-[22px] tracking-[0.5px]"
      >
        Languages
      </h2>

      <dl class="grid grid-cols-2">
        <div class="flex flex-col">
          <dt class="font-bold">English</dt>
          <dd>C1 IELTS</dd>
        </div>
        <div class="flex flex-col">
          <dt class="font-bold">Russian</dt>
          <dd>Native</dd>
        </div>
      </dl>
    </section>
  </main>
</article>
`

export const defaultCss = `/* Custom styles for your CV */
/* You can use plain CSS here alongside Tailwind classes in the HTML */
/* Tip: A4 is 210mm width x 297mm height */

@page {
  size: A4;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  /* We can use our custom fonts! */
  font-family: "Mulish", sans-serif;
}

li::marker {
  content: "–";
}

strong {
  font-weight: bold;
}

/* Ensure the CV fits within a single A4 page when printed */
@media print {
  body {
    width: 210mm;
    min-height: 297mm;
  }
}
`

export const defaultHtmlHead = `<!-- Remember that if you are loading external scripts, the request is being sent on each edit! -->
<!-- We are working on solution. For now try to add custom at the end of your CV creation. -->

<!-- You can add custom head content here like fonts, meta tags, etc. -->
<!-- For ex. install 'Mulish' and 'Amatic SC' fonts from Google Fonts and use them in your CSS -->

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
  rel="stylesheet"
/>
`
