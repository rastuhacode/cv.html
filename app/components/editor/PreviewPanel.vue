<script setup lang="ts">
const { combinedDocument, isPreviewMarkup } = useCvEditor()
const iframeRef = useTemplateRef('iframeRef')

// Debounced document to avoid excessive iframe updates
// TODO: Take a look at VFrame to not load tailwind on each rerender
const debouncedDoc = ref(combinedDocument.value)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

const DEBOUNCE_TIME = 1000 // 1 second
watch(combinedDocument, (val) => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debouncedDoc.value = val
  }, DEBOUNCE_TIME)

  requestAnimationFrame(() => {
    measureHeight()
  })
})

const fullHeight = ref<number>()
let resizeObserver: ResizeObserver | null = null

function measureHeight() {
  const doc = iframeRef.value?.contentDocument
  if (!doc?.body) return

  const height = doc.body.scrollHeight
  fullHeight.value = height
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
  <div class="h-full flex flex-col bg-background">
    <PreviewToolbar />
    <div
      class="overflow-auto relative flex flex-col grow mx-auto"
    >
      <template v-if="isPreviewMarkup">
        <template
          v-for="i in totalPages"
          :key="i"
        >
          <div
            class="absolute left-0 size-a4 border border-dashed border-primary text-primary p-1 bg-transparent z-10 pointer-events-none"
            :style="{ top: `${(i - 1) * 297}mm` }"
          >
            <div class="absolute top-1 left-1 flex  gap-2 font-mono">
              <span>A4 | Page {{ i }}</span>
            </div>
          </div>
          <div
            class="absolute left-0 size-a4 bg-[repeating-linear-gradient(315deg,var(--ui-primary)_0,var(--ui-primary)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed pointer-events-none"
            :style="{ top: `${(i - 1) * 297}mm` }"
          />
        </template>
      </template>
      <iframe
        ref="iframeRef"
        :srcdoc="debouncedDoc"
        class="bg-default relative"
        :style="{ minHeight: `${fullHeight}px`, height: `${fullHeight}px`, width: '210mm' }"
        sandbox="allow-scripts allow-same-origin"
        title="CV Preview"
        @load="onIframeLoad"
      />
    </div>
  </div>
</template>
