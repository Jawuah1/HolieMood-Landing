import{j as e,m as o,A as c}from"./proxy.DKo6DEIB.js";import{r as l}from"./index.BJfUAbRs.js";function d({activeDevice:i,onToggle:t}){return e.jsxs("div",{className:"flex items-center justify-center gap-1.5 rounded-lg border border-black/10 bg-black/[0.03] p-1",children:[e.jsxs(o.button,{type:"button",onClick:()=>t("iphone"),className:`relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${i==="iphone"?"text-gray-600":"text-gray-500 hover:text-black"}`,whileTap:{scale:.95},children:[i==="iphone"&&e.jsx(o.div,{layoutId:"activeDevice",className:"absolute inset-0 rounded-md bg-white/10",transition:{type:"spring",bounce:.15,duration:.5}}),e.jsx("span",{className:"relative z-10",children:"Phone"})]}),e.jsxs(o.button,{type:"button",onClick:()=>t("ipad"),className:`relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${i==="ipad"?"text-gray-600":"text-gray-500 hover:text-black"}`,whileTap:{scale:.95},children:[i==="ipad"&&e.jsx(o.div,{layoutId:"activeDevice",className:"absolute inset-0 rounded-md bg-white/10",transition:{type:"spring",bounce:.15,duration:.5}}),e.jsx("span",{className:"relative z-10",children:"Tablet"})]})]})}function p({images:i}){const[t,a]=l.useState("iphone"),r=i[t];return e.jsxs("div",{className:"mb-16",children:[e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Screenshots"}),e.jsx(d,{activeDevice:t,onToggle:a})]}),e.jsx("div",{className:`relative overflow-hidden ${t==="iphone"?"min-h-[400px]":"min-h-[300px]"}`,children:e.jsx(c,{mode:"wait",children:e.jsx(o.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"screenshots-container scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20",onAnimationComplete:()=>{const s=document.querySelector(".screenshots-container");s&&s.classList.add("overflow-x-auto")},onAnimationStart:()=>{const s=document.querySelector(".screenshots-container");s&&s.classList.remove("overflow-x-auto")},children:e.jsx("div",{className:"flex gap-6 pb-4",children:r.map((s,n)=>e.jsx(o.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{delay:n*.1}},exit:{opacity:0,y:20},type:"button",onClick:()=>window.openLightbox?.(n,t),className:"relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none",children:e.jsx("img",{src:s,alt:`Screenshot ${n+1}`,className:`rounded-xl border border-white/10 object-cover ${t==="iphone"?"aspect-[9/16] w-[260px]":"aspect-[4/3] w-[360px] h-[500px]"}`,loading:"lazy"})},s))})},t)})})]})}export{p as default};
