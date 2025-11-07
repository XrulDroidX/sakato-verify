import crypto from 'node:crypto';
import { CONFIG } from '../../config.server.mjs';

async function readMembers(request) {
  try {
    const u = new URL(request.url);
    const base = `${u.protocol}//${u.host}`;
    const res = await fetch(`${base}/data/members.json`, { headers: { 'Cache-Control': 'no-cache' } });
    if (!res.ok) return [];
    const data = await res.json().catch(()=>[]);
    return Array.isArray(data) ? data : [];
  } catch (_) { return []; }
}

export default async (request, context) => {
  const { searchParams } = new URL(request.url);
  const debug = searchParams.get('debug') === '1';
  const id = searchParams.get('id');
  const sig = searchParams.get('sig');
  const exp = Number(searchParams.get('exp'));
  if (!id || !sig || !exp) return Response.json(debug ? { ok:false, reason:'missing_params' } : { ok:false });

  const now = Math.floor(Date.now()/1000);
  if (now > exp) return Response.json(debug ? { ok:false, reason:'expired', now } : { ok:false });

  const expect = crypto.createHmac('sha256', CONFIG.SECRET).update(String(id) + String(exp)).digest('hex');
  if (expect !== sig) return Response.json(debug ? { ok:false, reason:'bad_signature', expected: expect, got: sig } : { ok:false });

  const members = await readMembers(request);
  const member = members.find(m => String(m.id) === String(id) && m.status === 'Aktif');
  if (!member) return Response.json(debug ? { ok:false, reason:'not_found_or_inactive' } : { ok:false });

  return Response.json({ ok:true, member: { nama: member.nama, divisi: member.divisi } });
};
