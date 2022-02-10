"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[35458],{66536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),i=(n(26396),n(58215),["components"]),r={id:"multi-pages",title:"Multi-page scenarios"},p=void 0,s={unversionedId:"multi-pages",id:"version-1.16/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.16/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/docs/1.16/multi-pages",tags:[],version:"1.16",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.16/docs",previous:{title:"Input",permalink:"/docs/1.16/input"},next:{title:"Navigations",permalink:"/docs/1.16/navigations"}},c=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/1.16/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Create pages and interact with contexts independently\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-browsercontext#browser-context-add-cookies"},"browserContext.addCookies(cookies)"))),(0,o.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,o.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,o.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a browser context\nconst allPages = context.pages();\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-browsercontext#browser-context-new-page"},"browserContext.newPage()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-browsercontext#browser-context-pages"},"browserContext.pages()"))),(0,o.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),(0,o.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  console.log(await page.title());\n})\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-browsercontext#browser-context-event-page"},"browserContext.on('page')"))),(0,o.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,o.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,o.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,o.kt)("p",null,"This event is emitted in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get popup after a specific action (e.g., click)\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\nawait popup.waitForLoadState();\nconsole.log(await popup.title());\n")),(0,o.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-page#page-event-popup"},"page.on('popup')"))))}g.isMDXComponent=!0}}]);