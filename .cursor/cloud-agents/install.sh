#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=pnpm-path.sh
source "${SCRIPT_DIR}/pnpm-path.sh"

REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
cd "${REPO_ROOT}"

echo "node: $(node -v)"
echo "pnpm: $(pnpm -v)"

pnpm install --frozen-lockfile
