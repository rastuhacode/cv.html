<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface IProps {
  initialContent?: string
  mountTarget?: string
}

const props = defineProps<IProps>()

const iframeRef = ref<HTMLIFrameElement | null>(null)
const iframeLoaded = ref(false)
const defaultContent
  = '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'

const initialContent = props.initialContent || defaultContent

const getDoc = () => iframeRef.value?.contentDocument || null

const getMountTarget = () => {
  const doc = getDoc()
  return props.mountTarget
    ? doc?.querySelector(props.mountTarget)
    : doc?.body.children[0]
}

const handleLoad = () => {
  if (iframeRef.value?.contentDocument) {
    nextTick(() => {
      iframeLoaded.value = true
    })
  }
}

onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.addEventListener('DOMContentLoaded', handleLoad)
  }
})

onBeforeUnmount(() => {
  iframeRef.value?.removeEventListener('DOMContentLoaded', handleLoad)
})

// Expose iframe for parent components
defineExpose({
  iframeRef,
  getIframeWindow: () => iframeRef.value?.contentWindow || null
})
</script>

<template>
  <iframe
    v-bind="$attrs"
    ref="iframeRef"
    title="Astroform Frame"
    :srcdoc="initialContent"
    @load="handleLoad"
  />

  <Teleport
    v-if="iframeRef && iframeLoaded"
    :to="getMountTarget()"
  >
    <slot />
  </Teleport>
</template>
