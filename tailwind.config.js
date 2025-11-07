/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{svelte,js}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: { DEFAULT:'1rem', sm:'1rem', md:'2rem' } },
    extend: {
      screens: { 'xs':'420px', '3xl':'1440px' },
      maxWidth: { 'screen-3xl':'1440px' },
      colors: {
        brand: { 50:'#f5f3ff',100:'#ede9fe',200:'#ddd6fe',300:'#c4b5fd',400:'#a78bfa',500:'#8b5cf6',600:'#7c3aed' },
        mint:  { 50:'#f0fffa',100:'#e7fff6',200:'#c9ffec',300:'#a0ffe0',400:'#79f5d0',500:'#47e6bf' },
        sky:   { 50:'#f2f9ff',100:'#e8f4ff',200:'#d3ebff',300:'#b8dcff',400:'#9ecfff',500:'#81c2ff' },
        slate: { 50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',900:'#0f172a' }
      },
      boxShadow: {
        soft: '0 12px 30px -14px rgba(2,6,23,.20)',
        depth: '0 18px 40px -22px rgba(2,6,23,.28)',
        inner: 'inset 0 1px 4px rgba(2,6,23,.06)'
      },
      borderRadius: { xl:'1rem', '2xl':'1.25rem', '3xl':'1.75rem' },
      fontFamily: { inter:['Inter','ui-sans-serif','system-ui'] },
      transitionTimingFunction: { 'swift':'cubic-bezier(.2,.8,.2,1)' }
    }
  },
  plugins: []
}
