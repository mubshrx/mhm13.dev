
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

`.cursor/environment.json` declares a `web` terminal that should auto-start the Next.js server, but Cloud Agents may not spawn `terminals`:

https://forum.cursor.com/t/cloud-agent-does-not-auto-start-terminals-from-repo-managed-environment-json-builds-enabled/168876

Until that is fixed, start the app via tmux. (The `environment.json` `terminals` command sources `.cursor/cloud-agents/pnpm-path.sh`; do not do that in this tmux workaround.)

1. Check first: `tmux ls`, an existing `web` session, or something listening on port 3000. If the server is already up, reuse it.
2. If it is missing, create or attach a tmux session named `web` and run `pnpm dev --port 3000` **inside** that session:

```bash
tmux has-session -t web 2>/dev/null || tmux new-session -d -s web -c "$PWD"
tmux send-keys -t web 'pnpm dev --port 3000' C-m
```

To attach interactively instead:

```bash
tmux new-session -As web
pnpm dev --port 3000
```
