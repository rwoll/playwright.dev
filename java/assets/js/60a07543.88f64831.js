"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1874],{3539:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=t(7462),n=t(3366),o=(t(7294),t(3905)),l=(t(6396),t(8215),["components"]),r={id:"navigations",title:"Navigations"},p=void 0,s={unversionedId:"navigations",id:"version-1.17/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.17/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/java/docs/1.17/navigations",tags:[],version:"1.17",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.17/docs",previous:{title:"Multithreading",permalink:"/java/docs/1.17/multithreading"},next:{title:"Network",permalink:"/java/docs/1.17/network"}},c=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[],level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[],level:3},{value:"Custom wait",id:"custom-wait",children:[],level:3},{value:"Wait for element",id:"wait-for-element",children:[],level:3},{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[],level:3},{value:"Custom wait",id:"custom-wait-1",children:[],level:3},{value:"Wait for element",id:"wait-for-element-1",children:[],level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[],level:3},{value:"Multiple navigations",id:"multiple-navigations",children:[],level:3},{value:"Loading a popup",id:"loading-a-popup",children:[],level:3},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],g={toc:c};function d(e){var a=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,o.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,o.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-url"},"Page.url()")," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-event-dom-content-loaded"},"Page.onDOMContentLoaded(handler)")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-event-load"},"Page.onLoad(handler)")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,o.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,o.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,o.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,o.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-goto"},"Page.navigate(url[, options])")," will auto-wait for the redirected page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Navigate the page\npage.navigate("https://example.com");\n')),(0,o.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,o.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Navigate and wait until network is idle\npage.navigate("https://example.com", new Page.NavigateOptions()\n  .setWaitUntil(WaitUntilState.NETWORKIDLE));\n')),(0,o.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-locator#locator-wait-for"},"Locator.waitFor([options])"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-click"},"Page.click(selector[, options])")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Navigate and wait for element\npage.navigate("https://example.com");\npage.locator("text=Example Domain").waitFor();\n\n// Navigate and click element\n// Click will auto-wait for the element\npage.navigate("https://example.com");\npage.click("text=Example Domain");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-goto"},"Page.navigate(url[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-reload"},"Page.reload([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-go-back"},"Page.goBack([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-go-forward"},"Page.goForward([options])"))),(0,o.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,o.kt)("p",null,"In the scenarios below, ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-click"},"Page.click(selector[, options])")," initiates a navigation and then waits for the navigation to complete."),(0,o.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-click"},"Page.click(selector[, options])")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Click will auto-wait for navigation to complete\npage.click("text=Login");\n\n// Fill will auto-wait for element on navigated page\npage.fill("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-wait-for-load-state"},"Page.waitForLoadState([state, options])")," to wait for a loading event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.click("button"); // Click triggers navigation\npage.waitForLoadState(LoadState.NETWORKIDLE); // This resolves after "networkidle"\n')),(0,o.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-locator#locator-wait-for"},"Locator.waitFor([options])"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-click"},"Page.click(selector[, options])")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Click will auto-wait for the element and trigger navigation\npage.click("text=Login");\n// Wait for the element\npage.locator("#username").waitFor();\n\n// Click triggers navigation\npage.click("text=Login");\n// Fill will auto-wait for element\npage.fill("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,o.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-wait-for-navigation"},"Page.waitForNavigation([options], callback)"),". For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,o.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Using waitForNavigation with a callback prevents a race condition\n// between clicking and waiting for a navigation.\npage.waitForNavigation(() -> { // Waits for the next navigation\n  page.click("div.delayed-navigation"); // Triggers a navigation after a timeout\n});\n')),(0,o.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,o.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-wait-for-navigation"},"Page.waitForNavigation([options], callback)")," to a specific url. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,o.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Running action in the callback of waitForNavigation prevents a race\n// condition between clicking and waiting for a navigation.\npage.waitForNavigation(new Page.WaitForNavigationOptions().setUrl("**/login"), () -> {\n  page.click("a"); // Triggers a navigation with a script redirect\n});\n')),(0,o.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-wait-for-load-state"},"Page.waitForLoadState([state, options])")," ensures that popup is loaded to the desired state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Page popup = page.waitForPopup(() -> {\n  page.click(\"a[target='_blank']\"); // Opens popup\n});\npopup.waitForLoadState(LoadState.LOAD);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-click"},"Page.click(selector[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-wait-for-load-state"},"Page.waitForLoadState([state, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-wait-for-navigation"},"Page.waitForNavigation([options], callback)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-wait-for-function"},"Page.waitForFunction(expression[, arg, options])"))),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,o.kt)("p",null,"For pages that have complicated loading patterns, ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page#page-wait-for-function"},"Page.waitForFunction(expression[, arg, options])")," is a powerful and extensible approach to define a custom wait criteria."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.navigate("http://example.com");\npage.waitForFunction("() => window.amILoadedYet()");\n// Ready to take a screenshot, according to the page itself.\npage.screenshot();\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-wait-for-function"},"Page.waitForFunction(expression[, arg, options])"))))}d.isMDXComponent=!0}}]);