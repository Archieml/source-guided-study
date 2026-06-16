# Output Patterns

Read this reference when choosing the best Q&A or exercise format for a source-guided study task.

## Goal Modes

- Learning Q&A: default when the user does not specify a target. Focus on understanding, recall, and common confusions. Pair it with a detailed `学习讲解` section that can be reread later without the original source open.
- Interview Q&A: use only when the user asks for interview preparation or project guidance requests it. Make answers speakable, but not shallow; include enough reasoning for the user to answer follow-up questions.
- Exam or self-test: include questions that can be answered without seeing the answer first. Mix direct recall, explanation, comparison, and application.
- Review mode: compress the explanation and emphasize memory anchors, likely weak points, and fast checks.
- Practice mode: include small scenarios, examples, or applied prompts when the source describes procedures, rules, or tools.
- Follow-up mode: answer the user's new question in the context of the existing study note, then add or revise note content when the question reveals a reusable learning gap, misconception, example, correction, or stronger review question.

## Question Count

Start from 8-12 questions for a normal section.

Use fewer when the source is short, repetitive, or contains only a few concepts. Use more when the source is dense, foundational, frequently tested, or full of follow-up paths. Prefer coverage of the main thread over a fixed count.

## Per-Question Components

Use these components flexibly:

- `回答`: complete answer that teaches the point. It can be a paragraph, bullets, steps, or a small table; it should not default to one short sentence.
- `面试回答`: spoken-style answer for interview mode, still substantive enough to include the core logic and conditions.
- `讲解`: why the answer is true, how to understand it, and how it connects to nearby concepts.
- `关键词/易混点`: memory anchors, boundary conditions, terms that look similar, or mistakes beginners often make.
- `追问/延伸`: optional deeper prompt, only when it naturally helps.

Do not force every component into every question. Merge or omit parts when a shorter structure is clearer.

## Answer Depth and Flexible Shape

Do not make all Q&A answers uniformly short. Choose depth by concept:

- Simple definition: one clear paragraph may be enough.
- Mechanism or principle: include cause/effect, key steps, and why it matters.
- Process: use ordered steps and mention important state changes.
- Comparison: use a table or paired bullets when that is clearer.
- Common pitfall: explicitly name the mistaken understanding and the correct boundary.
- Applied topic: include a small scenario, operation idea, or failure mode.

A good Q&A item should let the user learn the knowledge point without constantly returning to the original source. If `回答` already explains the idea well, skip `讲解`; if the direct answer would be too dense, split it into `回答` plus `讲解`.

For follow-up questions, do not force the answer into the original Q&A template. Use the shape that best resolves the user's confusion, then preserve the durable part in the Markdown note when useful:

- add a new Q&A item if the question is likely to recur during review;
- add an example or analogy inside `学习讲解` if it clarifies a core idea;
- add `关键词/易混点` if the issue is mainly a confusion boundary;
- correct existing wording if the note was inaccurate or too compressed.

## Detailed Explanation Before Q&A

For project study notes, the `学习讲解` section should usually be the longest and most valuable part of the output. It should:

- follow the source section's major subsections or a clearer learning order;
- explain beginner background before formal terminology;
- preserve important mechanisms, examples, diagrams/tables, edge cases, and conclusions;
- use small examples, contrast tables, and step-by-step reasoning when they make the material easier;
- be easier to learn from than the raw source by making implicit logic explicit and connecting scattered points into a main thread;
- avoid reducing a long source range into only a few overview paragraphs.

The Q&A section should reinforce the explanation, not replace it. Together, `学习讲解` and Q&A should cover the specified source section's main content. If the explanation intentionally compresses part of the source, the Q&A or keyword section should still preserve the important learning points.

## Match the Knowledge Type

- Concept: explain what it is, what problem it solves, and why it is needed.
- Process: order the steps, name what each step does, and track important state changes.
- Comparison: show differences, use cases, and common confusion points.
- Principle: explain the causal chain instead of only giving the conclusion.
- Rule: state the condition, the action, the boundary, and a memory cue.
- Practice: describe when to use it, the operating idea, and common pitfalls.
- Abstract topic: add background and a small example before giving the formal explanation.

## Source-Grounded Compression

Keep the answer as a study replacement, not a source dump.

- Preserve definitions, mechanisms, relationships, constraints, examples that carry meaning, and likely test points.
- Compress repeated wording, rhetorical framing, long anecdotes, and details that do not change understanding.
- If adding outside background to help a beginner, label it as background and keep it subordinate to the source.
- Before finishing, check that the explanation and Q&A together cover the source range's main subsections. If a major subsection is intentionally compressed or omitted, say so briefly.
