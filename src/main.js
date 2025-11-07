import App from './App.svelte';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './app.css';
import './app-harden.css';

AOS.init({ duration: 700, easing: 'ease-in-out', once: true });

const app = new App({ target: document.getElementById('app') });
export default app;
