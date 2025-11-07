
<script>
  const nav = (p) => { history.pushState({},'',p); window.dispatchEvent(new PopStateEvent('popstate')); };
  const items = [
    { label:'Dashboard', path:'/', icon:`<rect x='4' y='4' width='7' height='7' rx='2'/><rect x='13' y='4' width='7' height='5' rx='2'/><rect x='13' y='11' width='7' height='9' rx='2'/><rect x='4' y='12' width='7' height='8' rx='2'/>` },
    { label:'Verifikasi QR', path:'/verif', icon:`<path d='M4 4h8v8H4zM12 4h4M16 8h4M12 12h4v4m-4 4h4M4 12h4v4H4z'/>` },
    { label:'Verifikasi Manual', path:'/manual', icon:`<circle cx='11' cy='11' r='6'/><path d='m20 20-4-4'/>` },
  ];
  const is = (p) => location.pathname === p;
</script>

<aside class="hidden lg:block w-[240px] shrink-0">
  <div class="sticky top-[76px] space-y-3">
    <div class="p-4 rounded-3xl border border-white/70 dark:border-gray-800/60 bg-gradient-to-br from-mint-50 via-sky-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 shadow-soft">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-2xl bg-white/80 dark:bg-gray-800/60 flex items-center justify-center shadow-inner">
          <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-80" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12h18M12 3v18"/>
          </svg>
        </div>
        <div class="text-sm opacity-80">Menu</div>
      </div>
      <nav class="grid gap-1">
        {#each items as it}
          <a href={it.path}
             on:click|preventDefault={() => nav(it.path)}
             class="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-white/60 dark:hover:bg-gray-800/60 border border-transparent hover:border-white/80 dark:hover:border-gray-700 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="opacity-90">{@html it.icon}</svg>
            <span class="text-sm">{it.label}</span>
            {#if is(it.path)}<span class="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-mint-400 to-sky-400 shadow-inner"></span>{/if}
          </a>
        {/each}
      </nav>
    </div>
    <div class="p-4 rounded-3xl border border-white/70 dark:border-gray-800/60 bg-white/70 dark:bg-gray-900/50 shadow-soft">
      <div class="text-xs opacity-70">Quick Links</div>
      <div class="mt-2 grid gap-2">
        <a href="/gate/001" class="chip">Contoh Gate /001</a>
        <a href="/manual" on:click|preventDefault={() => nav('/manual')} class="chip">Input Manual</a>
      </div>
    </div>
  </div>
</aside>
