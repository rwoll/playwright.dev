"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[94445],{24966:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=(r(26396),r(58215),["components"]),l={id:"class-route",title:"Route"},s=void 0,u={unversionedId:"api/class-route",id:"version-1.17/api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with page.route(url, handler[, options]) or browserContext.route(url, handler[, options]), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.17/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/docs/1.17/api/class-route",tags:[],version:"1.17",frontMatter:{id:"class-route",title:"Route"},sidebar:"version-1.17/api",previous:{title:"Response",permalink:"/docs/1.17/api/class-response"},next:{title:"Selectors",permalink:"/docs/1.17/api/class-selectors"}},p=[{value:"route.abort(errorCode)",id:"route-abort",children:[],level:2},{value:"route.continue(options)",id:"route-continue",children:[],level:2},{value:"route.fulfill(options)",id:"route-fulfill",children:[],level:2},{value:"route.request()",id:"route-request",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whenever a network route is set up with ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-page#page-route"},"page.route(url, handler[, options])")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-browsercontext#browser-context-route"},"browserContext.route(url, handler[, options])"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-route#route-abort"},"route.abort([errorCode])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-route#route-continue"},"route.continue([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-route#route-fulfill"},"route.fulfill([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-route#route-request"},"route.request()"))),(0,i.kt)("h2",{id:"route-abort"},"route.abort(","[errorCode]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errorCode"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional error code. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,i.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Aborts the route's request."),(0,i.kt)("h2",{id:"route-continue"},"route.continue(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,i.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," If set changes the request method (e.g. GET or POST)",(0,i.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postData"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," If set changes the post data of request",(0,i.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,i.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Continues route's request with optional overrides."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.route('**/*', (route, request) => {\n  // Override headers\n  const headers = {\n    ...request.headers(),\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  };\n  route.continue({headers});\n});\n")),(0,i.kt)("h2",{id:"route-fulfill"},"route.fulfill(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"body"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Response body.",(0,i.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contentType"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," If set, equals to setting ",(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,i.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," Response headers. Header values will be converted to a string.",(0,i.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File path to respond with. The content type will be inferred from file extension. If ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,i.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"response"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-response"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-apiresponse",title:"APIResponse"},"APIResponse"),">"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-apiresponse",title:"APIResponse"},"APIResponse")," to fulfill route's request with. Individual fields of the response (such as headers) can be overridden using fulfill options.",(0,i.kt)("a",{href:"#route-fulfill-option-response",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Response status code, defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"200"),".",(0,i.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Fulfills route's request with given response."),(0,i.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.route('**/*', route => {\n  route.fulfill({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!'\n  });\n});\n")),(0,i.kt)("p",null,"An example of serving static file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.route('**/xhr_endpoint', route => route.fulfill({ path: 'mock_data.json' }));\n")),(0,i.kt)("h2",{id:"route-request"},"route.request()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-request",title:"Request"},"Request"),">",(0,i.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"A request to be routed."))}d.isMDXComponent=!0}}]);