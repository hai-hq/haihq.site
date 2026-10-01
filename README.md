# haihq.site

Static site for HAIHQ. Built with Astro and published as files in `dist/`. There is no server.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

`pnpm preci` checks formatting, lint, types, and the production build.

Set `PUBLIC_SITE_URL` at build time to override the canonical origin. The default is `https://haihq.org`.
