"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[47131],{23612:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=a(87462),i=a(63366),l=(a(67294),a(3905)),o=(a(26396),a(58215),["components"]),r={id:"class-electronapplication",title:"ElectronApplication"},c=void 0,p={unversionedId:"api/class-electronapplication",id:"api/class-electronapplication",isDocsHomePage:!1,title:"ElectronApplication",description:"Electron application representation. You can use electron.launch([options]) to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:",source:"@site/docs/api/class-electronapplication.mdx",sourceDirName:"api",slug:"/api/class-electronapplication",permalink:"/docs/next/api/class-electronapplication",tags:[],version:"current",frontMatter:{id:"class-electronapplication",title:"ElectronApplication"},sidebar:"api",previous:{title:"Electron",permalink:"/docs/next/api/class-electron"}},s=[{value:"electronApplication.on(&#39;close&#39;)",id:"electron-application-event-close",children:[],level:2},{value:"electronApplication.on(&#39;window&#39;)",id:"electron-application-event-window",children:[],level:2},{value:"electronApplication.browserWindow(page)",id:"electron-application-browser-window",children:[],level:2},{value:"electronApplication.close()",id:"electron-application-close",children:[],level:2},{value:"electronApplication.context()",id:"electron-application-context",children:[],level:2},{value:"electronApplication.evaluate(pageFunction, arg)",id:"electron-application-evaluate",children:[],level:2},{value:"electronApplication.evaluateHandle(pageFunction, arg)",id:"electron-application-evaluate-handle",children:[],level:2},{value:"electronApplication.firstWindow()",id:"electron-application-first-window",children:[],level:2},{value:"electronApplication.waitForEvent(event, optionsOrPredicate)",id:"electron-application-wait-for-event",children:[],level:2},{value:"electronApplication.windows()",id:"electron-application-windows",children:[],level:2}],d={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Electron application representation. You can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electron#electron-launch"},"electron.launch([options])")," to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async ({ app }) => {\n    // This runs in the main Electron process, parameter here is always\n    // the result of the require('electron') in the main app script.\n    return app.getAppPath();\n  });\n  console.log(appPath);\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n  // Exit app.\n  await electronApp.close();\n})();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-event-close"},"electronApplication.on('close')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-event-window"},"electronApplication.on('window')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-browser-window"},"electronApplication.browserWindow(page)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-close"},"electronApplication.close()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-context"},"electronApplication.context()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-first-window"},"electronApplication.firstWindow()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-wait-for-event"},"electronApplication.waitForEvent(event[, optionsOrPredicate])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-windows"},"electronApplication.windows()"))),(0,l.kt)("h2",{id:"electron-application-event-close"},"electronApplication.on('close')"),(0,l.kt)("p",null,"This event is issued when the application closes."),(0,l.kt)("h2",{id:"electron-application-event-window"},"electronApplication.on('window')"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">")),(0,l.kt)("p",null,"This event is issued for every window that is created ",(0,l.kt)("strong",{parentName:"p"},"and loaded")," in Electron. It contains a ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," that can be used for Playwright automation."),(0,l.kt)("h2",{id:"electron-application-browser-window"},"electronApplication.browserWindow(page)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"page"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-browser-window-option-page"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">"," Page to retrieve the window for.",(0,l.kt)("a",{href:"#electron-application-browser-window-option-page",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-browser-window-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,l.kt)("a",{href:"#electron-application-browser-window-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns the BrowserWindow object that corresponds to the given Playwright page."),(0,l.kt)("h2",{id:"electron-application-close"},"electronApplication.close()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-close-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,l.kt)("a",{href:"#electron-application-close-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Closes Electron application."),(0,l.kt)("h2",{id:"electron-application-context"},"electronApplication.context()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-context-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),">",(0,l.kt)("a",{href:"#electron-application-context-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"This method returns browser context that can be used for setting up context-wide routing, etc."),(0,l.kt)("h2",{id:"electron-application-evaluate"},"electronApplication.evaluate(pageFunction","[, arg]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-option-expression"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electron",title:"Electron"},"Electron"),">"," Function to be evaluated in the worker context.",(0,l.kt)("a",{href:"#electron-application-evaluate-option-expression",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-option-arg"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,l.kt)("a",{href:"#electron-application-evaluate-option-arg",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,l.kt)("a",{href:"#electron-application-evaluate-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns a non-",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,l.kt)("h2",{id:"electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-option-expression"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-electron",title:"Electron"},"Electron"),">"," Function to be evaluated in the worker context.",(0,l.kt)("a",{href:"#electron-application-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-option-arg"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">",(0,l.kt)("a",{href:"#electron-application-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,l.kt)("a",{href:"#electron-application-evaluate-handle-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," is that ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," returns ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," would wait for the promise to resolve and return its value."),(0,l.kt)("h2",{id:"electron-application-first-window"},"electronApplication.firstWindow()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-first-window-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">",">",(0,l.kt)("a",{href:"#electron-application-first-window-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Convenience method that waits for the first application window to be opened. Typically your script will start with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const electronApp = await electron.launch({\n    args: ['main.js']\n  });\n  const window = await electronApp.firstWindow();\n  // ...\n")),(0,l.kt)("h2",{id:"electron-application-wait-for-event"},"electronApplication.waitForEvent(event","[, optionsOrPredicate]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-option-event"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Event name, same one typically passed into ",(0,l.kt)("inlineCode",{parentName:"li"},"*.on(event)"),".",(0,l.kt)("a",{href:"#electron-application-wait-for-event-option-event",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optionsOrPredicate"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-option-options-or-predicate"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Either a predicate that receives an event or an options object. Optional.",(0,l.kt)("a",{href:"#electron-application-wait-for-event-option-options-or-predicate",class:"list-anchor"},"#"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"predicate")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),">"," receives the event data and resolves to truthy value when the waiting should resolve."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," maximum time to wait for in milliseconds. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-set-default-timeout"},"browserContext.setDefaultTimeout(timeout)"),"."))),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,l.kt)("a",{href:"#electron-application-wait-for-event-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the application is closed before the event is fired. Returns the event data value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [window] = await Promise.all([\n  electronApp.waitForEvent('window'),\n  mainWindow.click('button')\n]);\n")),(0,l.kt)("h2",{id:"electron-application-windows"},"electronApplication.windows()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-windows-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">",">",(0,l.kt)("a",{href:"#electron-application-windows-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Convenience method that returns all the opened windows."))}u.isMDXComponent=!0}}]);