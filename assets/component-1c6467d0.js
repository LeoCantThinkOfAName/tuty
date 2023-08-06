import{_ as R}from"./setPrototypeOf-0bb37fbe.js";import{r as p}from"./index-76fb7be0.js";function ee(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,R(e,n)}var j=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},l=new WeakMap,h=new WeakMap,g={},S=0,M=function(e){return e&&(e.host||M(e.parentNode))},P=function(e,n){return n.map(function(r){if(e.contains(r))return r;var t=M(r);return t&&e.contains(t)?t:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},N=function(e,n,r,t){var a=P(n,Array.isArray(e)?e:[e]);g[r]||(g[r]=new WeakMap);var o=g[r],u=[],i=new Set,m=new Set(a),d=function(c){!c||i.has(c)||(i.add(c),d(c.parentNode))};a.forEach(d);var s=function(c){!c||m.has(c)||Array.prototype.forEach.call(c.children,function(f){if(i.has(f))s(f);else{var v=f.getAttribute(t),x=v!==null&&v!=="false",A=(l.get(f)||0)+1,_=(o.get(f)||0)+1;l.set(f,A),o.set(f,_),u.push(f),A===1&&x&&h.set(f,!0),_===1&&f.setAttribute(r,"true"),x||f.setAttribute(t,"true")}})};return s(n),i.clear(),S++,function(){u.forEach(function(c){var f=l.get(c)-1,v=o.get(c)-1;l.set(c,f),o.set(c,v),f||(h.has(c)||c.removeAttribute(t),h.delete(c)),v||c.removeAttribute(r)}),S--,S||(l=new WeakMap,l=new WeakMap,h=new WeakMap,g={})}},ne=function(e,n,r){r===void 0&&(r="data-aria-hidden");var t=Array.from(Array.isArray(e)?e:[e]),a=n||j(e);return a?(t.push.apply(t,Array.from(a.querySelectorAll("[aria-live]"))),N(t,a,r,"aria-hidden")):function(){return null}},y=function(){return y=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},y.apply(this,arguments)};function T(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function re(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,o;t<a;t++)(o||!(t in n))&&(o||(o=Array.prototype.slice.call(n,0,t)),o[t]=n[t]);return e.concat(o||Array.prototype.slice.call(n))}var w="right-scroll-bar-position",b="width-before-scroll-bar",I="with-scroll-bars-hidden",z="--removed-body-scroll-bar-size";function B(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function D(e,n){var r=p.useState(function(){return{value:e,callback:n,facade:{get current(){return r.value},set current(t){var a=r.value;a!==t&&(r.value=t,r.callback(t,a))}}}})[0];return r.callback=n,r.facade}function te(e,n){return D(n||null,function(r){return e.forEach(function(t){return B(t,r)})})}function C(e){return e}function W(e,n){n===void 0&&(n=C);var r=[],t=!1,a={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var u=n(o,t);return r.push(u),function(){r=r.filter(function(i){return i!==u})}},assignSyncMedium:function(o){for(t=!0;r.length;){var u=r;r=[],u.forEach(o)}r={push:function(i){return o(i)},filter:function(){return r}}},assignMedium:function(o){t=!0;var u=[];if(r.length){var i=r;r=[],i.forEach(o),u=r}var m=function(){var s=u;u=[],s.forEach(o)},d=function(){return Promise.resolve().then(m)};d(),r={push:function(s){u.push(s),d()},filter:function(s){return u=u.filter(s),r}}}};return a}function ae(e,n){return n===void 0&&(n=C),W(e,n)}function oe(e){e===void 0&&(e={});var n=W(null);return n.options=y({async:!0,ssr:!1},e),n}var k=function(e){var n=e.sideCar,r=T(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var t=n.read();if(!t)throw new Error("Sidecar medium not found");return p.createElement(t,y({},r))};k.isSideCarExport=!0;function ie(e,n){return e.useMedium(n),k}var O,L=function(){if(O)return O;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function G(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=L();return n&&e.setAttribute("nonce",n),e}function Q(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function q(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var H=function(){var e=0,n=null;return{add:function(r){e==0&&(n=G())&&(Q(n,r),q(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},K=function(){var e=H();return function(n,r){p.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&r])}},V=function(){var e=K(),n=function(r){var t=r.styles,a=r.dynamic;return e(t,a),null};return n},F={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},J=function(e){var n=window.getComputedStyle(document.body),r=n[e==="padding"?"paddingLeft":"marginLeft"],t=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[E(r),E(t),E(a)]},U=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return F;var n=J(e),r=document.documentElement.clientWidth,t=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,t-r+n[2]-n[0])}},X=V(),Y=function(e,n,r,t){var a=e.left,o=e.top,u=e.right,i=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(I,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(i,"px ").concat(t,`;
  }
  body {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(t,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(t,`;
    `),r==="padding"&&"padding-right: ".concat(i,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(w,` {
    right: `).concat(i,"px ").concat(t,`;
  }
  
  .`).concat(b,` {
    margin-right: `).concat(i,"px ").concat(t,`;
  }
  
  .`).concat(w," .").concat(w,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(b," .").concat(b,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body {
    `).concat(z,": ").concat(i,`px;
  }
`)},ce=function(e){var n=e.noRelative,r=e.noImportant,t=e.gapMode,a=t===void 0?"margin":t,o=p.useMemo(function(){return U(a)},[a]);return p.createElement(X,{styles:Y(o,!n,a,r?"":"!important")})};export{ce as R,ee as _,oe as a,T as b,ae as c,y as d,re as e,b as f,ie as g,ne as h,V as s,te as u,w as z};
//# sourceMappingURL=component-1c6467d0.js.map
