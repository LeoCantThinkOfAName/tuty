import{j as a}from"./jsx-runtime-94f6e698.js";import{M as l,B as p}from"./index-ffd16f0d.js";import{r}from"./index-8db94870.js";import{u as y}from"./useTranslation-e5e4d349.js";import{u as x}from"./chunk-S432VF2S-6afccefc.js";import{f as _,c as h,d as B}from"./chunk-QEVFQ4EU-04d6573c.js";import{B as g}from"./chunk-6CSUKJP7-a7e455d0.js";import{B as H}from"./chunk-NAA7TEES-6777cfe0.js";var b=_(function(d,t){const{className:o,...e}=d,s=x();return a.jsx(h.div,{ref:t,className:B("chakra-card__body",o),__css:s.body,...e})});const c=({content:n,forceHide:d})=>{const{t}=y(),o=r.useRef(null),[e,s]=r.useState(!1),[f,u]=r.useState(!1),m=()=>s(!e);return r.useLayoutEffect(()=>{const i=o.current;(((i==null?void 0:i.offsetHeight)??0)>l*p||d)&&(u(!0),s(!0))},[]),a.jsxs(b,{children:[a.jsx(g,{ref:o,maxH:e?l:"100%",overflow:"hidden",dangerouslySetInnerHTML:{__html:n}}),f&&a.jsx(H,{size:"xs",borderRadius:"full",mt:"3",px:"3",onClick:m,children:t(e?"post.unfold":"post.fold")})]})};try{c.displayName="PostBody",c.__docgenInfo={description:"",displayName:"PostBody",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},forceHide:{defaultValue:null,description:"",name:"forceHide",required:!1,type:{name:"boolean | undefined"}}}}}catch{}export{c as P};
//# sourceMappingURL=PostBody-905ab0c3.js.map
