import{j as n}from"./jsx-runtime-94f6e698.js";import{H as O}from"./index-8e2770c2.js";import{S as k,a as w}from"./StoryLayout-01ab9950.js";import{u as D}from"./chunk-23XYWYLU-165d3ed3.js";import{r as M}from"./index-8db94870.js";import{A as _}from"./chunk-QEVFQ4EU-b29d1d0e.js";import{O as N}from"./index-3bf0051e.js";import{F as T}from"./chunk-MPFPK3CX-1833e1df.js";import{B as E}from"./chunk-6CSUKJP7-6ded3001.js";import{T as g}from"./chunk-P74GIWPW-24e05827.js";import"./chunk-YTV6DHKL-4e43262a.js";import"./index-bf97d06a.js";import"./useTranslation-2a2fc154.js";import"./nonIterableRest-e1737186.js";import"./createClass-aec4f8cf.js";import"./context-4d8c7167.js";import"./index-86450f1d.js";import"./chunk-ROURZMX4-d2b55cf7.js";import"./index-ac50d9a0.js";import"./index-d68b7e21.js";import"./motion-05868c4c.js";import"./chunk-WPAIWTI3-60d2948e.js";import"./index-a91c9d3c.js";import"./index-647bcbfd.js";import"./chunk-DKFDJSXF-993b141d.js";import"./chunk-LB6CWFOC-e961f13a.js";import"./index-8e6ee9be.js";import"./chunk-GYFRIY2Z-40b81b96.js";import"./chunk-IJBC3YLI-aeb4e78f.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-bab83b91.js";function V(e,s={}){const{ssr:t=!0,fallback:u}=s,{getWindow:r}=D(),o=Array.isArray(e)?e:[e];let l=Array.isArray(u)?u:[u];l=l.filter(m=>m!=null);const[c,v]=M.useState(()=>o.map((m,d)=>({media:m,matches:t?!!l[d]:r().matchMedia(m).matches})));return M.useEffect(()=>{const m=r();v(o.map(a=>({media:a,matches:m.matchMedia(a).matches})));const d=o.map(a=>m.matchMedia(a)),p=a=>{v(j=>j.slice().map(f=>f.media===a.media?{...f,matches:a.matches}:f))};return d.forEach(a=>{typeof a.addListener=="function"?a.addListener(p):a.addEventListener("change",p)}),()=>{d.forEach(a=>{typeof a.removeListener=="function"?a.removeListener(p):a.removeEventListener("change",p)})}},[r]),c.map(m=>m.matches)}function B(e){const{breakpoint:s,hide:t,children:u,ssr:r}=e,[o]=V(s,{ssr:r});return(t?!o:o)?u:null}var h=(e,s)=>{var t,u;return(u=(t=e==null?void 0:e.breakpoints)==null?void 0:t[s])!=null?u:s};function F(e){const{breakpoint:s="",below:t,above:u}=e,r=_(),o=h(r,t),l=h(r,u);let c=s;return o?c=`(max-width: ${o})`:l&&(c=`(min-width: ${l})`),c}function L(e){const{children:s,ssr:t}=e,u=F(e);return n.jsx(B,{breakpoint:u,hide:!0,ssr:t,children:s})}L.displayName="Hide";const i=e=>({path:e,title:e}),S=[{category:"mainMenu.hot",items:[i("mainMenu.english"),i("mainMenu.python"),i("mainMenu.piano"),i("mainMenu.japanese"),i("mainMenu.bodyBuild"),i("mainMenu.photography"),i("mainMenu.guitar"),i("mainMenu.korean"),i("mainMenu.javascript")]},{category:"mainMenu.programming",items:[i("mainMenu.python"),i("mainMenu.javascript"),i("mainMenu.leetcode"),i("mainMenu.htmlCss"),i("mainMenu.wordpress"),i("mainMenu.frontend"),i("mainMenu.backend"),i("mainMenu.ios"),i("mainMenu.android"),i("mainMenu.cpp"),i("mainMenu.java")]},{category:"mainMenu.language",items:[i("mainMenu.english"),i("mainMenu.englishSpeaking"),i("mainMenu.toeic"),i("mainMenu.ielts"),i("mainMenu.toefl"),i("mainMenu.japanese"),i("mainMenu.korean"),i("mainMenu.chinese"),i("mainMenu.spanish"),i("mainMenu.french")]},{category:"mainMenu.artAndDesign",items:[i("mainMenu.graphicDesign"),{path:"mainMenu.illustratorAndPhotoshop",title:"mainMenu.illustratorAndPhotoshop"},i("mainMenu.uiux"),i("mainMenu.webDesign"),i("mainMenu.computerGraphic"),i("mainMenu.postProduction"),i("mainMenu.painting"),i("mainMenu.illustration"),i("mainMenu.3d"),i("mainMenu.photography")]},{category:"mainMenu.music",items:[i("mainMenu.guitar"),i("mainMenu.piano"),i("mainMenu.singing"),i("mainMenu.ukulele"),i("mainMenu.musicTheory")]},{category:"mainMenu.sportsAndActivities",items:[i("mainMenu.bodyBuild"),i("mainMenu.weightTraining"),i("mainMenu.yoga"),i("mainMenu.swimming"),i("mainMenu.boxing"),i("mainMenu.martialArt"),i("mainMenu.skateBoarding"),i("mainMenu.badminton")]},{category:"mainMenu.business",items:[i("mainMenu.financial"),i("mainMenu.marketing"),i("mainMenu.entrepreneurship"),i("mainMenu.socialMedia"),i("mainMenu.editor"),i("mainMenu.excel"),i("mainMenu.ppt"),i("mainMenu.presentation"),i("mainMenu.pitching"),i("mainMenu.gooogleAds"),i("mainMenu.seo")]},{category:"mainMenu.selfGrowth",items:[i("mainMenu.entrepreneurship"),i("mainMenu.investment"),i("mainMenu.stock"),i("mainMenu.nationalExam"),i("mainMenu.health"),i("mainMenu.cooking"),i("mainMenu.fortuneTelling")]}],q=({children:e})=>n.jsxs(n.Fragment,{children:[n.jsx(O,{}),n.jsxs(T,{h:"100%",w:"100%",maxW:"container.lg",mx:"auto",children:[n.jsx(L,{below:"md",children:n.jsx(k,{menu:S})}),n.jsxs(E,{p:"5",overflow:"auto",flex:"1",children:[e,n.jsx(N,{})]})]})]});try{q.displayName="MainLayout",q.__docgenInfo={description:"",displayName:"MainLayout",props:{}}}catch{}const qi={title:"MainLayout/MainLayout",component:q,tags:["autodocs"],argTypes:{},parameters:{layout:"full"}},b={render:e=>n.jsx(w,{children:n.jsx(q,{...e})}),args:{children:n.jsxs(n.Fragment,{children:[n.jsx(g,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro eaque! Aliquam impedit cupiditate assumenda voluptatibus dignissimos velit quaerat doloribus nulla? Quasi fugiat illum sequi maiores cumque praesentium ducimus laborum? A minima provident sunt nobis quas? Perspiciatis non quisquam soluta libero similique doloribus nisi hic consequatur dolor veritatis voluptas unde, sed mollitia quam laudantium omnis? Aperiam tempora dicta, autem, modi unde non beatae labore consequuntur quisquam eum nostrum ad explicabo officia distinctio! Autem repellendus vitae nemo labore a doloremque, suscipit omnis aliquam vero illo minima? Iste reiciendis ab accusantium alias nobis, expedita veniam numquam quisquam tempora minus eligendi necessitatibus nihil dolorum velit atque error dicta, explicabo incidunt eveniet distinctio maxime modi. Reiciendis amet earum ipsa, alias consequuntur officia ipsum consectetur eligendi? Officiis minus nobis ab rerum! Dicta, exercitationem. Dolores dicta fugit temporibus libero impedit itaque, ducimus, omnis nobis cum perferendis iusto assumenda! Minima iure sunt unde aliquid veniam alias? Officia reprehenderit temporibus dolorum magni eos vel numquam tempora! Fuga amet id molestiae nobis consectetur. Aut, ab quo? Maxime doloribus numquam est officiis laboriosam praesentium, facilis omnis voluptate, deleniti veritatis, explicabo ipsam? Maiores nihil repudiandae labore iusto tempore debitis eos asperiores aliquid assumenda earum nesciunt nisi dolorum veniam rem sed, illo, sit molestias obcaecati possimus sunt. Libero consequuntur unde accusantium! Unde quis obcaecati maiores itaque nisi animi, assumenda cumque ratione quasi necessitatibus quam impedit alias consequuntur ipsa molestias dolorem iusto corrupti et, nulla quisquam placeat doloremque, dolores quos! Necessitatibus voluptatem modi itaque culpa voluptate voluptatibus totam vitae alias adipisci nisi perspiciatis pariatur cupiditate eaque sapiente asperiores earum quam ex reprehenderit, natus in maiores libero. Voluptates cum dolorem minima nobis, earum quo dolores beatae voluptate rerum autem consequatur officia dignissimos ut facere. Nemo non libero tempore eveniet consequatur praesentium illo est, voluptatibus in ipsum cum vero adipisci numquam sed aut laboriosam sequi."}),n.jsx(g,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro eaque! Aliquam impedit cupiditate assumenda voluptatibus dignissimos velit quaerat doloribus nulla? Quasi fugiat illum sequi maiores cumque praesentium ducimus laborum? A minima provident sunt nobis quas? Perspiciatis non quisquam soluta libero similique doloribus nisi hic consequatur dolor veritatis voluptas unde, sed mollitia quam laudantium omnis? Aperiam tempora dicta, autem, modi unde non beatae labore consequuntur quisquam eum nostrum ad explicabo officia distinctio! Autem repellendus vitae nemo labore a doloremque, suscipit omnis aliquam vero illo minima? Iste reiciendis ab accusantium alias nobis, expedita veniam numquam quisquam tempora minus eligendi necessitatibus nihil dolorum velit atque error dicta, explicabo incidunt eveniet distinctio maxime modi. Reiciendis amet earum ipsa, alias consequuntur officia ipsum consectetur eligendi? Officiis minus nobis ab rerum! Dicta, exercitationem. Dolores dicta fugit temporibus libero impedit itaque, ducimus, omnis nobis cum perferendis iusto assumenda! Minima iure sunt unde aliquid veniam alias? Officia reprehenderit temporibus dolorum magni eos vel numquam tempora! Fuga amet id molestiae nobis consectetur. Aut, ab quo? Maxime doloribus numquam est officiis laboriosam praesentium, facilis omnis voluptate, deleniti veritatis, explicabo ipsam? Maiores nihil repudiandae labore iusto tempore debitis eos asperiores aliquid assumenda earum nesciunt nisi dolorum veniam rem sed, illo, sit molestias obcaecati possimus sunt. Libero consequuntur unde accusantium! Unde quis obcaecati maiores itaque nisi animi, assumenda cumque ratione quasi necessitatibus quam impedit alias consequuntur ipsa molestias dolorem iusto corrupti et, nulla quisquam placeat doloremque, dolores quos! Necessitatibus voluptatem modi itaque culpa voluptate voluptatibus totam vitae alias adipisci nisi perspiciatis pariatur cupiditate eaque sapiente asperiores earum quam ex reprehenderit, natus in maiores libero. Voluptates cum dolorem minima nobis, earum quo dolores beatae voluptate rerum autem consequatur officia dignissimos ut facere. Nemo non libero tempore eveniet consequatur praesentium illo est, voluptatibus in ipsum cum vero adipisci numquam sed aut laboriosam sequi."})]})},name:"Default"};var x,y,A;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <StoryLayout>
      <MainLayout {...props} />
    </StoryLayout>,
  args: {
    children: <>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro
          eaque! Aliquam impedit cupiditate assumenda voluptatibus dignissimos
          velit quaerat doloribus nulla? Quasi fugiat illum sequi maiores cumque
          praesentium ducimus laborum? A minima provident sunt nobis quas?
          Perspiciatis non quisquam soluta libero similique doloribus nisi hic
          consequatur dolor veritatis voluptas unde, sed mollitia quam
          laudantium omnis? Aperiam tempora dicta, autem, modi unde non beatae
          labore consequuntur quisquam eum nostrum ad explicabo officia
          distinctio! Autem repellendus vitae nemo labore a doloremque, suscipit
          omnis aliquam vero illo minima? Iste reiciendis ab accusantium alias
          nobis, expedita veniam numquam quisquam tempora minus eligendi
          necessitatibus nihil dolorum velit atque error dicta, explicabo
          incidunt eveniet distinctio maxime modi. Reiciendis amet earum ipsa,
          alias consequuntur officia ipsum consectetur eligendi? Officiis minus
          nobis ab rerum! Dicta, exercitationem. Dolores dicta fugit temporibus
          libero impedit itaque, ducimus, omnis nobis cum perferendis iusto
          assumenda! Minima iure sunt unde aliquid veniam alias? Officia
          reprehenderit temporibus dolorum magni eos vel numquam tempora! Fuga
          amet id molestiae nobis consectetur. Aut, ab quo? Maxime doloribus
          numquam est officiis laboriosam praesentium, facilis omnis voluptate,
          deleniti veritatis, explicabo ipsam? Maiores nihil repudiandae labore
          iusto tempore debitis eos asperiores aliquid assumenda earum nesciunt
          nisi dolorum veniam rem sed, illo, sit molestias obcaecati possimus
          sunt. Libero consequuntur unde accusantium! Unde quis obcaecati
          maiores itaque nisi animi, assumenda cumque ratione quasi
          necessitatibus quam impedit alias consequuntur ipsa molestias dolorem
          iusto corrupti et, nulla quisquam placeat doloremque, dolores quos!
          Necessitatibus voluptatem modi itaque culpa voluptate voluptatibus
          totam vitae alias adipisci nisi perspiciatis pariatur cupiditate eaque
          sapiente asperiores earum quam ex reprehenderit, natus in maiores
          libero. Voluptates cum dolorem minima nobis, earum quo dolores beatae
          voluptate rerum autem consequatur officia dignissimos ut facere. Nemo
          non libero tempore eveniet consequatur praesentium illo est,
          voluptatibus in ipsum cum vero adipisci numquam sed aut laboriosam
          sequi.
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro
          eaque! Aliquam impedit cupiditate assumenda voluptatibus dignissimos
          velit quaerat doloribus nulla? Quasi fugiat illum sequi maiores cumque
          praesentium ducimus laborum? A minima provident sunt nobis quas?
          Perspiciatis non quisquam soluta libero similique doloribus nisi hic
          consequatur dolor veritatis voluptas unde, sed mollitia quam
          laudantium omnis? Aperiam tempora dicta, autem, modi unde non beatae
          labore consequuntur quisquam eum nostrum ad explicabo officia
          distinctio! Autem repellendus vitae nemo labore a doloremque, suscipit
          omnis aliquam vero illo minima? Iste reiciendis ab accusantium alias
          nobis, expedita veniam numquam quisquam tempora minus eligendi
          necessitatibus nihil dolorum velit atque error dicta, explicabo
          incidunt eveniet distinctio maxime modi. Reiciendis amet earum ipsa,
          alias consequuntur officia ipsum consectetur eligendi? Officiis minus
          nobis ab rerum! Dicta, exercitationem. Dolores dicta fugit temporibus
          libero impedit itaque, ducimus, omnis nobis cum perferendis iusto
          assumenda! Minima iure sunt unde aliquid veniam alias? Officia
          reprehenderit temporibus dolorum magni eos vel numquam tempora! Fuga
          amet id molestiae nobis consectetur. Aut, ab quo? Maxime doloribus
          numquam est officiis laboriosam praesentium, facilis omnis voluptate,
          deleniti veritatis, explicabo ipsam? Maiores nihil repudiandae labore
          iusto tempore debitis eos asperiores aliquid assumenda earum nesciunt
          nisi dolorum veniam rem sed, illo, sit molestias obcaecati possimus
          sunt. Libero consequuntur unde accusantium! Unde quis obcaecati
          maiores itaque nisi animi, assumenda cumque ratione quasi
          necessitatibus quam impedit alias consequuntur ipsa molestias dolorem
          iusto corrupti et, nulla quisquam placeat doloremque, dolores quos!
          Necessitatibus voluptatem modi itaque culpa voluptate voluptatibus
          totam vitae alias adipisci nisi perspiciatis pariatur cupiditate eaque
          sapiente asperiores earum quam ex reprehenderit, natus in maiores
          libero. Voluptates cum dolorem minima nobis, earum quo dolores beatae
          voluptate rerum autem consequatur officia dignissimos ut facere. Nemo
          non libero tempore eveniet consequatur praesentium illo est,
          voluptatibus in ipsum cum vero adipisci numquam sed aut laboriosam
          sequi.
        </Text>
      </>
  },
  name: "Default"
}`,...(A=(y=b.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const fi=["Default"];export{b as Default,fi as __namedExportsOrder,qi as default};
//# sourceMappingURL=MainLayout.stories-bced8661.js.map
