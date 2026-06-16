# Project Setup and Source Indexing

Read this reference when a source-guided study task appears to be part of a reusable learning project, when no project guidance exists, or when a long PDF/document needs a reusable index.

## When to Ask Setup Questions

Ask setup questions only when they will improve repeated learning work. Do not ask them for a one-off pasted paragraph, a short file, or a fully specified request where the output style is obvious.

Use setup when:

- the user points to a folder, course, textbook, long PDF, documentation set, or exam/interview preparation source;
- the user will likely study multiple sections over time;
- no project-level guidance exists;
- the source location, learning goal, user level, or output style is unclear enough to affect future answers.

When no project-level guidance exists and the user asks to "create project rules", "build AGENTS.md", "set up a learning project", "you can help me build project rules", or similar, ask onboarding questions before writing project guidance or learning notes. The request to create rules means the user wants setup; it does not mean the agent should infer all preferences from the PDF or folder alone.

`AGENTS.md` is project-level guidance for the overall learning workspace. It should describe how to study the project's materials across many future sections. It is not a per-section note, not a summary of the currently requested chapter, and not a place to store one-off conclusions from a single learning session.

Ask no more than 4-7 concise questions at once. If the user already gave enough information, summarize the inferred settings and ask for confirmation before creating the project guidance. Skip questions only when the user explicitly says to use defaults, not to ask questions, or provides all needed preferences in the current request.

If the user asks for both setup and learning content in one prompt, do not produce the learning content first. Ask project-level onboarding questions and pause. After the user answers, create or update project guidance, then continue with indexing/source reading and section-specific Markdown note generation.

## Suggested Onboarding Questions

Adapt these questions to the context:

1. What is the main subject or learning goal, such as exam preparation, interview preparation, course study, or technical documentation learning?
2. Which files or folders are the primary sources, and are any sources more authoritative than others?
3. What is your current level: beginner, intermediate, or advanced?
4. What output style should be the default: learning explanation plus Q&A, interview Q&A, exam self-test, review cards, notes, or another style?
5. How detailed should the answers be by default: concise for memorization, detailed for understanding, or balanced?
6. Should long PDFs/documents be indexed automatically for faster later section lookup?
7. Where should learning notes be saved: `study_notes/`, `notes/`, beside the source, or another folder?

Use the user's answers to create a project-level `AGENTS.md` when the user agrees and the current environment allows writing there.

## Project `AGENTS.md` Content

Keep project guidance short and practical. Include:

- project purpose and learner profile;
- primary sources and where they live;
- default learning workflow;
- output style and language preferences;
- answer depth and formatting preferences, including whether Q&A should be concise, detailed, or flexible by topic;
- Markdown note output location and file naming convention;
- source indexing conventions;
- any project-specific scripts, indexes, or extraction tools;
- boundaries such as not recording progress unless requested.

Do not include:

- a single section's title or page range as if it were the whole project;
- section-specific explanations, Q&A, summaries, or conclusions;
- private conclusions or one-session progress unless the user asks to persist them.

Put section-specific material in Markdown study notes instead.

## Long PDF or Document Indexing

Use a reusable index when a PDF/document is long, repeated section lookup is likely, or full extraction is slow. As a rough rule, consider indexing when a PDF is over about 80-100 pages, has many sections, contains a table of contents, or the first lookup already required expensive scanning.

For PDFs, the index is a navigation tool only. Do not use an index, extracted `.txt`, OCR text, or any generated cache as the sole content source for learning output. After the index identifies the page range, return to the original PDF pages and inspect or render the relevant pages as needed.

Prefer existing index files first:

- `PDF_INDEX.md`
- `pdf_outline.json`
- `TOC.md`
- project-specific index files named in `AGENTS.md`

If no usable index exists, create a lightweight navigation index near the source when allowed. Good default names are `PDF_INDEX.md` for human-readable navigation and `pdf_outline.json` for structured page metadata.

Suggested fields:

- source file name;
- generated time;
- total page count when available;
- section level;
- title;
- page;
- end page;
- optional path or parent section.

The index is only a locator. After finding the target range, read or render the original source pages/sections before creating learning material. If the PDF includes diagrams, tables, captions, visual flows, screenshots, formulas, or page layout that affects meaning, render and inspect those pages instead of relying only on text extraction.

## Indexing Workflow

1. Inspect the document metadata, outline/bookmarks, table of contents pages, headings, or nearby project files.
2. Build a section-to-page map with start and end pages.
3. Save the index if the task is project-based and writing is allowed.
4. Use the index to choose the target range.
5. Inspect or render only the target pages plus minimal surrounding context. Use text extraction only as an aid, and keep saved extracts limited to the target range unless the user explicitly requests a full text cache.
6. If the index seems stale or inaccurate, say so and rebuild or ask the user for a page range.

## Failure Handling

- If PDF text extraction is slow or unreliable, try an outline/bookmark based index, page rendering, OCR for the target pages, or ask for screenshots/text for the target pages.
- If the document has no usable headings, ask the user for a page range or section title from the visible table of contents.
- If writing an index or `AGENTS.md` is blocked by permissions, continue with an in-chat temporary plan and tell the user what could be saved later.
