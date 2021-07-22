(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7481],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return f}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(i),f=n,d=h["".concat(s,".").concat(f)]||h[f]||u[f]||a;return i?r.createElement(d,o(o({ref:t},p),{},{components:i})):r.createElement(d,o({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8215:function(e,t,i){"use strict";i(7294)},1395:function(e,t,i){"use strict";i(7294),i(944)},9443:function(e,t,i){"use strict";var r=(0,i(7294).createContext)(void 0);t.Z=r},944:function(e,t,i){"use strict";var r=i(7294),n=i(9443);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5565:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=i(2122),n=i(9756),a=(i(7294),i(3905)),o=(i(1395),i(8215),{id:"class-filechooser",title:"FileChooser"}),l={unversionedId:"api/class-filechooser",id:"api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/docs/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/dotnet/docs/next/api/class-filechooser",version:"current",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"api",previous:{title:"ElementHandle",permalink:"/dotnet/docs/next/api/class-elementhandle"},next:{title:"Frame",permalink:"/dotnet/docs/next/api/class-frame"}},s=[{value:"FileChooser.Element",id:"file-chooser-element",children:[]},{value:"FileChooser.IsMultiple",id:"file-chooser-is-multiple",children:[]},{value:"FileChooser.Page",id:"file-chooser-page",children:[]},{value:"FileChooser.SetFilesAsync(files, options)",id:"file-chooser-set-files",children:[]}],c={toc:s};function p(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-event-file-chooser"},"event Page.FileChooser")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var fileChooser = await page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.ClickAsync("upload");\n});\nawait fileChooser.SetFilesAsync("temp.txt");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-filechooser#file-chooser-element"},"FileChooser.Element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-filechooser#file-chooser-is-multiple"},"FileChooser.IsMultiple")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-filechooser#file-chooser-page"},"FileChooser.Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-filechooser#file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"))),(0,a.kt)("h2",{id:"file-chooser-element"},"FileChooser.Element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,a.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns input element associated with this file chooser."),(0,a.kt)("h2",{id:"file-chooser-is-multiple"},"FileChooser.IsMultiple"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,a.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,a.kt)("h2",{id:"file-chooser-page"},"FileChooser.Page"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page"),">",(0,a.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns page this file chooser belongs to."),(0,a.kt)("h2",{id:"file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=net-5.0",title:"IEnumerable"},"IEnumerable"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,a.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=net-5.0",title:"IEnumerable"},"IEnumerable"),"<",(0,a.kt)("inlineCode",{parentName:"li"},"FilePayload"),">",">",(0,a.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MimeType")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Buffer")," ","<","[byte","[","]]",">"," File content"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"FileChooserSetFilesOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NoWaitAfter"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".",(0,a.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<","[double]","?",">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.SetDefaultTimeout(timeout)")," or ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-set-default-timeout"},"Page.SetDefaultTimeout(timeout)")," methods.",(0,a.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,a.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0}}]);