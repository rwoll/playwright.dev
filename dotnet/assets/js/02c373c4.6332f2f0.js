"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9054],{3510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return w}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(6396),n(8215),["components"]),l={id:"emulation",title:"Emulation"},s=void 0,c={unversionedId:"emulation",id:"version-1.17/emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.17/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/dotnet/docs/1.17/emulation",tags:[],version:"1.17",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"version-1.17/docs",previous:{title:"Element selectors",permalink:"/dotnet/docs/1.17/selectors"},next:{title:"Evaluating JavaScript",permalink:"/dotnet/docs/1.17/evaluating"}},p=[{value:"Devices",id:"devices",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2}],u={toc:p};function w(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,i.kt)("li",{parentName:"ul"},"locale, timezone"),(0,i.kt)("li",{parentName:"ul"},"color scheme"),(0,i.kt)("li",{parentName:"ul"},"geolocation")),(0,i.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#devices"},"Devices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#user-agent"},"User agent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#viewport"},"Viewport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#locale--timezone"},"Locale & timezone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#permissions"},"Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#geolocation"},"Geolocation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#color-scheme-and-media"},"Color scheme and media"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"devices"},"Devices"),(0,i.kt)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            Headless: False\n        });\n        var pixel2 = playwright.Devices["Pixel 2"];\n        await using var context = await browser.NewContextAsync(pixel2);\n    }\n}\n')),(0,i.kt)("p",null,"All pages created in the context above will share the same device parameters."),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-playwright#playwright-devices"},"Playwright.Devices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"user-agent"},"User agent"),(0,i.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var context = await browser.NewContextAsync(new BrowserNewContextOptions { UserAgent = "My User Agent" });\n')),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"viewport"},"Viewport"),(0,i.kt)("p",null,"Create a context with custom viewport size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Create context with given viewport\nawait using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    ViewportSize = new ViewportSize() { Width = 1280, Height = 1024 }\n});\n\n// Resize viewport for individual page\nawait page.SetViewportSizeAsync(1600, 1200);\n\n// Emulate high-DPI\nawait using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    ViewportSize = new ViewportSize() { Width = 2560, Height = 1440 },\n    DeviceScaleFactor = 2\n});\n")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-set-viewport-size"},"Page.SetViewportSizeAsync(width, height)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"locale--timezone"},"Locale & timezone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Locale = "de-DE",\n    TimezoneId = "Europe/Berlin"\n});\n')),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,i.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await context.GrantPermissionsAsync(new[] { "geolocation" });\n')),(0,i.kt)("p",null,"Grant notifications access from a specific domain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await context.GrantPermissionsAsync(new[] { "notifications" }, origin: "https://skype.com");\n')),(0,i.kt)("p",null,"Revoke all permissions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await context.ClearPermissionsAsync();\n")),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browsercontext#browser-context-grant-permissions"},"BrowserContext.GrantPermissionsAsync(permissions, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browsercontext#browser-context-clear-permissions"},"BrowserContext.ClearPermissionsAsync()"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"geolocation"},"Geolocation"),(0,i.kt)("p",null,"Create a context with ",(0,i.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Permissions = new[] { "geolocation" },\n    Geolocation = new Geolocation() { Longitude = 48.858455f, Latitude = 2.294474f }\n});\n')),(0,i.kt)("p",null,"Change the location later:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await context.SetGeolocationAsync(new Geolocation() { Longitude = 48.858455f, Latitude = 2.294474f });\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,i.kt)("h3",{id:"api-reference-5"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browsercontext#browser-context-set-geolocation"},"BrowserContext.SetGeolocationAsync(geolocation)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),(0,i.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Create context with dark mode\nawait using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    ColorScheme = ColorScheme.Dark\n});\n\n// Create page with dark mode\nvar page = await browser.NewPageAsync(new BrowserNewPageOptions\n{\n    ColorScheme = ColorScheme.Dark\n});\n\n// Change color scheme for the page\nawait page.EmulateMediaAsync(new PageEmulateMediaOptions\n{\n    ColorScheme = ColorScheme.Dark\n});\n\n// Change media for page\nawait page.EmulateMediaAsync(new PageEmulateMediaOptions\n{\n    Media = Media.Print\n});\n")),(0,i.kt)("h3",{id:"api-reference-6"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-emulate-media"},"Page.EmulateMediaAsync(options)"))))}w.isMDXComponent=!0}}]);