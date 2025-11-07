import crypto from 'node:crypto';
import { CONFIG } from '../../config.server.mjs';

export default async (request, context) => {
  const url = new URL(request.url);
  let id = url.searchParams.get('id');
  if (!id) {
    const segs = url.pathname.split('/').filter(Boolean);
    id = segs.pop();
  }
  const exp = Math.floor(Date.now() / 1000) + Number(CONFIG.TTL);
  const sig = crypto.createHmac('sha256', CONFIG.SECRET).update(String(id) + String(exp)).digest('hex');

  // Build absolute URL for redirect (undici requires absolute)
  const dest = new URL(`${CONFIG.BASE_URL}?id=${encodeURIComponent(id)}&exp=${exp}&sig=${sig}`, url.origin);
  return Response.redirect(dest.toString(), 302);
};
