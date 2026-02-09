<script setup lang="ts">
const { combinedDocument } = useCvEditor()

// Debounced document to avoid excessive iframe updates
const debouncedDoc = ref(combinedDocument.value)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

watch(combinedDocument, (val) => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debouncedDoc.value = val
  }, 300)
})
</script>

<template>
  <div class="h-full overflow-hidden bg-[#e5e5e5] dark:bg-[#1a1a1a]">
    <div class="h-full overflow-auto p-4">
      <iframe
        ref="iframeRef"
        :srcdoc="debouncedDoc"
        class="w-full bg-white mx-auto shadow-lg rounded-sm"
        style="min-height: 297mm; max-width: 210mm"
        sandbox="allow-scripts allow-same-origin"
        title="CV Preview"
      />
    </div>
  </div>
</template>
