#!/usr/bin/env python3
"""
AREN Athletic — Static build script for CloudCannon.

What it does:
  1. Wipes the previous dist/ directory.
  2. Copies the entire site/ folder into dist/ (all HTML pages).
  3. Copies assets/ into dist/assets/ so CSS/JS/images resolve at /assets/*.
  4. Prints a manifest of every output file so CloudCannon's build log shows proof.

CloudCannon build command : python3 build_static.py
Output directory          : dist
"""

import os
import shutil
import sys

SRC_PAGES  = "site"
SRC_ASSETS = "assets"
DIST       = "dist"


def main():
    # ── 1. Clean ──────────────────────────────────────────────────────────────
    if os.path.exists(DIST):
        shutil.rmtree(DIST)
    os.makedirs(DIST)

    # ── 2. Copy pages (site/ → dist/) ────────────────────────────────────────
    if not os.path.isdir(SRC_PAGES):
        print(f"ERROR: source pages directory '{SRC_PAGES}' not found.", file=sys.stderr)
        sys.exit(1)

    shutil.copytree(SRC_PAGES, DIST, dirs_exist_ok=True)
    print(f"[build] Copied '{SRC_PAGES}/' → '{DIST}/'")

    # ── 3. Copy root assets/ → dist/assets/ ──────────────────────────────────
    #    The site/ folder already has site/assets/ with CSS/JS/images.
    #    Root assets/ may contain additional source images — merge them in so
    #    any /assets/<hash>.jpg reference in the HTML resolves correctly.
    if os.path.isdir(SRC_ASSETS):
        dest_assets = os.path.join(DIST, "assets")
        os.makedirs(dest_assets, exist_ok=True)
        for item in os.listdir(SRC_ASSETS):
            s = os.path.join(SRC_ASSETS, item)
            d = os.path.join(dest_assets, item)
            if os.path.isfile(s) and not os.path.exists(d):
                shutil.copy2(s, d)
        print(f"[build] Merged '{SRC_ASSETS}/' → '{DIST}/assets/'")

    # ── 4. Manifest ───────────────────────────────────────────────────────────
    print("\n[build] Output manifest:")
    file_count = 0
    for root, dirs, files in os.walk(DIST):
        # skip hidden dirs
        dirs[:] = [d for d in sorted(dirs) if not d.startswith(".")]
        for fname in sorted(files):
            rel = os.path.relpath(os.path.join(root, fname), DIST)
            print(f"  dist/{rel}")
            file_count += 1

    print(f"\n[build] ✓ Build complete — {file_count} files written to '{DIST}/'")


if __name__ == "__main__":
    main()
