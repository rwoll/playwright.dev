"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3206],{9568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=(n(6396),n(8215),["components"]),l={id:"intro",title:"Getting started"},o=void 0,d={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"- First project",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/dotnet/docs/next/intro",tags:[],version:"current",frontMatter:{id:"intro",title:"Getting started"},sidebar:"docs",next:{title:"Inspector",permalink:"/dotnet/docs/next/inspector"}},c=[{value:"First project",id:"first-project",children:[],level:2},{value:"First test",id:"first-test",children:[],level:2},{value:"Record scripts",id:"record-scripts",children:[],level:2},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"macOS",id:"macos",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#first-project"},"First project")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#first-test"},"First test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/next/release-notes"},"Release notes"))),(0,s.kt)("h2",{id:"first-project"},"First project"),(0,s.kt)("p",null,"Create a console project and add the Playwright dependency."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Create project\ndotnet new console -n PlaywrightDemo\ncd PlaywrightDemo\n\n# Add project dependency\ndotnet add package Microsoft.Playwright\n# Build the project\ndotnet build\n# Install required browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,s.kt)("p",null,"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"Program.cs")," that will navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://playwright.dev/dotnet")," and take a screenshot in Chromium."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        await page.GotoAsync("https://playwright.dev/dotnet");\n        await page.ScreenshotAsync(new PageScreenshotOptions { Path = "screenshot.png" });\n    }\n}\n')),(0,s.kt)("p",null,"Now run it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run\n")),(0,s.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"Headless = false")," flag while launching the browser. You can also use ",(0,s.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/next/debug"},"section"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"await playwright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions \n{ \n    Headless = false, \n    SlowMo = 50, \n});\n")),(0,s.kt)("h2",{id:"first-test"},"First test"),(0,s.kt)("p",null,"You can choose to use NUnit test fixtures that come bundled with Playwright. These fixtures support running tests on multiple browser engines in parallel, out of the box. Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/next/test-runners"},"Playwright with NUnit"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Create new project.\ndotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n")),(0,s.kt)("p",null,"Install dependencies, build project and download necessary browsers. This is only done once per project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Add project dependency\ndotnet add package Microsoft.Playwright.NUnit\n# Build the project\ndotnet build\n# Install required browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,s.kt)("p",null,"Edit UnitTest1.cs file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class Tests : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test -- NUnit.NumberOfTestWorkers=5\n")),(0,s.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/next/cli"},"Command line tools")," can be used to record user interactions and generate C# code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 codegen\n")),(0,s.kt)("h2",{id:"system-requirements"},"System requirements"),(0,s.kt)("p",null,"The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,s.kt)("h3",{id:"windows"},"Windows"),(0,s.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,s.kt)("h3",{id:"macos"},"macOS"),(0,s.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,s.kt)("h3",{id:"linux"},"Linux"),(0,s.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,s.kt)("p",null,"See also in the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/next/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}u.isMDXComponent=!0}}]);