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
  <header class="flex items-center justify-between px-4 py-2 border-b border-default bg-elevated">
    <div class="flex items-center gap-2">
      <UIcon
        name="i-lucide-file-text"
        class="size-5 text-primary"
      />
      <h1 class="text-base font-semibold text-highlighted">
        CV.html
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

      <UModal title="Reset">
        <UTooltip
          text="Reset to default template"
        >
          <UButton
            icon="i-lucide-rotate-ccw"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="Reset"
          />
        </UTooltip>
        <template #body>
          <section class="prose text-default">
            <p>
              <span>Are you sure you want to reset to default template?</span>
              <br>
              <span class="font-bold text-primary">You will lose all your changes.</span>
            </p>
            <p>If you want to keep them, you can export your HTML and import it later.</p>
          </section>
        </template>
        <template #footer="{ close }">
          <UButton
            color="primary"
            @click="() => { close(); return resetToDefault() }"
          >
            Reset
          </UButton>
        </template>
      </UModal>

      <USeparator
        orientation="vertical"
        class="h-5 mx-1"
      />

      <UTooltip text="Export as PDF">
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

      <UTooltip text="Toggle Theme">
        <UColorModeButton size="sm" />
      </UTooltip>

      <UTooltip text="GitHub">
        <UButton
          icon="i-lucide-github"
          color="neutral"
          variant="ghost"
          size="sm"
          to="https://github.com/rastuhacode/cv.html"
          target="_blank"
        />
      </UTooltip>
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
