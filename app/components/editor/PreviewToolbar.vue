<script setup lang="ts">
const { isPreviewMarkup } = useCvEditor()
</script>

<template>
  <div class="flex items-center justify-between px-4 py-2 border-b border-default bg-elevated">
    <div class="flex items-center gap-2">
      <UButton
        icon="i-lucide-eye"
        color="neutral"
        variant="ghost"
        size="sm"
        aria-label="Preview Markup"
        @click="isPreviewMarkup = !isPreviewMarkup"
      />
    </div>
  </div>
</template>
