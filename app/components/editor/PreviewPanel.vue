<script setup lang="ts">
const { combinedDocument, isPreviewMarkup } = useCvEditor()
const iframeRef = useTemplateRef('iframeRef')

// Debounced document to avoid excessive iframe updates
const debouncedDoc = ref(combinedDocument.value)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

watch(combinedDocument, (val) => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debouncedDoc.value = val
  }, 300)

  requestAnimationFrame(() => {
    measureHeight()
  })
})

const fullHeight = ref<number>()
let resizeObserver: ResizeObserver | null = null

function measureHeight() {
  const doc = iframeRef.value?.contentDocument
  if (!doc) return
  const height = doc.body.scrollHeight
  // if (height > 0) {
  fullHeight.value = height
  // }
}

function setupResizeObserver() {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }

  const doc = iframeRef.value?.contentDocument
  if (!doc?.body) return

  // Watch for size changes inside the iframe (e.g. after Tailwind CDN processes styles)
  resizeObserver = new ResizeObserver(() => {
    measureHeight()
  })
  resizeObserver.observe(doc.body)
  measureHeight()
}

function onIframeLoad() {
  setupResizeObserver()
}

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

const totalPages = computed(() => {
  const oneMmToOnePx = 3.7795275591
  const a4HeightInPx = 297 * oneMmToOnePx
  const pages = (fullHeight.value ?? 0) / a4HeightInPx
  return Math.ceil(pages)
})
</script>

<template>
  <div class="h-full flex flex-col bg-[#e5e5e5] dark:bg-[#1a1a1a]">
    <EditorPreviewToolbar />
    <div
      class="overflow-auto relative flex flex-col grow"
    >
      <template v-if="isPreviewMarkup">
        <template
          v-for="i in totalPages"
          :key="i"
        >
          <div
            class="absolute left-0 size-a4 border border-dashed border-primary text-primary p-1 bg-transparent z-10"
            :style="{ top: `${(i - 1) * 297}mm` }"
          >
            <span class="absolute top-1 left-1">A4</span>
          </div>
          <div
            class="absolute left-0 size-a4 bg-[repeating-linear-gradient(315deg,var(--ui-primary)_0,var(--ui-primary)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"
            :style="{ top: `${(i - 1) * 297}mm` }"
          />
        </template>
      </template>
      <iframe
        ref="iframeRef"
        :srcdoc="debouncedDoc"
        class="bg-white relative"
        :style="{ minHeight: `${fullHeight}px`, height: `${fullHeight}px`, width: '210mm' }"
        sandbox="allow-scripts allow-same-origin"
        title="CV Preview"
        @load="onIframeLoad"
      />
    </div>
  </div>
</template>
