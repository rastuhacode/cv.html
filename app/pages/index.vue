<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

// Mobile view toggle: 'editor' | 'preview'
const mobileView = ref<'editor' | 'preview'>('editor')

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <div class="h-full w-full">
    <!-- Mobile toggle -->
    <div class="flex xl:hidden border-b border-default bg-default">
      <button
        class="grow py-2 text-sm font-medium text-center transition-colors"
        :class="
          mobileView === 'editor'
            ? 'text-highlighted border-b-2 border-primary'
            : 'text-muted'
        "
        @click="mobileView = 'editor'"
      >
        <UIcon
          name="i-lucide-code"
          class="size-4 mr-1 align-text-bottom"
        />
        Editor
      </button>
      <button
        class="grow py-2 text-sm font-medium text-center transition-colors"
        :class="
          mobileView === 'preview'
            ? 'text-highlighted border-b-2 border-primary'
            : 'text-muted'
        "
        @click="mobileView = 'preview'"
      >
        <UIcon
          name="i-lucide-eye"
          class="size-4 mr-1 align-text-bottom"
        />
        Preview
      </button>
    </div>

    <!-- Split pane -->
    <div class="flex grow overflow-hidden w-full h-full">
      <div
        class="border-r border-default overflow-hidden transition-all grow"
        :class="{
          'hidden xl:block': mobileView === 'preview' && breakpoints.smaller('xl').value,
          'w-full': mobileView === 'editor' && breakpoints.smaller('xl').value
        }"
      >
        <EditorPanel />
      </div>
      <div
        class="transition-all w-fit"
        :class="{
          'hidden xl:block': mobileView === 'editor' && breakpoints.smaller('xl').value,
          'w-full!': mobileView === 'preview' && breakpoints.smaller('xl').value
        }"
      >
        <PreviewPanel />
      </div>
    </div>
  </div>
</template>
