<script lang="ts">
import type * as Monaco from 'monaco-editor'
import { KeyCode, KeyMod } from 'monaco-editor'

export type MonacoEditorOptions = Monaco.editor.IStandaloneEditorConstructionOptions
export type MonacoEditorLang = 'html' | 'css' | 'yaml' | 'handlebars'
export type MonacoCodeEditor = Monaco.editor.IStandaloneCodeEditor

export const MonacoEditorLang: Record<MonacoEditorLang, MonacoEditorLang> = {
  html: 'html',
  css: 'css',
  yaml: 'yaml',
  handlebars: 'handlebars'
} as const

const formatters: Record<MonacoEditorLang, (code: string) => Promise<string>> = {
  html: formatHtml,
  css: formatCss,
  yaml: formatYaml,
  handlebars: formatHandlebars
}
</script>

<script setup lang="ts">
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

const handleLoad = (editor: MonacoCodeEditor) => {
  editor.addAction({
    id: `format-${props.lang}`,
    label: `Format ${props.lang}`,
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyS],
    run: async () => {
      const fmt = formatters[props.lang]
      const formatted = await fmt(props.modelValue)
      emits('update:modelValue', formatted)
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
