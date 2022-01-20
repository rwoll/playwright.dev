"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6999],{4286:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=(a(6396),a(8215),["components"]),i={id:"core-concepts",title:"Core concepts"},s=void 0,c={unversionedId:"core-concepts",id:"version-1.16/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.16/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/java/docs/1.16/core-concepts",tags:[],version:"1.16",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"version-1.16/docs",previous:{title:"Browsers",permalink:"/java/docs/1.16/browsers"},next:{title:"Dialogs",permalink:"/java/docs/1.16/dialogs"}},p=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Selectors",id:"selectors",children:[],level:2},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[],level:2},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),(0,l.kt)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#browser"},"Browser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#browser-contexts"},"Browser contexts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pages-and-frames"},"Pages and frames")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectors"},"Selectors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#auto-waiting"},"Auto-waiting")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#evaluation-argument"},"Evaluation Argument"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"browser"},"Browser"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-browser",title:"Browser"},"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headed mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      browser.close();\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-browser",title:"Browser"},"Browser"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"browser-contexts"},"Browser contexts"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\nPage page = context.newPage();\n")),(0,l.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType devices = playwright.devices();\n      BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n        .setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1")\n        .setViewportSize(375, 812)\n        .setDeviceScaleFactor(3)\n        .setIsMobile(true)\n        .setHasTouch(true)\n        .setPermissions(Arrays.asList("geolocation"))\n        .setGeolocation(52.52, 13.39)\n        .setColorScheme(ColorScheme.DARK)\n        .setLocale("de-DE"));\n      Page page = context.newPage();\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-browsercontext#browser-context-new-page"},"BrowserContext.newPage()"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"pages-and-frames"},"Pages and frames"),(0,l.kt)("p",null,"A Browser context can have multiple pages. A ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Create a page.\nPage page = context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\npage.navigate("http://example.com");\n// Fill an input.\npage.fill("#search", "query");\n\n// Navigate implicitly by clicking a link.\npage.click("#submit");\n// Expect a new url.\nSystem.out.println(page.url());\n\n// Page can navigate from the script - this will be picked up by Playwright.\n// window.location.href = "https://example.com";\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Read more on ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/navigations"},"page navigation and loading"),".")),(0,l.kt)("p",null,"A page can have one or more ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,l.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,l.kt)("p",null,"A page can have additional frames attached with the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Get frame using the frame"s name attribute\nFrame frame = page.frame("frame-login");\n\n// Get frame using frame"s URL\nFrame frame = page.frameByUrl(Pattern.compile(".*domain.*"));\n\n// Get frame using any other selector\nElementHandle frameElementHandle = page.querySelector(".frame-class");\nFrame frame = frameElementHandle.contentFrame();\n\n// Interact with the frame\nframe.fill("#username-input", "John");\n')),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-frame",title:"Frame"},"Frame")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-page#page-frame"},"Page.frame(name)"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"selectors"},"Selectors"),(0,l.kt)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),(0,l.kt)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),(0,l.kt)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),(0,l.kt)("p",null,"Learn more about selectors and selector engines ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/selectors"},"here"),"."),(0,l.kt)("p",null,"Some examples below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Using data-test-id= selector engine\npage.click("data-test-id=foo");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// CSS and XPath selector engines are automatically detected\npage.click("div");\npage.click("//html/body/div");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Find node by text substring\npage.click("text=Hello w");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Explicit CSS and XPath notation\npage.click("css=div");\npage.click("xpath=//html/body/div");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Only search light DOM, outside WebComponent shadow DOM:\npage.click("css:light=div");\n')),(0,l.kt)("p",null,"Selectors using the same or different engines can be combined using the ",(0,l.kt)("inlineCode",{parentName:"p"},">>")," separator. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Click an element with text "Sign Up" inside of a #free-month-promo.\npage.click("#free-month-promo >> text=Sign Up");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Capture textContent of a section that contains an element with text "Selectors".\nString sectionText = (String) page.evalOnSelector("*css=section >> text=Selectors", "e => e.textContent");\n')),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"auto-waiting"},"Auto-waiting"),(0,l.kt)("p",null,"Actions like ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page#page-click"},"Page.click(selector[, options])")," and ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page#page-fill"},"Page.fill(selector, value[, options])")," auto-wait for the element to be visible and ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/actionability"},"actionable"),". For example, click will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),(0,l.kt)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",(0,l.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,l.kt)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),(0,l.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,l.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),(0,l.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Playwright waits for #search element to be in the DOM\npage.fill("#search", "query");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Playwright waits for element to stop animating\n// and accept clicks.\npage.click("#search");\n')),(0,l.kt)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Wait for #search to appear in the DOM.\npage.waitForSelector("#search", new Page.WaitForSelectorOptions()\n  .setState(WaitForSelectorState.ATTACHED));\n// Wait for #promo to become visible, for example with "visibility:visible".\npage.waitForSelector("#promo");\n')),(0,l.kt)("p",null,"... or to become hidden or detached"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Wait for #details to become hidden, for example with "display:none".\npage.waitForSelector("#details", new Page.WaitForSelectorOptions()\n  .setState(WaitForSelectorState.HIDDEN));\n// Wait for #promo to be removed from the DOM.\npage.waitForSelector("#promo", new Page.WaitForSelectorOptions()\n  .setState(WaitForSelectorState.DETACHED));\n')),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-page#page-click"},"Page.click(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-page#page-fill"},"Page.fill(selector, value[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-page#page-wait-for-selector"},"Page.waitForSelector(selector[, options])"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),(0,l.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String href = (String) page.evaluate("document.location.href");\n')),(0,l.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'int status = (int) page.evaluate("async () => {\\n" +\n  "  const response = await fetch(location.href);\\n" +\n  "  return response.status;\\n" +\n  "}");\n')),(0,l.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,l.kt)("p",null,"Playwright evaluation methods like ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// A primitive value.\npage.evaluate("num => num", 42);\n\n// An array.\npage.evaluate("array => array.length", Arrays.asList(1, 2, 3));\n\n// An object.\nMap<String, Object> obj = new HashMap<>();\nobj.put("foo", "bar");\npage.evaluate("object => object.foo", obj);\n\n// A single handle.\nElementHandle button = page.querySelector("button");\npage.evaluate("button => button.textContent", button);\n\n// Alternative notation using elementHandle.evaluate.\nbutton.evaluate("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nElementHandle button1 = page.querySelector(".button1");\nElementHandle button2 = page.querySelector(".button2");\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("o => o.button1.textContent + o.button2.textContent", arg);\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("({ button1, button2 }) => button1.textContent + button2.textContent", arg);\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\npage.evaluate(\n  "([b1, b2]) => b1.textContent + b2.textContent",\n  Arrays.asList(button1, button2));\n\n// Any non-cyclic mix of serializables and handles works.\nMap<String, Object> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("list", Arrays.asList(button2));\narg.put("foo", 0);\npage.evaluate(\n  "x => x.button1.textContent + x.list[0].textContent + String(x.foo)",\n  arg);\n')),(0,l.kt)("p",null,"Right:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\n// Pass |data| as a parameter.\nObject result = page.evaluate("data => {\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}", data);\n')),(0,l.kt)("p",null,"Wrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\nObject result = page.evaluate("() => {\\n" +\n  "  // There is no |data| in the web page.\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}");\n')),(0,l.kt)("h3",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-frame#frame-evaluate"},"Frame.evaluate(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.16/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"))),(0,l.kt)("br",null))}m.isMDXComponent=!0}}]);