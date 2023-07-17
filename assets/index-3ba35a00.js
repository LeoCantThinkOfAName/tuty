import{j as a}from"./jsx-runtime-94f6e698.js";import{H as L,B as Z,P as ee}from"./index-ffd16f0d.js";import{N as oe,g as ne,L as te}from"./index-dbb44d13.js";import{u as se}from"./useTranslation-e5e4d349.js";import{c as ae,L as R}from"./chunk-YTV6DHKL-715354ce.js";import{a as M,f as C,c as j,b as ie}from"./chunk-QEVFQ4EU-28380a87.js";import{u as re}from"./index-647bcbfd.js";import{m as ce}from"./index-bf97d06a.js";import{c as w,e as D,w as P,o as le}from"./index-50470307.js";import{r as u}from"./index-8db94870.js";import{I as de}from"./chunk-DKFDJSXF-359bf985.js";import{w as $,T as k}from"./chunk-LB6CWFOC-afb3a818.js";import{A as ue}from"./index-18c636cf.js";import{m as me}from"./motion-9051c638.js";import{F as W}from"./chunk-MPFPK3CX-4000ea5d.js";import{I as pe}from"./chunk-GYFRIY2Z-9ffeafa8.js";import{T as fe}from"./chunk-P74GIWPW-7fa035eb.js";var[he,S]=M({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[xe,T]=M({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[ge,Ve,ye,ve]=ae(),z=C(function(t,o){const{getButtonProps:n}=T(),s=n(t,o),c={display:"flex",alignItems:"center",width:"100%",outline:0,...S().button};return a.jsx(j.button,{...s,className:w("chakra-accordion__button",t.className),__css:c})});z.displayName="AccordionButton";function Ae(e){const{onChange:t,defaultIndex:o,index:n,allowMultiple:s,allowToggle:i,...c}=e;Ie(e),_e(e);const g=ye(),[h,d]=u.useState(-1);u.useEffect(()=>()=>{d(-1)},[]);const[r,m]=re({value:n,defaultValue(){return s?o??[]:o??-1},onChange:t});return{index:r,setIndex:m,htmlProps:c,getAccordionItemProps:l=>{let y=!1;return l!==null&&(y=Array.isArray(r)?r.includes(l):r===l),{isOpen:y,onChange:f=>{if(l!==null)if(s&&Array.isArray(r)){const I=f?r.concat(l):r.filter(_=>_!==l);m(I)}else f?m(l):i&&m(-1)}}},focusedIndex:h,setFocusedIndex:d,descendants:g}}var[be,B]=M({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function we(e){const{isDisabled:t,isFocusable:o,id:n,...s}=e,{getAccordionItemProps:i,setFocusedIndex:c}=B(),g=u.useRef(null),h=u.useId(),d=n??h,r=`accordion-button-${d}`,m=`accordion-panel-${d}`;Ne(e);const{register:v,index:l,descendants:y}=ve({disabled:t&&!o}),{isOpen:p,onChange:f}=i(l===-1?null:l);Pe({isOpen:p,isDisabled:t});const I=()=>{f==null||f(!0)},_=()=>{f==null||f(!1)},O=u.useCallback(()=>{f==null||f(!p),c(l)},[l,c,p,f]),F=u.useCallback(N=>{const b={ArrowDown:()=>{const x=y.nextEnabled(l);x==null||x.node.focus()},ArrowUp:()=>{const x=y.prevEnabled(l);x==null||x.node.focus()},Home:()=>{const x=y.firstEnabled();x==null||x.node.focus()},End:()=>{const x=y.lastEnabled();x==null||x.node.focus()}}[N.key];b&&(N.preventDefault(),b(N))},[y,l]),H=u.useCallback(()=>{c(l)},[c,l]),Q=u.useCallback(function(A={},b=null){return{...A,type:"button",ref:ce(v,g,b),id:r,disabled:!!t,"aria-expanded":!!p,"aria-controls":m,onClick:D(A.onClick,O),onFocus:D(A.onFocus,H),onKeyDown:D(A.onKeyDown,F)}},[r,t,p,O,H,F,m,v]),X=u.useCallback(function(A={},b=null){return{...A,ref:b,role:"region",id:m,"aria-labelledby":r,hidden:!p}},[r,p,m]);return{isOpen:p,isDisabled:t,isFocusable:o,onOpen:I,onClose:_,getButtonProps:Q,getPanelProps:X,htmlProps:s}}function Ie(e){const t=e.index||e.defaultIndex,o=t!=null&&!Array.isArray(t)&&e.allowMultiple;P({condition:!!o,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function _e(e){P({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Ne(e){P({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Pe(e){P({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function V(e){const{isOpen:t,isDisabled:o}=T(),{reduceMotion:n}=B(),s=w("chakra-accordion__icon",e.className),i=S(),c={opacity:o?.4:1,transform:t?"rotate(-180deg)":void 0,transition:n?void 0:"transform 0.2s",transformOrigin:"center",...i.icon};return a.jsx(de,{viewBox:"0 0 24 24","aria-hidden":!0,className:s,__css:c,...e,children:a.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}V.displayName="AccordionIcon";var Y=C(function(t,o){const{children:n,className:s}=t,{htmlProps:i,...c}=we(t),h={...S().container,overflowAnchor:"none"},d=u.useMemo(()=>c,[c]);return a.jsx(xe,{value:d,children:a.jsx(j.div,{ref:o,...i,className:w("chakra-accordion__item",s),__css:h,children:typeof n=="function"?n({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):n})})});Y.displayName="AccordionItem";var ke=e=>e!=null&&parseInt(e.toString(),10)>0,K={exit:{height:{duration:.2,ease:k.ease},opacity:{duration:.3,ease:k.ease}},enter:{height:{duration:.3,ease:k.ease},opacity:{duration:.4,ease:k.ease}}},Ce={exit:({animateOpacity:e,startingHeight:t,transition:o,transitionEnd:n,delay:s})=>{var i;return{...e&&{opacity:ke(t)?1:0},height:t,transitionEnd:n==null?void 0:n.exit,transition:(i=o==null?void 0:o.exit)!=null?i:$.exit(K.exit,s)}},enter:({animateOpacity:e,endingHeight:t,transition:o,transitionEnd:n,delay:s})=>{var i;return{...e&&{opacity:1},height:t,transitionEnd:n==null?void 0:n.enter,transition:(i=o==null?void 0:o.enter)!=null?i:$.enter(K.enter,s)}}},q=u.forwardRef((e,t)=>{const{in:o,unmountOnExit:n,animateOpacity:s=!0,startingHeight:i=0,endingHeight:c="auto",style:g,className:h,transition:d,transitionEnd:r,...m}=e,[v,l]=u.useState(!1);u.useEffect(()=>{const _=setTimeout(()=>{l(!0)});return()=>clearTimeout(_)},[]),P({condition:Number(i)>0&&!!n,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const y=parseFloat(i.toString())>0,p={startingHeight:i,endingHeight:c,animateOpacity:s,transition:v?d:{enter:{duration:0}},transitionEnd:{enter:r==null?void 0:r.enter,exit:n?r==null?void 0:r.exit:{...r==null?void 0:r.exit,display:y?"block":"none"}}},f=n?o:!0,I=o||n?"enter":"exit";return a.jsx(ue,{initial:!1,custom:p,children:f&&a.jsx(me.div,{ref:t,...m,className:w("chakra-collapse",h),style:{overflow:"hidden",display:"block",...g},custom:p,variants:Ce,initial:n?"exit":!1,animate:I,exit:"exit"})})});q.displayName="Collapse";var G=C(function(t,o){const{className:n,motionProps:s,...i}=t,{reduceMotion:c}=B(),{getPanelProps:g,isOpen:h}=T(),d=g(i,o),r=w("chakra-accordion__panel",n),m=S();c||delete d.hidden;const v=a.jsx(j.div,{...d,__css:m.panel,className:r});return c?v:a.jsx(q,{in:h,...s,children:v})});G.displayName="AccordionPanel";var J=C(function({children:t,reduceMotion:o,...n},s){const i=ie("Accordion",n),c=le(n),{htmlProps:g,descendants:h,...d}=Ae(c),r=u.useMemo(()=>({...d,reduceMotion:!!o}),[d,o]);return a.jsx(ge,{value:h,children:a.jsx(be,{value:r,children:a.jsx(he,{value:i,children:a.jsx(j.div,{ref:s,...g,className:w("chakra-accordion",n.className),__css:i.root,children:t})})})})});J.displayName="Accordion";const U=L[L.length-1]*Z+"px",E=({menu:e,defaultIndex:t})=>{const{t:o}=se();return a.jsxs(W,{flexDir:"column",p:"5",position:"sticky",w:"20rem",boxShadow:"md",top:U,h:`calc(100vh - ${U})`,children:[a.jsx(pe,{type:"text",placeholder:o("sideBar.searchInput.placeholder"),mb:"5"}),a.jsx(W,{flex:"1",flexDir:"column",children:a.jsx(J,{defaultIndex:t,children:e==null?void 0:e.map(n=>a.jsxs(Y,{borderTop:"none",borderBottom:"none",children:[a.jsxs(z,{_hover:{bg:"initial"},children:[a.jsx(fe,{fontWeight:"bold",w:"100%",textAlign:"left",fontSize:"lg",children:o(n.category)}),a.jsx(V,{})]}),a.jsx(G,{p:"0",children:n.items.map(s=>a.jsx(R,{_activeLink:{bg:"blackAlpha.100"},_hover:{textDecor:"none",bg:"blackAlpha.100"},_dark:{_hover:{bg:"whiteAlpha.100"},_activeLink:{bg:"whiteAlpha.100"}},display:"block",as:oe,p:"2",pl:"8",to:ne(ee.SEARCH,{term:o(s.path)}),children:o(s.title)},s.title))})]},n.category))})}),a.jsx(R,{as:te,to:"",color:"gray.500",children:o("routes.privacyPolicy")})]})};E.defaultProps={menu:[],defaultIndex:[0]};try{E.displayName="SideBar",E.__docgenInfo={description:"",displayName:"SideBar",props:{menu:{defaultValue:{value:"[]"},description:"",name:"menu",required:!1,type:{name:"{ category: string; items: { path: string; title: string; }[]; }[] | undefined"}}}}}catch{}export{E as S};
//# sourceMappingURL=index-3ba35a00.js.map
