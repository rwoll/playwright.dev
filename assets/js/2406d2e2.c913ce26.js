"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[34442],{21962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return w},default:function(){return p}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=(n(26396),n(58215),["components"]),i={id:"browser-contexts",title:"Browser Contexts"},c=void 0,l={unversionedId:"browser-contexts",id:"version-1.17/browser-contexts",isDocsHomePage:!1,title:"Browser Contexts",description:"- Browser context",source:"@site/versioned_docs/version-1.17/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/docs/browser-contexts",tags:[],version:"1.17",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"version-1.17/docs",previous:{title:"Browsers",permalink:"/docs/browsers"},next:{title:"Chrome Extensions",permalink:"/docs/chrome-extensions"}},w=[{value:"Browser context",id:"browser-context",children:[],level:2},{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],u={toc:w};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#browser-context"},"Browser context")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts"))),(0,s.kt)("h2",{id:"browser-context"},"Browser context"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,s.kt)("a",{parentName:"p",href:"/docs/intro"},"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch();\nconst context = await browser.newContext();\nconst page = await context.newPage();\n")),(0,s.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { devices } = require('playwright');\nconst iPhone = devices['iPhone 11 Pro'];\n\nconst context = await browser.newContext({\n  ...iPhone,\n  permissions: ['geolocation'],\n  geolocation: { latitude: 52.52, longitude: 13.39},\n  colorScheme: 'dark',\n  locale: 'de-DE'\n});\nconst page = await context.newPage();\n")),(0,s.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Create pages and interact with contexts independently\n")),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-add-cookies"},"browserContext.addCookies(cookies)"))))}p.isMDXComponent=!0}}]);