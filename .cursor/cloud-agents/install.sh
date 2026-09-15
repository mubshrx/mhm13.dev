#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=pnpm-path.sh
source "${SCRIPT_DIR}/pnpm-path.sh"

REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
cd "${REPO_ROOT}"

# Cloud Agent install is non-interactive; avoid TTY prompts if pnpm
# needs to replace a node_modules tree from another package manager.
export CI="${CI:-true}"

echo "node: $(node -v)"
echo "pnpm: $(pnpm -v)"

pnpm install --frozen-lockfile
