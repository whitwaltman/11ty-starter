---
title: Getting started
---

Here's a basic guide to using this starter kit. It doesn't use your typical Eleventy conventions, but it's easy enough to figure out.

1. `.eleventy.js` and `package.json` are good starter/entry points in case you get lost. From there, you should be able to know where to look next.
2. New pages go in `./src`. You can use `.md`, `.html`, or `.njk` file extensions.
3. There's a data directory file in `./src` that configures the content housed in there such that all pages will use `page.njk` as their template unless manually overridden {% note %}see the front-matter of `index.njk` as an example{% endnote %}
4. Most of the custom stuff in here is housed in `_includes`, but there's also some useful stuff in `_utils` too.
5. You'll probably want to customize the information in `_data/site.js` and `package.json`. The stuff in `_data/site.js` is used to insert some metadata into the HTML document structure.