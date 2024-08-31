(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,A){},36:function(e,t,A){},50:function(e,t,A){"use strict";A.r(t);var i=A(1),o=A(20),l=(A(35),A(36),A(21)),n=A(2),r=A(4);const a=576,g=768,d=992,s=1200,c=1630,C=e=>{let{min:t,max:A}=e;return t||A?`@media screen ${t?`and (min-width: ${t}px)`:""}${A?` and (max-width: ${A-1}px)`:""}`:""},D=(C({max:a}),C({max:g}),C({max:d}),C({max:s}),C({max:c}),{smallMobile:C({min:a}),mobile:C({min:g}),tablet:C({min:d}),desktop:C({min:s}),largeDesktop:C({min:c})}),u=(C({min:a,max:g}),C({min:a,max:d}),C({min:a,max:s}),C({min:g,max:d}),C({min:g,max:s}),C({min:d,max:s}),{fatRed:"#ED1C24",fatLight:"#F2F2F2",fatDark:"#555555",fatGreen:"#316951",lighteningYellow:"#E1FF00",boltBlack:"#11190C",darkGrey:"787664",midGrey:"#CAC4B7",lightGrey:"#F3F1EE"}),p='"Titillium Web", sans-serif',I="700",m="600",N="400",x="300",j=n.a`
    font-family: ${p};
    font-size: 30px;
    font-weight: ${I};
    line-height: 30px;
    letter-spacing: 1px;
    margin: 0;
    ${D.desktop} {
      font-size: 36px;
      line-height: 36px;
    }
    ${D.largeDesktop} {
      font-size: 40px;
      line-height: 40px;
    }
  `,h=n.a`
    font-family: ${p};
    font-size: 14px;
    font-weight: ${m};
    line-height: 14px;
    letter-spacing: 0em;
    margin: 0;
    ${D.largeDesktop} {
      font-size: 16px;
      line-height: 16px;
      font-weight: ${I};
    }
  `,f=n.a`
    font-family: ${p};
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0em;
    margin: 0;
    font-weight: ${I};
    ${D.desktop} {
      font-size: 40px;
      line-height: 40px;
    }
    ${D.largeDesktop} {
      font-size: 48px;
      line-height: 48px;
    }
  `,L=n.a`
    font-family: ${p};
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 1px;
    margin: 0;
  `,v=n.a`
    font-family: ${p};
    font-weight: ${N};
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 0;
    ${D.desktop} {
      font-weight: ${x};
    }
  `,b=n.a`
    font-family: ${p};
    font-weight: ${I};
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 0;
  `,Q="8px",w="16px",M="20px",y="28px",S="32px",k="40px",H="60px",O="80px";var X=A(0);var B=e=>{let{title:t,destination:A,offset:i,border:o,backgroundcolor:l,color:n,margin:r}=e;return Object(X.jsx)(Z,{to:A,offset:i,border:o,backgroundcolor:l,color:n,margin:r,children:t})};const Z=Object(n.b)(r.Button)`
  ${b}
  border: ${e=>e.border};
  border-radius: 10px;
  background-color: ${e=>e.backgroundcolor};
  margin: ${e=>e.margin};
  padding: ${w} ${S};
  outline: none;
  color: ${e=>e.color};
  :hover {
    color: ${e=>e.backgroundcolor};
    background-color: ${e=>e.color};
  }
`;function E(e){let{data:t,sidebarOpen:A,toggleSidebar:o}=e;const{main:l,side:n}=t,[r,a]=Object(i.useState)(window.scrollY);return Object(i.useEffect)((()=>(window.addEventListener("scroll",(()=>a(window.scrollY))),()=>{window.removeEventListener("scroll",(()=>a(window.scrollY)))})),[r]),Object(X.jsxs)(P,{sidebarOpen:A,$top:r>100?"60px":"80px",children:[Object(X.jsx)(R,{className:"flexNullCenter flexColumn",children:l.map(((e,t)=>Object(X.jsx)(V,{onClick:()=>o(!A),activeClass:"active_mobile",className:"whiteColor",style:{padding:"10px 15px"},to:e.to,spy:!0,smooth:!0,offset:-60,children:e.text},t)))}),Object(X.jsx)(R,{className:"flexNullCenter flexColumn",children:n.map(((e,t)=>Object(X.jsx)(B,{title:e.text,destination:"portfolio",offset:80,border:"none",backgroundcolor:u.fatLight,color:u.fatDark},t)))})]})}const P=n.b.nav`
  width: 100%;
  max-width: 500px;
  height: 100%;
  position: fixed;
  ${e=>{let{$top:t}=e;return t&&n.a`
      top: ${t};
    `}}
  padding: 0;
  right: -500px;
  transition: transform 0.5s linear;
  transform: ${e=>e.sidebarOpen?"translateX(-500px)":"none"};
  z-index: 9999;
  background-color: ${u.fatRed};
  ${D.desktop} {
    display: none;
  }
`,V=Object(n.b)(r.Link)`
  ${h}
  font-size: 14px;
`,R=n.b.div`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;function z(e){let{toggleSidebar:t}=e;return Object(X.jsx)(U,{onClick:()=>t(!1)})}const U=n.b.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${u.fatDark};
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
  ${D.desktop} {
    display: none;
  }
`;var W=function(e){return Object(X.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:22,viewBox:"0 0 28 22",...e,children:[Object(X.jsx)("path",{"data-name":"Line 5",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M1 1h26"}),Object(X.jsx)("path",{"data-name":"Line 6",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M1 11h26"}),Object(X.jsx)("path",{"data-name":"Line 7",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M1 21h26"})]})};var Y=function(e){return Object(X.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:23.335,height:23.335,...e,children:Object(X.jsxs)("g",{"data-name":"Group 99",fill:"#fff",children:[Object(X.jsx)("path",{"data-name":"Rectangle 58",d:"M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"}),Object(X.jsx)("path",{"data-name":"Rectangle 59",d:"M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"})]})})};const F="1630px;";var T=e=>{let{logoText:t,path:A}=e;return Object(X.jsx)(K,{to:A,smooth:!0,children:Object(X.jsx)("strong",{children:t})})};const K=Object(n.b)(r.Link)`
  display: flex;
  align-items: center;
  color: ${u.lighteningYellow};
  padding: ${Q} ${w};
  background-color: ${u.boltBlack};
  cursor: pointer;
  strong {
    ${j}
  }

  ${D.desktop} {
    color: ${u.boltBlack};
    background-color: ${u.lighteningYellow};
  }
`;function G(e){let{data:t}=e;const[A,o]=Object(i.useState)(window.scrollY),[l,n]=Object(i.useState)(!1);Object(i.useEffect)((()=>(window.addEventListener("scroll",(()=>o(window.scrollY))),()=>{window.removeEventListener("scroll",(()=>o(window.scrollY)))})),[A]);const{main:r,side:a}=t;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(E,{data:t,sidebarOpen:l,toggleSidebar:n}),l&&Object(X.jsx)(z,{toggleSidebar:n}),Object(X.jsx)(J,{style:{height:"80px"},children:Object(X.jsxs)(q,{children:[Object(X.jsx)(T,{logoText:"bodaciousbulls",path:"companyy"}),Object(X.jsx)($,{onClick:()=>n(!l),children:l?Object(X.jsx)(Y,{}):Object(X.jsx)(W,{})}),Object(X.jsx)(_,{children:r.map(((e,t)=>Object(X.jsx)(ee,{activeClass:"active",to:e.to,spy:!0,smooth:!0,offset:-80,children:Object(X.jsx)("h1",{children:e.text})},t)))}),Object(X.jsx)(te,{children:a.map(((e,t)=>Object(X.jsx)("a",{href:e.href,children:e.text},t)))})]})})]})}const J=n.b.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${u.boltBlack};
  ${D.desktop} {
    background-color: ${u.midGrey};
  }
`,q=n.b.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: ${F};
  ${D.desktop} {
    padding: 0px ${H};
  }
`,$=n.b.button`
  display: block;
  outline: none;
  border: 0px;
  background-color: transparent;
  color: ${u.fatLight};
  height: 100%;
  padding: 0 15px;
  ${D.desktop} {
    display: none;
  }
`,_=n.b.div`
  display: none;
  ${D.desktop} {
    display: flex;
    height: 100%;
    align-items: center;
  }
`,ee=Object(n.b)(r.Link)`
  ${h}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${w};
  border-bottom: 2px solid transparent;
  height: 100%;
  color: ${u.boltBlack};
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    color: ${u.lighteningYellow};
    border-bottom: 2px solid ${u.lighteningYellow};
  }
`,te=n.b.ul`
  display: none;
  ${D.desktop} {
    display: flex;
    align-items: center;
    a {
      ${h}
      text-decoration: none;
      color: ${u.lighteningYellow};
      background-color: ${u.boltBlack};
      padding: ${Q} ${w};
      border-radius: 10px;
      &:hover {
        background-color: ${u.lighteningYellow};
        color: ${u.boltBlack};
      }
    }
  }
`;var Ae=A(28),ie=A.n(Ae);function oe(e){let{data:t}=e;return Object(X.jsx)(ie.a,{speed:100,pauseOnHover:!0,autoFill:!0,children:t.map(((e,t)=>Object(X.jsx)(le,{className:"flexCenter",children:Object(X.jsx)(ne,{...e})},t)))})}const le=n.b.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`,ne=n.b.img`
  width: 100%;
  height: 100%;
  margin: 0 ${y};
  color: red;
`;var re=function(e){return Object(X.jsx)("svg",{width:"1085",height:"842",viewBox:"0 0 1085 842",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(X.jsx)("path",{d:"M4.52712 41.454C18.0621 48.856 63.637 62.109 130.855 33.417C198.707 4.47903 268.533 47.2701 294.265 68.2071L366.065 3.70304C368.745 1.27104 372.232 -0.0329854 375.864 0.00101461L592.181 3.10209C596.341 3.17209 600.288 5.04002 602.932 8.17802L761.3 195.627C763.142 197.815 765.598 199.399 768.35 200.174L937.925 248.147C941.214 249.101 944.06 251.186 945.963 254.033L1017.73 362.42C1026.68 362.35 1034.33 360.728 1040.85 357.945C1050.68 353.679 1058.16 346.877 1063.45 338.136C1068.7 329.394 1071.66 318.643 1071.66 307.082C1071.62 291.643 1066.44 274.9 1054.81 259.779C1043.21 244.691 1025.17 231.122 998.802 222.487C963.166 210.82 937.26 197.849 918.295 184.807C877.513 180.332 868.984 145.224 868.878 116.85C868.702 115.052 868.596 113.396 868.596 112.092C868.596 110.294 868.738 109.026 868.808 108.426L869.09 108.462C869.936 92.389 872.931 80.158 872.931 80.158C872.931 80.158 874.378 93.093 899.966 104.479C937.011 115.088 947.445 143.816 943.427 164.929C958.972 174.446 979.873 184.349 1008.25 193.621C1039.72 203.878 1063.34 220.973 1078.89 241.276C1094.5 261.543 1102.04 284.843 1102.04 307.084C1102.04 329.291 1094.5 350.685 1079.84 366.724C1072.5 374.726 1063.38 381.318 1052.84 385.863C1044.52 389.423 1035.18 391.257 1025.38 392.067L1027.39 555.441C1027.39 556.323 1027.49 557.202 1027.67 558.084L1053.89 689.242C1054.25 690.934 1054.85 692.52 1055.76 693.966L1152.86 852.154C1153.96 853.935 1154.65 855.934 1154.89 858.011C1155.12 860.088 1154.9 862.191 1154.24 864.173C1152.93 868.191 1149.87 871.399 1145.95 872.984L1091.07 894.873C1088.42 895.923 1085.51 896.163 1082.72 895.56C1079.93 894.958 1077.37 893.541 1075.39 891.489L960.021 771.189C959.915 771.119 959.845 771.047 959.775 770.977L833.343 644.506L529.542 477.431L484.073 539.431C481.535 542.884 480.689 547.256 481.711 551.416C482.769 555.54 485.589 559.03 489.431 560.864L587.279 607.849C589.002 608.662 590.542 609.815 591.808 611.239C593.074 612.662 594.039 614.326 594.646 616.132C595.916 619.728 595.634 623.746 593.907 627.199L581.041 652.86C577.694 659.558 569.726 662.589 562.782 659.733L364.479 578.592C357.605 575.809 354.009 568.195 356.195 561.11L400.785 416.207C402.125 411.731 401.279 406.865 398.423 403.199L386.122 387.302C384.874 385.691 383.299 384.362 381.501 383.402C379.702 382.442 377.721 381.873 375.688 381.733C373.652 381.609 371.612 381.919 369.704 382.642C367.797 383.364 366.064 384.484 364.621 385.926L302.197 448.105C298.285 452.016 292.503 453.286 287.288 451.452L216.158 426.286C213.701 425.425 211.526 423.91 209.868 421.903C208.209 419.897 207.13 417.476 206.747 414.901L176.151 212.367C115.561 209.123 111.823 156.465 111.823 156.465L195.359 138.594C181.296 125.447 161.943 110.642 141.747 105.108C111.926 96.9671 76.5391 105.32 39.8811 90.657C3.22312 75.962 -7.06788 37.825 4.52712 41.454Z",fill:"currentColor"})})},ae=A.p+"static/media/company-cover.bb968d4b.png";function ge(e){let{data:t}=e;const{id:A,mainHeading:i,description:o,cta:l,clientsList:n}=t;return Object(X.jsxs)(de,{id:A,children:[Object(X.jsxs)(se,{children:[Object(X.jsxs)(ce,{children:[Object(X.jsx)(Ce,{children:i}),Object(X.jsx)(pe,{children:o}),Object(X.jsx)(B,{title:l.text,destination:"portfolio",border:"none",backgroundcolor:u.boltBlack,color:u.lighteningYellow})]}),Object(X.jsxs)(De,{children:[Object(X.jsx)(me,{src:ae}),Object(X.jsx)(ue,{children:Object(X.jsx)(re,{})})]})]}),Object(X.jsx)(Ie,{id:A,children:Object(X.jsx)(oe,{data:n})})]})}const de=n.b.section`
  position: relative;
  flex-direction: column;
  background-color: ${u.midGrey};
  min-height: calc(100vh - 80px);
  margin-top: 80px;
    ${D.desktop} {
    min-height: 100vh;
    margin-top: 0;
  }
`,se=n.b.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${Q};
  ${D.desktop} {
    flex-direction: row;
    gap: 20px;
    height: 100vh;
    max-width: ${F};
    margin: 0 auto;
    padding: 0 ${H};
  }
`,ce=n.b.div`
  position: relative;
  z-index: 2;
  order: 2;
  text-align: center;
  ${D.desktop} {
    flex: 1;
    margin-top: 0;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;
    order: unset;
    width: auto;
    padding: 0 ${O} 0 0;
  }
`,Ce=n.b.h1`
  ${f}
  color: ${u.boltBlack};
  padding: 0;
  width: 100%;
  margin-top: ${M};
  ${D.desktop} {
    margin: 0;
  }
`,De=n.b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  order: 1;
  text-align: -webkit-center;
  margin: 80px auto 0;
  position: relative;
  ${D.desktop} {
    margin: 180px auto 0;
  }
  ${D.desktop} {
    flex: 2;
    order: unset;
    width: unset;
    position: unset;
  }
`,ue=n.b.div`
  z-index: 1;
  color: ${u.lighteningYellow};
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  svg {
    max-height: 25vh;
    max-width: calc(100vw - 90px);
  }
  ${D.smallMobile} {
    svg {
      max-height: 30vh;
    }
  }
  ${D.mobile} {
    svg {
      max-height: 40vh;
    }
  }
  ${D.tablet} {
    svg {
      max-height: 44vh;
      max-width: 80vw;
    }
  }
  ${D.desktop} {
    top: unset;
    left: unset;
    bottom: 0;
    right: 0;
    margin: unset;
    svg {
      max-height: 80vh;
      max-width: unset;
    }
  }
  ${D.largeDesktop} {
    right: 60px;
    svg {
      max-height: calc(100vh - 90px);
    }
  }
`,pe=n.b.p`
  ${v}
  color: ${u.fatDark};
  padding: ${Q} 0;
  ${D.desktop} {
    padding: 40px 0;
  }
  ${D.largeDesktop} {
    padding: 80px 0;
  }
`,Ie=n.b.div`
  position: relative;
  z-index: 2;
  background-color: ${u.lightGrey};
  padding: ${k} 0;
  ${D.desktop} {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }
`,me=n.b.img`
  position: relative;
  z-index: 2;
  width: 60%;
  ${D.desktop} {
    margin: 0 0 180px;
    width: 100%;
  }
  ${D.largeDesktop} {
    width: 70%;
  }
`;var Ne=function(e){return Object(X.jsxs)("svg",{width:"119",height:"100",viewBox:"0 0 119 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.2596 77.7777V96.2963Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M59.2596 77.7777V96.2963",stroke:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40.7411 96.2962H77.7781Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M40.7411 96.2962H77.7781",stroke:"currentColor",strokeLinecap:"square"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.0656 40.7407L45.7976 31.3021Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M34.0656 40.7407L45.7976 31.3021",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.0656 40.7407L45.7976 50.1794Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M34.0656 40.7407L45.7976 50.1794",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84.4538 40.7407L72.7218 31.3021Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M84.4538 40.7407L72.7218 31.3021",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84.4538 40.7407L72.7218 50.1794Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M84.4538 40.7407L72.7218 50.1794",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55.3671 57.0914L63.1522 24.3898Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M55.3671 57.0914L63.1522 24.3898",stroke:"currentColor",strokeLinecap:"round"}),Object(X.jsx)("path",{d:"M3.70461 2.5H3.70425C3.38487 2.49995 3.0786 2.62677 2.85281 2.85248C2.62714 3.07806 2.50022 3.38407 2.5 3.70324L3.70461 2.5ZM3.70461 2.5H114.815C114.815 2.5 114.815 2.5 114.816 2.5C115.135 2.50022 115.441 2.62709 115.666 2.8525C115.892 3.07801 116.019 3.38407 116.019 3.70324C116.019 3.70343 116.019 3.70362 116.019 3.70381M3.70461 2.5L116.019 3.70381M3.70425 78.9809H3.70461H114.815C114.815 78.9809 114.815 78.9809 114.816 78.9809C115.134 78.9807 115.44 78.8539 115.666 78.6281C115.892 78.4024 116.019 78.0966 116.019 77.7777L3.70425 78.9809ZM3.70425 78.9809C3.38487 78.981 3.0786 78.8542 2.85281 78.6285C2.62714 78.4029 2.50022 78.0969 2.5 77.7777C2.5 77.7775 2.5 77.7773 2.5 77.7771M3.70425 78.9809L2.5 77.7771M2.5 77.7771V3.70381V77.7771ZM116.019 3.70381V77.7771V3.70381Z",stroke:"currentColor",strokeWidth:"5"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55.5555 77.7777V96.2967H62.9634V77.7777H55.5555Z",fill:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.0379 92.5922V100H40.7411H77.7777H81.4823V92.5922H77.7777H40.7411H37.0379Z",fill:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.0655 40.7407L45.7975 31.3021Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M34.0655 40.7407L45.7975 31.3021",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.0655 40.7407L45.7975 50.1793Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M34.0655 40.7407L45.7975 50.1793",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84.4538 40.7407L72.7217 31.3021Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M84.4538 40.7407L72.7217 31.3021",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84.4538 40.7407L72.7218 50.1793Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M84.4538 40.7407L72.7218 50.1793",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M63.1998 22.1962C62.7009 22.1868 62.214 22.3502 61.8216 22.6586C61.4293 22.967 61.1555 23.4015 61.0468 23.8885L53.2616 56.5903C53.1894 56.869 53.1734 57.1591 53.2148 57.444C53.2561 57.7289 53.3539 58.0028 53.5023 58.2495C53.6507 58.4962 53.8469 58.7108 54.0793 58.8807C54.3117 59.0506 54.5756 59.1726 54.8557 59.2392C55.1357 59.3059 55.4263 59.316 55.7103 59.269C55.9943 59.2219 56.2661 59.1185 56.5097 58.9651C56.7534 58.8118 56.964 58.6114 57.1292 58.3756C57.2944 58.1399 57.411 57.8736 57.472 57.5923L65.2572 24.8906C65.337 24.5746 65.3445 24.2447 65.279 23.9255C65.2135 23.6062 65.0768 23.3058 64.879 23.0468C64.6812 22.7878 64.4275 22.5765 64.1367 22.4293C63.8459 22.282 63.5257 22.2024 63.1998 22.1962Z",fill:"currentColor"})]})};var xe=function(e){return Object(X.jsxs)("svg",{width:"133",height:"100",viewBox:"0 0 133 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.70267 4.28919e-08C3.21615 -7.39014e-05 2.7344 0.0954608 2.2849 0.281606C1.8354 0.467751 1.42705 0.740715 1.08303 1.08473C0.739011 1.42875 0.466063 1.83685 0.279909 2.28634C0.0937555 2.73583 -0.00201784 3.21811 -0.00195309 3.70462V77.7779C-0.00201784 78.2644 0.0937555 78.746 0.279909 79.1955C0.466063 79.645 0.739011 80.0538 1.08303 80.3978C1.42705 80.7418 1.8354 81.0141 2.2849 81.2003C2.7344 81.3864 3.21615 81.4826 3.70267 81.4825H114.814C115.796 81.4823 116.738 81.0919 117.433 80.3971C118.127 79.7024 118.517 78.7603 118.517 77.7779V3.70462C118.517 2.7223 118.127 1.78015 117.433 1.08541C116.738 0.390681 115.796 0.000221977 114.814 4.28919e-08H3.70267Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.40588 7.4082H111.109V74.075H7.40588V7.4082Z",fill:"#555555"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M55.5536 77.778V96.297H62.9615V77.778H55.5536Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M37.0361 92.5935V100H40.7393H77.776H81.4806V92.5935H77.776H40.7393H37.0361Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M40.5985 19.5703V23.3051C39.1526 23.6795 37.7661 24.254 36.4792 25.0122L33.8378 22.3708L28.1696 28.039L30.8113 30.6807C30.0521 31.9674 29.4765 33.3537 29.1011 34.7997H25.3691V42.816H29.0989C29.4695 44.266 30.0414 45.6569 30.7979 46.9484L28.1696 49.5767L33.8378 55.2452L36.4692 52.6138C37.7592 53.3728 39.1492 53.9475 40.5985 54.3209V58.0454H48.6148V54.3178C50.0612 53.9414 51.4478 53.3646 52.7344 52.6041L55.3755 55.2452L61.044 49.5767L58.4039 46.9365C59.1612 45.649 59.7348 44.2622 60.1082 42.816H63.8442V34.7997H60.1263C59.749 33.3512 59.1707 31.9628 58.4083 30.6748L61.044 28.039L55.3755 22.3708L52.7425 25.0037C51.4526 24.2473 50.0633 23.675 48.6148 23.3035V19.5703H40.5985Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M52.7052 38.8079C52.7052 40.8721 51.9169 42.8584 50.5014 44.361C49.086 45.8636 47.1501 46.7689 45.0895 46.892C43.0289 47.0151 40.9991 46.3468 39.4148 45.0234C37.8305 43.7001 36.8114 41.8216 36.5656 39.772C36.3199 37.7224 36.8661 35.6562 38.0926 33.9958C39.3192 32.3354 41.1335 31.2063 43.1648 30.8388C45.1961 30.4712 47.291 30.8933 49.0216 32.0186C50.7522 33.144 51.9877 34.8876 52.4757 36.8934",fill:"#555555"}),Object(X.jsx)("path",{d:"M85.8755 32.2133V33.3814C85.4233 33.4985 84.9896 33.6782 84.5871 33.9153L83.761 33.0892L81.9881 34.862L82.8144 35.6883C82.5769 36.0907 82.3968 36.5243 82.2794 36.9766H81.1122V39.4839H82.2788C82.3947 39.9374 82.5735 40.3725 82.8101 40.7764L81.9881 41.5985L83.761 43.3714L84.584 42.5484C84.9875 42.7858 85.4222 42.9655 85.8755 43.0823V44.2472H88.3828V43.0813C88.8352 42.9636 89.2689 42.7832 89.6713 42.5454L90.4974 43.3714L92.2704 41.5985L91.4446 40.7727C91.6814 40.37 91.8609 39.9362 91.9776 39.4839H93.1462V36.9766H91.9833C91.8653 36.5236 91.6844 36.0893 91.446 35.6864L92.2704 34.862L90.4974 33.0892L89.6739 33.9127C89.2704 33.6761 88.8359 33.4971 88.3828 33.3809V32.2133H85.8755Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M89.6622 38.2306C89.6622 38.8763 89.4156 39.4976 88.9729 39.9675C88.5302 40.4375 87.9247 40.7206 87.2802 40.7591C86.6357 40.7976 86.0008 40.5886 85.5053 40.1747C85.0098 39.7608 84.691 39.1733 84.6142 38.5322C84.5373 37.8911 84.7081 37.2449 85.0918 36.7255C85.4754 36.2062 86.0429 35.8531 86.6782 35.7381C87.3135 35.6232 87.9688 35.7552 88.5101 36.1071C89.0513 36.4591 89.4378 37.0045 89.5904 37.6318",fill:"#555555"}),Object(X.jsx)("path",{d:"M75.9507 40.2251L75.1138 42.1489C74.2851 42.0177 73.4422 42.003 72.6094 42.1051L71.8408 40.1527L67.651 41.8022L68.4197 43.7549C67.7403 44.2475 67.1332 44.8326 66.6158 45.4933L64.6935 44.657L62.8972 48.7862L64.8184 49.6219C64.6844 50.4519 64.6673 51.2965 64.7675 52.1312L62.8248 52.8961L64.4742 57.086L66.4193 56.3203C66.9137 57.0003 67.5008 57.6077 68.1637 58.1249L67.3291 60.0433L71.4582 61.8396L72.2935 59.9196C73.1229 60.0498 73.9664 60.0634 74.7995 59.96L75.5681 61.9122L79.7581 60.2626L78.9898 58.3111C79.6684 57.8176 80.2746 57.2318 80.791 56.5705L82.7154 57.4077L84.5117 53.2786L82.5967 52.4455C82.7269 51.6148 82.7401 50.7701 82.636 49.9358L84.5843 49.1688L82.9346 44.9789L80.9884 45.7451C80.4935 45.0664 79.9061 44.4603 79.2432 43.9444L80.0798 42.0214L75.9507 40.2251Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M77.876 52.8471C77.4134 53.9104 76.5623 54.7569 75.4965 55.2137C74.4307 55.6704 73.2307 55.703 72.1417 55.3047C71.0527 54.9063 70.1569 54.1072 69.6374 53.0706C69.1179 52.0339 69.0139 50.838 69.3466 49.7272C69.6793 48.6164 70.4236 47.6745 71.4274 47.0941C72.4313 46.5137 73.6188 46.3386 74.7475 46.6045C75.8762 46.8703 76.8607 47.5572 77.4999 48.5246C78.1392 49.4921 78.3848 50.667 78.1867 51.8096",fill:"#555555"}),Object(X.jsx)("rect",{x:"105",y:"51",width:"27.93",height:"49",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M105.595 51C105.437 51.0002 105.286 51.0631 105.174 51.1749C105.063 51.2867 105 51.4382 105 51.5962V99.4035C105 99.5616 105.063 99.7132 105.174 99.825C105.286 99.9369 105.437 99.9998 105.595 100H132.334C132.413 100 132.49 99.9846 132.562 99.9547C132.635 99.9247 132.7 99.8807 132.756 99.8253C132.811 99.7699 132.855 99.7041 132.885 99.6317C132.915 99.5594 132.93 99.4818 132.93 99.4035V51.5962C132.93 51.5179 132.915 51.4404 132.885 51.3681C132.855 51.2957 132.811 51.23 132.756 51.1746C132.7 51.1192 132.635 51.0753 132.562 51.0453C132.49 51.0154 132.412 51 132.334 51H105.595ZM106.191 52.1928H131.739V98.8078H106.191V52.1928Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M107.508 93.6669V57.3333H130.456V93.6669H107.508Z",fill:"#555555",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"}),Object(X.jsx)("path",{opacity:"0.1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M105.168 99.8174L105.178 99.8282C105.175 99.8245 105.171 99.8208 105.168 99.817L105.168 99.8174Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M117.058 67.66V69.1752C116.472 69.3271 115.909 69.5601 115.387 69.8677L114.316 68.7961L112.016 71.0957L113.088 72.1674C112.78 72.6893 112.546 73.2518 112.394 73.8384H110.88V77.0905H112.393C112.544 77.6787 112.776 78.243 113.082 78.7669L112.016 79.8332L114.316 82.1328L115.383 81.0653C115.907 81.3732 116.47 81.6063 117.058 81.7579V83.2688H120.311V81.7566C120.897 81.6039 121.46 81.3699 121.982 81.0614L123.053 82.1328L125.353 79.8332L124.282 78.7621C124.589 78.2398 124.822 77.6772 124.973 77.0905H126.489V73.8384H124.981C124.828 73.2508 124.593 72.6875 124.284 72.165L125.353 71.0957L123.053 68.7961L121.985 69.8643C121.462 69.5574 120.898 69.3252 120.311 69.1745V67.66H117.058Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M122.088 75.5003C122.088 76.3377 121.768 77.1436 121.194 77.7531C120.619 78.3627 119.834 78.73 118.998 78.7799C118.162 78.8299 117.339 78.5587 116.696 78.0219C116.053 77.485 115.64 76.7229 115.54 75.8914C115.44 75.06 115.662 74.2217 116.16 73.5481C116.657 72.8745 117.393 72.4164 118.217 72.2673C119.041 72.1182 119.891 72.2895 120.593 72.746C121.295 73.2025 121.797 73.9099 121.995 74.7236",fill:"#555555"})]})};var je=function(e){return Object(X.jsxs)("svg",{width:"57",height:"100",viewBox:"0 0 57 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[Object(X.jsx)("rect",{width:"57",height:"100",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.21399 3.9039e-08C0.891855 0.000326846 0.58301 0.128698 0.355332 0.35687C0.127653 0.585043 -0.000218465 0.894282 -0.000244068 1.21682V98.7826C-0.000355148 99.1053 0.127459 99.4147 0.355152 99.643C0.582845 99.8712 0.891766 99.9997 1.21399 100H55.784C55.9437 100 56.1018 99.9686 56.2493 99.9075C56.3968 99.8463 56.5309 99.7565 56.6438 99.6435C56.7567 99.5304 56.8462 99.3962 56.9073 99.2485C56.9684 99.1007 56.9998 98.9425 56.9998 98.7826V1.21682C56.9997 1.05698 56.9683 0.898852 56.9072 0.751192C56.8461 0.603532 56.7565 0.469331 56.6436 0.35633C56.5307 0.243329 56.3967 0.153684 56.2492 0.0925486C56.1017 0.0314136 55.9436 -4.04496e-05 55.784 3.9039e-08H1.21399ZM2.4294 2.43435H54.5682V97.5669H2.4294V2.43435Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.11841 87.0754V12.925H51.9501V87.0754H5.11841Z",fill:"#555555",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"}),Object(X.jsx)("path",{opacity:"0.1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.342041 99.6272L0.363783 99.6493C0.35658 99.6418 0.349453 99.6342 0.342446 99.6265L0.342041 99.6272Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M24.6089 34V37.0921C23.4118 37.4021 22.2638 37.8778 21.1984 38.5055L19.0115 36.3186L14.3186 41.0115L16.5057 43.1987C15.8772 44.2639 15.4006 45.4117 15.0898 46.6089H12V53.2458H15.088C15.3948 54.4463 15.8683 55.5979 16.4946 56.6671L14.3186 58.8431L19.0115 63.5363L21.1901 61.3577C22.2581 61.9861 23.4089 62.4619 24.6089 62.7711V65.8546H31.2458V62.7685C32.4433 62.4568 33.5913 61.9793 34.6565 61.3497L36.8431 63.5363L41.5363 58.8431L39.3505 56.6573C39.9774 55.5914 40.4524 54.4432 40.7615 53.2458H43.8546V46.6089H40.7765C40.4641 45.4096 39.9853 44.2601 39.3541 43.1937L41.5363 41.0115L36.8431 36.3186L34.6633 38.4985C33.5953 37.8722 32.445 37.3984 31.2458 37.0908V34H24.6089Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M34.8728 50.0006C34.8728 51.7097 34.2202 53.3543 33.0482 54.5983C31.8763 55.8423 30.2736 56.5919 28.5676 56.6938C26.8615 56.7957 25.1809 56.2424 23.8693 55.1467C22.5576 54.051 21.7138 52.4958 21.5103 50.7989C21.3069 49.102 21.7591 47.3913 22.7746 46.0166C23.7901 44.6419 25.2922 43.7071 26.974 43.4028C28.6558 43.0985 30.3902 43.4479 31.823 44.3796C33.2558 45.3114 34.2787 46.755 34.6828 48.4156",fill:"#555555"})]})};var he=function(e){return Object(X.jsxs)("svg",{width:"112",height:"100",viewBox:"0 0 112 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.0272 75.791C47.7228 75.791 48.2446 76.3475 48.2446 77.0084V84.7651C48.2794 84.7998 48.2793 84.8346 48.3141 84.8694L56.2795 98.6435C56.5229 99.0609 56.3838 99.6174 55.9316 99.8609C55.5142 100.104 54.9577 99.9653 54.7142 99.5479L48.2794 88.3825V98.7826C48.2794 99.4783 47.7228 100 47.0619 100C46.3663 100 45.8098 99.4435 45.8098 98.7826V88.3825L39.3749 99.5479C39.1314 99.9653 38.5749 100.139 38.1575 99.8609C37.7401 99.6174 37.5662 99.0609 37.8097 98.6435L45.775 84.8694C45.8098 84.8346 45.8098 84.7998 45.8445 84.7651V77.0084C45.8098 76.3475 46.3663 75.791 47.0272 75.791Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M5.28568 18.4872H88.7998C89.9213 18.4872 90.8694 19.4353 90.8694 20.5568V74.1575C90.8694 75.2902 89.945 76.2271 88.7998 76.2271H5.28568C4.16413 76.2271 3.21606 75.2791 3.21606 74.1575V20.5568C3.21606 19.4241 4.14047 18.4872 5.28568 18.4872Z",stroke:"currentColor","stroke-width":"4"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.0697 1.56524C12.661 1.63481 13.2176 1.77394 13.7393 1.98264C13.8089 2.01742 13.8437 2.01742 13.9132 2.0522H13.948C13.9828 2.0522 14.0176 2.08699 14.0871 2.12177L14.1567 2.15655C14.1915 2.15655 14.2263 2.19134 14.2611 2.19134L14.3654 2.22612L14.435 2.2609C14.4698 2.29569 14.5045 2.29568 14.5393 2.33047H14.5741C14.6089 2.36525 14.6785 2.36525 14.7132 2.40003H14.748C15.2698 2.64351 15.7567 2.95656 16.2089 3.3044L17.3915 2.12177L19.2698 4.00006L18.0872 5.18268C18.435 5.66964 18.7481 6.15661 18.9916 6.64358V6.67836C19.0263 6.71314 19.0263 6.78271 19.0611 6.81749L19.0959 6.85227C19.1307 6.88705 19.1307 6.92184 19.1655 6.99141L19.2003 7.06097C19.2003 7.09575 19.235 7.13054 19.235 7.16532C19.2698 7.20011 19.2698 7.23488 19.3046 7.26967V7.33924C19.3394 7.37402 19.3394 7.44358 19.3742 7.47837C19.409 7.54793 19.409 7.58272 19.4437 7.65228C19.6177 8.20881 19.7916 8.76534 19.8611 9.32187H21.5307V12.0002H19.8611C19.7916 12.5915 19.6177 13.148 19.4437 13.6698C19.409 13.7393 19.409 13.7741 19.3742 13.8437L19.3394 13.8785C19.3394 13.9132 19.3046 13.948 19.3046 14.0176L19.2698 14.0872C19.2698 14.1219 19.235 14.1567 19.235 14.1915C19.2003 14.2263 19.2003 14.2611 19.2003 14.2959L19.1655 14.3654C19.1307 14.4002 19.1307 14.435 19.0959 14.5046L19.0611 14.5393C19.0263 14.6089 19.0263 14.6437 18.9916 14.7133C18.7481 15.235 18.435 15.722 18.0872 16.1741L19.2698 17.3568L17.3915 19.2351L16.2089 18.0524C15.722 18.4003 15.235 18.7133 14.7132 18.9568C14.6437 18.9916 14.6089 18.9916 14.5741 19.0264H14.5393C14.5045 19.0611 14.4698 19.0611 14.4002 19.0959L14.3306 19.1307C14.2958 19.1307 14.2611 19.1655 14.2263 19.1655C14.1915 19.1655 14.1567 19.2003 14.1567 19.2003C14.1219 19.2003 14.0871 19.2351 14.0871 19.2351C14.0524 19.2698 14.0176 19.2698 13.9828 19.2698L13.9132 19.3046C13.8784 19.3394 13.8089 19.3394 13.7741 19.3742C13.2176 19.5481 12.661 19.6872 12.1045 19.7916V21.4612H9.461V19.7916C8.86969 19.722 8.31316 19.5829 7.79141 19.3742C7.72185 19.3394 7.68706 19.3394 7.6175 19.3046H7.58271C7.54793 19.2698 7.51315 19.2698 7.44358 19.2351L7.37402 19.2003C7.33923 19.1655 7.30445 19.1655 7.26966 19.1655L7.16531 19.1307L7.09575 19.0959C7.06097 19.0959 7.02618 19.0611 6.9914 19.0264H6.95661C6.92183 18.9916 6.85227 18.9568 6.81748 18.9568H6.7827C6.26095 18.7133 5.77399 18.4003 5.32181 18.0524L4.13919 19.2351L2.2609 17.3568L3.44353 16.1741C3.0957 15.722 2.78265 15.2002 2.53917 14.7133C2.50438 14.6437 2.50438 14.6089 2.4696 14.5741L2.43481 14.5393C2.40003 14.5046 2.40003 14.4698 2.36525 14.4002L2.33047 14.3306C2.33047 14.2959 2.29568 14.2611 2.29568 14.2611C2.2609 14.2263 2.2609 14.1915 2.22612 14.1567V14.1219C2.19134 14.0524 2.19134 14.0176 2.15655 13.9828V13.948C2.12177 13.8785 2.12177 13.8437 2.08698 13.7741C1.91307 13.2524 1.73915 12.6611 1.66959 12.1045H0V9.42622H1.66959C1.73915 8.83491 1.91307 8.27838 2.08698 7.75663C2.12177 7.72185 2.12177 7.65228 2.15655 7.6175L2.19133 7.58272C2.19133 7.54794 2.22612 7.51315 2.22612 7.44358L2.2609 7.37402C2.2609 7.33923 2.29568 7.30445 2.29568 7.26967C2.33047 7.23488 2.33047 7.20011 2.33047 7.16532L2.36525 7.09575C2.40003 7.06097 2.40003 7.02619 2.43481 6.95662L2.4696 6.92184C2.50438 6.85227 2.50438 6.81749 2.53917 6.74792C2.78265 6.22617 3.0957 5.73922 3.44353 5.25225L2.2609 4.06962L4.13919 2.19134L5.32181 3.37396C5.80877 3.02613 6.29574 2.71308 6.81748 2.4696C6.88705 2.43482 6.92183 2.40003 6.95661 2.40003H6.9914C7.02618 2.36525 7.06096 2.36525 7.13053 2.33047L7.2001 2.29569C7.23488 2.2609 7.26966 2.2609 7.30445 2.2609C7.33923 2.2609 7.37402 2.22612 7.37402 2.22612C7.4088 2.22612 7.44358 2.19134 7.44358 2.19134C7.47836 2.19134 7.51315 2.15655 7.54793 2.15655H7.6175C7.65228 2.12177 7.72184 2.12177 7.75663 2.08699C8.31316 1.91307 8.86969 1.77394 9.42621 1.66959V0H12.0697V1.56524ZM10.748 7.72185C12.348 7.72185 13.635 9.00882 13.635 10.6088C13.635 12.2089 12.348 13.4958 10.748 13.4958C9.18273 13.4958 7.86098 12.2089 7.86098 10.6088C7.86098 9.00882 9.14795 7.72185 10.748 7.72185ZM10.748 5.42617C13.6002 5.42617 15.9306 7.72185 15.9306 10.5741C15.9306 13.4263 13.6002 15.722 10.748 15.722C7.89576 15.722 5.60008 13.3915 5.60008 10.5741C5.56529 7.75663 7.89576 5.42617 10.748 5.42617Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.3667 8.31341C38.9928 8.59167 39.6189 8.90472 40.1754 9.28734C40.245 9.32212 40.2798 9.3569 40.3493 9.39169L40.3841 9.42647C40.4537 9.46126 40.4885 9.49604 40.5233 9.53082L40.5928 9.60039C40.6276 9.63517 40.6624 9.63517 40.6972 9.66995L40.8015 9.73952L40.8711 9.80908C40.9059 9.84387 40.9407 9.87865 41.0102 9.91343L41.045 9.94822C41.1146 9.983 41.1494 10.0178 41.1841 10.0874C41.7059 10.5395 42.1581 11.0265 42.6102 11.5482L44.3146 10.5743L45.8799 13.2874L44.1755 14.2613C44.4537 14.9222 44.6277 15.5483 44.7668 16.244V16.2787C44.7668 16.3483 44.8016 16.3831 44.8016 16.4527V16.4874C44.8016 16.557 44.8364 16.5918 44.8364 16.6614L44.8711 16.7309C44.8711 16.7657 44.8711 16.8005 44.8711 16.8353C44.8711 16.9048 44.8711 16.9396 44.9059 16.9744V17.044C44.9059 17.1135 44.9407 17.1831 44.9407 17.2179V17.2527C44.9407 17.3222 44.9407 17.3918 44.9755 17.4614C45.0451 18.157 45.0103 18.8179 44.9407 19.5136L46.8538 20.0353L46.0538 23.0614L44.1407 22.5397C43.8624 23.1658 43.5494 23.7919 43.1668 24.3484C43.132 24.418 43.0972 24.4528 43.0624 24.5223L43.0276 24.5571C42.9929 24.5919 42.9581 24.6267 42.9233 24.6963L42.8537 24.7658C42.8189 24.8006 42.7842 24.8354 42.7842 24.8702C42.7494 24.905 42.7146 24.9397 42.7146 24.9745L42.6798 25.0441C42.645 25.0789 42.6102 25.1136 42.5755 25.1832L42.5407 25.218C42.5059 25.2876 42.4363 25.3223 42.4015 25.3919C41.9494 25.9137 41.4624 26.3658 40.9407 26.818L41.9146 28.5224L39.2015 30.0876L38.1928 28.3833C37.5667 28.6615 36.9058 28.8354 36.2102 28.9746C36.1406 28.9746 36.071 29.0094 36.0015 29.0094H35.9667C35.8971 29.0094 35.8623 29.0441 35.7928 29.0441H35.7232C35.6884 29.0441 35.6189 29.0441 35.5841 29.0441C35.5493 29.0441 35.5145 29.0441 35.4797 29.0789C35.4449 29.0789 35.4102 29.0789 35.3754 29.0789C35.3406 29.0789 35.271 29.0789 35.2362 29.0789H35.1667C35.0971 29.0789 35.0623 29.0789 34.9928 29.0789H34.958C34.2971 29.1485 33.6014 29.1137 32.9058 29.0441L32.384 30.9572L29.3579 30.1572L29.8797 28.2441C29.2536 27.9659 28.6275 27.6528 28.1057 27.2354H28.0709C28.0014 27.2006 27.9666 27.1659 27.897 27.1311L27.8622 27.0963C27.8275 27.0615 27.7927 27.0267 27.7231 26.9919L27.6535 26.9224C27.6188 26.8876 27.584 26.8528 27.5492 26.8528L27.4448 26.7832L27.3753 26.7137C27.3405 26.6789 27.3057 26.6441 27.2361 26.6093L27.2014 26.5745C27.1666 26.5398 27.097 26.505 27.0622 26.4354H27.0274C26.5057 25.9832 26.0535 25.4963 25.6013 24.9745L23.897 25.9484L22.3317 23.2354L24.0361 22.2614C23.7926 21.6006 23.5839 20.9397 23.4796 20.2788V20.244C23.4448 20.1744 23.4448 20.1049 23.4448 20.0701V20.0005C23.4448 19.931 23.41 19.8962 23.41 19.8266V19.7571C23.41 19.7223 23.41 19.6875 23.41 19.6527C23.41 19.5831 23.3752 19.5484 23.3752 19.5136V19.444C23.3752 19.3744 23.3752 19.3397 23.3404 19.2701V19.2353C23.3404 19.1657 23.3404 19.0962 23.3404 19.0266C23.2709 18.3309 23.3057 17.6701 23.3752 16.9744L21.4622 16.4527L22.2622 13.4265L24.1752 13.9483C24.4535 13.3222 24.7665 12.6961 25.1492 12.1396C25.1839 12.07 25.2187 12.0352 25.2535 11.9656L25.2883 11.9309C25.3231 11.8961 25.3579 11.8613 25.3926 11.7917L25.4622 11.7222C25.497 11.6874 25.497 11.6526 25.5318 11.6178C25.5666 11.583 25.6013 11.5482 25.6013 11.5135L25.6709 11.4439C25.7057 11.4091 25.7405 11.3743 25.7753 11.3048L25.81 11.27C25.8448 11.2004 25.8796 11.1656 25.9492 11.0961C26.4013 10.5743 26.8883 10.0874 27.4448 9.66995L26.4709 7.96558L29.184 6.40034L30.1579 8.10471C30.8188 7.82645 31.4797 7.65254 32.1406 7.5134C32.2101 7.5134 32.2797 7.47862 32.3492 7.47862H32.384C32.4536 7.47862 32.4884 7.44383 32.5579 7.44383H32.6275C32.6971 7.44383 32.7319 7.44383 32.7666 7.44383C32.8014 7.44383 32.8362 7.44384 32.871 7.40905C32.9058 7.40905 32.9406 7.40905 32.9753 7.40905C33.0101 7.40905 33.0797 7.40905 33.1145 7.40905H33.184C33.2536 7.40905 33.3232 7.40905 33.358 7.40905C34.0188 7.33949 34.7145 7.37427 35.4102 7.44383L35.8971 5.53076L38.9232 6.33077L38.3667 8.31341ZM34.958 14.957C36.7667 15.4439 37.845 17.2875 37.358 19.131C36.871 20.9397 34.9928 22.018 33.184 21.531C31.3753 21.044 30.297 19.2005 30.784 17.357C31.271 15.5483 33.1493 14.47 34.958 14.957ZM35.6536 12.3483C38.9232 13.2178 40.8363 16.557 39.9667 19.8266C39.0972 23.0962 35.758 25.0093 32.4884 24.1397C29.2536 23.2701 27.3057 19.931 28.1753 16.6614C29.0449 13.4265 32.384 11.4787 35.6536 12.3483Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M66.9579 83.3762H70.3667V99.8982H63.5144V86.8197C63.5144 84.9415 65.0449 83.3762 66.9579 83.3762Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M76.0705 72.872H79.4792V99.8985H72.627V76.2808C72.6617 74.4025 74.1922 72.872 76.0705 72.872Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M85.2201 62.8544H88.6289V99.8984H81.7766V66.2632C81.7766 64.3849 83.3071 62.8544 85.2201 62.8544Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M14.7484 61.7399C13.9484 61.7399 13.2875 61.079 13.2875 60.279C13.2875 59.479 13.9484 58.8181 14.7484 58.8181H36.2095L46.0531 41.7396C46.3314 41.2526 46.8184 41.0091 47.3401 41.0091H77.497L96.6277 15.9653C97.1147 15.3044 98.0538 15.2001 98.6799 15.687C99.3408 16.174 99.4452 17.1131 98.9582 17.7392L79.4449 43.3048C79.1666 43.6874 78.7144 43.9657 78.1927 43.9657H48.1749L38.4009 60.8703C38.1574 61.392 37.6704 61.7399 37.0443 61.7399H14.7484Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M50.9929 11.5834C50.5755 11.5834 50.2625 11.2704 50.2625 10.853C50.2625 10.4356 50.6103 10.1226 50.9929 10.1226H85.9151C86.3325 10.1226 86.6456 10.4704 86.6456 10.853C86.6456 11.2704 86.2977 11.5834 85.9151 11.5834H50.9929Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M43.6865 7.3387C43.2691 7.3387 42.9561 7.02565 42.9561 6.60825C42.9561 6.19086 43.3039 5.87781 43.6865 5.87781H78.6087C79.0261 5.87781 79.3392 6.22564 79.3392 6.60825C79.3392 7.02565 79.0261 7.3387 78.6087 7.3387H43.6865Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.0611 40.209C48.5915 40.209 49.8089 41.3916 49.8089 42.8525C49.8089 44.3134 48.5915 45.5308 47.0611 45.5308C45.5306 45.5308 44.3132 44.3482 44.3132 42.8525C44.3132 41.3916 45.5306 40.209 47.0611 40.209ZM47.0611 37.6698C50.0524 37.6698 52.4524 40.0003 52.4524 42.8873C52.4524 45.7743 50.0524 48.1047 47.0611 48.1047C44.0697 48.1047 41.6697 45.7743 41.6697 42.8873C41.6697 40.0003 44.0697 37.6698 47.0611 37.6698ZM47.0611 36.5568C50.6785 36.5568 53.6003 39.3742 53.6003 42.8873C53.6003 46.3656 50.6785 49.2178 47.0611 49.2178C43.4436 49.2178 40.5219 46.4004 40.5219 42.8873C40.5219 39.3742 43.4436 36.5568 47.0611 36.5568Z",fill:"currentColor"}),Object(X.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M100.175 9.287C102.68 9.287 104.732 11.2696 104.732 13.6697C104.732 16.1045 102.68 18.0523 100.175 18.0523C97.6708 18.0523 95.6186 16.0697 95.6186 13.6697C95.6186 11.2696 97.6708 9.287 100.175 9.287ZM100.175 5.04346C105.114 5.04346 109.149 8.90438 109.149 13.7045C109.149 18.4697 105.149 22.3654 100.175 22.3654C95.236 22.3654 91.236 18.5045 91.236 13.7045C91.236 8.90438 95.236 5.04346 100.175 5.04346ZM100.175 3.19995C106.158 3.19995 111.028 7.89567 111.028 13.6697C111.028 19.4437 106.193 24.1394 100.175 24.1394C94.1925 24.1394 89.3577 19.4437 89.3577 13.6697C89.3577 7.89567 94.1925 3.19995 100.175 3.19995Z",fill:"currentColor"})]})};var fe=function(e){return Object(X.jsxs)("svg",{width:"160",height:"100",viewBox:"0 0 160 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[Object(X.jsx)("path",{d:"M37.2028 92.7344C37.3818 92.3163 37.7927 92.0458 38.2472 92.0458H120.837C121.291 92.0458 121.701 92.3163 121.881 92.7344L124.316 98.416C124.636 99.166 124.086 100 123.27 100H35.8132C34.9975 100 34.4475 99.166 34.7688 98.416L37.2028 92.7344Z",fill:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.54524 4.54524V85.2233H154.538V4.54524H4.54524ZM2.27262 0C1.01745 0 0 1.01745 0 2.27262V87.4959C0 88.7516 1.01745 89.7686 2.27262 89.7686H156.811C158.066 89.7686 159.083 88.7516 159.083 87.4959V2.27262C159.083 1.01745 158.066 0 156.811 0H2.27262Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M79.5417 50.9067C87.7001 50.9067 94.3138 44.293 94.3138 36.1347C94.3138 27.9763 87.7001 21.3626 79.5417 21.3626C71.3834 21.3626 64.7697 27.9763 64.7697 36.1347C64.7697 44.293 71.3834 50.9067 79.5417 50.9067Z",stroke:"currentColor",strokeWidth:"2"}),Object(X.jsx)("path",{d:"M53.7975 67.4739C56.2384 61.6514 59.5759 57.9607 63.5996 55.6438C67.6675 53.3015 72.6277 52.2537 78.4762 52.0699C84.7239 51.8735 90.0188 52.7192 94.3414 55.0417C98.6116 57.3363 102.155 61.192 104.708 67.4536C106.294 71.3423 107.398 76.3169 108.106 80.4098C108.415 82.1906 108.643 83.7769 108.803 84.9962H50.1582C50.2625 83.7667 50.426 82.1418 50.6751 80.3137C51.232 76.2265 52.1958 71.2942 53.7975 67.4739Z",stroke:"currentColor",strokeWidth:"2"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M61.3608 30.7757C61.7642 29.2101 62.4371 27.2678 63.5481 25.3383C65.9866 21.1029 70.5761 16.8177 79.5416 16.8177C88.5071 16.8177 93.0967 21.1029 95.5352 25.3384C96.6465 27.2678 97.3192 29.2101 97.7226 30.7757V41.2484C97.7226 42.0371 98.1249 42.732 98.7351 43.1396L98.0135 44.2214C97.7419 44.1355 97.4533 44.0892 97.1544 44.0892C95.5852 44.0892 94.3137 45.3611 94.3137 46.93C94.3137 48.4989 95.5852 49.7708 97.1544 49.7708C98.7237 49.7708 99.9952 48.4989 99.9952 46.93C99.9952 46.5042 99.902 46.1003 99.7339 45.7378L101.211 43.521H103.192C104.113 43.521 104.944 42.9662 105.25 42.097C105.871 40.3348 106.813 37.2872 106.813 34.9987C106.813 32.7102 105.871 29.6626 105.25 27.9004C104.944 27.0312 104.113 26.4764 103.192 26.4764H99.9952C99.9566 26.4764 99.918 26.4773 99.8805 26.4792C99.5009 25.5572 99.043 24.5984 98.4896 23.6374C95.5307 18.4982 89.8934 13.4088 79.5416 13.4088C69.19 13.4088 63.5526 18.4982 60.5936 23.6373C60.0404 24.5984 59.5822 25.5572 59.203 26.4792C59.165 26.4773 59.1266 26.4764 59.088 26.4764H55.8913C54.9696 26.4764 54.1399 27.0312 53.8334 27.9004C53.2118 29.6626 52.2702 32.7102 52.2702 34.9987C52.2702 37.2872 53.2118 40.3348 53.8334 42.097C54.1399 42.9662 54.9697 43.521 55.8913 43.521H59.088C60.3431 43.521 61.3607 42.5036 61.3607 41.2484L61.3608 30.7757Z",fill:"currentColor"})]})};var Le=function(e){return Object(X.jsxs)("svg",{width:"119",height:"100",viewBox:"0 0 119 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.70267 -0.000122027C3.21615 -0.000195974 2.7344 0.0953344 2.2849 0.281484C1.8354 0.467634 1.42697 0.740585 1.08295 1.08461C0.738925 1.42863 0.466059 1.8374 0.279909 2.2869C0.0937596 2.7364 -0.00202703 3.21798 -0.00195308 3.7045V77.7778C-0.00202703 78.2643 0.0937596 78.7459 0.279909 79.1954C0.466059 79.6449 0.738925 80.0537 1.08295 80.3977C1.42697 80.7417 1.8354 81.0147 2.2849 81.2008C2.7344 81.387 3.21615 81.4825 3.70267 81.4824H114.814C115.796 81.4822 116.738 81.0918 117.433 80.397C118.127 79.7023 118.517 78.7601 118.517 77.7778V3.7045C118.517 2.72216 118.127 1.78004 117.433 1.08529C116.738 0.390544 115.796 9.99068e-05 114.814 -0.000122027H3.70267Z",fill:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.40588 7.40802H111.109V74.0748H7.40588V7.40802Z",fill:"#555555"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55.5537 77.7778V96.2968H62.9616V77.7778H55.5537Z",fill:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.036 92.5934V99.9999H40.7393H77.7759H81.4805V92.5934H77.7759H40.7393H37.036Z",fill:"currentColor"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.3315 54.4454L59.2576 65.4085V38.0009L37.3315 27.0379V54.4454Z",fill:"#D5D5D5"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.2576 65.4085L81.1836 54.4454V27.0379L59.2576 38.0009V65.4085Z",fill:"#E2E2E2"}),Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.3315 27.0378L59.2576 38.0008L81.1836 27.0378L59.2576 16.0749L37.3315 27.0378Z",fill:"#F2F2F2"})]})};function ve(e){let t,{icon:A,title:i,subtitle:o}=e;switch(A){case"software":default:t=Object(X.jsx)(Ne,{});break;case"web-development":t=Object(X.jsx)(xe,{});break;case"mobile":t=Object(X.jsx)(je,{});break;case"strategy":t=Object(X.jsx)(he,{});break;case"design":t=Object(X.jsx)(Le,{});break;case"teams":t=Object(X.jsx)(fe,{})}return Object(X.jsxs)(be,{className:"test",children:[Object(X.jsx)(Qe,{children:t}),Object(X.jsx)(we,{children:i}),Object(X.jsx)(Me,{children:o})]})}const be=n.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${u.fatLight};
`,Qe=n.b.div`
  margin: 0 auto;
`,we=n.b.h2`
  ${L}
  width: 100%;
  max-width: 300px;
  margin: 40px 0;
  @media (max-width: 860px) {
    margin: 20px 0;
  }
`,Me=n.b.p`
  ${v}
  width: 100%;
  margin: 0;
`;function ye(e){let{data:t}=e;const{id:A,mainHeading:i,description:o,servicesList:l}=t;return Object(X.jsx)(Se,{id:A,children:Object(X.jsxs)(ke,{children:[Object(X.jsxs)(Xe,{children:[Object(X.jsx)(Be,{children:i}),Object(X.jsx)(Ze,{children:o})]}),Object(X.jsx)(He,{children:l.map(((e,t)=>Object(X.jsx)(Oe,{children:Object(X.jsx)(ve,{...e})},t)))})]})})}const Se=n.b.section`
  display: flex;
  flex-direction: column;
  background-color: ${u.fatDark};
  min-height: calc(100vh - 80px);
  ${D.desktop} {
    margin: 0 auto;
    align-items: center;
  }
`,ke=n.b.div`
  padding: 0 ${Q};
  max-width: ${F};

  ${D.desktop} {
    padding: 0 ${H};
  }
`,He=n.b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: unset;
  align-items: center;
  justify-content: space-between;
  ${D.desktop} {
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
  }
`,Oe=n.b.div`
  width: 70%;
  margin: 10px 0;
  padding: ${M};

  ${D.desktop} {
    margin: 10px 0;
    flex: 33%;
    max-width: 25%;
  }
`,Xe=n.b.div`
  text-align: center;
  ${D.desktop} {
    text-align: left;
  }
`,Be=n.b.h1`
  ${f}
  color: ${u.fatLight};
  background-color: ${u.fatRed};
  margin: ${w} 0;
  padding: ${w};
  width: 25vw;
`,Ze=n.b.p`
  ${v}
  color: ${u.fatLight};
  padding: ${w} 0;
  ${D.desktop} {
    padding: ${H} 0;
  }
`;var Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAE1CAIAAABiOWxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACKdJREFUeNrs219olecdwHG7P4VNaUlXrAW9CIZ1MMHQsUmqvegZmBtdQWENFIwgBIoQVgVLaWqhtQ0VtENQh0ywHR2usNzojcIyGP5BNpiF9mLD4kV7EUNtS5nbRXuxX8/D+fHkPSdutCYY+HwIcpK855zX6Pv19zzneE/rybFlAAvpW34EgNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgPcDb7jR7DkrF/3w/jo+a2Z2Zvnpy9vbg2tWvmDnge8+94/4yM/3bhh/dr+NeX2H8/86dat/3zz09sxsmW+b52bvnxj9mbj2eP38sH1j65d//DilavdJxDHrF/3yNr+1XHHOCYe4Y6cJELD/w7N6MjWnt+6+t4/IjTDraHBdY/0PODN02cyNMuXf2/f+M4Vy78fty/0usi/nvnOrWSuhCae+uXnn8mTLDdmZj/eP3k8opOnd/jA3oFOB8Nw+8H3TBzKY7B04m6XlfnXrX8fPHJqMZ+6rkxatfLBKEv0JY+pK1PECccxD80zr2Gi4Y6JuSAGk/w0Vh+bNgzmt+LXxj/4cXHmFRtNySVJ3ivmiDu4HqnPLWzf+vPMWax9ykSWlYkRLM45FnrDrcfKqcbxb50+G6dXHxMrpvgtxLfKMaMjWw4eedPfBKFhYUNTL3/iX/hyO5Y/cYnGjWMn36mP39waem58Z+6S5KIpt2bqXZuGmB1yuycyUXpUf7H7vuUc8qlLZUIsecrdt7V7UQqyd+JwuT0ze7OsuUpocuco1lPlmPPLLkeqyjFruyYdhIaFXf6UaSUqMN/yZ3vnwj43falc6rlo+mrjozUU4ZiaJzc3Zm/uGx8tw0WE7KXJ4xGpE29MlLvXOz7d1vavzsC9fuRUzlmDnZ3sUr28XSISjxx3zK/PVJvHH7QHojAgNPZoWDQ7Rrbk8icvwu6rfaB6XamxaCoXdnwaY9G2ra2ejxCLlLLgisPimIxUpK0eXhrqUSvuXr/YlI2rv9g4IJd4cfLZnXoU8qcvNCySOi7Drcd+f+K1ehZojDPRhZgp6kVTw+5dT/V81TwScLSzFotjSqQiBPsnj9/m3GJ0ymGk7ODGZFSWXfUasL5L5iOOuXjl3bzviTdePHRgz9snXs1dm4tXrvrTFxoWSVyNMaTk9RnX5MvPP9MYKzZ2hpfOODOYA8XRk3/4xdO/2j95LMeHHBkazk9fvjD32o701DPIPKPQqTi3mdmPM4WbW0P1vRovHuXkFcfER72pHIlZtfLB3LWp11wIDQvu2Ml39k4cHnv2lfJpXI31UDPc2YuNlJQpIDdxIwFTZ6Zj7oha5cAy0DUQ1dWoR4/z/8elHgNUnNvTYy9kpDZWS7b6ZBpLqiLWZRHB7FS9lPOePaFhkcR0kG85qV/Pri/XXDdd/Mbvx9teDTsxX8z31uQcVTZuWN+9xFvRPuEcwaKD9W+ne0kVEYxO7Zk4lN+6/Wtk3LW86rT0xEW+Y2RLXO0xKUy1F0T1FZs7I3FYLjfKuqn+btx929ZWDDUxAY12/tPAtXnecds+Zs77ffeNj449e6A7XtG+SFKpUllerWh/JddEpXpltyUWU9euf1jeR7N71y/LMRe69l/y/zTEdNN4kw5Cw0KJBUi5UDdtGNw0dzESw0JugmR9yjZwjjaxjCpTz+5dT8VHffepTo8a7citnwhW9Gugf00kbN/4zpe69oPLO+7K4z/Xtetc9lbi1zimRLBxAu0V05yURA1zD9iiydKJxRP/ql/r9WJ2FCTfqhd1KO+1rceZZe0Xg/ZPHs/d37kVuNRzVRKzRolCPGk89cEjp/LV7np9lDPL0blvF+x+/NucQ/12m7IEy0nKomlJ+3b/j37ip7C0fPHFl2fP/aWMDw/03b+s80JMXL03Zj8px/zs0R/39d0XC6X4eOv02bhL3YI/X/hbrGhiwXLvvd8tc1AU6vTUuZ6Lpice/2l5nF//5u14/E8/+/yTzz6Pu8dX1qx++K9/f79+8LJhFHNTX9/9D/TdVx4/VkO//d1U/fjxII1ziGPi8S91XtUuSmVmvvp/2x/FGTaeiCXkntaTY34KgKUTIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIjR8BIDSA0AAIDSA0gNAACA1w9/uvAAMAVyEAUWZlYN0AAAAASUVORK5CYII=",Pe=A.p+"static/media/logo01.dbe10f14.svg",Ve=A.p+"static/media/logo02.334c23d8.svg",Re=A.p+"static/media/logo03.e511b0f8.svg",ze=A.p+"static/media/logo04.76b41bb8.svg",Ue=A.p+"static/media/logo05.10dda4e0.svg",We=A.p+"static/media/logo06.23c94bba.svg";const Ye={navigation:{main:[{text:"Company",to:"company"},{text:"Services",to:"services"},{text:"Portfolio",to:"portfolio"},{text:"Testimonials",to:"testimonials"},{text:"Contact",to:"contact"}],side:[{text:"Get Started",href:"/"}]},company:{id:"company",mainHeading:"Software Development & Digital Solutions Company",description:"Bodacious Bulls turns visions into reality, creating innovative software, dynamic websites, and transformative applications with a global team of experts.",cta:{text:"Get Started"},quote:{text:"Design is not just what it looks like and feels like. Design is how it works.",author:"Steve Jobs"},clientsList:[{alt:"Client Logo 1",src:Pe},{alt:"Client Logo 2",src:Ve},{alt:"Client Logo 3",src:Re},{alt:"Client Logo 4",src:ze},{alt:"Client Logo 5",src:Ue},{alt:"Client Logo 6",src:We},{alt:"Client Logo 7",src:Pe},{alt:"Client Logo 8",src:Ve},{alt:"Client Logo 9",src:Re},{alt:"Client Logo 10",src:ze},{alt:"Client Logo 11",src:Ue},{alt:"Client Logo 12",src:We},{alt:"Client Logo 13",src:Pe},{alt:"Client Logo 14",src:Ve},{alt:"Client Logo 15",src:Re},{alt:"Client Logo 16",src:ze},{alt:"Client Logo 17",src:Ue},{alt:"Client Logo 18",src:We},{alt:"Client Logo 19",src:Pe},{alt:"Client Logo 20",src:Ve},{alt:"Client Logo 21",src:Re},{alt:"Client Logo 22",src:ze},{alt:"Client Logo 23",src:Ue},{alt:"Client Logo 24",src:We}]},services:{id:"services",mainHeading:"Services",description:"Provides custom solutions, tailor-made services and continuous product support.",servicesList:[{icon:"software",title:"Software Development",subtitle:"Specialize in developing software according to your unique needs and business challenges."},{icon:"web-development",title:"Web Development",subtitle:"Specializes in building responsive, scalable, and device-friendly websites or a chain of complex web applications with a seamless user experience."},{icon:"mobile",title:"Mobile App Development",subtitle:"Specialized in designing applications that perform smoothly on across platforms and operating systems with a promise of superior user experience"},{icon:"strategy",title:"Digital Strategy & Planning",subtitle:"We make your brand stand out in the competitive landscape by leveraging competitive analysis, market insights and industry trends."},{icon:"design",title:"Digital Product Design",subtitle:"Creating intuitive and interactive experiences through specialized User Experience Design (UX) and User Interface Design (UI)"},{icon:"teams",title:"Virtual Teams",subtitle:"Our virtual team of experts and professionals from all around the globe ensure the constant maintenance, upgradation and performance of your product"}]},portfolio:{id:"portfolio",mainHeading:"Portfolio",description:"Proudly presenting our product, projects, and work",projectsList:[{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAE1CAIAAABiOWxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACKdJREFUeNrs219olecdwHG7P4VNaUlXrAW9CIZ1MMHQsUmqvegZmBtdQWENFIwgBIoQVgVLaWqhtQ0VtENQh0ywHR2usNzojcIyGP5BNpiF9mLD4kV7EUNtS5nbRXuxX8/D+fHkPSdutCYY+HwIcpK855zX6Pv19zzneE/rybFlAAvpW34EgNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgPcDb7jR7DkrF/3w/jo+a2Z2Zvnpy9vbg2tWvmDnge8+94/4yM/3bhh/dr+NeX2H8/86dat/3zz09sxsmW+b52bvnxj9mbj2eP38sH1j65d//DilavdJxDHrF/3yNr+1XHHOCYe4Y6cJELD/w7N6MjWnt+6+t4/IjTDraHBdY/0PODN02cyNMuXf2/f+M4Vy78fty/0usi/nvnOrWSuhCae+uXnn8mTLDdmZj/eP3k8opOnd/jA3oFOB8Nw+8H3TBzKY7B04m6XlfnXrX8fPHJqMZ+6rkxatfLBKEv0JY+pK1PECccxD80zr2Gi4Y6JuSAGk/w0Vh+bNgzmt+LXxj/4cXHmFRtNySVJ3ivmiDu4HqnPLWzf+vPMWax9ykSWlYkRLM45FnrDrcfKqcbxb50+G6dXHxMrpvgtxLfKMaMjWw4eedPfBKFhYUNTL3/iX/hyO5Y/cYnGjWMn36mP39waem58Z+6S5KIpt2bqXZuGmB1yuycyUXpUf7H7vuUc8qlLZUIsecrdt7V7UQqyd+JwuT0ze7OsuUpocuco1lPlmPPLLkeqyjFruyYdhIaFXf6UaSUqMN/yZ3vnwj43falc6rlo+mrjozUU4ZiaJzc3Zm/uGx8tw0WE7KXJ4xGpE29MlLvXOz7d1vavzsC9fuRUzlmDnZ3sUr28XSISjxx3zK/PVJvHH7QHojAgNPZoWDQ7Rrbk8icvwu6rfaB6XamxaCoXdnwaY9G2ra2ejxCLlLLgisPimIxUpK0eXhrqUSvuXr/YlI2rv9g4IJd4cfLZnXoU8qcvNCySOi7Drcd+f+K1ehZojDPRhZgp6kVTw+5dT/V81TwScLSzFotjSqQiBPsnj9/m3GJ0ymGk7ODGZFSWXfUasL5L5iOOuXjl3bzviTdePHRgz9snXs1dm4tXrvrTFxoWSVyNMaTk9RnX5MvPP9MYKzZ2hpfOODOYA8XRk3/4xdO/2j95LMeHHBkazk9fvjD32o701DPIPKPQqTi3mdmPM4WbW0P1vRovHuXkFcfER72pHIlZtfLB3LWp11wIDQvu2Ml39k4cHnv2lfJpXI31UDPc2YuNlJQpIDdxIwFTZ6Zj7oha5cAy0DUQ1dWoR4/z/8elHgNUnNvTYy9kpDZWS7b6ZBpLqiLWZRHB7FS9lPOePaFhkcR0kG85qV/Pri/XXDdd/Mbvx9teDTsxX8z31uQcVTZuWN+9xFvRPuEcwaKD9W+ne0kVEYxO7Zk4lN+6/Wtk3LW86rT0xEW+Y2RLXO0xKUy1F0T1FZs7I3FYLjfKuqn+btx929ZWDDUxAY12/tPAtXnecds+Zs77ffeNj449e6A7XtG+SFKpUllerWh/JddEpXpltyUWU9euf1jeR7N71y/LMRe69l/y/zTEdNN4kw5Cw0KJBUi5UDdtGNw0dzESw0JugmR9yjZwjjaxjCpTz+5dT8VHffepTo8a7citnwhW9Gugf00kbN/4zpe69oPLO+7K4z/Xtetc9lbi1zimRLBxAu0V05yURA1zD9iiydKJxRP/ql/r9WJ2FCTfqhd1KO+1rceZZe0Xg/ZPHs/d37kVuNRzVRKzRolCPGk89cEjp/LV7np9lDPL0blvF+x+/NucQ/12m7IEy0nKomlJ+3b/j37ip7C0fPHFl2fP/aWMDw/03b+s80JMXL03Zj8px/zs0R/39d0XC6X4eOv02bhL3YI/X/hbrGhiwXLvvd8tc1AU6vTUuZ6Lpice/2l5nF//5u14/E8/+/yTzz6Pu8dX1qx++K9/f79+8LJhFHNTX9/9D/TdVx4/VkO//d1U/fjxII1ziGPi8S91XtUuSmVmvvp/2x/FGTaeiCXkntaTY34KgKUTIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIjR8BIDSA0AAIDSA0gNAACA1w9/uvAAMAVyEAUWZlYN0AAAAASUVORK5CYII=",title:"Graphic Design",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},{img:"data:image/png;base64,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",title:"Web Design",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."},{img:"data:image/png;base64,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",title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:"data:image/png;base64,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",title:"Print",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."},{img:"data:image/png;base64,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",title:"Graphic Design",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."},{img:Ee,title:"Development",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}]},testimonials:{id:"testimonials",mainHeading:"Testimonials",description:"We believe in making long-term commitments.",testimonialsList:[{text:"Our team loves Bodacious Bulls for its ease of use and powerful capabilities. Their support is always prompt and efficient. It's a vital tool for our growth.",author:"Quaid-e-Azam"},{text:"Switching to Bodacious Bulls was a game-changer for our company. The platform is user-friendly, and their support team is outstanding. Our productivity has soared!",author:"Umar Farooq"},{text:"Bodacious Bulls' platform is a powerhouse for managing our operations. The exceptional support and innovative features have exceeded our expectations.",author:"John Snow"},{text:"Bodacious Bulls offers a seamless, scalable solution that grows with our business. Their dedication to customer success is unmatched. We couldn't be happier!",author:"Hassan Cheema"},{text:"Bodacious Bulls' SaaS platform has revolutionized our workflow with its intuitive interface and robust features. Their exceptional customer support and seamless scalability make them an invaluable partner. Highly recommended for any business looking to enhance efficiency and drive growth!",author:"Hassan Ali Khan"},{text:"Bodacious Bulls' platform has simplified our processes and boosted our efficiency. The support team is fantastic and always ready to help. Highly recommend!",author:"Steve Jobs"},{text:"Using Bodacious Bulls has streamlined our operations significantly. The platform's features are top-notch, and the customer service is always responsive and helpful.",author:"Hashim Raza"},{text:"Bodacious Bulls has been a game-changer for our team. The platform's efficiency and stellar customer support have made a significant impact on our productivity.",author:"Elon Musk"},{text:"The seamless integration and user-friendly interface of Bodacious Bulls have revolutionized our workflow. Their customer service is consistently excellent.",author:"Bill Gates"},{text:"Our business has thrived since adopting Bodacious Bulls. The intuitive platform and outstanding customer support are indispensable to our success.",author:"Jeff Bezos"}]}};function Fe(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(G,{data:Ye.navigation}),Object(X.jsx)(ge,{data:Ye.company}),Object(X.jsx)(ye,{data:Ye.services})]})}function Te(){return document.title="Bodacious Bulls",Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(l.a,{children:[Object(X.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(X.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(X.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap",rel:"stylesheet"})]}),Object(X.jsx)(Fe,{})]})}var Ke=e=>{e&&e instanceof Function&&A.e(3).then(A.bind(null,51)).then((t=>{let{getCLS:A,getFID:i,getFCP:o,getLCP:l,getTTFB:n}=t;A(e),i(e),o(e),l(e),n(e)}))};const Ge=document.getElementById("root");Object(o.createRoot)(Ge).render(Object(X.jsx)(Te,{})),Ke()}},[[50,1,2]]]);
//# sourceMappingURL=main.de05c2c3.chunk.js.map