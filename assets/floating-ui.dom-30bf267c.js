function ee(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dt(t){return dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dt(t)}function ne(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}const Lt=["top","right","bottom","left"],W=Math.min,R=Math.max,Q=Math.round,J=Math.floor,V=t=>({x:t,y:t}),St={left:"right",right:"left",bottom:"top",top:"bottom"},Pt={start:"end",end:"start"};function it(t,e,n){return R(t,W(e,n))}function D(t,e){return typeof t=="function"?t(e):t}function M(t){return t.split("-")[0]}function X(t){return t.split("-")[1]}function rt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function $(t){return["top","bottom"].includes(M(t))?"y":"x"}function lt(t){return rt($(t))}function Dt(t,e,n){n===void 0&&(n=!1);const o=X(t),s=lt(t),i=ct(s);let r=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(r=Z(r)),[r,Z(r)]}function Mt(t){const e=Z(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Pt[e])}function kt(t,e,n){const o=["left","right"],s=["right","left"],i=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?i:r;default:return[]}}function Ft(t,e,n,o){const s=X(t);let i=kt(M(t),n==="start",o);return s&&(i=i.map(r=>r+"-"+s),e&&(i=i.concat(i.map(st)))),i}function Z(t){return t.replace(/left|right|bottom|top/g,e=>St[e])}function Bt(t){return{top:0,right:0,bottom:0,left:0,...t}}function yt(t){return typeof t!="number"?Bt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function mt(t,e,n){let{reference:o,floating:s}=t;const i=$(e),r=lt(e),l=ct(r),c=M(e),a=i==="y",h=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,d=o[l]/2-s[l]/2;let f;switch(c){case"top":f={x:h,y:o.y-s.height};break;case"bottom":f={x:h,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-s.width,y:u};break;default:f={x:o.x,y:o.y}}switch(X(e)){case"start":f[r]-=d*(n&&a?-1:1);break;case"end":f[r]+=d*(n&&a?-1:1);break}return f}const Ht=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:r}=n,l=i.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:u}=mt(a,o,c),d=o,f={},m=0;for(let p=0;p<l.length;p++){const{name:x,fn:g}=l[p],{x:w,y:v,data:A,reset:y}=await g({x:h,y:u,initialPlacement:o,placement:d,strategy:s,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(h=w??h,u=v??u,f={...f,[x]:{...f[x],...A}},y&&m<=50){m++,typeof y=="object"&&(y.placement&&(d=y.placement),y.rects&&(a=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:h,y:u}=mt(a,d,c)),p=-1;continue}}return{x:h,y:u,placement:d,strategy:s,middlewareData:f}};async function K(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:d=!1,padding:f=0}=D(e,t),m=yt(f),x=l[d?u==="floating"?"reference":"floating":u],g=tt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:h,strategy:c})),w=u==="floating"?{...r.floating,x:o,y:s}:r.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),A=await(i.isElement==null?void 0:i.isElement(v))?await(i.getScale==null?void 0:i.getScale(v))||{x:1,y:1}:{x:1,y:1},y=tt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:c}):w);return{top:(g.top-y.top+m.top)/A.y,bottom:(y.bottom-g.bottom+m.bottom)/A.y,left:(g.left-y.left+m.left)/A.x,right:(y.right-g.right+m.right)/A.x}}const oe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:s,rects:i,platform:r,elements:l}=e,{element:c,padding:a=0}=D(t,e)||{};if(c==null)return{};const h=yt(a),u={x:n,y:o},d=lt(s),f=ct(d),m=await r.getDimensions(c),p=d==="y",x=p?"top":"left",g=p?"bottom":"right",w=p?"clientHeight":"clientWidth",v=i.reference[f]+i.reference[d]-u[d]-i.floating[f],A=u[d]-i.reference[d],y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let b=y?y[w]:0;(!b||!await(r.isElement==null?void 0:r.isElement(y)))&&(b=l.floating[w]||i.floating[f]);const L=v/2-A/2,B=b/2-m[f]/2-1,H=W(h[x],B),q=W(h[g],B),E=H,U=b-m[f]-q,O=b/2-m[f]/2+L,S=it(E,O,U),N=X(s)!=null&&O!=S&&i.reference[f]/2-(O<E?H:q)-m[f]/2<0?O<E?E-O:U-O:0;return{[d]:u[d]-N,data:{[d]:S,centerOffset:O-S+N}}}}),ie=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:s,rects:i,initialPlacement:r,platform:l,elements:c}=e,{mainAxis:a=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...p}=D(t,e),x=M(o),g=M(r)===r,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),v=u||(g||!m?[Z(r)]:Mt(r));!u&&f!=="none"&&v.push(...Ft(r,m,f,w));const A=[r,...v],y=await K(e,p),b=[];let L=((n=s.flip)==null?void 0:n.overflows)||[];if(a&&b.push(y[x]),h){const E=Dt(o,i,w);b.push(y[E[0]],y[E[1]])}if(L=[...L,{placement:o,overflows:b}],!b.every(E=>E<=0)){var B,H;const E=(((B=s.flip)==null?void 0:B.index)||0)+1,U=A[E];if(U)return{data:{index:E,overflows:L},reset:{placement:U}};let O=(H=L.filter(S=>S.overflows[0]<=0).sort((S,z)=>S.overflows[1]-z.overflows[1])[0])==null?void 0:H.placement;if(!O)switch(d){case"bestFit":{var q;const S=(q=L.map(z=>[z.placement,z.overflows.filter(N=>N>0).reduce((N,Tt)=>N+Tt,0)]).sort((z,N)=>z[1]-N[1])[0])==null?void 0:q[0];S&&(O=S);break}case"initialPlacement":O=r;break}if(o!==O)return{reset:{placement:O}}}return{}}}};function ht(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function gt(t){return Lt.some(e=>t[e]>=0)}const se=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...s}=D(t,e);switch(o){case"referenceHidden":{const i=await K(e,{...s,elementContext:"reference"}),r=ht(i,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:gt(r)}}}case"escaped":{const i=await K(e,{...s,altBoundary:!0}),r=ht(i,n.floating);return{data:{escapedOffsets:r,escaped:gt(r)}}}default:return{}}}}};async function Nt(t,e){const{placement:n,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),r=M(n),l=X(n),c=$(n)==="y",a=["left","top"].includes(r)?-1:1,h=i&&c?-1:1,u=D(e,t);let{mainAxis:d,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),c?{x:f*h,y:d*a}:{x:d*a,y:f*h}}const re=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,s=await Nt(e,t);return{x:n+s.x,y:o+s.y,data:s}}}},ce=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:i=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:g,y:w}=x;return{x:g,y:w}}},...c}=D(t,e),a={x:n,y:o},h=await K(e,c),u=$(M(s)),d=rt(u);let f=a[d],m=a[u];if(i){const x=d==="y"?"top":"left",g=d==="y"?"bottom":"right",w=f+h[x],v=f-h[g];f=it(w,f,v)}if(r){const x=u==="y"?"top":"left",g=u==="y"?"bottom":"right",w=m+h[x],v=m-h[g];m=it(w,m,v)}const p=l.fn({...e,[d]:f,[u]:m});return{...p,data:{x:p.x-n,y:p.y-o}}}}},le=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:s,rects:i,middlewareData:r}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=D(t,e),h={x:n,y:o},u=$(s),d=rt(u);let f=h[d],m=h[u];const p=D(l,e),x=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(c){const v=d==="y"?"height":"width",A=i.reference[d]-i.floating[v]+x.mainAxis,y=i.reference[d]+i.reference[v]-x.mainAxis;f<A?f=A:f>y&&(f=y)}if(a){var g,w;const v=d==="y"?"width":"height",A=["top","left"].includes(M(s)),y=i.reference[u]-i.floating[v]+(A&&((g=r.offset)==null?void 0:g[u])||0)+(A?0:x.crossAxis),b=i.reference[u]+i.reference[v]+(A?0:((w=r.offset)==null?void 0:w[u])||0)-(A?x.crossAxis:0);m<y?m=y:m>b&&(m=b)}return{[d]:f,[u]:m}}}},fe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:s,elements:i}=e,{apply:r=()=>{},...l}=D(t,e),c=await K(e,l),a=M(n),h=X(n),u=$(n)==="y",{width:d,height:f}=o.floating;let m,p;a==="top"||a==="bottom"?(m=a,p=h===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(p=a,m=h==="end"?"top":"bottom");const x=f-c[m],g=d-c[p],w=!e.middlewareData.shift;let v=x,A=g;if(u){const b=d-c.left-c.right;A=h||w?W(g,b):b}else{const b=f-c.top-c.bottom;v=h||w?W(x,b):b}if(w&&!h){const b=R(c.left,0),L=R(c.right,0),B=R(c.top,0),H=R(c.bottom,0);u?A=d-2*(b!==0||L!==0?b+L:R(c.left,c.right)):v=f-2*(B!==0||H!==0?B+H:R(c.top,c.bottom))}await r({...e,availableWidth:A,availableHeight:v});const y=await s.getDimensions(i.floating);return d!==y.width||f!==y.height?{reset:{rects:!0}}:{}}}};function I(t){return vt(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vt(t){return t instanceof Node||t instanceof C(t).Node}function k(t){return t instanceof Element||t instanceof C(t).Element}function P(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function pt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function G(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function Wt(t){return["table","td","th"].includes(I(t))}function ft(t){const e=at(),n=T(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Vt(t){let e=Y(t);for(;P(e)&&!nt(e);){if(ft(e))return e;e=Y(e)}return null}function at(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(I(t))}function T(t){return C(t).getComputedStyle(t)}function ot(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pt(t)&&t.host||F(t);return pt(e)?e.host:e}function bt(t){const e=Y(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&G(e)?e:bt(e)}function et(t,e){var n;e===void 0&&(e=[]);const o=bt(t),s=o===((n=t.ownerDocument)==null?void 0:n.body),i=C(o);return s?e.concat(i,i.visualViewport||[],G(o)?o:[]):e.concat(o,et(o))}function At(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=P(t),i=s?t.offsetWidth:n,r=s?t.offsetHeight:o,l=Q(n)!==i||Q(o)!==r;return l&&(n=i,o=r),{width:n,height:o,$:l}}function ut(t){return k(t)?t:t.contextElement}function j(t){const e=ut(t);if(!P(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:i}=At(e);let r=(i?Q(n.width):n.width)/o,l=(i?Q(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const It=V(0);function Ot(t){const e=C(t);return!at()||!e.visualViewport?It:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function zt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function _(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),i=ut(t);let r=V(1);e&&(o?k(o)&&(r=j(o)):r=j(t));const l=zt(i,n,o)?Ot(i):V(0);let c=(s.left+l.x)/r.x,a=(s.top+l.y)/r.y,h=s.width/r.x,u=s.height/r.y;if(i){const d=C(i),f=o&&k(o)?C(o):o;let m=d.frameElement;for(;m&&o&&f!==d;){const p=j(m),x=m.getBoundingClientRect(),g=T(m),w=x.left+(m.clientLeft+parseFloat(g.paddingLeft))*p.x,v=x.top+(m.clientTop+parseFloat(g.paddingTop))*p.y;c*=p.x,a*=p.y,h*=p.x,u*=p.y,c+=w,a+=v,m=C(m).frameElement}}return tt({width:h,height:u,x:c,y:a})}function _t(t){let{rect:e,offsetParent:n,strategy:o}=t;const s=P(n),i=F(n);if(n===i)return e;let r={scrollLeft:0,scrollTop:0},l=V(1);const c=V(0);if((s||!s&&o!=="fixed")&&((I(n)!=="body"||G(i))&&(r=ot(n)),P(n))){const a=_(n);l=j(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function jt(t){return Array.from(t.getClientRects())}function Rt(t){return _(F(t)).left+ot(t).scrollLeft}function Yt(t){const e=F(t),n=ot(t),o=t.ownerDocument.body,s=R(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=R(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Rt(t);const l=-n.scrollTop;return T(o).direction==="rtl"&&(r+=R(e.clientWidth,o.clientWidth)-s),{width:s,height:i,x:r,y:l}}function Xt(t,e){const n=C(t),o=F(t),s=n.visualViewport;let i=o.clientWidth,r=o.clientHeight,l=0,c=0;if(s){i=s.width,r=s.height;const a=at();(!a||a&&e==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:i,height:r,x:l,y:c}}function $t(t,e){const n=_(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,i=P(t)?j(t):V(1),r=t.clientWidth*i.x,l=t.clientHeight*i.y,c=s*i.x,a=o*i.y;return{width:r,height:l,x:c,y:a}}function xt(t,e,n){let o;if(e==="viewport")o=Xt(t,n);else if(e==="document")o=Yt(F(t));else if(k(e))o=$t(e,n);else{const s=Ot(t);o={...e,x:e.x-s.x,y:e.y-s.y}}return tt(o)}function Ct(t,e){const n=Y(t);return n===e||!k(n)||nt(n)?!1:T(n).position==="fixed"||Ct(n,e)}function qt(t,e){const n=e.get(t);if(n)return n;let o=et(t).filter(l=>k(l)&&I(l)!=="body"),s=null;const i=T(t).position==="fixed";let r=i?Y(t):t;for(;k(r)&&!nt(r);){const l=T(r),c=ft(r);!c&&l.position==="fixed"&&(s=null),(i?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||G(r)&&!c&&Ct(t,r))?o=o.filter(h=>h!==r):s=l,r=Y(r)}return e.set(t,o),o}function Ut(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const r=[...n==="clippingAncestors"?qt(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,h)=>{const u=xt(e,h,s);return a.top=R(u.top,a.top),a.right=W(u.right,a.right),a.bottom=W(u.bottom,a.bottom),a.left=R(u.left,a.left),a},xt(e,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Kt(t){return At(t)}function Gt(t,e,n){const o=P(e),s=F(e),i=n==="fixed",r=_(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const c=V(0);if(o||!o&&!i)if((I(e)!=="body"||G(s))&&(l=ot(e)),o){const a=_(e,!0,i,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else s&&(c.x=Rt(s));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function wt(t,e){return!P(t)||T(t).position==="fixed"?null:e?e(t):t.offsetParent}function Et(t,e){const n=C(t);if(!P(t))return n;let o=wt(t,e);for(;o&&Wt(o)&&T(o).position==="static";)o=wt(o,e);return o&&(I(o)==="html"||I(o)==="body"&&T(o).position==="static"&&!ft(o))?n:o||Vt(t)||n}const Jt=async function(t){let{reference:e,floating:n,strategy:o}=t;const s=this.getOffsetParent||Et,i=this.getDimensions;return{reference:Gt(e,await s(n),o),floating:{x:0,y:0,...await i(n)}}};function Qt(t){return T(t).direction==="rtl"}const Zt={convertOffsetParentRelativeRectToViewportRelativeRect:_t,getDocumentElement:F,getClippingRect:Ut,getOffsetParent:Et,getElementRects:Jt,getClientRects:jt,getDimensions:Kt,getScale:j,isElement:k,isRTL:Qt};function te(t,e){let n=null,o;const s=F(t);function i(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:a,top:h,width:u,height:d}=t.getBoundingClientRect();if(l||e(),!u||!d)return;const f=J(h),m=J(s.clientWidth-(a+u)),p=J(s.clientHeight-(h+d)),x=J(a),w={rootMargin:-f+"px "+-m+"px "+-p+"px "+-x+"px",threshold:R(0,W(1,c))||1};let v=!0;function A(y){const b=y[0].intersectionRatio;if(b!==c){if(!v)return r();b?r(!1,b):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(A,{...w,root:s.ownerDocument})}catch{n=new IntersectionObserver(A,w)}n.observe(t)}return r(!0),i}function ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ut(t),h=s||i?[...a?et(a):[],...et(e)]:[];h.forEach(g=>{s&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const u=a&&l?te(a,n):null;let d=-1,f=null;r&&(f=new ResizeObserver(g=>{let[w]=g;w&&w.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let m,p=c?_(t):null;c&&x();function x(){const g=_(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&n(),p=g,m=requestAnimationFrame(x)}return n(),()=>{h.forEach(g=>{s&&g.removeEventListener("scroll",n),i&&g.removeEventListener("resize",n)}),u&&u(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const ue=(t,e,n)=>{const o=new Map,s={platform:Zt,...n},i={...s.platform,_c:o};return Ht(t,e,{...s,platform:i})};export{ee as _,ne as a,dt as b,ae as c,oe as d,ue as e,ie as f,fe as g,se as h,le as l,re as o,ce as s};
//# sourceMappingURL=floating-ui.dom-30bf267c.js.map
