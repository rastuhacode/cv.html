import { defaultHtml, defaultCss } from '~/utils/defaultTemplate'

const STORAGE_KEY_HTML = 'cv-editor-html'
const STORAGE_KEY_CSS = 'cv-editor-css'

export function useCvEditor() {
  const htmlContent = useState<string>('cv-html', () => defaultHtml)
  const cssContent = useState<string>('cv-css', () => defaultCss)
  const activeTab = useState<'html' | 'css'>('cv-active-tab', () => 'html')

  const isPreviewMarkup = useState<boolean>('cv-is-preview-markup', () => false)

  // Load from localStorage on client
  if (import.meta.client) {
    const savedHtml = localStorage.getItem(STORAGE_KEY_HTML)
    const savedCss = localStorage.getItem(STORAGE_KEY_CSS)
    if (savedHtml !== null) htmlContent.value = savedHtml
    if (savedCss !== null) cssContent.value = savedCss

    // Persist changes to localStorage (debounced)
    let saveTimeout: ReturnType<typeof setTimeout> | null = null
    watch(
      [htmlContent, cssContent],
      () => {
        if (saveTimeout) clearTimeout(saveTimeout)
        saveTimeout = setTimeout(() => {
          localStorage.setItem(STORAGE_KEY_HTML, htmlContent.value)
          localStorage.setItem(STORAGE_KEY_CSS, cssContent.value)
        }, 500)
      },
      { deep: true }
    )
  }

  const combinedDocument = computed(() => {
    return buildFullDocument(htmlContent.value, cssContent.value)
  })

  function buildFullDocument(html: string, css: string) {
    const scriptTag = '<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4">'
      + '<' + '/script>'
    return `<!DOCTYPE html>
<html class="overflow-hidden min-h-fit">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${scriptTag}
  <style>${css}</style>
</head>
<body>
${html}
</body>
</html>`
  }

  function exportToPdf() {
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('Please allow popups to export PDF.')
      return
    }

    const printHtml = buildFullDocument(htmlContent.value, cssContent.value)
    printWindow.document.write(printHtml)
    printWindow.document.close()

    // Wait for Tailwind CDN to process styles, then trigger print
    printWindow.addEventListener('load', () => {
      setTimeout(() => {
        printWindow.print()
      }, 500)
    })
  }

  function saveHtml() {
    const fullDoc = buildFullDocument(htmlContent.value, cssContent.value)
    const blob = new Blob([fullDoc], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cv.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  async function importHtml(file: File) {
    const text = await file.text()

    // Extract CSS from <style> tags
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi
    const styles: string[] = []
    let match = styleRegex.exec(text)
    while (match) {
      styles.push(match[1]!.trim())
      match = styleRegex.exec(text)
    }

    // Extract body content
    const bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(text)
    const bodyContent = bodyMatch ? bodyMatch[1]!.trim() : text.trim()

    htmlContent.value = bodyContent
    if (styles.length > 0) {
      cssContent.value = styles.join('\n\n')
    }
  }

  function resetToDefault() {
    htmlContent.value = defaultHtml
    cssContent.value = defaultCss
    if (import.meta.client) {
      localStorage.removeItem(STORAGE_KEY_HTML)
      localStorage.removeItem(STORAGE_KEY_CSS)
    }
  }

  return {
    htmlContent,
    cssContent,
    activeTab,
    combinedDocument,
    isPreviewMarkup,
    exportToPdf,
    saveHtml,
    importHtml,
    resetToDefault
  }
}
