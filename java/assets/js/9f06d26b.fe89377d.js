"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7544],{3889:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=e(7462),i=e(3366),r=(e(7294),e(3905)),s=(e(6396),e(8215),["components"]),o={id:"class-tracing",title:"Tracing"},c=void 0,l={unversionedId:"api/class-tracing",id:"api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/docs/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/java/docs/next/api/class-tracing",tags:[],version:"current",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/java/docs/next/api/class-touchscreen"},next:{title:"Video",permalink:"/java/docs/next/api/class-video"}},p=[{value:"Tracing.start(options)",id:"tracing-start",children:[],level:2},{value:"Tracing.startChunk(options)",id:"tracing-start-chunk",children:[],level:2},{value:"Tracing.stop(options)",id:"tracing-stop",children:[],level:2},{value:"Tracing.stopChunk(options)",id:"tracing-stop-chunk",children:[],level:2}],h={toc:p};function d(t){var a=t.components,e=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/next/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,r.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-start"},"Tracing.start([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-stop"},"Tracing.stop([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-stop-chunk"},"Tracing.stopChunk([options])"))),(0,r.kt)("h2",{id:"tracing-start"},"Tracing.start(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.StartOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setName"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])"),".",(0,r.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setScreenshots"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,r.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSnapshots"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to capture DOM snapshot on every action.",(0,r.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSources"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to include source files for trace actions. List of the directories with source code for the application must be provided via ",(0,r.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_JAVA_SRC")," environment variable.",(0,r.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTitle"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Trace name to be shown in the Trace Viewer.",(0,r.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start tracing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,r.kt)("h2",{id:"tracing-start-chunk"},"Tracing.startChunk(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.StartChunkOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTitle"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Trace name to be shown in the Trace Viewer.",(0,r.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-start"},"Tracing.start([options])")," once, and then create multiple trace chunks with ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")," and ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-stop-chunk"},"Tracing.stopChunk([options])"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\ncontext.tracing().startChunk();\npage.click("text=Get Started");\n// Everything between startChunk and stopChunk will be recorded in the trace.\ncontext.tracing().stopChunk(new Tracing.StopChunkOptions()\n  .setPath(Paths.get("trace1.zip")));\n\ncontext.tracing().startChunk();\npage.navigate("http://example.com");\n// Save a second trace file with different actions.\ncontext.tracing().stopChunk(new Tracing.StopChunkOptions()\n  .setPath(Paths.get("trace2.zip")));\n')),(0,r.kt)("h2",{id:"tracing-stop"},"Tracing.stop(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.StopOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPath"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Export trace into the file with the given path.",(0,r.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop tracing."),(0,r.kt)("h2",{id:"tracing-stop-chunk"},"Tracing.stopChunk(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.StopChunkOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPath"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Export trace collected since the last ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")," call into the file with the given path.",(0,r.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop the trace chunk. See ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")," for more details about multiple trace chunks."))}d.isMDXComponent=!0}}]);