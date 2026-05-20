# Design: New /ai/ page + B2C reframe to "Key capabilities"

## Context

The portfolio's primary current reader is Dušan Šenkypl (Groupon CEO), with the role being **AI Builder — CEO Office**. The B2C page has accumulated content during iteration and is now too long for a (A) pre-call refresher + (C) backstop-conviction read. At the same time, AI signal lives scattered across B2B/B2C/SyncSo without a dedicated stage that maps to the role title.

This change does two things in one pass:

1. **B2C reframe.** Cut the 8-card "Examples — projects behind the methodology" section down to 3 cards under a new section header **"Key capabilities."** Each card leads with a capability statement; the project story sits underneath as proof. The 3-story methodology section ("How I work a consumer bet") is deleted entirely — its content migrates to the new AI page.

2. **New `/ai/` top-level page.** A fourth top-level capability page (parallel to b2b, b2c, syncso) specifically targeting AI Builder fit. Anchor case is Skyworth Production RAG (different lens than B2B). The 3 methodology stories migrated from B2C 02 are adapted into AI-builder stages: scope → architect → evaluate. A project bank pulls together the AI-flavored projects across the candidate's history.

The two changes are linked: the AI page absorbs B2C's methodology section, freeing B2C to be lean. Both serve the CEO-skim use case.

## Approach

### File-by-file changes

| File | Action | Detail |
|---|---|---|
| `ai/index.html` | **Create** | Full page: hero · Skyworth anchor (AI lens) · 01 stories · 02 project bank · cred line · footer |
| `b2c/index.html` | Edit | Replace 8-card Examples section with 3-card Key Capabilities. Delete the entire "How I work a consumer bet" stories section. Renumber/relabel sections. Add `/ai/` to nav. |
| `b2b/index.html` | Edit | Add `/ai/` to nav-bar |
| `syncso/index.html` | Edit | Add `/ai/` to nav-bar |
| `index.html` (home) | Edit | Add `/ai/` link wherever B2B/B2C are linked (capabilities cards section + footer if applicable) |
| `assets/site.css` | (No change) | Reuses all existing classes (`.anchor`, `.stories/.story`, `.support.cases`, `.cred-line`, `.flow`, `.sb`, `.sp`) |

### `/ai/index.html` content spec

**Hero**
- Eyebrow: `Capabilities · AI`
- h1: `Production AI systems that ship` (or close variant — focus on "shipped")
- Subtitle: One line about RAG, agents, embeddings deployed to real users with real metrics

**Anchor case — Skyworth Production RAG (AI lens, not B2B's systems lens)**
- Eyebrow: `Anchor case · Skyworth · AI Builder lens`
- Title: `RAG calls the cookbook didn't make`
- Role line: `May 2023 – Aug 2023 · Python · FastAPI · LangChain · Redis`
- Metrics: **90% faithfulness · <50ms cache · −20% context fragmentation**
- Judgment paragraph: 2–3 sentences focused on the specific AI calls (Markdown-aware structural splitter + Redis-backed semantic cache) and why those were the right bets at production scale

**Section 01 — How I work an AI build (3 stories, adapted from B2C 02)**

| # | Title | Claim direction |
|---|---|---|
| 1 | How I scope an AI build | Choose the right primitive (RAG vs agent vs embedding rank vs classical ML) based on the problem shape, not hype. Define eval criteria up front. |
| 2 | How I architect for production | The 2–3 early calls — chunking, cache layer, retrieval shape, eval rubric — decide whether the system holds up. Architecture-first, then ship the smallest production-shaped thing. |
| 3 | How I evaluate AI | Faithfulness, latency, cost, hallucination rate — measured on real evals, not benchmark theatre. Eval drops are the signal to re-architect, not retry. |

Each story: `.st` title + `.sb` claim paragraph + `.sp` proof line. **Drop the `.sb-ai` AI-integration sub-blocks** — they're redundant on a page where AI is already the main thread.

**Section 02 — AI project bank (5 cards via `.support.cases`)**

| # | Card title | Head | Hard signal |
|---|---|---|---|
| 1 | Embedding-based discovery on SyncSo | SyncSo · CTO | 2,500+ users · +22.8% engagement |
| 2 | LLM-synthesized SQL workloads for Lakehouse eval | Michigan · RA (Lin Ma) | 10,000+ workloads + XGBoost predictor |
| 3 | Multimodal AI interviewer pipeline | Northeastern · RA (Qiang Wang) | ChatTTS + voice clone + lip-sync + SSE streaming |
| 4 | LangChainGo recommendation service | COOCAA TV · SWE Intern | Go (Gin) + LangChainGo + OpenAI + MongoDB, production-shipped |
| 5 | AI pipelines replacing manual operations | Family ed · Operator | Operator-side AI integration on a thousands-of-students business |

Skyworth is NOT duplicated in the project bank — it's the anchor.

**Cred line**
> Background: **CS + Cognitive Science at Michigan**. Production AI experience across RAG, agents, embeddings, multimodal pipelines, and operator-side automation. Daily Claude Code + MCP for build acceleration.

(Includes the Claude Code + MCP mention since this is the AI page where it's directly relevant — and stops there, no Dušan-essay phrasing.)

### B2C reframe content spec

**New section 01: Key capabilities (replaces "Examples — projects behind the methodology")**

3 cards using existing `.support.cases` styling. Card structure inverts: capability is the headline, project is the proof body.

| # | s-head | s-title (capability) | s-desc (proof) | s-num |
|---|---|---|---|---|
| 1 | Capability · User research | Trained user-research methodology, not gut instinct | TA'd Michigan UX course — defended interview design, usability protocols, qualitative synthesis, iteration loops in front of a classroom. Teaching forces depth you can't fake. Every research move I now run is one I had to break down for students first. | Michigan UX TA · Theory + practice |
| 2 | Capability · Iteration discipline | Refine on revealed-preference signal, not opinion | Built *The Forgotten Forest* with friends in a competition of hundreds of participants. Weekly user interviews from week one — adjusted mechanics, difficulty, onboarding against what feedback actually said vs. what we wanted it to say. Other teams polished what they wished users cared about; we built what users responded to. **Link: Play it on itch.io** | 2nd place · Hundreds of participants |
| 3 | Capability · Operator reframing | Redesign incentives instead of forcing compliance | Family education company with thousands of students had a multi-year safety problem — kids ran outside after class while waiting for pickup. Rules, regulation, scolding all failed. I inverted the frame — instead of forcing compliance, designed the option kids would choose. Built a play space with toys and TVs. Kids stayed willingly. Cheaper than more security. Multi-year problem dissolved. | 1000s of students · Multi-year issue solved |

**Sections to delete from B2C**
- `<section><h2>How I work a consumer bet</h2>...</section>` (the 3 stories with AI sub-blocks) — entire block removed

**Sections to keep in B2C**
- hero · anchor case (SyncSo) · 01 Key capabilities (new) · 02 How a bet actually gets made (decision flow, renumbered from 03) · cred line · footer

### Nav-bar updates across pages

Every page's `<div class="nav">` block currently shows 2 links. Add a third for the AI page where appropriate:

| Page | New nav-bar links |
|---|---|
| `/ai/` | `← Back to portfolio home` · `Consumer (B2C) →` · `Enterprise (B2B) →` |
| `/b2b/` | `← Back to portfolio home` · `Consumer (B2C) →` · `AI →` |
| `/b2c/` | `← Back to portfolio home` · `Enterprise (B2B) →` · `AI →` |
| `/syncso/` | (current nav unchanged or add AI link if it doesn't have one) |
| Footers across all pages | Add `AI capabilities` link alongside B2B/B2C links |

### Home page integration

The home page's capabilities section (currently shows B2B and B2C teaser cards) should add an **AI** card to match. Need to verify what structure home uses and add a third card with matching style.

## Reuse

- `.anchor` CSS — for AI page hero anchor
- `.stories` / `.story` — for AI page section 01
- `.support` / `.support.cases` — for AI page section 02 AND B2C section 01 (reframed)
- `.cred-line` — for AI page cred line
- `.nav` / `.footer` — for AI page navigation

**Zero new CSS required.**

## Verification

After implementation:

1. `open ai/index.html` — page renders, all sections visible, theme toggle works
2. `open b2c/index.html` — 3 capability cards visible, methodology stories section gone, decision flow now section 02
3. `open b2b/index.html` and `open index.html` and `open syncso/index.html` — nav-bar shows AI link
4. Click `AI` link from any sibling page → lands on `/ai/index.html`
5. Click `← Back to portfolio home` from `/ai/` → returns to home
6. Theme toggle works on AI page (CSS vars only, no hardcoded colors expected)
7. No Dušan-essay phrases on AI page (per memory rule: forbidden phrases listed in `~/.claude/projects/-Users-wzy-projects-nova-portfolio/memory/user_preferences.md`)
8. `git diff --stat` shows ~5 files changed: new `ai/index.html` + edits to `index.html`, `b2b/index.html`, `b2c/index.html`, `syncso/index.html`

## Implementation order

1. Create `ai/index.html` with full content (hero, anchor, 3 stories, 5-card bank, cred line, footer)
2. Edit `b2c/index.html`: replace 8-card examples section with 3-card Key Capabilities; delete the 3-story methodology section; add AI link to nav
3. Edit `b2b/index.html`: add AI link to nav
4. Edit `syncso/index.html`: add AI link to nav (verify current nav state first)
5. Edit `index.html`: add AI capability card to home + footer link
6. Open all 5 affected pages in browser, visual check
7. Commit as one atomic change

## Memory update

After commit, update `~/.claude/projects/-Users-wzy-projects-nova-portfolio/memory/project_portfolio_decisions.md` with:
- New page-roles table entry for `/ai/`
- Updated B2C structure note
- The "Key capabilities" reframe pattern (capability-headline + project-proof) as a reusable card-design move

## Out of scope

- New CSS components (none needed)
- B2B reframe (deferred — B2B already has tighter structure)
- SyncSo page restructure (deferred)
- Decision flow diagram for AI page (use existing B2C decision flow; AI page does without)
- Adding the Groupon case study repo as a public reference on AI page (private repo)
