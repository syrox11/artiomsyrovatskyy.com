# Portfolio — artiomsyrovatskyy.com

QA Automation Engineer portfolio built with Astro. Static site deployed to GitHub Pages.

## Architecture

- **Framework:** Astro 5 (static output)
- **Styling:** Vanilla CSS with CSS variables (see `src/styles/global.css`)
- **Fonts:** JetBrains Mono (code) + Outfit (body) via Google Fonts
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── layouts/
│   ├── BaseLayout.astro    # Nav + footer + head
│   └── SkillLayout.astro   # Skill page template (title, tags, level, content)
├── pages/
│   ├── index.astro         # Homepage: hero, skills grid, experience timeline
│   └── skills/             # One .astro file per skill
│       ├── playwright.astro
│       ├── api-testing.astro
│       ├── bdd-gherkin.astro
│       ├── cicd.astro
│       ├── sql.astro
│       └── typescript.astro
├── components/
│   └── Terminal.astro      # Code block styled as terminal window
└── styles/
    └── global.css          # Design tokens, component classes, animations
```

## Agents

Custom agent prompts live in `.claude/agents/`. Each agent uses a specific model based on task complexity (Pro plan — conserve Opus for high-value tasks):

| Agent | Model | Why |
|-------|-------|-----|
| Skill Generator | `claude-opus-4` | Creative content + real code examples = needs top reasoning |
| Code Reviewer | `claude-opus-4` | Deep analysis of accessibility, performance, SEO |
| Quality Gate | `claude-sonnet-4` | Checklist execution, pattern matching — Sonnet handles this fine |

Launch commands:

```bash
# Skill Generator — Opus (creative + code generation)
claude --model claude-opus-4 --prompt-file .claude/agents/skill-generator.md

# Code Reviewer — Opus (deep analysis)
claude --model claude-opus-4 --prompt-file .claude/agents/code-reviewer.md

# Quality Gate — Sonnet (checklist validation)
claude --model claude-sonnet-4 --prompt-file .claude/agents/quality-gate.md
```

> ⚠️ Pro plan has limited Opus usage. Use Skill Generator + Code Reviewer sparingly.
> For quick iterations and fixes, use a normal `claude` session (defaults to Sonnet).

## Conventions

- Skill pages use `SkillLayout` with props: `title`, `description`, `tags[]`, `level`, `experience`
- Code examples go inside `<Terminal filename="...">` components
- HTML entities for curly braces in code: `&#123;` / `&#125;`
- Tags use `.tag` class (accent) or `.tag--neutral` (gray)
- All CSS variables defined in `global.css` `:root`
- No external CSS frameworks — only vanilla CSS
