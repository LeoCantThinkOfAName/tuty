try{
var wt=__STORYBOOKAPI__,{ActiveTabs:Ht,Consumer:Ut,ManagerContext:oe,Provider:Vt,addons:j,combineParameters:jt,controlOrMetaKey:Gt,controlOrMetaSymbol:Ft,eventMatchesShortcut:Wt,eventToShortcut:Yt,isMacLike:$t,isShortcutTaken:Jt,keyToSymbol:Kt,merge:Xt,mockChannel:Zt,optionOrAltSymbol:zt,shortcutMatchesShortcut:qt,shortcutToHumanString:Qt,types:ne,useAddonState:er,useArgTypes:tr,useArgs:rr,useChannel:ae,useGlobalTypes:or,useGlobals:nr,useParameter:ar,useSharedState:sr,useStoryPrepared:lr,useStorybookApi:ir,useStorybookState:cr}=__STORYBOOKAPI__;var r=__REACT__,{Children:se,Component:Or,Fragment:le,Profiler:dr,PureComponent:Tr,StrictMode:mr,Suspense:Rr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ar,cloneElement:fr,createContext:x,createElement:Nr,createFactory:br,createRef:yr,forwardRef:Cr,isValidElement:Sr,lazy:gr,memo:h,useCallback:S,useContext:g,useDebugValue:Lr,useEffect:G,useImperativeHandle:Ir,useLayoutEffect:ie,useMemo:ce,useReducer:hr,useRef:vr,useState:C,version:Dr}=__REACT__;var kr=__STORYBOOKCOMPONENTS__,{A:wr,ActionBar:Ee,AddonPanel:pe,Badge:Hr,Bar:Ur,Blockquote:Vr,Button:jr,ClipboardCode:Gr,Code:Fr,DL:Wr,Div:Yr,DocumentWrapper:$r,ErrorFormatter:Jr,FlexBar:Kr,Form:Xr,H1:Zr,H2:zr,H3:qr,H4:Qr,H5:eo,H6:to,HR:ro,IconButton:oo,IconButtonSkeleton:no,Icons:ao,Img:so,LI:lo,Link:io,ListItem:co,Loader:Eo,OL:po,P:_o,Placeholder:uo,Pre:Oo,ResetWrapper:To,ScrollArea:_e,Separator:mo,Spaced:Ro,Span:Ao,StorybookIcon:fo,StorybookLogo:No,Symbols:bo,SyntaxHighlighter:yo,TT:Co,TabBar:So,TabButton:go,TabWrapper:Lo,Table:Io,Tabs:ho,TabsState:vo,TooltipLinkList:Do,TooltipMessage:xo,TooltipNote:Mo,UL:Bo,WithTooltip:Po,WithTooltipPure:ko,Zoom:wo,codeCommon:Ho,components:Uo,createCopyToClipboardFunction:Vo,getStoryHref:jo,icons:Go,interleaveSeparators:Fo,nameSpaceClassNames:Wo,resetComponents:Yo,withReset:$o}=__STORYBOOKCOMPONENTS__;var zo=__STORYBOOKCOREEVENTS__,{CHANNEL_CREATED:qo,CONFIG_ERROR:Qo,CURRENT_STORY_WAS_SET:en,DOCS_PREPARED:tn,DOCS_RENDERED:rn,FORCE_REMOUNT:on,FORCE_RE_RENDER:nn,GLOBALS_UPDATED:an,IGNORED_EXCEPTION:sn,NAVIGATE_URL:ln,PLAY_FUNCTION_THREW_EXCEPTION:cn,PRELOAD_ENTRIES:En,PREVIEW_BUILDER_PROGRESS:pn,PREVIEW_KEYDOWN:_n,REGISTER_SUBSCRIPTION:un,REQUEST_WHATS_NEW_DATA:On,RESET_STORY_ARGS:dn,RESULT_WHATS_NEW_DATA:Tn,SELECT_STORY:mn,SET_CONFIG:Rn,SET_CURRENT_STORY:An,SET_GLOBALS:fn,SET_INDEX:Nn,SET_STORIES:bn,SET_WHATS_NEW_CACHE:yn,SHARED_STATE_CHANGED:Cn,SHARED_STATE_SET:Sn,STORIES_COLLAPSE_ALL:gn,STORIES_EXPAND_ALL:Ln,STORY_ARGS_UPDATED:In,STORY_CHANGED:M,STORY_ERRORED:hn,STORY_INDEX_INVALIDATED:vn,STORY_MISSING:Dn,STORY_PREPARED:xn,STORY_RENDERED:Mn,STORY_RENDER_PHASE_CHANGED:Bn,STORY_SPECIFIED:Pn,STORY_THREW_EXCEPTION:kn,STORY_UNCHANGED:wn,TOGGLE_WHATS_NEW_NOTIFICATIONS:Hn,UPDATE_GLOBALS:Un,UPDATE_QUERY_PARAMS:Vn,UPDATE_STORY_ARGS:jn}=__STORYBOOKCOREEVENTS__;var de=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,B=e=>{if(typeof e!="string")throw new TypeError("Invalid argument expected string");let t=e.match(de);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},ue=e=>e==="*"||e==="x"||e==="X",Oe=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},Pe=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],ke=(e,t)=>{if(ue(e)||ue(t))return 0;let[o,n]=Pe(Oe(e),Oe(t));return o>n?1:o<n?-1:0},P=(e,t)=>{for(let o=0;o<Math.max(e.length,t.length);o++){let n=ke(e[o]||"0",t[o]||"0");if(n!==0)return n}return 0};var k=(e,t)=>{let o=B(e),n=B(t),a=o.pop(),s=n.pop(),c=P(o,n);return c!==0?c:a&&s?P(a.split("."),s.split(".")):a||s?a?-1:1:0};var we={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},ra=Object.keys(we);var ha=__STORYBOOKTHEMING__,{CacheProvider:va,ClassNames:Da,Global:xa,ThemeProvider:Ma,background:Ba,color:Pa,convert:ka,create:wa,createCache:Ha,createGlobal:Ua,createReset:Va,css:ja,darken:Ga,ensure:Fa,ignoreSsrWarning:Wa,isPropValid:Ya,jsx:$a,keyframes:Ja,lighten:Ka,styled:v,themes:Xa,typography:Za,useTheme:za,withTheme:Te}=__STORYBOOKTHEMING__;var Ue=Object.create,J=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ne=Object.getOwnPropertyNames,je=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty,K=(e,t)=>function(){return t||(0,e[Ne(e)[0]])((t={exports:{}}).exports,t),t.exports},Fe=(e,t)=>{for(var o in t)J(e,o,{get:t[o],enumerable:!0})},We=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ne(t))!Ge.call(e,a)&&a!==o&&J(e,a,{get:()=>t[a],enumerable:!(n=Ve(t,a))||n.enumerable});return e},Ye=(e,t,o)=>(o=e!=null?Ue(je(e)):{},We(t||!e||!e.__esModule?J(o,"default",{value:e,enumerable:!0}):o,e)),$e=K({"node_modules/is-object/index.js"(e,t){"use strict";t.exports=function(n){return typeof n=="object"&&n!==null}}}),Je=K({"node_modules/is-window/index.js"(e,t){"use strict";t.exports=function(o){if(o==null)return!1;var n=Object(o);return n===n.window}}}),Ke=K({"node_modules/is-dom/index.js"(e,t){var o=$e(),n=Je();function a(s){return!o(s)||!n(window)||typeof window.Node!="function"?!1:typeof s.nodeType=="number"&&typeof s.nodeName=="string"}t.exports=a}}),U={};Fe(U,{chromeDark:()=>Xe,chromeLight:()=>Ze});var Xe={BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"11px",BASE_LINE_HEIGHT:1.2,BASE_BACKGROUND_COLOR:"rgb(36, 36, 36)",BASE_COLOR:"rgb(213, 213, 213)",OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES:10,OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES:5,OBJECT_NAME_COLOR:"rgb(227, 110, 236)",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_STRING_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_SYMBOL_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_PREFIX_COLOR:"rgb(85, 106, 242)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:12,ARROW_ANIMATION_DURATION:"0",TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"11px",TREENODE_LINE_HEIGHT:1.2,TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"},Ze={BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"11px",BASE_LINE_HEIGHT:1.2,BASE_BACKGROUND_COLOR:"white",BASE_COLOR:"black",OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES:10,OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES:5,OBJECT_NAME_COLOR:"rgb(136, 19, 145)",OBJECT_VALUE_NULL_COLOR:"rgb(128, 128, 128)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(128, 128, 128)",OBJECT_VALUE_REGEXP_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_STRING_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_SYMBOL_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_NUMBER_COLOR:"rgb(28, 0, 207)",OBJECT_VALUE_BOOLEAN_COLOR:"rgb(28, 0, 207)",OBJECT_VALUE_FUNCTION_PREFIX_COLOR:"rgb(13, 34, 170)",HTML_TAG_COLOR:"rgb(168, 148, 166)",HTML_TAGNAME_COLOR:"rgb(136, 18, 128)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(153, 69, 0)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(26, 26, 166)",HTML_COMMENT_COLOR:"rgb(35, 110, 37)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"#6e6e6e",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:12,ARROW_ANIMATION_DURATION:"0",TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"11px",TREENODE_LINE_HEIGHT:1.2,TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"#aaa",TABLE_TH_BACKGROUND_COLOR:"#eee",TABLE_TH_HOVER_COLOR:"hsla(0, 0%, 90%, 1)",TABLE_SORT_ICON_COLOR:"#6e6e6e",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"},be=x([{},()=>{}]),F={WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",OUserSelect:"none",userSelect:"none"},w=e=>({DOMNodePreview:{htmlOpenTag:{base:{color:e.HTML_TAG_COLOR},tagName:{color:e.HTML_TAGNAME_COLOR,textTransform:e.HTML_TAGNAME_TEXT_TRANSFORM},htmlAttributeName:{color:e.HTML_ATTRIBUTE_NAME_COLOR},htmlAttributeValue:{color:e.HTML_ATTRIBUTE_VALUE_COLOR}},htmlCloseTag:{base:{color:e.HTML_TAG_COLOR},offsetLeft:{marginLeft:-e.TREENODE_PADDING_LEFT},tagName:{color:e.HTML_TAGNAME_COLOR,textTransform:e.HTML_TAGNAME_TEXT_TRANSFORM}},htmlComment:{color:e.HTML_COMMENT_COLOR},htmlDoctype:{color:e.HTML_DOCTYPE_COLOR}},ObjectPreview:{objectDescription:{fontStyle:"italic"},preview:{fontStyle:"italic"},arrayMaxProperties:e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,objectMaxProperties:e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES},ObjectName:{base:{color:e.OBJECT_NAME_COLOR},dimmed:{opacity:.6}},ObjectValue:{objectValueNull:{color:e.OBJECT_VALUE_NULL_COLOR},objectValueUndefined:{color:e.OBJECT_VALUE_UNDEFINED_COLOR},objectValueRegExp:{color:e.OBJECT_VALUE_REGEXP_COLOR},objectValueString:{color:e.OBJECT_VALUE_STRING_COLOR},objectValueSymbol:{color:e.OBJECT_VALUE_SYMBOL_COLOR},objectValueNumber:{color:e.OBJECT_VALUE_NUMBER_COLOR},objectValueBoolean:{color:e.OBJECT_VALUE_BOOLEAN_COLOR},objectValueFunctionPrefix:{color:e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,fontStyle:"italic"},objectValueFunctionName:{fontStyle:"italic"}},TreeView:{treeViewOutline:{padding:0,margin:0,listStyleType:"none"}},TreeNode:{treeNodeBase:{color:e.BASE_COLOR,backgroundColor:e.BASE_BACKGROUND_COLOR,lineHeight:e.TREENODE_LINE_HEIGHT,cursor:"default",boxSizing:"border-box",listStyle:"none",fontFamily:e.TREENODE_FONT_FAMILY,fontSize:e.TREENODE_FONT_SIZE},treeNodePreviewContainer:{},treeNodePlaceholder:{whiteSpace:"pre",fontSize:e.ARROW_FONT_SIZE,marginRight:e.ARROW_MARGIN_RIGHT,...F},treeNodeArrow:{base:{color:e.ARROW_COLOR,display:"inline-block",fontSize:e.ARROW_FONT_SIZE,marginRight:e.ARROW_MARGIN_RIGHT,...parseFloat(e.ARROW_ANIMATION_DURATION)>0?{transition:`transform ${e.ARROW_ANIMATION_DURATION} ease 0s`}:{},...F},expanded:{WebkitTransform:"rotateZ(90deg)",MozTransform:"rotateZ(90deg)",transform:"rotateZ(90deg)"},collapsed:{WebkitTransform:"rotateZ(0deg)",MozTransform:"rotateZ(0deg)",transform:"rotateZ(0deg)"}},treeNodeChildNodesContainer:{margin:0,paddingLeft:e.TREENODE_PADDING_LEFT}},TableInspector:{base:{color:e.BASE_COLOR,position:"relative",border:`1px solid ${e.TABLE_BORDER_COLOR}`,fontFamily:e.BASE_FONT_FAMILY,fontSize:e.BASE_FONT_SIZE,lineHeight:"120%",boxSizing:"border-box",cursor:"default"}},TableInspectorHeaderContainer:{base:{top:0,height:"17px",left:0,right:0,overflowX:"hidden"},table:{tableLayout:"fixed",borderSpacing:0,borderCollapse:"separate",height:"100%",width:"100%",margin:0}},TableInspectorDataContainer:{tr:{display:"table-row"},td:{boxSizing:"border-box",border:"none",height:"16px",verticalAlign:"top",padding:"1px 4px",WebkitUserSelect:"text",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",lineHeight:"14px"},div:{position:"static",top:"17px",bottom:0,overflowY:"overlay",transform:"translateZ(0)",left:0,right:0,overflowX:"hidden"},table:{positon:"static",left:0,top:0,right:0,bottom:0,borderTop:"0 none transparent",margin:0,backgroundImage:e.TABLE_DATA_BACKGROUND_IMAGE,backgroundSize:e.TABLE_DATA_BACKGROUND_SIZE,tableLayout:"fixed",borderSpacing:0,borderCollapse:"separate",width:"100%",fontSize:e.BASE_FONT_SIZE,lineHeight:"120%"}},TableInspectorTH:{base:{position:"relative",height:"auto",textAlign:"left",backgroundColor:e.TABLE_TH_BACKGROUND_COLOR,borderBottom:`1px solid ${e.TABLE_BORDER_COLOR}`,fontWeight:"normal",verticalAlign:"middle",padding:"0 4px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",lineHeight:"14px",":hover":{backgroundColor:e.TABLE_TH_HOVER_COLOR}},div:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:e.BASE_FONT_SIZE,lineHeight:"120%"}},TableInspectorLeftBorder:{none:{borderLeft:"none"},solid:{borderLeft:`1px solid ${e.TABLE_BORDER_COLOR}`}},TableInspectorSortIcon:{display:"block",marginRight:3,width:8,height:7,marginTop:-7,color:e.TABLE_SORT_ICON_COLOR,fontSize:12,...F}}),W="chromeLight",ye=x(w(U[W])),N=e=>g(ye)[e],X=e=>({theme:o=W,...n})=>{let a=ce(()=>{switch(Object.prototype.toString.call(o)){case"[object String]":return w(U[o]);case"[object Object]":return w(o);default:return w(U[W])}},[o]);return r.createElement(ye.Provider,{value:a},r.createElement(e,{...n}))},ze=({expanded:e,styles:t})=>r.createElement("span",{style:{...t.base,...e?t.expanded:t.collapsed}},"\u25B6"),qe=h(e=>{e={expanded:!0,nodeRenderer:({name:_})=>r.createElement("span",null,_),onClick:()=>{},shouldShowArrow:!1,shouldShowPlaceholder:!0,...e};let{expanded:t,onClick:o,children:n,nodeRenderer:a,title:s,shouldShowArrow:c,shouldShowPlaceholder:l}=e,i=N("TreeNode"),p=a;return r.createElement("li",{"aria-expanded":t,role:"treeitem",style:i.treeNodeBase,title:s},r.createElement("div",{style:i.treeNodePreviewContainer,onClick:o},c||se.count(n)>0?r.createElement(ze,{expanded:t,styles:i.treeNodeArrow}):l&&r.createElement("span",{style:i.treeNodePlaceholder},"\xA0"),r.createElement(p,{...e})),r.createElement("ol",{role:"group",style:i.treeNodeChildNodesContainer},t?n:void 0))}),V="$",me="*";function H(e,t){return!t(e).next().done}var Qe=e=>Array.from({length:e},(t,o)=>[V].concat(Array.from({length:o},()=>"*")).join(".")),et=(e,t,o,n,a)=>{let s=[].concat(Qe(n)).concat(o).filter(l=>typeof l=="string"),c=[];return s.forEach(l=>{let i=l.split("."),p=(_,T,m)=>{if(m===i.length){c.push(T);return}let b=i[m];if(m===0)H(_,t)&&(b===V||b===me)&&p(_,V,m+1);else if(b===me)for(let{name:u,data:O}of t(_))H(O,t)&&p(O,`${T}.${u}`,m+1);else{let u=_[b];H(u,t)&&p(u,`${T}.${b}`,m+1)}};p(e,"",0)}),c.reduce((l,i)=>(l[i]=!0,l),{...a})},Ce=h(e=>{let{data:t,dataIterator:o,path:n,depth:a,nodeRenderer:s}=e,[c,l]=g(be),i=H(t,o),p=!!c[n],_=S(()=>i&&l(T=>({...T,[n]:!p})),[i,l,n,p]);return r.createElement(qe,{expanded:p,onClick:_,shouldShowArrow:i,shouldShowPlaceholder:a>0,nodeRenderer:s,...e},p?[...o(t)].map(({name:T,data:m,...b})=>r.createElement(Ce,{name:T,data:m,depth:a+1,path:`${n}.${T}`,key:T,dataIterator:o,nodeRenderer:s,...b})):null)}),Se=h(({name:e,data:t,dataIterator:o,nodeRenderer:n,expandPaths:a,expandLevel:s})=>{let c=N("TreeView"),l=C({}),[,i]=l;return ie(()=>i(p=>et(t,o,a,s,p)),[t,o,a,s]),r.createElement(be.Provider,{value:l},r.createElement("ol",{role:"tree",style:c.treeViewOutline},r.createElement(Ce,{name:e,data:t,dataIterator:o,depth:0,path:V,nodeRenderer:n})))}),Z=({name:e,dimmed:t=!1,styles:o={}})=>{let n=N("ObjectName"),a={...n.base,...t?n.dimmed:{},...o};return r.createElement("span",{style:a},e)},D=({object:e,styles:t})=>{let o=N("ObjectValue"),n=a=>({...o[a],...t});switch(typeof e){case"bigint":return r.createElement("span",{style:n("objectValueNumber")},String(e),"n");case"number":return r.createElement("span",{style:n("objectValueNumber")},String(e));case"string":return r.createElement("span",{style:n("objectValueString")},'"',e,'"');case"boolean":return r.createElement("span",{style:n("objectValueBoolean")},String(e));case"undefined":return r.createElement("span",{style:n("objectValueUndefined")},"undefined");case"object":return e===null?r.createElement("span",{style:n("objectValueNull")},"null"):e instanceof Date?r.createElement("span",null,e.toString()):e instanceof RegExp?r.createElement("span",{style:n("objectValueRegExp")},e.toString()):Array.isArray(e)?r.createElement("span",null,`Array(${e.length})`):e.constructor?typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)?r.createElement("span",null,`Buffer[${e.length}]`):r.createElement("span",null,e.constructor.name):r.createElement("span",null,"Object");case"function":return r.createElement("span",null,r.createElement("span",{style:n("objectValueFunctionPrefix")},"\u0192\xA0"),r.createElement("span",{style:n("objectValueFunctionName")},e.name,"()"));case"symbol":return r.createElement("span",{style:n("objectValueSymbol")},e.toString());default:return r.createElement("span",null)}},ge=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;function Y(e,t){let o=Object.getOwnPropertyDescriptor(e,t);if(o.get)try{return o.get()}catch{return o.get}return e[t]}function Re(e,t){return e.length===0?[]:e.slice(1).reduce((o,n)=>o.concat([t,n]),[e[0]])}var $=({data:e})=>{let t=N("ObjectPreview"),o=e;if(typeof o!="object"||o===null||o instanceof Date||o instanceof RegExp)return r.createElement(D,{object:o});if(Array.isArray(o)){let n=t.arrayMaxProperties,a=o.slice(0,n).map((c,l)=>r.createElement(D,{key:l,object:c}));o.length>n&&a.push(r.createElement("span",{key:"ellipsis"},"\u2026"));let s=o.length;return r.createElement(r.Fragment,null,r.createElement("span",{style:t.objectDescription},s===0?"":`(${s})\xA0`),r.createElement("span",{style:t.preview},"[",Re(a,", "),"]"))}else{let n=t.objectMaxProperties,a=[];for(let c in o)if(ge.call(o,c)){let l;a.length===n-1&&Object.keys(o).length>n&&(l=r.createElement("span",{key:"ellipsis"},"\u2026"));let i=Y(o,c);if(a.push(r.createElement("span",{key:c},r.createElement(Z,{name:c||'""'}),":\xA0",r.createElement(D,{object:i}),l)),l)break}let s=o.constructor?o.constructor.name:"Object";return r.createElement(r.Fragment,null,r.createElement("span",{style:t.objectDescription},s==="Object"?"":`${s} `),r.createElement("span",{style:t.preview},"{",Re(a,", "),"}"))}},rt=({name:e,data:t})=>typeof e=="string"?r.createElement("span",null,r.createElement(Z,{name:e}),r.createElement("span",null,": "),r.createElement($,{data:t})):r.createElement($,{data:t}),ot=({name:e,data:t,isNonenumerable:o=!1})=>{let n=t;return r.createElement("span",null,typeof e=="string"?r.createElement(Z,{name:e,dimmed:o}):r.createElement($,{data:e}),r.createElement("span",null,": "),r.createElement(D,{object:n}))},nt=(e,t)=>function*(n){if(!(typeof n=="object"&&n!==null||typeof n=="function"))return;let s=Array.isArray(n);if(!s&&n[Symbol.iterator]){let c=0;for(let l of n){if(Array.isArray(l)&&l.length===2){let[i,p]=l;yield{name:i,data:p}}else yield{name:c.toString(),data:l};c++}}else{let c=Object.getOwnPropertyNames(n);t===!0&&!s?c.sort():typeof t=="function"&&c.sort(t);for(let l of c)if(tt.call(n,l)){let i=Y(n,l);yield{name:l||'""',data:i}}else if(e){let i;try{i=Y(n,l)}catch{}i!==void 0&&(yield{name:l,data:i,isNonenumerable:!0})}e&&n!==Object.prototype&&(yield{name:"__proto__",data:Object.getPrototypeOf(n),isNonenumerable:!0})}},at=({depth:e,name:t,data:o,isNonenumerable:n})=>e===0?r.createElement(rt,{name:t,data:o}):r.createElement(ot,{name:t,data:o,isNonenumerable:n}),st=({showNonenumerable:e=!1,sortObjectKeys:t,nodeRenderer:o,...n})=>{let a=nt(e,t),s=o||at;return r.createElement(Se,{nodeRenderer:s,dataIterator:a,...n})},Le=X(st);function lt(e){if(typeof e=="object"){let t=[];if(Array.isArray(e)){let n=e.length;t=[...Array(n).keys()]}else e!==null&&(t=Object.keys(e));let o=t.reduce((n,a)=>{let s=e[a];return typeof s=="object"&&s!==null&&Object.keys(s).reduce((l,i)=>(l.includes(i)||l.push(i),l),n),n},[]);return{rowHeaders:t,colHeaders:o}}}var it=({rows:e,columns:t,rowsData:o})=>{let n=N("TableInspectorDataContainer"),a=N("TableInspectorLeftBorder");return r.createElement("div",{style:n.div},r.createElement("table",{style:n.table},r.createElement("colgroup",null),r.createElement("tbody",null,e.map((s,c)=>r.createElement("tr",{key:s,style:n.tr},r.createElement("td",{style:{...n.td,...a.none}},s),t.map(l=>{let i=o[c];return typeof i=="object"&&i!==null&&ge.call(i,l)?r.createElement("td",{key:l,style:{...n.td,...a.solid}},r.createElement(D,{object:i[l]})):r.createElement("td",{key:l,style:{...n.td,...a.solid}})}))))))},ct=e=>r.createElement("div",{style:{position:"absolute",top:1,right:0,bottom:1,display:"flex",alignItems:"center"}},e.children),Et=({sortAscending:e})=>{let t=N("TableInspectorSortIcon"),o=e?"\u25B2":"\u25BC";return r.createElement("div",{style:t},o)},Ae=({sortAscending:e=!1,sorted:t=!1,onClick:o=void 0,borderStyle:n={},children:a,...s})=>{let c=N("TableInspectorTH"),[l,i]=C(!1),p=S(()=>i(!0),[]),_=S(()=>i(!1),[]);return r.createElement("th",{...s,style:{...c.base,...n,...l?c.base[":hover"]:{}},onMouseEnter:p,onMouseLeave:_,onClick:o},r.createElement("div",{style:c.div},a),t&&r.createElement(ct,null,r.createElement(Et,{sortAscending:e})))},pt=({indexColumnText:e="(index)",columns:t=[],sorted:o,sortIndexColumn:n,sortColumn:a,sortAscending:s,onTHClick:c,onIndexTHClick:l})=>{let i=N("TableInspectorHeaderContainer"),p=N("TableInspectorLeftBorder");return r.createElement("div",{style:i.base},r.createElement("table",{style:i.table},r.createElement("tbody",null,r.createElement("tr",null,r.createElement(Ae,{borderStyle:p.none,sorted:o&&n,sortAscending:s,onClick:l},e),t.map(_=>r.createElement(Ae,{borderStyle:p.solid,key:_,sorted:o&&a===_,sortAscending:s,onClick:c.bind(null,_)},_))))))},_t=({data:e,columns:t})=>{let o=N("TableInspector"),[{sorted:n,sortIndexColumn:a,sortColumn:s,sortAscending:c},l]=C({sorted:!1,sortIndexColumn:!1,sortColumn:void 0,sortAscending:!1}),i=S(()=>{l(({sortIndexColumn:u,sortAscending:O})=>({sorted:!0,sortIndexColumn:!0,sortColumn:void 0,sortAscending:u?!O:!0}))},[]),p=S(u=>{l(({sortColumn:O,sortAscending:d})=>({sorted:!0,sortIndexColumn:!1,sortColumn:u,sortAscending:u===O?!d:!0}))},[]);if(typeof e!="object"||e===null)return r.createElement("div",null);let{rowHeaders:_,colHeaders:T}=lt(e);t!==void 0&&(T=t);let m=_.map(u=>e[u]),b;if(s!==void 0?b=m.map((u,O)=>typeof u=="object"&&u!==null?[u[s],O]:[void 0,O]):a&&(b=_.map((u,O)=>[_[O],O])),b!==void 0){let u=(d,xe)=>(Me,Be)=>{let z=d(Me),q=d(Be),Q=typeof z,ee=typeof q,te=(I,re)=>I<re?-1:I>re?1:0,L;if(Q===ee)L=te(z,q);else{let I={string:0,number:1,object:2,symbol:3,boolean:4,undefined:5,function:6};L=te(I[Q],I[ee])}return xe||(L=-L),L},O=b.sort(u(d=>d[0],c)).map(d=>d[1]);_=O.map(d=>_[d]),m=O.map(d=>m[d])}return r.createElement("div",{style:o.base},r.createElement(pt,{columns:T,sorted:n,sortIndexColumn:a,sortColumn:s,sortAscending:c,onTHClick:p,onIndexTHClick:i}),r.createElement(it,{rows:_,columns:T,rowsData:m}))},Ts=X(_t),ut=80,Ie=e=>e.childNodes.length===0||e.childNodes.length===1&&e.childNodes[0].nodeType===Node.TEXT_NODE&&e.textContent.length<ut,Ot=({tagName:e,attributes:t,styles:o})=>r.createElement("span",{style:o.base},"<",r.createElement("span",{style:o.tagName},e),(()=>{if(t){let n=[];for(let a=0;a<t.length;a++){let s=t[a];n.push(r.createElement("span",{key:a}," ",r.createElement("span",{style:o.htmlAttributeName},s.name),'="',r.createElement("span",{style:o.htmlAttributeValue},s.value),'"'))}return n}})(),">"),fe=({tagName:e,isChildNode:t=!1,styles:o})=>r.createElement("span",{style:Object.assign({},o.base,t&&o.offsetLeft)},"</",r.createElement("span",{style:o.tagName},e),">"),dt={1:"ELEMENT_NODE",3:"TEXT_NODE",7:"PROCESSING_INSTRUCTION_NODE",8:"COMMENT_NODE",9:"DOCUMENT_NODE",10:"DOCUMENT_TYPE_NODE",11:"DOCUMENT_FRAGMENT_NODE"},Tt=({isCloseTag:e,data:t,expanded:o})=>{let n=N("DOMNodePreview");if(e)return r.createElement(fe,{styles:n.htmlCloseTag,isChildNode:!0,tagName:t.tagName});switch(t.nodeType){case Node.ELEMENT_NODE:return r.createElement("span",null,r.createElement(Ot,{tagName:t.tagName,attributes:t.attributes,styles:n.htmlOpenTag}),Ie(t)?t.textContent:!o&&"\u2026",!o&&r.createElement(fe,{tagName:t.tagName,styles:n.htmlCloseTag}));case Node.TEXT_NODE:return r.createElement("span",null,t.textContent);case Node.CDATA_SECTION_NODE:return r.createElement("span",null,"<![CDATA["+t.textContent+"]]>");case Node.COMMENT_NODE:return r.createElement("span",{style:n.htmlComment},"<!--",t.textContent,"-->");case Node.PROCESSING_INSTRUCTION_NODE:return r.createElement("span",null,t.nodeName);case Node.DOCUMENT_TYPE_NODE:return r.createElement("span",{style:n.htmlDoctype},"<!DOCTYPE ",t.name,t.publicId?` PUBLIC "${t.publicId}"`:"",!t.publicId&&t.systemId?" SYSTEM":"",t.systemId?` "${t.systemId}"`:"",">");case Node.DOCUMENT_NODE:return r.createElement("span",null,t.nodeName);case Node.DOCUMENT_FRAGMENT_NODE:return r.createElement("span",null,t.nodeName);default:return r.createElement("span",null,dt[t.nodeType])}},mt=function*(e){if(e&&e.childNodes){if(Ie(e))return;for(let o=0;o<e.childNodes.length;o++){let n=e.childNodes[o];n.nodeType===Node.TEXT_NODE&&n.textContent.trim().length===0||(yield{name:`${n.tagName}[${o}]`,data:n})}e.tagName&&(yield{name:"CLOSE_TAG",data:{tagName:e.tagName},isCloseTag:!0})}},Rt=e=>r.createElement(Se,{nodeRenderer:Tt,dataIterator:mt,...e}),As=X(Rt),fs=Ye(Ke());var At={name:"storybook-addon-react-router-v6",version:"2.0.1",description:"Use React Router v6 in your stories",keywords:["storybook-addons","react-router","react-router-v6","router"],repository:{type:"git",url:"git+https://github.com/JesusTheHun/storybook-addon-react-router-v6.git"},author:"Jonathan MASSUCHETTI <jonathan.massuchetti@dappit.fr>",license:"Unlicense",exports:{".":{require:"./dist/index.js",import:"./dist/index.mjs",types:"./dist/index.d.ts"},"./manager":{require:"./dist/manager.js",import:"./dist/manager.mjs",types:"./dist/manager.d.ts"},"./preview":{require:"./dist/preview.js",import:"./dist/preview.mjs",types:"./dist/preview.d.ts"},"./package.json":"./package.json"},main:"dist/index.js",module:"dist/index.js",types:"dist/index.d.ts",files:["dist/**/*","README.md","*.js","*.d.ts"],scripts:{clean:"rimraf ./dist",prebuild:"yarn clean",build:"tsup","build:watch":"yarn build --watch",test:"vitest","test:ci":"vitest run",start:'concurrently "yarn build:watch" "yarn storybook --quiet"',prerelease:"zx scripts/prepublish-checks.mjs",release:"yarn build && auto shipit","eject-ts":"zx scripts/eject-typescript.mjs",storybook:"storybook dev -p 6006 --no-open","build-storybook":"storybook build",chromatic:"npx chromatic --project-token=e29962fd32f5",prepare:"husky install","prettier:check":"prettier --check .","prettier:write":"prettier --write ."},dependencies:{"compare-versions":"^6.0.0","react-inspector":"6.0.2"},peerDependencies:{"@storybook/blocks":"^7.0.0","@storybook/channels":"^7.0.0","@storybook/components":"^7.0.0","@storybook/core-events":"^7.0.0","@storybook/manager-api":"^7.0.0","@storybook/preview-api":"^7.0.0","@storybook/theming":"^7.0.0",react:"^16.8.0 || ^17.0.0 || ^18.0.0","react-dom":"^16.8.0 || ^17.0.0 || ^18.0.0","react-router":"^6.4.0","react-router-dom":"^6.4.0"},devDependencies:{"@remix-run/router":"^1.3.3","@remix-run/web-fetch":"^4.3.2","@storybook/components":"7.1.0","@storybook/core-common":"7.1.0","@storybook/core-events":"7.1.0","@storybook/manager-api":"7.1.0","@storybook/preview-api":"7.1.0","@storybook/react":"7.1.0","@storybook/react-vite":"7.1.0","@storybook/testing-library":"^0.1.0","@storybook/theming":"7.1.0","@testing-library/jest-dom":"^5.16.5","@testing-library/react":"^14.0.0","@testing-library/user-event":"^14.4.3","@types/node":"^18.15.0","@types/react-inspector":"^4.0.2","@typescript-eslint/eslint-plugin":"^5.61.0","@typescript-eslint/parser":"^5.61.0","@vitejs/plugin-react":"^3.1.0",auto:"^10.3.0",boxen:"^5.0.1",chromatic:"^6.17.4",concurrently:"^6.2.0",dedent:"^0.7.0",eslint:"^8.44.0","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-react-refresh":"^0.4.1","expect-type":"^0.16.0",husky:"^8.0.3",jsdom:"^21.1.0","lint-staged":"^13.2.3",prettier:"2.8.8",prompts:"^2.4.2","prop-types":"^15.8.1",react:"^18.0.1","react-dom":"^18.0.1","react-router":"^6.14.2","react-router-dom":"^6.14.2",rimraf:"^3.0.2",storybook:"7.1.0",tsup:"^6.6.3",typescript:"^4.9.5","utility-types":"^3.10.0",vite:"^4.3.9",vitest:"^0.29.2",zx:"^1.14.1"},"lint-staged":{"**/*":"prettier --write --ignore-unknown"},peerDependenciesMeta:{react:{optional:!0},"react-dom":{optional:!0}},publishConfig:{access:"public"},storybook:{displayName:"React Router v6",supportedFrameworks:["react"],icon:"https://user-images.githubusercontent.com/94478/167677696-c05c668e-6290-4ced-8b6b-c2a40211f8e7.jpg"},bugs:{url:"https://github.com/JesusTheHun/storybook-addon-react-router-v6/issues"},homepage:"https://github.com/JesusTheHun/storybook-addon-react-router-v6#readme"},y="storybook/react-router-v6",ft=`${y}/panel`,Nt="reactRouter",E={CLEAR:`${y}/clear`,NAVIGATION:`${y}/navigation`,STORY_LOADED:`${y}/story-loaded`,ROUTE_MATCHES:`${y}/route-matches`,ACTION_INVOKED:`${y}/action_invoked`,ACTION_SETTLED:`${y}/action_settled`,LOADER_INVOKED:`${y}/loader_invoked`,LOADER_SETTLED:`${y}/loader_settled`},he=At.version;function ve(){let[e,t]=C();G(()=>{if(e!==void 0)return;let n=new AbortController;return fetch("https://registry.npmjs.org/storybook-addon-react-router-v6/latest",{signal:n.signal}).then(a=>a.json()).then(a=>t(a.version)),()=>n.abort()},[e]);let o=e===void 0?void 0:k(e,he)===1;return{currentAddonVersion:he,latestAddonVersion:e,addonUpdateAvailable:o}}var bt=v.p`
  background: #ffebba;
  padding: 5px;
  margin-top: 0;
`,yt=v.div({flex:1,padding:"0 0 0 5px"}),Ct=v.div({display:"flex",padding:0,borderLeft:"5px solid transparent",borderBottom:"1px solid transparent",transition:"all 0.1s",alignItems:"flex-start",whiteSpace:"pre"}),St=Te(({theme:e,...t})=>r.createElement(Le,{theme:e.addonActionsTheme||"chromeLight",...t})),gt=_e,Lt=({routerEvents:e,onClear:t})=>r.createElement(le,null,r.createElement(De,{title:"reactRouterLogger"},e.map(o=>r.createElement(Ct,{key:o.key},r.createElement(yt,null,r.createElement(St,{name:It[o.type],data:o.data,showNonenumerable:!1,sortObjectKeys:!1,expandPaths:["$.routeParams","$.searchParams","$.routeMatches.*","$.routeMatches.*.*","$.matches","$.matches.*","$.matches.*.*"]}))))),r.createElement(Ee,{actionItems:[{title:"Clear",onClick:t}]})),It={[E.NAVIGATION]:"Navigate",[E.STORY_LOADED]:"Story rendered",[E.ROUTE_MATCHES]:"New route matches",[E.ACTION_INVOKED]:"Action invoked",[E.ACTION_SETTLED]:"Action settled",[E.LOADER_INVOKED]:"Loader invoked",[E.LOADER_SETTLED]:"Loader settled"},De=v(({children:e,title:t})=>r.createElement(gt,{horizontal:!0,vertical:!0,title:t},e))({margin:0,padding:"10px 5px 20px"});De.displayName="Wrapper";var ht=e=>{let[t,o]=C([]),{latestAddonVersion:n,addonUpdateAvailable:a}=ve(),s=l=>{o(i=>[...i,l])};ae({[E.ROUTE_MATCHES]:s,[E.NAVIGATION]:s,[E.STORY_LOADED]:s,[E.ACTION_INVOKED]:s,[E.ACTION_SETTLED]:s,[E.LOADER_INVOKED]:s,[E.LOADER_SETTLED]:s,[M]:()=>o([])});let c=()=>{e.api.emit(E.CLEAR),o([])};return r.createElement(pe,{...e},a&&r.createElement(bt,null,"Version ",n," is now available !"," ",r.createElement("a",{href:`https://github.com/JesusTheHun/storybook-addon-react-router-v6/releases/tag/v${n}`},"Changelog"),"."),r.createElement(Lt,{routerEvents:t,onClear:c}))};function vt(){let{api:e}=g(oe),{addonUpdateAvailable:t}=ve(),[o,n]=C(0),a=()=>n(l=>l+1),s=()=>n(0);G(()=>(e.on(M,s),e.on(E.ROUTE_MATCHES,a),e.on(E.NAVIGATION,a),e.on(E.ACTION_INVOKED,a),e.on(E.ACTION_SETTLED,a),e.on(E.LOADER_INVOKED,a),e.on(E.LOADER_SETTLED,a),e.on(E.CLEAR,s),()=>{e.off(M,s),e.off(E.ROUTE_MATCHES,a),e.off(E.NAVIGATION,a),e.off(E.ACTION_INVOKED,a),e.off(E.ACTION_SETTLED,a),e.off(E.LOADER_INVOKED,a),e.off(E.LOADER_SETTLED,a),e.off(E.CLEAR,s)}),[e]);let c=[];return t&&c.push("\u26A1\uFE0F"),o&&c.push(`(${o})`),r.createElement(r.Fragment,null,"React Router ",c.join(" "))}j.register(y,e=>{j.add(ft,{type:ne.PANEL,paramKey:Nt,title:r.createElement(vt,null),match:({viewMode:t})=>t==="story",render:({active:t})=>r.createElement(ht,{active:t||!1,api:e,key:y})})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
