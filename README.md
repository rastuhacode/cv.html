# CV.html

Build professional, fully customizable CVs using HTML and CSS with a live preview and PDF export.

## Features

- **Monaco Code Editor** — Write HTML and CSS with syntax highlighting and formatting
- **Live Preview** — See your CV update in real-time as you type
- **Tailwind CSS Support** — Use Tailwind utility classes directly in your HTML (powered by the Tailwind CSS CDN)
- **PDF Export** — Export your CV as PDF
- **Import / Save HTML** — Import an existing `.html` file or save your work as raw HTML
- **Auto-Save** — Your work is automatically saved to `localStorage`

## Getting Started

### Setup

```bash
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. **Edit HTML** — Use the HTML tab to write your CV structure. Tailwind CSS classes are fully supported.
2. **Edit CSS** — Switch to the CSS tab to add custom styles.
3. **Preview** — Live preview of your CV, rendered exactly as it will appear in the PDF (also with blueprint markup!)
4. **Export PDF** — Click **Export PDF** in the toolbar. A new window opens with your CV and triggers the browser's print dialog. Choose "Save as PDF" for the best results.
5. **Save HTML** — Click the download icon to save your CV as a standalone `.html` file you can share or edit later.
6. **Import HTML** — Click the upload icon to import an existing `.html` file. The tool will automatically extract styles into the CSS tab and body content into the HTML tab.
7. **Reset** — Click the reset icon to restore the default CV template.

## Tips

- Use `@page { size: A4; margin: 0; }` in your CSS for precise print control
- Add `print-color-adjust: exact` to preserve background colors in the PDF
- The default template demonstrates a clean, professional layout — modify it or start from scratch
- On mobile, use the Editor/Preview tabs at the top to switch between views

## License

[MIT](LICENSE)
