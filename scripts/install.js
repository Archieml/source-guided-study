#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const skillName = "source-guided-study";
const repoRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(repoRoot, skillName);

function usage() {
  console.log(`Install the ${skillName} Codex Skill.

Usage:
  npx github:Archieml/source-guided-study
  npx github:Archieml/source-guided-study -- --force
  npx github:Archieml/source-guided-study -- --target <skill-dir>

Options:
  --force          Replace an existing installed skill folder.
  --target <dir>   Install to an exact skill folder path.
  --skills-dir <dir>
                   Install into a Codex skills directory.
  --help           Show this help message.

Default target:
  $CODEX_HOME/skills/${skillName}
  or ~/.codex/skills/${skillName}`);
}

function parseArgs(argv) {
  const options = {
    force: false,
    target: null,
    skillsDir: null,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--force" || arg === "-f") {
      options.force = true;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--target") {
      options.target = argv[index + 1];
      index += 1;
    } else if (arg === "--skills-dir") {
      options.skillsDir = argv[index + 1];
      index += 1;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  if (options.target && options.skillsDir) {
    throw new Error("Use either --target or --skills-dir, not both.");
  }

  return options;
}

function defaultSkillsDir() {
  const codexHome = process.env.CODEX_HOME;
  if (codexHome) {
    return path.join(codexHome, "skills");
  }
  return path.join(os.homedir(), ".codex", "skills");
}

function copyRecursive(src, dest) {
  if (typeof fs.cpSync === "function") {
    fs.cpSync(src, dest, { recursive: true });
    return;
  }

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }

  fs.copyFileSync(src, dest);
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    usage();
    return;
  }

  if (!fs.existsSync(path.join(sourceDir, "SKILL.md"))) {
    throw new Error(`Skill source folder is missing or incomplete: ${sourceDir}`);
  }

  const targetDir = path.resolve(
    options.target || path.join(options.skillsDir || defaultSkillsDir(), skillName)
  );

  if (fs.existsSync(targetDir)) {
    if (!options.force) {
      console.error(`The skill is already installed at:\n  ${targetDir}`);
      console.error("\nRe-run with --force to replace it.");
      process.exit(1);
    }
    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  fs.mkdirSync(path.dirname(targetDir), { recursive: true });
  copyRecursive(sourceDir, targetDir);

  console.log(`Installed ${skillName} to:\n  ${targetDir}`);
  console.log("\nRestart Codex so the Skill can be discovered.");
}

try {
  main();
} catch (error) {
  console.error(`Failed to install ${skillName}: ${error.message}`);
  process.exit(1);
}
