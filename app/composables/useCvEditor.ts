import * as yaml from 'js-yaml'
import Handlebars from 'handlebars'

const STORAGE_KEY_YAML = 'cv-editor-yaml'
const STORAGE_KEY_HBS = 'cv-editor-hbs'
const STORAGE_KEY_CSS = 'cv-editor-css'
const STORAGE_KEY_HTML_HEAD = 'cv-editor-html-head'

const OLD_STORAGE_KEY_HTML = 'cv-editor-html'

type ActiveTab = 'yaml' | 'hbs' | 'css' | 'head'

export function useCvEditor() {
  const htmlHeadContent = useState<string>('cv-html-head', () => defaultHtmlHead)
  const yamlContent = useState<string>('cv-yaml', () => defaultYaml)
  const hbsContent = useState<string>('cv-hbs', () => defaultHbs)
  const cssContent = useState<string>('cv-css', () => defaultCss)
  const activeTab = useState<ActiveTab>('cv-active-tab', () => 'yaml')

  const isPreviewMarkup = useState<boolean>('cv-is-preview-markup', () => false)
  const compileError = useState<string | null>('cv-compile-error', () => null)

  const compiledHtml = computed(() => {
    try {
      const cvData = yaml.load(yamlContent.value) || {}
      const template = Handlebars.compile(hbsContent.value)
      const html = template({ cv: cvData })
      compileError.value = null
      return html
    }
    catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Compilation error'
      compileError.value = msg
      return `<div style="color:red;padding:20px;font-family:monospace"><b>Error:</b> ${msg}</div>`
    }
  })

  if (import.meta.client) {
    // Migration: clean up old HTML key
    if (localStorage.getItem(OLD_STORAGE_KEY_HTML) !== null && localStorage.getItem(STORAGE_KEY_YAML) === null) {
      localStorage.removeItem(OLD_STORAGE_KEY_HTML)
    }

    const savedYaml = localStorage.getItem(STORAGE_KEY_YAML)
    const savedHbs = localStorage.getItem(STORAGE_KEY_HBS)
    const savedCss = localStorage.getItem(STORAGE_KEY_CSS)
    const savedHtmlHead = localStorage.getItem(STORAGE_KEY_HTML_HEAD)
    if (savedYaml !== null) yamlContent.value = savedYaml
    if (savedHbs !== null) hbsContent.value = savedHbs
    if (savedCss !== null) cssContent.value = savedCss
    if (savedHtmlHead !== null) htmlHeadContent.value = savedHtmlHead

    // Persist changes to localStorage (debounced)
    let saveTimeout: ReturnType<typeof setTimeout> | null = null
    watch(
      [yamlContent, hbsContent, cssContent, htmlHeadContent],
      () => {
        if (saveTimeout) clearTimeout(saveTimeout)
        saveTimeout = setTimeout(() => {
          localStorage.setItem(STORAGE_KEY_YAML, yamlContent.value)
          localStorage.setItem(STORAGE_KEY_HBS, hbsContent.value)
          localStorage.setItem(STORAGE_KEY_CSS, cssContent.value)
          localStorage.setItem(STORAGE_KEY_HTML_HEAD, htmlHeadContent.value)
        }, 500)
      },
      { deep: true }
    )
  }

  const combinedDocument = computed(() => {
    return buildFullDocument(compiledHtml.value, cssContent.value, htmlHeadContent.value)
  })

  function buildFullDocument(html: string, css: string, htmlHead: string) {
    const scriptTag = '<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>'
    return `<!DOCTYPE html>
            <html class="overflow-hidden min-h-fit">
              <head>
                ${htmlHead}
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

    const printHtml = combinedDocument.value
    printWindow.document.write(printHtml)
    printWindow.document.close()

    // Wait for Tailwind CDN to process styles, then trigger print
    printWindow.addEventListener('load', () => {
      setTimeout(() => {
        printWindow.print()
      }, 500)
    })
  }

  const downloadHtml = () => downloadFile('cv.html', combinedDocument.value)
  const downloadYaml = () => downloadFile('cv.yaml', yamlContent.value)
  const downloadHbs = () => downloadFile('cv.hbs', hbsContent.value)

  async function importYaml(file: File) {
    yamlContent.value = await file.text()
  }
  async function importHbs(file: File) {
    hbsContent.value = await file.text()
  }

  function resetToDefault() {
    yamlContent.value = defaultYaml
    hbsContent.value = defaultHbs
    cssContent.value = defaultCss
    htmlHeadContent.value = defaultHtmlHead
    if (import.meta.client) {
      localStorage.removeItem(STORAGE_KEY_YAML)
      localStorage.removeItem(STORAGE_KEY_HBS)
      localStorage.removeItem(STORAGE_KEY_CSS)
      localStorage.removeItem(STORAGE_KEY_HTML_HEAD)

      localStorage.removeItem(OLD_STORAGE_KEY_HTML)
    }
  }

  return {
    yamlContent,
    hbsContent,
    cssContent,
    htmlHeadContent,

    activeTab,
    isPreviewMarkup,

    compiledHtml,
    combinedDocument,
    compileError,

    exportToPdf,

    downloadHtml,
    downloadYaml,
    downloadHbs,

    importYaml,
    importHbs,

    resetToDefault
  }
}
