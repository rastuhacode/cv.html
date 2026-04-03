# CV.html

> Dev-friendly and fully customizable CV editor

Build professional CVs using HTML (YAML + Handlebars) and CSS with a live preview and PDF export.

## Philosophy

You can read about the motivation in my article [Stop using Word for your resume](https://rastuharem.netlify.app/posts/stop-using-word-for-your-resume).

## Features

- 🛠️ **Monaco Code Editor** — Write YAML, Handlebars, and CSS with the official VS Code editor, including syntax highlighting and formatting.
- 👀 **Live Preview** — See your CV update in real-time as you save, with a one-to-one print-accurate format.
- 🔀 **Combine any Content with any Template** — Using YAML and Handlebars lets you easily swap different UI or data, making it possible to create multilingual resumes or the same resume in different UIs.
- 💙 **Tailwind CSS Support** — Use Tailwind utility classes directly in your template.
- 📰 **PDF / HTML Export** — Export your CV as PDF or static HTML.
- 🔄 **Load / Save Data** — Import and export existing files. All data is yours.
- 💾 **Auto-Save** — Your work is automatically saved to `localStorage`.

## How to Use

1. **Edit Content** — Use the Content tab to write your `cv` object in YAML format.
2. **Edit Template** — Use the Template tab to write an HTML template with [Handlebars](https://handlebarsjs.com/), including helpers like [#if](https://handlebarsjs.com/guide/builtin-helpers.html#if), [#each](https://handlebarsjs.com/guide/builtin-helpers.html#each), and many more! You can reference your `cv` object from the previous step. Tailwind CSS classes are fully supported.
3. **Edit CSS** — Switch to the CSS tab to add common styles or edit print media.
4. **Preview** — Live preview of your CV, rendered exactly as it will appear in the PDF (including blueprint markup).
5. **Export PDF or HTML** — Export your CV as PDF by clicking **Export PDF** in the toolbar, or download static HTML via the **Export** dropdown.
6. **Export and Import Progress** — Click the export icon to save your progress as a standalone `.html` file you can share or edit later. Click import to continue. Your progress also auto-saves to local storage.
7. **Reset** — Click the reset icon to restore the default CV template.
8. **Experiment** — Try a different UI for your resume by swapping templates, or create multilingual resumes by swapping content. It's up to you!

## Local Development

You need to install [Bun](https://bun.sh/) to run the app.

### Setup

```bash
bun install
```

### Development

```bash
bun dev
```

## License

[MIT](LICENSE)
