const EDITOR_PREFIX = 'editor__'

export const STORAGE_KEY_YAML = EDITOR_PREFIX + 'yaml'
export const STORAGE_KEY_HBS = EDITOR_PREFIX + 'hbs'
export const STORAGE_KEY_CSS = EDITOR_PREFIX + 'css'
export const STORAGE_KEY_HTML_HEAD = EDITOR_PREFIX + 'html-head'

export const BUNDLE_FILES = {
  yaml: 'content.yaml',
  hbs: 'template.hbs',
  css: 'styles.css',
  htmlHead: 'head.html',
  html: 'cv.html'
} as const

export const REQUIRED_BUNDLE_FILES = Object.values(BUNDLE_FILES)
