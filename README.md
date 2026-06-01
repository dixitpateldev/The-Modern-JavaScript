# The Modern JavaScript — Learning Notes

My notes and runnable examples while working through
[javascript.info](https://javascript.info/). Each file covers one lesson,
written as runnable code with `console.log` output and explanatory comments.

Everything here runs **in the browser** (some early lessons use `alert` /
`prompt`, which are browser-only). A Node run path may be added later.

## How to run a lesson

1. Open `index.html` and change the `<script src="...">` to the lesson you want.
2. Open `index.html` in a browser.
3. View the output in the **dev-tools Console** (F12 → Console).

Self-contained HTML lessons (like *Hello, world!*) have their own `.html`
file — just open that file directly.

## Contents

### 1. JavaScript Fundamentals
| Lesson | File | Source |
|---|---|---|
| Hello, world! (script tags, external scripts) | [`01-fundamentals/01-hello-world/hello-world.html`](01-fundamentals/01-hello-world/hello-world.html) | [link](https://javascript.info/hello-world) |
| Variables & Data Types | [`01-fundamentals/02-variables.js`](01-fundamentals/02-variables.js) | [link](https://javascript.info/variables) |
| Basic operators, maths | [`01-fundamentals/03-operators.js`](01-fundamentals/03-operators.js) | [link](https://javascript.info/operators) |

### 2. Objects: the basics
| Lesson | File | Source |
|---|---|---|
| Objects — the basics | [`02-objects-the-basics/01-objects.js`](02-objects-the-basics/01-objects.js) | [link](https://javascript.info/object) |

---

`_playground/` holds experiments that are **not** part of the course.

## Conventions

- One file per javascript.info lesson; folders mirror the site's chapters.
- Filenames are kebab-case with a numeric prefix for ordering — no spaces.
- Every file starts with a header: topic + the exact javascript.info source URL.
- Comments are the point, not noise — concepts are explained inline.
- `var` is intentionally avoided; lessons use `let` / `const`.
