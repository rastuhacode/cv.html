<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'en' }
})

const title = 'CV.html — HTML & CSS Resume Editor'
const description = 'Create professional CVs with full HTML & CSS control. Live preview, Tailwind CSS support, PDF export and many more!'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp>
    <div class="flex flex-col h-screen w-screen max-w-screen max-h-screen overflow-hidden">
      <LayoutHeader />
      <main class="flex flex-col grow overflow-hidden w-full h-full">
        <NuxtPage />
      </main>
    </div>
  </UApp>
</template>
