import { format } from 'prettier/standalone.js'
import htmlParser from 'prettier/plugins/html'
import cssParser from 'prettier/plugins/postcss'
import yamlParser from 'prettier/plugins/yaml'

type Formatter = (code: string) => Promise<string>

/**
 * Format the given HTML code using Prettier
 * @param html - The HTML code to format
 * @returns The formatted HTML code
 */
export const formatHtml: Formatter = async (html: string) => {
  return await format(html, {
    parser: 'html',
    plugins: [htmlParser]
  })
}

/**
 * Format the given CSS code using Prettier
 * @param css - The CSS code to format
 * @returns The formatted CSS code
 */
export const formatCss: Formatter = async (css: string) => {
  return await format(css, {
    parser: 'css',
    plugins: [cssParser]
  })
}

/**
 * Format the given YAML code using Prettier
 * @param yaml - The YAML code to format
 * @returns The formatted YAML code
 */
export const formatYaml: Formatter = async (yaml: string) => {
  return await format(yaml, {
    parser: 'yaml',
    plugins: [yamlParser]
  })
}

/**
 * Format the given Handlebars code using Prettier
 * @param hbs - The Handlebars code to format
 * @returns The formatted Handlebars code
 */
export const formatHandlebars: Formatter = async (hbs: string) => {
  return await formatHtml(hbs)
}
