<script>
  let toast=''; let showToast=false; let toastTimer;
  function pushToast(msg){ clearTimeout(toastTimer); toast=msg; showToast=true; toastTimer=setTimeout(()=>showToast=false, 2200); }

  let id=''; let loading=false; let result=null; let error='';
  async function submit(e){
    e.preventDefault(); loading=true; error=''; result=null;
    try{
      const r = await fetch('/.netlify/functions/manual2?id='+encodeURIComponent(id));
      const d = await r.json();
      if(d.ok){ result=d.member; pushToast(`<span class="inline-flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 7 9.5 17.5 4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Ditemukan & Aktif</span>`); } else { error='ID tidak ditemukan atau tidak aktif.'; pushToast(`<span class="inline-flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Tidak ditemukan</span>`); }
    }catch{ error='Gagal menghubungi server.'; } finally{ loading=false; }
  }
</script>

<section class="grid gap-4 sm:gap-6 lg:grid-cols-2 items-start">
  <div class="card card-resp p-4 sm:p-6 max-w-full" data-aos="fade-up">
    <h2 class="h2-fluid">Verifikasi Manual</h2>
    <p class="opacity-80">Masukkan ID anggota untuk cek status keanggotaan.</p>
    <form class="mt-4 grid gap-3" on:submit={submit}>
      <label for="mid" class="text-sm opacity-80">ID Anggota</label>
      <input id="mid" required bind:value={id} class="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="contoh: 001" />
      <button class="btn btn-primary ripple w-max" disabled={loading}>{loading?'Memeriksa...':'Periksa'}</button>
    </form>
  </div>

  <div class="space-y-4">
    {#if result}
      <div class="card card-resp p-4 sm:p-6 max-w-full" data-aos="zoom-in">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">✅</div>
          <div><p class="font-semibold">{result.nama}</p><p class="text-sm opacity-80">{result.divisi}</p></div>
        </div>
      </div>
    {:else if error}
      <div class="card p-6 border-red-200 dark:border-red-800" data-aos="zoom-in">
        <div class="flex items-center gap-3 text-red-700 dark:text-red-200"><span class='inline-flex items-center gap-2'><svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M12 8v5M12 17v.01' stroke='currentColor' stroke-width='2' stroke-linecap='round'/><path d='M12 3l9 18H3L12 3z' stroke='currentColor' stroke-width='2' fill='none'/></svg> {error}</span></div>
      </div>
    {:else if loading}
      <div class="card card-resp p-4 sm:p-6 max-w-full" data-aos="fade-left"><div class="h-5 w-40 skeleton rounded mb-3"></div><div class="h-4 w-28 skeleton rounded"></div></div>
    {:else}
      <div class="card p-6 text-sm opacity-80" data-aos="fade-left">Hasil akan tampil di sini.</div>
    {/if}
  </div>
</section>


{#if showToast}
  <div class="fixed bottom-5 right-5 z-30 px-4 py-2 rounded-xl bg-white/95 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 shadow-soft">
    <span class="text-sm">{@html toast}</span>
  </div>
{/if}
