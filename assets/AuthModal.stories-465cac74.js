import{j as s}from"./jsx-runtime-ffb262ed.js";import{f as Y,g as Z,h as ee}from"./index.esm-0ba758de.js";import{u as k}from"./useTranslation-ca5fece7.js";import{F as se}from"./chunk-KRPLQIP4-28c7ffff.js";import{B as E}from"./chunk-UVUR7MCU-38fdf8fa.js";import{u as q}from"./index.esm-e6e39e41.js";import{F as v}from"./chunk-XRMX4GAI-2b5e1d40.js";import{F as T}from"./chunk-7COXQURZ-cb5d7755.js";import{I as w}from"./chunk-6CVSDS6C-aad5dd30.js";import{u as te,f as ae,M as oe,a as ne,b as re,c as le,d as ie,e as ce}from"./chunk-ST3CR3NJ-8bb4147e.js";import{C as de}from"./chunk-37N6GCLA-f439bebe.js";import{c as x,e as N,o as ue}from"./index-e1c9bcfd.js";import{f as y,a as O,b as me,c as P}from"./chunk-ZJJGQIVY-06d8bb4d.js";import{u as pe,l as be}from"./index-18597ecd.js";import{c as he,L as fe}from"./chunk-K7XRJ7NL-2f7e52f9.js";import{u as xe}from"./index-6141b0c6.js";import{g as ye}from"./index-e1b4ee4c.js";import{m as ge}from"./index-17e33fe9.js";import{r as f}from"./index-76fb7be0.js";import"./context-90c9d743.js";import"./i18nInstance-1f8a4d28.js";import"./chunk-5PH6ULNP-f8ca3469.js";import"./emotion-react.browser.esm-4457ef8f.js";import"./extends-15b115a7.js";import"./chunk-6NHXDBFO-afb3a818.js";import"./index-c8e9fb9f.js";import"./motion-75564375.js";import"./defineProperty-4067c753.js";import"./toPropertyKey-377bf628.js";import"./typeof-7fd5df1e.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./chunk-ROURZMX4-d2b55cf7.js";import"./chunk-34PD6CUK-3ea7c8a1.js";import"./index-3e7aa64e.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-2GBDXOMA-b597f944.js";import"./index-30c8b35e.js";var H=y((t,e)=>{const{onClick:a,className:o,...n}=t,{onClose:r}=te(),i=x("chakra-modal__close-btn",o),l=ae();return s.jsx(de,{ref:e,__css:l.closeButton,className:i,onClick:N(a,d=>{d.stopPropagation(),r()}),...n})});H.displayName="ModalCloseButton";var[_e,je,ve,Te]=he();function we(t){var e;const{defaultIndex:a,onChange:o,index:n,isManual:r,isLazy:i,lazyBehavior:l="unmount",orientation:d="horizontal",direction:c="ltr",...h}=t,[b,p]=f.useState(a??0),[g,_]=xe({defaultValue:a??0,value:n,onChange:o});f.useEffect(()=>{n!=null&&p(n)},[n]);const j=ve(),D=f.useId();return{id:`tabs-${(e=t.id)!=null?e:D}`,selectedIndex:g,focusedIndex:b,setSelectedIndex:_,setFocusedIndex:p,isManual:r,isLazy:i,lazyBehavior:l,orientation:d,descendants:j,direction:c,htmlProps:h}}var[Ce,M]=O({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function Pe(t){const{focusedIndex:e,orientation:a,direction:o}=M(),n=je(),r=f.useCallback(i=>{const l=()=>{var u;const m=n.nextEnabled(e);m&&((u=m.node)==null||u.focus())},d=()=>{var u;const m=n.prevEnabled(e);m&&((u=m.node)==null||u.focus())},c=()=>{var u;const m=n.firstEnabled();m&&((u=m.node)==null||u.focus())},h=()=>{var u;const m=n.lastEnabled();m&&((u=m.node)==null||u.focus())},b=a==="horizontal",p=a==="vertical",g=i.key,_=o==="ltr"?"ArrowLeft":"ArrowRight",j=o==="ltr"?"ArrowRight":"ArrowLeft",S={[_]:()=>b&&d(),[j]:()=>b&&l(),ArrowDown:()=>p&&l(),ArrowUp:()=>p&&d(),Home:c,End:h}[g];S&&(i.preventDefault(),S(i))},[n,e,a,o]);return{...t,role:"tablist","aria-orientation":a,onKeyDown:N(t.onKeyDown,r)}}function Se(t){const{isDisabled:e=!1,isFocusable:a=!1,...o}=t,{setSelectedIndex:n,isManual:r,id:i,setFocusedIndex:l,selectedIndex:d}=M(),{index:c,register:h}=Te({disabled:e&&!a}),b=c===d,p=()=>{n(c)},g=()=>{l(c),!r&&!(e&&a)&&n(c)},_=pe({...o,ref:ge(h,t.ref),isDisabled:e,isFocusable:a,onClick:N(t.onClick,p)}),j="button";return{..._,id:K(i,c),role:"tab",tabIndex:b?0:-1,type:j,"aria-selected":b,"aria-controls":G(i,c),onFocus:e?void 0:N(t.onFocus,g)}}var[Fe,Ne]=O({});function ke(t){const e=M(),{id:a,selectedIndex:o}=e,r=ye(t.children).map((i,l)=>f.createElement(Fe,{key:l,value:{isSelected:l===o,id:G(a,l),tabId:K(a,l),selectedIndex:o}},i));return{...t,children:r}}function Me(t){const{children:e,...a}=t,{isLazy:o,lazyBehavior:n}=M(),{isSelected:r,id:i,tabId:l}=Ne(),d=f.useRef(!1);r&&(d.current=!0);const c=be({wasSelected:d.current,isSelected:r,enabled:o,mode:n});return{tabIndex:0,...a,children:c?e:null,role:"tabpanel","aria-labelledby":l,hidden:!r,id:i}}function K(t,e){return`${t}--tab-${e}`}function G(t,e){return`${t}--tabpanel-${e}`}var[Ie,I]=O({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),U=y(function(e,a){const o=me("Tabs",e),{children:n,className:r,...i}=ue(e),{htmlProps:l,descendants:d,...c}=we(i),h=f.useMemo(()=>c,[c]),{isFitted:b,...p}=l;return s.jsx(_e,{value:d,children:s.jsx(Ce,{value:h,children:s.jsx(Ie,{value:o,children:s.jsx(P.div,{className:x("chakra-tabs",r),ref:a,...p,__css:o.root,children:n})})})})});U.displayName="Tabs";var W=y(function(e,a){const o=Pe({...e,ref:a}),r={display:"flex",...I().tablist};return s.jsx(P.div,{...o,className:x("chakra-tabs__tablist",e.className),__css:r})});W.displayName="TabList";var J=y(function(e,a){const o=Me({...e,ref:a}),n=I();return s.jsx(P.div,{outline:"0",...o,className:x("chakra-tabs__tab-panel",e.className),__css:n.tabpanel})});J.displayName="TabPanel";var Q=y(function(e,a){const o=ke(e),n=I();return s.jsx(P.div,{...o,width:"100%",ref:a,className:x("chakra-tabs__tab-panels",e.className),__css:n.tabpanels})});Q.displayName="TabPanels";var X=y(function(e,a){const o=I(),n=Se({...e,ref:a}),r={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...o.tab};return s.jsx(P.button,{...n,className:x("chakra-tabs__tab",e.className),__css:r})});X.displayName="Tab";const C=({mode:t})=>{const{t:e}=k(),a=[{icon:Y,title:e("auth.google")+e(`common.${t}`)},{icon:Z,title:e("auth.facebook")+e(`common.${t}`)},{icon:ee,title:e("auth.github")+e(`common.${t}`)}];return s.jsx(se,{justifyContent:"space-between",children:a.map(o=>s.jsx(E,{flex:"1",maxWidth:`${Math.floor(10/a.length)*10}%`,title:o.title,children:s.jsx(o.icon,{})},o.title))})};C.defaultProps={mode:"login"};try{C.displayName="OAuthOptions",C.__docgenInfo={description:"",displayName:"OAuthOptions",props:{mode:{defaultValue:{value:"login"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"signup"'},{value:'"login"'}]}}}}}catch{}const De={email:"",password:""},A=()=>{const{t}=k(),{register:e,handleSubmit:a}=q({defaultValues:De}),o=n=>void a(r=>console.log(r))(n);return s.jsxs(s.Fragment,{children:[s.jsx(C,{mode:"login"}),s.jsxs("form",{onSubmit:o,role:"form",children:[s.jsxs(v,{children:[s.jsx(T,{children:t("auth.signup.email.label")}),s.jsx(w,{...e("email"),type:"email",required:!0,placeholder:t("auth.login.email.placeholder")})]}),s.jsxs(v,{children:[s.jsx(T,{children:t("auth.signup.password.label")}),s.jsx(w,{...e("password"),type:"password",required:!0,placeholder:t("auth.login.password.placeholder")})]}),s.jsx(E,{w:"100%",variant:"success",mt:"8",type:"submit",children:t("common.login")})]})]})};try{A.displayName="LoginForm",A.__docgenInfo={description:"",displayName:"LoginForm",props:{}}}catch{}const Ae={email:"",password:"",passwordValidation:""},B=()=>{const{t}=k(),{register:e,handleSubmit:a}=q({defaultValues:Ae}),o=n=>void a(r=>console.log(r))(n);return s.jsxs(s.Fragment,{children:[s.jsx(C,{mode:"signup"}),s.jsxs("form",{onSubmit:o,role:"form",children:[s.jsxs(v,{children:[s.jsx(T,{children:t("auth.signup.email.label")}),s.jsx(w,{...e("email"),type:"email",required:!0,placeholder:t("auth.signup.email.label")})]}),s.jsxs(v,{children:[s.jsx(T,{children:t("auth.signup.password.label")}),s.jsx(w,{...e("password"),type:"password",required:!0,placeholder:t("auth.signup.password.placeholder")})]}),s.jsxs(v,{children:[s.jsx(T,{children:t("auth.signup.validatePassword.label")}),s.jsx(w,{...e("passwordValidation"),type:"password",required:!0,placeholder:t("auth.signup.validatePassword.placeholder")})]}),s.jsx(E,{w:"100%",variant:"success",mt:"8",type:"submit",children:t("common.signup")})]})]})};try{B.displayName="SignupForm",B.__docgenInfo={description:"",displayName:"SignupForm",props:{}}}catch{}const $=[{label:"common.signup",component:B},{label:"common.login",component:A}],L=({onClose:t,...e})=>{const{t:a}=k();return s.jsxs(oe,{isCentered:!0,...e,onClose:t,children:[s.jsx(ne,{}),s.jsxs(re,{children:[s.jsx(H,{}),s.jsx(le,{children:a("auth.modalTitle")}),s.jsx(ie,{children:s.jsxs(U,{isFitted:!0,children:[s.jsx(W,{children:$.map(o=>s.jsx(X,{children:a(o.label)},o.label))}),s.jsx(Q,{children:$.map(o=>s.jsx(J,{children:s.jsx(o.component,{})},o.label))})]})}),s.jsx(ce,{children:s.jsx(fe,{children:a("auth.tncLink")})})]})]})};try{L.displayName="AuthModal",L.__docgenInfo={description:"",displayName:"AuthModal",props:{}}}catch{}const _s={title:"Modal/AuthModal",component:L,tags:["autodocs"],argTypes:{}},F={args:{isOpen:!0,onClose:()=>{}},name:"Default"};var V,z,R;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {}
  },
  name: "Default"
}`,...(R=(z=F.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const js=["Default"];export{F as Default,js as __namedExportsOrder,_s as default};
//# sourceMappingURL=AuthModal.stories-465cac74.js.map
