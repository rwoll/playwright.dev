"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[14090],{23594:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var n=a(87462),l=a(63366),s=(a(67294),a(3905)),r=a(26396),i=a(58215),o=["components"],p={id:"test-parallel",title:"Parallelism and sharding"},u=void 0,d={unversionedId:"test-parallel",id:"test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.",source:"@site/docs/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/next/test-parallel",tags:[],version:"current",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"},sidebar:"docs",previous:{title:"Page Object Model",permalink:"/docs/next/test-pom"},next:{title:"Parametrize tests",permalink:"/docs/next/test-parameterize"}},c=[{value:"Worker processes",id:"worker-processes",children:[],level:2},{value:"Limit workers",id:"limit-workers",children:[],level:2},{value:"Disable parallelism",id:"disable-parallelism",children:[],level:2},{value:"Parallelize tests in a single file",id:"parallelize-tests-in-a-single-file",children:[],level:2},{value:"Serial mode",id:"serial-mode",children:[],level:2},{value:"Shard tests between multiple machines",id:"shard-tests-between-multiple-machines",children:[],level:2},{value:"Limit failures and fail fast",id:"limit-failures-and-fail-fast",children:[],level:2},{value:"Worker index and parallel index",id:"worker-index-and-parallel-index",children:[],level:2},{value:"Control test order",id:"control-test-order",children:[{value:"Sort test files alphabetically",id:"sort-test-files-alphabetically",children:[],level:3},{value:"Use a &quot;test list&quot; file",id:"use-a-test-list-file",children:[],level:3}],level:2}],m={toc:c};function h(e){var t=e.components,a=(0,l.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"By default, ",(0,s.kt)("strong",{parentName:"li"},"test files")," are run in parallel. Tests in a single file are run in order, in the same worker process."),(0,s.kt)("li",{parentName:"ul"},"Group tests with ",(0,s.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},(0,s.kt)("inlineCode",{parentName:"a"},"test.describe.parallel"))," to run ",(0,s.kt)("strong",{parentName:"li"},"tests in a single file")," in parallel."),(0,s.kt)("li",{parentName:"ul"},"To ",(0,s.kt)("strong",{parentName:"li"},"disable")," parallelism limit the number of ",(0,s.kt)("a",{parentName:"li",href:"#disable-parallelism"},"workers to one"),".")),(0,s.kt)("p",null,"You can control the number of ",(0,s.kt)("a",{parentName:"p",href:"#limit-workers"},"parallel worker processes")," and ",(0,s.kt)("a",{parentName:"p",href:"#limit-failures-and-fail-fast"},"limit the number of failures")," in the whole test suite for efficiency."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#worker-processes"},"Worker processes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#limit-workers"},"Limit workers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#disable-parallelism"},"Disable parallelism")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},"Parallelize tests in a single file")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#serial-mode"},"Serial mode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#shard-tests-between-multiple-machines"},"Shard tests between multiple machines")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#limit-failures-and-fail-fast"},"Limit failures and fail fast")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#worker-index-and-parallel-index"},"Worker index and parallel index")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#control-test-order"},"Control test order"))),(0,s.kt)("h2",{id:"worker-processes"},"Worker processes"),(0,s.kt)("p",null,"All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,s.kt)("p",null,"You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another."),(0,s.kt)("p",null,"Workers are always shutdown after a ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-retries#failures"},"test failure")," to guarantee pristine environment for following tests."),(0,s.kt)("h2",{id:"limit-workers"},"Limit workers"),(0,s.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-cli"},"command line")," or in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),"."),(0,s.kt)("p",null,"From the command line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 4\n")),(0,s.kt)("p",null,"In the configuration file:"),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("h2",{id:"disable-parallelism"},"Disable parallelism"),(0,s.kt)("p",null,"You can disable any parallelism by allowing just a single worker at any time. Either set ",(0,s.kt)("inlineCode",{parentName:"p"},"workers: 1")," option in the configuration file or pass ",(0,s.kt)("inlineCode",{parentName:"p"},"--workers=1")," to the command line."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n")),(0,s.kt)("h2",{id:"parallelize-tests-in-a-single-file"},"Parallelize tests in a single file"),(0,s.kt)("p",null,"By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe-parallel"},"test.describe.parallel(title, callback)"),"."),(0,s.kt)("p",null,"Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterAll"),"."),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'parallel' });\n\ntest('runs in parallel 1', async ({ page }) => { /* ... */ });\ntest('runs in parallel 2', async ({ page }) => { /* ... */ });\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'parallel' });\n\ntest('runs in parallel 1', async ({ page }) => { /* ... */ });\ntest('runs in parallel 2', async ({ page }) => { /* ... */ });\n")))),(0,s.kt)("h2",{id:"serial-mode"},"Serial mode"),(0,s.kt)("p",null,"You can annotate inter-dependent tests as serial. If one of the serial tests fails, all subsequent tests are skipped. All tests in a group are retried together."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Using serial is not recommended. It is usually better to make your tests isolated, so they can be run independently."))),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\n// Annotate entire file as serial.\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.click('text=Get Started');\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.click('text=Get Started');\n});\n")))),(0,s.kt)("h2",{id:"shard-tests-between-multiple-machines"},"Shard tests between multiple machines"),(0,s.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,s.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,s.kt)("p",null,"That way your test suite completes 3 times faster."),(0,s.kt)("h2",{id:"limit-failures-and-fail-fast"},"Limit failures and fail fast"),(0,s.kt)("p",null,"You can limit the number of failed tests in the whole test suite by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"maxFailures")," config option or passing ",(0,s.kt)("inlineCode",{parentName:"p"},"--max-failures")," command line flag."),(0,s.kt)("p",null,'When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.'),(0,s.kt)("p",null,"Passing command line option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --max-failures=10\n")),(0,s.kt)("p",null,"Setting in the configuration file:"),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("h2",{id:"worker-index-and-parallel-index"},"Worker index and parallel index"),(0,s.kt)("p",null,"Each worker process is assigned two ids: a unique worker index that starts with 1, and a parallel index that is between ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"workers - 1"),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,s.kt)("inlineCode",{parentName:"p"},"parallelIndex")," and a new ",(0,s.kt)("inlineCode",{parentName:"p"},"workerIndex"),"."),(0,s.kt)("p",null,"You can read an index from environment variables ",(0,s.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"process.env.TEST_PARALLEL_INDEX"),", or access them through ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-worker-index"},"testInfo.workerIndex")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-parallel-index"},"testInfo.parallelIndex"),"."),(0,s.kt)("h2",{id:"control-test-order"},"Control test order"),(0,s.kt)("p",null,"Playwright Test runs tests from a single file in the order of declaration, unless you ",(0,s.kt)("a",{parentName:"p",href:"#parallelize-tests-in-a-single-file"},"parallelize tests in a single file"),"."),(0,s.kt)("p",null,"There is no guarantee about the order of test execution across the files, because Playwright Test runs test files in parallel by default. However, if you ",(0,s.kt)("a",{parentName:"p",href:"#disable-parallelism"},"disable parallelism"),', you can control test order by either naming your files in alphabetical order or using a "test list" file.'),(0,s.kt)("h3",{id:"sort-test-files-alphabetically"},"Sort test files alphabetically"),(0,s.kt)("p",null,"When you ",(0,s.kt)("strong",{parentName:"p"},"disable parallel test execution"),", Playwright Test runs test files in alphabetical order. You can use some naming convention to control the test order, for example ",(0,s.kt)("inlineCode",{parentName:"p"},"test001.spec.ts"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"test002.spec.ts")," and so on."),(0,s.kt)("h3",{id:"use-a-test-list-file"},'Use a "test list" file'),(0,s.kt)("p",null,"Suppose we have two test files."),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// feature-a.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature-a', () => {\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n\n\n// feature-b.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature-b', () => {\n  test.use({ viewport: { width: 500, height: 500 } });\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// feature-a.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature-a', () => {\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n\n\n// feature-b.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature-b', () => {\n  test.use({ viewport: { width: 500, height: 500 } });\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n")))),(0,s.kt)("p",null,"We can create a test list file that will control the order of tests - first run ",(0,s.kt)("inlineCode",{parentName:"p"},"feature-b")," tests, then ",(0,s.kt)("inlineCode",{parentName:"p"},"feature-a")," tests."),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// test.list.ts\nimport './feature-b.spec.ts';\nimport './feature-a.spec.ts';\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// test.list.js\nrequire('./feature-b.spec.js');\nrequire('./feature-a.spec.js');\n")))),(0,s.kt)("p",null,"Now ",(0,s.kt)("strong",{parentName:"p"},"disable parallel execution")," by setting workers to one, and specify your test list file."),(0,s.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  workers: 1,\n  testMatch: 'test.list.ts',\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  workers: 1,\n  testMatch: 'test.list.js',\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Make sure to wrap tests with ",(0,s.kt)("inlineCode",{parentName:"p"},"test.describe()")," blocks so that any ",(0,s.kt)("inlineCode",{parentName:"p"},"test.use()")," calls only affect tests from a single file."))))}h.isMDXComponent=!0}}]);