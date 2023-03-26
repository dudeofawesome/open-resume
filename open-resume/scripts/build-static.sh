#!/usr/bin/env bash

# ensure build dir exists
mkdir build 2> /dev/null

set -e

# copy static files
cp "README.md" "LICENSE" "build/"

# rewrite package.json
jq --slurp \
  '.[0] * .[1]
  | walk( if type == "object" then with_entries(select(.value != null)) else . end)' \
  "package.json" "package-publish.json" \
  > "build/package.json"
