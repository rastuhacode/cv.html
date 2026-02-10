<script setup lang="ts">
import { KeyCode, KeyMod } from 'monaco-editor'
import { format } from 'prettier/standalone'
import htmlParser from 'prettier/plugins/html'
import cssParser from 'prettier/plugins/postcss'

const { htmlContent, cssContent, activeTab } = useCvEditor()
const htmlEditorRef = useTemplateRef('htmlEditorRef')
const cssEditorRef = useTemplateRef('cssEditorRef')
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
  padding: { top: 12, bottom: 12 }

}

const tabs = [
  { label: 'HTML', icon: 'i-lucide-code', value: 'html' as const },
  { label: 'CSS', icon: 'i-lucide-palette', value: 'css' as const }
]

function handleHtmlLoad() {
  htmlEditorRef.value?.$editor?.addAction({
    id: 'format-html',
    label: 'Format HTML',
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyS],
    run: async () => {
      const formatted = await format(htmlContent.value, {
        parser: 'html',
        plugins: [htmlParser]
      })
      htmlContent.value = formatted
    }
  })
}

function handleCssLoad() {
  cssEditorRef.value?.$editor?.addAction({
    id: 'format-css',
    label: 'Format CSS',
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyS],
    run: async () => {
      const formatted = await format(cssContent.value, {
        parser: 'css',
        plugins: [cssParser]
      })
      cssContent.value = formatted
    }
  })
}
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <LayoutToolbar>
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
    </LayoutToolbar>

    <div class="grow overflow-hidden">
      <MonacoEditor
        v-show="activeTab === 'html'"
        ref="htmlEditorRef"
        v-model="htmlContent"
        lang="html"
        :options="{ ...editorOptions, theme: monacoTheme }"
        class="h-full"
        @load="handleHtmlLoad"
      />
      <MonacoEditor
        v-show="activeTab === 'css'"
        ref="cssEditorRef"
        v-model="cssContent"
        lang="css"
        :options="{ ...editorOptions, theme: monacoTheme }"
        class="h-full"
        @load="handleCssLoad"
      />
    </div>
  </div>
</template>
