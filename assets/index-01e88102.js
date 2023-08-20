import{j as g}from"./jsx-runtime-ffb262ed.js";import{I as zt,a as Kt}from"./index-e1d79825.js";import{u as Qt}from"./useTranslation-ca5fece7.js";import{r as s,R as Jt}from"./index-76fb7be0.js";import{c as k,f as z}from"./index-39ab5497.js";import{m as _e}from"./index-17e33fe9.js";import{c as Fe,a as $e,u as Ve,_ as er,h as tr,b as rr,d as D,f as nr,z as ar,s as or,e as ir,R as ur,g as sr}from"./component-1c6467d0.js";import{a as cr}from"./chunk-34PD6CUK-622f8956.js";import{c as U,d as Ye,b as lr,f as q}from"./chunk-ZJJGQIVY-b66b1d78.js";import{A as re,m as X,a as dr}from"./index-b57d6131.js";import{w as I,a as _}from"./chunk-6NHXDBFO-afb3a818.js";import{_ as fr,a as vr}from"./defineProperty-4067c753.js";import{_ as ve}from"./extends-15b115a7.js";import{F as mr}from"./chunk-KRPLQIP4-32b7a1c6.js";import{B as Te}from"./chunk-UVUR7MCU-d5c4f206.js";var hr={enter:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:1,transition:(n=e==null?void 0:e.enter)!=null?n:I.enter(_.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:0,transition:(n=e==null?void 0:e.exit)!=null?n:I.exit(_.exit,r),transitionEnd:t==null?void 0:t.exit}}},qe={initial:"exit",animate:"enter",exit:"exit",variants:hr},br=s.forwardRef(function(t,r){const{unmountOnExit:n,in:a,className:o,transition:i,transitionEnd:u,delay:f,...l}=t,v=a||n?"enter":"exit",c=n?a&&n:!0,m={transition:i,transitionEnd:u,delay:f};return g.jsx(re,{custom:m,children:c&&g.jsx(X.div,{ref:r,className:k("chakra-fade",o),custom:m,...qe,animate:v,...l})})});br.displayName="Fade";var pr={exit:({reverse:e,initialScale:t,transition:r,transitionEnd:n,delay:a})=>{var o;return{opacity:0,...e?{scale:t,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{scale:t,...n==null?void 0:n.exit}},transition:(o=r==null?void 0:r.exit)!=null?o:I.exit(_.exit,a)}},enter:({transitionEnd:e,transition:t,delay:r})=>{var n;return{opacity:1,scale:1,transition:(n=t==null?void 0:t.enter)!=null?n:I.enter(_.enter,r),transitionEnd:e==null?void 0:e.enter}}},Xe={initial:"exit",animate:"enter",exit:"exit",variants:pr},gr=s.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,initialScale:i=.95,className:u,transition:f,transitionEnd:l,delay:v,...c}=t,m=n?a&&n:!0,h=a||n?"enter":"exit",b={initialScale:i,reverse:o,transition:f,transitionEnd:l,delay:v};return g.jsx(re,{custom:b,children:m&&g.jsx(X.div,{ref:r,className:k("chakra-offset-slide",u),...Xe,animate:h,custom:b,...c})})});gr.displayName="ScaleFade";var yr={initial:({offsetX:e,offsetY:t,transition:r,transitionEnd:n,delay:a})=>{var o;return{opacity:0,x:e,y:t,transition:(o=r==null?void 0:r.exit)!=null?o:I.exit(_.exit,a),transitionEnd:n==null?void 0:n.exit}},enter:({transition:e,transitionEnd:t,delay:r})=>{var n;return{opacity:1,x:0,y:0,transition:(n=e==null?void 0:e.enter)!=null?n:I.enter(_.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:r,transitionEnd:n,reverse:a,delay:o})=>{var i;const u={x:t,y:e};return{opacity:0,transition:(i=r==null?void 0:r.exit)!=null?i:I.exit(_.exit,o),...a?{...u,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{...u,...n==null?void 0:n.exit}}}}},me={initial:"initial",animate:"enter",exit:"exit",variants:yr},xr=s.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,className:i,offsetX:u=0,offsetY:f=8,transition:l,transitionEnd:v,delay:c,...m}=t,h=n?a&&n:!0,b=a||n?"enter":"exit",d={offsetX:u,offsetY:f,reverse:o,transition:l,transitionEnd:v,delay:c};return g.jsx(re,{custom:d,children:h&&g.jsx(X.div,{ref:r,className:k("chakra-offset-slide",i),custom:d,...me,animate:b,...m})})});xr.displayName="SlideFade";var he="data-focus-lock",Ze="data-focus-lock-disabled",Fr="data-no-focus-lock",Sr="data-autofocus-inside",Cr="data-no-autofocus",se={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ze=Fe({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),Ke=Fe(),wr=Fe(),Er=$e({async:!0}),Mr=[],Se=s.forwardRef(function(t,r){var n,a=s.useState(),o=a[0],i=a[1],u=s.useRef(),f=s.useRef(!1),l=s.useRef(null),v=t.children,c=t.disabled,m=t.noFocusGuards,h=t.persistentFocus,b=t.crossFrame,d=t.autoFocus;t.allowTextSelection;var p=t.group,y=t.className,F=t.whiteList,C=t.hasPositiveIndices,w=t.shards,S=w===void 0?Mr:w,E=t.as,M=E===void 0?"div":E,O=t.lockProps,x=O===void 0?{}:O,G=t.sideCar,T=t.returnFocus,Lt=t.focusOptions,oe=t.onActivation,ie=t.onDeactivation,jt=s.useState({}),Wt=jt[0],Ht=s.useCallback(function(){l.current=l.current||document&&document.activeElement,u.current&&oe&&oe(u.current),f.current=!0},[oe]),Ut=s.useCallback(function(){f.current=!1,ie&&ie(u.current)},[ie]);s.useEffect(function(){c||(l.current=null)},[]);var Gt=s.useCallback(function(N){var $=l.current;if($&&$.focus){var ue=typeof T=="function"?T($):T;if(ue){var Ie=typeof ue=="object"?ue:void 0;l.current=null,N?Promise.resolve().then(function(){return $.focus(Ie)}):$.focus(Ie)}}},[T]),$t=s.useCallback(function(N){f.current&&ze.useMedium(N)},[]),Vt=Ke.useMedium,Yt=s.useCallback(function(N){u.current!==N&&(u.current=N,i(N))},[]),qt=ve((n={},n[Ze]=c&&"disabled",n[he]=p,n),x),Ne=m!==!0,Xt=Ne&&m!=="tail",Zt=Ve([r,Yt]);return s.createElement(s.Fragment,null,Ne&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:c?-1:0,style:se}),C?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:c?-1:1,style:se}):null],!c&&s.createElement(G,{id:Wt,sideCar:Er,observed:o,disabled:c,persistentFocus:h,crossFrame:b,autoFocus:d,whiteList:F,shards:S,onActivation:Ht,onDeactivation:Ut,returnFocus:Gt,focusOptions:Lt}),s.createElement(M,ve({ref:Zt},qt,{className:y,onBlur:Vt,onFocus:$t}),v),Xt&&s.createElement("div",{"data-focus-guard":!0,tabIndex:c?-1:0,style:se}))});Se.propTypes={};Se.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const Qe=Se;function Pr(e,t){function r(n){return n.displayName||n.name||"Component"}return function(a){var o=[],i;function u(){i=e(o.map(function(l){return l.props})),t(i)}var f=function(l){er(v,l);function v(){return l.apply(this,arguments)||this}v.peek=function(){return i};var c=v.prototype;return c.componentDidMount=function(){o.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var h=o.indexOf(this);o.splice(h,1),u()},c.render=function(){return Jt.createElement(a,this.props)},v}(s.PureComponent);return fr(f,"displayName","SideEffect("+r(a)+")"),f}}var P=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},J=function(e){return Array.isArray(e)?e:[e]},Je=function(e){return Array.isArray(e)?e[0]:e},Or=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},et=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},tt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},kr=function(e,t){return!e||tt(e)||!Or(e)&&t(et(e))},rt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=kr(t,rt.bind(void 0,e));return e.set(t,n),n},Nr=function(e,t){return e&&!tt(e)?Tr(e)?t(et(e)):!1:!0},nt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=Nr(t,nt.bind(void 0,e));return e.set(t,n),n},at=function(e){return e.dataset},Ir=function(e){return e.tagName==="BUTTON"},ot=function(e){return e.tagName==="INPUT"},it=function(e){return ot(e)&&e.type==="radio"},_r=function(e){return!((ot(e)||Ir(e))&&(e.type==="hidden"||e.disabled))},Tr=function(e){var t=e.getAttribute(Cr);return![!0,"true",""].includes(t)},Ce=function(e){var t;return!!(e&&(!((t=at(e))===null||t===void 0)&&t.focusGuard))},ee=function(e){return!Ce(e)},Ar=function(e){return!!e},Rr=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},ut=function(e,t,r){return P(e).map(function(n,a){return{node:n,index:a,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(Rr)},Dr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],we=Dr.join(","),Br="".concat(we,", [data-focus-guard]"),st=function(e,t){return P((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?Br:we)?[n]:[],st(n))},[])},Lr=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?ne([e.contentDocument.body],t):[e]},ne=function(e,t){return e.reduce(function(r,n){var a,o=st(n,t),i=(a=[]).concat.apply(a,o.map(function(u){return Lr(u,t)}));return r.concat(i,n.parentNode?P(n.parentNode.querySelectorAll(we)).filter(function(u){return u===n}):[])},[])},jr=function(e){var t=e.querySelectorAll("[".concat(Sr,"]"));return P(t).map(function(r){return ne([r])}).reduce(function(r,n){return r.concat(n)},[])},Ee=function(e,t){return P(e).filter(function(r){return rt(t,r)}).filter(function(r){return _r(r)})},Ae=function(e,t){return t===void 0&&(t=new Map),P(e).filter(function(r){return nt(t,r)})},be=function(e,t,r){return ut(Ee(ne(e,r),t),!0,r)},Re=function(e,t){return ut(Ee(ne(e),t),!1)},Wr=function(e,t){return Ee(jr(e),t)},L=function(e,t){return e.shadowRoot?L(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:P(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var a=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return a?L(a,t):!1}return L(r,t)})},Hr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var a=n+1;a<r;a+=1){var o=e[n].compareDocumentPosition(e[a]);(o&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(o&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(i,u){return!t.has(u)})},ct=function(e){return e.parentNode?ct(e.parentNode):e},Me=function(e){var t=J(e);return t.filter(Boolean).reduce(function(r,n){var a=n.getAttribute(he);return r.push.apply(r,a?Hr(P(ct(n).querySelectorAll("[".concat(he,'="').concat(a,'"]:not([').concat(Ze,'="disabled"])')))):[n]),r},[])},Ur=function(e){try{return e()}catch{return}},V=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?V(t.shadowRoot):t instanceof HTMLIFrameElement&&Ur(function(){return t.contentWindow.document})?V(t.contentWindow.document):t}},Gr=function(e,t){return e===t},$r=function(e,t){return!!P(e.querySelectorAll("iframe")).some(function(r){return Gr(r,t)})},lt=function(e,t){return t===void 0&&(t=V(Je(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Me(e).some(function(r){return L(r,t)||$r(r,t)})},Vr=function(e){e===void 0&&(e=document);var t=V(e);return t?P(e.querySelectorAll("[".concat(Fr,"]"))).some(function(r){return L(r,t)}):!1},Yr=function(e,t){return t.filter(it).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Pe=function(e,t){return it(e)&&e.name?Yr(e,t):e},qr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Pe(r,e))}),e.filter(function(r){return t.has(r)})},De=function(e){return e[0]&&e.length>1?Pe(e[0],e):e[0]},Be=function(e,t){return e.length>1?e.indexOf(Pe(e[t],e)):t},dt="NEW_FOCUS",Xr=function(e,t,r,n){var a=e.length,o=e[0],i=e[a-1],u=Ce(r);if(!(r&&e.indexOf(r)>=0)){var f=r!==void 0?t.indexOf(r):-1,l=n?t.indexOf(n):f,v=n?e.indexOf(n):-1,c=f-l,m=t.indexOf(o),h=t.indexOf(i),b=qr(t),d=r!==void 0?b.indexOf(r):-1,p=d-(n?b.indexOf(n):f),y=Be(e,0),F=Be(e,a-1);if(f===-1||v===-1)return dt;if(!c&&v>=0)return v;if(f<=m&&u&&Math.abs(c)>1)return F;if(f>=h&&u&&Math.abs(c)>1)return y;if(c&&Math.abs(p)>1)return v;if(f<=m)return F;if(f>h)return y;if(c)return Math.abs(c)>1?v:(a+v+c)%a}},Zr=function(e){return function(t){var r,n=(r=at(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},zr=function(e,t,r){var n=e.map(function(o){var i=o.node;return i}),a=Ae(n.filter(Zr(r)));return a&&a.length?De(a):De(Ae(t))},pe=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&pe(e.parentNode.host||e.parentNode,t),t},ce=function(e,t){for(var r=pe(e),n=pe(t),a=0;a<r.length;a+=1){var o=r[a];if(n.indexOf(o)>=0)return o}return!1},ft=function(e,t,r){var n=J(e),a=J(t),o=n[0],i=!1;return a.filter(Boolean).forEach(function(u){i=ce(i||u,u)||i,r.filter(Boolean).forEach(function(f){var l=ce(o,f);l&&(!i||L(l,i)?i=l:i=ce(l,i))})}),i},Kr=function(e,t){return e.reduce(function(r,n){return r.concat(Wr(n,t))},[])},Qr=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(Ar)},Jr=function(e,t){var r=V(J(e).length>0?document:Je(e).ownerDocument),n=Me(e).filter(ee),a=ft(r||e,e,n),o=new Map,i=Re(n,o),u=be(n,o).filter(function(h){var b=h.node;return ee(b)});if(!(!u[0]&&(u=i,!u[0]))){var f=Re([a],o).map(function(h){var b=h.node;return b}),l=Qr(f,u),v=l.map(function(h){var b=h.node;return b}),c=Xr(v,f,r,t);if(c===dt){var m=zr(i,v,Kr(n,o));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return c===void 0?c:l[c]}},en=function(e){var t=Me(e).filter(ee),r=ft(e,e,t),n=new Map,a=be([r],n,!0),o=be(t,n).filter(function(i){var u=i.node;return ee(u)}).map(function(i){var u=i.node;return u});return a.map(function(i){var u=i.node,f=i.index;return{node:u,index:f,lockItem:o.indexOf(u)>=0,guard:Ce(u)}})},tn=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},le=0,de=!1,vt=function(e,t,r){r===void 0&&(r={});var n=Jr(e,t);if(!de&&n){if(le>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),de=!0,setTimeout(function(){de=!1},1);return}le++,tn(n.node,r.focusOptions),le--}};function Oe(e){setTimeout(e,1)}var rn=function(){return document&&document.activeElement===document.body},nn=function(){return rn()||Vr()},j=null,B=null,W=null,Y=!1,an=function(){return!0},on=function(t){return(j.whiteList||an)(t)},un=function(t,r){W={observerNode:t,portaledElement:r}},sn=function(t){return W&&W.portaledElement===t};function Le(e,t,r,n){var a=null,o=e;do{var i=n[o];if(i.guard)i.node.dataset.focusAutoGuard&&(a=i);else if(i.lockItem){if(o!==e)return;a=null}else break}while((o+=r)!==t);a&&(a.node.tabIndex=0)}var cn=function(t){return t&&"current"in t?t.current:t},ln=function(t){return t?!!Y:Y==="meanwhile"},dn=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},fn=function(t,r){return r.some(function(n){return dn(t,n,n)})},te=function(){var t=!1;if(j){var r=j,n=r.observed,a=r.persistentFocus,o=r.autoFocus,i=r.shards,u=r.crossFrame,f=r.focusOptions,l=n||W&&W.portaledElement,v=document&&document.activeElement;if(l){var c=[l].concat(i.map(cn).filter(Boolean));if((!v||on(v))&&(a||ln(u)||!nn()||!B&&o)&&(l&&!(lt(c)||v&&fn(v,c)||sn(v))&&(document&&!B&&v&&!o?(v.blur&&v.blur(),document.body.focus()):(t=vt(c,B,{focusOptions:f}),W={})),Y=!1,B=document&&document.activeElement),document){var m=document&&document.activeElement,h=en(c),b=h.map(function(d){var p=d.node;return p}).indexOf(m);b>-1&&(h.filter(function(d){var p=d.guard,y=d.node;return p&&y.dataset.focusAutoGuard}).forEach(function(d){var p=d.node;return p.removeAttribute("tabIndex")}),Le(b,h.length,1,h),Le(b,-1,-1,h))}}}return t},mt=function(t){te()&&t&&(t.stopPropagation(),t.preventDefault())},ke=function(){return Oe(te)},vn=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||un(n,r)},mn=function(){return null},ht=function(){Y="just",Oe(function(){Y="meanwhile"})},hn=function(){document.addEventListener("focusin",mt),document.addEventListener("focusout",ke),window.addEventListener("blur",ht)},bn=function(){document.removeEventListener("focusin",mt),document.removeEventListener("focusout",ke),window.removeEventListener("blur",ht)};function pn(e){return e.filter(function(t){var r=t.disabled;return!r})}function gn(e){var t=e.slice(-1)[0];t&&!j&&hn();var r=j,n=r&&t&&t.id===r.id;j=t,r&&!n&&(r.onDeactivation(),e.filter(function(a){var o=a.id;return o===r.id}).length||r.returnFocus(!t)),t?(B=null,(!n||r.observed!==t.observed)&&t.onActivation(),te(),Oe(te)):(bn(),B=null)}ze.assignSyncMedium(vn);Ke.assignMedium(ke);wr.assignMedium(function(e){return e({moveFocusInside:vt,focusInside:lt})});const yn=Pr(pn,gn)(mn);var bt=s.forwardRef(function(t,r){return s.createElement(Qe,ve({sideCar:yn,ref:r},t))}),pt=Qe.propTypes||{};pt.sideCar;vr(pt,["sideCar"]);bt.propTypes={};const je=bt;function gt(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function yt(e){var t;if(!gt(e))return!1;const r=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof r.HTMLElement}function pa(e){var t,r;return(r=(t=xt(e))==null?void 0:t.defaultView)!=null?r:window}function xt(e){return gt(e)?e.ownerDocument:document}function ga(e){return xt(e).activeElement}var Ft=e=>e.hasAttribute("tabindex"),xn=e=>Ft(e)&&e.tabIndex===-1;function Fn(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function St(e){return e.parentElement&&St(e.parentElement)?!0:e.hidden}function Sn(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function Ct(e){if(!yt(e)||St(e)||Fn(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in n?n[t]():Sn(e)?!0:Ft(e)}function ya(e){return e?yt(e)&&Ct(e)&&!xn(e):!1}var Cn=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],wn=Cn.join(),En=e=>e.offsetWidth>0&&e.offsetHeight>0;function Mn(e){const t=Array.from(e.querySelectorAll(wn));return t.unshift(e),t.filter(r=>Ct(r)&&En(r))}var We,Pn=(We=je.default)!=null?We:je,wt=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:a,children:o,isDisabled:i,autoFocus:u,persistentFocus:f,lockFocusAcrossFrames:l}=e,v=s.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&Mn(n.current).length===0&&requestAnimationFrame(()=>{var b;(b=n.current)==null||b.focus()})},[t,n]),c=s.useCallback(()=>{var h;(h=r==null?void 0:r.current)==null||h.focus()},[r]),m=a&&!r;return g.jsx(Pn,{crossFrame:l,persistentFocus:f,autoFocus:u,disabled:i,onActivation:v,onDeactivation:c,returnFocus:m,children:o})};wt.displayName="FocusLock";var On={slideInBottom:{...me,custom:{offsetY:16,reverse:!0}},slideInRight:{...me,custom:{offsetX:16,reverse:!0}},scale:{...Xe,custom:{initialScale:.95,reverse:!0}},none:{}},kn=U(X.section),Nn=e=>On[e||"none"],Et=s.forwardRef((e,t)=>{const{preset:r,motionProps:n=Nn(r),...a}=e;return g.jsx(kn,{ref:t,...n,...a})});Et.displayName="ModalTransition";var In=Object.defineProperty,_n=(e,t,r)=>t in e?In(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Tn=(e,t,r)=>(_n(e,typeof t!="symbol"?t+"":t,r),r),An=class{constructor(){Tn(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},ge=new An;function Mt(e,t){const[r,n]=s.useState(0);return s.useEffect(()=>{const a=e.current;if(a){if(t){const o=ge.add(a);n(o)}return()=>{ge.remove(a),n(0)}}},[t,e]),r}function Rn(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:a=!0,closeOnEsc:o=!0,useInert:i=!0,onOverlayClick:u,onEsc:f}=e,l=s.useRef(null),v=s.useRef(null),[c,m,h]=Bn(n,"chakra-modal","chakra-modal--header","chakra-modal--body");Dn(l,t&&i);const b=Mt(l,t),d=s.useRef(null),p=s.useCallback(x=>{d.current=x.target},[]),y=s.useCallback(x=>{x.key==="Escape"&&(x.stopPropagation(),o&&(r==null||r()),f==null||f())},[o,r,f]),[F,C]=s.useState(!1),[w,S]=s.useState(!1),E=s.useCallback((x={},G=null)=>({role:"dialog",...x,ref:_e(G,l),id:c,tabIndex:-1,"aria-modal":!0,"aria-labelledby":F?m:void 0,"aria-describedby":w?h:void 0,onClick:z(x.onClick,T=>T.stopPropagation())}),[h,w,c,m,F]),M=s.useCallback(x=>{x.stopPropagation(),d.current===x.target&&ge.isTopModal(l.current)&&(a&&(r==null||r()),u==null||u())},[r,a,u]),O=s.useCallback((x={},G=null)=>({...x,ref:_e(G,v),onClick:z(x.onClick,M),onKeyDown:z(x.onKeyDown,y),onMouseDown:z(x.onMouseDown,p)}),[y,p,M]);return{isOpen:t,onClose:r,headerId:m,bodyId:h,setBodyMounted:S,setHeaderMounted:C,dialogRef:l,overlayRef:v,getDialogProps:E,getDialogContainerProps:O,index:b}}function Dn(e,t){const r=e.current;s.useEffect(()=>{if(!(!e.current||!t))return tr(e.current)},[t,e,r])}function Bn(e,...t){const r=s.useId(),n=e||r;return s.useMemo(()=>t.map(a=>`${a}-${n}`),[n,t])}var[Ln,Z]=Ye({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[jn,H]=Ye({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Pt=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:r,children:n,autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:f,blockScrollOnMount:l,allowPinchZoom:v,preserveScrollBarGap:c,motionPreset:m,lockFocusAcrossFrames:h,onCloseComplete:b}=t,d=lr("Modal",t),y={...Rn(t),autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:f,blockScrollOnMount:l,allowPinchZoom:v,preserveScrollBarGap:c,motionPreset:m,lockFocusAcrossFrames:h};return g.jsx(jn,{value:y,children:g.jsx(Ln,{value:d,children:g.jsx(re,{onExitComplete:b,children:y.isOpen&&g.jsx(cr,{...r,children:n})})})})};Pt.displayName="Modal";var Ot=$e(),fe=function(){},ae=s.forwardRef(function(e,t){var r=s.useRef(null),n=s.useState({onScrollCapture:fe,onWheelCapture:fe,onTouchMoveCapture:fe}),a=n[0],o=n[1],i=e.forwardProps,u=e.children,f=e.className,l=e.removeScrollBar,v=e.enabled,c=e.shards,m=e.sideCar,h=e.noIsolation,b=e.inert,d=e.allowPinchZoom,p=e.as,y=p===void 0?"div":p,F=e.gapMode,C=rr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=m,S=Ve([r,t]),E=D(D({},C),a);return s.createElement(s.Fragment,null,v&&s.createElement(w,{sideCar:Ot,removeScrollBar:l,shards:c,noIsolation:h,inert:b,setCallbacks:o,allowPinchZoom:!!d,lockRef:r,gapMode:F}),i?s.cloneElement(s.Children.only(u),D(D({},E),{ref:S})):s.createElement(y,D({},E,{className:f,ref:S}),u))});ae.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ae.classNames={fullWidth:nr,zeroRight:ar};var ye=!1;if(typeof window<"u")try{var K=Object.defineProperty({},"passive",{get:function(){return ye=!0,!0}});window.addEventListener("test",K,K),window.removeEventListener("test",K,K)}catch{ye=!1}var A=ye?{passive:!1}:!1,Wn=function(e){return e.tagName==="TEXTAREA"},kt=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!Wn(e)&&r[t]==="visible")},Hn=function(e){return kt(e,"overflowY")},Un=function(e){return kt(e,"overflowX")},He=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Nt(e,n);if(a){var o=It(e,n),i=o[1],u=o[2];if(i>u)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},Gn=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},$n=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Nt=function(e,t){return e==="v"?Hn(t):Un(t)},It=function(e,t){return e==="v"?Gn(t):$n(t)},Vn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Yn=function(e,t,r,n,a){var o=Vn(e,window.getComputedStyle(t).direction),i=o*n,u=r.target,f=t.contains(u),l=!1,v=i>0,c=0,m=0;do{var h=It(e,u),b=h[0],d=h[1],p=h[2],y=d-p-o*b;(b||y)&&Nt(e,u)&&(c+=y,m+=b),u=u.parentNode}while(!f&&u!==document.body||f&&(t.contains(u)||t===u));return(v&&(a&&c===0||!a&&i>c)||!v&&(a&&m===0||!a&&-i>m))&&(l=!0),l},Q=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ue=function(e){return[e.deltaX,e.deltaY]},Ge=function(e){return e&&"current"in e?e.current:e},qn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Xn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Zn=0,R=[];function zn(e){var t=s.useRef([]),r=s.useRef([0,0]),n=s.useRef(),a=s.useState(Zn++)[0],o=s.useState(or)[0],i=s.useRef(e);s.useEffect(function(){i.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var d=ir([e.lockRef.current],(e.shards||[]).map(Ge),!0).filter(Boolean);return d.forEach(function(p){return p.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),d.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=s.useCallback(function(d,p){if("touches"in d&&d.touches.length===2)return!i.current.allowPinchZoom;var y=Q(d),F=r.current,C="deltaX"in d?d.deltaX:F[0]-y[0],w="deltaY"in d?d.deltaY:F[1]-y[1],S,E=d.target,M=Math.abs(C)>Math.abs(w)?"h":"v";if("touches"in d&&M==="h"&&E.type==="range")return!1;var O=He(M,E);if(!O)return!0;if(O?S=M:(S=M==="v"?"h":"v",O=He(M,E)),!O)return!1;if(!n.current&&"changedTouches"in d&&(C||w)&&(n.current=S),!S)return!0;var x=n.current||S;return Yn(x,p,d,x==="h"?C:w,!0)},[]),f=s.useCallback(function(d){var p=d;if(!(!R.length||R[R.length-1]!==o)){var y="deltaY"in p?Ue(p):Q(p),F=t.current.filter(function(S){return S.name===p.type&&S.target===p.target&&qn(S.delta,y)})[0];if(F&&F.should){p.cancelable&&p.preventDefault();return}if(!F){var C=(i.current.shards||[]).map(Ge).filter(Boolean).filter(function(S){return S.contains(p.target)}),w=C.length>0?u(p,C[0]):!i.current.noIsolation;w&&p.cancelable&&p.preventDefault()}}},[]),l=s.useCallback(function(d,p,y,F){var C={name:d,delta:p,target:y,should:F};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(w){return w!==C})},1)},[]),v=s.useCallback(function(d){r.current=Q(d),n.current=void 0},[]),c=s.useCallback(function(d){l(d.type,Ue(d),d.target,u(d,e.lockRef.current))},[]),m=s.useCallback(function(d){l(d.type,Q(d),d.target,u(d,e.lockRef.current))},[]);s.useEffect(function(){return R.push(o),e.setCallbacks({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:m}),document.addEventListener("wheel",f,A),document.addEventListener("touchmove",f,A),document.addEventListener("touchstart",v,A),function(){R=R.filter(function(d){return d!==o}),document.removeEventListener("wheel",f,A),document.removeEventListener("touchmove",f,A),document.removeEventListener("touchstart",v,A)}},[]);var h=e.removeScrollBar,b=e.inert;return s.createElement(s.Fragment,null,b?s.createElement(o,{styles:Xn(a)}):null,h?s.createElement(ur,{gapMode:e.gapMode}):null)}const Kn=sr(Ot,zn);var _t=s.forwardRef(function(e,t){return s.createElement(ae,D({},e,{ref:t,sideCar:Kn}))});_t.classNames=ae.classNames;const Qn=_t;function Jn(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:a,blockScrollOnMount:o,allowPinchZoom:i,finalFocusRef:u,returnFocusOnClose:f,preserveScrollBarGap:l,lockFocusAcrossFrames:v,isOpen:c}=H(),[m,h]=dr();s.useEffect(()=>{!m&&h&&setTimeout(h)},[m,h]);const b=Mt(n,c);return g.jsx(wt,{autoFocus:t,isDisabled:!r,initialFocusRef:a,finalFocusRef:u,restoreFocus:f,contentRef:n,lockFocusAcrossFrames:v,children:g.jsx(Qn,{removeScrollBar:!l,allowPinchZoom:i,enabled:b===1&&o,forwardProps:!0,children:e.children})})}var Tt=q((e,t)=>{const{className:r,children:n,containerProps:a,motionProps:o,...i}=e,{getDialogProps:u,getDialogContainerProps:f}=H(),l=u(i,t),v=f(a),c=k("chakra-modal__content",r),m=Z(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...m.dialog},b={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...m.dialogContainer},{motionPreset:d}=H();return g.jsx(Jn,{children:g.jsx(U.div,{...v,className:"chakra-modal__content-container",tabIndex:-1,__css:b,children:g.jsx(Et,{preset:d,motionProps:o,className:c,...l,__css:h,children:n})})})});Tt.displayName="ModalContent";var At=q((e,t)=>{const{className:r,...n}=e,a=k("chakra-modal__footer",r),i={display:"flex",alignItems:"center",justifyContent:"flex-end",...Z().footer};return g.jsx(U.footer,{ref:t,...n,__css:i,className:a})});At.displayName="ModalFooter";var Rt=q((e,t)=>{const{className:r,...n}=e,{headerId:a,setHeaderMounted:o}=H();s.useEffect(()=>(o(!0),()=>o(!1)),[o]);const i=k("chakra-modal__header",r),f={flex:0,...Z().header};return g.jsx(U.header,{ref:t,className:i,id:a,...n,__css:f})});Rt.displayName="ModalHeader";var ea=U(X.div),Dt=q((e,t)=>{const{className:r,transition:n,motionProps:a,...o}=e,i=k("chakra-modal__overlay",r),f={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Z().overlay},{motionPreset:l}=H(),c=a||(l==="none"?{}:qe);return g.jsx(ea,{...c,__css:f,ref:t,className:i,...o})});Dt.displayName="ModalOverlay";var Bt=q((e,t)=>{const{className:r,...n}=e,{bodyId:a,setBodyMounted:o}=H();s.useEffect(()=>(o(!0),()=>o(!1)),[o]);const i=k("chakra-modal__body",r),u=Z();return g.jsx(U.div,{ref:t,className:i,id:a,...n,__css:u.body})});Bt.displayName="ModalBody";const ta=[0,1,2,3,4,5],xe=({title:e,...t})=>{const{t:r}=Qt(),n=ta.map((a,o)=>{let i;const u=l=>{const{value:v}=l.currentTarget,c=l.key,m=/\d/g;return v?i=!0:i=!1,c==="Backspace"||m.test(c)?c:l.preventDefault()},f=l=>{var m,h,b,d;const{currentTarget:v}=l,{value:c}=v;c!==""&&((h=(m=v.parentElement)==null?void 0:m.querySelectorAll("input")[o+1])==null||h.focus()),l.key==="Backspace"&&!i&&((d=(b=v.parentElement)==null?void 0:b.querySelectorAll("input")[o-1])==null||d.focus())};return g.jsx(Kt,{flex:"1",h:"16",fontSize:"3xl",textAlign:"center",maxLength:1,pattern:"/\\d/",onKeyDown:u,onKeyUp:f},a)});return g.jsxs(Pt,{isCentered:!0,...t,children:[g.jsx(Dt,{}),g.jsxs(Tt,{children:[g.jsx(Rt,{children:r(e)}),g.jsx(Bt,{children:g.jsx(mr,{justifyContent:"center",children:g.jsx(zt,{maxW:"sm",hidden:!0,children:n})})}),g.jsxs(At,{children:[g.jsx(Te,{variant:"ghost",mr:"3",children:r("otp.resentButton")}),g.jsx(Te,{variant:"success",onClick:t.onClose,children:r("common.submit")})]})]})]})};xe.defaultProps={title:"otp.title",isOpen:!1};try{xe.displayName="OTPModal",xe.__docgenInfo={description:"",displayName:"OTPModal",props:{title:{defaultValue:{value:"otp.title"},description:"",name:"title",required:!1,type:{name:"string | undefined"}}}}}catch{}export{Pt as M,xe as O,pa as a,Z as b,Dt as c,Tt as d,Rt as e,Bt as f,ga as g,At as h,ya as i,H as u};
//# sourceMappingURL=index-01e88102.js.map
