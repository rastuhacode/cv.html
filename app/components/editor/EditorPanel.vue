<script setup lang="ts">
const { htmlContent, cssContent, activeTab, htmlHeadContent } = useCvEditor()

const tabs = [
  { label: 'HTML', icon: 'i-lucide-code', value: 'html' as const },
  { label: 'CSS', icon: 'i-lucide-palette', value: 'css' as const },
  { label: 'HEAD', icon: 'i-lucide-code-xml', value: 'head' as const }
]
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
      <VMonacoEditor
        v-show="activeTab === 'html'"
        v-model="htmlContent"
        lang="html"
      />
      <VMonacoEditor
        v-show="activeTab === 'css'"
        v-model="cssContent"
        lang="css"
      />
      <VMonacoEditor
        v-show="activeTab === 'head'"
        v-model="htmlHeadContent"
        lang="html"
      />
    </div>
  </div>
</template>
