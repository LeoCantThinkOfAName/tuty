import{j as N,f as U,l as Z,g as ze,u as Zt,h as V}from"./chunk-QEVFQ4EU-826d88fa.js";import{w as _,T as A}from"./chunk-LB6CWFOC-e961f13a.js";import{r as c,R as Kt}from"./index-8db94870.js";import{j as x}from"./jsx-runtime-94f6e698.js";import{A as ie}from"./index-ca701c54.js";import{m as X,a as Qt}from"./motion-f5af864f.js";import{_ as Jt}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as xe}from"./extends-bab83b91.js";import{_ as er}from"./inheritsLoose-d541526f.js";import{d as tr}from"./nonIterableRest-9a6b97d0.js";import{i as rr}from"./chunk-ROURZMX4-d2b55cf7.js";import{m as Le}from"./index-bf97d06a.js";import{a as nr}from"./chunk-YLCZP3C4-c67a2e6e.js";var ar={enter:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:1,transition:(n=e==null?void 0:e.enter)!=null?n:_.enter(A.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:0,transition:(n=e==null?void 0:e.exit)!=null?n:_.exit(A.exit,r),transitionEnd:t==null?void 0:t.exit}}},Ze={initial:"exit",animate:"enter",exit:"exit",variants:ar},or=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,className:o,transition:u,transitionEnd:i,delay:d,...l}=t,f=a||n?"enter":"exit",s=n?a&&n:!0,m={transition:u,transitionEnd:i,delay:d};return x.jsx(ie,{custom:m,children:s&&x.jsx(X.div,{ref:r,className:N("chakra-fade",o),custom:m,...Ze,animate:f,...l})})});or.displayName="Fade";var ir={exit:({reverse:e,initialScale:t,transition:r,transitionEnd:n,delay:a})=>{var o;return{opacity:0,...e?{scale:t,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{scale:t,...n==null?void 0:n.exit}},transition:(o=r==null?void 0:r.exit)!=null?o:_.exit(A.exit,a)}},enter:({transitionEnd:e,transition:t,delay:r})=>{var n;return{opacity:1,scale:1,transition:(n=t==null?void 0:t.enter)!=null?n:_.enter(A.enter,r),transitionEnd:e==null?void 0:e.enter}}},Ke={initial:"exit",animate:"enter",exit:"exit",variants:ir},ur=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,initialScale:u=.95,className:i,transition:d,transitionEnd:l,delay:f,...s}=t,m=n?a&&n:!0,h=a||n?"enter":"exit",p={initialScale:u,reverse:o,transition:d,transitionEnd:l,delay:f};return x.jsx(ie,{custom:p,children:m&&x.jsx(X.div,{ref:r,className:N("chakra-offset-slide",i),...Ke,animate:h,custom:p,...s})})});ur.displayName="ScaleFade";var cr={initial:({offsetX:e,offsetY:t,transition:r,transitionEnd:n,delay:a})=>{var o;return{opacity:0,x:e,y:t,transition:(o=r==null?void 0:r.exit)!=null?o:_.exit(A.exit,a),transitionEnd:n==null?void 0:n.exit}},enter:({transition:e,transitionEnd:t,delay:r})=>{var n;return{opacity:1,x:0,y:0,transition:(n=e==null?void 0:e.enter)!=null?n:_.enter(A.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:r,transitionEnd:n,reverse:a,delay:o})=>{var u;const i={x:t,y:e};return{opacity:0,transition:(u=r==null?void 0:r.exit)!=null?u:_.exit(A.exit,o),...a?{...i,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{...i,...n==null?void 0:n.exit}}}}},Se={initial:"initial",animate:"enter",exit:"exit",variants:cr},sr=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,className:u,offsetX:i=0,offsetY:d=8,transition:l,transitionEnd:f,delay:s,...m}=t,h=n?a&&n:!0,p=a||n?"enter":"exit",v={offsetX:i,offsetY:d,reverse:o,transition:l,transitionEnd:f,delay:s};return x.jsx(ie,{custom:v,children:h&&x.jsx(X.div,{ref:r,className:N("chakra-offset-slide",u),custom:v,...Se,animate:p,...m})})});sr.displayName="SlideFade";var we="data-focus-lock",Qe="data-focus-lock-disabled",lr="data-no-focus-lock",dr="data-autofocus-inside",fr="data-no-autofocus";function vr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function mr(e,t){var r=c.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}function Je(e,t){return mr(t||null,function(r){return e.forEach(function(n){return vr(n,r)})})}var ve={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},M=function(){return M=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},M.apply(this,arguments)};function et(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function hr(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function tt(e){return e}function rt(e,t){t===void 0&&(t=tt);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var u=t(o,n);return r.push(u),function(){r=r.filter(function(i){return i!==u})}},assignSyncMedium:function(o){for(n=!0;r.length;){var u=r;r=[],u.forEach(o)}r={push:function(i){return o(i)},filter:function(){return r}}},assignMedium:function(o){n=!0;var u=[];if(r.length){var i=r;r=[],i.forEach(o),u=r}var d=function(){var f=u;u=[],f.forEach(o)},l=function(){return Promise.resolve().then(d)};l(),r={push:function(f){u.push(f),l()},filter:function(f){return u=u.filter(f),r}}}};return a}function Pe(e,t){return t===void 0&&(t=tt),rt(e,t)}function nt(e){e===void 0&&(e={});var t=rt(null);return t.options=M({async:!0,ssr:!1},e),t}var at=function(e){var t=e.sideCar,r=et(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return c.createElement(n,M({},r))};at.isSideCarExport=!0;function pr(e,t){return e.useMedium(t),at}var ot=Pe({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),it=Pe(),gr=Pe(),br=nt({async:!0}),yr=[],Oe=c.forwardRef(function(t,r){var n,a=c.useState(),o=a[0],u=a[1],i=c.useRef(),d=c.useRef(!1),l=c.useRef(null),f=t.children,s=t.disabled,m=t.noFocusGuards,h=t.persistentFocus,p=t.crossFrame,v=t.autoFocus;t.allowTextSelection;var g=t.group,b=t.className,w=t.whiteList,F=t.hasPositiveIndices,C=t.shards,S=C===void 0?yr:C,E=t.as,O=E===void 0?"div":E,y=t.lockProps,k=y===void 0?{}:y,se=t.sideCar,z=t.returnFocus,Bt=t.focusOptions,le=t.onActivation,de=t.onDeactivation,Wt=c.useState({}),jt=Wt[0],Ht=c.useCallback(function(){l.current=l.current||document&&document.activeElement,i.current&&le&&le(i.current),d.current=!0},[le]),Ut=c.useCallback(function(){d.current=!1,de&&de(i.current)},[de]);c.useEffect(function(){s||(l.current=null)},[]);var Gt=c.useCallback(function(I){var G=l.current;if(G&&G.focus){var fe=typeof z=="function"?z(G):z;if(fe){var De=typeof fe=="object"?fe:void 0;l.current=null,I?Promise.resolve().then(function(){return G.focus(De)}):G.focus(De)}}},[z]),$t=c.useCallback(function(I){d.current&&ot.useMedium(I)},[]),Yt=it.useMedium,Vt=c.useCallback(function(I){i.current!==I&&(i.current=I,u(I))},[]),Xt=xe((n={},n[Qe]=s&&"disabled",n[we]=g,n),k),Re=m!==!0,qt=Re&&m!=="tail",zt=Je([r,Vt]);return c.createElement(c.Fragment,null,Re&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:s?-1:0,style:ve}),F?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:s?-1:1,style:ve}):null],!s&&c.createElement(se,{id:jt,sideCar:br,observed:o,disabled:s,persistentFocus:h,crossFrame:p,autoFocus:v,whiteList:w,shards:S,onActivation:Ht,onDeactivation:Ut,returnFocus:Gt,focusOptions:Bt}),c.createElement(O,xe({ref:zt},Xt,{className:b,onBlur:Yt,onFocus:$t}),f),qt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:s?-1:0,style:ve}))});Oe.propTypes={};Oe.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const ut=Oe;function xr(e,t){function r(n){return n.displayName||n.name||"Component"}return function(a){var o=[],u;function i(){u=e(o.map(function(l){return l.props})),t(u)}var d=function(l){er(f,l);function f(){return l.apply(this,arguments)||this}f.peek=function(){return u};var s=f.prototype;return s.componentDidMount=function(){o.push(this),i()},s.componentDidUpdate=function(){i()},s.componentWillUnmount=function(){var h=o.indexOf(this);o.splice(h,1),i()},s.render=function(){return Kt.createElement(a,this.props)},f}(c.PureComponent);return tr(d,"displayName","SideEffect("+r(a)+")"),d}}var P=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},ne=function(e){return Array.isArray(e)?e:[e]},ct=function(e){return Array.isArray(e)?e[0]:e},Sr=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},st=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},lt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},wr=function(e,t){return!e||lt(e)||!Sr(e)&&t(st(e))},dt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=wr(t,dt.bind(void 0,e));return e.set(t,n),n},Fr=function(e,t){return e&&!lt(e)?Mr(e)?t(st(e)):!1:!0},ft=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=Fr(t,ft.bind(void 0,e));return e.set(t,n),n},vt=function(e){return e.dataset},Cr=function(e){return e.tagName==="BUTTON"},mt=function(e){return e.tagName==="INPUT"},ht=function(e){return mt(e)&&e.type==="radio"},Er=function(e){return!((mt(e)||Cr(e))&&(e.type==="hidden"||e.disabled))},Mr=function(e){var t=e.getAttribute(fr);return![!0,"true",""].includes(t)},ke=function(e){var t;return!!(e&&(!((t=vt(e))===null||t===void 0)&&t.focusGuard))},ae=function(e){return!ke(e)},Pr=function(e){return!!e},Or=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},pt=function(e,t,r){return P(e).map(function(n,a){return{node:n,index:a,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(Or)},kr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ne=kr.join(","),Nr="".concat(Ne,", [data-focus-guard]"),gt=function(e,t){return P((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?Nr:Ne)?[n]:[],gt(n))},[])},Ir=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?ue([e.contentDocument.body],t):[e]},ue=function(e,t){return e.reduce(function(r,n){var a,o=gt(n,t),u=(a=[]).concat.apply(a,o.map(function(i){return Ir(i,t)}));return r.concat(u,n.parentNode?P(n.parentNode.querySelectorAll(Ne)).filter(function(i){return i===n}):[])},[])},_r=function(e){var t=e.querySelectorAll("[".concat(dr,"]"));return P(t).map(function(r){return ue([r])}).reduce(function(r,n){return r.concat(n)},[])},Ie=function(e,t){return P(e).filter(function(r){return dt(t,r)}).filter(function(r){return Er(r)})},Be=function(e,t){return t===void 0&&(t=new Map),P(e).filter(function(r){return ft(t,r)})},Fe=function(e,t,r){return pt(Ie(ue(e,r),t),!0,r)},We=function(e,t){return pt(Ie(ue(e),t),!1)},Ar=function(e,t){return Ie(_r(e),t)},B=function(e,t){return e.shadowRoot?B(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:P(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var a=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return a?B(a,t):!1}return B(r,t)})},Tr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var a=n+1;a<r;a+=1){var o=e[n].compareDocumentPosition(e[a]);(o&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(o&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(u,i){return!t.has(i)})},bt=function(e){return e.parentNode?bt(e.parentNode):e},_e=function(e){var t=ne(e);return t.filter(Boolean).reduce(function(r,n){var a=n.getAttribute(we);return r.push.apply(r,a?Tr(P(bt(n).querySelectorAll("[".concat(we,'="').concat(a,'"]:not([').concat(Qe,'="disabled"])')))):[n]),r},[])},Rr=function(e){try{return e()}catch{return}},$=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?$(t.shadowRoot):t instanceof HTMLIFrameElement&&Rr(function(){return t.contentWindow.document})?$(t.contentWindow.document):t}},Dr=function(e,t){return e===t},Lr=function(e,t){return!!P(e.querySelectorAll("iframe")).some(function(r){return Dr(r,t)})},yt=function(e,t){return t===void 0&&(t=$(ct(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:_e(e).some(function(r){return B(r,t)||Lr(r,t)})},Br=function(e){e===void 0&&(e=document);var t=$(e);return t?P(e.querySelectorAll("[".concat(lr,"]"))).some(function(r){return B(r,t)}):!1},Wr=function(e,t){return t.filter(ht).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Ae=function(e,t){return ht(e)&&e.name?Wr(e,t):e},jr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Ae(r,e))}),e.filter(function(r){return t.has(r)})},je=function(e){return e[0]&&e.length>1?Ae(e[0],e):e[0]},He=function(e,t){return e.length>1?e.indexOf(Ae(e[t],e)):t},xt="NEW_FOCUS",Hr=function(e,t,r,n){var a=e.length,o=e[0],u=e[a-1],i=ke(r);if(!(r&&e.indexOf(r)>=0)){var d=r!==void 0?t.indexOf(r):-1,l=n?t.indexOf(n):d,f=n?e.indexOf(n):-1,s=d-l,m=t.indexOf(o),h=t.indexOf(u),p=jr(t),v=r!==void 0?p.indexOf(r):-1,g=v-(n?p.indexOf(n):d),b=He(e,0),w=He(e,a-1);if(d===-1||f===-1)return xt;if(!s&&f>=0)return f;if(d<=m&&i&&Math.abs(s)>1)return w;if(d>=h&&i&&Math.abs(s)>1)return b;if(s&&Math.abs(g)>1)return f;if(d<=m)return w;if(d>h)return b;if(s)return Math.abs(s)>1?f:(a+f+s)%a}},Ur=function(e){return function(t){var r,n=(r=vt(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},Gr=function(e,t,r){var n=e.map(function(o){var u=o.node;return u}),a=Be(n.filter(Ur(r)));return a&&a.length?je(a):je(Be(t))},Ce=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&Ce(e.parentNode.host||e.parentNode,t),t},me=function(e,t){for(var r=Ce(e),n=Ce(t),a=0;a<r.length;a+=1){var o=r[a];if(n.indexOf(o)>=0)return o}return!1},St=function(e,t,r){var n=ne(e),a=ne(t),o=n[0],u=!1;return a.filter(Boolean).forEach(function(i){u=me(u||i,i)||u,r.filter(Boolean).forEach(function(d){var l=me(o,d);l&&(!u||B(l,u)?u=l:u=me(l,u))})}),u},$r=function(e,t){return e.reduce(function(r,n){return r.concat(Ar(n,t))},[])},Yr=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(Pr)},Vr=function(e,t){var r=$(ne(e).length>0?document:ct(e).ownerDocument),n=_e(e).filter(ae),a=St(r||e,e,n),o=new Map,u=We(n,o),i=Fe(n,o).filter(function(h){var p=h.node;return ae(p)});if(!(!i[0]&&(i=u,!i[0]))){var d=We([a],o).map(function(h){var p=h.node;return p}),l=Yr(d,i),f=l.map(function(h){var p=h.node;return p}),s=Hr(f,d,r,t);if(s===xt){var m=Gr(u,f,$r(n,o));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return s===void 0?s:l[s]}},Xr=function(e){var t=_e(e).filter(ae),r=St(e,e,t),n=new Map,a=Fe([r],n,!0),o=Fe(t,n).filter(function(u){var i=u.node;return ae(i)}).map(function(u){var i=u.node;return i});return a.map(function(u){var i=u.node,d=u.index;return{node:i,index:d,lockItem:o.indexOf(i)>=0,guard:ke(i)}})},qr=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},he=0,pe=!1,wt=function(e,t,r){r===void 0&&(r={});var n=Vr(e,t);if(!pe&&n){if(he>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),pe=!0,setTimeout(function(){pe=!1},1);return}he++,qr(n.node,r.focusOptions),he--}};function Ft(e){var t=window,r=t.setImmediate;typeof r<"u"?r(e):setTimeout(e,1)}var zr=function(){return document&&document.activeElement===document.body},Zr=function(){return zr()||Br()},W=null,L=null,j=null,Y=!1,Kr=function(){return!0},Qr=function(t){return(W.whiteList||Kr)(t)},Jr=function(t,r){j={observerNode:t,portaledElement:r}},en=function(t){return j&&j.portaledElement===t};function Ue(e,t,r,n){var a=null,o=e;do{var u=n[o];if(u.guard)u.node.dataset.focusAutoGuard&&(a=u);else if(u.lockItem){if(o!==e)return;a=null}else break}while((o+=r)!==t);a&&(a.node.tabIndex=0)}var tn=function(t){return t&&"current"in t?t.current:t},rn=function(t){return t?!!Y:Y==="meanwhile"},nn=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},an=function(t,r){return r.some(function(n){return nn(t,n,n)})},oe=function(){var t=!1;if(W){var r=W,n=r.observed,a=r.persistentFocus,o=r.autoFocus,u=r.shards,i=r.crossFrame,d=r.focusOptions,l=n||j&&j.portaledElement,f=document&&document.activeElement;if(l){var s=[l].concat(u.map(tn).filter(Boolean));if((!f||Qr(f))&&(a||rn(i)||!Zr()||!L&&o)&&(l&&!(yt(s)||f&&an(f,s)||en(f))&&(document&&!L&&f&&!o?(f.blur&&f.blur(),document.body.focus()):(t=wt(s,L,{focusOptions:d}),j={})),Y=!1,L=document&&document.activeElement),document){var m=document&&document.activeElement,h=Xr(s),p=h.map(function(v){var g=v.node;return g}).indexOf(m);p>-1&&(h.filter(function(v){var g=v.guard,b=v.node;return g&&b.dataset.focusAutoGuard}).forEach(function(v){var g=v.node;return g.removeAttribute("tabIndex")}),Ue(p,h.length,1,h),Ue(p,-1,-1,h))}}}return t},Ct=function(t){oe()&&t&&(t.stopPropagation(),t.preventDefault())},Te=function(){return Ft(oe)},on=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||Jr(n,r)},un=function(){return null},Et=function(){Y="just",setTimeout(function(){Y="meanwhile"},0)},cn=function(){document.addEventListener("focusin",Ct),document.addEventListener("focusout",Te),window.addEventListener("blur",Et)},sn=function(){document.removeEventListener("focusin",Ct),document.removeEventListener("focusout",Te),window.removeEventListener("blur",Et)};function ln(e){return e.filter(function(t){var r=t.disabled;return!r})}function dn(e){var t=e.slice(-1)[0];t&&!W&&cn();var r=W,n=r&&t&&t.id===r.id;W=t,r&&!n&&(r.onDeactivation(),e.filter(function(a){var o=a.id;return o===r.id}).length||r.returnFocus(!t)),t?(L=null,(!n||r.observed!==t.observed)&&t.onActivation(),oe(),Ft(oe)):(sn(),L=null)}ot.assignSyncMedium(on);it.assignMedium(Te);gr.assignMedium(function(e){return e({moveFocusInside:wt,focusInside:yt})});const fn=xr(ln,dn)(un);var Mt=c.forwardRef(function(t,r){return c.createElement(ut,xe({sideCar:fn,ref:r},t))}),Pt=ut.propTypes||{};Pt.sideCar;Jt(Pt,["sideCar"]);Mt.propTypes={};const Ge=Mt;var vn=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],mn=vn.join(),hn=e=>e.offsetWidth>0&&e.offsetHeight>0;function pn(e){const t=Array.from(e.querySelectorAll(mn));return t.unshift(e),t.filter(r=>rr(r)&&hn(r))}var $e,gn=($e=Ge.default)!=null?$e:Ge,Ot=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:a,children:o,isDisabled:u,autoFocus:i,persistentFocus:d,lockFocusAcrossFrames:l}=e,f=c.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&pn(n.current).length===0&&requestAnimationFrame(()=>{var p;(p=n.current)==null||p.focus()})},[t,n]),s=c.useCallback(()=>{var h;(h=r==null?void 0:r.current)==null||h.focus()},[r]),m=a&&!r;return x.jsx(gn,{crossFrame:l,persistentFocus:d,autoFocus:i,disabled:u,onActivation:f,onDeactivation:s,returnFocus:m,children:o})};Ot.displayName="FocusLock";var bn={slideInBottom:{...Se,custom:{offsetY:16,reverse:!0}},slideInRight:{...Se,custom:{offsetX:16,reverse:!0}},scale:{...Ke,custom:{initialScale:.95,reverse:!0}},none:{}},yn=U(X.section),xn=e=>bn[e||"none"],kt=c.forwardRef((e,t)=>{const{preset:r,motionProps:n=xn(r),...a}=e;return x.jsx(yn,{ref:t,...n,...a})});kt.displayName="ModalTransition";var Sn=Object.defineProperty,wn=(e,t,r)=>t in e?Sn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fn=(e,t,r)=>(wn(e,typeof t!="symbol"?t+"":t,r),r),Cn=class{constructor(){Fn(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},Ee=new Cn;function Nt(e,t){const[r,n]=c.useState(0);return c.useEffect(()=>{const a=e.current;if(a){if(t){const o=Ee.add(a);n(o)}return()=>{Ee.remove(a),n(0)}}},[t,e]),r}var En=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},T=new WeakMap,K=new WeakMap,Q={},ge=0,It=function(e){return e&&(e.host||It(e.parentNode))},Mn=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=It(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},Pn=function(e,t,r,n){var a=Mn(t,Array.isArray(e)?e:[e]);Q[r]||(Q[r]=new WeakMap);var o=Q[r],u=[],i=new Set,d=new Set(a),l=function(s){!s||i.has(s)||(i.add(s),l(s.parentNode))};a.forEach(l);var f=function(s){!s||d.has(s)||Array.prototype.forEach.call(s.children,function(m){if(i.has(m))f(m);else{var h=m.getAttribute(n),p=h!==null&&h!=="false",v=(T.get(m)||0)+1,g=(o.get(m)||0)+1;T.set(m,v),o.set(m,g),u.push(m),v===1&&p&&K.set(m,!0),g===1&&m.setAttribute(r,"true"),p||m.setAttribute(n,"true")}})};return f(t),i.clear(),ge++,function(){u.forEach(function(s){var m=T.get(s)-1,h=o.get(s)-1;T.set(s,m),o.set(s,h),m||(K.has(s)||s.removeAttribute(n),K.delete(s)),h||s.removeAttribute(r)}),ge--,ge||(T=new WeakMap,T=new WeakMap,K=new WeakMap,Q={})}},On=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=t||En(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),Pn(n,a,r,"aria-hidden")):function(){return null}};function kn(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:a=!0,closeOnEsc:o=!0,useInert:u=!0,onOverlayClick:i,onEsc:d}=e,l=c.useRef(null),f=c.useRef(null),[s,m,h]=In(n,"chakra-modal","chakra-modal--header","chakra-modal--body");Nn(l,t&&u),Nt(l,t);const p=c.useRef(null),v=c.useCallback(y=>{p.current=y.target},[]),g=c.useCallback(y=>{y.key==="Escape"&&(y.stopPropagation(),o&&(r==null||r()),d==null||d())},[o,r,d]),[b,w]=c.useState(!1),[F,C]=c.useState(!1),S=c.useCallback((y={},k=null)=>({role:"dialog",...y,ref:Le(k,l),id:s,tabIndex:-1,"aria-modal":!0,"aria-labelledby":b?m:void 0,"aria-describedby":F?h:void 0,onClick:Z(y.onClick,se=>se.stopPropagation())}),[h,F,s,m,b]),E=c.useCallback(y=>{y.stopPropagation(),p.current===y.target&&Ee.isTopModal(l.current)&&(a&&(r==null||r()),i==null||i())},[r,a,i]),O=c.useCallback((y={},k=null)=>({...y,ref:Le(k,f),onClick:Z(y.onClick,E),onKeyDown:Z(y.onKeyDown,g),onMouseDown:Z(y.onMouseDown,v)}),[g,v,E]);return{isOpen:t,onClose:r,headerId:m,bodyId:h,setBodyMounted:C,setHeaderMounted:w,dialogRef:l,overlayRef:f,getDialogProps:S,getDialogContainerProps:O}}function Nn(e,t){const r=e.current;c.useEffect(()=>{if(!(!e.current||!t))return On(e.current)},[t,e,r])}function In(e,...t){const r=c.useId(),n=e||r;return c.useMemo(()=>t.map(a=>`${a}-${n}`),[n,t])}var[_n,q]=ze({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[An,H]=ze({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Tn=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:r,children:n,autoFocus:a,trapFocus:o,initialFocusRef:u,finalFocusRef:i,returnFocusOnClose:d,blockScrollOnMount:l,allowPinchZoom:f,preserveScrollBarGap:s,motionPreset:m,lockFocusAcrossFrames:h,onCloseComplete:p}=t,v=Zt("Modal",t),b={...kn(t),autoFocus:a,trapFocus:o,initialFocusRef:u,finalFocusRef:i,returnFocusOnClose:d,blockScrollOnMount:l,allowPinchZoom:f,preserveScrollBarGap:s,motionPreset:m,lockFocusAcrossFrames:h};return x.jsx(An,{value:b,children:x.jsx(_n,{value:v,children:x.jsx(ie,{onExitComplete:p,children:b.isOpen&&x.jsx(nr,{...r,children:n})})})})};Tn.displayName="Modal";var te="right-scroll-bar-position",re="width-before-scroll-bar",Rn="with-scroll-bars-hidden",Dn="--removed-body-scroll-bar-size",_t=nt(),be=function(){},ce=c.forwardRef(function(e,t){var r=c.useRef(null),n=c.useState({onScrollCapture:be,onWheelCapture:be,onTouchMoveCapture:be}),a=n[0],o=n[1],u=e.forwardProps,i=e.children,d=e.className,l=e.removeScrollBar,f=e.enabled,s=e.shards,m=e.sideCar,h=e.noIsolation,p=e.inert,v=e.allowPinchZoom,g=e.as,b=g===void 0?"div":g,w=e.gapMode,F=et(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,S=Je([r,t]),E=M(M({},F),a);return c.createElement(c.Fragment,null,f&&c.createElement(C,{sideCar:_t,removeScrollBar:l,shards:s,noIsolation:h,inert:p,setCallbacks:o,allowPinchZoom:!!v,lockRef:r,gapMode:w}),u?c.cloneElement(c.Children.only(i),M(M({},E),{ref:S})):c.createElement(b,M({},E,{className:d,ref:S}),i))});ce.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ce.classNames={fullWidth:re,zeroRight:te};var Ye,Ln=function(){if(Ye)return Ye;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Bn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ln();return t&&e.setAttribute("nonce",t),e}function Wn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function jn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Hn=function(){var e=0,t=null;return{add:function(r){e==0&&(t=Bn())&&(Wn(t,r),jn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Un=function(){var e=Hn();return function(t,r){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},At=function(){var e=Un(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},Gn={left:0,top:0,right:0,gap:0},ye=function(e){return parseInt(e||"",10)||0},$n=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[ye(r),ye(n),ye(a)]},Yn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Gn;var t=$n(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},Vn=At(),Xn=function(e,t,r,n){var a=e.left,o=e.top,u=e.right,i=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Rn,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(i,"px ").concat(n,`;
  }
  body {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(i,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(te,` {
    right: `).concat(i,"px ").concat(n,`;
  }
  
  .`).concat(re,` {
    margin-right: `).concat(i,"px ").concat(n,`;
  }
  
  .`).concat(te," .").concat(te,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(re," .").concat(re,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body {
    `).concat(Dn,": ").concat(i,`px;
  }
`)},qn=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n,o=c.useMemo(function(){return Yn(a)},[a]);return c.createElement(Vn,{styles:Xn(o,!t,a,r?"":"!important")})},Me=!1;if(typeof window<"u")try{var J=Object.defineProperty({},"passive",{get:function(){return Me=!0,!0}});window.addEventListener("test",J,J),window.removeEventListener("test",J,J)}catch{Me=!1}var R=Me?{passive:!1}:!1,zn=function(e){return e.tagName==="TEXTAREA"},Tt=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!zn(e)&&r[t]==="visible")},Zn=function(e){return Tt(e,"overflowY")},Kn=function(e){return Tt(e,"overflowX")},Ve=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Rt(e,n);if(a){var o=Dt(e,n),u=o[1],i=o[2];if(u>i)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},Qn=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},Jn=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Rt=function(e,t){return e==="v"?Zn(t):Kn(t)},Dt=function(e,t){return e==="v"?Qn(t):Jn(t)},ea=function(e,t){return e==="h"&&t==="rtl"?-1:1},ta=function(e,t,r,n,a){var o=ea(e,window.getComputedStyle(t).direction),u=o*n,i=r.target,d=t.contains(i),l=!1,f=u>0,s=0,m=0;do{var h=Dt(e,i),p=h[0],v=h[1],g=h[2],b=v-g-o*p;(p||b)&&Rt(e,i)&&(s+=b,m+=p),i=i.parentNode}while(!d&&i!==document.body||d&&(t.contains(i)||t===i));return(f&&(a&&s===0||!a&&u>s)||!f&&(a&&m===0||!a&&-u>m))&&(l=!0),l},ee=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Xe=function(e){return[e.deltaX,e.deltaY]},qe=function(e){return e&&"current"in e?e.current:e},ra=function(e,t){return e[0]===t[0]&&e[1]===t[1]},na=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},aa=0,D=[];function oa(e){var t=c.useRef([]),r=c.useRef([0,0]),n=c.useRef(),a=c.useState(aa++)[0],o=c.useState(At)[0],u=c.useRef(e);c.useEffect(function(){u.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var v=hr([e.lockRef.current],(e.shards||[]).map(qe),!0).filter(Boolean);return v.forEach(function(g){return g.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),v.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var i=c.useCallback(function(v,g){if("touches"in v&&v.touches.length===2)return!u.current.allowPinchZoom;var b=ee(v),w=r.current,F="deltaX"in v?v.deltaX:w[0]-b[0],C="deltaY"in v?v.deltaY:w[1]-b[1],S,E=v.target,O=Math.abs(F)>Math.abs(C)?"h":"v";if("touches"in v&&O==="h"&&E.type==="range")return!1;var y=Ve(O,E);if(!y)return!0;if(y?S=O:(S=O==="v"?"h":"v",y=Ve(O,E)),!y)return!1;if(!n.current&&"changedTouches"in v&&(F||C)&&(n.current=S),!S)return!0;var k=n.current||S;return ta(k,g,v,k==="h"?F:C,!0)},[]),d=c.useCallback(function(v){var g=v;if(!(!D.length||D[D.length-1]!==o)){var b="deltaY"in g?Xe(g):ee(g),w=t.current.filter(function(S){return S.name===g.type&&S.target===g.target&&ra(S.delta,b)})[0];if(w&&w.should){g.cancelable&&g.preventDefault();return}if(!w){var F=(u.current.shards||[]).map(qe).filter(Boolean).filter(function(S){return S.contains(g.target)}),C=F.length>0?i(g,F[0]):!u.current.noIsolation;C&&g.cancelable&&g.preventDefault()}}},[]),l=c.useCallback(function(v,g,b,w){var F={name:v,delta:g,target:b,should:w};t.current.push(F),setTimeout(function(){t.current=t.current.filter(function(C){return C!==F})},1)},[]),f=c.useCallback(function(v){r.current=ee(v),n.current=void 0},[]),s=c.useCallback(function(v){l(v.type,Xe(v),v.target,i(v,e.lockRef.current))},[]),m=c.useCallback(function(v){l(v.type,ee(v),v.target,i(v,e.lockRef.current))},[]);c.useEffect(function(){return D.push(o),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:m}),document.addEventListener("wheel",d,R),document.addEventListener("touchmove",d,R),document.addEventListener("touchstart",f,R),function(){D=D.filter(function(v){return v!==o}),document.removeEventListener("wheel",d,R),document.removeEventListener("touchmove",d,R),document.removeEventListener("touchstart",f,R)}},[]);var h=e.removeScrollBar,p=e.inert;return c.createElement(c.Fragment,null,p?c.createElement(o,{styles:na(a)}):null,h?c.createElement(qn,{gapMode:e.gapMode}):null)}const ia=pr(_t,oa);var Lt=c.forwardRef(function(e,t){return c.createElement(ce,M({},e,{ref:t,sideCar:ia}))});Lt.classNames=ce.classNames;const ua=Lt;function ca(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:a,blockScrollOnMount:o,allowPinchZoom:u,finalFocusRef:i,returnFocusOnClose:d,preserveScrollBarGap:l,lockFocusAcrossFrames:f,isOpen:s}=H(),[m,h]=Qt();c.useEffect(()=>{!m&&h&&setTimeout(h)},[m,h]);const p=Nt(n,s);return x.jsx(Ot,{autoFocus:t,isDisabled:!r,initialFocusRef:a,finalFocusRef:i,restoreFocus:d,contentRef:n,lockFocusAcrossFrames:f,children:x.jsx(ua,{removeScrollBar:!l,allowPinchZoom:u,enabled:p===1&&o,forwardProps:!0,children:e.children})})}var sa=V((e,t)=>{const{className:r,children:n,containerProps:a,motionProps:o,...u}=e,{getDialogProps:i,getDialogContainerProps:d}=H(),l=i(u,t),f=d(a),s=N("chakra-modal__content",r),m=q(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...m.dialog},p={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...m.dialogContainer},{motionPreset:v}=H();return x.jsx(ca,{children:x.jsx(U.div,{...f,className:"chakra-modal__content-container",tabIndex:-1,__css:p,children:x.jsx(kt,{preset:v,motionProps:o,className:s,...l,__css:h,children:n})})})});sa.displayName="ModalContent";var la=V((e,t)=>{const{className:r,...n}=e,a=N("chakra-modal__footer",r),u={display:"flex",alignItems:"center",justifyContent:"flex-end",...q().footer};return x.jsx(U.footer,{ref:t,...n,__css:u,className:a})});la.displayName="ModalFooter";var da=V((e,t)=>{const{className:r,...n}=e,{headerId:a,setHeaderMounted:o}=H();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const u=N("chakra-modal__header",r),d={flex:0,...q().header};return x.jsx(U.header,{ref:t,className:u,id:a,...n,__css:d})});da.displayName="ModalHeader";var fa=U(X.div),va=V((e,t)=>{const{className:r,transition:n,motionProps:a,...o}=e,u=N("chakra-modal__overlay",r),d={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...q().overlay},{motionPreset:l}=H(),s=a||(l==="none"?{}:Ze);return x.jsx(fa,{...s,__css:d,ref:t,className:u,...o})});va.displayName="ModalOverlay";var ma=V((e,t)=>{const{className:r,...n}=e,{bodyId:a,setBodyMounted:o}=H();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const u=N("chakra-modal__body",r),i=q();return x.jsx(U.div,{ref:t,className:u,id:a,...n,__css:i.body})});ma.displayName="ModalBody";export{Tn as M,q as a,va as b,sa as c,da as d,ma as e,la as f,H as u};
//# sourceMappingURL=chunk-PVJ72NKC-e67ae711.js.map
