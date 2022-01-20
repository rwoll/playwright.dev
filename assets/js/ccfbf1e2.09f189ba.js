"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9157],{56139:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=(n(26396),n(58215),["components"]),s={id:"extensibility",title:"Extensibility"},l=void 0,c={unversionedId:"extensibility",id:"version-1.16/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.16/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/docs/1.16/extensibility",tags:[],version:"1.16",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.16/docs",previous:{title:"Events",permalink:"/docs/1.16/events"},next:{title:"Handles",permalink:"/docs/1.16/handles"}},u=[{value:"Custom selector engines",id:"custom-selector-engines",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,r.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,r.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-selectors#selectors-register"},"selectors.register(name, script[, options])"),"."),(0,r.kt)("p",null,"Selector engine should have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,r.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,r.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,r.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,r.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Must be a function that evaluates to a selector engine instance.\nconst createTagNameEngine = () => ({\n  // Returns the first element matching given selector in the root's subtree.\n  query(root, selector) {\n    return root.querySelector(selector);\n  },\n\n  // Returns all elements matching given selector in the root's subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n});\n\n// Register the engine. Selectors will be prefixed with \"tag=\".\nawait selectors.register('tag', createTagNameEngine);\n\n// Now we can use 'tag=' selectors.\nconst button = await page.$('tag=button');\n\n// We can combine it with other selector engines using `>>` combinator.\nawait page.click('tag=div >> span >> \"Click me\"');\n\n// We can use it in any methods supporting selectors.\nconst buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n")))}m.isMDXComponent=!0}}]);