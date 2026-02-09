export const defaultHtml = `<div class="max-w-[210mm] mx-auto bg-white text-gray-900 font-sans">
  <!-- Header -->
  <header class="bg-slate-800 text-white px-10 py-8">
    <h1 class="text-3xl font-bold tracking-tight">Jane Doe</h1>
    <p class="text-lg text-slate-300 mt-1">Senior Frontend Developer</p>
    <div class="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-sm text-slate-300">
      <span>jane.doe@email.com</span>
      <span>+1 (555) 123-4567</span>
      <span>San Francisco, CA</span>
      <span>github.com/janedoe</span>
    </div>
  </header>

  <div class="px-10 py-8 space-y-7">
    <!-- Summary -->
    <section>
      <h2 class="text-lg font-semibold text-slate-800 border-b-2 border-slate-300 pb-1 mb-3 uppercase tracking-wide">Summary</h2>
      <p class="text-sm leading-relaxed text-gray-700">
        Frontend developer with 6+ years of experience building performant, accessible web applications.
        Skilled in Vue.js, React, TypeScript, and modern CSS. Passionate about clean code, design systems,
        and creating exceptional user experiences.
      </p>
    </section>

    <!-- Experience -->
    <section>
      <h2 class="text-lg font-semibold text-slate-800 border-b-2 border-slate-300 pb-1 mb-3 uppercase tracking-wide">Experience</h2>

      <div class="space-y-5">
        <div>
          <div class="flex justify-between items-baseline">
            <h3 class="font-semibold text-gray-900">Senior Frontend Developer</h3>
            <span class="text-sm text-gray-500 shrink-0 ml-4">2022 - Present</span>
          </div>
          <p class="text-sm text-gray-600 font-medium">TechCorp Inc. — San Francisco, CA</p>
          <ul class="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Led the migration of a legacy jQuery app to Vue 3 + TypeScript, improving performance by 40%</li>
            <li>Built a component library used across 5 product teams, reducing UI development time by 60%</li>
            <li>Mentored 3 junior developers and established frontend coding standards</li>
          </ul>
        </div>

        <div>
          <div class="flex justify-between items-baseline">
            <h3 class="font-semibold text-gray-900">Frontend Developer</h3>
            <span class="text-sm text-gray-500 shrink-0 ml-4">2019 - 2022</span>
          </div>
          <p class="text-sm text-gray-600 font-medium">StartupXYZ — Remote</p>
          <ul class="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Developed a real-time dashboard with Vue.js and D3.js serving 10K+ daily users</li>
            <li>Implemented responsive designs achieving 98+ Lighthouse accessibility scores</li>
            <li>Integrated REST and GraphQL APIs with optimistic UI patterns</li>
          </ul>
        </div>

        <div>
          <div class="flex justify-between items-baseline">
            <h3 class="font-semibold text-gray-900">Junior Web Developer</h3>
            <span class="text-sm text-gray-500 shrink-0 ml-4">2018 - 2019</span>
          </div>
          <p class="text-sm text-gray-600 font-medium">WebAgency Co. — New York, NY</p>
          <ul class="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Built responsive websites for 15+ clients using HTML, CSS, and JavaScript</li>
            <li>Collaborated with designers to translate Figma mockups into pixel-perfect interfaces</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section>
      <h2 class="text-lg font-semibold text-slate-800 border-b-2 border-slate-300 pb-1 mb-3 uppercase tracking-wide">Education</h2>
      <div class="flex justify-between items-baseline">
        <div>
          <h3 class="font-semibold text-gray-900">B.S. Computer Science</h3>
          <p class="text-sm text-gray-600">University of California, Berkeley</p>
        </div>
        <span class="text-sm text-gray-500 shrink-0 ml-4">2014 - 2018</span>
      </div>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="text-lg font-semibold text-slate-800 border-b-2 border-slate-300 pb-1 mb-3 uppercase tracking-wide">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Vue.js</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">React</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">TypeScript</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Nuxt</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Next.js</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Tailwind CSS</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Node.js</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">GraphQL</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Git</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">CI/CD</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Figma</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Testing (Vitest, Cypress)</span>
      </div>
    </section>
  </div>
</div>`

export const defaultCss = `/* Custom styles for your CV */
/* You can use plain CSS here alongside Tailwind classes in the HTML */

@page {
  size: A4;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* Ensure the CV fits within a single A4 page when printed */
@media print {
  body {
    width: 210mm;
    min-height: 297mm;
  }
}`
