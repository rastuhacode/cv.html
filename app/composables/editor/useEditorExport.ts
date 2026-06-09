import JSZip from 'jszip'

import { BUNDLE_FILES } from './const'
import type { EditorRefs } from './model'
import { getErrorMessage } from './utils'

type EditorExportOptions = EditorRefs & {
  combinedDocument: ComputedRef<string>
}

export function useEditorExport({
  yaml,
  hbs,
  css,
  head,
  combinedDocument
}: EditorExportOptions) {
  const toaster = useCommonToaster()

  function exportToPdf() {
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      toaster.error('Export failed', 'Please allow popups to export PDF.')
      return
    }

    const printHtml = combinedDocument.value
    // TODO: Check how to replace deprecated document.write method
    printWindow.document.write(printHtml)
    printWindow.document.close()

    // Wait for Tailwind CDN to process styles, then trigger print
    printWindow.addEventListener('load', () => {
      setTimeout(() => {
        printWindow.print()
      }, 500)
    })
  }

  function downloadFileSafe(filename: string, content: string | Blob) {
    const [, err] = trycatch(() => downloadFile(filename, content))
    if (err) {
      toaster.error('Export failed', getErrorMessage(err))
    }
  }

  const downloadHtml = () => downloadFileSafe('cv.html', combinedDocument.value)
  const downloadYaml = () => downloadFileSafe('cv.yaml', yaml.value)
  const downloadHbs = () => downloadFileSafe('cv.hbs', hbs.value)
  const downloadCss = () => downloadFileSafe('cv.css', css.value)
  const downloadHtmlHead = () => downloadFileSafe('cv.head.html', head.value)

  const downloadBundle = async () => {
    const [blob, err] = await trycatch(async () => {
      const zip = new JSZip()

      zip.file(BUNDLE_FILES.yaml, yaml.value)
      zip.file(BUNDLE_FILES.hbs, hbs.value)
      zip.file(BUNDLE_FILES.css, css.value)
      zip.file(BUNDLE_FILES.htmlHead, head.value)
      zip.file(BUNDLE_FILES.html, combinedDocument.value)

      return zip.generateAsync({ type: 'blob' })
    })

    if (err) {
      toaster.error('Export failed', getErrorMessage(err))
      return
    }

    downloadFileSafe('cv.zip', blob)
  }

  return {
    exportToPdf,
    downloadHtml,
    downloadYaml,
    downloadHbs,
    downloadCss,
    downloadHtmlHead,
    downloadBundle
  }
}
