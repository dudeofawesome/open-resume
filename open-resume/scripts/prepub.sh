#!/usr/bin/env bash

main() {
  rm -rf build/

  set -e

  npm run build
  test_files
  echo "Built!"
}

# ensure that we built at least some of the files we expected.
test_files() {
  if [ ! -f "build/package.json" ]; then
    echo "package.json was not found."
    exit 1;
  fi

  main="$(jq --raw-output '.main' "build/package.json")"

  if [ ! -f "build/$main" ]; then
    echo "$main was not found."
    exit 1;
  fi

  main_def="$(basename "$main" '.js').d.ts"
  if [ ! -f "build/$main_def" ]; then
    echo "$main_def was not found."
    exit 1;
  fi

  if [ ! -f "build/globals.css" ]; then
    echo "globals.css was not found."
    exit 1;
  fi
}

main
