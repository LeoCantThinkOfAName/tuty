import{r as P}from"./index-8db94870.js";import{x as D,y as T,z as H,A as N}from"./chunk-QEVFQ4EU-c6d0673c.js";import{u as _}from"./extends-bab83b91.js";import{c as k}from"./createClass-d459cbf5.js";var j={exports:{}},n={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=typeof Symbol=="function"&&Symbol.for,w=s?Symbol.for("react.element"):60103,x=s?Symbol.for("react.portal"):60106,p=s?Symbol.for("react.fragment"):60107,y=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,d=s?Symbol.for("react.provider"):60109,b=s?Symbol.for("react.context"):60110,E=s?Symbol.for("react.async_mode"):60111,g=s?Symbol.for("react.concurrent_mode"):60111,S=s?Symbol.for("react.forward_ref"):60112,v=s?Symbol.for("react.suspense"):60113,q=s?Symbol.for("react.suspense_list"):60120,h=s?Symbol.for("react.memo"):60115,$=s?Symbol.for("react.lazy"):60116,W=s?Symbol.for("react.block"):60121,K=s?Symbol.for("react.fundamental"):60117,L=s?Symbol.for("react.responder"):60118,B=s?Symbol.for("react.scope"):60119;function a(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case w:switch(e=e.type,e){case E:case g:case p:case m:case y:case v:return e;default:switch(e=e&&e.$$typeof,e){case b:case S:case $:case h:case d:return e;default:return t}}case x:return t}}}function M(e){return a(e)===g}n.AsyncMode=E;n.ConcurrentMode=g;n.ContextConsumer=b;n.ContextProvider=d;n.Element=w;n.ForwardRef=S;n.Fragment=p;n.Lazy=$;n.Memo=h;n.Portal=x;n.Profiler=m;n.StrictMode=y;n.Suspense=v;n.isAsyncMode=function(e){return M(e)||a(e)===E};n.isConcurrentMode=M;n.isContextConsumer=function(e){return a(e)===b};n.isContextProvider=function(e){return a(e)===d};n.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===w};n.isForwardRef=function(e){return a(e)===S};n.isFragment=function(e){return a(e)===p};n.isLazy=function(e){return a(e)===$};n.isMemo=function(e){return a(e)===h};n.isPortal=function(e){return a(e)===x};n.isProfiler=function(e){return a(e)===m};n.isStrictMode=function(e){return a(e)===y};n.isSuspense=function(e){return a(e)===v};n.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===p||e===g||e===m||e===y||e===v||e===q||typeof e=="object"&&e!==null&&(e.$$typeof===$||e.$$typeof===h||e.$$typeof===d||e.$$typeof===b||e.$$typeof===S||e.$$typeof===K||e.$$typeof===L||e.$$typeof===B||e.$$typeof===W)};n.typeOf=a;j.exports=n;var G=j.exports,F=G,V={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[F.ForwardRef]=V;R[F.Memo]=U;var se=D(function(e,t){var r=e.styles,o=T([r],void 0,P.useContext(H)),c=P.useRef();return _(function(){var i=t.key+"-global",u=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,f=document.querySelector('style[data-emotion="'+i+" "+o.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),f!==null&&(l=!0,f.setAttribute("data-emotion",i),u.hydrate([f])),c.current=[u,l],function(){u.flush()}},[t]),_(function(){var i=c.current,u=i[0],l=i[1];if(l){i[1]=!1;return}if(o.next!==void 0&&N(t,o.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}t.insert("",o,u,!1)},[t,o.name]),null});function Y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return T(t)}var ae=function(){var t=Y.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function J(e,t,r){return t=k(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Q=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,X={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Z=function(t){return X[t]},ee=function(t){return t.replace(Q,Z)};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,o)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(o){J(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var O={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:ee};function ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};O=I(I({},O),e)}function ie(){return O}var z;function fe(e){z=e}function ce(){return z}function le(e){if(Array.isArray(e))return e}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function pe(e,t){if(e){if(typeof e=="string")return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}export{se as G,le as _,fe as a,pe as b,ye as c,J as d,ce as e,ie as g,ae as k,ue as s};
//# sourceMappingURL=nonIterableRest-884f82cb.js.map