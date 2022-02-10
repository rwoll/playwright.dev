"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[41933],{3848:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return w}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=(a(26396),a(58215),["components"]),o={id:"test-runners",title:"Third party runners"},l=void 0,c={unversionedId:"test-runners",id:"version-1.18/test-runners",isDocsHomePage:!1,title:"Third party runners",description:"With a few lines of code, you can hook up Playwright to your existing JavaScript test runner.",source:"@site/versioned_docs/version-1.18/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/docs/test-runners",tags:[],version:"1.18",frontMatter:{id:"test-runners",title:"Third party runners"},sidebar:"version-1.18/docs",previous:{title:"Continuous Integration",permalink:"/docs/ci"},next:{title:"Selenium Grid",permalink:"/docs/selenium-grid"}},u=[{value:"Playwright Test",id:"playwright-test",children:[],level:2},{value:"Jest / Jasmine",id:"jest--jasmine",children:[],level:2},{value:"AVA",id:"ava",children:[],level:2},{value:"Mocha",id:"mocha",children:[],level:2},{value:"Multiple Browsers",id:"multiple-browsers",children:[],level:2}],p={toc:u};function w(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"With a few lines of code, you can hook up Playwright to your existing JavaScript test runner."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#playwright-test"},"Playwright Test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#jest--jasmine"},"Jest / Jasmine")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#ava"},"AVA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#mocha"},"Mocha")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#multiple-browsers"},"Multiple Browsers"))),(0,s.kt)("h2",{id:"playwright-test"},"Playwright Test"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/intro"},"Playwright Test")," is our first-party recommended test runner to be used with Playwright. Learn more about it ",(0,s.kt)("a",{parentName:"p",href:"/docs/intro"},"here"),"."),(0,s.kt)("h2",{id:"jest--jasmine"},"Jest / Jasmine"),(0,s.kt)("p",null,"For Jest, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/playwright-community/jest-playwright"},"jest-playwright")," can be used. However for a light-weight solution, requiring playwright directly works fine. Jest shares it's syntax with Jasmine, so this applies to Jasmine as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst expect = require('expect');\nlet browser;\nlet page;\nbeforeAll(async () => {\n  browser = await chromium.launch();\n});\nafterAll(async () => {\n  await browser.close();\n});\nbeforeEach(async () => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  expect(await page.title()).toBe('Example Domain');\n});\n")),(0,s.kt)("h2",{id:"ava"},"AVA"),(0,s.kt)("p",null,"Tests run concurrently in AVA, so a single page variable cannot be shared between tests. Instead, create new pages with a macro function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst test = require('ava').default;\nconst browserPromise = chromium.launch();\n\nasync function pageMacro(t, callback) {\n  const browser = await browserPromise;\n  const page = await browser.newPage();\n  try {\n    await callback(t, page);\n  } finally {\n    await page.close();\n  }\n}\n\ntest('should work', pageMacro, async (t, page) => {\n  await page.goto('https://www.example.com/');\n  t.is(await page.title(), 'Example Domain');\n});\n")),(0,s.kt)("h2",{id:"mocha"},"Mocha"),(0,s.kt)("p",null,"Mocha looks very similar to the Jest/Jasmine setup, and functions in the same way."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst assert = require('assert');\nlet browser;\nbefore(async() => {\n  browser = await chromium.launch();\n});\nafter(async () => {\n  await browser.close();\n});\nlet page;\nbeforeEach(async() => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  assert.equal(await page.title(), 'Example Domain');\n});\n")),(0,s.kt)("h2",{id:"multiple-browsers"},"Multiple Browsers"),(0,s.kt)("p",null,"These simple examples can be extended to support multiple browsers using an environment variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium, webkit, firefox} = require('playwright');\nconst browserName = process.env.BROWSER || 'webkit';\nlet browser;\nbeforeAll(async() => {\n  browser = await {chromium, webkit, firefox}[browserName].launch();\n});\n")),(0,s.kt)("p",null,"Then set ",(0,s.kt)("inlineCode",{parentName:"p"},"BROWSER=firefox")," to run your tests with firefox, or any other browser."))}w.isMDXComponent=!0}}]);