<script setup lang="ts">
import type { MonacoCodeEditor, MonacoEditorLang, MonacoEditorOptions } from './model'

const formatters: Record<MonacoEditorLang, (code: string) => Promise<string>> = {
  html: formatHtml,
  css: formatCss,
  yaml: formatYaml,
  handlebars: formatHandlebars
}

const props = withDefaults(defineProps<{
  modelValue: string
  lang: MonacoEditorLang
  options?: MonacoEditorOptions
}>(), {})

const emits = defineEmits<{
  'update:modelValue': [value: string]
  'load': [editor: MonacoCodeEditor]
  'save': [editor: MonacoCodeEditor]
}>()

const editorRef = useTemplateRef('editorRef')
const colorMode = useColorMode()

const DEFAULT_EDITOR_OPTIONS: MonacoEditorOptions = {
  minimap: { enabled: false },
  fontSize: 14,
  lineNumbers: 'on' as const,
  wordWrap: 'on' as const,
  scrollBeyondLastLine: false,
  automaticLayout: true
}

const theme = computed(() => colorMode.value === 'dark' ? 'vs-dark' : 'vs')

const mergedEditorOptions = computed(() => ({
  ...DEFAULT_EDITOR_OPTIONS,
  ...props.options,
  theme: theme.value
}))

const monacoLang = computed(() => {
  if (props.lang === 'handlebars') return 'html'
  return props.lang
})

const handleLoad = async (editor: MonacoCodeEditor) => {
  const { KeyCode, KeyMod } = await import('monaco-editor')

  editor.addAction({
    id: `format-${props.lang}`,
    label: `Format ${props.lang}`,
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyS],
    run: async () => {
      const model = editor.getModel()
      if (!model) return

      const currentValue = model.getValue()
      const formatted = await formatters[props.lang](currentValue)
      if (formatted === currentValue) {
        emits('save', editor)
        return
      }

      editor.executeEdits('prettier', [{
        range: model.getFullModelRange(),
        text: formatted
      }])
      emits('save', editor)
    }
  })
  emits('load', editor)
}

defineExpose({
  getEditor: () => editorRef.value?.$editor
})

// TODO: Add tailwindcss prettier plugin and intellisense
// https://github.com/remcohaszing/monaco-tailwindcss/blob/main/examples/vite-example/index.js
// TODO: Also add tailwindcss/typography to give access to 'prose' class
</script>

<template>
  <MonacoEditor
    ref="editorRef"
    :model-value="props.modelValue"
    :lang="monacoLang"
    :options="mergedEditorOptions"
    class="h-full"
    @update:model-value="emits('update:modelValue', $event)"
    @load="handleLoad"
  />
</template>
