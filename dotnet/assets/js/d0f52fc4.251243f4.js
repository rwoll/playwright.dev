"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8249],{7113:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var r=a(7462),o=a(3366),l=(a(7294),a(3905)),n=(a(6396),a(8215),["components"]),i={id:"class-framelocator",title:"FrameLocator"},c=void 0,s={unversionedId:"api/class-framelocator",id:"version-1.18/api/class-framelocator",isDocsHomePage:!1,title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either Page.FrameLocator(selector) or Locator.FrameLocator(selector) method.",source:"@site/versioned_docs/version-1.18/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/dotnet/docs/api/class-framelocator",tags:[],version:"1.18",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"version-1.18/api",previous:{title:"Frame",permalink:"/dotnet/docs/api/class-frame"},next:{title:"JSHandle",permalink:"/dotnet/docs/api/class-jshandle"}},m=[{value:"FrameLocator.First",id:"frame-locator-first",children:[],level:2},{value:"FrameLocator.FrameLocator(selector)",id:"frame-locator-frame-locator",children:[],level:2},{value:"FrameLocator.Last",id:"frame-locator-last",children:[],level:2},{value:"FrameLocator.Locator(selector, options)",id:"frame-locator-locator",children:[],level:2},{value:"FrameLocator.Nth(index)",id:"frame-locator-nth",children:[],level:2}],p={toc:m};function d(t){var e=t.components,a=(0,o.Z)(t,n);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FrameLocator represents a view to the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-frame-locator"},"Page.FrameLocator(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-locator#locator-frame-locator"},"Locator.FrameLocator(selector)")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var locator = page.FrameLocator("#my-frame").Locator("text=Submit");\nawait locator.ClickAsync();\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strictness")),(0,l.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Throws if there are several frames in DOM:\nawait page.FrameLocator(".result-frame").Locator("button").ClickAsync();\n\n// Works because we explicitly tell locator to pick the first frame:\nawait page.FrameLocator(".result-frame").First.Locator("button").ClickAsync();\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,l.kt)("p",null,"If you have a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-locator",title:"Locator"},"Locator")," object pointing to an ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator")," using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"},(0,l.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var frameLocator = locator.FrameLocator(":scope");\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator#frame-locator-first"},"FrameLocator.First")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator#frame-locator-frame-locator"},"FrameLocator.FrameLocator(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator#frame-locator-last"},"FrameLocator.Last")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator#frame-locator-locator"},"FrameLocator.Locator(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator#frame-locator-nth"},"FrameLocator.Nth(index)"))),(0,l.kt)("h2",{id:"frame-locator-first"},"FrameLocator.First"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the first matching frame."),(0,l.kt)("h2",{id:"frame-locator-frame-locator"},"FrameLocator.FrameLocator(selector)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,l.kt)("h2",{id:"frame-locator-last"},"FrameLocator.Last"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the last matching frame."),(0,l.kt)("h2",{id:"frame-locator-locator"},"FrameLocator.Locator(selector, options)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"FrameLocatorLocatorOptions?"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HasText"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?|",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex",title:"Regex"},"Regex"),"?",">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},'"Playwright"')," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"<article><div>Playwright</div></article>"),".",(0,l.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#")))),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-locator",title:"Locator"},"Locator"),">",(0,l.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,l.kt)("h2",{id:"frame-locator-nth"},"FrameLocator.Nth(index)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),">",(0,l.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the n-th matching frame."))}d.isMDXComponent=!0}}]);