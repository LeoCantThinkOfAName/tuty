import{r as l}from"./index-76fb7be0.js";import{G as T}from"./emotion-react.browser.esm-88c8e6c3.js";import{j as a}from"./jsx-runtime-ffb262ed.js";import{P}from"./chunk-34PD6CUK-622f8956.js";import{T as R,G as I}from"./chunk-UBPTU7WB-be418a0b.js";import{C as D,u as N}from"./chunk-ZJJGQIVY-b66b1d78.js";import{u as q}from"./index-3e7aa64e.js";import{E as A,T as V,a as F}from"./chunk-NMI5PSXW-933d1e4b.js";import{t as L,e as B}from"./chunk-LIR5QAZY-ab9dc091.js";import"./_commonjsHelpers-de833af9.js";import"./extends-15b115a7.js";import"./index-add592e3.js";import"./index-39ab5497.js";import"./index-30c8b35e.js";import"./index-b57d6131.js";import"./chunk-2GBDXOMA-ca05fc42.js";import"./chunk-5PH6ULNP-79b6aba4.js";var O=String.raw,z=O`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,K=()=>a.jsx(T,{styles:z}),U=({scope:e=""})=>a.jsx(T,{styles:O`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${z}
    `}),p={light:"chakra-ui-light",dark:"chakra-ui-dark"};function Y(e={}){const{preventTransition:o=!0}=e,n={setDataset:r=>{const t=o?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,t==null||t()},setClassName(r){document.body.classList.add(r?p.dark:p.light),document.body.classList.remove(r?p.light:p.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var t;return((t=n.query().matches)!=null?t:r==="dark")?"dark":"light"},addListener(r){const t=n.query(),i=s=>{r(s.matches?"dark":"light")};return typeof t.addListener=="function"?t.addListener(i):t.addEventListener("change",i),()=>{typeof t.removeListener=="function"?t.removeListener(i):t.removeEventListener("change",i)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var W="chakra-ui-color-mode";function Z(e){return{ssr:!1,type:"localStorage",get(o){if(!(globalThis!=null&&globalThis.document))return o;let n;try{n=localStorage.getItem(e)||o}catch{}return n||o},set(o){try{localStorage.setItem(e,o)}catch{}}}}var H=Z(W),E=()=>{};function S(e,o){return e.type==="cookie"&&e.ssr?e.get(o):o}function j(e){const{value:o,children:n,options:{useSystemColorMode:r,initialColorMode:t,disableTransitionOnChange:i}={},colorModeManager:s=H}=e,m=t==="dark"?"dark":"light",[h,v]=l.useState(()=>S(s,m)),[y,c]=l.useState(()=>S(s)),{getSystemTheme:k,setClassName:w,setDataset:$,addListener:C}=l.useMemo(()=>Y({preventTransition:i}),[i]),b=t==="system"&&!h?y:h,d=l.useCallback(u=>{const f=u==="system"?k():u;v(f),w(f==="dark"),$(f),s.set(f)},[s,k,w,$]);q(()=>{t==="system"&&c(k())},[]),l.useEffect(()=>{const u=s.get();if(u){d(u);return}if(t==="system"){d("system");return}d(m)},[s,m,t,d]);const M=l.useCallback(()=>{d(b==="dark"?"light":"dark")},[b,d]);l.useEffect(()=>{if(r)return C(d)},[r,C,d]);const G=l.useMemo(()=>({colorMode:o??b,toggleColorMode:o?E:M,setColorMode:o?E:d,forced:o!==void 0}),[b,M,d,o]);return a.jsx(D.Provider,{value:G,children:n})}j.displayName="ColorModeProvider";var J=e=>{const{children:o,colorModeManager:n,portalZIndex:r,resetScope:t,resetCSS:i=!0,theme:s={},environment:m,cssVarsRoot:h,disableEnvironment:v,disableGlobalStyle:y}=e,c=a.jsx(A,{environment:m,disabled:v,children:o});return a.jsx(R,{theme:s,cssVarsRoot:h,children:a.jsxs(j,{colorModeManager:n,options:s.config,children:[i?a.jsx(U,{scope:t}):a.jsx(K,{}),!y&&a.jsx(I,{}),r?a.jsx(P,{zIndex:r,children:c}):c]})})},Q=e=>function({children:n,theme:r=e,toastOptions:t,...i}){return a.jsxs(J,{theme:r,...i,children:[a.jsx(V,{value:t==null?void 0:t.defaultOptions,children:n}),a.jsx(F,{...t})]})},X=Q(L);const{addons:_}=__STORYBOOK_MODULE_PREVIEW_API__;var x="@chakra-ui/storybook-addon",ee=`${x}/direction-tool`,g={TOGGLE_COLOR_MODE:`${x}/toggleColorMode`,TOGGLE_DIRECTION:`${x}/toggleDirection`};function te(){let{setColorMode:e}=N();return l.useEffect(()=>{let o=_.getChannel(),n=r=>e(r);return o.on(g.TOGGLE_COLOR_MODE,n),()=>{o.removeListener(g.TOGGLE_COLOR_MODE,n)}},[e]),null}var oe=(e="ltr")=>{let[o,n]=l.useState(e.toLowerCase());return l.useEffect(()=>{document.documentElement.dir=o},[o]),l.useEffect(()=>{let r=_.getChannel(),t=i=>n(i);return r.on(g.TOGGLE_DIRECTION,t),()=>{r.removeListener(g.TOGGLE_DIRECTION,t)}},[n]),o},re=(e,o)=>{let{parameters:{chakra:n},globals:{[ee]:r}}=o,t=n!=null&&n.theme?typeof n.theme=="function"?n.theme(o):n.theme:L,i=oe(r||(t==null?void 0:t.direction)),s=l.useMemo(()=>B({direction:i},t),[t,i]);return a.jsxs(X,{...n,theme:s,children:[a.jsx(te,{}),e(o)]})},ne={decorators:[re]},we=ne;export{we as default};
//# sourceMappingURL=preview-f5b01e72.js.map
