import{b as p,f as g,k as h,i as a,l as w,m as y}from"./entry.78e6994e.js";const k=p({name:"Markdown",functional:!0,props:{use:{type:[String,Function],default:"default"},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:u}=y(),{between:s}=g();return{tags:h(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]),between:s,parent:u}},render({use:n,unwrap:u,between:s,tags:l,parent:r}){var f;try{const o=typeof n=="string"?(r==null?void 0:r.slots[n])||((f=r==null?void 0:r.parent)==null?void 0:f.slots[n]):n;if(!o)return a("div");if(!u)return[o()];const{flatUnwrap:d}=w(),i=d(o(),l);return s?i.flatMap((t,e)=>e===0?[t]:[s(),t]):i.reduce((t,e)=>(typeof e.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=e.children:t.push(e.children):t.push(e),t),[])}catch{return a("div")}}});export{k as default};
