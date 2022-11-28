(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7022:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var i=n(7294);const r=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:o="cubic-bezier(0, 0, 0, 1)",hideOutline:s=!0,label:a,lines:l=3,onToggle:c,render:d,rounded:h=!1,size:g=32,toggle:m,toggled:p})=>{const[u,f]=(0,i.useState)(!1),x=Math.max(12,Math.min(48,g)),b=Math.round((48-x)/2),j=x/12,v=Math.round(j),w=x/(l*(("lg"===n?.25:"sm"===n?.75:.5)+(3===l?1:1.25))),y=Math.round(w),$=v*l+y*(l-1),k=Math.round((48-$)/2),N=parseFloat((x/(3===l?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(j-v+(w-y))/(3===l?1:2)/(4/3)).toFixed(2)),S=Math.max(0,r),E={cursor:"pointer",height:"48px",position:"relative",transition:`${S}s ${o}`,userSelect:"none",width:"48px"},_={background:e,height:`${v}px`,left:`${b}px`,position:"absolute"};s&&(E.outline="none"),h&&(_.borderRadius="9em");const T=m||f,O=void 0!==p?p:u;return d({barHeight:v,barStyles:_,burgerStyles:E,easing:o,handler:()=>{T(!O),"function"===typeof c&&c(!O)},isLeft:"left"===t,isToggled:O,label:a,margin:y,move:N,time:S,topOffset:k,width:x})};function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}const s=e=>i.createElement(r,o({},e,{render:e=>i.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},i.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":e.time/2+"s"}`,transform:""+(e.isToggled?`translateY(${e.barHeight+e.margin}px)`:"none")}},i.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?e.time/2+"s":"0s"}`,transform:""+(e.isToggled?"rotate(45deg)":"none")}})),i.createElement("div",{style:{transition:`${e.time/2}s ${e.easing}`,opacity:""+(e.isToggled?"0":"1")}},i.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time/2}s ${e.easing}`}})),i.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":e.time/2+"s"}`,transform:""+(e.isToggled?`translateY(-${e.barHeight+e.margin}px)`:"none")}},i.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?e.time/2+"s":"0s"}`,transform:""+(e.isToggled?"rotate(-45deg)":"none")}})))}))},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},4186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(5893),r=n(9008),o=n.n(r),s=n(7294),a=n(7022),l=n(1985);function c(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("meta",{name:"description",content:"Welcome to my website"}),(0,i.jsx)("meta",{property:"og:description",content:"Nicole Ng"}),(0,i.jsx)("meta",{property:"og:title",content:"Nicole Ng"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:image",content:"public/nn.png"})]}),(0,i.jsx)("div",{className:"navbar",children:(0,i.jsxs)("div",{id:"flex-container",children:[(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:"/",children:(0,i.jsx)("img",{src:"".concat(l.O,"/nn.png"),alt:"NN",id:"initials"})})}),(0,i.jsx)("div",{id:"hamburger",children:(0,i.jsx)(a.v,{size:20,label:"Show menu",toggled:t,toggle:n})}),t&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{id:"menu",children:[(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"/",children:"Home"})}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"/about-me",children:"More About Me"})})]})})]})}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsxs)("div",{id:"header",children:[(0,i.jsx)("img",{src:"".concat(l.O,"/headshot-closeup.jpeg"),id:"prof-pic",alt:"Nicole Ng"}),(0,i.jsx)("h1",{children:"Hi, I\u2019m Nicole!"}),(0,i.jsx)("h2",{children:"A data scientist from NYC passionate about health & wellness, tech, and communities."})]}),(0,i.jsxs)("main",{className:"page-content",children:[(0,i.jsxs)("p",{children:["I currently work at ",(0,i.jsx)("a",{href:"https://www.ribbonhealth.com/",children:"Ribbon Health"}),", building data pipelines and models to deliver accurate provider data to power use cases like care navigation, referrals and more for other companies in the healthcare spaces. Previously I've worked at ",(0,i.jsx)("a",{href:"aetna.com",children:"Aetna"})," and ",(0,i.jsx)("a",{href:"uber.com",children:"Uber"})," running experiments focused on changing people's behavior. Check out my ",(0,i.jsx)("a",{href:"https://www.linkedin.com/in/nicolesng/",children:"Linkedin"})," for more details."]}),(0,i.jsxs)("p",{children:["When I was at NYU, I taught a 10-week ",(0,i.jsx)("a",{href:"https://github.com/nicoleng/bacinsight_19",children:"Intro to Data Science Workshop"})," covering visualization, statistics, machine learning, and culminating in final group modeling projects. We also worked with ",(0,i.jsx)("a",{href:"https://www.wearpepper.com/",children:"Pepper"})," and ",(0,i.jsx)("a",{href:"https://sharemeals.org/",children:"Share Meals"})," on pro-bono consulting engagements."]}),(0,i.jsxs)("p",{children:["Looking to get into Data Science? Check out my ",(0,i.jsx)("a",{href:"https://docs.google.com/document/d/1lobKMk8h12alAvC0bNVlfqxLS8amDSgSYkjWQBIlQEc/edit?folder=0ADQs-R7jtf-6Uk9PVA&pli=1",children:"Dictionary"})," covering key topics for interviews and important concepts I typically encounter on the job. I use this as a living doc to track my learning, not as a published product, but I hope by making it public, it can be helpful to others. Notice something wrong or have any feedback? Please feel free to leave a comment!"]})]})]}),(0,i.jsxs)("footer",{className:"site-footer wrapper",children:[(0,i.jsx)("h3",{children:"Contact"}),(0,i.jsxs)("p",{children:["Curious about my work? Can I help you in your journey? Please shoot me a message at ",(0,i.jsx)("a",{href:"mailto:nicolesng20@gmail.com",children:"nicolesng20@gmail.com"})," or on twitter ",(0,i.jsx)("a",{href:"https://twitter.com/nycole_ng",children:"@nycole_ng"}),"."]})]})]})}},1985:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var i="/home"},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);