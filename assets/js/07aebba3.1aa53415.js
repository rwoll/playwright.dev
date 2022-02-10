"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[28356],{35178:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),l={id:"network",title:"Network"},i=void 0,p={unversionedId:"network",id:"version-1.18/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.18/network.mdx",sourceDirName:".",slug:"/network",permalink:"/docs/network",tags:[],version:"1.18",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.18/docs",previous:{title:"Navigations",permalink:"/docs/navigations"},next:{title:"Pages",permalink:"/docs/pages"}},u=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"HTTP Proxy",id:"http-proxy",children:[],level:2},{value:"Network events",id:"network-events",children:[{value:"Variations",id:"variations",children:[],level:4},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handle requests",id:"handle-requests",children:[{value:"Variations",id:"variations-1",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Modify requests",id:"modify-requests",children:[],level:2},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Modify responses",id:"modify-responses",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-responses"},"Modify responses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const context = await browser.newContext({\n  httpCredentials: {\n    username: 'bill',\n    password: 'pa55w0rd',\n  },\n});\nconst page = await context.newPage();\nawait page.goto('https://example.com');\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch({\n  proxy: {\n    server: 'http://myproxy.com:3128',\n    username: 'usr',\n    password: 'pwd'\n  }\n});\n")),(0,o.kt)("p",null,"When specifying proxy for each context individually, ",(0,o.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch({\n  // Browser proxy option is required for Chromium on Windows.\n  proxy: { server: 'per-context' }\n});\nconst context = await browser.newContext({\n  proxy: { server: 'http://myproxy.com:3128' }\n})\n")),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium, webkit, firefox } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n\n  // Subscribe to 'request' and 'response' events.\n  page.on('request', request =>\n      console.log('>>', request.method(), request.url()));\n  page.on('response', response =>\n      console.log('<<', response.status(), response.url()));\n  await page.goto('https://example.com');\n\n  await browser.close();\n})();\n")),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Use a glob URL pattern\nconst [response] = await Promise.all([\n  page.waitForResponse('**/api/fetch_data'),\n  page.click('button#update'),\n]);\n")),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Use a RegExp\nconst [response] = await Promise.all([\n  page.waitForResponse(/\\.jpeg$/),\n  page.click('button#update'),\n]);\n\n// Use a predicate taking a Response object\nconst [response] = await Promise.all([\n  page.waitForResponse(response => response.url().includes(token)),\n  page.click('button#update'),\n]);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-event-request"},"page.on('request')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-event-response"},"page.on('response')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-wait-for-request"},"page.waitForRequest(urlOrPredicate[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-wait-for-response"},"page.waitForResponse(urlOrPredicate[, options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.route('**/api/fetch_data', route => route.fulfill({\n  status: 200,\n  body: testData,\n}));\nawait page.goto('https://example.com');\n")),(0,o.kt)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Set up route on the entire browser context.\n// It will apply to popup windows and opened links.\n\nawait browserContext.route('**/api/login', route => route.fulfill({\n  status: 200,\n  body: 'accept',\n}));\nawait page.goto('https://example.com');\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-route"},"browserContext.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-unroute"},"browserContext.unroute(url[, handler])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-route"},"page.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-unroute"},"page.unroute(url[, handler])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Delete header\nawait page.route('**/*', route => {\n  const headers = route.request().headers();\n  delete headers['X-Secret'];\n  route.continue({headers});\n});\n\n// Continue requests as POST.\nawait page.route('**/*', route => route.continue({method: 'POST'}));\n")),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.route('**/*.{png,jpg,jpeg}', route => route.abort());\n\n// Abort based on the request type\nawait page.route('**/*', route => {\n  return route.request().resourceType() === 'image' ?\n      route.abort() : route.continue();\n});\n")),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-route"},"page.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-route"},"browserContext.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-route#route-abort"},"route.abort([errorCode])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-responses"},"Modify responses"),(0,o.kt)("p",null,"To modify a response use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," to get original response and then pass the response to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-route#route-fulfill"},"route.fulfill([options])"),". You can override individual fields on the reponse via options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.route('**/title.html', async route => {\n  // Fetch original response.\n  const response = await page.request.fetch(route.request());\n  // Add a prefix to the title.\n  let body = await response.text();\n  body = body.replace('<title>', '<title>My prefix:');\n  route.fulfill({\n    // Pass all fields from the response.\n    response,\n    // Override response body.\n    body,\n    // Force content type to be html.\n    headers: {\n      ...response.headers(),\n      'content-type': 'text/html'\n    }\n  });\n});\n")),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-route"},"page.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-route"},"browserContext.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-request"},"playwright.request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-request"},"browserContext.request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-request"},"page.request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-route#route-fulfill"},"route.fulfill([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-event-web-socket"},"page.on('websocket')")," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('websocket', ws => {\n  console.log(`WebSocket opened: ${ws.url()}>`);\n  ws.on('framesent', event => console.log(event.payload));\n  ws.on('framereceived', event => console.log(event.payload));\n  ws.on('close', () => console.log('WebSocket closed'));\n});\n")),(0,o.kt)("h3",{id:"api-reference-5"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-event-web-socket"},"page.on('websocket')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-websocket#web-socket-event-frame-sent"},"webSocket.on('framesent')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-websocket#web-socket-event-frame-received"},"webSocket.on('framereceived')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-websocket#web-socket-event-close"},"webSocket.on('close')"))),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);