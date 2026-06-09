<script setup lang="ts">
const { isPreviewMarkup } = useCvEditor()
</script>

<template>
  <div class="flex items-center border-b border-default bg-background px-2 min-h-10 h-10 justify-end w-full gap-2">
    <UTooltip text="Toggle Preview Markup">
      <UButton
        icon="i-lucide-square-dashed"
        :color="isPreviewMarkup ? 'primary' : 'neutral'"
        variant="ghost"
        size="sm"
        aria-label="Toggle Preview Markup"
        @click="isPreviewMarkup = !isPreviewMarkup"
      />
    </UTooltip>
  </div>
</template>
