"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1874],{3539:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return d},default:function(){return m}});var n=t(7462),i=t(3366),l=(t(7294),t(3905)),o=t(6396),p=t(8215),r=["components"],s={id:"navigations",title:"Navigations"},c=void 0,g={unversionedId:"navigations",id:"version-1.17/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.17/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/python/docs/1.17/navigations",tags:[],version:"1.17",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.17/docs",previous:{title:"Input",permalink:"/python/docs/1.17/input"},next:{title:"Network",permalink:"/python/docs/1.17/network"}},d=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[],level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[],level:3},{value:"Custom wait",id:"custom-wait",children:[],level:3},{value:"Wait for element",id:"wait-for-element",children:[],level:3},{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[],level:3},{value:"Custom wait",id:"custom-wait-1",children:[],level:3},{value:"Wait for element",id:"wait-for-element-1",children:[],level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[],level:3},{value:"Multiple navigations",id:"multiple-navigations",children:[],level:3},{value:"Loading a popup",id:"loading-a-popup",children:[],level:3},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],u={toc:d};function m(e){var a=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,l.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,l.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,l.kt)("strong",{parentName:"p"},"navigation")," and ",(0,l.kt)("strong",{parentName:"p"},"loading"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,l.kt)("strong",{parentName:"p"},"loading")," the document."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-url"},"page.url")," is set to the new url"),(0,l.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-event-dom-content-loaded"},'page.on("domcontentloaded")')," event is fired"),(0,l.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-event-load"},'page.on("load")')," event is fired"),(0,l.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,l.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,l.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,l.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,l.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,l.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,l.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-goto"},"page.goto(url, **kwargs)")," will auto-wait for the redirected page to fire the ",(0,l.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate the page\npage.goto("https://example.com")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate the page\nawait page.goto("https://example.com")\n')))),(0,l.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,l.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,l.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait until network is idle\npage.goto("https://example.com", wait_until="networkidle")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait until network is idle\nawait page.goto("https://example.com", wait_until="networkidle")\n')))),(0,l.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,l.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-locator#locator-wait-for"},"locator.wait_for(**kwargs)"),". Alternatively, page interactions like ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-click"},"page.click(selector, **kwargs)")," auto-wait for elements."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait for element\npage.goto("https://example.com")\npage.locator("text=example domain").wait_for()\n\n# Navigate and click element\n# Click will auto-wait for the element\npage.goto("https://example.com")\npage.click("text=example domain")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait for element\nawait page.goto("https://example.com")\nawait page.locator("text=example domain").wait_for()\n\n# Navigate and click element\n# Click will auto-wait for the element\nawait page.goto("https://example.com")\nawait page.click("text=example domain")\n')))),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-goto"},"page.goto(url, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-reload"},"page.reload(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-go-back"},"page.go_back(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-go-forward"},"page.go_forward(**kwargs)"))),(0,l.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,l.kt)("p",null,"In the scenarios below, ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-click"},"page.click(selector, **kwargs)")," initiates a navigation and then waits for the navigation to complete."),(0,l.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-click"},"page.click(selector, **kwargs)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Click will auto-wait for navigation to complete\npage.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\npage.fill("#username", "John Doe")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Click will auto-wait for navigation to complete\nawait page.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\nawait page.fill("#username", "John Doe")\n')))),(0,l.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-wait-for-load-state"},"page.wait_for_load_state(**kwargs)")," to wait for a loading event."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.click("button"); # Click triggers navigation\npage.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.click("button"); # Click triggers navigation\nawait page.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n')))),(0,l.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,l.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-locator#locator-wait-for"},"locator.wait_for(**kwargs)"),". Alternatively, page interactions like ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-click"},"page.click(selector, **kwargs)")," auto-wait for elements."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Click triggers navigation\npage.click("text=Login")\n# Click will auto-wait for the element\npage.locator("#username").wait_for()\n\n# Click triggers navigation\npage.click("text=Login")\n# Fill will auto-wait for element\npage.fill("#username", "John Doe")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Click will auto-wait for the element and trigger navigation\nawait page.click("text=Login")\n# Wait for the element\nawait page.locator("#username").wait_for()\n\n# Click triggers navigation\nawait page.click("text=Login")\n# Fill will auto-wait for element\nawait page.fill("#username", "John Doe")\n')))),(0,l.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,l.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-wait-for-navigation"},"page.expect_navigation(**kwargs)"),". For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,l.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,l.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nwith page.expect_navigation():\n    # Triggers a navigation after a timeout\n    page.click("a")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nasync with page.expect_navigation():\n    # Triggers a navigation after a timeout\n    await page.click("div.delayed-navigation")\n')))),(0,l.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,l.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-wait-for-navigation"},"page.expect_navigation(**kwargs)")," to a specific url. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,l.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,l.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nwith page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    page.click("a")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nasync with page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    await page.click("a")\n')))),(0,l.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,l.kt)("p",null,"When popup is opened, explicitly calling ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-wait-for-load-state"},"page.wait_for_load_state(**kwargs)")," ensures that popup is loaded to the desired state."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_popup() as popup_info:\n    page.click(\'a[target="_blank"]\') # Opens popup\npopup = popup_info.value\npopup.wait_for_load_state("load")\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_popup() as popup_info:\n    await page.click(\'a[target="_blank"]\') # Opens popup\npopup = await popup_info.value\nawait popup.wait_for_load_state("load")\n')))),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-click"},"page.click(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-wait-for-load-state"},"page.wait_for_load_state(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-wait-for-navigation"},"page.expect_navigation(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-wait-for-function"},"page.wait_for_function(expression, **kwargs)"))),(0,l.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,l.kt)("p",null,"For pages that have complicated loading patterns, ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-page#page-wait-for-function"},"page.wait_for_function(expression, **kwargs)")," is a powerful and extensible approach to define a custom wait criteria."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.goto("http://example.com")\npage.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\npage.screenshot()\n'))),(0,l.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.goto("http://example.com")\nawait page.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\nawait page.screenshot()\n')))),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-page#page-wait-for-function"},"page.wait_for_function(expression, **kwargs)"))))}m.isMDXComponent=!0}}]);