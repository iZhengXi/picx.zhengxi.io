if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about.35d1b809.css",revision:null},{url:"assets/about.77397db8.js",revision:null},{url:"assets/index.8c55dea3.js",revision:null},{url:"assets/index.941076c9.css",revision:null},{url:"assets/register-sw.728c22da.js",revision:null},{url:"assets/vendor.7e341bed.js",revision:null},{url:"assets/vendor.ae064b33.css",revision:null},{url:"index.html",revision:"e8ca7d1ca0004a17ab2875b6cc86bb75"},{url:"./logo@192x192.png",revision:"2141830aeff90ef6988f4e01aba62fad"},{url:"manifest.webmanifest",revision:"d756afaa08532ee66890bc528374b6f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
