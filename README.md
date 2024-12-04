# THE PILLAR

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## ⚒️ How to create an author

Run command in terminal:
```sh
node createAuthors.js "Author Name"
```
or if you want to create multiple authors:

```sh
node createAuthors.js '["Liza Benesh", "Rina Sokolova"]'`
```

or just copy-paste current author's folder and edit it.

You can find scheme of author data in `./src/content/config.ts`

Example of author's JSON file:
```json
{
    "order": 2,
    "name": "Liza Benesh",
    "workImg": "./_assets/liza-work.png",
    "caseURL": "https://www.behance.net/gallery/205560743/The-Pillar-A-Creative-Journey-Through-Summer-3D-Camp",
    "caseThumbnails": [
        "./_assets/case-thumbnails/liza-thumb-1.webp",
        "./_assets/case-thumbnails/liza-thumb-2.webp",
        "./_assets/case-thumbnails/liza-thumb-3.webp",
        "./_assets/case-thumbnails/liza-thumb-4.webp",
        "./_assets/case-thumbnails/liza-thumb-5.webp",
        "./_assets/case-thumbnails/liza-thumb-6.webp"
    ]
}
```