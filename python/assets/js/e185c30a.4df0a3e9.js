"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7868],{1324:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return c},contentTitle:function(){return r},metadata:function(){return g},toc:function(){return u},default:function(){return k}});var t=n(7462),p=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),s=["components"],c={id:"pages",title:"Pages"},r=void 0,g={unversionedId:"pages",id:"pages",isDocsHomePage:!1,title:"Pages",description:"- Pages",source:"@site/docs/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/python/docs/next/pages",tags:[],version:"current",frontMatter:{id:"pages",title:"Pages"},sidebar:"docs",previous:{title:"Network",permalink:"/python/docs/next/network"},next:{title:"Page Object Models",permalink:"/python/docs/next/pom"}},u=[{value:"Pages",id:"pages",children:[],level:2},{value:"Multiple pages",id:"multiple-pages",children:[],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[],level:2},{value:"Handling popups",id:"handling-popups",children:[],level:2}],d={toc:u};function k(e){var a=e.components,n=(0,p.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pages"},"Pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,l.kt)("h2",{id:"pages"},"Pages"),(0,l.kt)("p",null,"Each ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," can have multiple pages. A ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"page = context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\npage.goto('http://example.com')\n# Fill an input.\npage.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\npage.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n"))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"page = await context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com')\n# Fill an input.\nawait page.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\nawait page.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n")))),(0,l.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,l.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,l.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n"))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n")))),(0,l.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,l.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = new_page_info.value\n\nnew_page.wait_for_load_state()\nprint(new_page.title())\n"))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = await new_page_info.value\n\nawait new_page.wait_for_load_state()\nprint(await new_page.title())\n")))),(0,l.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n')))),(0,l.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,l.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,l.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,l.kt)("p",null,"This event is emitted in addition to the ",(0,l.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n\npopup.wait_for_load_state()\nprint(popup.title())\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n\nawait popup.wait_for_load_state()\nprint(await popup.title())\n')))),(0,l.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n')))))}k.isMDXComponent=!0}}]);