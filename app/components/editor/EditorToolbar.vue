<script setup lang="ts">
const { exportToPdf, saveHtml, importHtml, resetToDefault } = useCvEditor()

const fileInputRef = ref<HTMLInputElement | null>(null)

function triggerImport() {
  fileInputRef.value?.click()
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    importHtml(file)
    input.value = ''
  }
}
</script>

<template>
  <header class="flex items-center justify-between px-4 py-2 border-b border-(--ui-border) bg-(--ui-bg-elevated)">
    <div class="flex items-center gap-2">
      <UIcon
        name="i-lucide-file-text"
        class="size-5 text-(--ui-primary)"
      />
      <h1 class="text-base font-semibold text-(--ui-text-highlighted)">
        CV Builder
      </h1>
    </div>

    <div class="flex items-center gap-1.5">
      <UTooltip text="Import HTML file">
        <UButton
          icon="i-lucide-upload"
          color="neutral"
          variant="ghost"
          size="sm"
          aria-label="Import HTML"
          @click="triggerImport"
        />
      </UTooltip>

      <UTooltip text="Save as HTML">
        <UButton
          icon="i-lucide-download"
          color="neutral"
          variant="ghost"
          size="sm"
          aria-label="Save HTML"
          @click="saveHtml"
        />
      </UTooltip>

      <UTooltip text="Reset to default template">
        <UButton
          icon="i-lucide-rotate-ccw"
          color="neutral"
          variant="ghost"
          size="sm"
          aria-label="Reset"
          @click="resetToDefault"
        />
      </UTooltip>

      <USeparator
        orientation="vertical"
        class="h-5 mx-1"
      />

      <UTooltip text="Export as PDF (opens print dialog)">
        <UButton
          icon="i-lucide-printer"
          label="Export PDF"
          color="primary"
          variant="solid"
          size="sm"
          @click="exportToPdf"
        />
      </UTooltip>

      <USeparator
        orientation="vertical"
        class="h-5 mx-1"
      />

      <UColorModeButton size="sm" />
    </div>

    <input
      ref="fileInputRef"
      type="file"
      accept=".html,.htm"
      class="hidden"
      @change="handleFileChange"
    >
  </header>
</template>
