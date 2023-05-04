import{j as d}from"./jsx-runtime-94f6e698.js";import{_ as J}from"./createClass-d459cbf5.js";import{u as Q}from"./useTranslation-ec8eb1cc.js";import{u as U}from"./chunk-S432VF2S-8609739a.js";import{g as B,f as x,h as _,u as G,o as E,j as $,n as K,p as Z,l as ee}from"./chunk-QEVFQ4EU-c6d0673c.js";import{u as ae}from"./index-a91c9d3c.js";import{r as M}from"./index-8db94870.js";import{F as N}from"./chunk-MPFPK3CX-8963aa3d.js";import{T as te,a as re}from"./chunk-IXKZFKRY-5ef0a9e9.js";function ne(e){const a=Object.assign({},e);for(let t in a)a[t]===void 0&&delete a[t];return a}var[ie,oe]=B({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function se(e){var a;const t=e.split(" "),r=(a=t.at(0))!=null?a:"",n=t.length>1?t.at(-1):"";return r&&n?`${r.charAt(0)}${n.charAt(0)}`:r.charAt(0)}function R(e){const{name:a,getInitials:t,...r}=e,n=oe();return d.jsx(x.div,{role:"img","aria-label":a,...r,__css:n.label,children:a?t==null?void 0:t(a):null})}R.displayName="AvatarName";var z=e=>d.jsxs(x.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[d.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),d.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function ue(e){const{loading:a,src:t,srcSet:r,onLoad:n,onError:o,crossOrigin:i,sizes:c,ignoreFallback:s}=e,[l,v]=M.useState("pending");M.useEffect(()=>{v(t?"loading":"pending")},[t]);const m=M.useRef(),w=M.useCallback(()=>{if(!t)return;u();const f=new Image;f.src=t,i&&(f.crossOrigin=i),r&&(f.srcset=r),c&&(f.sizes=c),a&&(f.loading=a),f.onload=p=>{u(),v("loaded"),n==null||n(p)},f.onerror=p=>{u(),v("failed"),o==null||o(p)},m.current=f},[t,i,r,c,n,o,a]),u=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return ae(()=>{if(!s)return l==="loading"&&w(),()=>{u()}},[l,w,s]),s?"loaded":l}function X(e){const{src:a,srcSet:t,onError:r,onLoad:n,getInitials:o,name:i,borderRadius:c,loading:s,iconLabel:l,icon:v=d.jsx(z,{}),ignoreFallback:m,referrerPolicy:w,crossOrigin:u}=e,p=ue({src:a,onError:r,crossOrigin:u,ignoreFallback:m})==="loaded";return!a||!p?i?d.jsx(R,{className:"chakra-avatar__initials",getInitials:o,name:i}):M.cloneElement(v,{role:"img","aria-label":l}):d.jsx(x.img,{src:a,srcSet:t,alt:i,onLoad:n,referrerPolicy:w,crossOrigin:u??void 0,className:"chakra-avatar__img",loading:s,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})}X.displayName="AvatarImage";var le={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},V=_((e,a)=>{const t=G("Avatar",e),[r,n]=M.useState(!1),{src:o,srcSet:i,name:c,showBorder:s,borderRadius:l="full",onError:v,onLoad:m,getInitials:w=se,icon:u=d.jsx(z,{}),iconLabel:f=" avatar",loading:p,children:S,borderColor:W,ignoreFallback:T,crossOrigin:D,...H}=E(e),A={borderRadius:l,borderWidth:s?"2px":void 0,...le,...t.container};return W&&(A.borderColor=W),d.jsx(x.span,{ref:a,...H,className:$("chakra-avatar",e.className),"data-loaded":K(r),__css:A,children:d.jsxs(ie,{value:t,children:[d.jsx(X,{src:o,srcSet:i,loading:p,onLoad:Z(m,()=>{n(!0)}),onError:v,getInitials:w,name:c,borderRadius:l,icon:u,iconLabel:f,ignoreFallback:T,crossOrigin:D}),S]})})});V.displayName="Avatar";var de=_(function(a,t){const{className:r,...n}=a,o=U();return d.jsx(x.div,{ref:t,className:$("chakra-card__header",r),__css:o.header,...n})}),k=_(function(a,t){const r=ee("Text",a),{className:n,align:o,decoration:i,casing:c,...s}=E(a),l=ne({textAlign:a.align,textDecoration:a.decoration,textTransform:a.casing});return d.jsx(x.p,{ref:t,className:$("chakra-text",a.className),...l,...s,__css:r})});k.displayName="Text";var ce={};function me(){return ce}function g(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function h(e){g(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||J(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function C(e,a){g(2,arguments);var t=h(e),r=h(a),n=t.getTime()-r.getTime();return n<0?-1:n>0?1:n}function fe(e,a){g(2,arguments);var t=h(e),r=h(a),n=t.getFullYear()-r.getFullYear(),o=t.getMonth()-r.getMonth();return n*12+o}function he(e){g(1,arguments);var a=h(e);return a.setHours(23,59,59,999),a}function ve(e){g(1,arguments);var a=h(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function ge(e){g(1,arguments);var a=h(e);return he(a).getTime()===ve(a).getTime()}function be(e,a){g(2,arguments);var t=h(e),r=h(a),n=C(t,r),o=Math.abs(fe(t,r)),i;if(o<1)i=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-n*o);var c=C(t,r)===-n;ge(h(e))&&o===1&&C(e,r)===1&&(c=!1),i=n*(o-Number(c))}return i===0?0:i}function ye(e,a){return g(2,arguments),h(e).getTime()-h(a).getTime()}var F={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(a){return a<0?Math.ceil(a):Math.floor(a)}},pe="trunc";function we(e){return e?F[e]:F[pe]}function Me(e,a,t){g(2,arguments);var r=ye(e,a)/1e3;return we(t==null?void 0:t.roundingMethod)(r)}var Pe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},xe=function(a,t,r){var n,o=Pe[a];return typeof o=="string"?n=o:t===1?n=o.one:n=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const De=xe;function P(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var Se={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},We={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Te={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ne={date:P({formats:Se,defaultWidth:"full"}),time:P({formats:We,defaultWidth:"full"}),dateTime:P({formats:Te,defaultWidth:"full"})};const ke=Ne;var Ce={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},je=function(a,t,r,n){return Ce[a]};const _e=je;function b(e){return function(a,t){var r=t!=null&&t.context?String(t.context):"standalone",n;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=t!=null&&t.width?String(t.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var c=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;n=e.values[s]||e.values[c]}var l=e.argumentCallback?e.argumentCallback(a):a;return n[l]}}var $e={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ae={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ie={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Oe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Le={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ee=function(a,t){var r=Number(a),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Re={ordinalNumber:Ee,era:b({values:$e,defaultWidth:"wide"}),quarter:b({values:Ae,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:b({values:Fe,defaultWidth:"wide"}),day:b({values:Ie,defaultWidth:"wide"}),dayPeriod:b({values:Oe,defaultWidth:"wide",formattingValues:Le,defaultFormattingWidth:"wide"})};const ze=Re;function y(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=a.match(n);if(!o)return null;var i=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?Ve(c,function(m){return m.test(i)}):Xe(c,function(m){return m.test(i)}),l;l=e.valueCallback?e.valueCallback(s):s,l=t.valueCallback?t.valueCallback(l):l;var v=a.slice(i.length);return{value:l,rest:v}}}function Xe(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function Ve(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function Y(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.match(e.matchPattern);if(!r)return null;var n=r[0],o=a.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=t.valueCallback?t.valueCallback(i):i;var c=a.slice(n.length);return{value:i,rest:c}}}var Ye=/^(\d+)(th|st|nd|rd)?/i,qe=/\d+/i,He={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Je={any:[/^b/i,/^(a|c)/i]},Qe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ue={any:[/1/i,/2/i,/3/i,/4/i]},Be={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ge={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ke={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ze={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ea={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},aa={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ta={ordinalNumber:Y({matchPattern:Ye,parsePattern:qe,valueCallback:function(a){return parseInt(a,10)}}),era:y({matchPatterns:He,defaultMatchWidth:"wide",parsePatterns:Je,defaultParseWidth:"any"}),quarter:y({matchPatterns:Qe,defaultMatchWidth:"wide",parsePatterns:Ue,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:y({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:Ge,defaultParseWidth:"any"}),day:y({matchPatterns:Ke,defaultMatchWidth:"wide",parsePatterns:Ze,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:ea,defaultMatchWidth:"any",parsePatterns:aa,defaultParseWidth:"any"})};const ra=ta;var na={code:"en-US",formatDistance:De,formatLong:ke,formatRelative:_e,localize:ze,match:ra,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ia=na;function q(e,a){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function oa(e){return q({},e)}function I(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}var O=1440,sa=2520,j=43200,ua=86400;function la(e,a,t){var r,n;g(2,arguments);var o=me(),i=(r=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:o.locale)!==null&&r!==void 0?r:ia;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=C(e,a);if(isNaN(c))throw new RangeError("Invalid time value");var s=q(oa(t),{addSuffix:!!(t!=null&&t.addSuffix),comparison:c}),l,v;c>0?(l=h(a),v=h(e)):(l=h(e),v=h(a));var m=Me(v,l),w=(I(v)-I(l))/1e3,u=Math.round((m-w)/60),f;if(u<2)return t!=null&&t.includeSeconds?m<5?i.formatDistance("lessThanXSeconds",5,s):m<10?i.formatDistance("lessThanXSeconds",10,s):m<20?i.formatDistance("lessThanXSeconds",20,s):m<40?i.formatDistance("halfAMinute",0,s):m<60?i.formatDistance("lessThanXMinutes",1,s):i.formatDistance("xMinutes",1,s):u===0?i.formatDistance("lessThanXMinutes",1,s):i.formatDistance("xMinutes",u,s);if(u<45)return i.formatDistance("xMinutes",u,s);if(u<90)return i.formatDistance("aboutXHours",1,s);if(u<O){var p=Math.round(u/60);return i.formatDistance("aboutXHours",p,s)}else{if(u<sa)return i.formatDistance("xDays",1,s);if(u<j){var S=Math.round(u/O);return i.formatDistance("xDays",S,s)}else if(u<ua)return f=Math.round(u/j),i.formatDistance("aboutXMonths",f,s)}if(f=be(v,l),f<12){var W=Math.round(u/j);return i.formatDistance("xMonths",W,s)}else{var T=f%12,D=Math.floor(f/12);return T<3?i.formatDistance("aboutXYears",D,s):T<9?i.formatDistance("overXYears",D,s):i.formatDistance("almostXYears",D+1,s)}}function da(e,a){return g(1,arguments),la(e,Date.now(),a)}var ca={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大約 1 個星期",other:"大約 {{count}} 個星期"},xWeeks:{one:"1 個星期",other:"{{count}} 個星期"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}},ma=function(a,t,r){var n,o=ca[a];return typeof o=="string"?n=o:t===1?n=o.one:n=o.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?n+"內":n+"前":n};const fa=ma;var ha={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},va={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},ga={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ba={date:P({formats:ha,defaultWidth:"full"}),time:P({formats:va,defaultWidth:"full"}),dateTime:P({formats:ga,defaultWidth:"full"})};const ya=ba;var pa={lastWeek:"'上個'eeee p",yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:"'下個'eeee p",other:"P"},wa=function(a,t,r,n){return pa[a]};const Ma=wa;var Pa={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},xa={narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻鐘","第二刻鐘","第三刻鐘","第四刻鐘"]},Da={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},Sa={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},Wa={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},Ta={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},Na=function(a,t){var r=Number(a);switch(t==null?void 0:t.unit){case"date":return r+"日";case"hour":return r+"時";case"minute":return r+"分";case"second":return r+"秒";default:return"第 "+r}},ka={ordinalNumber:Na,era:b({values:Pa,defaultWidth:"wide"}),quarter:b({values:xa,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:b({values:Da,defaultWidth:"wide"}),day:b({values:Sa,defaultWidth:"wide"}),dayPeriod:b({values:Wa,defaultWidth:"wide",formattingValues:Ta,defaultFormattingWidth:"wide"})};const Ca=ka;var ja=/^(第\s*)?\d+(日|時|分|秒)?/i,_a=/\d+/i,$a={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},Aa={any:[/^(前)/i,/^(公元)/i]},Fa={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻鐘/i},Ia={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},Oa={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},La={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},Ea={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^週[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},Ra={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},za={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i},Xa={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},Va={ordinalNumber:Y({matchPattern:ja,parsePattern:_a,valueCallback:function(a){return parseInt(a,10)}}),era:y({matchPatterns:$a,defaultMatchWidth:"wide",parsePatterns:Aa,defaultParseWidth:"any"}),quarter:y({matchPatterns:Fa,defaultMatchWidth:"wide",parsePatterns:Ia,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:y({matchPatterns:Oa,defaultMatchWidth:"wide",parsePatterns:La,defaultParseWidth:"any"}),day:y({matchPatterns:Ea,defaultMatchWidth:"wide",parsePatterns:Ra,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:za,defaultMatchWidth:"any",parsePatterns:Xa,defaultParseWidth:"any"})};const Ya=Va;var qa={code:"zh-TW",formatDistance:fa,formatLong:ya,formatRelative:Ma,localize:Ca,match:Ya,options:{weekStartsOn:1,firstWeekContainsDate:4}};const Ha=qa,L=({userName:e,jobTitle:a,date:t,category:r})=>{const{i18n:{language:n}}=Q(),o=n==="zh"?Ha:void 0;return d.jsx(de,{display:"flex",alignItems:"center",children:d.jsxs(N,{alignItems:"center",w:"100%",justifyContent:"space-between",children:[d.jsxs(N,{alignItems:"center",pr:"5",children:[d.jsx(V,{mr:"3",title:"username"}),d.jsxs(N,{flexDir:"column",children:[d.jsx(k,{as:"h3",fontWeight:"bold",fontSize:"lg",children:e}),d.jsx(k,{as:"span",color:"gray.500",fontSize:"sm",children:a})]})]}),d.jsxs(N,{justifyContent:"end",flexWrap:"wrap-reverse",alignItems:"center",children:[d.jsx(k,{fontSize:"sm",color:"gray.500",children:da(t,{locale:o})}),d.jsx(te,{borderRadius:"full",variant:"solid",colorScheme:"green",ml:"2",children:d.jsx(re,{children:r})})]})]})})};try{L.displayName="PostHeader",L.__docgenInfo={description:"",displayName:"PostHeader",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}}}}}catch{}export{L as P};
//# sourceMappingURL=PostHeader-2e2f50cf.js.map
