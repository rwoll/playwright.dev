"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3173],{94001:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return r},toc:function(){return c},default:function(){return h}});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),d=(t(26396),t(58215),["components"]),l={id:"downloads",title:"Downloads"},s=void 0,r={unversionedId:"downloads",id:"version-1.17/downloads",isDocsHomePage:!1,title:"Downloads",description:"For uploading files, see the uploading files section.",source:"@site/versioned_docs/version-1.17/downloads.mdx",sourceDirName:".",slug:"/downloads",permalink:"/docs/1.17/downloads",tags:[],version:"1.17",frontMatter:{id:"downloads",title:"Downloads"},sidebar:"version-1.17/docs",previous:{title:"Dialogs",permalink:"/docs/1.17/dialogs"},next:{title:"Element selectors",permalink:"/docs/1.17/selectors"}},c=[{value:"Variations",id:"variations",children:[],level:4},{value:"API reference",id:"api-reference",children:[],level:3}],p={toc:c};function h(e){var a=e.components,t=(0,n.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For uploading files, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.17/input#upload-files"},"uploading files")," section."))),(0,i.kt)("p",null,"For every attachment downloaded by the page, ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-page#page-event-download"},"page.on('download')")," event is emitted. If you create a browser context with the ",(0,i.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set, all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-download",title:"Download"},"Download")," object from the event."),(0,i.kt)("p",null,"You can specify where to persist downloaded files using the ",(0,i.kt)("inlineCode",{parentName:"p"},"downloadsPath")," option in ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Downloaded files are deleted when the browser context that produced them is closed."))),(0,i.kt)("p",null,"Here is the simplest way to handle the file download:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const [ download ] = await Promise.all([\n  // Start waiting for the download\n  page.waitForEvent('download'),\n  // Perform the action that initiates download\n  page.click('button#delayed-download')\n]);\n// Wait for the download process to complete\nconst path = await download.path();\n")),(0,i.kt)("h4",{id:"variations"},"Variations"),(0,i.kt)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"page.on('download', download => download.path().then(console.log));\n")),(0,i.kt)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-download",title:"Download"},"Download")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-event-download"},"page.on('download')"))))}h.isMDXComponent=!0}}]);