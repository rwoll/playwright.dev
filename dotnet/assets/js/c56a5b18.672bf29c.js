"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6661],{7794:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return n},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var l=i(7462),s=i(3366),a=(i(7294),i(3905)),o=(i(6396),i(8215),["components"]),n={id:"class-filechooser",title:"FileChooser"},r=void 0,c={unversionedId:"api/class-filechooser",id:"version-1.16/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/versioned_docs/version-1.16/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/dotnet/docs/1.16/api/class-filechooser",tags:[],version:"1.16",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.16/api",previous:{title:"ElementHandle",permalink:"/dotnet/docs/1.16/api/class-elementhandle"},next:{title:"Frame",permalink:"/dotnet/docs/1.16/api/class-frame"}},h=[{value:"FileChooser.Element",id:"file-chooser-element",children:[],level:2},{value:"FileChooser.IsMultiple",id:"file-chooser-is-multiple",children:[],level:2},{value:"FileChooser.Page",id:"file-chooser-page",children:[],level:2},{value:"FileChooser.SetFilesAsync(files, options)",id:"file-chooser-set-files",children:[],level:2}],p={toc:h};function d(e){var t=e.components,i=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-event-file-chooser"},"event Page.FileChooser")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var fileChooser = await page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.ClickAsync("upload");\n});\nawait fileChooser.SetFilesAsync("temp.txt");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-element"},"FileChooser.Element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-is-multiple"},"FileChooser.IsMultiple")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-page"},"FileChooser.Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"))),(0,a.kt)("h2",{id:"file-chooser-element"},"FileChooser.Element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,a.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns input element associated with this file chooser."),(0,a.kt)("h2",{id:"file-chooser-is-multiple"},"FileChooser.IsMultiple"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),">",(0,a.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,a.kt)("h2",{id:"file-chooser-page"},"FileChooser.Page"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page",title:"Page"},"Page"),">",(0,a.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns page this file chooser belongs to."),(0,a.kt)("h2",{id:"file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"},"IEnumerable"),"<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">|",(0,a.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"},"IEnumerable"),"<",(0,a.kt)("inlineCode",{parentName:"li"},"FilePayload"),">",">",(0,a.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," File name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MimeType")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," File type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Buffer")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"},"byte"),"[","]",">"," File content"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"FileChooserSetFilesOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NoWaitAfter"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".",(0,a.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),"?",">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.SetDefaultTimeout(timeout)")," or ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-set-default-timeout"},"Page.SetDefaultTimeout(timeout)")," methods.",(0,a.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,a.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}d.isMDXComponent=!0}}]);