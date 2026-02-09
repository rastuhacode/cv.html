# WebReCVer

Build professional, fully customizable CVs using HTML and CSS with a live preview and PDF export.

## Features

- **Monaco Code Editor** — Write HTML and CSS with syntax highlighting, autocompletion, and error detection
- **Live Preview** — See your CV update in real-time as you type
- **Tailwind CSS Support** — Use Tailwind utility classes directly in your HTML (powered by the Tailwind CSS CDN)
- **PDF Export** — Export your CV as a high-quality PDF with selectable text via the browser's print dialog
- **Import / Save HTML** — Import an existing `.html` file or save your work as raw HTML
- **Dark Mode** — Toggle between light and dark editor themes
- **Auto-Save** — Your work is automatically saved to `localStorage`

## Getting Started

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. **Edit HTML** — Use the HTML tab to write your CV structure. Tailwind CSS classes are fully supported.
2. **Edit CSS** — Switch to the CSS tab to add custom styles. The default template includes `@page` rules for A4 printing.
3. **Preview** — The right panel shows a live preview of your CV, rendered exactly as it will appear in the PDF.
4. **Export PDF** — Click **Export PDF** in the toolbar. A new window opens with your CV and triggers the browser's print dialog. Choose "Save as PDF" for the best results.
5. **Save HTML** — Click the download icon to save your CV as a standalone `.html` file you can share or edit later.
6. **Import HTML** — Click the upload icon to import an existing `.html` file. The tool will automatically extract styles into the CSS tab and body content into the HTML tab.
7. **Reset** — Click the reset icon to restore the default CV template.

## Tips

- Use `@page { size: A4; margin: 0; }` in your CSS for precise print control
- Add `print-color-adjust: exact` to preserve background colors in the PDF
- The default template demonstrates a clean, professional layout — modify it or start from scratch
- On mobile, use the Editor/Preview tabs at the top to switch between views

## Tech Stack

- [Nuxt 4](https://nuxt.com) — Vue framework with SSR/SPA support
- [Nuxt UI](https://ui.nuxt.com) — Component library
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) — Code editor (via `nuxt-monaco-editor`)
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS (CDN runtime in preview)
- TypeScript

## Build for Production

```bash
pnpm build
pnpm preview
```

## License

See [LICENSE](LICENSE) for details.
