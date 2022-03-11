"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[58715],{63964:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var i=t(87462),l=t(63366),n=(t(67294),t(3905)),r=(t(26396),t(58215),["components"]),s={id:"class-dialog",title:"Dialog"},o=void 0,d={unversionedId:"api/class-dialog",id:"version-1.18/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/versioned_docs/version-1.18/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/docs/1.18/api/class-dialog",tags:[],version:"1.18",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.18/api",previous:{title:"Coverage",permalink:"/docs/1.18/api/class-coverage"},next:{title:"Download",permalink:"/docs/1.18/api/class-download"}},p=[{value:"dialog.accept(promptText)",id:"dialog-accept",children:[],level:2},{value:"dialog.defaultValue()",id:"dialog-default-value",children:[],level:2},{value:"dialog.dismiss()",id:"dialog-dismiss",children:[],level:2},{value:"dialog.message()",id:"dialog-message",children:[],level:2},{value:"dialog.type()",id:"dialog-type",children:[],level:2}],c={toc:p};function g(e){var a=e.components,t=(0,l.Z)(e,r);return(0,n.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page#page-event-dialog"},"page.on('dialog')")," event."),(0,n.kt)("p",null,"An example of using ",(0,n.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n  });\n  await page.evaluate(() => alert('1'));\n  await browser.close();\n})();\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page#page-event-dialog"},"page.on('dialog')")," listener. When listener is present, it ",(0,n.kt)("strong",{parentName:"p"},"must")," either ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-dialog#dialog-accept"},"dialog.accept([promptText])")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")," the dialog - otherwise the page will ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-accept"},"dialog.accept([promptText])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-default-value"},"dialog.defaultValue()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-message"},"dialog.message()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-type"},"dialog.type()"))),(0,n.kt)("h2",{id:"dialog-accept"},"dialog.accept(","[promptText]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"promptText"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,n.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,n.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns when the dialog has been accepted."),(0,n.kt)("h2",{id:"dialog-default-value"},"dialog.defaultValue()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,n.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,n.kt)("h2",{id:"dialog-dismiss"},"dialog.dismiss()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,n.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns when the dialog has been dismissed."),(0,n.kt)("h2",{id:"dialog-message"},"dialog.message()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,n.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"A message displayed in the dialog."),(0,n.kt)("h2",{id:"dialog-type"},"dialog.type()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,n.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns dialog's type, can be one of ",(0,n.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}g.isMDXComponent=!0}}]);