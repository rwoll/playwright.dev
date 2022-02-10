"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[84746],{14290:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=s(87462),a=s(63366),i=(s(67294),s(3905)),o=(s(26396),s(58215),["components"]),l={id:"class-cdpsession",title:"CDPSession"},r=void 0,c={unversionedId:"api/class-cdpsession",id:"version-1.16/api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.16/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/docs/1.16/api/class-cdpsession",tags:[],version:"1.16",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"version-1.16/api",previous:{title:"BrowserType",permalink:"/docs/1.16/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/docs/1.16/api/class-consolemessage"}},d=[{value:"cdpSession.detach()",id:"cdp-session-detach",children:[],level:2},{value:"cdpSession.send(method, params)",id:"cdp-session-send",children:[],level:2}],p={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"extends: ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/events.html#events_class_eventemitter",title:"EventEmitter"},"EventEmitter"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,i.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,i.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,i.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,i.kt)("p",null,"Useful links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,i.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer"),"."),(0,i.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const client = await page.context().newCDPSession(page);\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-cdpsession#cdp-session-detach"},"cdpSession.detach()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-cdpsession#cdp-session-send"},"cdpSession.send(method[, params])"))),(0,i.kt)("h2",{id:"cdp-session-detach"},"cdpSession.detach()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,i.kt)("h2",{id:"cdp-session-send"},"cdpSession.send(method","[, params]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-method"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," protocol method name",(0,i.kt)("a",{href:"#cdp-session-send-option-method",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-params"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Optional method parameters",(0,i.kt)("a",{href:"#cdp-session-send-option-params",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,i.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}m.isMDXComponent=!0}}]);