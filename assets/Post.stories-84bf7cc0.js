import{j as e}from"./jsx-runtime-94f6e698.js";import{P as m}from"./PostBody-c582a797.js";import{P as s}from"./PostFooter-f47d2952.js";import{P as p}from"./PostHeader-a95dc432.js";import{C as d}from"./chunk-S432VF2S-ab2a51af.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ffd16f0d.js";import"./useTranslation-e5e4d349.js";import"./context-f527a539.js";import"./i18nInstance-1f8a4d28.js";import"./index-50470307.js";import"./chunk-QEVFQ4EU-28380a87.js";import"./extends-bab83b91.js";import"./chunk-6CSUKJP7-a99cabb4.js";import"./chunk-NAA7TEES-224aee14.js";import"./chunk-NO6MRLPK-7302cf46.js";import"./emotion-react.browser.esm-0db81468.js";import"./index-bf97d06a.js";import"./index.esm-7109ff7c.js";import"./index.esm-af5a6c62.js";import"./chunk-OEQDSMWZ-5fbcd072.js";import"./chunk-IJBC3YLI-c9b2ab2d.js";import"./chunk-MPFPK3CX-4000ea5d.js";import"./chunk-IXKZFKRY-1d7bcddf.js";import"./chunk-DKFDJSXF-359bf985.js";import"./typeof-7fd5df1e.js";import"./chunk-DXGPTSUR-3edcb265.js";import"./index-a91c9d3c.js";import"./chunk-P74GIWPW-7fa035eb.js";import"./chunk-R3DH46PF-f0689d26.js";import"./chunk-3ZTTLJBV-6b6be234.js";const o=({data:t})=>e.jsxs(d,{role:"article",mb:"5",boxShadow:"md",children:[e.jsx(p,{userName:t.author.name,jobTitle:t.author.title??"",category:t.category.name,date:new Date(t.createdAt)}),e.jsx(m,{content:t.content}),e.jsx(s,{tags:t.tags??[]})]});try{o.displayName="Post",o.__docgenInfo={description:"",displayName:"Post",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:'{ authorId: string; categoryId: number; content: string; createdAt: string; deletedAt: string | null; id: string; location: string; objective: string | null; rate: number | null; rateType: "month" | ... 4 more ... | null; ... 4 more ...; category: { ...; } | null; }'}}}}}catch{}const z={title:"Post/Post",component:o,tags:["autodocs"],argTypes:{}},r={args:{data:{authorId:"123",content:"This is a post from Author",categoryId:1,createdAt:new Date().toDateString(),deletedAt:null,updatedAt:null,id:"123",location:"Taipei",objective:"Learn somthing new",rate:1e3,rateType:"day",tags:["Tag 1","Tag 2"],subject:"123",author:{id:"123",img:"",name:"Author",title:"Job Title"},category:{id:1,name:"Category"}}},name:"Default"};var a,n,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    data: {
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
      rateType: "day",
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
    }
  },
  name: "Default"
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,z as default};
//# sourceMappingURL=Post.stories-84bf7cc0.js.map
