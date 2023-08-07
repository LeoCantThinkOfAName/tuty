import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as h,B as N}from"./index-dfc77934.js";import{r as u}from"./index-76fb7be0.js";import{u as q}from"./useTranslation-ca5fece7.js";import{B as m}from"./chunk-PULVB27S-244cf609.js";import{T as _}from"./chunk-2OOHT3W5-a9841d7f.js";import{u as v,C as E}from"./chunk-RPO2WXNL-abd4c2ac.js";import{c as R}from"./index-e1c9bcfd.js";import{f as L,c as M}from"./chunk-ZJJGQIVY-8a7b51cc.js";import{B as O}from"./chunk-UVUR7MCU-f8fa0eb7.js";import{P as U}from"./PostFooter-1aa6071b.js";import{P as Y}from"./PostHeader-c052657e.js";var F=L(function(n,s){const{className:l,...a}=n,r=v();return e.jsx(M.div,{ref:s,className:R("chakra-card__body",l),__css:r.body,...a})});const c=({title:t,content:n})=>e.jsxs(m,{display:"flex items-center",children:[e.jsx(_,{fontWeight:"bold",textTransform:"uppercase",mr:"2",children:t}),e.jsx(_,{children:n})]}),p=({location:t,objective:n,rate:s,rateType:l,subject:a,currency:r})=>{const{t:o}=q();return e.jsxs(m,{mb:"2",children:[n&&e.jsx(c,{title:o("post.infoBlock.objective"),content:n}),a&&e.jsx(c,{title:o("post.infoBlock.subject"),content:a}),t&&e.jsx(c,{title:o("post.infoBlock.location"),content:t}),s&&l&&e.jsx(m,{display:"flex items-center",children:e.jsx(c,{title:o("post.infoBlock.rate"),content:o(`post.infoBlock.${l.toLowerCase()}`,{rate:s,currency:o(`currencies.${r==null?void 0:r.name.toLowerCase()}`)})})})]})};try{p.displayName="InfoBlock",p.__docgenInfo={description:"",displayName:"InfoBlock",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string | undefined"}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string | undefined"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"{ id: number; name: string; } | null | undefined"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"string[] | null | undefined"}},authorId:{defaultValue:null,description:"",name:"authorId",required:!1,type:{name:"string | undefined"}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!1,type:{name:"string | undefined"}},categoryId:{defaultValue:null,description:"",name:"categoryId",required:!1,type:{name:"number | undefined"}},currencyId:{defaultValue:null,description:"",name:"currencyId",required:!1,type:{name:"number | undefined"}},deletedAt:{defaultValue:null,description:"",name:"deletedAt",required:!1,type:{name:"string | null | undefined"}},objective:{defaultValue:null,description:"",name:"objective",required:!1,type:{name:"string | null | undefined"}},rate:{defaultValue:null,description:"",name:"rate",required:!1,type:{name:"number | null | undefined"}},rateType:{defaultValue:null,description:"",name:"rateType",required:!1,type:{name:'"HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null | undefined'}},subject:{defaultValue:null,description:"",name:"subject",required:!1,type:{name:"string | undefined"}},updatedAt:{defaultValue:null,description:"",name:"updatedAt",required:!1,type:{name:"string | null | undefined"}},author:{defaultValue:null,description:"",name:"author",required:!1,type:{name:"{ id: string; name: string; img: string | null; title: string | null; } | null | undefined"}},currency:{defaultValue:null,description:"",name:"currency",required:!1,type:{name:'{ id: number; name: "USD" | "TWD"; } | null | undefined'}}}}}catch{}const y=({post:t,forceHide:n})=>{const{t:s}=q(),l=u.useRef(null),[a,r]=u.useState(!1),[o,V]=u.useState(!1),B=()=>r(!a),{content:P,objective:D,subject:S,location:k,rate:H,rateType:w,currency:C}=t;return u.useLayoutEffect(()=>{const f=l.current;(((f==null?void 0:f.offsetHeight)??0)>h*N||n)&&(V(!0),r(!0))},[]),e.jsxs(F,{children:[e.jsx(p,{subject:S,objective:D,location:k,rate:H,rateType:w,currency:C}),e.jsx(m,{ref:l,maxH:a?h:"100%",overflow:"hidden",dangerouslySetInnerHTML:{__html:P}}),o&&e.jsx(O,{size:"xs",borderRadius:"full",mt:"3",px:"3",onClick:B,children:s(a?"post.unfold":"post.fold")})]})};try{y.displayName="PostBody",y.__docgenInfo={description:"",displayName:"PostBody",props:{post:{defaultValue:null,description:"",name:"post",required:!0,type:{name:"Post"}},forceHide:{defaultValue:null,description:"",name:"forceHide",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const g=({data:t})=>e.jsxs(E,{role:"article",mb:"5",boxShadow:"md",children:[e.jsx(Y,{userName:t.author.name,jobTitle:t.author.title??"",category:t.category.name,date:new Date(t.createdAt)}),e.jsx(y,{post:t}),e.jsx(U,{tags:t.tags??[]})]});try{g.displayName="Post",g.__docgenInfo={description:"",displayName:"Post",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Post"}}}}}catch{}const i={authorId:"123",content:"This is a post from Author",categoryId:1,createdAt:new Date().toDateString(),deletedAt:null,updatedAt:null,id:"123",location:"Taipei",objective:"Learn somthing new",rate:1e3,rateType:"DAY",currencyId:1,currency:{id:1,name:"USD"},tags:["Tag 1","Tag 2"],subject:"123",author:{id:"123",img:"",name:"Author",title:"Job Title"},category:{id:1,name:"Category"}},W={title:"Post/Post",component:g,tags:["autodocs"],argTypes:{}},d={args:{data:i},name:"Default"};var x,j,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  authorId: "123",
  content: "This is a post from Author",
  categoryId: 1,
  createdAt: new Date().toDateString(),
  deletedAt: null,
  updatedAt: null,
  id: "123",
  location: "Taipei",
  objective: "Learn somthing new",
  rate: 1000,
  rateType: "DAY",
  currencyId: 1,
  currency: {
    id: 1,
    name: "USD"
  },
  tags: ["Tag 1", "Tag 2"],
  subject: "123",
  author: {
    id: "123",
    img: "",
    name: "Author",
    title: "Job Title"
  },
  category: {
    id: 1,
    name: "Category"
  }
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var T,A,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data
  },
  name: "Default"
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const z=["data","Default"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:z,data:i,default:W},Symbol.toStringTag,{value:"Module"}));export{p as I,y as P,se as a,i as d};
//# sourceMappingURL=Post.stories-5e11e014.js.map
