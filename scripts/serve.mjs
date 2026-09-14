import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.cwd() + '/' + (process.env.SITE_ROOT ?? 'public');
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const types = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.pdf': 'application/pdf' };
const server = createServer(async (req, res) => {
  const requestPath = new URL(req.url, 'http://localhost').pathname;
  if (basePath && requestPath !== basePath && !requestPath.startsWith(`${basePath}/`)) { res.writeHead(404); res.end('Arquivo não encontrado'); return; }
  const pathname = basePath ? requestPath.slice(basePath.length) || '/' : requestPath;
  const relative = pathname === '/' ? '/index.html' : pathname;
  const filePath = normalize(join(root, relative));
  if (!filePath.startsWith(root)) { res.writeHead(403); res.end(); return; }
  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error('Not a file');
    res.writeHead(200, { 'content-type': types[extname(filePath)] ?? 'application/octet-stream' });
    res.end(await readFile(filePath));
  } catch {
    res.writeHead(404); res.end('Arquivo não encontrado');
  }
});
server.listen(4173, () => console.log('Portfólio disponível em http://localhost:4173'));
