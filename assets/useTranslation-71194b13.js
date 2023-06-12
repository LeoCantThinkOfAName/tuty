import{g as M,_ as U,a as B}from"./i18nInstance-764935cb.js";import{a as H}from"./toPropertyKey-148bb9ef.js";import{r as d}from"./index-8db94870.js";import{I as J,R as W}from"./context-3d6b95f0.js";function D(){if(console&&console.warn){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(t=console).warn.apply(t,n)}}var A={};function j(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&A[e[0]]||(typeof e[0]=="string"&&(A[e[0]]=new Date),D.apply(void 0,e))}var R=function(e,n){return function(){if(e.isInitialized)n();else{var a=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",a)}}};function T(t,e,n){t.loadNamespaces(e,R(t,n))}function E(t,e,n,a){typeof n=="string"&&(n=[n]),n.forEach(function(i){t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,R(t,a))}function K(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.languages[0],i=e.options?e.options.fallbackLng:!1,c=e.languages[e.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var r=function(u,s){var m=e.services.backendConnector.state["".concat(u,"|").concat(s)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(a,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(a,t)&&(!i||r(c,t)))}function Y(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return j("i18n.languages were undefined or empty",e.languages),!0;var a=e.options.ignoreJSONStructure!==void 0;return a?e.hasLoadedNamespace(t,{lng:n.lng,precheck:function(c,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&c.services.backendConnector.backend&&c.isLanguageChangingTo&&!r(c.isLanguageChangingTo,t))return!1}}):K(t,e,n)}function $(t){if(Array.isArray(t))return t}function q(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,i,c,r,p=[],u=!0,s=!1;try{if(c=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=c.call(n)).done)&&(p.push(a.value),p.length!==e);u=!0);}catch(m){s=!0,i=m}finally{try{if(!u&&n.return!=null&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw i}}return p}}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function G(t,e){if(t){if(typeof t=="string")return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(t,e){return $(t)||q(t,e)||G(t,e)||Q()}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(a){U(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var Z=function(e,n){var a=d.useRef();return d.useEffect(function(){a.current=n?a.current:e},[e,n]),a.current};function te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.i18n,a=d.useContext(J)||{},i=a.i18n,c=a.defaultNS,r=n||i||B();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new W),!r){j("You will need to pass in an i18next instance by using initReactI18next");var p=function(g,f){return typeof f=="string"?f:f&&H(f)==="object"&&typeof f.defaultValue=="string"?f.defaultValue:Array.isArray(g)?g[g.length-1]:g},u=[p,{},!1];return u.t=p,u.i18n={},u.ready=!1,u}r.options.react&&r.options.react.wait!==void 0&&j("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var s=I(I(I({},M()),r.options.react),e),m=s.useSuspense,C=s.keyPrefix,o=t||c||r.options&&r.options.defaultNS;o=typeof o=="string"?[o]:o||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(o);var y=(r.isInitialized||r.initializedStoreOnce)&&o.every(function(l){return Y(l,r,s)});function b(){return r.getFixedT(e.lng||null,s.nsMode==="fallback"?o:o[0],C)}var F=d.useState(b),N=X(F,2),x=N[0],h=N[1],w=o.join();e.lng&&(w="".concat(e.lng).concat(w));var P=Z(w),v=d.useRef(!0);d.useEffect(function(){var l=s.bindI18n,g=s.bindI18nStore;v.current=!0,!y&&!m&&(e.lng?E(r,e.lng,o,function(){v.current&&h(b)}):T(r,o,function(){v.current&&h(b)})),y&&P&&P!==w&&v.current&&h(b);function f(){v.current&&h(b)}return l&&r&&r.on(l,f),g&&r&&r.store.on(g,f),function(){v.current=!1,l&&r&&l.split(" ").forEach(function(O){return r.off(O,f)}),g&&r&&g.split(" ").forEach(function(O){return r.store.off(O,f)})}},[r,w]);var L=d.useRef(!0);d.useEffect(function(){v.current&&!L.current&&h(b),L.current=!1},[r,C]);var S=[x,r,y];if(S.t=x,S.i18n=r,S.ready=y,y||!y&&!m)return S;throw new Promise(function(l){e.lng?E(r,e.lng,o,function(){return l()}):T(r,o,function(){return l()})})}export{te as u};
//# sourceMappingURL=useTranslation-71194b13.js.map
