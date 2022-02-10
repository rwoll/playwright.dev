"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[57619],{82687:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var i=a(87462),l=a(63366),o=(a(67294),a(3905)),n=(a(26396),a(58215),["components"]),r={id:"class-mouse",title:"Mouse"},s=void 0,p={unversionedId:"api/class-mouse",id:"version-1.18/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.18/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/docs/api/class-mouse",tags:[],version:"1.18",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.18/api",previous:{title:"Logger",permalink:"/docs/api/class-logger"},next:{title:"Page",permalink:"/docs/api/class-page"}},m=[{value:"mouse.click(x, y, options)",id:"mouse-click",children:[],level:2},{value:"mouse.dblclick(x, y, options)",id:"mouse-dblclick",children:[],level:2},{value:"mouse.down(options)",id:"mouse-down",children:[],level:2},{value:"mouse.move(x, y, options)",id:"mouse-move",children:[],level:2},{value:"mouse.up(options)",id:"mouse-up",children:[],level:2},{value:"mouse.wheel(deltaX, deltaY)",id:"mouse-wheel",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,l.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-mouse"},"page.mouse"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-mouse#mouse-click"},"mouse.click(x, y[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-mouse#mouse-dblclick"},"mouse.dblclick(x, y[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-mouse#mouse-down"},"mouse.down([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-mouse#mouse-move"},"mouse.move(x, y[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-mouse#mouse-up"},"mouse.up([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-mouse#mouse-wheel"},"mouse.wheel(deltaX, deltaY)"))),(0,o.kt)("h2",{id:"mouse-click"},"mouse.click(x, y","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,o.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,o.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," defaults to 1. See ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-move"},"mouse.move(x, y[, options])"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-down"},"mouse.down([options])"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-up"},"mouse.up([options])"),"."),(0,o.kt)("h2",{id:"mouse-dblclick"},"mouse.dblclick(x, y","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,o.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,o.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-move"},"mouse.move(x, y[, options])"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-down"},"mouse.down([options])"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-up"},"mouse.up([options])"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-down"},"mouse.down([options])")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-mouse#mouse-up"},"mouse.up([options])"),"."),(0,o.kt)("h2",{id:"mouse-down"},"mouse.down(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," defaults to 1. See ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,o.kt)("h2",{id:"mouse-move"},"mouse.move(x, y","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,o.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,o.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"steps"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," defaults to 1. Sends intermediate ",(0,o.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,o.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,o.kt)("h2",{id:"mouse-up"},"mouse.up(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," defaults to 1. See ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,o.kt)("h2",{id:"mouse-wheel"},"mouse.wheel(deltaX, deltaY)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deltaX"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Pixels to scroll horizontally.",(0,o.kt)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deltaY"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Pixels to scroll vertically.",(0,o.kt)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#mouse-wheel-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"wheel")," event."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."))))}u.isMDXComponent=!0}}]);