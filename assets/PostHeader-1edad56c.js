import{j as c}from"./jsx-runtime-94f6e698.js";import{b as X}from"./createClass-f5845647.js";import{u as z}from"./useTranslation-64d6d4ca.js";import{u as A}from"./chunk-S432VF2S-6afccefc.js";import{f as R,c as I,d as V}from"./chunk-QEVFQ4EU-04d6573c.js";import{F as w}from"./chunk-MPFPK3CX-341f25db.js";import{A as E}from"./chunk-DXGPTSUR-8767538f.js";import{T as D}from"./chunk-P74GIWPW-b554f208.js";import{T as Y,a as q}from"./chunk-IXKZFKRY-ee5fe816.js";var L=R(function(t,a){const{className:r,...n}=t,o=A();return c.jsx(I.div,{ref:a,className:V("chakra-card__header",r),__css:o.header,...n})}),H={};function J(){return H}function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function u(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||X(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function M(e,t){f(2,arguments);var a=u(e),r=u(t),n=a.getTime()-r.getTime();return n<0?-1:n>0?1:n}function Q(e,t){f(2,arguments);var a=u(e),r=u(t),n=a.getFullYear()-r.getFullYear(),o=a.getMonth()-r.getMonth();return n*12+o}function U(e){f(1,arguments);var t=u(e);return t.setHours(23,59,59,999),t}function B(e){f(1,arguments);var t=u(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function G(e){f(1,arguments);var t=u(e);return U(t).getTime()===B(t).getTime()}function K(e,t){f(2,arguments);var a=u(e),r=u(t),n=M(a,r),o=Math.abs(Q(a,r)),i;if(o<1)i=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-n*o);var d=M(a,r)===-n;G(u(e))&&o===1&&M(e,r)===1&&(d=!1),i=n*(o-Number(d))}return i===0?0:i}function Z(e,t){return f(2,arguments),u(e).getTime()-u(t).getTime()}var S={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},ee="trunc";function te(e){return e?S[e]:S[ee]}function ae(e,t,a){f(2,arguments);var r=Z(e,t)/1e3;return te(a==null?void 0:a.roundingMethod)(r)}var re={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ne=function(t,a,r){var n,o=re[t];return typeof o=="string"?n=o:a===1?n=o.one:n=o.other.replace("{{count}}",a.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const ie=ne;function p(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}var oe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},se={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ue={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},de={date:p({formats:oe,defaultWidth:"full"}),time:p({formats:se,defaultWidth:"full"}),dateTime:p({formats:ue,defaultWidth:"full"})};const le=de;var me={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ce=function(t,a,r,n){return me[t]};const fe=ce;function v(e){return function(t,a){var r=a!=null&&a.context?String(a.context):"standalone",n;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a!=null&&a.width?String(a.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var d=e.defaultWidth,s=a!=null&&a.width?String(a.width):e.defaultWidth;n=e.values[s]||e.values[d]}var m=e.argumentCallback?e.argumentCallback(t):t;return n[m]}}var he={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ve={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ge={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},be={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ye={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},pe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},we=function(t,a){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Me={ordinalNumber:we,era:v({values:he,defaultWidth:"wide"}),quarter:v({values:ve,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:v({values:ge,defaultWidth:"wide"}),day:v({values:be,defaultWidth:"wide"}),dayPeriod:v({values:ye,defaultWidth:"wide",formattingValues:pe,defaultFormattingWidth:"wide"})};const Pe=Me;function g(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(n);if(!o)return null;var i=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?We(d,function(h){return h.test(i)}):De(d,function(h){return h.test(i)}),m;m=e.valueCallback?e.valueCallback(s):s,m=a.valueCallback?a.valueCallback(m):m;var b=t.slice(i.length);return{value:m,rest:b}}}function De(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function We(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function N(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=a.valueCallback?a.valueCallback(i):i;var d=t.slice(n.length);return{value:i,rest:d}}}var Te=/^(\d+)(th|st|nd|rd)?/i,Se=/\d+/i,xe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$e={any:[/^b/i,/^(a|c)/i]},ke={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ne={any:[/1/i,/2/i,/3/i,/4/i]},je={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ce={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_e={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Fe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Oe={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ze={ordinalNumber:N({matchPattern:Te,parsePattern:Se,valueCallback:function(t){return parseInt(t,10)}}),era:g({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:$e,defaultParseWidth:"any"}),quarter:g({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:g({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:Ce,defaultParseWidth:"any"}),day:g({matchPatterns:_e,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:Oe,defaultMatchWidth:"any",parsePatterns:Xe,defaultParseWidth:"any"})};const Ae=ze;var Re={code:"en-US",formatDistance:ie,formatLong:le,formatRelative:fe,localize:Pe,match:Ae,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ie=Re;function j(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function Ve(e){return j({},e)}function x(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var $=1440,Ee=2520,W=43200,Ye=86400;function qe(e,t,a){var r,n;f(2,arguments);var o=J(),i=(r=(n=a==null?void 0:a.locale)!==null&&n!==void 0?n:o.locale)!==null&&r!==void 0?r:Ie;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=M(e,t);if(isNaN(d))throw new RangeError("Invalid time value");var s=j(Ve(a),{addSuffix:!!(a!=null&&a.addSuffix),comparison:d}),m,b;d>0?(m=u(t),b=u(e)):(m=u(e),b=u(t));var h=ae(b,m),C=(x(b)-x(m))/1e3,l=Math.round((h-C)/60),y;if(l<2)return a!=null&&a.includeSeconds?h<5?i.formatDistance("lessThanXSeconds",5,s):h<10?i.formatDistance("lessThanXSeconds",10,s):h<20?i.formatDistance("lessThanXSeconds",20,s):h<40?i.formatDistance("halfAMinute",0,s):h<60?i.formatDistance("lessThanXMinutes",1,s):i.formatDistance("xMinutes",1,s):l===0?i.formatDistance("lessThanXMinutes",1,s):i.formatDistance("xMinutes",l,s);if(l<45)return i.formatDistance("xMinutes",l,s);if(l<90)return i.formatDistance("aboutXHours",1,s);if(l<$){var _=Math.round(l/60);return i.formatDistance("aboutXHours",_,s)}else{if(l<Ee)return i.formatDistance("xDays",1,s);if(l<W){var F=Math.round(l/$);return i.formatDistance("xDays",F,s)}else if(l<Ye)return y=Math.round(l/W),i.formatDistance("aboutXMonths",y,s)}if(y=K(b,m),y<12){var O=Math.round(l/W);return i.formatDistance("xMonths",O,s)}else{var T=y%12,P=Math.floor(y/12);return T<3?i.formatDistance("aboutXYears",P,s):T<9?i.formatDistance("overXYears",P,s):i.formatDistance("almostXYears",P+1,s)}}function Le(e,t){return f(1,arguments),qe(e,Date.now(),t)}var He={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大約 1 個星期",other:"大約 {{count}} 個星期"},xWeeks:{one:"1 個星期",other:"{{count}} 個星期"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}},Je=function(t,a,r){var n,o=He[t];return typeof o=="string"?n=o:a===1?n=o.one:n=o.other.replace("{{count}}",String(a)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?n+"內":n+"前":n};const Qe=Je;var Ue={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},Be={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},Ge={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ke={date:p({formats:Ue,defaultWidth:"full"}),time:p({formats:Be,defaultWidth:"full"}),dateTime:p({formats:Ge,defaultWidth:"full"})};const Ze=Ke;var et={lastWeek:"'上個'eeee p",yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:"'下個'eeee p",other:"P"},tt=function(t,a,r,n){return et[t]};const at=tt;var rt={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},nt={narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻鐘","第二刻鐘","第三刻鐘","第四刻鐘"]},it={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},ot={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},st={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},ut={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},dt=function(t,a){var r=Number(t);switch(a==null?void 0:a.unit){case"date":return r+"日";case"hour":return r+"時";case"minute":return r+"分";case"second":return r+"秒";default:return"第 "+r}},lt={ordinalNumber:dt,era:v({values:rt,defaultWidth:"wide"}),quarter:v({values:nt,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:v({values:it,defaultWidth:"wide"}),day:v({values:ot,defaultWidth:"wide"}),dayPeriod:v({values:st,defaultWidth:"wide",formattingValues:ut,defaultFormattingWidth:"wide"})};const mt=lt;var ct=/^(第\s*)?\d+(日|時|分|秒)?/i,ft=/\d+/i,ht={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},vt={any:[/^(前)/i,/^(公元)/i]},gt={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻鐘/i},bt={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},yt={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},pt={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},wt={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^週[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},Mt={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},Pt={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i},Dt={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},Wt={ordinalNumber:N({matchPattern:ct,parsePattern:ft,valueCallback:function(t){return parseInt(t,10)}}),era:g({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any"}),quarter:g({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:g({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),day:g({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:Pt,defaultMatchWidth:"any",parsePatterns:Dt,defaultParseWidth:"any"})};const Tt=Wt;var St={code:"zh-TW",formatDistance:Qe,formatLong:Ze,formatRelative:at,localize:mt,match:Tt,options:{weekStartsOn:1,firstWeekContainsDate:4}};const xt=St,k=({userName:e,jobTitle:t,date:a,category:r})=>{const{i18n:{language:n}}=z(),o=n==="zh"?xt:void 0;return c.jsx(L,{display:"flex",alignItems:"center",children:c.jsxs(w,{alignItems:"center",w:"100%",justifyContent:"space-between",children:[c.jsxs(w,{alignItems:"center",pr:"5",children:[c.jsx(E,{mr:"3",title:"username"}),c.jsxs(w,{flexDir:"column",children:[c.jsx(D,{as:"h3",fontWeight:"bold",fontSize:"lg",children:e}),c.jsx(D,{as:"span",color:"gray.500",fontSize:"sm",children:t})]})]}),c.jsxs(w,{justifyContent:"end",flexWrap:"wrap-reverse",alignItems:"center",children:[c.jsx(D,{fontSize:"sm",color:"gray.500",children:Le(a,{locale:o})}),c.jsx(Y,{borderRadius:"full",variant:"solid",colorScheme:"green",ml:"2",children:c.jsx(q,{children:r})})]})]})})};try{k.displayName="PostHeader",k.__docgenInfo={description:"",displayName:"PostHeader",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}}}}}catch{}export{k as P};
//# sourceMappingURL=PostHeader-1edad56c.js.map
