"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2106],{866:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),o={id:"library",title:"Library"},l=void 0,p={unversionedId:"library",id:"library",isDocsHomePage:!1,title:"Library",description:"Playwright can either be used as a part of the Playwright Test, or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on.",source:"@site/docs/library.mdx",sourceDirName:".",slug:"/library",permalink:"/docs/next/library",tags:[],version:"current",frontMatter:{id:"library",title:"Library"},sidebar:"docs",previous:{title:"Advanced: TypeScript",permalink:"/docs/next/test-typescript"},next:{title:"Auto-waiting",permalink:"/docs/next/actionability"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"First script",id:"first-script",children:[],level:2},{value:"Record scripts",id:"record-scripts",children:[],level:2},{value:"TypeScript support",id:"typescript-support",children:[{value:"In JavaScript",id:"in-javascript",children:[],level:3},{value:"In TypeScript",id:"in-typescript",children:[],level:3}],level:2},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"macOS",id:"macos",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright can either be used as a part of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/intro"},"Playwright Test"),", or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#typescript-support"},"TypeScript support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/release-notes"},"Release notes"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use npm or Yarn to install Playwright library in your Node.js project. See ",(0,i.kt)("a",{parentName:"p",href:"#system-requirements"},"system requirements"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D playwright\n")),(0,i.kt)("p",null,"This single command downloads the Playwright NPM package and browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/browsers#managing-browser-binaries"},"managing browsers"),"."),(0,i.kt)("p",null,"Once installed, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",(0,i.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"},"the async/await pattern")," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),(0,i.kt)("h2",{id:"first-script"},"First script"),(0,i.kt)("p",null,"In our first script, we will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/debug"},"section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"firefox.launch({ headless: false, slowMo: 50 });\n")),(0,i.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/cli"},"Command line tools")," can be used to record user interactions and generate JavaScript code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright codegen wikipedia.org\n")),(0,i.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,i.kt)("p",null,"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."),(0,i.kt)("h3",{id:"in-javascript"},"In JavaScript"),(0,i.kt)("p",null,"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//@ts-check\n// ...\n")),(0,i.kt)("p",null,"Alternatively, you can use JSDoc to set types for variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('playwright').Page} */\nlet page;\n")),(0,i.kt)("h3",{id:"in-typescript"},"In TypeScript"),(0,i.kt)("p",null,"TypeScript support will work out-of-the-box. Types can also be imported explicitly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let page: import('playwright').Page;\n")),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Playwright requires Node.js version 12 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}d.isMDXComponent=!0}}]);