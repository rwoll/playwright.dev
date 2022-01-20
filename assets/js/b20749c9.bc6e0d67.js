"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5373],{13181:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return k},default:function(){return c}});var s=a(87462),n=a(63366),r=(a(67294),a(3905)),l=a(26396),i=a(58215),p=["components"],o={id:"test-retries",title:"Test retry"},u=void 0,d={unversionedId:"test-retries",id:"test-retries",isDocsHomePage:!1,title:"Test retry",description:"- Failures",source:"@site/docs/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/docs/next/test-retries",tags:[],version:"current",frontMatter:{id:"test-retries",title:"Test retry"},sidebar:"docs",previous:{title:"Reporters",permalink:"/docs/next/test-reporters"},next:{title:"Timeouts",permalink:"/docs/next/test-timeouts"}},k=[{value:"Failures",id:"failures",children:[],level:2},{value:"Retries",id:"retries",children:[],level:2},{value:"Serial mode",id:"serial-mode",children:[],level:2},{value:"Reuse single page between tests",id:"reuse-single-page-between-tests",children:[],level:2}],m={toc:k};function c(e){var t=e.components,a=(0,n.Z)(e,p);return(0,r.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#failures"},"Failures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retries"},"Retries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#serial-mode"},"Serial mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reuse-single-page-between-tests"},"Reuse single page between tests"))),(0,r.kt)("h2",{id:"failures"},"Failures"),(0,r.kt)("p",null,"Playwright Test runs tests in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,r.kt)("p",null,"Consider the following snippet:"),(0,r.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n")))),(0,r.kt)("p",null,"When ",(0,r.kt)("strong",{parentName:"p"},"all tests pass"),", they will run in order in the same worker process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("p",null,"Should ",(0,r.kt)("strong",{parentName:"p"},"any test fail"),", Playwright Test will discard the entire worker process along with the browser and will start a new one. Testing will continue in the new worker process starting with the next test."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,r.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("p",null,"If you ",(0,r.kt)("strong",{parentName:"p"},"enable ",(0,r.kt)("a",{parentName:"strong",href:"#retries"},"retries")),", second worker process will start by retrying the failed test and continue from there."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,r.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," is retried and passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("p",null,"This scheme works perfectly for independent tests and guarantees that failing tests can't affect healthy ones."),(0,r.kt)("h2",{id:"retries"},"Retries"),(0,r.kt)("p",null,"Playwright Test supports ",(0,r.kt)("strong",{parentName:"p"},"test retries"),". When enabled, failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. By default failing tests are not retried."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Give failing tests 3 retry attempts\nnpx playwright test --retries=3\n")),(0,r.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Playwright Test will categorize tests as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"passed" - tests that passed on the first run;'),(0,r.kt)("li",{parentName:"ul"},'"flaky" - tests that failed on the first run, but passed when retried;'),(0,r.kt)("li",{parentName:"ul"},'"failed" - tests that failed on the first run and failed all retries.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Running 3 tests using 1 worker\n\n  \u2713 example.spec.ts:4:2 \u203a first passes (438ms)\n  x example.spec.ts:5:2 \u203a second flaky (691ms)\n  \u2713 example.spec.ts:5:2 \u203a second flaky (522ms)\n  \u2713 example.spec.ts:6:2 \u203a third passes (932ms)\n\n  1 flaky\n    example.spec.ts:5:2 \u203a second flaky\n  2 passed (4s)\n")),(0,r.kt)("p",null,"You can detect retries at runtime with ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-retry"},"testInfo.retry"),", which is accessible to any test, hook or fixture. Here is an example that clears some server-side state before a retry."),(0,r.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n")))),(0,r.kt)("h2",{id:"serial-mode"},"Serial mode"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe-serial"},"test.describe.serial(title, callback)")," to group dependent tests to ensure they will always run together and in order. If one of the tests fails, all subsequent tests are skipped. All tests in the group are retried together."),(0,r.kt)("p",null,"Consider the following snippet that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"test.describe.serial"),":"),(0,r.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.serial('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.serial('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n")))),(0,r.kt)("p",null,"When running without ",(0,r.kt)("a",{parentName:"p",href:"#retries"},"retries"),", all tests after the failure are skipped:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," is skipped entirely")))),(0,r.kt)("p",null,"When running with ",(0,r.kt)("a",{parentName:"p",href:"#retries"},"retries"),", all tests are retried together:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," is skipped"))),(0,r.kt)("li",{parentName:"ul"},"Worker process #2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is usually better to make your tests isolated, so they can be efficiently run and retried independently."))),(0,r.kt)("h2",{id:"reuse-single-page-between-tests"},"Reuse single page between tests"),(0,r.kt)("p",null,"Playwright Test creates an isolated ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," object for each test. However, if you'd like to reuse a single ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," object between multiple tests, you can create your own in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and close it in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-after-all"},"test.afterAll(hookFunction)"),"."),(0,r.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.serial('use the same page', () => {\n  let page: Page;\n\n  test.beforeAll(async ({ browser }) => {\n    page = await browser.newPage();\n  });\n\n  test.afterAll(async () => {\n    await page.close();\n  });\n\n  test('runs first', async () => {\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('runs second', async () => {\n    await page.click('text=Get Started');\n  });\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.serial('use the same page', () => {\n  /** @type {import('@playwright/test').Page} */\n  let page;\n\n  test.beforeAll(async ({ browser }) => {\n    page = await browser.newPage();\n  });\n\n  test.afterAll(async () => {\n    await page.close();\n  });\n\n  test('runs first', async () => {\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('runs second', async () => {\n    await page.click('text=Get Started');\n  });\n});\n")))))}c.isMDXComponent=!0}}]);