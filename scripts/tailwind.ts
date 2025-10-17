#!/usr/bin/env -S deno run --allow-run --allow-read --allow-write

import { join } from "@std/path";

const inputFile = join(Deno.cwd(), "src/styles/tailwind.css");
const outputFile = join(Deno.cwd(), "src/styles/output.css");
const configFile = join(Deno.cwd(), "tailwind.config.js");

const command = new Deno.Command("npx", {
  args: [
    "tailwindcss",
    "-i",
    inputFile,
    "-o",
    outputFile,
    "--config",
    configFile,
    "--watch",
  ],
  stdout: "inherit",
  stderr: "inherit",
});

console.log("🎨 Compilando Tailwind CSS...");
const process = command.spawn();
await process.status;
