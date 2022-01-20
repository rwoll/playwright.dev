"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4190],{6181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(87462),r=n(63366),s=(n(67294),n(3905)),o=(n(26396),n(58215),["components"]),a={id:"troubleshooting",title:"Troubleshooting"},l=void 0,u={unversionedId:"troubleshooting",id:"version-1.16/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Browser dependencies",source:"@site/versioned_docs/version-1.16/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/1.16/troubleshooting",tags:[],version:"1.16",frontMatter:{id:"troubleshooting",title:"Troubleshooting"}},d=[{value:"Browser dependencies",id:"browser-dependencies",children:[],level:2},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[],level:2},{value:"Node.js requirements",id:"nodejs-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#browser-dependencies"},"Browser dependencies")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#code-transpilation-issues"},"Code transpilation issues")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#nodejs-requirements"},"Node.js requirements")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#please-file-an-issue"},"Please file an issue"))),(0,s.kt)("h2",{id:"browser-dependencies"},"Browser dependencies"),(0,s.kt)("p",null,"Playwright does self-inspection every time it runs to make sure the browsers can be launched successfully. If there are missing dependencies, playwright will print instructions to acquire them."),(0,s.kt)("p",null,"See also in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.16/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."),(0,s.kt)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),(0,s.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",(0,s.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright")," uses ",(0,s.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright"),"."),(0,s.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",(0,s.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")),(0,s.kt)("h2",{id:"nodejs-requirements"},"Node.js requirements"),(0,s.kt)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),(0,s.kt)("p",null,"Playwright requires Node.js 12 or higher. Node.js 8 is not supported, and will cause you to receive this error."),(0,s.kt)("h1",{id:"please-file-an-issue"},"Please file an issue"),(0,s.kt)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}p.isMDXComponent=!0}}]);