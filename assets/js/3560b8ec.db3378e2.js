"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5328],{75858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=(n(26396),n(58215),["components"]),s={id:"assertions",title:"Assertions"},o=void 0,c={unversionedId:"assertions",id:"version-1.17/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.17/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/docs/1.17/assertions",tags:[],version:"1.17",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.17/docs",previous:{title:"Auto-waiting",permalink:"/docs/1.17/actionability"},next:{title:"Authentication",permalink:"/docs/1.17/auth"}},p=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,i.kt)("h2",{id:"text-content"},"Text content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.textContent('nav:first-child');\nexpect(content).toBe('home');\n")),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-text-content"},"page.textContent(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-elementhandle#element-handle-text-content"},"elementHandle.textContent()"))),(0,i.kt)("h2",{id:"inner-text"},"Inner text"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const text = await page.innerText('.selected');\nexpect(text).toBe('value');\n")),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-inner-text"},"page.innerText(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-elementhandle#element-handle-inner-text"},"elementHandle.innerText()"))),(0,i.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const alt = await page.getAttribute('input', 'alt');\nexpect(alt).toBe('Text');\n")),(0,i.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const checked = await page.isChecked('input');\nexpect(checked).toBeTruthy();\n")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-is-checked"},"page.isChecked(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-elementhandle#element-handle-is-checked"},"elementHandle.isChecked()"))),(0,i.kt)("h2",{id:"js-expression"},"JS expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.locator('nav:first-child').textContent();\nexpect(content).toBe('home');\n")),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-eval-on-selector"},"page.$eval(selector, pageFunction[, arg, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-jshandle#js-handle-evaluate"},"jsHandle.evaluate(pageFunction[, arg])"))),(0,i.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const html = await page.innerHTML('div.result');\nexpect(html).toBe('<p>Result</p>');\n")),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-inner-html"},"page.innerHTML(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-elementhandle#element-handle-inner-html"},"elementHandle.innerHTML()"))),(0,i.kt)("h2",{id:"visibility"},"Visibility"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const visible = await page.isVisible('input');\nexpect(visible).toBeTruthy();\n")),(0,i.kt)("h3",{id:"api-reference-5"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-is-visible"},"page.isVisible(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-elementhandle#element-handle-is-visible"},"elementHandle.isVisible()"))),(0,i.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const enabled = await page.isEnabled('input');\nexpect(enabled).toBeTruthy();\n")),(0,i.kt)("h3",{id:"api-reference-6"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-is-enabled"},"page.isEnabled(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-elementhandle#element-handle-is-enabled"},"elementHandle.isEnabled()"))),(0,i.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,i.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nexpect(userId).toBeTruthy();\n\n// Assert value for input element\nconst value = await page.locator('#search').inputValue();\nexpect(value === 'query').toBeTruthy();\n\n// Assert computed style\nconst fontSize = await page.locator('div').evaluate(el => window.getComputedStyle(el).fontSize);\nexpect(fontSize === '16px').toBeTruthy();\n\n// Assert list length\nconst length = await page.locator('li.selected').count();\nexpect(length === 3).toBeTruthy();\n")))}d.isMDXComponent=!0}}]);