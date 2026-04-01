<script setup lang="ts">
const { yamlContent, hbsContent, cssContent, htmlHeadContent, activeTab } = useCvEditor()

const tabs = [
  { label: 'Content', icon: 'i-lucide-file-text', value: 'yaml' as const },
  { label: 'Template', icon: 'i-lucide-code', value: 'hbs' as const },
  { label: 'Styles', icon: 'i-lucide-palette', value: 'css' as const },
  { label: 'Head', icon: 'i-lucide-code-xml', value: 'head' as const }
]

// Buffer yaml to update preview on cmd + s
// TODO: Refactor to not duplicate code for each buffer
const bufferYaml = ref(yamlContent.value)
const isYamlEqual = computed(() => bufferYaml.value === yamlContent.value)
watch(yamlContent, (value) => {
  bufferYaml.value = value
}, { immediate: true })
const handleSaveYaml = () => {
  yamlContent.value = bufferYaml.value
}

const bufferHbs = ref(hbsContent.value)
const isHbsEqual = computed(() => bufferHbs.value === hbsContent.value)
watch(hbsContent, (value) => {
  bufferHbs.value = value
}, { immediate: true })
const handleSaveHbs = () => {
  hbsContent.value = bufferHbs.value
}

const bufferCss = ref(cssContent.value)
const isCssEqual = computed(() => bufferCss.value === cssContent.value)
watch(cssContent, (value) => {
  bufferCss.value = value
}, { immediate: true })
const handleSaveCss = () => {
  cssContent.value = bufferCss.value
}

const bufferHtmlHead = ref(htmlHeadContent.value)
const isHtmlHeadEqual = computed(() => bufferHtmlHead.value === htmlHeadContent.value)
watch(htmlHeadContent, (value) => {
  bufferHtmlHead.value = value
}, { immediate: true })
const handleSaveHtmlHead = () => {
  htmlHeadContent.value = bufferHtmlHead.value
}

// TODO: refactor to use NuxtUI tabs and don't repeat the same code for each tab
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <LayoutToolbar>
      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors relative"
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

        <div
          class="size-2"
        >
          <div
            v-if="!isYamlEqual && tab.value === 'yaml'"
            class="size-2 bg-primary rounded-full"
          />
          <div
            v-if="!isHbsEqual && tab.value === 'hbs'"
            class="size-full bg-primary rounded-full"
          />
          <div
            v-if="!isCssEqual && tab.value === 'css'"
            class="size-full bg-primary rounded-full"
          />
          <div
            v-if="!isHtmlHeadEqual && tab.value === 'head'"
            class="size-full bg-primary rounded-full"
          />
        </div>
      </button>
    </LayoutToolbar>

    <div class="grow overflow-hidden">
      <VMonacoEditor
        v-show="activeTab === 'yaml'"
        v-model="bufferYaml"
        lang="yaml"
        @save="handleSaveYaml"
      />
      <VMonacoEditor
        v-show="activeTab === 'hbs'"
        v-model="bufferHbs"
        lang="handlebars"
        @save="handleSaveHbs"
      />
      <VMonacoEditor
        v-show="activeTab === 'css'"
        v-model="bufferCss"
        lang="css"
        @save="handleSaveCss"
      />
      <VMonacoEditor
        v-show="activeTab === 'head'"
        v-model="bufferHtmlHead"
        lang="html"
        @save="handleSaveHtmlHead"
      />
    </div>
  </div>
</template>
