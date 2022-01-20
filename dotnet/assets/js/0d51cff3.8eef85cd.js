"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[573],{4508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),r=(n(6396),n(8215),["components"]),o={id:"events",title:"Events"},l=void 0,p={unversionedId:"events",id:"version-1.18/events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.18/events.mdx",sourceDirName:".",slug:"/events",permalink:"/dotnet/docs/events",tags:[],version:"1.18",frontMatter:{id:"events",title:"Events"},sidebar:"version-1.18/docs",previous:{title:"Evaluating JavaScript",permalink:"/dotnet/docs/evaluating"},next:{title:"Extensibility",permalink:"/dotnet/docs/extensibility"}},u=[{value:"Waiting for event",id:"waiting-for-event",children:[],level:2},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener"))),(0,s.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,s.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,s.kt)("p",null,"Wait for a request with the specified url:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var waitForRequestTask = page.WaitForRequestAsync("**/*logo*.png");\nawait page.GotoAsync("https://wikipedia.org");\nvar request = await waitForRequestTask;\nConsole.WriteLine(request.Url);\n')),(0,s.kt)("p",null,"Wait for popup window:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async =>\n{\n    await page.EvaluateAsync("window.open()");\n});\nawait popup.GotoAsync("https://wikipedia.org");\n')),(0,s.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,s.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Request += (_, request) => Console.WriteLine("Request sent: " + request.Url);\nvoid listener(object sender, IRequest request)\n{\n    Console.WriteLine("Request finished: " + request.Url);\n};\npage.RequestFinished += listener;\nawait page.GotoAsync("https://wikipedia.org");\n\n// Remove previously added listener.\npage.RequestFinished -= listener;\nawait page.GotoAsync("https://www.openstreetmap.org/");\n')))}c.isMDXComponent=!0}}]);