# Minimum Static App Server

This repo represents a bare minimum Static app server.

It serves any index.html in the root, and all subsequent file requests.

## Note: This does not contain any routing capability.

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
   
After the above install, just enter **mini** in any project folder that has an index.html file.