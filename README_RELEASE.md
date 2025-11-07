SAKATO-Verif — Release Clean

- Hanya 3 fungsi: gate2.mjs, verify2.mjs, manual2.mjs
- SECRET dipatok di config.server.mjs (ubah jika perlu).
- TTL kembali ke 600 detik.
- Redirect /gate/:id -> /.netlify/functions/gate2?id=:id
- UI: /verif (pakai verify2), /manual (pakai manual2)
- Data: public/data/members.json (read-only; edit dan redeploy untuk update).

Tips:
- Jika pernah ada fungsi lawas di site yang sama, pakai "Clear cache and deploy" saat upload zip ini.
