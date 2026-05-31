# Aether — PROGRESS.md

> Building an AI UI/UX designer on demand for developers.
> One phase at a time. No skipping.

---

## Status

- [x] Landing page complete
- [ ] App shell
- [ ] Core product

---

## The build philosophy

Every phase introduces exactly one new concept.
Each tool gets introduced when you've personally felt the problem it solves.
Never add infrastructure before you've hit the wall that needs it.

---

# PHASE 0 — App Shell

**Goal:** A working Next.js app with a chat UI that talks to Claude. Nothing more.

### What you're building

- The Aether app shell (sidebar + chat thread + input area)
- A single API route that calls Anthropic and streams back a response
- The UI renders the response as raw text for now

### Tasks

- [x] Initialize Next.js app inside the existing repo (or new repo, your call)
- [x] Configure TypeScript
- [x] Configure Tailwind
- [x] Install shadcn/ui
- [x] Build the two-column layout: sidebar left, main chat right
- [ ] Build the chat thread component (user bubble + Aether response area)
- [x] Build the input area with textarea + send button
- [ ] Create `/api/chat` route using Anthropic SDK
- [ ] Add `.env.local` with `ANTHROPIC_API_KEY`
- [ ] Wire up streaming — response streams token by token into the UI
- [ ] Add a hardcoded placeholder system prompt for now
- [ ] Push to GitHub

### Completion criteria

- You type something, Aether responds, it streams in real time
- The UI matches the visual identity of the landing page (dark, mono, purple)
- Code is clean, no hacks

### What you'll learn

- Next.js app router + API routes
- Anthropic SDK streaming
- Server/client boundary in Next.js
- Basic React state for chat history

---

# PHASE 1 — Design Reasoning

**Goal:** Aether stops being a generic chatbot and starts reasoning like a designer.

### What you're building

- A strong system prompt that defines Aether's design philosophy
- Structured JSON output from the API
- Frontend renders structured sections instead of raw text

### Tasks

#### Step 1 — System prompt v1

- [ ] Write a system prompt that defines:
  - Aether's role (UI/UX designer collaborator, not a chatbot)
  - Its reasoning style (audience first, context before solutions)
  - Its output format (structured, opinionated, practical)
  - What it should never do (generic advice, jargon dumps, vague directions)
- [ ] Test it with 10 different product prompts
- [ ] Iterate until outputs feel genuinely opinionated

#### Step 2 — Structured output

- [ ] Define a JSON schema for Aether's response:

```json
{
  "understanding": "",
  "audience": "",
  "ux_direction": "",
  "visual_direction": {
    "mood": "",
    "typography": "",
    "color_direction": "",
    "reference_feel": ""
  },
  "ux_risks": [],
  "html_output": ""
}
```

- [ ] Update the API route to request structured JSON from Claude
- [ ] Add Zod schema validation on the response
- [ ] Update the frontend to render each section as a card
- [ ] `html_output` field renders as a live preview in an iframe

#### Step 3 — HTML/CSS output

- [ ] Update the system prompt to instruct Claude to generate a full rendered HTML screen
- [ ] The HTML should include inline CSS, real colors, real typography, real layout
- [ ] Rendered in an iframe next to the structured cards
- [ ] Add a "copy code" button on the iframe

### Completion criteria

- Developer types "I'm building a leave management tool for HR teams"
- Aether returns: audience analysis, UX direction, visual direction, UX risks, and a rendered HTML screen
- Output feels like it came from someone who knows design, not a generic AI

### What you'll learn

- Prompt engineering for structured output
- Zod validation
- Iframe sandboxing
- JSON schema design

---

# PHASE 2 — Design References (Static)

**Goal:** Aether's outputs reference real, current design patterns instead of inventing from training data alone.

### The problem you've hit by now

The HTML outputs look generic. Every fintech app gets the same dark navy. Every SaaS gets the same Inter font + blue CTA. Claude is reasoning from training data which has a cutoff. You need to inject current design context.

### What you're building

- A curated JSON file of design references
- Injected into the system prompt at query time
- Aether's outputs become visually specific and current

### Tasks

#### Step 1 — Build the reference dataset

- [ ] Create `/data/design-references.json`
- [ ] Add 60-80 entries, each with:

```json
{
  "id": "linear-001",
  "product": "Linear",
  "category": ["saas", "productivity", "dark"],
  "mood": ["minimal", "fast", "technical"],
  "typography": "Inter, tight tracking, small UI text",
  "colors": ["#1a1a2e", "#5e5ce6", "#ffffff"],
  "layout_patterns": ["sidebar nav", "dense data tables", "keyboard-first"],
  "url": "https://linear.app",
  "notes": "The gold standard for developer tools UI. Density without clutter."
}
```

- [ ] Cover these categories at minimum:
  - SaaS / productivity tools
  - Fintech / banking
  - Developer tools
  - Mobile-first apps
  - AI products
  - E-commerce
  - Dashboards
  - Marketing / landing pages

#### Step 2 — Inject references into prompt

- [ ] At query time, scan the user's prompt for category keywords
- [ ] Select 5-8 relevant references from the JSON
- [ ] Inject them into the system prompt as context
- [ ] Test: fintech prompt should pull fintech references, not SaaS ones

#### Step 3 — Reference the sources in output

- [ ] Update the system prompt to instruct Aether to cite which references informed its visual direction
- [ ] Frontend renders a small "inspired by" row under the visual direction card

### Completion criteria

- A fintech prompt returns a design that visibly references current fintech aesthetics
- Output cites 2-3 reference products it drew from
- Outputs no longer feel like generic AI UI

### What you'll learn

- Prompt injection patterns
- Simple keyword-based retrieval (manual RAG precursor)
- Why context quality directly determines output quality

---

# PHASE 3 — Embeddings + Vector DB (Real RAG)

**Goal:** Replace keyword matching with semantic retrieval. Aether finds relevant references based on meaning, not just matching words.

### The problem you've hit by now

Your JSON keyword matching is brittle. "I'm building a tool for independent musicians to manage their bookings" doesn't match any of your category keywords cleanly. You're getting wrong references or no references. You need semantic search.

### What you're building

- Embed your design reference dataset
- Store embeddings in a vector DB
- At query time: embed the user prompt, retrieve top-k semantically similar references
- Inject those into the system prompt

### Tasks

#### Step 1 — Embeddings

- [ ] Learn what embeddings are (vectors that represent meaning)
- [ ] Use Anthropic's embedding model or OpenAI's `text-embedding-3-small`
- [ ] Write a script to embed every entry in your design-references.json
- [ ] Store the output as a JSON file with embeddings for now (no DB yet)
- [ ] Implement cosine similarity search manually — understand the math

#### Step 2 — Vector DB

- [ ] Choose: Supabase pgvector (simpler, Postgres-based) or Pinecone (managed)
  - Recommendation: Supabase pgvector — you get a real Postgres DB as a side effect
- [ ] Set up the DB
- [ ] Write a migration to create the references table with a vector column
- [ ] Write an ingestion script to upsert all embedded references
- [ ] Replace your cosine similarity JSON search with a DB query

#### Step 3 — Wire into the API route

- [ ] On every `/api/chat` request:
  1. Embed the user's prompt
  2. Query vector DB for top 6 similar references
  3. Inject retrieved references into system prompt
  4. Generate response
- [ ] Test retrieval quality — are the right references coming back?
- [ ] Add a debug mode that shows which references were retrieved

### Completion criteria

- "App for musicians managing bookings" retrieves references from entertainment, creator economy, and scheduling tools — not generic SaaS
- Retrieval feels semantically intelligent
- You understand why this works (vector similarity, not keyword matching)

### What you'll learn

- What embeddings actually are
- Cosine similarity
- Vector databases
- The full RAG loop: embed → retrieve → inject → generate
- Supabase / pgvector

---

# PHASE 4 — Trend Ingestion Pipeline

**Goal:** Aether's design reference database stays current automatically, not just from your curated JSON.

### The problem you've hit by now

Your 80 curated references are 6 months old. New design patterns have emerged. You're manually adding entries which doesn't scale. You need automated ingestion.

### What you're building

- A pipeline that scrapes design showcase sites
- Extracts metadata and screenshots
- Embeds and stores them automatically
- Scheduled to run weekly

### Tasks

#### Step 1 — Scraper

- [ ] Choose sources: Awwwards, Mobbin, Dribbble, Vercel showcases, ProductHunt launches
- [ ] Write a scraper using Puppeteer or Playwright
- [ ] Extract: URL, title, category tags, screenshot
- [ ] Store raw scraped data in Supabase

#### Step 2 — Metadata extraction with AI

- [ ] For each scraped page, send the screenshot to Claude vision
- [ ] Prompt: extract mood, typography, color palette, layout patterns, category
- [ ] Store structured metadata back in Supabase
- [ ] This is how you generate your reference dataset automatically

#### Step 3 — Embedding + indexing pipeline

- [ ] Embed each new reference's metadata
- [ ] Upsert into your vector DB
- [ ] Add deduplication — don't re-embed pages you've already indexed

#### Step 4 — Scheduling

- [ ] Set up a cron job (Vercel cron or GitHub Actions)
- [ ] Runs weekly, ingests new designs, updates the DB

### Completion criteria

- The reference database grows automatically every week
- New design trends appear in Aether's outputs within a week of being published
- Zero manual curation needed

### What you'll learn

- Web scraping (Puppeteer / Playwright)
- Vision models for data extraction
- ETL pipelines
- Cron scheduling
- Working with multimodal inputs

---

# PHASE 5 — LangChain / LlamaIndex

**Goal:** Replace your hand-rolled RAG pipeline with a proper orchestration framework.

### The problem you've hit by now

Your `/api/chat` route is doing too many things: embedding, retrieving, prompt building, generating, parsing. It's hard to maintain, hard to extend, and adding new steps (reranking, multi-turn memory, tool use) is getting messy.

### What you're building

- Migrate your retrieval pipeline to LangChain or LlamaIndex
- Add conversation memory (multi-turn context)
- Add reranking for better retrieval quality

### Tasks

#### Step 1 — Understand the abstraction

- [ ] Read LangChain's core concepts: chains, retrievers, prompt templates, memory
- [ ] Identify exactly which parts of your current code map to which abstractions
- [ ] Don't migrate blindly — understand why each piece exists

#### Step 2 — Migrate retrieval

- [ ] Replace your manual embed → query → inject with a LangChain retrieval chain
- [ ] Use LangChain's Supabase vector store integration
- [ ] Add a reranker (Cohere rerank or cross-encoder) for better top-k quality

#### Step 3 — Add conversation memory

- [ ] Use LangChain's conversation buffer memory
- [ ] Multi-turn: developer can say "make the sidebar darker" and Aether understands context
- [ ] Store conversation history in Supabase

#### Step 4 — Prompt templates

- [ ] Move your system prompt into a LangChain prompt template
- [ ] Parameterize: category, retrieved references, conversation history, user message

### Completion criteria

- The same output quality as before, but the code is half the size
- Multi-turn conversations work correctly
- You understand what LangChain is actually abstracting

### What you'll learn

- LangChain chains and retrievers
- Prompt templates
- Conversation memory
- Reranking
- Why orchestration frameworks exist (and when they're overkill)

---

# PHASE 6 — Multi-Agent System

**Goal:** Aether's output quality improves through internal critique before responding to the user.

### The problem you've hit by now

Single-pass generation has a ceiling. The first output is often good but not great. A human designer would critique their own work before presenting it. Aether should too.

### What you're building

- A generator agent that produces the initial design
- A critic agent that evaluates it against UX principles and current trends
- A refiner agent that improves based on the critique
- User only sees the final refined output

### Tasks

#### Step 1 — Critic agent

- [ ] Separate system prompt for the critic role
- [ ] Critic evaluates: hierarchy, contrast, accessibility, trend alignment, audience fit
- [ ] Returns a structured critique JSON
- [ ] Test: does the critic catch real problems?

#### Step 2 — Refiner agent

- [ ] Takes original output + critique
- [ ] Produces improved HTML and updated design spec
- [ ] Test: is the refined output measurably better?

#### Step 3 — Orchestrate the pipeline

- [ ] Generator → Critic → Refiner runs automatically on every request
- [ ] Show the user only the final output
- [ ] Add a "show reasoning" toggle that reveals the critique for transparency

#### Step 4 — Implement with LangChain agents

- [ ] Migrate the multi-agent pipeline to LangChain agent framework
- [ ] Each agent has tools it can call (retrieve references, validate HTML, check contrast ratios)

### Completion criteria

- Outputs are visibly better than single-pass generation
- The critic catches real problems (low contrast, outdated patterns, wrong audience fit)
- Developer can optionally see the internal critique

### What you'll learn

- Multi-agent architectures
- Evaluation prompting
- Agent tool use
- LangChain agent framework

---

# PHASE 7 — Figma Export (Long-term)

**Goal:** Aether outputs a real Figma file, not just HTML.

> Only attempt this after Phase 6 is solid. The Figma API is complex and the output quality bar is high.

### Tasks

- [ ] Research Figma REST API and plugin API
- [ ] Prototype: convert Aether's structured output (colors, typography, layout) into Figma nodes
- [ ] Evaluate output quality — is it actually useful or just a rough approximation?
- [ ] If quality is acceptable, productize it

---

# Current focus

**You are here: Phase 0**

Do not look at Phase 2 until Phase 0 ships.
Do not look at Phase 3 until you've felt the pain that makes it necessary.

---

# Principles

- Ship each phase before starting the next
- Every tool gets introduced when you've hit the wall it solves
- Output quality is the only metric that matters
- A weak reasoning engine with great infrastructure is still weak
