# Minimum Deploy Static App

This repo represents a bare minimum Static app server for Deno Deploy.

It serves any index.html in the root, and all files it requires.

Index.html -> styles.css -> app.js

Try it! In any folder with an index.html file, enter the following:  
```
deno run -A --unstable https://raw.githubusercontent.com/nhrones/minimum/main/server.ts
```
This will launch your browser with the index.html served.

I recommend using Deno install to have a local dev-tool.   
To install a local copy as a dev-server named **mini**   
```
deno install -n mini -A --unstable https://raw.githubusercontent.com/nhrones/minimum/main/server.ts
```