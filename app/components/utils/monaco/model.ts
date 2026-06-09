import type * as Monaco from 'monaco-editor'

export type MonacoEditorOptions = Monaco.editor.IStandaloneEditorConstructionOptions
export type MonacoEditorLang = 'html' | 'css' | 'yaml' | 'handlebars'
export type MonacoCodeEditor = Monaco.editor.IStandaloneCodeEditor

export const MonacoEditorLang: Record<MonacoEditorLang, MonacoEditorLang> = {
  html: 'html',
  css: 'css',
  yaml: 'yaml',
  handlebars: 'handlebars'
} as const
