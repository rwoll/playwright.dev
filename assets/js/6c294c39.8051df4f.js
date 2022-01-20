"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9363],{16096:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return n},metadata:function(){return p},toc:function(){return c},default:function(){return w}});var a=r(87462),i=r(63366),l=(r(67294),r(3905)),o=(r(26396),r(58215),["components"]),s={id:"class-playwright",title:"Playwright Library"},n=void 0,p={unversionedId:"api/class-playwright",id:"version-1.18/api/class-playwright",isDocsHomePage:!1,title:"Playwright Library",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.18/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/docs/api/class-playwright",tags:[],version:"1.18",frontMatter:{id:"class-playwright",title:"Playwright Library"},sidebar:"version-1.18/api",previous:{title:"Playwright Test",permalink:"/docs/api/class-test"},next:{title:"APIRequest",permalink:"/docs/api/class-apirequest"}},c=[{value:"playwright.chromium",id:"playwright-chromium",children:[],level:2},{value:"playwright.devices",id:"playwright-devices",children:[],level:2},{value:"playwright.errors",id:"playwright-errors",children:[],level:2},{value:"playwright.firefox",id:"playwright-firefox",children:[],level:2},{value:"playwright.request",id:"playwright-request",children:[],level:2},{value:"playwright.selectors",id:"playwright-selectors",children:[],level:2},{value:"playwright.webkit",id:"playwright-webkit",children:[],level:2}],h={toc:c};function w(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-chromium"},"playwright.chromium")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-devices"},"playwright.devices")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-errors"},"playwright.errors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-firefox"},"playwright.firefox")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-request"},"playwright.request")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-selectors"},"playwright.selectors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-webkit"},"playwright.webkit"))),(0,l.kt)("h2",{id:"playwright-chromium"},"playwright.chromium"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,l.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,l.kt)("h2",{id:"playwright-devices"},"playwright.devices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,l.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-browser#browser-new-page"},"browser.newPage([options])"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,l.kt)("h2",{id:"playwright-errors"},"playwright.errors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TimeoutError")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),">"," A class of ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-timeouterror",title:"TimeoutError"},"TimeoutError"),".")))),(0,l.kt)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator#locator-wait-for"},"locator.waitFor([options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,l.kt)("p",null,"For certain types of errors Playwright uses specific error classes. These classes are available via ",(0,l.kt)("a",{parentName:"p",href:"#playwrighterrors"},(0,l.kt)("inlineCode",{parentName:"a"},"playwright.errors")),"."),(0,l.kt)("p",null,"An example of handling a timeout error:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.locator('.foo').waitFor();\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),(0,l.kt)("h2",{id:"playwright-firefox"},"playwright.firefox"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,l.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,l.kt)("h2",{id:"playwright-request"},"playwright.request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-apirequest",title:"APIRequest"},"APIRequest"),">")),(0,l.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,l.kt)("h2",{id:"playwright-selectors"},"playwright.selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,l.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/selectors"},"Working with selectors")," for more information."),(0,l.kt)("h2",{id:"playwright-webkit"},"playwright.webkit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,l.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-browser",title:"Browser"},"Browser"),"."))}w.isMDXComponent=!0}}]);