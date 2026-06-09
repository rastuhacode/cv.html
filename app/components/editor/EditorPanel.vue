<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import type { MonacoEditorLang } from '~/components/utils/monaco'
import type { ActiveTab } from '~/composables'

const { yaml, hbs, css, head, activeTab } = useCvEditor()

interface EditorSource {
  label: string
  icon: string
  lang: MonacoEditorLang
  content: Ref<string>
}

const sources = {
  yaml: { label: 'Content', icon: 'i-lucide-file-text', lang: 'yaml', content: yaml },
  hbs: { label: 'Template', icon: 'i-lucide-code', lang: 'handlebars', content: hbs },
  css: { label: 'Styles', icon: 'i-lucide-palette', lang: 'css', content: css },
  head: { label: 'Head', icon: 'i-lucide-code-xml', lang: 'html', content: head }
} satisfies Record<ActiveTab, EditorSource>

const tabKeys = Object.keys(sources) as ActiveTab[]

// Per-tab draft buffers so unsaved edits survive switching tabs. The buffer is
// flushed to the underlying content (which drives the preview) only on save.
const buffers = Object.fromEntries(
  tabKeys.map((key) => {
    const buffer = ref(sources[key].content.value)
    watch(sources[key].content, (value) => {
      buffer.value = value
    }, { immediate: true })
    return [key, buffer]
  })
) as Record<ActiveTab, Ref<string>>

const tabItems = tabKeys.map<TabsItem>(key => ({
  value: key,
  label: sources[key].label,
  icon: sources[key].icon
}))

const isDirty = (key: ActiveTab) => buffers[key].value !== sources[key].content.value

const buffer = computed({
  get: () => buffers[activeTab.value].value,
  set: (value) => { buffers[activeTab.value].value = value }
})

const lang = computed(() => sources[activeTab.value].lang)

const handleSave = () => {
  sources[activeTab.value].content.value = buffer.value
}
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <UTabs
      :model-value="activeTab"
      :items="tabItems"
      color="primary"
      variant="link"
      size="sm"
      :content="false"
      :ui="{ list: 'bg-background h-10 min-h-10 px-2 py-0 mb-0 items-center' }"
      @update:model-value="activeTab = $event as ActiveTab"
    >
      <template #trailing="{ item }">
        <span
          v-if="isDirty(item.value as ActiveTab)"
          class="size-2 rounded-full bg-primary"
        />
      </template>
    </UTabs>

    <div class="grow overflow-hidden">
      <VMonacoEditor
        v-model="buffer"
        :lang="lang"
        @save="handleSave"
      />
    </div>
  </div>
</template>
