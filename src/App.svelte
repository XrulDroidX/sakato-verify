<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Verif from './routes/Verif.svelte';
  import Manual from './routes/Manual.svelte';
  import Home from './routes/Home.svelte';
  let route = location.pathname; const setRoute = () => route = location.pathname; window.addEventListener('popstate', setRoute);

  import Sidebar from "./components/Sidebar.svelte";</script>

<div class="min-h-screen bg-grad-hero text-gray-900 dark:text-gray-100 wrap-no-overflow">
  <Header />
  <main class="container max-w-screen-3xl py-6 sm:py-8 flex gap-6">
    <Sidebar />
  <div class="min-w-0 grow">
    {#if route === '/verif'}
      <Verif />
    {:else if route === '/manual'}
      <Manual />
    {:else}
      <Home />
    {/if}
  </div>
  </main>
  <Footer />
</div>
