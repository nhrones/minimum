# Minimum Deploy Static App

This repo represents a bare minimum Static app server for Deno Deploy.

It serves any index.html in the root, and all files it requires.

Index.html -> styles.css -> app.js

```
deno run -A --unstable server.ts
```
This will launch your browser with the any index.html in the root.

I recommend using Deno install to have a local dev-tool.