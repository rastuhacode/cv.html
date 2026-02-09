<script setup lang="ts">
// Mobile view toggle: 'editor' | 'preview'
const mobileView = ref<'editor' | 'preview'>('editor')
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <EditorToolbar />

    <!-- Mobile toggle -->
    <div class="flex md:hidden border-b border-default bg-default">
      <button
        class="flex-1 py-2 text-sm font-medium text-center transition-colors"
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
        class="flex-1 py-2 text-sm font-medium text-center transition-colors"
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

    <!-- Split pane: responsive via CSS -->
    <div class="flex flex-1 overflow-hidden">
      <div
        class="border-r border-default overflow-hidden transition-all"
        :class="{
          'hidden md:block md:w-1/2': mobileView === 'preview',
          'w-full md:w-1/2': mobileView === 'editor'
        }"
      >
        <EditorPanel />
      </div>
      <div
        class="overflow-hidden transition-all"
        :class="{
          'hidden md:block md:w-1/2': mobileView === 'editor',
          'w-full md:w-1/2': mobileView === 'preview'
        }"
      >
        <EditorPreviewPanel />
      </div>
    </div>
  </div>
</template>
