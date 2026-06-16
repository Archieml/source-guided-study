# Source Guided Study

`source-guided-study` is a general Codex Skill for learning from source material.
It helps Codex turn a specified chapter, section, page range, file, notes, PDF,
webpage, textbook, course material, technical document, exam material, or
interview material into beginner-friendly study notes.

The Skill is source-driven: it is intended for requests that point to real
learning material, not ordinary open-ended Q&A with no source.

## What It Does

- Builds a clear `学习讲解` before generating questions.
- Produces adaptive learning Q&A, interview Q&A, review questions, or self-test
  questions depending on the user's goal.
- Saves reusable Markdown study notes for project-based learning.
- Reads project-level `AGENTS.md` when present, and can help create one after
  asking onboarding questions.
- Creates lightweight indexes for long PDFs or documents when repeated lookup
  would be slow.
- Treats generated indexes and extracted text as navigation aids; the original
  source remains the authority.
- Handles follow-up questions after a note is created and updates the note when
  the question reveals missing, unclear, or reusable learning content.

## Repository Layout

```text
source-guided-study/
├── README.md
├── package.json
├── scripts/
│   └── install.js
└── source-guided-study/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    └── references/
        ├── markdown-output.md
        ├── output-patterns.md
        ├── pdf-source-handling.md
        └── project-setup-and-indexing.md
```

The actual Codex Skill folder is `source-guided-study/`.

## Install With npx

Install directly from GitHub:

```powershell
npx github:Archieml/source-guided-study
```

If the Skill is already installed and you want to replace it:

```powershell
npx github:Archieml/source-guided-study -- --force
```

By default, the installer copies the inner Skill folder to:

```text
$CODEX_HOME/skills/source-guided-study
```

If `CODEX_HOME` is not set, it uses:

```text
~/.codex/skills/source-guided-study
```

On Windows, that is usually:

```text
C:\Users\<you>\.codex\skills\source-guided-study
```

You can also choose a custom install location:

```powershell
npx github:Archieml/source-guided-study -- --target "C:\path\to\source-guided-study"
```

After installation, start a new Codex session so the Skill can be discovered.

If this package is later published to the npm registry, the shorter command will
also work:

```powershell
npx source-guided-study
```

## Install Manually

Clone or download this repository, then copy the inner `source-guided-study/`
folder into your Codex skills directory.

PowerShell example:

```powershell
git clone https://github.com/Archieml/source-guided-study.git
cd source-guided-study
Copy-Item -Recurse -Force .\source-guided-study "$env:USERPROFILE\.codex\skills\source-guided-study"
```

Then start a new Codex session so the Skill can be discovered.

## Example Prompts

```text
Use $source-guided-study to help me learn PDF pages 20-25.
```

```text
Use $source-guided-study to turn this Markdown section into beginner-friendly
study notes and learning Q&A.
```

```text
Use $source-guided-study to answer my follow-up question and update the existing
study note if the note is missing something useful.
```

## Notes

- The Skill does not hardcode any subject, PDF name, or project path.
- Project-specific source locations, output preferences, and study conventions
  should live in that project's `AGENTS.md`.
- The Skill defaults to Chinese output unless the user asks for another
  language.
