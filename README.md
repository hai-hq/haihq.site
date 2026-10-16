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

ReFHIR has its own site and docs at `https://refhir.haihq.org`. This site only links to it. `/refhir` and the older `/haifhir` and `/fhirstate` paths redirect there (see `redirects` in `astro.config.ts`). In a static build these are emitted as meta-refresh pages. Add a 301 rule at the host if search engines should treat the move as permanent.
