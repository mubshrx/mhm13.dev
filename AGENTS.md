
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

`.cursor/environment.json` already declares a `web` terminal that should auto-start the Next.js dev server:

```bash
. .cursor/cloud-agents/pnpm-path.sh && pnpm dev --port 3000
```

Cloud Agents may not actually spawn `environment.json` `terminals`. Until that is fixed, do not assume the app is running after boot:

https://forum.cursor.com/t/cloud-agent-does-not-auto-start-terminals-from-repo-managed-environment-json-builds-enabled/168876

1. Check for a `web` terminal, a tmux session, or something listening on port 3000.
2. If the dev server is missing, start the same command in a tmux-backed terminal (the same way `terminals` would).
3. Keep the `web` terminal entry in `environment.json`. It is still the intended auto-start config once the bug is fixed.
