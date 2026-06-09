import JSZip from 'jszip'

import { BUNDLE_FILES, REQUIRED_BUNDLE_FILES } from './const'
import { getErrorMessage } from './utils'
import type { EditorRefs } from './model'

type EditorImportOptions = EditorRefs & {}

export function useEditorImport({ yaml, hbs, css, head }: EditorImportOptions) {
  const toaster = useCommonToaster()

  async function importTextFile(
    file: File,
    apply: (content: string) => void,
    successTitle: string,
    successDescription?: string
  ) {
    const [content, err] = await trycatch(() => file.text())
    if (err) {
      toaster.error('Import failed', getErrorMessage(err))
      return
    }

    apply(content)
    toaster.success(successTitle, successDescription)
  }

  async function importBundle(file: File) {
    const isZip = file.name.toLowerCase().endsWith('.zip')
      || file.type === 'application/zip'
      || file.type === 'application/x-zip-compressed'

    if (!isZip) {
      toaster.error('Import failed', 'Please select a valid ZIP file.')
      return
    }

    const [zip, loadErr] = await trycatch(() => JSZip.loadAsync(file))
    if (loadErr) {
      toaster.error('Import failed', `Could not open the ZIP archive. ${getErrorMessage(loadErr)}`)
      return
    }

    const missingFiles = REQUIRED_BUNDLE_FILES.filter(name => !zip.file(name))
    if (missingFiles.length > 0) {
      return void toaster.error(
        'Invalid bundle',
        `The ZIP archive is missing required files: ${missingFiles.join(', ')}.`
      )
    }

    const [files, readErr] = await trycatch(() => Promise.all([
      zip.file(BUNDLE_FILES.yaml)!.async('string'),
      zip.file(BUNDLE_FILES.hbs)!.async('string'),
      zip.file(BUNDLE_FILES.css)!.async('string'),
      zip.file(BUNDLE_FILES.htmlHead)!.async('string')
    ]))

    if (readErr) {
      toaster.error('Import failed', `Could not read bundle files. ${getErrorMessage(readErr)}`)
      return
    }

    const [yamlFile, hbsFile, cssFile, htmlHeadFile] = files
    yaml.value = yamlFile
    hbs.value = hbsFile
    css.value = cssFile
    head.value = htmlHeadFile

    toaster.success('Bundle imported')
  }

  async function importYaml(file: File) {
    await importTextFile(
      file,
      content => yaml.value = content,
      'Content imported'
    )
  }

  async function importHbs(file: File) {
    await importTextFile(
      file,
      content => hbs.value = content,
      'Template imported'
    )
  }

  async function importCss(file: File) {
    await importTextFile(
      file,
      content => css.value = content,
      'Styles imported'
    )
  }

  async function importHtmlHead(file: File) {
    await importTextFile(
      file,
      content => head.value = content,
      'Head imported'
    )
  }

  return {
    importYaml,
    importHbs,
    importCss,
    importHtmlHead,
    importBundle
  }
}
