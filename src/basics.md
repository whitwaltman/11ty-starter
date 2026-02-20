Here's what you need to know about this template in order to get started:

1. If you're ever lost, use `.eleventy.js` and `package.json` as "anchor" points. The former houses the configuration settings, and the latter will tell you how to start the dev server or run any utility scripts.
2. New pages can go either in `./` (the root) or in `./src`. Either location will generate a permalink at the root. This is because of the data directory in `./src`.