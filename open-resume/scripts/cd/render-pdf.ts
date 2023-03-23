#!/usr/bin/env node

import { exec, spawn } from 'node:child_process';
import { platform } from 'node:os';
import { readFile, mkdir, readdir } from 'node:fs/promises';
import { Server } from 'node:http';

import puppeteer from 'puppeteer-core';
import { createServer } from 'http-server';

import { possess } from '../../src/utils/possess';

function get_arg(...opt_names: string[]): string | null {
  const index = process.argv.findIndex((arg) => opt_names.includes(arg));
  if (index === -1) return null;
  else return process.argv[index + 1];
}

function get_chrome_path() {
  const arg = get_arg('--chrome', '-c');
  if (arg != null) return arg;

  switch (platform()) {
    case 'darwin':
      return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    case 'linux':
      return '/usr/bin/google-chrome-stable';
    default:
      console.error(`Unsupported platform ${platform()}`);
      process.exit(1);
  }
}

async function get_name(): Promise<string> {
  return JSON.parse(await readFile('package.json', { encoding: 'utf8' })).author
    .name;
}

async function build() {
  await exec(`npm run build`);
}

async function start_server(): Promise<Server> {
  const server: Server = (createServer({ root: 'build' }) as any).server;
  server.listen(3100);

  server;
  return server;
}

async function generate_pdf(
  url: string = 'http://localhost:3000',
): Promise<void> {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: get_chrome_path(),
  });
  try {
    const page = await browser.newPage();
    const load_page = await page.goto(url, { waitUntil: 'networkidle2' });
    if (load_page?.status() !== 200) {
      throw new Error('Could not load page.');
    }
    await page.pdf({
      path: `public/${possess(await get_name())} Résumé.pdf`,
      displayHeaderFooter: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  } finally {
    await browser.close();
  }
}

async function main() {
  await build();
  const server = await start_server();

  try {
    await readdir('public');
  } catch (e) {
    await mkdir('public');
  }

  try {
    await generate_pdf(`http://localhost:${(server.address() as any)?.port}/`);
  } catch (e) {
    console.error(`Unhandled error rendering PDF!`);
    console.error(e);
    process.exit(1);
  }

  server.close();
  process.exit(0);
}

main();
