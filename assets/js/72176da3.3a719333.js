"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[55169],{64721:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return k},metadata:function(){return f},toc:function(){return c},default:function(){return d}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),l=t(26396),i=t(58215),s=["components"],p={id:"class-workerinfo",title:"WorkerInfo"},k=void 0,f={unversionedId:"api/class-workerinfo",id:"version-1.18/api/class-workerinfo",isDocsHomePage:!1,title:"WorkerInfo",description:"WorkerInfo contains information about the worker that is running tests. It is available to test.beforeAll(hookFunction) and test.afterAll(hookFunction) hooks and worker-scoped fixtures.",source:"@site/versioned_docs/version-1.18/api/class-workerinfo.mdx",sourceDirName:"api",slug:"/api/class-workerinfo",permalink:"/docs/api/class-workerinfo",tags:[],version:"1.18",frontMatter:{id:"class-workerinfo",title:"WorkerInfo"}},c=[{value:"workerInfo.config",id:"worker-info-config",children:[],level:2},{value:"workerInfo.parallelIndex",id:"worker-info-parallel-index",children:[],level:2},{value:"workerInfo.project",id:"worker-info-project",children:[],level:2},{value:"workerInfo.workerIndex",id:"worker-info-worker-index",children:[],level:2}],u={toc:c};function d(e){var r=e.components,t=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WorkerInfo")," contains information about the worker that is running tests. It is available to ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-after-all"},"test.afterAll(hookFunction)")," hooks and worker-scoped fixtures."),(0,a.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n"))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-config"},"workerInfo.config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-parallel-index"},"workerInfo.parallelIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-project"},"workerInfo.project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-worker-index"},"workerInfo.workerIndex"))),(0,a.kt)("h2",{id:"worker-info-config"},"workerInfo.config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-testconfig",title:"TestConfig"},"TestConfig"),">")),(0,a.kt)("p",null,"Processed configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-parallel-index"},"workerInfo.parallelIndex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,a.kt)("p",null,"The index of the worker between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"workers - 1"),". It is guaranteed that workers running at the same time have a different ",(0,a.kt)("inlineCode",{parentName:"p"},"parallelIndex"),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,a.kt)("inlineCode",{parentName:"p"},"parallelIndex"),"."),(0,a.kt)("p",null,"Also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.TEST_PARALLEL_INDEX"),". Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelism and sharding")," with Playwright Test."),(0,a.kt)("h2",{id:"worker-info-project"},"workerInfo.project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-testproject",title:"TestProject"},"TestProject"),">")),(0,a.kt)("p",null,"Processed project configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-worker-index"},"workerInfo.workerIndex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,a.kt)("p",null,"The unique index of the worker process that is running the test. When a worker is restarted, for example after a failure, the new worker process gets a new unique ",(0,a.kt)("inlineCode",{parentName:"p"},"workerIndex"),"."),(0,a.kt)("p",null,"Also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX"),". Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelism and sharding")," with Playwright Test."))}d.isMDXComponent=!0}}]);