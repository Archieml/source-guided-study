# Markdown Output

Read this reference when the user is studying from local project files, a reusable learning folder, a long PDF/textbook, or asks for material that should be easy to review later.

## Default Behavior

For project-based learning, create a Markdown study note by default unless the user asks for chat-only output or writing is unavailable.

Use this priority for the output path:

1. A path or convention specified by `AGENTS.md`.
2. An existing folder such as `study_notes/`, `notes/`, `学习笔记/`, or `outputs/`.
3. The folder chosen during onboarding.
4. `study_notes/` as the default when the user explicitly allowed defaults.

Do not create large study notes in chat only when a writable project folder exists and the user wants later review.

## File Naming

Use a clear, filesystem-safe Markdown filename based on the source section:

- preserve section numbers when available, such as `4.1-进程线程基础知识.md`;
- keep the title short but recognizable;
- avoid characters that are invalid for the local filesystem;
- if a file already exists, update it only when the user requested revision, otherwise create a distinct filename.

## Recommended Note Structure

Adapt as needed, but a strong default is:

```markdown
# [Section title]

Source: [source file and page/section range]

## 学习讲解

[Detailed source-grounded explanation, organized by the source's major subsections or a clearer learning path.]

## 学习问答

[Flexible Q&A with complete answers.]

## 关键词/易混点

[Memory anchors and common confusions.]

## 速记卡

[Optional compact review bullets.]
```

For very dense sections, split `学习讲解` into multiple subsections and keep Q&A after the explanation. The note should be readable later without the chat context.

Section-specific source ranges, explanations, Q&A, and conclusions belong in Markdown study notes, not in project `AGENTS.md`.

## Updating Notes After Follow-Up Questions

When the user asks a question after a section note already exists, treat the note as a living study artifact.

1. Locate the relevant note from the user's path, recent chat context, `AGENTS.md`, or the project's note folder.
2. Read the note before answering so the response can build on what is already saved.
3. Re-open the original source range when the question concerns source meaning, a missing detail, visual PDF content, a possible contradiction, or anything the note may have compressed too much.
4. Decide whether the note needs an update:
   - Update it if the question exposes a gap, unclear explanation, missing prerequisite, useful example, common pitfall, correction, diagram/table interpretation, extra Q&A item, or review point.
   - Do not update it for one-off chat, tangential discussion, temporary preferences, or outside-source background that would distract from the section.
5. Prefer editing the relevant existing section so the note stays coherent. If the addition is clearly follow-up-specific, add a concise subsection such as `## 追问补充` or `### 补充问题：[topic]`.
6. Keep source-grounding visible. Mark outside background as background, and include the source page/section when useful.

After editing, tell the user what changed and where. Do not paste the whole note unless asked.

## Chat Response After Saving

After writing the Markdown file, reply briefly with:

- the saved file path;
- source range used;
- a short note about any limitations, such as unrendered figures or uncertain extraction.

Do not paste the entire Markdown note into chat unless the user asks.
