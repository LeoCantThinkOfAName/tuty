import{u as l}from"./index-3e7aa64e.js";import{r as t}from"./index-76fb7be0.js";import{j as a}from"./jsx-runtime-ffb262ed.js";var s=t.createContext({getDocument(){return document},getWindow(){return window}});s.displayName="EnvironmentContext";function w({defer:o}={}){const[,u]=t.useReducer(n=>n+1,0);return l(()=>{o&&u()},[o]),t.useContext(s)}function v(o){const{children:u,environment:n,disabled:c}=o,i=t.useRef(null),m=t.useMemo(()=>n||{getDocument:()=>{var e,r;return(r=(e=i.current)==null?void 0:e.ownerDocument)!=null?r:document},getWindow:()=>{var e,r;return(r=(e=i.current)==null?void 0:e.ownerDocument.defaultView)!=null?r:window}},[n]),d=!c||!n;return a.jsxs(s.Provider,{value:m,children:[u,d&&a.jsx("span",{id:"__chakra_env",hidden:!0,ref:i})]})}v.displayName="EnvironmentProvider";export{v as E,w as u};
//# sourceMappingURL=chunk-VMD3UMGK-d770574c.js.map