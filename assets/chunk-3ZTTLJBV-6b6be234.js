import{T as f,d as x,m as y,r as p}from"./chunk-QEVFQ4EU-28380a87.js";import{r as c}from"./index-8db94870.js";import{t as S,a as C}from"./index-50470307.js";import{G as m}from"./emotion-react.browser.esm-0db81468.js";import{j as n}from"./jsx-runtime-94f6e698.js";function d(e={}){const{strict:t=!0,errorMessage:o="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:s}=e,r=c.createContext(void 0);r.displayName=s;function i(){var l;const u=c.useContext(r);if(!u&&t){const a=new Error(o);throw a.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,a,i),a}return u}return[r.Provider,i,r]}function M(e){const{cssVarsRoot:t,theme:o,children:s}=e,r=c.useMemo(()=>S(o),[o]);return n.jsxs(f,{theme:r,children:[n.jsx(h,{root:t}),s]})}function h({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return n.jsx(m,{styles:o=>({[t]:o.__cssVars})})}d({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function T(e){return d({name:`${e}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `})}function b(){const{colorMode:e}=x();return n.jsx(m,{styles:t=>{const o=y(t,"styles.global"),s=p(o,{theme:t,colorMode:e});return s?C(s)(t):void 0}})}export{b as G,M as T,T as c};
//# sourceMappingURL=chunk-3ZTTLJBV-6b6be234.js.map