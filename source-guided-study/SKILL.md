---
name: source-guided-study
description: Source-grounded learning workflow that turns specified materials into beginner-friendly explanations, adaptive Q&A, Markdown study notes, review/exam/self-test questions, or interview preparation. Use when the user asks to learn from a chapter, section, title, page range, file, snippet, PDF, Markdown notes, webpage, textbook, course material, technical documentation, exam/interview material, or project-local source; when setting up a reusable learning project from source materials; when indexing long PDFs/documents; or when answering follow-up questions about an existing source-based study note and updating the note if the question reveals missing or unclear content. Avoid ordinary open-ended Q&A with no source, source range, or existing source-based note.
---

# Source Guided Study

## Purpose

Use this skill to help a user learn from specified source material. Produce a source-grounded learning replacement: first build understanding from the original material, then create questions or exercises that help the user remember, explain, and apply the ideas.

Default to Chinese unless the user requests another language. Assume the user may be a beginner and explain foundations instead of only listing conclusions.

Prioritize useful learning over rigid formatting. The explanation must cover the target source range in enough detail to act as a study replacement, and Q&A answers should be complete enough to teach the point, not just short flashcard conclusions.

## Workflow

1. Detect the working mode.
   - For a one-off pasted snippet, short file, or clearly scoped request, proceed directly to source-guided learning.
   - For a reusable learning project, course folder, long PDF, textbook, documentation set, or repeated study workflow, check whether project guidance and source indexes already exist.
   - If an applicable `AGENTS.md` exists, read it before locating sources and use it for source locations, subject context, indexes, scripts, extraction tools, output style, and special rules.
   - If no project guidance exists and the task appears to be a reusable learning project, stop before generating learning content. First ask onboarding questions about the overall learning project: learning goal, source materials, learner level, preferred output style, answer depth, Markdown output location, and indexing. Treat "create project rules" as permission to start onboarding, not permission to skip the questions.
   - Create project-level guidance only after the user answers or explicitly says to use defaults. `AGENTS.md` is for the whole learning project, not for the currently requested chapter/section. Do not bake a single section's title, page range, or temporary learning task into project-wide rules unless the user explicitly says that section defines the whole project. See `references/project-setup-and-indexing.md`.
   - If the user asks to both set up rules and learn a section in the same request, do only minimal source discovery needed for good project-level questions, ask the onboarding questions, and pause. After answers, create/update project guidance, then index/read the source, then produce a section-specific learning note.

2. Prepare source indexing when useful.
   - For long PDFs or long documents, first look for existing index files such as `PDF_INDEX.md`, `pdf_outline.json`, table-of-contents notes, or project-specific equivalents.
   - If no usable index exists and locating sections is slow or likely to repeat, generate a lightweight directory/page index before extracting the target content. Store it near the source when filesystem permissions allow.
   - Use the index only for navigation. Treat the original source pages or sections as the content authority, not the generated index or any extracted text cache.
   - For PDFs, do not default to generating a full `.txt` copy of the document. If a temporary text extract is useful, keep it limited to the target range and treat it only as an aid for search or quotation.
   - See `references/project-setup-and-indexing.md` for indexing heuristics and suggested index fields. For PDF page handling, read `references/pdf-source-handling.md`.

3. Confirm the source scope.
   - Use the user's chapter, section, title, page range, file path, selected text, webpage, or project-local source reference.
   - If the scope is discoverable from nearby files, indexes, headings, filenames, existing project guidance, or a generated source index, infer it and proceed.
   - Ask one concise clarification question only when the source or range cannot be inferred safely.

4. Locate and read the relevant material.
   - Prefer the most direct source: selected text, requested file section, indexed chapter, page range, or linked page.
   - For long documents, inspect only the relevant range and surrounding context needed to avoid misunderstanding.
   - For PDFs with diagrams, tables, screenshots, math layout, arrows, captions, or visually structured explanations, inspect/render the original target pages instead of relying only on extracted text.
   - If extraction quality is poor, say what is missing and request a better source slice, screenshot, text paste, or a different locator.

5. Analyze before writing.
   - Identify what the section is about, the main learning thread, prerequisite concepts, core points, likely beginner blockers, and relationships such as cause/effect, process, hierarchy, contrast, or conditions.
   - Decide which details can be compressed and which ideas must be preserved for understanding.
   - Build a lightweight coverage checklist of the source range's major subsections, definitions, mechanisms, examples, diagrams, tables, edge cases, and conclusions.
   - For each major subsection, decide what background a beginner needs before the formal explanation.
   - Treat this checklist as a coverage contract for the final note: the `学习讲解` and Q&A together should cover the specified source section's main content.
   - Do this reasoning internally; only expose the useful result, not a long analysis log.

6. Produce `学习讲解` first.
   - Build a clear main thread rather than a loose outline.
   - Cover the target source range's major ideas before moving to Q&A. Do not silently omit a major subsection because it is inconvenient or lengthy.
   - Make the explanation easier to understand than reading the original source directly: reorganize the source into a clearer learning path, add missing beginner background, unpack implicit logic, and explain diagrams/tables in words when useful.
   - Use steps, examples, analogies, contrast tables, process descriptions, or causal chains when they make the concept easier.
   - Prefer detailed, beginner-friendly explanation unless the user or project guidance asks for concise output. "Detailed" means explaining the idea, why it exists, how it works, how it relates to neighboring concepts, and common confusions.
   - Keep simple material concise, but give complex material enough room to become understandable. Do not collapse a multi-page source range into a short overview.
   - For a very large source range, split the explanation by source subsections or produce a multi-part answer instead of over-compressing.
   - Avoid large copied passages from the source. Paraphrase and cite or name the source location when useful.

7. Produce adaptive Q&A or exercises second.
   - If the user specifies a goal, match it: learning Q&A, interview Q&A, self-test, review, exam practice, concept checks, or applied exercises.
   - If no goal is specified, default to learning Q&A focused on understanding and retention.
   - Use interview wording only when the user asks for interview preparation or the project guidance says so.
   - Default to about 8-12 questions, but use fewer for short material and more for dense or high-value material.
   - Cover the main knowledge thread, not trivia.
   - Use Q&A to reinforce and test the same source coverage as the explanation. If an important source subsection is not naturally covered by the explanation, cover it in Q&A.
   - Make answers as detailed as the concept needs. Avoid uniformly short one-sentence answers; a complex question may need paragraphs, bullets, steps, examples, or a small comparison table.
   - Use flexible per-question structure. Do not force every question into the same fixed fields when another shape teaches better.

8. Save project learning output when appropriate.
   - For reusable learning projects or local source folders, save the final learning material as a Markdown note by default, unless the user asks for chat-only output or writing is unavailable.
   - Use an existing project convention if present, such as `study_notes/`, `notes/`, or a path named in `AGENTS.md`. If no convention exists, ask during onboarding; if defaults are allowed, use `study_notes/`.
   - Return a brief chat summary with the Markdown file path, not a full duplicate of the saved note.
   - See `references/markdown-output.md`.

9. Maintain existing study notes during follow-up questions.
   - If the user asks a question after a section note has been generated, treat it as a continuation when the relevant note or source section is clear from context, an explicit path, or project conventions.
   - Read the existing Markdown note first. Return to the original source range when the question is about source meaning, a possible omission, a diagram/table/detail, or any point where the note may be incomplete or wrong.
   - Answer the user's immediate question, then decide whether the saved note should change.
   - Update the note when the question reveals a missing prerequisite, unclear explanation, common misconception, useful example, source detail, diagram/table explanation, correction, stronger Q&A item, or review point that would help future study.
   - Prefer integrating the new material into the relevant existing section. For small follow-up-only additions, add a clearly named `追问补充` or `补充问题` subsection instead of scattering notes in chat history.
   - Do not update the note for tangential questions, temporary preferences, or outside-source discussion unless the user asks to preserve it.
   - After updating, reply briefly with the answer, the note path, and what was added or corrected.

## Output Shape

Use a structure like this when it fits, but adapt freely to the material:

```markdown
## 学习讲解

[Explain the target source range in a beginner-friendly, source-grounded way. Cover the main subsections and reasoning chain.]

## 学习问答

### 1. [Question]

回答: [A complete answer that can be learned from. It may be several sentences, bullets, steps, or a short table.]

讲解: [Optional when the answer itself is not enough: why it works, how to understand it, and related concepts.]

关键词/易混点: [Optional memory anchors or common confusion.]

追问/延伸: [Optional, only when useful.]
```

Adapt section names to the user's goal. For interview preparation, `回答` may become `面试回答`, but it still should be substantive enough to speak aloud with reasoning. For ordinary learning, avoid unnecessary interview language.

When the task needs more detailed question design, read `references/output-patterns.md`.

When the task involves creating project guidance or indexing a long source, read `references/project-setup-and-indexing.md`.

When the source is a PDF, especially a long or visual PDF, read `references/pdf-source-handling.md`.

When the task is project-based or the user wants material for later review, read `references/markdown-output.md`.

When the user asks follow-up questions about a section that already has a Markdown study note, read `references/markdown-output.md` before editing the note.

## Guardrails

- Stay grounded in the provided or discoverable source. Do not invent claims beyond the source unless clearly labeled as background explanation.
- Do not require an `AGENTS.md` for ordinary use. Treat it as optional project memory for repeated learning workflows.
- Keep project guidance project-level. Do not write section-specific content, a single chapter title, temporary page ranges, or one-off study conclusions into `AGENTS.md`; put those in Markdown learning notes.
- Do not create a new project `AGENTS.md` before onboarding unless the user explicitly says to use defaults or has already provided the needed preferences. Do not generate the learning note before this setup step when setup is requested or clearly needed.
- Do not block a simple one-off learning request with setup questions unless the missing information prevents source location or output style selection.
- Do not treat generated indexes as source truth. Always return to the original source content before explaining or answering.
- Do not treat generated `.txt`, OCR, or text extraction artifacts as the complete source for PDF learning. Use them as aids only, and inspect/render original pages when visual content may carry meaning.
- Do not create persistent full-document text dumps by default. Create saved text extracts only when the user asks, when the project guidance says so, or when a clearly labeled limited cache is necessary for repeated work.
- Make the output more concise than the original while preserving enough information to study from.
- For project study notes, prefer enough detail for later review over chat brevity. Use Markdown structure to keep long explanations readable instead of shortening the substance.
- Ensure the explanation and Q&A together cover the specified source section. The goal is not just to summarize the PDF, but to make the requested section easier to learn than reading the raw PDF directly.
- Make Q&A a learning aid, not a set of tiny labels. If a question needs explanation, include it directly or add a short supporting `讲解`.
- For follow-up questions, keep the study note alive: answer the question and update the note when the question exposes a reusable gap, correction, clearer example, or stronger review item.
- Do not merely summarize, list headings, or give very short conclusions when the user needs to learn.
- Do not repeatedly send the user back to the original source for basic understanding.
- If the user says they do not understand, explain again with plainer language, smaller steps, concrete examples, or a useful analogy before restating the formal answer.
- Respect any project-specific instructions over generic defaults here when they do not conflict with system or developer instructions.
