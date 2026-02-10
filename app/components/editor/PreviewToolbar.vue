<script setup lang="ts">
const { isPreviewMarkup } = useCvEditor()
</script>

<template>
  <LayoutToolbar>
    <div class="flex items-center justify-end w-full gap-2">
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
  </LayoutToolbar>
</template>
