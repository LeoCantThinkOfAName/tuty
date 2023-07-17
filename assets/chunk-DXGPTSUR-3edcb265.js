import{a as _,c as p,f as I,b as w}from"./chunk-QEVFQ4EU-28380a87.js";import{j as n}from"./jsx-runtime-94f6e698.js";import{u as E}from"./index-a91c9d3c.js";import{r as x}from"./index-8db94870.js";import{o as F,c as R,d as O,e as P}from"./index-50470307.js";var[M,z]=_({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function B(e){var r;const a=e.split(" "),t=(r=a[0])!=null?r:"",s=a.length>1?a[a.length-1]:"";return t&&s?`${t.charAt(0)}${s.charAt(0)}`:t.charAt(0)}function y(e){const{name:r,getInitials:a,...t}=e,s=z();return n.jsx(p.div,{role:"img","aria-label":r,...t,__css:s.label,children:r?a==null?void 0:a(r):null})}y.displayName="AvatarName";var j=e=>n.jsxs(p.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[n.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),n.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function T(e){const{loading:r,src:a,srcSet:t,onLoad:s,onError:u,crossOrigin:l,sizes:m,ignoreFallback:f}=e,[d,g]=x.useState("pending");x.useEffect(()=>{g(a?"loading":"pending")},[a]);const c=x.useRef(),h=x.useCallback(()=>{if(!a)return;i();const o=new Image;o.src=a,l&&(o.crossOrigin=l),t&&(o.srcset=t),m&&(o.sizes=m),r&&(o.loading=r),o.onload=v=>{i(),g("loaded"),s==null||s(v)},o.onerror=v=>{i(),g("failed"),u==null||u(v)},c.current=o},[a,l,t,m,s,u,r]),i=()=>{c.current&&(c.current.onload=null,c.current.onerror=null,c.current=null)};return E(()=>{if(!f)return d==="loading"&&h(),()=>{i()}},[d,h,f]),f?"loaded":d}function S(e){const{src:r,srcSet:a,onError:t,onLoad:s,getInitials:u,name:l,borderRadius:m,loading:f,iconLabel:d,icon:g=n.jsx(j,{}),ignoreFallback:c,referrerPolicy:h,crossOrigin:i}=e,v=T({src:r,onError:t,crossOrigin:i,ignoreFallback:c})==="loaded";return!r||!v?l?n.jsx(y,{className:"chakra-avatar__initials",getInitials:u,name:l}):x.cloneElement(g,{role:"img","aria-label":d}):n.jsx(p.img,{src:r,srcSet:a,alt:l,onLoad:s,referrerPolicy:h,crossOrigin:i??void 0,className:"chakra-avatar__img",loading:f,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:m}})}S.displayName="AvatarImage";var W={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},$=I((e,r)=>{const a=w("Avatar",e),[t,s]=x.useState(!1),{src:u,srcSet:l,name:m,showBorder:f,borderRadius:d="full",onError:g,onLoad:c,getInitials:h=B,icon:i=n.jsx(j,{}),iconLabel:o=" avatar",loading:v,children:A,borderColor:b,ignoreFallback:L,crossOrigin:N,...k}=F(e),C={borderRadius:d,borderWidth:f?"2px":void 0,...W,...a.container};return b&&(C.borderColor=b),n.jsx(p.span,{ref:r,...k,className:R("chakra-avatar",e.className),"data-loaded":O(t),__css:C,children:n.jsxs(M,{value:a,children:[n.jsx(S,{src:u,srcSet:l,loading:v,onLoad:P(c,()=>{s(!0)}),onError:g,getInitials:h,name:m,borderRadius:d,icon:i,iconLabel:o,ignoreFallback:L,crossOrigin:N}),A]})})});$.displayName="Avatar";export{$ as A};
//# sourceMappingURL=chunk-DXGPTSUR-3edcb265.js.map
