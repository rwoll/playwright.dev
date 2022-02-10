"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[76579],{7931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),o=n(26396),i=n(58215),l=["components"],p={id:"test-advanced",title:"Advanced: configuration"},u=void 0,c={unversionedId:"test-advanced",id:"test-advanced",isDocsHomePage:!1,title:"Advanced: configuration",description:"- Configuration object",source:"@site/docs/test-advanced.mdx",sourceDirName:".",slug:"/test-advanced",permalink:"/docs/next/test-advanced",tags:[],version:"current",frontMatter:{id:"test-advanced",title:"Advanced: configuration"},sidebar:"docs",previous:{title:"Visual comparisons",permalink:"/docs/next/test-snapshots"},next:{title:"Advanced: fixtures",permalink:"/docs/next/test-fixtures"}},m=[{value:"Configuration object",id:"configuration-object",children:[],level:2},{value:"TestInfo object",id:"testinfo-object",children:[],level:2},{value:"Launching a development web server during the tests",id:"launching-a-development-web-server-during-the-tests",children:[],level:2},{value:"Global setup and teardown",id:"global-setup-and-teardown",children:[],level:2},{value:"Projects",id:"projects",children:[{value:"Same tests, different configuration",id:"same-tests-different-configuration",children:[],level:3},{value:"Different tests, different configuration",id:"different-tests-different-configuration",children:[],level:3},{value:"Custom project parameters",id:"custom-project-parameters",children:[],level:3}],level:2},{value:"WorkerInfo object",id:"workerinfo-object",children:[],level:2},{value:"Add custom matchers using expect.extend",id:"add-custom-matchers-using-expectextend",children:[],level:2}],d={toc:m};function g(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testinfo-object"},"TestInfo object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#launching-a-development-web-server-during-the-tests"},"Launching a development web server during the tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"Global setup and teardown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#projects"},"Projects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#workerinfo-object"},"WorkerInfo object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"))),(0,r.kt)("h2",{id:"configuration-object"},"Configuration object"),(0,r.kt)("p",null,"Configuration file exports a single ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig",title:"TestConfig"},"TestConfig")," object. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig",title:"TestConfig"},"TestConfig")," properties for available configuration options."),(0,r.kt)("p",null,"Note that each ",(0,r.kt)("a",{parentName:"p",href:"#projects"},"test project")," can provide its own ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject",title:"TestProject"},"options"),", for example two projects can run different tests by providing different ",(0,r.kt)("inlineCode",{parentName:"p"},"testDir"),"s."),(0,r.kt)("p",null,'Here is an example that defines a common timeout and two projects. The "Smoke" project runs a small subset of tests without retries, and "Default" project runs all other tests with retries.'),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"testinfo-object"},"TestInfo object"),(0,r.kt)("p",null,"Test functions, fixtures and hooks receive a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo",title:"TestInfo"},"TestInfo")," parameter that provides information about the currently running test as well as some useful utilities that include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Information about the test, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"config")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"project"),"."),(0,r.kt)("li",{parentName:"ul"},"Information about test execution, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"expectedStatus")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"status"),"."),(0,r.kt)("li",{parentName:"ul"},"Test artifact utilities, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"outputPath()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"attach()"),".")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo",title:"TestInfo"},"TestInfo")," methods and properties for all available information and utilities."),(0,r.kt)("p",null,"Here is an example test that saves information to a file using ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo",title:"TestInfo"},"TestInfo"),"."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test } from '@playwright/test';\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test } = require('@playwright/test');\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n")))),(0,r.kt)("p",null,"Here is an example fixture that automatically saves debug logs when the test fails."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport * as debug from 'debug';\nimport * as fs from 'fs';\nimport { test as base } from '@playwright/test';\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexport const test = base.extend<{ saveLogs: void }>({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst debug = require('debug');\nconst fs = require('fs');\nconst base = require('@playwright/test');\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexports.test = base.test.extend({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n")))),(0,r.kt)("h2",{id:"launching-a-development-web-server-during-the-tests"},"Launching a development web server during the tests"),(0,r.kt)("p",null,"To launch a server during the tests, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"webServer")," option in the ",(0,r.kt)("a",{parentName:"p",href:"#configuration-object"},"configuration file"),"."),(0,r.kt)("p",null,"You can specify a port via ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," or additional environment variables, see ",(0,r.kt)("a",{parentName:"p",href:"#configuration-object"},"here"),". The server will wait for it to be available (on ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"::1"),") before running the tests. For continuous integration, you may want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"reuseExistingServer: !process.env.CI")," option which does not use an existing server on the CI. To see the stdout, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG=pw:webserver")," environment variable."),(0,r.kt)("p",null,"The port gets then passed over to Playwright as a ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," when creating the context ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])"),"."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  webServer: {\n    command: 'npm run start',\n    port: 3000,\n    timeout: 120 * 1000,\n    reuseExistingServer: !process.env.CI,\n  },\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  webServer: {\n    command: 'npm run start',\n    port: 3000,\n    timeout: 120 * 1000,\n    reuseExistingServer: !process.env.CI,\n  },\n};\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Now you can use a relative path when navigating the page, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," fixture:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// test.spec.ts\nimport { test } from '@playwright/test';\ntest('test', async ({ page, baseURL }) => {\n  // baseURL is taken directly from your web server,\n  // e.g. http://localhost:3000\n  await page.goto(baseURL + '/bar');\n  // Alternatively, just use relative path, because baseURL is already\n  // set for the default context and page.\n  // For example, this will result in http://localhost:3000/foo\n  await page.goto('/foo');\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// test.spec.js\nconst { test } = require('@playwright/test');\ntest('test', async ({ page, baseURL }) => {\n  // baseURL is taken directly from your web server,\n  // e.g. http://localhost:3000\n  await page.goto(baseURL + '/bar');\n  // Alternatively, just use relative path, because baseURL is already\n  // set for the default context and page.\n  // For example, this will result in http://localhost:3000/foo\n  await page.goto('/foo');\n});\n")))),(0,r.kt)("h2",{id:"global-setup-and-teardown"},"Global setup and teardown"),(0,r.kt)("p",null,"To set something up once before running all tests, use ",(0,r.kt)("inlineCode",{parentName:"p"},"globalSetup")," option in the ",(0,r.kt)("a",{parentName:"p",href:"#configuration-object"},"configuration file"),". Global setup file must export a single function that takes a config object. This function will be run once before all the tests."),(0,r.kt)("p",null,"Similarly, use ",(0,r.kt)("inlineCode",{parentName:"p"},"globalTeardown")," to run something once after all the tests. Alternatively, let ",(0,r.kt)("inlineCode",{parentName:"p"},"globalSetup")," return a function that will be used as a global teardown. You can pass data such as port number, authentication tokens, etc. from your global setup to your tests using environment."),(0,r.kt)("p",null,"Here is a global setup example that authenticates once and reuses authentication state in tests. It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"storageState")," options from the configuration file."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const { baseURL, storageState } = config.projects[0].use;\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto(baseURL!);\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  await page.context().storageState({ path: storageState as string });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const { baseURL, storageState } = config.projects[0].use;\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto(baseURL);\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  await page.context().storageState({ path: storageState });\n  await browser.close();\n};\n")))),(0,r.kt)("p",null,"Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"globalSetup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"storageState")," in the configuration file."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    baseURL: 'http://localhost:3000/',\n    storageState: 'state.json',\n  },\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    baseURL: 'http://localhost:3000/',\n    storageState: 'state.json',\n  },\n};\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Tests start already authenticated because we specify ",(0,r.kt)("inlineCode",{parentName:"p"},"storageState")," that was populated by global setup."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest('test', async ({ page }) => {\n  await page.goto('/');\n  // You are signed in!\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest('test', async ({ page }) => {\n  await page.goto('/');\n  // You are signed in!\n});\n")))),(0,r.kt)("h2",{id:"projects"},"Projects"),(0,r.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running the same or different tests in multiple configurations."),(0,r.kt)("h3",{id:"same-tests-different-configuration"},"Same tests, different configuration"),(0,r.kt)("p",null,"Here is an example that runs the same tests in different browsers:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"You can run all projects or just a single one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Run both projects - each test will be run three times\nnpx playwright test\n\n# Run a single project - each test will be run once\nnpx playwright test --project=chromium\n")),(0,r.kt)("h3",{id:"different-tests-different-configuration"},"Different tests, different configuration"),(0,r.kt)("p",null,"Each project can be configured separately, and run different set of tests with different options. You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject#test-project-test-dir"},"testProject.testDir"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject#test-project-test-match"},"testProject.testMatch")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject#test-project-test-ignore"},"testProject.testIgnore")," to configure which tests should the project run."),(0,r.kt)("p",null,'Here is an example that runs projects with different tests and configurations. The "Smoke" project runs a small subset of tests without retries, and "Default" project runs all other tests with retries.'),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"You can run all projects or just a single one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Run both projects\nnpx playwright test\n\n# Run a single project\nnpx playwright test --project=Smoke\n")),(0,r.kt)("h3",{id:"custom-project-parameters"},"Custom project parameters"),(0,r.kt)("p",null,"Projects can be also used to parametrize tests with your custom configuration - take a look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-parameterize#parameterized-projects"},"this separate guide"),"."),(0,r.kt)("h2",{id:"workerinfo-object"},"WorkerInfo object"),(0,r.kt)("p",null,"Depending on the configuration and failures, Playwright Test might use different number of worker processes to run all the tests. For example, Playwright Test will always start a new worker process after a failing test."),(0,r.kt)("p",null,"Worker-scoped fixtures receive a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-workerinfo",title:"WorkerInfo"},"WorkerInfo")," parameter that describes the current worker configuration. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-workerinfo",title:"WorkerInfo"},"WorkerInfo")," properties for available worker information."),(0,r.kt)("p",null,"Consider an example where we run a new http server per worker process, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"workerIndex")," to produce a unique port number:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport * as http from 'http';\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexport const test = base.extend<{}, { server: http.Server }>({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst http = require('http');\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexports.test = base.test.extend({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n")))),(0,r.kt)("h2",{id:"add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"),(0,r.kt)("p",null,"Playwright Test uses ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},(0,r.kt)("inlineCode",{parentName:"a"},"expect")," library")," under the hood which has the functionality to extend it with ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect#expectextendmatchers"},"custom matchers"),"."),(0,r.kt)("p",null,"In this example we add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," function in the configuration file."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { expect, PlaywrightTestConfig } from '@playwright/test';\n\nexpect.extend({\n  toBeWithinRange(received: number, floor: number, ceiling: number) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nconst config: PlaywrightTestConfig = {};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nconst { expect } = require('@playwright/test');\n\nexpect.extend({\n  toBeWithinRange(received, floor, ceiling) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nmodule.exports = {};\n")))),(0,r.kt)("p",null,"Now we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," in the test."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n")))),(0,r.kt)("p",null,"For TypeScript, also add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"global.d.ts"),". You don't need it for JavaScript."))}g.isMDXComponent=!0}}]);