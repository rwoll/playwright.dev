(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(151)),o=(n(154),n(155),{id:"intro",title:"Getting Started"}),c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/docs/intro.mdx",slug:"/intro",permalink:"/java/docs/intro",version:"current",sidebar:"docs",previous:{title:"Why Playwright?",permalink:"/java/docs/why-playwright"},next:{title:"Core concepts",permalink:"/java/docs/core-concepts"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"System requirements",id:"system-requirements",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/release-notes"}),"Release notes"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Playwright is distributed as a set of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://maven.apache.org/what-is-maven.html"}),"Maven")," modules. The easiest way to use it is to add one dependency to your project's ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml")," as described below. If you're not familiar with Maven please refer to its ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"}),"documentation"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>com.microsoft.playwright</groupId>\n  <artifactId>playwright</artifactId>\n  <version>0.180.0</version>\n</dependency>\n")),Object(i.b)("p",null,"These commands download the Playwright package and install browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/installation"}),"installation parameters"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, you can ",Object(i.b)("inlineCode",{parentName:"p"},"import")," Playwright in a Java file, and launch any of the 3 browsers (",Object(i.b)("inlineCode",{parentName:"p"},"chromium"),", ",Object(i.b)("inlineCode",{parentName:"p"},"firefox")," and ",Object(i.b)("inlineCode",{parentName:"p"},"webkit"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.chromium().launch();\n      Page page = browser.newPage();\n      page.navigate("http://playwright.dev");\n      System.out.println(page.title());\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"first-script"},"First script"),Object(i.b)("p",null,"In our first script, we will navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\nimport java.nio.file.Paths;\n\npublic class WebKitScreenshot {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.webkit().launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().withPath(Paths.get("example.png")));\n    }\n  }\n}\n')),Object(i.b)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"headless=false")," flag while launching the browser. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/debug"}),"section"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"playwright.firefox().launch(new BrowserType.LaunchOptions().withHeadless(false).withSlowMo(50));\n")),Object(i.b)("h2",{id:"system-requirements"},"System requirements"),Object(i.b)("p",null,"Playwright requires ",Object(i.b)("strong",{parentName:"p"},"Java 8")," or newer. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Windows"),": Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"macOS"),": Requires 10.14 or above."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Linux"),": Depending on your Linux distribution, you might need to install additional dependencies to run the browsers.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firefox requires Ubuntu 18.04+"),Object(i.b)("li",{parentName:"ul"},"For Ubuntu 18.04, the additional dependencies are defined in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"our Docker image"),", which is based on Ubuntu.")))))}b.isMDXComponent=!0},150:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";var r=n(0),a=n(153);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},153:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},154:function(e,t,n){"use strict";n(0),n(152),n(150),n(55)},155:function(e,t,n){"use strict";n(3),n(0)}}]);