"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7882],{3172:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=(a(6396),a(8215),["components"]),o={id:"multithreading",title:"Multithreading"},l=void 0,h={unversionedId:"multithreading",id:"version-1.18/multithreading",isDocsHomePage:!1,title:"Multithreading",description:"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as [BrowserContext], [Browser], [Page] etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread.",source:"@site/versioned_docs/version-1.18/threading.mdx",sourceDirName:".",slug:"/multithreading",permalink:"/java/docs/multithreading",tags:[],version:"1.18",frontMatter:{id:"multithreading",title:"Multithreading"},sidebar:"version-1.18/docs",previous:{title:"Locators",permalink:"/java/docs/locators"},next:{title:"Navigations",permalink:"/java/docs/navigations"}},p=[{value:"Synchronous API and event dispatching",id:"synchronous-api-and-event-dispatching",children:[{value:"Page.waitForTimeout() vs. Thread.sleep()",id:"pagewaitfortimeout-vs-threadsleep",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browser",title:"Browser"},"Browser"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-page",title:"Page"},"Page")," etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread."),(0,i.kt)("p",null,"Here is an example where three playwright instances are created each on its own thread. Each instance launches its own browser process and runs the test against it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.*;\n\nimport java.nio.file.Paths;\n\nimport static java.util.Arrays.asList;\n\npublic class PlaywrightThread extends Thread {\n  private final String browserName;\n\n  private PlaywrightThread(String browserName) {\n    this.browserName = browserName;\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    // Create separate playwright thread for each browser.\n    for (String browserName: asList("chromium", "webkit", "firefox")) {\n      Thread thread = new PlaywrightThread(browserName);\n      thread.start();\n    }\n  }\n\n  @Override\n  public void run() {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType browserType = getBrowserType(playwright, browserName);\n      Browser browser = browserType.launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("user-agent-" + browserName + ".png")));\n    }\n  }\n\n  private static BrowserType getBrowserType(Playwright playwright, String browserName) {\n    switch (browserName) {\n      case "chromium":\n        return playwright.chromium();\n      case "webkit":\n        return playwright.webkit();\n      case "firefox":\n        return playwright.firefox();\n      default:\n        throw new IllegalArgumentException();\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"synchronous-api-and-event-dispatching"},"Synchronous API and event dispatching"),(0,i.kt)("p",null,"In the synchronous Playwright API all events are dispatched only when Playwright is running its message loop. This happens automatically when you call any of the API methods and doesn't happen if there are no active Playwright calls on the stack. If you need to wait for an event the best way to do this is via one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"waitFor*")," methods."),(0,i.kt)("h3",{id:"pagewaitfortimeout-vs-threadsleep"},"Page.waitForTimeout() vs. Thread.sleep()"),(0,i.kt)("p",null,"One consequence of the synchronous API is that if you for whatever reason call ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread.sleep()")," no events will be fired while the thread is sleeping. If you want events from the browser to be dispatched while the program"),(0,i.kt)("p",null,"execution is paused use ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-wait-for-timeout"},"Page.waitForTimeout(timeout)")," or ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-frame#frame-wait-for-timeout"},"Frame.waitForTimeout(timeout)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'page.onResponse(response -> System.out.println(response.url()));\npage.navigate("https://playwright.dev");\nSystem.out.println("-- did navigate --");\n// Block current thread for 60s and ensure the events are dispatched.\npage.waitForTimeout(60_000);\n')))}d.isMDXComponent=!0}}]);