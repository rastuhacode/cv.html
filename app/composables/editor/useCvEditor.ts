import { load as loadYaml } from 'js-yaml'
import Handlebars from 'handlebars'

import type { ActiveTab, EditorRefs } from './model'
import { STORAGE_KEY_YAML, STORAGE_KEY_HBS, STORAGE_KEY_CSS, STORAGE_KEY_HTML_HEAD } from './const'
import { useEditorExport } from './useEditorExport'
import { useEditorImport } from './useEditorImport'
import { getErrorMessage } from './utils'

export type { ActiveTab } from './model'

export function useCvEditor() {
  const toaster = useCommonToaster()

  const head = useState<string>('cv-html-head', () => defaultHtmlHead)
  const yaml = useState<string>('cv-yaml', () => defaultYaml)
  const hbs = useState<string>('cv-hbs', () => defaultHbs)
  const css = useState<string>('cv-css', () => defaultCss)

  const activeTab = useState<ActiveTab>('cv-active-tab', () => 'yaml')
  const isPreviewMarkup = useState<boolean>('cv-is-preview-markup', () => false)
  const compileError = useState<string | null>('cv-compile-error', () => null)

  const compiledHtml = computed(() => {
    const [html, err] = trycatch(() => {
      const cvData = loadYaml(yaml.value) || {}
      const template = Handlebars.compile(hbs.value)
      return template({ cv: cvData })
    })

    if (err) {
      const msg = getErrorMessage(err)
      compileError.value = msg
      return `<div style="color:red;padding:20px;font-family:monospace"><b>Error:</b> ${msg}</div>`
    }

    compileError.value = null
    return html
  })

  if (import.meta.client) {
    const savedYaml = localStorage.getItem(STORAGE_KEY_YAML)
    const savedHbs = localStorage.getItem(STORAGE_KEY_HBS)
    const savedCss = localStorage.getItem(STORAGE_KEY_CSS)
    const savedHtmlHead = localStorage.getItem(STORAGE_KEY_HTML_HEAD)

    if (savedYaml !== null) yaml.value = savedYaml
    if (savedHbs !== null) hbs.value = savedHbs
    if (savedCss !== null) css.value = savedCss
    if (savedHtmlHead !== null) head.value = savedHtmlHead

    watchDebounced(
      [yaml, hbs, css, head],
      () => {
        localStorage.setItem(STORAGE_KEY_YAML, yaml.value)
        localStorage.setItem(STORAGE_KEY_HBS, hbs.value)
        localStorage.setItem(STORAGE_KEY_CSS, css.value)
        localStorage.setItem(STORAGE_KEY_HTML_HEAD, head.value)
      },
      { deep: true, debounce: 500 }
    )
  }

  const combinedDocument = computed(() => buildFullDocument(compiledHtml.value, css.value, head.value))

  function buildFullDocument(html: string, css: string, htmlHead: string) {
    return `
    <!DOCTYPE html>
    <html class="overflow-hidden min-h-auto">
      <head>
        ${htmlHead}
        <style>${css}</style>
      </head>
      ${html}
    </html>
    `
  }

  const contentRefs: EditorRefs = { yaml, hbs, css, head }

  const {
    exportToPdf,
    downloadHtml,
    downloadYaml,
    downloadHbs,
    downloadCss,
    downloadHtmlHead,
    downloadBundle
  } = useEditorExport({ ...contentRefs, combinedDocument })

  const {
    importYaml,
    importHbs,
    importCss,
    importHtmlHead,
    importBundle
  } = useEditorImport(contentRefs)

  function resetToDefault() {
    yaml.value = defaultYaml
    hbs.value = defaultHbs
    css.value = defaultCss
    head.value = defaultHtmlHead

    if (import.meta.client) {
      localStorage.removeItem(STORAGE_KEY_YAML)
      localStorage.removeItem(STORAGE_KEY_HBS)
      localStorage.removeItem(STORAGE_KEY_CSS)
      localStorage.removeItem(STORAGE_KEY_HTML_HEAD)
    }

    toaster.success('Reset to default', 'All content has been reset to default.')
  }

  return {
    yaml,
    hbs,
    css,
    head,

    activeTab,
    isPreviewMarkup,

    compiledHtml,
    combinedDocument,
    compileError,

    exportToPdf,
    resetToDefault,

    downloadYaml,
    downloadHbs,
    downloadCss,
    downloadHtmlHead,
    downloadBundle,
    downloadHtml,

    importYaml,
    importHbs,
    importCss,
    importHtmlHead,
    importBundle
  }
}
