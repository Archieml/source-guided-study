# PDF Source Handling

Read this reference when the learning source is a PDF, especially a long PDF or a PDF with diagrams, tables, screenshots, formulas, arrows, captions, or visually structured explanations.

## Source Authority

Treat the original PDF pages as the source of truth.

- Use `PDF_INDEX.md`, `pdf_outline.json`, bookmarks, or table-of-contents extraction only to locate page ranges quickly.
- Use text extraction, OCR, or generated `.txt` files only as auxiliary aids for search, rough reading, or quoting.
- Do not base the learning explanation or Q&A only on extracted text when visual content may contain meaning.
- Do not treat a generated text dump as equivalent to the PDF.

## Text Extraction and Saved Files

Do not create persistent full-PDF `.txt` dumps by default.

Allowed text artifacts:

- temporary target-range extracts for search or local reasoning;
- small saved extracts when the user asks for them;
- clearly labeled caches when project guidance explicitly requests them or repeated work truly benefits from them.

When saving any extracted text, name it as a derived helper, not as the canonical source. Mention that final learning output must still be checked against the original PDF pages.

## Page Rendering

Render or visually inspect target PDF pages when:

- the page includes diagrams, arrows, tables, screenshots, formulas, charts, code blocks, captions, side notes, or multi-column layout;
- text extraction appears incomplete, reordered, garbled, or missing captions;
- the user's requested topic is explained mainly through figures;
- the output must cover a source section with visual reasoning.

Use rendered pages to recover relationships that plain text loses, such as sequence arrows, component labels, before/after comparisons, nested boxes, and table structure.

## Practical Workflow

1. Use an index or table of contents to locate the target PDF page range.
2. Extract text from only the target pages plus minimal surrounding context as a reading aid.
3. Render or inspect target pages that contain visual or layout-dependent content.
4. Build the learning explanation from the original PDF page evidence, combining text and visual information.
5. Note any uncertainty when rendering/OCR is unavailable or visual details cannot be inspected.

## Output Expectations

- Cite or name the page range/section used when helpful.
- Include important figure/table meanings in the explanation, not just surrounding body text.
- If a figure is central but cannot be inspected, ask for a screenshot or permission to render pages instead of guessing.
- Keep indexes and text extracts out of the final answer unless the user asks to see them.
