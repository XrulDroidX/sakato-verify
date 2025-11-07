<script>
  function nav(path){ history.pushState({},'',path); window.dispatchEvent(new PopStateEvent('popstate')); }
  let dark = false;
  const apply = () => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('theme', dark?'dark':'light'); }
  const init = () => { dark = localStorage.getItem('theme') === 'dark'; apply(); }; init();
  const is = (p) => location.pathname === p;
</script>

<header class="sticky top-0 z-20 border-b border-white/50 dark:border-gray-800/60 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
  <div class="container py-2 sm:py-3 flex items-center justify-between max-w-screen-3xl">
    <a href="/" on:click|preventDefault={() => nav('/')} class="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-sky-400">SAKATO Verif</a>
    <nav class="nav-scroller flex items-center gap-2 text-sm">
      <a href="/" on:click|preventDefault={() => nav('/')} class="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 {is('/')?'chip relative after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-gradient-to-r after:from-brand-400 after:to-sky-300 after:rounded-full':''}">Beranda</a>
      <a href="/manual" on:click|preventDefault={() => nav('/manual')} class="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 {is('/manual')?'chip relative after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-gradient-to-r after:from-brand-400 after:to-sky-300 after:rounded-full':''}">Verifikasi Manual</a>
      <a href="/verif" on:click|preventDefault={() => nav('/verif')} class="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 {is('/verif')?'chip relative after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-gradient-to-r after:from-brand-400 after:to-sky-300 after:rounded-full':''}">Verifikasi QR</a>
      <button class="ml-2 btn btn-ghost ripple" on:click={() => { dark=!dark; apply(); }}>🌓</button>
    </nav>
  </div>
</header>
