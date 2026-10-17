# Sinniah Thurairajah: portfolio

A classic one-page portfolio in Tamil and English.

- Tamil: `/`
- English: `/en`

## Run it

```
npm install
npm run dev
```

Open http://localhost:3001 (port 3001, so it can run beside the school site on 3000).

## Change the text

Everything is in **`src/content/portfolio.ts`**, with each item in Tamil (`ta`) and English (`en`).

- **Career:** the `career` list. Add or edit jobs and positions, newest first.
- **Awards:** the `awards` list. While it's empty, the Awards section is hidden on the
  live site. When you run `npm run dev`, a dashed reminder box shows where it will go.
- **Photos:** `public/images/` (`thurairajah.jpg` on the cover, `thurairajah-2.jpg` in About).
- **Recording** for the "Listen" button: `public/audio/mridangam-full.mp3`.

## Put it online

The site is fully static, so it works on Cloudflare, Vercel or any host with no extra setup.
