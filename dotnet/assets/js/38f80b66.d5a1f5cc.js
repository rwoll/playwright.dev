"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5458],{66536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=(n(26396),n(58215),["components"]),s={id:"multi-pages",title:"Multi-page scenarios"},o=void 0,p={unversionedId:"multi-pages",id:"version-1.16/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.16/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/dotnet/docs/1.16/multi-pages",tags:[],version:"1.16",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.16/docs",previous:{title:"Input",permalink:"/dotnet/docs/1.16/input"},next:{title:"Navigations",permalink:"/dotnet/docs/1.16/navigations"}},c=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,r.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        // Create a Chromium browser instance\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        await using var userContext = await browser.NewContextAsync();\n        await using var adminContext = await browser.NewContextAsync();\n        // Create pages and interact with contexts independently.\n    }\n}\n")),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext#browser-context-add-cookies"},"BrowserContext.AddCookiesAsync(cookies)"))),(0,r.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,r.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,r.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Create two pages\nvar pageOne = await context.NewPageAsync();\nvar pageTwo = await context.NewPageAsync();\n\n// Get pages of a browser context\nvar allPages = context.Pages;\n")),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext#browser-context-new-page"},"BrowserContext.NewPageAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext#browser-context-pages"},"BrowserContext.Pages"))),(0,r.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,r.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get page after a specific action (e.g. clicking a link)\nvar newPage = await context.RunAndWaitForPageAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n")),(0,r.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get all new pages (including popups) in the context\ncontext.Page += async  (_, page) => {\n    await page.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext#browser-context-event-page"},"event BrowserContext.Page"))),(0,r.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,r.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,r.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,r.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,r.kt)("p",null,"This event is emitted in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get popup after a specific action (e.g., click)\nvar newPage = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n')),(0,r.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get all popups when they open\npage.Popup += async  (_, popup) => {\n    await popup.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-event-popup"},"event Page.Popup"))))}g.isMDXComponent=!0}}]);