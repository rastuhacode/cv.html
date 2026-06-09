export type ActiveTab = 'yaml' | 'hbs' | 'css' | 'head'

export type EditorRefs = {
  yaml: Ref<string>
  hbs: Ref<string>
  css: Ref<string>
  head: Ref<string>
}
