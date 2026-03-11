/**
 * Download a file to the user's device
 * @param filename - The name of the file to download
 * @param content - The content of the file to download
 */
export function downloadFile(filename: string, content: string | Blob) {
  let blob: Blob | undefined

  if (typeof content === 'string') {
    blob = new Blob([content], { type: 'text/plain' })
  } else {
    blob = content
  }

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
