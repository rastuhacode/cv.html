<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

type MobileView = 'editor' | 'preview'
const mobileView = ref<MobileView>('editor')

const mobileTabItems: TabsItem[] = [
  { value: 'editor', label: 'Editor', icon: 'i-lucide-code' },
  { value: 'preview', label: 'Preview', icon: 'i-lucide-eye' }
]
</script>

<template>
  <div class="h-full w-full">
    <UTabs
      v-model="mobileView"
      :items="mobileTabItems"
      :ui="{ list: 'w-full', trigger: 'grow justify-center' }"
      :content="false"
      color="primary"
      variant="link"
      size="sm"
      class="xl:hidden border-b border-default"
    />

    <div class="flex grow overflow-hidden w-full h-full">
      <div
        :class="{
          'hidden xl:block': mobileView === 'preview' && breakpoints.smaller('xl').value,
          'w-full': mobileView === 'editor' && breakpoints.smaller('xl').value
        }"
        class="border-r border-default overflow-hidden transition-all grow"
      >
        <EditorPanel />
      </div>
      <div
        :class="{
          'hidden xl:block': mobileView === 'editor' && breakpoints.smaller('xl').value,
          'w-full!': mobileView === 'preview' && breakpoints.smaller('xl').value
        }"
        class="transition-all w-fit"
      >
        <PreviewPanel />
      </div>
    </div>
  </div>
</template>
