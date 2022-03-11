"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5103],{99406:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),s={id:"verification",title:"Verification"},o=void 0,p={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"We recommend Web-First Assertions that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests.",source:"@site/docs/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/java/docs/next/verification",tags:[],version:"current",frontMatter:{id:"verification",title:"Verification"}},c=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Text content",id:"text-content-1",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[],level:2},{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference-7",children:[],level:3}],level:2},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-8",children:[],level:3}],level:2},{value:"Page events",id:"page-events",children:[{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",children:[],level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",children:[],level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",children:[],level:4},{value:"API reference",id:"api-reference-9",children:[],level:3}],level:2}],u={toc:c};function d(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend ",(0,r.kt)("a",{parentName:"p",href:"./test-assertions"},"Web-First Assertions")," that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String content = page.locator("nav:first-child").textContent();\nassertEquals("home", content);\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-text-content"},"Page.textContent(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-text-content"},"ElementHandle.textContent()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String text = page.locator(".selected").innerText();\nassertEquals("value", text);\n')),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-inner-text"},"Page.innerText(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.innerText()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String alt = page.locator("input").getAttribute("alt");\nassertEquals("Text", alt);\n')),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean checked = page.locator("input").isChecked();\nassertTrue(checked);\n')),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-is-checked"},"Page.isChecked(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.isChecked()"))),(0,r.kt)("h2",{id:"text-content-1"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object content = page.locator("nav:first-child").textContent();\nassertEquals("home", content);\n')),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-eval-on-selector"},"Page.evalOnSelector(selector, expression[, arg, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-evaluate"},"JSHandle.evaluate(expression[, arg])"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String html = page.locator("div.result").innerHTML();\nassertEquals("<p>Result</p>", html);\n')),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-inner-html"},"Page.innerHTML(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.innerHTML()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean visible = page.locator("input").isVisible();\nassertTrue(visible);\n')),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-is-visible"},"Page.isVisible(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.isVisible()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean enabled = page.locator("input").isEnabled();\nassertTrue(enabled);\n')),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-is-enabled"},"Page.isEnabled(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.isEnabled()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Assert local storage value\nObject userId = page.evaluate("() => window.localStorage.getItem(\'userId\')");\nassertNotNull(userId);\n\n// Assert value for input element\nObject value = page.locator("#search").inputValue();\nassertEquals("query", value);\n\n// Assert computed style\nObject fontSize = page.locator("div").evaluate("el => window.getComputedStyle(el).fontSize");\nassertEquals("16px", fontSize);\n\n// Assert list length\nObject length = page.locator("li.selected").count();\nassertEquals(3, length);\n')),(0,r.kt)("h2",{id:"console-logs"},"Console logs"),(0,r.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Listen for all System.out.printlns\npage.onConsoleMessage(msg -> System.out.println(msg.text()));\n\n// Listen for all console events and handle errors\npage.onConsoleMessage(msg -> {\n  if ("error".equals(msg.type()))\n    System.out.println("Error text: " + msg.text());\n});\n\n// Get the next System.out.println\nConsoleMessage msg = page.waitForConsoleMessage(() -> {\n  // Issue console.log inside the page\n  page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' });");\n});\n\n// Deconstruct console.log arguments\nmsg.args().get(0).jsonValue() // hello\nmsg.args().get(1).jsonValue() // 42\n')),(0,r.kt)("h3",{id:"api-reference-7"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-console"},"Page.onConsoleMessage(handler)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-errors"},"Page errors"),(0,r.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Log all uncaught errors to the terminal\npage.onPageError(exception -> {\n  System.out.println("Uncaught exception: " + exception);\n});\n\n// Navigate to a page with an exception.\npage.navigate("data:text/html,<script>throw new Error(\'Test\')<\/script>");\n')),(0,r.kt)("h3",{id:"api-reference-8"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-page-error"},"Page.onPageError(handler)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-events"},"Page events"),(0,r.kt)("h4",{id:"requestfailed"},(0,r.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequestFailed(request -> {\n  System.out.println(request.url() + " " + request.failure());\n});\n')),(0,r.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,r.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"page.onDialog(dialog -> {\n  dialog.accept();\n});\n")),(0,r.kt)("h4",{id:"popup---handle-popup-windows"},(0,r.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Page popup = page.waitForPopup(() -> {\n  page.click("#open");\n});\n')),(0,r.kt)("h3",{id:"api-reference-9"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-request-failed"},"Page.onRequestFailed(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-dialog"},"Page.onDialog(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-popup"},"Page.onPopup(handler)"))))}d.isMDXComponent=!0}}]);