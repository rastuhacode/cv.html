import * as yaml from 'js-yaml'
import Handlebars from 'handlebars'
import JSZip from 'jszip'

const EDITOR_PREFIX = 'editor__'

const STORAGE_KEY_YAML = EDITOR_PREFIX + 'yaml'
const STORAGE_KEY_HBS = EDITOR_PREFIX + 'hbs'
const STORAGE_KEY_CSS = EDITOR_PREFIX + 'css'
const STORAGE_KEY_HTML_HEAD = EDITOR_PREFIX + 'html-head'

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
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Compilation error'
      compileError.value = msg
      return `<div style="color:red;padding:20px;font-family:monospace"><b>Error:</b> ${msg}</div>`
    }
  })

  if (import.meta.client) {
    const savedYaml = localStorage.getItem(STORAGE_KEY_YAML)
    const savedHbs = localStorage.getItem(STORAGE_KEY_HBS)
    const savedCss = localStorage.getItem(STORAGE_KEY_CSS)
    const savedHtmlHead = localStorage.getItem(STORAGE_KEY_HTML_HEAD)

    if (savedYaml !== null) yamlContent.value = savedYaml
    if (savedHbs !== null) hbsContent.value = savedHbs
    if (savedCss !== null) cssContent.value = savedCss
    if (savedHtmlHead !== null) htmlHeadContent.value = savedHtmlHead

    watchDebounced(
      [yamlContent, hbsContent, cssContent, htmlHeadContent],
      () => {
        localStorage.setItem(STORAGE_KEY_YAML, yamlContent.value)
        localStorage.setItem(STORAGE_KEY_HBS, hbsContent.value)
        localStorage.setItem(STORAGE_KEY_CSS, cssContent.value)
        localStorage.setItem(STORAGE_KEY_HTML_HEAD, htmlHeadContent.value)
      },
      { deep: true, debounce: 500 }
    )
  }

  const combinedDocument = computed(() => buildFullDocument(compiledHtml.value, cssContent.value, htmlHeadContent.value))

  function buildFullDocument(html: string, css: string, htmlHead: string) {
    return `
    <!DOCTYPE html>
    <html class="overflow-hidden min-h-auto">
      <head>
        ${htmlHead}
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
    `
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
  const downloadCss = () => downloadFile('cv.css', cssContent.value)
  const downloadHtmlHead = () => downloadFile('cv.htmlhead', htmlHeadContent.value)

  const downloadBundle = async () => {
    const zip = new JSZip()

    zip.file('content.yaml', yamlContent.value)
    zip.file('template.hbs', hbsContent.value)
    zip.file('styles.css', cssContent.value)
    zip.file('head.html', htmlHeadContent.value)
    zip.file('cv.html', combinedDocument.value)

    const blob = await zip.generateAsync({ type: 'blob' })

    downloadFile('cv.zip', blob)
  }

  async function importYaml(file: File) {
    yamlContent.value = await file.text()
  }
  async function importHbs(file: File) {
    hbsContent.value = await file.text()
  }
  async function importCss(file: File) {
    cssContent.value = await file.text()
  }
  async function importHtmlHead(file: File) {
    htmlHeadContent.value = await file.text()
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
    downloadCss,
    downloadHtmlHead,
    downloadBundle,

    importYaml,
    importHbs,
    importCss,
    importHtmlHead,

    resetToDefault
  }
}
