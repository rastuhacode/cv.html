<script setup lang="ts">
// Mobile view toggle: 'editor' | 'preview'
const mobileView = ref<'editor' | 'preview'>('editor')
</script>

<template>
  <div class="flex flex-col h-screen w-screen max-w-screen max-h-screen overflow-hidden">
    <EditorToolbar />

    <main class="flex flex-col grow overflow-hidden w-full h-full">
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
      <div class="flex grow overflow-hidden w-full">
        <div
          class="border-r border-default overflow-hidden transition-all grow"
          :class="{
            'hidden md:block': mobileView === 'preview',
            'w-full': mobileView === 'editor'
          }"
        >
          <EditorPanel />
        </div>
        <div
          class="transition-all min-w-fit"
          :class="{
            'hidden md:block': mobileView === 'editor',
            'w-full': mobileView === 'preview'
          }"
        >
          <EditorPreviewPanel />
        </div>
      </div>
    </main>
  </div>
</template>
