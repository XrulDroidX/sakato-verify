export default async (request, context) => {
  try {
    const u = new URL(request.url);
    const id = u.searchParams.get('id');
    if (!id) return Response.json({ ok:false });
    const base = `${u.protocol}//${u.host}`;
    const res = await fetch(`${base}/data/members.json`, { headers: { 'Cache-Control': 'no-cache' } });
    if (!res.ok) return Response.json({ ok:false });
    const arr = await res.json().catch(()=>[]);
    const member = Array.isArray(arr) ? arr.find(m => String(m.id) === String(id) && m.status === 'Aktif') : null;
    if (!member) return Response.json({ ok:false });
    return Response.json({ ok:true, member: { nama: member.nama, divisi: member.divisi } });
  } catch (e) {
    return Response.json({ ok:false }, { status: 500 });
  }
};
