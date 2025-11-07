<script>
  import { onMount } from 'svelte';
  let message='Memverifikasi...'; let ok=false; let detail=null;
  onMount(async () => {
    const p = new URLSearchParams(location.search);
    const id=p.get('id'); const sig=p.get('sig'); const exp=p.get('exp');
    if(!id||!sig||!exp){ message='❌ Tautan tidak valid'; return; }
    const res = await fetch(`/.netlify/functions/verify2?id=${encodeURIComponent(id)}&sig=${encodeURIComponent(sig)}&exp=${encodeURIComponent(exp)}`);
    const data = await res.json().catch(()=>({ok:false}));
    if(data.ok){ ok=true; message='Anggota Terverifikasi'; detail=data.member; } else { ok=false; message='Tautan tidak valid'; }
  });
</script>

<section class="grid gap-4 sm:gap-6 lg:grid-cols-2 items-start">
  <div class="card card-resp p-4 sm:p-6 max-w-full" data-aos="fade-up">
    <h2 class="h2-fluid bg-clip-text text-transparent bg-gradient-to-r from-mint-500 to-sky-500">
    {#if ok}
      <span class="inline-flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M20 7 9.5 17.5 4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Anggota Terverifikasi
      </span>
    {:else}
      ❌ {message}
    {/if}
  </h2>
    {#if detail}
      <div class="mt-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-soft" data-aos="zoom-in">
        <div class='flex items-center gap-2 mb-2'><div class='w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center badge-pulse'><svg width='14' height='14' viewBox='0 0 24 24' fill='none'><path d='M20 7 9.5 17.5 4 12' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></div><span class='text-sm opacity-80'>Terverifikasi & Aktif</span></div>
        <p class="text-lg font-semibold">{detail.nama}</p>
        <p class="opacity-80">{detail.divisi}</p>
      </div>
    {:else}
    <div class='mt-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-soft'>
      <div class='h-5 w-40 skeleton rounded mb-3'></div>
      <div class='h-4 w-28 skeleton rounded'></div>
    </div>
  {/if}
  </div>
  <div class="card p-6 card-hover hover-tilt max-w-full" data-aos="fade-left">
    <div class="relative overflow-hidden rounded-2xl">
    <div class="h-28 sm:h-32 md:h-40 w-full rounded-xl bg-gradient-to-br from-mint-100 via-sky-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 shadow-inner relative">
  <div class="absolute -inset-8 opacity-40 blur-2xl animate-pulse bg-gradient-to-tr from-mint-300/50 via-sky-300/50 to-white/10"></div>
  <div class="absolute inset-0 grid grid-cols-6 gap-2 p-3 opacity-25">
    {#each Array(36) as _,i}
      <div class="rounded-lg border border-white/60 dark:border-gray-800/60"></div>
    {/each}
  </div>
  <div class="absolute inset-0 flex items-center justify-center text-xs opacity-50">Frame Ambient</div>
</div>
</div>
<!-- ambient frame end -->
<!-- removed tips list -->
<!-- -->
      
      
      
    
  </div>
</section>
