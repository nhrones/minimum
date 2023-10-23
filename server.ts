import { serveFile } from "https://deno.land/std@0.203.0/http/file_server.ts"
import { openWebsite } from "https://raw.githubusercontent.com/nhrones/Browser/master/browser.ts"

const port = 8080

Deno.serve({port:port}, async (request: Request): Promise<Response> => {
   let { pathname } = new URL(request.url);
   if (pathname === '/') pathname = '/index.html';
   console.log('Serving: ', pathname)
   const resp = await serveFile(request, '.' + pathname )
   return resp 
})

// Trigger browser start
await openWebsite(`http://localhost:${port}`)