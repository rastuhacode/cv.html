<script setup lang="ts">
const { htmlContent, cssContent, activeTab } = useCvEditor()

const colorMode = useColorMode()

const monacoTheme = computed(() => {
  return colorMode.value === 'dark' ? 'vs-dark' : 'vs'
})

const editorOptions = {
  minimap: { enabled: false },
  fontSize: 14,
  lineNumbers: 'on' as const,
  wordWrap: 'on' as const,
  scrollBeyondLastLine: false,
  automaticLayout: true,
  tabSize: 2,
  padding: { top: 12 }
}

const tabs = [
  { label: 'HTML', icon: 'i-lucide-code', value: 'html' as const },
  { label: 'CSS', icon: 'i-lucide-palette', value: 'css' as const }
]
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <div class="flex items-center border-b border-default bg-elevated px-2">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors"
        :class="activeTab === tab.value
          ? 'text-highlighted border-b-2 border-primary'
          : 'text-muted hover:text-default'"
        @click="activeTab = tab.value"
      >
        <UIcon
          :name="tab.icon"
          class="size-4"
        />
        {{ tab.label }}
      </button>
    </div>

    <div class="flex-1 overflow-hidden">
      <MonacoEditor
        v-show="activeTab === 'html'"
        v-model="htmlContent"
        lang="html"
        :options="{ ...editorOptions, theme: monacoTheme }"
        class="h-full"
      />
      <MonacoEditor
        v-show="activeTab === 'css'"
        v-model="cssContent"
        lang="css"
        :options="{ ...editorOptions, theme: monacoTheme }"
        class="h-full"
      />
    </div>
  </div>
</template>
