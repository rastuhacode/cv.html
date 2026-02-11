<script setup lang="ts">
const { htmlContent, cssContent, activeTab, htmlHeadContent } = useCvEditor()

const tabs = [
  { label: 'HTML', icon: 'i-lucide-code', value: 'html' as const },
  { label: 'CSS', icon: 'i-lucide-palette', value: 'css' as const },
  { label: 'HEAD', icon: 'i-lucide-code-xml', value: 'head' as const }
]

// Buffer html to update preview on cmd + s
// TODO: Refactor to not duplicate code for each buffer
const bufferHtml = ref(htmlContent.value)
const isHtmlEqual = computed(() => bufferHtml.value === htmlContent.value)
watch(htmlContent, (value) => {
  bufferHtml.value = value
}, { immediate: true })
const handleSaveHtml = () => {
  htmlContent.value = bufferHtml.value
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
            v-if="!isHtmlEqual && tab.value === 'html'"
            class="size-2 bg-primary rounded-full"
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
        v-show="activeTab === 'html'"
        v-model="bufferHtml"
        lang="html"
        @save="handleSaveHtml"
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
