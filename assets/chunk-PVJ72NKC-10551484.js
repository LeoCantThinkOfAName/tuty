import{j as N,f as U,p as Z,g as Ze,u as Qt,h as Y}from"./chunk-QEVFQ4EU-c6d0673c.js";import{r as c,R as Jt}from"./index-8db94870.js";import{j as x}from"./jsx-runtime-94f6e698.js";import{A as ie,m as X,a as er,b as tr}from"./index-b25d0a9d.js";import{_ as xe}from"./extends-bab83b91.js";import{_ as rr}from"./inheritsLoose-d541526f.js";import{d as nr}from"./nonIterableRest-884f82cb.js";import{m as Le}from"./index-bf97d06a.js";var Be={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},A={enter:{duration:.2,ease:Be.easeOut},exit:{duration:.1,ease:Be.easeIn}},T={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},ar={enter:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:1,transition:(n=e==null?void 0:e.enter)!=null?n:T.enter(A.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:0,transition:(n=e==null?void 0:e.exit)!=null?n:T.exit(A.exit,r),transitionEnd:t==null?void 0:t.exit}}},Ke={initial:"exit",animate:"enter",exit:"exit",variants:ar},or=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,className:o,transition:u,transitionEnd:i,delay:d,...l}=t,f=a||n?"enter":"exit",s=n?a&&n:!0,m={transition:u,transitionEnd:i,delay:d};return x.jsx(ie,{custom:m,children:s&&x.jsx(X.div,{ref:r,className:N("chakra-fade",o),custom:m,...Ke,animate:f,...l})})});or.displayName="Fade";var ir={exit:({reverse:e,initialScale:t,transition:r,transitionEnd:n,delay:a})=>{var o;return{opacity:0,...e?{scale:t,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{scale:t,...n==null?void 0:n.exit}},transition:(o=r==null?void 0:r.exit)!=null?o:T.exit(A.exit,a)}},enter:({transitionEnd:e,transition:t,delay:r})=>{var n;return{opacity:1,scale:1,transition:(n=t==null?void 0:t.enter)!=null?n:T.enter(A.enter,r),transitionEnd:e==null?void 0:e.enter}}},Qe={initial:"exit",animate:"enter",exit:"exit",variants:ir},ur=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,initialScale:u=.95,className:i,transition:d,transitionEnd:l,delay:f,...s}=t,m=n?a&&n:!0,h=a||n?"enter":"exit",p={initialScale:u,reverse:o,transition:d,transitionEnd:l,delay:f};return x.jsx(ie,{custom:p,children:m&&x.jsx(X.div,{ref:r,className:N("chakra-offset-slide",i),...Qe,animate:h,custom:p,...s})})});ur.displayName="ScaleFade";var cr={initial:({offsetX:e,offsetY:t,transition:r,transitionEnd:n,delay:a})=>{var o;return{opacity:0,x:e,y:t,transition:(o=r==null?void 0:r.exit)!=null?o:T.exit(A.exit,a),transitionEnd:n==null?void 0:n.exit}},enter:({transition:e,transitionEnd:t,delay:r})=>{var n;return{opacity:1,x:0,y:0,transition:(n=e==null?void 0:e.enter)!=null?n:T.enter(A.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:r,transitionEnd:n,reverse:a,delay:o})=>{var u;const i={x:t,y:e};return{opacity:0,transition:(u=r==null?void 0:r.exit)!=null?u:T.exit(A.exit,o),...a?{...i,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{...i,...n==null?void 0:n.exit}}}}},Se={initial:"initial",animate:"enter",exit:"exit",variants:cr},sr=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,className:u,offsetX:i=0,offsetY:d=8,transition:l,transitionEnd:f,delay:s,...m}=t,h=n?a&&n:!0,p=a||n?"enter":"exit",v={offsetX:i,offsetY:d,reverse:o,transition:l,transitionEnd:f,delay:s};return x.jsx(ie,{custom:v,children:h&&x.jsx(X.div,{ref:r,className:N("chakra-offset-slide",u),custom:v,...Se,animate:p,...m})})});sr.displayName="SlideFade";function lr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var we="data-focus-lock",Je="data-focus-lock-disabled",dr="data-no-focus-lock",fr="data-autofocus-inside",vr="data-no-autofocus";function mr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function hr(e,t){var r=c.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}function et(e,t){return hr(t||null,function(r){return e.forEach(function(n){return mr(n,r)})})}var ve={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},M=function(){return M=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},M.apply(this,arguments)};function tt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function pr(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function rt(e){return e}function nt(e,t){t===void 0&&(t=rt);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var u=t(o,n);return r.push(u),function(){r=r.filter(function(i){return i!==u})}},assignSyncMedium:function(o){for(n=!0;r.length;){var u=r;r=[],u.forEach(o)}r={push:function(i){return o(i)},filter:function(){return r}}},assignMedium:function(o){n=!0;var u=[];if(r.length){var i=r;r=[],i.forEach(o),u=r}var d=function(){var f=u;u=[],f.forEach(o)},l=function(){return Promise.resolve().then(d)};l(),r={push:function(f){u.push(f),l()},filter:function(f){return u=u.filter(f),r}}}};return a}function Oe(e,t){return t===void 0&&(t=rt),nt(e,t)}function at(e){e===void 0&&(e={});var t=nt(null);return t.options=M({async:!0,ssr:!1},e),t}var ot=function(e){var t=e.sideCar,r=tt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return c.createElement(n,M({},r))};ot.isSideCarExport=!0;function br(e,t){return e.useMedium(t),ot}var it=Oe({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),ut=Oe(),gr=Oe(),yr=at({async:!0}),xr=[],Pe=c.forwardRef(function(t,r){var n,a=c.useState(),o=a[0],u=a[1],i=c.useRef(),d=c.useRef(!1),l=c.useRef(null),f=t.children,s=t.disabled,m=t.noFocusGuards,h=t.persistentFocus,p=t.crossFrame,v=t.autoFocus;t.allowTextSelection;var b=t.group,g=t.className,w=t.whiteList,F=t.hasPositiveIndices,C=t.shards,S=C===void 0?xr:C,E=t.as,P=E===void 0?"div":E,y=t.lockProps,k=y===void 0?{}:y,se=t.sideCar,z=t.returnFocus,jt=t.focusOptions,le=t.onActivation,de=t.onDeactivation,Ht=c.useState({}),Ut=Ht[0],Gt=c.useCallback(function(){l.current=l.current||document&&document.activeElement,i.current&&le&&le(i.current),d.current=!0},[le]),$t=c.useCallback(function(){d.current=!1,de&&de(i.current)},[de]);c.useEffect(function(){s||(l.current=null)},[]);var Vt=c.useCallback(function(I){var G=l.current;if(G&&G.focus){var fe=typeof z=="function"?z(G):z;if(fe){var De=typeof fe=="object"?fe:void 0;l.current=null,I?Promise.resolve().then(function(){return G.focus(De)}):G.focus(De)}}},[z]),Yt=c.useCallback(function(I){d.current&&it.useMedium(I)},[]),Xt=ut.useMedium,qt=c.useCallback(function(I){i.current!==I&&(i.current=I,u(I))},[]),zt=xe((n={},n[Je]=s&&"disabled",n[we]=b,n),k),Re=m!==!0,Zt=Re&&m!=="tail",Kt=et([r,qt]);return c.createElement(c.Fragment,null,Re&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:s?-1:0,style:ve}),F?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:s?-1:1,style:ve}):null],!s&&c.createElement(se,{id:Ut,sideCar:yr,observed:o,disabled:s,persistentFocus:h,crossFrame:p,autoFocus:v,whiteList:w,shards:S,onActivation:Gt,onDeactivation:$t,returnFocus:Vt,focusOptions:jt}),c.createElement(P,xe({ref:Kt},zt,{className:g,onBlur:Xt,onFocus:Yt}),f),Zt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:s?-1:0,style:ve}))});Pe.propTypes={};Pe.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const ct=Pe;function Sr(e,t){function r(n){return n.displayName||n.name||"Component"}return function(a){var o=[],u;function i(){u=e(o.map(function(l){return l.props})),t(u)}var d=function(l){rr(f,l);function f(){return l.apply(this,arguments)||this}f.peek=function(){return u};var s=f.prototype;return s.componentDidMount=function(){o.push(this),i()},s.componentDidUpdate=function(){i()},s.componentWillUnmount=function(){var h=o.indexOf(this);o.splice(h,1),i()},s.render=function(){return Jt.createElement(a,this.props)},f}(c.PureComponent);return nr(d,"displayName","SideEffect("+r(a)+")"),d}}var O=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},ne=function(e){return Array.isArray(e)?e:[e]},st=function(e){return Array.isArray(e)?e[0]:e},wr=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},lt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},dt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Fr=function(e,t){return!e||dt(e)||!wr(e)&&t(lt(e))},ft=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=Fr(t,ft.bind(void 0,e));return e.set(t,n),n},Cr=function(e,t){return e&&!dt(e)?Or(e)?t(lt(e)):!1:!0},vt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=Cr(t,vt.bind(void 0,e));return e.set(t,n),n},mt=function(e){return e.dataset},Er=function(e){return e.tagName==="BUTTON"},ht=function(e){return e.tagName==="INPUT"},pt=function(e){return ht(e)&&e.type==="radio"},Mr=function(e){return!((ht(e)||Er(e))&&(e.type==="hidden"||e.disabled))},Or=function(e){var t=e.getAttribute(vr);return![!0,"true",""].includes(t)},ke=function(e){var t;return!!(e&&(!((t=mt(e))===null||t===void 0)&&t.focusGuard))},ae=function(e){return!ke(e)},Pr=function(e){return!!e},kr=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},bt=function(e,t,r){return O(e).map(function(n,a){return{node:n,index:a,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(kr)},Nr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ne=Nr.join(","),Ir="".concat(Ne,", [data-focus-guard]"),gt=function(e,t){return O((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?Ir:Ne)?[n]:[],gt(n))},[])},Ar=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?ue([e.contentDocument.body],t):[e]},ue=function(e,t){return e.reduce(function(r,n){var a,o=gt(n,t),u=(a=[]).concat.apply(a,o.map(function(i){return Ar(i,t)}));return r.concat(u,n.parentNode?O(n.parentNode.querySelectorAll(Ne)).filter(function(i){return i===n}):[])},[])},Tr=function(e){var t=e.querySelectorAll("[".concat(fr,"]"));return O(t).map(function(r){return ue([r])}).reduce(function(r,n){return r.concat(n)},[])},Ie=function(e,t){return O(e).filter(function(r){return ft(t,r)}).filter(function(r){return Mr(r)})},We=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(r){return vt(t,r)})},Fe=function(e,t,r){return bt(Ie(ue(e,r),t),!0,r)},je=function(e,t){return bt(Ie(ue(e),t),!1)},_r=function(e,t){return Ie(Tr(e),t)},B=function(e,t){return e.shadowRoot?B(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var a=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return a?B(a,t):!1}return B(r,t)})},Rr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var a=n+1;a<r;a+=1){var o=e[n].compareDocumentPosition(e[a]);(o&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(o&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(u,i){return!t.has(i)})},yt=function(e){return e.parentNode?yt(e.parentNode):e},Ae=function(e){var t=ne(e);return t.filter(Boolean).reduce(function(r,n){var a=n.getAttribute(we);return r.push.apply(r,a?Rr(O(yt(n).querySelectorAll("[".concat(we,'="').concat(a,'"]:not([').concat(Je,'="disabled"])')))):[n]),r},[])},Dr=function(e){try{return e()}catch{return}},$=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?$(t.shadowRoot):t instanceof HTMLIFrameElement&&Dr(function(){return t.contentWindow.document})?$(t.contentWindow.document):t}},Lr=function(e,t){return e===t},Br=function(e,t){return!!O(e.querySelectorAll("iframe")).some(function(r){return Lr(r,t)})},xt=function(e,t){return t===void 0&&(t=$(st(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Ae(e).some(function(r){return B(r,t)||Br(r,t)})},Wr=function(e){e===void 0&&(e=document);var t=$(e);return t?O(e.querySelectorAll("[".concat(dr,"]"))).some(function(r){return B(r,t)}):!1},jr=function(e,t){return t.filter(pt).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Te=function(e,t){return pt(e)&&e.name?jr(e,t):e},Hr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Te(r,e))}),e.filter(function(r){return t.has(r)})},He=function(e){return e[0]&&e.length>1?Te(e[0],e):e[0]},Ue=function(e,t){return e.length>1?e.indexOf(Te(e[t],e)):t},St="NEW_FOCUS",Ur=function(e,t,r,n){var a=e.length,o=e[0],u=e[a-1],i=ke(r);if(!(r&&e.indexOf(r)>=0)){var d=r!==void 0?t.indexOf(r):-1,l=n?t.indexOf(n):d,f=n?e.indexOf(n):-1,s=d-l,m=t.indexOf(o),h=t.indexOf(u),p=Hr(t),v=r!==void 0?p.indexOf(r):-1,b=v-(n?p.indexOf(n):d),g=Ue(e,0),w=Ue(e,a-1);if(d===-1||f===-1)return St;if(!s&&f>=0)return f;if(d<=m&&i&&Math.abs(s)>1)return w;if(d>=h&&i&&Math.abs(s)>1)return g;if(s&&Math.abs(b)>1)return f;if(d<=m)return w;if(d>h)return g;if(s)return Math.abs(s)>1?f:(a+f+s)%a}},Gr=function(e){return function(t){var r,n=(r=mt(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},$r=function(e,t,r){var n=e.map(function(o){var u=o.node;return u}),a=We(n.filter(Gr(r)));return a&&a.length?He(a):He(We(t))},Ce=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&Ce(e.parentNode.host||e.parentNode,t),t},me=function(e,t){for(var r=Ce(e),n=Ce(t),a=0;a<r.length;a+=1){var o=r[a];if(n.indexOf(o)>=0)return o}return!1},wt=function(e,t,r){var n=ne(e),a=ne(t),o=n[0],u=!1;return a.filter(Boolean).forEach(function(i){u=me(u||i,i)||u,r.filter(Boolean).forEach(function(d){var l=me(o,d);l&&(!u||B(l,u)?u=l:u=me(l,u))})}),u},Vr=function(e,t){return e.reduce(function(r,n){return r.concat(_r(n,t))},[])},Yr=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(Pr)},Xr=function(e,t){var r=$(ne(e).length>0?document:st(e).ownerDocument),n=Ae(e).filter(ae),a=wt(r||e,e,n),o=new Map,u=je(n,o),i=Fe(n,o).filter(function(h){var p=h.node;return ae(p)});if(!(!i[0]&&(i=u,!i[0]))){var d=je([a],o).map(function(h){var p=h.node;return p}),l=Yr(d,i),f=l.map(function(h){var p=h.node;return p}),s=Ur(f,d,r,t);if(s===St){var m=$r(u,f,Vr(n,o));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return s===void 0?s:l[s]}},qr=function(e){var t=Ae(e).filter(ae),r=wt(e,e,t),n=new Map,a=Fe([r],n,!0),o=Fe(t,n).filter(function(u){var i=u.node;return ae(i)}).map(function(u){var i=u.node;return i});return a.map(function(u){var i=u.node,d=u.index;return{node:i,index:d,lockItem:o.indexOf(i)>=0,guard:ke(i)}})},zr=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},he=0,pe=!1,Ft=function(e,t,r){r===void 0&&(r={});var n=Xr(e,t);if(!pe&&n){if(he>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),pe=!0,setTimeout(function(){pe=!1},1);return}he++,zr(n.node,r.focusOptions),he--}};function Ct(e){var t=window,r=t.setImmediate;typeof r<"u"?r(e):setTimeout(e,1)}var Zr=function(){return document&&document.activeElement===document.body},Kr=function(){return Zr()||Wr()},W=null,L=null,j=null,V=!1,Qr=function(){return!0},Jr=function(t){return(W.whiteList||Qr)(t)},en=function(t,r){j={observerNode:t,portaledElement:r}},tn=function(t){return j&&j.portaledElement===t};function Ge(e,t,r,n){var a=null,o=e;do{var u=n[o];if(u.guard)u.node.dataset.focusAutoGuard&&(a=u);else if(u.lockItem){if(o!==e)return;a=null}else break}while((o+=r)!==t);a&&(a.node.tabIndex=0)}var rn=function(t){return t&&"current"in t?t.current:t},nn=function(t){return t?!!V:V==="meanwhile"},an=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},on=function(t,r){return r.some(function(n){return an(t,n,n)})},oe=function(){var t=!1;if(W){var r=W,n=r.observed,a=r.persistentFocus,o=r.autoFocus,u=r.shards,i=r.crossFrame,d=r.focusOptions,l=n||j&&j.portaledElement,f=document&&document.activeElement;if(l){var s=[l].concat(u.map(rn).filter(Boolean));if((!f||Jr(f))&&(a||nn(i)||!Kr()||!L&&o)&&(l&&!(xt(s)||f&&on(f,s)||tn(f))&&(document&&!L&&f&&!o?(f.blur&&f.blur(),document.body.focus()):(t=Ft(s,L,{focusOptions:d}),j={})),V=!1,L=document&&document.activeElement),document){var m=document&&document.activeElement,h=qr(s),p=h.map(function(v){var b=v.node;return b}).indexOf(m);p>-1&&(h.filter(function(v){var b=v.guard,g=v.node;return b&&g.dataset.focusAutoGuard}).forEach(function(v){var b=v.node;return b.removeAttribute("tabIndex")}),Ge(p,h.length,1,h),Ge(p,-1,-1,h))}}}return t},Et=function(t){oe()&&t&&(t.stopPropagation(),t.preventDefault())},_e=function(){return Ct(oe)},un=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||en(n,r)},cn=function(){return null},Mt=function(){V="just",setTimeout(function(){V="meanwhile"},0)},sn=function(){document.addEventListener("focusin",Et),document.addEventListener("focusout",_e),window.addEventListener("blur",Mt)},ln=function(){document.removeEventListener("focusin",Et),document.removeEventListener("focusout",_e),window.removeEventListener("blur",Mt)};function dn(e){return e.filter(function(t){var r=t.disabled;return!r})}function fn(e){var t=e.slice(-1)[0];t&&!W&&sn();var r=W,n=r&&t&&t.id===r.id;W=t,r&&!n&&(r.onDeactivation(),e.filter(function(a){var o=a.id;return o===r.id}).length||r.returnFocus(!t)),t?(L=null,(!n||r.observed!==t.observed)&&t.onActivation(),oe(),Ct(oe)):(ln(),L=null)}it.assignSyncMedium(un);ut.assignMedium(_e);gr.assignMedium(function(e){return e({moveFocusInside:Ft,focusInside:xt})});const vn=Sr(dn,fn)(cn);var Ot=c.forwardRef(function(t,r){return c.createElement(ct,xe({sideCar:vn,ref:r},t))}),Pt=ct.propTypes||{};Pt.sideCar;lr(Pt,["sideCar"]);Ot.propTypes={};const $e=Ot;function mn(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function hn(e){var t;if(!mn(e))return!1;const r=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof r.HTMLElement}var pn=e=>e.hasAttribute("tabindex");function bn(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function kt(e){return e.parentElement&&kt(e.parentElement)?!0:e.hidden}function gn(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function yn(e){if(!hn(e)||kt(e)||bn(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in n?n[t]():gn(e)?!0:pn(e)}var xn=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Sn=xn.join(),wn=e=>e.offsetWidth>0&&e.offsetHeight>0;function Fn(e){const t=Array.from(e.querySelectorAll(Sn));return t.unshift(e),t.filter(r=>yn(r)&&wn(r))}var Ve,Cn=(Ve=$e.default)!=null?Ve:$e,Nt=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:a,children:o,isDisabled:u,autoFocus:i,persistentFocus:d,lockFocusAcrossFrames:l}=e,f=c.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&Fn(n.current).length===0&&requestAnimationFrame(()=>{var p;(p=n.current)==null||p.focus()})},[t,n]),s=c.useCallback(()=>{var h;(h=r==null?void 0:r.current)==null||h.focus()},[r]),m=a&&!r;return x.jsx(Cn,{crossFrame:l,persistentFocus:d,autoFocus:i,disabled:u,onActivation:f,onDeactivation:s,returnFocus:m,children:o})};Nt.displayName="FocusLock";var En={slideInBottom:{...Se,custom:{offsetY:16,reverse:!0}},slideInRight:{...Se,custom:{offsetX:16,reverse:!0}},scale:{...Qe,custom:{initialScale:.95,reverse:!0}},none:{}},Mn=U(X.section),On=e=>En[e||"none"],It=c.forwardRef((e,t)=>{const{preset:r,motionProps:n=On(r),...a}=e;return x.jsx(Mn,{ref:t,...n,...a})});It.displayName="ModalTransition";var Pn=Object.defineProperty,kn=(e,t,r)=>t in e?Pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Nn=(e,t,r)=>(kn(e,typeof t!="symbol"?t+"":t,r),r),In=class{constructor(){Nn(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},Ee=new In;function At(e,t){const[r,n]=c.useState(0);return c.useEffect(()=>{const a=e.current;if(a){if(t){const o=Ee.add(a);n(o)}return()=>{Ee.remove(a),n(0)}}},[t,e]),r}var An=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},_=new WeakMap,K=new WeakMap,Q={},be=0,Tt=function(e){return e&&(e.host||Tt(e.parentNode))},Tn=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=Tt(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},_n=function(e,t,r,n){var a=Tn(t,Array.isArray(e)?e:[e]);Q[r]||(Q[r]=new WeakMap);var o=Q[r],u=[],i=new Set,d=new Set(a),l=function(s){!s||i.has(s)||(i.add(s),l(s.parentNode))};a.forEach(l);var f=function(s){!s||d.has(s)||Array.prototype.forEach.call(s.children,function(m){if(i.has(m))f(m);else{var h=m.getAttribute(n),p=h!==null&&h!=="false",v=(_.get(m)||0)+1,b=(o.get(m)||0)+1;_.set(m,v),o.set(m,b),u.push(m),v===1&&p&&K.set(m,!0),b===1&&m.setAttribute(r,"true"),p||m.setAttribute(n,"true")}})};return f(t),i.clear(),be++,function(){u.forEach(function(s){var m=_.get(s)-1,h=o.get(s)-1;_.set(s,m),o.set(s,h),m||(K.has(s)||s.removeAttribute(n),K.delete(s)),h||s.removeAttribute(r)}),be--,be||(_=new WeakMap,_=new WeakMap,K=new WeakMap,Q={})}},Rn=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=t||An(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),_n(n,a,r,"aria-hidden")):function(){return null}};function Dn(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:a=!0,closeOnEsc:o=!0,useInert:u=!0,onOverlayClick:i,onEsc:d}=e,l=c.useRef(null),f=c.useRef(null),[s,m,h]=Bn(n,"chakra-modal","chakra-modal--header","chakra-modal--body");Ln(l,t&&u),At(l,t);const p=c.useRef(null),v=c.useCallback(y=>{p.current=y.target},[]),b=c.useCallback(y=>{y.key==="Escape"&&(y.stopPropagation(),o&&(r==null||r()),d==null||d())},[o,r,d]),[g,w]=c.useState(!1),[F,C]=c.useState(!1),S=c.useCallback((y={},k=null)=>({role:"dialog",...y,ref:Le(k,l),id:s,tabIndex:-1,"aria-modal":!0,"aria-labelledby":g?m:void 0,"aria-describedby":F?h:void 0,onClick:Z(y.onClick,se=>se.stopPropagation())}),[h,F,s,m,g]),E=c.useCallback(y=>{y.stopPropagation(),p.current===y.target&&Ee.isTopModal(l.current)&&(a&&(r==null||r()),i==null||i())},[r,a,i]),P=c.useCallback((y={},k=null)=>({...y,ref:Le(k,f),onClick:Z(y.onClick,E),onKeyDown:Z(y.onKeyDown,b),onMouseDown:Z(y.onMouseDown,v)}),[b,v,E]);return{isOpen:t,onClose:r,headerId:m,bodyId:h,setBodyMounted:C,setHeaderMounted:w,dialogRef:l,overlayRef:f,getDialogProps:S,getDialogContainerProps:P}}function Ln(e,t){const r=e.current;c.useEffect(()=>{if(!(!e.current||!t))return Rn(e.current)},[t,e,r])}function Bn(e,...t){const r=c.useId(),n=e||r;return c.useMemo(()=>t.map(a=>`${a}-${n}`),[n,t])}var[Wn,q]=Ze({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[jn,H]=Ze({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Hn=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:r,children:n,autoFocus:a,trapFocus:o,initialFocusRef:u,finalFocusRef:i,returnFocusOnClose:d,blockScrollOnMount:l,allowPinchZoom:f,preserveScrollBarGap:s,motionPreset:m,lockFocusAcrossFrames:h,onCloseComplete:p}=t,v=Qt("Modal",t),g={...Dn(t),autoFocus:a,trapFocus:o,initialFocusRef:u,finalFocusRef:i,returnFocusOnClose:d,blockScrollOnMount:l,allowPinchZoom:f,preserveScrollBarGap:s,motionPreset:m,lockFocusAcrossFrames:h};return x.jsx(jn,{value:g,children:x.jsx(Wn,{value:v,children:x.jsx(ie,{onExitComplete:p,children:g.isOpen&&x.jsx(er,{...r,children:n})})})})};Hn.displayName="Modal";var te="right-scroll-bar-position",re="width-before-scroll-bar",Un="with-scroll-bars-hidden",Gn="--removed-body-scroll-bar-size",_t=at(),ge=function(){},ce=c.forwardRef(function(e,t){var r=c.useRef(null),n=c.useState({onScrollCapture:ge,onWheelCapture:ge,onTouchMoveCapture:ge}),a=n[0],o=n[1],u=e.forwardProps,i=e.children,d=e.className,l=e.removeScrollBar,f=e.enabled,s=e.shards,m=e.sideCar,h=e.noIsolation,p=e.inert,v=e.allowPinchZoom,b=e.as,g=b===void 0?"div":b,w=e.gapMode,F=tt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,S=et([r,t]),E=M(M({},F),a);return c.createElement(c.Fragment,null,f&&c.createElement(C,{sideCar:_t,removeScrollBar:l,shards:s,noIsolation:h,inert:p,setCallbacks:o,allowPinchZoom:!!v,lockRef:r,gapMode:w}),u?c.cloneElement(c.Children.only(i),M(M({},E),{ref:S})):c.createElement(g,M({},E,{className:d,ref:S}),i))});ce.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ce.classNames={fullWidth:re,zeroRight:te};var Ye,$n=function(){if(Ye)return Ye;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Vn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=$n();return t&&e.setAttribute("nonce",t),e}function Yn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Xn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var qn=function(){var e=0,t=null;return{add:function(r){e==0&&(t=Vn())&&(Yn(t,r),Xn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},zn=function(){var e=qn();return function(t,r){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},Rt=function(){var e=zn(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},Zn={left:0,top:0,right:0,gap:0},ye=function(e){return parseInt(e||"",10)||0},Kn=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[ye(r),ye(n),ye(a)]},Qn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Zn;var t=Kn(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},Jn=Rt(),ea=function(e,t,r,n){var a=e.left,o=e.top,u=e.right,i=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Un,` {
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
    `).concat(Gn,": ").concat(i,`px;
  }
`)},ta=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n,o=c.useMemo(function(){return Qn(a)},[a]);return c.createElement(Jn,{styles:ea(o,!t,a,r?"":"!important")})},Me=!1;if(typeof window<"u")try{var J=Object.defineProperty({},"passive",{get:function(){return Me=!0,!0}});window.addEventListener("test",J,J),window.removeEventListener("test",J,J)}catch{Me=!1}var R=Me?{passive:!1}:!1,ra=function(e){return e.tagName==="TEXTAREA"},Dt=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!ra(e)&&r[t]==="visible")},na=function(e){return Dt(e,"overflowY")},aa=function(e){return Dt(e,"overflowX")},Xe=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Lt(e,n);if(a){var o=Bt(e,n),u=o[1],i=o[2];if(u>i)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},oa=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},ia=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Lt=function(e,t){return e==="v"?na(t):aa(t)},Bt=function(e,t){return e==="v"?oa(t):ia(t)},ua=function(e,t){return e==="h"&&t==="rtl"?-1:1},ca=function(e,t,r,n,a){var o=ua(e,window.getComputedStyle(t).direction),u=o*n,i=r.target,d=t.contains(i),l=!1,f=u>0,s=0,m=0;do{var h=Bt(e,i),p=h[0],v=h[1],b=h[2],g=v-b-o*p;(p||g)&&Lt(e,i)&&(s+=g,m+=p),i=i.parentNode}while(!d&&i!==document.body||d&&(t.contains(i)||t===i));return(f&&(a&&s===0||!a&&u>s)||!f&&(a&&m===0||!a&&-u>m))&&(l=!0),l},ee=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},qe=function(e){return[e.deltaX,e.deltaY]},ze=function(e){return e&&"current"in e?e.current:e},sa=function(e,t){return e[0]===t[0]&&e[1]===t[1]},la=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},da=0,D=[];function fa(e){var t=c.useRef([]),r=c.useRef([0,0]),n=c.useRef(),a=c.useState(da++)[0],o=c.useState(Rt)[0],u=c.useRef(e);c.useEffect(function(){u.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var v=pr([e.lockRef.current],(e.shards||[]).map(ze),!0).filter(Boolean);return v.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),v.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var i=c.useCallback(function(v,b){if("touches"in v&&v.touches.length===2)return!u.current.allowPinchZoom;var g=ee(v),w=r.current,F="deltaX"in v?v.deltaX:w[0]-g[0],C="deltaY"in v?v.deltaY:w[1]-g[1],S,E=v.target,P=Math.abs(F)>Math.abs(C)?"h":"v";if("touches"in v&&P==="h"&&E.type==="range")return!1;var y=Xe(P,E);if(!y)return!0;if(y?S=P:(S=P==="v"?"h":"v",y=Xe(P,E)),!y)return!1;if(!n.current&&"changedTouches"in v&&(F||C)&&(n.current=S),!S)return!0;var k=n.current||S;return ca(k,b,v,k==="h"?F:C,!0)},[]),d=c.useCallback(function(v){var b=v;if(!(!D.length||D[D.length-1]!==o)){var g="deltaY"in b?qe(b):ee(b),w=t.current.filter(function(S){return S.name===b.type&&S.target===b.target&&sa(S.delta,g)})[0];if(w&&w.should){b.cancelable&&b.preventDefault();return}if(!w){var F=(u.current.shards||[]).map(ze).filter(Boolean).filter(function(S){return S.contains(b.target)}),C=F.length>0?i(b,F[0]):!u.current.noIsolation;C&&b.cancelable&&b.preventDefault()}}},[]),l=c.useCallback(function(v,b,g,w){var F={name:v,delta:b,target:g,should:w};t.current.push(F),setTimeout(function(){t.current=t.current.filter(function(C){return C!==F})},1)},[]),f=c.useCallback(function(v){r.current=ee(v),n.current=void 0},[]),s=c.useCallback(function(v){l(v.type,qe(v),v.target,i(v,e.lockRef.current))},[]),m=c.useCallback(function(v){l(v.type,ee(v),v.target,i(v,e.lockRef.current))},[]);c.useEffect(function(){return D.push(o),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:m}),document.addEventListener("wheel",d,R),document.addEventListener("touchmove",d,R),document.addEventListener("touchstart",f,R),function(){D=D.filter(function(v){return v!==o}),document.removeEventListener("wheel",d,R),document.removeEventListener("touchmove",d,R),document.removeEventListener("touchstart",f,R)}},[]);var h=e.removeScrollBar,p=e.inert;return c.createElement(c.Fragment,null,p?c.createElement(o,{styles:la(a)}):null,h?c.createElement(ta,{gapMode:e.gapMode}):null)}const va=br(_t,fa);var Wt=c.forwardRef(function(e,t){return c.createElement(ce,M({},e,{ref:t,sideCar:va}))});Wt.classNames=ce.classNames;const ma=Wt;function ha(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:a,blockScrollOnMount:o,allowPinchZoom:u,finalFocusRef:i,returnFocusOnClose:d,preserveScrollBarGap:l,lockFocusAcrossFrames:f,isOpen:s}=H(),[m,h]=tr();c.useEffect(()=>{!m&&h&&setTimeout(h)},[m,h]);const p=At(n,s);return x.jsx(Nt,{autoFocus:t,isDisabled:!r,initialFocusRef:a,finalFocusRef:i,restoreFocus:d,contentRef:n,lockFocusAcrossFrames:f,children:x.jsx(ma,{removeScrollBar:!l,allowPinchZoom:u,enabled:p===1&&o,forwardProps:!0,children:e.children})})}var pa=Y((e,t)=>{const{className:r,children:n,containerProps:a,motionProps:o,...u}=e,{getDialogProps:i,getDialogContainerProps:d}=H(),l=i(u,t),f=d(a),s=N("chakra-modal__content",r),m=q(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...m.dialog},p={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...m.dialogContainer},{motionPreset:v}=H();return x.jsx(ha,{children:x.jsx(U.div,{...f,className:"chakra-modal__content-container",tabIndex:-1,__css:p,children:x.jsx(It,{preset:v,motionProps:o,className:s,...l,__css:h,children:n})})})});pa.displayName="ModalContent";var ba=Y((e,t)=>{const{className:r,...n}=e,a=N("chakra-modal__footer",r),u={display:"flex",alignItems:"center",justifyContent:"flex-end",...q().footer};return x.jsx(U.footer,{ref:t,...n,__css:u,className:a})});ba.displayName="ModalFooter";var ga=Y((e,t)=>{const{className:r,...n}=e,{headerId:a,setHeaderMounted:o}=H();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const u=N("chakra-modal__header",r),d={flex:0,...q().header};return x.jsx(U.header,{ref:t,className:u,id:a,...n,__css:d})});ga.displayName="ModalHeader";var ya=U(X.div),xa=Y((e,t)=>{const{className:r,transition:n,motionProps:a,...o}=e,u=N("chakra-modal__overlay",r),d={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...q().overlay},{motionPreset:l}=H(),s=a||(l==="none"?{}:Ke);return x.jsx(ya,{...s,__css:d,ref:t,className:u,...o})});xa.displayName="ModalOverlay";var Sa=Y((e,t)=>{const{className:r,...n}=e,{bodyId:a,setBodyMounted:o}=H();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const u=N("chakra-modal__body",r),i=q();return x.jsx(U.div,{ref:t,className:u,id:a,...n,__css:i.body})});Sa.displayName="ModalBody";export{Hn as M,q as a,xa as b,pa as c,ga as d,Sa as e,ba as f,H as u};
//# sourceMappingURL=chunk-PVJ72NKC-10551484.js.map
