
<script>
  const go = (p) => { history.pushState({},'',p); window.dispatchEvent(new PopStateEvent('popstate')); };
</script>

<section class="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 items-start">
  <div class="card card-resp p-6 md:p-8 shadow-depth" data-aos="fade-up">
    <div class="text-xs uppercase tracking-wide opacity-60">Total Anggota</div>
    <div class="h1-fluid mt-1">1.280</div>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <button class="btn btn-primary ripple w-full">Buat QR</button>
      <button class="btn btn-ghost ripple w-full" on:click={() => go('/manual')}>Cek Manual</button>
    </div>
  </div>

  <div class="card card-resp p-6" data-aos="fade-up" data-aos-delay="50">
    <div class="flex items-center justify-between mb-2">
      <div class="font-semibold">Spreading</div>
      <div class="chip">Bulan Ini</div>
    </div>
    <div class="h-28 rounded-xl bg-gradient-to-b from-sky-100 to-white dark:from-gray-800/40 dark:to-gray-900/40 relative overflow-hidden">
      <div class="absolute inset-0 flex items-end gap-2 p-3">
        {#each [30,60,40,70,45,80,55,65] as h}
          <div class="w-6 sm:w-7 rounded-t-lg bg-sky-300/70 dark:bg-sky-400/30" style={`height:${h}%`}></div>
        {/each}
      </div>
    </div>
  </div>

  <div class="card card-resp p-6" data-aos="fade-up" data-aos-delay="100">
    <div class="font-semibold mb-3">Transaksi Terakhir</div>
    <div class="grid gap-3 text-sm">
      {#each ['Registrasi', 'Perbarui Data', 'Cetak QR', 'Verifikasi'] as t, i}
        <div class="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-gray-800/50 border border-white/70 dark:border-gray-800/60">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-mint-200 to-sky-200 dark:from-gray-700 dark:to-gray-800"></div>
            <span>{t}</span>
          </div>
          <span class="opacity-70">+{(i+1)*3}m</span>
        </div>
      {/each}
    </div>
  </div>

  <div class="card card-resp p-6 md:col-span-2" data-aos="fade-up">
    <div class="flex items-center justify-between mb-2">
      <div class="font-semibold">Aktivitas Mingguan</div>
      <div class="chip">Live</div>
    </div>
    <div class="h-40 rounded-2xl bg-gradient-to-b from-mint-100 to-white dark:from-gray-800/40 dark:to-gray-900/40 relative overflow-hidden">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="absolute inset-0">
        <path d="M0,30 C15,25 25,10 40,15 C55,20 60,35 75,30 C88,26 95,18 100,22 L100,40 L0,40 Z" fill="url(#g1)"/>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#a0ffe0" stop-opacity="0.8"/>
            <stop offset="1" stop-color="#9ecfff" stop-opacity="0.6"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="absolute inset-0 border-t border-white/60 dark:border-gray-800/60"></div>
    </div>
  </div>

  <div class="card card-resp p-6" data-aos="fade-up" data-aos-delay="50">
    <div class="font-semibold mb-2">Kartu Cepat</div>
    <div class="grid grid-cols-2 gap-2">
      <a href="/verif" on:click|preventDefault={() => go('/verif')} class="p-3 rounded-xl bg-white/70 dark:bg-gray-800/50 border border-white/70 dark:border-gray-800/60 hover:bg-white">Verifikasi QR</a>
      <a href="/manual" on:click|preventDefault={() => go('/manual')} class="p-3 rounded-xl bg-white/70 dark:bg-gray-800/50 border border-white/70 dark:border-gray-800/60 hover:bg-white">Verifikasi Manual</a>
    </div>
  </div>
</section>
