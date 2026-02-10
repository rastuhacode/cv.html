import { format } from 'prettier/standalone.js'
import htmlParser from 'prettier/plugins/html'
import cssParser from 'prettier/plugins/postcss'

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
