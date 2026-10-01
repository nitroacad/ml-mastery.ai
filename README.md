# ML Mastery.ai — Practical AI/ML Engineering Platform

[![Deploy ML Mastery.ai to GitHub Pages](https://github.com/nitroacad/ml-mastery.ai/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/nitroacad/ml-mastery.ai/actions/workflows/deploy-pages.yml)
[![Zero Frameworks](https://img.shields.io/badge/Frameworks-ZERO-10b981?style=flat-square)](#zero-framework-architecture)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**ML Mastery.ai** is a complete, production-quality, practical AI/ML engineering tutorial and learning platform designed to bridge the gap between mathematical foundations, deep learning mechanics, LLM engineering, Retrieval-Augmented Generation (RAG), autonomous AI agents, MLOps pipelines, and production architecture.

---

## Core Product Philosophy

> **Learn → Understand → Build → Evaluate → Deploy → Monitor → Improve**

ML Mastery.ai avoids shallow definitions. Every guide explains what the technology is, why it matters, the mathematical primitives, visual architecture flow, code implementation, common pitfalls, engineering trade-offs, evaluation metrics, and production readiness criteria.

---

## Zero-Framework Architecture

The site strictly enforces a **Framework-Free** design philosophy:

* **HTML5**
* **CSS3** (CSS Grid, Flexbox, Custom Properties / Design Tokens, Dark/Light Themes)
* **Vanilla JavaScript** (ES6 Modules, LocalStorage, DOM APIs, Event Delegation)
* **Zero npm/Node build dependencies** (No React, Vue, Svelte, Tailwind, Vite, Webpack, or package.json requirement).
* **Fully deployable on static web servers and GitHub Pages.**

---

## Directory Structure

```text
ml-mastery.ai/
├── index.html                   # Main Homepage & Contact/Newsletter Form
├── 404.html                     # Custom 404 Error Page
├── robots.txt                   # Search Engine Crawler Directives
├── sitemap.xml                  # Canonical Site Index
├── README.md                    # Platform Documentation & Maintainer Guide
│
├── assets/
│   ├── css/
│   │   ├── styles.css           # Design Tokens, Variables & Base Reset
│   │   ├── components.css       # Navigation, Cards, Callouts, Quizzes & Modals
│   │   ├── responsive.css       # Mobile Breakpoints & Layout Adapters
│   │   └── print.css            # Print Stylesheet
│   │
│   └── js/
│       ├── theme.js             # Dark/Light Mode Switcher & LocalStorage Sync
│       ├── tutorials.js         # Central Tutorial Metadata Index
│       ├── progress.js          # Client-Side Progress Tracker & Local Storage API
│       ├── search.js            # Fast Client-Side Search Engine (Cmd+K)
│       ├── navigation.js        # Mobile Drawer & Active Route Highlighting
│       ├── interactions.js      # Copy Code Buttons, Quiz Handlers & Collapsibles
│       └── app.js               # Application Entrypoint & Mermaid Sync
│
├── guides/                      # Structured Curriculum Tracks
│   ├── foundations/             # Track 00: AI/ML Engineering & Roadmap
│   ├── mathematics/             # Track 01: Linear Algebra & Optimization
│   ├── data/                    # Track 02 & 03: Data Engineering & Quality
│   ├── machine-learning/        # Track 04 & 05: Evaluation & Metrics
│   ├── deep-learning/           # Track 06: Neural Networks & Backprop
│   ├── llm-engineering/         # Track 09: LLM Architecture & Inference
│   ├── rag/                     # Track 11: Production RAG Systems
│   ├── agents/                  # Track 13: Autonomous AI Agents
│   ├── mlops/                   # Track 14 & 15: MLOps Pipelines & Drift
│   └── security/                # Track 17: AI Security & Guardrails
│
├── roadmap/
│   └── index.html               # Interactive Learning Progression Visual
│
├── projects/
│   └── index.html               # Practical Projects Laboratory Blueprints
│
├── reference/
│   └── index.html               # Engineering Decision Matrices & Checklists
│
└── .github/
    └── workflows/
        └── deploy-pages.yml     # Automated GitHub Actions Pages Deployment
```

---

## Single Form Configuration (Formspree)

The platform includes exactly one submission form located on `index.html` used for contact and newsletter inquiries powered by [Formspree](https://formspree.io/).

### How to Configure Formspree:

1. Create a free form at [Formspree.io](https://formspree.io/).
2. Copy your unique Form ID (e.g. `xpzgvkrw`).
3. Open `index.html` and locate the form tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID" method="POST" class="card">
   ```
4. Replace `YOUR_FORMSPREE_FORM_ID` with your actual Formspree ID:
   ```html
   <form action="https://formspree.io/f/xpzgvkrw" method="POST" class="card">
   ```

---

## Local Development Workflow

Because ML Mastery.ai requires zero dependencies or build scripts, running the site locally is completely effortless:

1. Clone the repository:
   ```bash
   git clone https://github.com/nitroacad/ml-mastery.ai.git
   cd ml-mastery.ai
   ```
2. Open `index.html` directly in any web browser, or use any standard local static server:
   ```bash
   # Python built-in server
   python3 -m http.server 8000

   # Or PHP built-in server
   php -S localhost:8000
   ```

---

## Adding New Tutorials

To add a new tutorial guide to the curriculum:

1. Create a new `.html` file under the appropriate `guides/<track-folder>/` directory using an existing guide as a layout template.
2. Register the tutorial metadata in `assets/js/tutorials.js`:
   ```javascript
   {
     id: "track-slug-id",
     title: "Your Tutorial Title",
     slug: "guides/track-folder/your-tutorial.html",
     track: "Track Name",
     trackSlug: "track-folder",
     difficulty: "Beginner|Intermediate|Advanced|Expert",
     readingTime: "15 min",
     tags: ["Tag1", "Tag2"],
     description: "Clear practical summary.",
     prerequisites: ["Prereq 1"]
   }
   ```
3. Update `sitemap.xml` with the new URL.

---

## GitHub Pages Deployment Setup

Automated deployment is configured via `.github/workflows/deploy-pages.yml`.

To enable automatic publishing in GitHub:
1. Navigate to your GitHub Repository **Settings**.
2. Click **Pages** in the left sidebar under *Code and automation*.
3. Set **Source** to **GitHub Actions**.
4. Every push to `main` will trigger the deployment workflow automatically.

---

## Zero-Framework Compliance Audit

This repository maintains zero framework artifacts:
* No `package.json`
* No `node_modules`
* No npm/yarn/pnpm locks
* No framework configuration files

---

## License

Distributed under the MIT License. See `LICENSE` for details.
