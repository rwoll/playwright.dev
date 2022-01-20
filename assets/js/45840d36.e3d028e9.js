"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8494],{22078:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=(a(26396),a(58215),["components"]),s={id:"test-cli",title:"Command line"},o=void 0,p={unversionedId:"test-cli",id:"version-1.17/test-cli",isDocsHomePage:!1,title:"Command line",description:"- Examples",source:"@site/versioned_docs/version-1.17/test-cli.mdx",sourceDirName:".",slug:"/test-cli",permalink:"/docs/1.17/test-cli",tags:[],version:"1.17",frontMatter:{id:"test-cli",title:"Command line"},sidebar:"version-1.17/docs",previous:{title:"Authentication",permalink:"/docs/1.17/test-auth"},next:{title:"Configuration",permalink:"/docs/1.17/test-configuration"}},m=[{value:"Examples",id:"examples",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],d={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reference"},"Reference"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are the most common options available in the command line."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run all the tests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run a single test file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page.spec.ts\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run a set of test files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page/ tests/landing-page/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run files that have ",(0,r.kt)("inlineCode",{parentName:"p"},"my-spec")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"my-spec-2")," in the file name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test my-spec my-spec-2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the test with the title"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npx playwright test -g "add a todo item"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run tests in headed browsers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run tests in a particular browser (config-less mode)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=webkit\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run tests in all browsers (config-less mode)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=all\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Disable ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/test-parallel"},"parallelization")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose a ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/test-reporters"},"reporter")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run in debug mode with ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/inspector"},"Playwright Inspector")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --debug\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ask for help"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --help\n")))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Complete set of Playwright Test options is available in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/test-advanced"},"configuration file"),". Following options can be passed to a command line and take a priority over the configuration file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed browsers. Useful for debugging."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--browser"),": Run test in a specific browser. Available options are  ",(0,r.kt)("inlineCode",{parentName:"li"},'"chromium"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"firefox"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"webkit"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"all"')," to run tests in all three browsers at the same time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--debug"),": Run tests with Playwright Inspector. Shortcut for ",(0,r.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable and ",(0,r.kt)("inlineCode",{parentName:"li"},"--timeout=0 --maxFailures=1 --headed --workers=1")," options"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c <file>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--config <file>"),": Configuration file. If not passed, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"playwright.config.ts")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"playwright.config.js")," in the current directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c <dir>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--config <dir>"),": Directory with the tests to run without configuration file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--forbid-only"),": Whether to disallow ",(0,r.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-g <grep>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--grep <grep>"),": Only run tests matching this regular expression. For example, this will run ",(0,r.kt)("inlineCode",{parentName:"li"},"'should add to cart'")," when passed ",(0,r.kt)("inlineCode",{parentName:"li"},'-g="add to cart"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--grep-invert <grep>"),": Only run tests ",(0,r.kt)("strong",{parentName:"li"},"not")," matching this regular expression. The opposite of ",(0,r.kt)("inlineCode",{parentName:"li"},"--grep"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--global-timeout <number>"),": Total timeout for the whole test run in milliseconds. By default, there is no global timeout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--list"),": List all the tests, but do not run them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--max-failures <N>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-x"),": Stop after the first ",(0,r.kt)("inlineCode",{parentName:"li"},"N")," test failures. Passing ",(0,r.kt)("inlineCode",{parentName:"li"},"-x")," stops after the first failure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--output <dir>"),": Directory for artifacts produced by tests, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"test-results"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--project <name>"),": Only run tests from one of the specified ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-advanced#projects"},"projects"),". Defaults to running all projects defined in the configuration file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--quiet"),": Whether to suppress stdout and stderr from the tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--repeat-each <N>"),": Run each test ",(0,r.kt)("inlineCode",{parentName:"li"},"N")," times, defaults to one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--reporter <reporter>"),": Choose a reporter: minimalist ",(0,r.kt)("inlineCode",{parentName:"li"},"dot"),", concise ",(0,r.kt)("inlineCode",{parentName:"li"},"line")," or detailed ",(0,r.kt)("inlineCode",{parentName:"li"},"list"),". See ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-reporters"},"reporters")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--retries <number>"),": The maximum number of ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-retries#retries"},"retries")," for flaky tests, defaults to zero (no retries)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--shard <shard>"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-parallel#shard-tests-between-multiple-machines"},"Shard")," tests and execute only selected shard, specified in the form ",(0,r.kt)("inlineCode",{parentName:"li"},"current/all"),", 1-based, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"3/5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--timeout <number>"),": Maximum timeout in milliseconds for each test, defaults to 30 seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--update-snapshots")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-u"),": Whether to update ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-snapshots"},"snapshots")," with actual results instead of comparing them. Use this when snapshot expectations have changed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--workers <number>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-j <number>"),": The maximum number of concurrent worker processes that run in ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-parallel"},"parallel"),".")))}u.isMDXComponent=!0}}]);