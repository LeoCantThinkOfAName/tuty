import{r as v}from"./index-8db94870.js";import{u as a}from"./index-d68b7e21.js";function P(c){const{value:s,defaultValue:p,onChange:d,shouldUpdate:f=(t,u)=>t!==u}=c,r=a(d),l=a(f),[i,h]=v.useState(p),e=s!==void 0,o=e?s:i,m=a(t=>{const n=typeof t=="function"?t(o):t;l(o,n)&&(e||h(n),r(n))},[e,r,o,l]);return[o,m]}export{P as u};
//# sourceMappingURL=index-647bcbfd.js.map
