# The Modern JavaScript — Learning Notes

My notes and runnable examples while working through
[javascript.info](https://javascript.info/). Each file covers one lesson,
written as runnable code with `console.log` output and explanatory comments.

Everything here runs **in the browser** (some early lessons use `alert` /
`prompt`, which are browser-only). A Node run path may be added later.

## How to run a lesson

**Easiest — run it live in your browser (nothing to install):**
Click a **▶ Run** link below. The code runs in your own browser and the output
appears on the page (`prompt` / `alert` show as popups). Powered by
[GitHub Pages](https://dixitpateldev.github.io/The-Modern-JavaScript/runner.html).

**No-setup alternative:** copy any snippet, open your browser DevTools (F12) →
**Console**, paste, and press Enter.

**If you cloned the repo:** open `runner.html` in a browser and pick a lesson,
or open a self-contained lesson HTML (like *Hello, world!*) directly.

## Contents

> ▶ Run links execute the lesson live via GitHub Pages.

### 1. JavaScript Fundamentals
| Lesson | File | Run | Source |
|---|---|---|---|
| Hello, world! (script tags, external scripts) | [`01-fundamentals/01-hello-world/hello-world.html`](01-fundamentals/01-hello-world/hello-world.html) | [▶ Run](https://dixitpateldev.github.io/The-Modern-JavaScript/01-fundamentals/01-hello-world/hello-world.html) | [link](https://javascript.info/hello-world) |
| Variables & Data Types | [`01-fundamentals/02-variables.js`](01-fundamentals/02-variables.js) | [▶ Run](https://dixitpateldev.github.io/The-Modern-JavaScript/runner.html?file=01-fundamentals/02-variables.js) | [link](https://javascript.info/variables) |
| Basic operators, maths | [`01-fundamentals/03-operators.js`](01-fundamentals/03-operators.js) | [▶ Run](https://dixitpateldev.github.io/The-Modern-JavaScript/runner.html?file=01-fundamentals/03-operators.js) | [link](https://javascript.info/operators) |

### 2. Objects: the basics
| Lesson | File | Run | Source |
|---|---|---|---|
| Objects — the basics | [`02-objects-the-basics/01-objects.js`](02-objects-the-basics/01-objects.js) | [▶ Run](https://dixitpateldev.github.io/The-Modern-JavaScript/runner.html?file=02-objects-the-basics/01-objects.js) | [link](https://javascript.info/object) |

---

## Conventions

- One file per javascript.info lesson; folders mirror the site's chapters.
- Filenames are kebab-case with a numeric prefix for ordering — no spaces.
- Every file starts with a header: topic + the exact javascript.info source URL.
- Comments are the point, not noise — concepts are explained inline.
- `var` is intentionally avoided; lessons use `let` / `const`.
