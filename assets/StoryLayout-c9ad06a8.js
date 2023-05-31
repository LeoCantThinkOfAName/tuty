import{j as s}from"./jsx-runtime-94f6e698.js";import{N as X,g as Z,L as ee}from"./index-91aff37b.js";import{u as oe}from"./useTranslation-6ff178cf.js";import{c as ne,L as H}from"./chunk-YTV6DHKL-4e43262a.js";import{g as T,h as S,f as j,j as _,n as E,D as P,u as te,o as se}from"./chunk-QEVFQ4EU-b29d1d0e.js";import{u as ae}from"./index-647bcbfd.js";import{m as ie}from"./index-bf97d06a.js";import{r as u}from"./index-8db94870.js";import{I as re}from"./chunk-DKFDJSXF-993b141d.js";import{w as W,a as C}from"./chunk-LB6CWFOC-e961f13a.js";import{A as ce}from"./index-ca701c54.js";import{m as le}from"./motion-f5af864f.js";import{F as k}from"./chunk-MPFPK3CX-1833e1df.js";import{I as de}from"./chunk-GYFRIY2Z-40b81b96.js";import{T as ue}from"./chunk-P74GIWPW-24e05827.js";var[me,D]=T({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[pe,O]=T({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[fe,$e,he,xe]=ne(),z=S(function(t,o){const{getButtonProps:n}=O(),a=n(t,o),c={display:"flex",alignItems:"center",width:"100%",outline:0,...D().button};return s.jsx(j.button,{...a,className:_("chakra-accordion__button",t.className),__css:c})});z.displayName="AccordionButton";function ye(e){const{onChange:t,defaultIndex:o,index:n,allowMultiple:a,allowToggle:i,...c}=e;Ae(e),be(e);const y=he(),[h,d]=u.useState(-1);u.useEffect(()=>()=>{d(-1)},[]);const[r,m]=ae({value:n,defaultValue(){return a?o??[]:o??-1},onChange:t});return{index:r,setIndex:m,htmlProps:c,getAccordionItemProps:l=>{let g=!1;return l!==null&&(g=Array.isArray(r)?r.includes(l):r===l),{isOpen:g,onChange:f=>{if(l!==null)if(a&&Array.isArray(r)){const w=f?r.concat(l):r.filter(I=>I!==l);m(w)}else f?m(l):i&&m(-1)}}},focusedIndex:h,setFocusedIndex:d,descendants:y}}var[ge,B]=T({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ve(e){const{isDisabled:t,isFocusable:o,id:n,...a}=e,{getAccordionItemProps:i,setFocusedIndex:c}=B(),y=u.useRef(null),h=u.useId(),d=n??h,r=`accordion-button-${d}`,m=`accordion-panel-${d}`;_e(e);const{register:v,index:l,descendants:g}=xe({disabled:t&&!o}),{isOpen:p,onChange:f}=i(l===-1?null:l);we({isOpen:p,isDisabled:t});const w=()=>{f==null||f(!0)},I=()=>{f==null||f(!1)},F=u.useCallback(()=>{f==null||f(!p),c(l)},[l,c,p,f]),L=u.useCallback(N=>{const b={ArrowDown:()=>{const x=g.nextEnabled(l);x==null||x.node.focus()},ArrowUp:()=>{const x=g.prevEnabled(l);x==null||x.node.focus()},Home:()=>{const x=g.firstEnabled();x==null||x.node.focus()},End:()=>{const x=g.lastEnabled();x==null||x.node.focus()}}[N.key];b&&(N.preventDefault(),b(N))},[g,l]),R=u.useCallback(()=>{c(l)},[c,l]),J=u.useCallback(function(A={},b=null){return{...A,type:"button",ref:ie(v,y,b),id:r,disabled:!!t,"aria-expanded":!!p,"aria-controls":m,onClick:E(A.onClick,F),onFocus:E(A.onFocus,R),onKeyDown:E(A.onKeyDown,L)}},[r,t,p,F,R,L,m,v]),Q=u.useCallback(function(A={},b=null){return{...A,ref:b,role:"region",id:m,"aria-labelledby":r,hidden:!p}},[r,p,m]);return{isOpen:p,isDisabled:t,isFocusable:o,onOpen:w,onClose:I,getButtonProps:J,getPanelProps:Q,htmlProps:a}}function Ae(e){const t=e.index||e.defaultIndex,o=t!=null&&!Array.isArray(t)&&e.allowMultiple;P({condition:!!o,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function be(e){P({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function _e(e){P({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function we(e){P({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function U(e){const{isOpen:t,isDisabled:o}=O(),{reduceMotion:n}=B(),a=_("chakra-accordion__icon",e.className),i=D(),c={opacity:o?.4:1,transform:t?"rotate(-180deg)":void 0,transition:n?void 0:"transform 0.2s",transformOrigin:"center",...i.icon};return s.jsx(re,{viewBox:"0 0 24 24","aria-hidden":!0,className:a,__css:c,...e,children:s.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}U.displayName="AccordionIcon";var V=S(function(t,o){const{children:n,className:a}=t,{htmlProps:i,...c}=ve(t),h={...D().container,overflowAnchor:"none"},d=u.useMemo(()=>c,[c]);return s.jsx(pe,{value:d,children:s.jsx(j.div,{ref:o,...i,className:_("chakra-accordion__item",a),__css:h,children:typeof n=="function"?n({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):n})})});V.displayName="AccordionItem";var Ie=e=>e!=null&&parseInt(e.toString(),10)>0,$={exit:{height:{duration:.2,ease:C.ease},opacity:{duration:.3,ease:C.ease}},enter:{height:{duration:.3,ease:C.ease},opacity:{duration:.4,ease:C.ease}}},Ne={exit:({animateOpacity:e,startingHeight:t,transition:o,transitionEnd:n,delay:a})=>{var i;return{...e&&{opacity:Ie(t)?1:0},height:t,transitionEnd:n==null?void 0:n.exit,transition:(i=o==null?void 0:o.exit)!=null?i:W.exit($.exit,a)}},enter:({animateOpacity:e,endingHeight:t,transition:o,transitionEnd:n,delay:a})=>{var i;return{...e&&{opacity:1},height:t,transitionEnd:n==null?void 0:n.enter,transition:(i=o==null?void 0:o.enter)!=null?i:W.enter($.enter,a)}}},Y=u.forwardRef((e,t)=>{const{in:o,unmountOnExit:n,animateOpacity:a=!0,startingHeight:i=0,endingHeight:c="auto",style:y,className:h,transition:d,transitionEnd:r,...m}=e,[v,l]=u.useState(!1);u.useEffect(()=>{const I=setTimeout(()=>{l(!0)});return()=>clearTimeout(I)},[]),P({condition:Number(i)>0&&!!n,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const g=parseFloat(i.toString())>0,p={startingHeight:i,endingHeight:c,animateOpacity:a,transition:v?d:{enter:{duration:0}},transitionEnd:{enter:r==null?void 0:r.enter,exit:n?r==null?void 0:r.exit:{...r==null?void 0:r.exit,display:g?"block":"none"}}},f=n?o:!0,w=o||n?"enter":"exit";return s.jsx(ce,{initial:!1,custom:p,children:f&&s.jsx(le.div,{ref:t,...m,className:_("chakra-collapse",h),style:{overflow:"hidden",display:"block",...y},custom:p,variants:Ne,initial:n?"exit":!1,animate:w,exit:"exit"})})});Y.displayName="Collapse";var q=S(function(t,o){const{className:n,motionProps:a,...i}=t,{reduceMotion:c}=B(),{getPanelProps:y,isOpen:h}=O(),d=y(i,o),r=_("chakra-accordion__panel",n),m=D();c||delete d.hidden;const v=s.jsx(j.div,{...d,__css:m.panel,className:r});return c?v:s.jsx(Y,{in:h,...a,children:v})});q.displayName="AccordionPanel";var G=S(function({children:t,reduceMotion:o,...n},a){const i=te("Accordion",n),c=se(n),{htmlProps:y,descendants:h,...d}=ye(c),r=u.useMemo(()=>({...d,reduceMotion:!!o}),[d,o]);return s.jsx(fe,{value:h,children:s.jsx(ge,{value:r,children:s.jsx(me,{value:i,children:s.jsx(j.div,{ref:a,...y,className:_("chakra-accordion",n.className),__css:i.root,children:t})})})})});G.displayName="Accordion";const Pe={ROOT:"/",SEARCH:"/search/:term"},M=({menu:e,defaultIndex:t})=>{const{t:o}=oe();return s.jsxs(k,{flexDir:"column",p:"5",position:"sticky",w:"20rem",h:"100%",boxShadow:"md",children:[s.jsx(de,{type:"text",placeholder:o("sideBar.searchInput.placeholder"),mb:"5"}),s.jsx(k,{flex:"1",flexDir:"column",children:s.jsx(G,{defaultIndex:t,children:e==null?void 0:e.map(n=>s.jsxs(V,{borderTop:"none",borderBottom:"none",children:[s.jsxs(z,{_hover:{bg:"initial"},children:[s.jsx(ue,{fontWeight:"bold",w:"100%",textAlign:"left",fontSize:"lg",children:o(n.category)}),s.jsx(U,{})]}),s.jsx(q,{p:"0",children:n.items.map(a=>s.jsx(H,{_activeLink:{bg:"blackAlpha.100"},_hover:{textDecor:"none",bg:"blackAlpha.100"},_dark:{_hover:{bg:"whiteAlpha.100"},_activeLink:{bg:"whiteAlpha.100"}},display:"block",as:X,p:"2",pl:"8",to:Z(Pe.SEARCH,{term:o(a.path)}),children:o(a.title)},a.title))})]},n.category))})}),s.jsx(H,{as:ee,to:"",color:"gray.500",children:o("routes.privacyPolicy")})]})};M.defaultProps={menu:[],defaultIndex:[0]};try{M.displayName="SideBar",M.__docgenInfo={description:"",displayName:"SideBar",props:{menu:{defaultValue:{value:"[]"},description:"",name:"menu",required:!1,type:{name:"{ category: string; items: { path: string; title: string; }[]; }[] | undefined"}}}}}catch{}const K=({children:e})=>s.jsx(k,{h:"100vh",w:"100vw",flexDir:"column",children:s.jsx(k,{minH:"100%",alignItems:"stretch",flexDir:"column",children:e})});try{K.displayName="StoryLayout",K.__docgenInfo={description:"",displayName:"StoryLayout",props:{}}}catch{}export{M as S,K as a};
//# sourceMappingURL=StoryLayout-c9ad06a8.js.map