<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const {
  exportToPdf,
  downloadHtml,
  downloadYaml,
  downloadHbs,
  downloadCss,
  downloadHtmlHead,
  downloadBundle,
  importYaml,
  importHbs,
  importCss,
  importHtmlHead,
  resetToDefault
} = useCvEditor()

const yamlInputRef = ref<HTMLInputElement | null>(null)
const hbsInputRef = ref<HTMLInputElement | null>(null)
const cssInputRef = ref<HTMLInputElement | null>(null)
const htmlHeadInputRef = ref<HTMLInputElement | null>(null)

function handleYamlFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    importYaml(file)
    input.value = ''
  }
}

function handleCssFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    importCss(file)
    input.value = ''
  }
}

function handleHtmlHeadFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    importHtmlHead(file)
    input.value = ''
  }
}

function handleHbsFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    importHbs(file)
    input.value = ''
  }
}

const importItems: DropdownMenuItem[][] = [
  [
    { label: 'Import Content', icon: 'i-lucide-file-text', onSelect: yamlInputRef.value?.click },
    { label: 'Import Template', icon: 'i-lucide-code', onSelect: hbsInputRef.value?.click },
    { label: 'Import Styles', icon: 'i-lucide-palette', onSelect: cssInputRef.value?.click },
    { label: 'Import Head', icon: 'i-lucide-code-xml', onSelect: htmlHeadInputRef.value?.click }
  ]
]

const exportItems: DropdownMenuItem[][] = [
  [{ label: 'Export Bundle', icon: 'i-lucide-package', onSelect: downloadBundle }],
  [
    { label: 'Export Content', icon: 'i-lucide-file-text', onSelect: downloadYaml },
    { label: 'Export Template', icon: 'i-lucide-code', onSelect: downloadHbs },
    { label: 'Export Styles', icon: 'i-lucide-palette', onSelect: downloadCss },
    { label: 'Export Head', icon: 'i-lucide-code-xml', onSelect: downloadHtmlHead },
    { label: 'Export HTML', icon: 'i-lucide-file-code', onSelect: downloadHtml }
  ]
]

// TODO: Remove repeatable file inputs for each file type
</script>

<template>
  <header
    class="flex items-center justify-between px-4 py-2 border-b border-default bg-elevated"
  >
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
      <UDropdownMenu :items="importItems">
        <UTooltip text="Import file">
          <UButton
            icon="i-lucide-upload"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="Import"
          />
        </UTooltip>
      </UDropdownMenu>

      <UDropdownMenu :items="exportItems">
        <UTooltip text="Export file">
          <UButton
            icon="i-lucide-download"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="Export"
          />
        </UTooltip>
      </UDropdownMenu>

      <UModal title="Reset">
        <UTooltip text="Reset to default template">
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
            <p>
              If you want to keep them, you can export your YAML and template
              first.
            </p>
          </section>
        </template>
        <template #footer="{ close }">
          <UButton
            color="primary"
            @click="
              () => {
                close();
                return resetToDefault();
              }
            "
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
      ref="yamlInputRef"
      type="file"
      accept=".yaml,.yml"
      class="hidden"
      @change="handleYamlFileChange"
    >
    <input
      ref="hbsInputRef"
      type="file"
      accept=".hbs,.handlebars"
      class="hidden"
      @change="handleHbsFileChange"
    >
    <input
      ref="cssInputRef"
      type="file"
      accept=".css"
      class="hidden"
      @change="handleCssFileChange"
    >
    <input
      ref="htmlHeadInputRef"
      type="file"
      accept=".html"
      class="hidden"
      @change="handleHtmlHeadFileChange"
    >
  </header>
</template>
