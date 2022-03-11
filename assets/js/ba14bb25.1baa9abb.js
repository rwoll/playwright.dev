"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[19325],{52182:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=a(87462),l=a(63366),n=(a(67294),a(3905)),r=(a(26396),a(58215),["components"]),i={id:"test-assertions",title:"Assertions"},p=void 0,s={unversionedId:"test-assertions",id:"version-1.18/test-assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright Test uses expect library for test assertions. This library provides a lot of matchers like toEqual, toContain, toMatch, toMatchSnapshot and many more:",source:"@site/versioned_docs/version-1.18/test-assertions.mdx",sourceDirName:".",slug:"/test-assertions",permalink:"/docs/1.18/test-assertions",tags:[],version:"1.18",frontMatter:{id:"test-assertions",title:"Assertions"},sidebar:"version-1.18/docs",previous:{title:"API testing",permalink:"/docs/1.18/test-api-testing"},next:{title:"Authentication",permalink:"/docs/1.18/test-auth"}},c=[{value:"Matching",id:"matching",children:[],level:2},{value:"expect(locator).toBeChecked(options)",id:"expectlocatortobecheckedoptions",children:[],level:2},{value:"expect(locator).toBeDisabled(options)",id:"expectlocatortobedisabledoptions",children:[],level:2},{value:"expect(locator).toBeEditable(options)",id:"expectlocatortobeeditableoptions",children:[],level:2},{value:"expect(locator).toBeEmpty(options)",id:"expectlocatortobeemptyoptions",children:[],level:2},{value:"expect(locator).toBeEnabled(options)",id:"expectlocatortobeenabledoptions",children:[],level:2},{value:"expect(locator).toBeFocused(options)",id:"expectlocatortobefocusedoptions",children:[],level:2},{value:"expect(locator).toBeHidden(options)",id:"expectlocatortobehiddenoptions",children:[],level:2},{value:"expect(locator).toBeVisible(options)",id:"expectlocatortobevisibleoptions",children:[],level:2},{value:"expect(locator).toContainText(expected, options)",id:"expectlocatortocontaintextexpected-options",children:[],level:2},{value:"expect(locator).toHaveAttribute(name, value, options)",id:"expectlocatortohaveattributename-value-options",children:[],level:2},{value:"expect(locator).toHaveClass(expected, options)",id:"expectlocatortohaveclassexpected-options",children:[],level:2},{value:"expect(locator).toHaveCount(count, options)",id:"expectlocatortohavecountcount-options",children:[],level:2},{value:"expect(locator).toHaveCSS(name, value, options)",id:"expectlocatortohavecssname-value-options",children:[],level:2},{value:"expect(locator).toHaveId(id, options)",id:"expectlocatortohaveidid-options",children:[],level:2},{value:"expect(locator).toHaveJSProperty(name, value, options)",id:"expectlocatortohavejspropertyname-value-options",children:[],level:2},{value:"expect(locator).toHaveText(expected, options)",id:"expectlocatortohavetextexpected-options",children:[],level:2},{value:"expect(locator).toHaveValue(value, options)",id:"expectlocatortohavevaluevalue-options",children:[],level:2},{value:"expect(page).toHaveTitle(title, options)",id:"expectpagetohavetitletitle-options",children:[],level:2},{value:"expect(page).toHaveURL(url, options)",id:"expectpagetohaveurlurl-options",children:[],level:2},{value:"expect(value).toMatchSnapshot(name, options)",id:"expectvaluetomatchsnapshotname-options",children:[],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright Test uses ",(0,n.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"expect")," library for test assertions. This library provides a lot of matchers like ",(0,n.kt)("inlineCode",{parentName:"p"},"toEqual"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toContain"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toMatch"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot")," and many more:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"expect(success).toBeTruthy();\n")),(0,n.kt)("p",null,"Playwright also extends it with convenience async matchers that will wait until the expected condition is met. In general, we can expect the opposite to be true by adding a ",(0,n.kt)("inlineCode",{parentName:"p"},".not")," to the front of the matchers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'expect(value).not.toEqual(0);\nawait expect(locator).not.toContainText("some text");\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#matching"},"Matching")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobecheckedoptions"},"expect(locator).toBeChecked([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobedisabledoptions"},"expect(locator).toBeDisabled([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobeeditableoptions"},"expect(locator).toBeEditable([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobeemptyoptions"},"expect(locator).toBeEmpty([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobeenabledoptions"},"expect(locator).toBeEnabled([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobefocusedoptions"},"expect(locator).toBeFocused([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobehiddenoptions"},"expect(locator).toBeHidden([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortobevisibleoptions"},"expect(locator).toBeVisible([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortocontaintextexpected-options"},"expect(locator).toContainText(expected[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohaveattributename-value-options"},"expect(locator).toHaveAttribute(name, value[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohaveclassexpected-options"},"expect(locator).toHaveClass(expected[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohavecountcount-options"},"expect(locator).toHaveCount(count[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohavecssname-value-options"},"expect(locator).toHaveCSS(name, value[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohaveidid-options"},"expect(locator).toHaveId(id[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohavejspropertyname-value-options"},"expect(locator).toHaveJSProperty(name, value[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohavetextexpected-options"},"expect(locator).toHaveText(expected[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectlocatortohavevaluevalue-options"},"expect(locator).toHaveValue(value[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectpagetohavetitletitle-options"},"expect(page).toHaveTitle(title[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectpagetohaveurlurl-options"},"expect(page).toHaveURL(url[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#expectvaluetomatchsnapshotname-options"},"expect(value).toMatchSnapshot(name[, options])"))),(0,n.kt)("h2",{id:"matching"},"Matching"),(0,n.kt)("p",null,"Consider the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page.locator('.status')).toHaveText('Submitted');\n")),(0,n.kt)("p",null,"Playwright Test will be re-testing the node with the selector ",(0,n.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,n.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can either pass this timeout or configure it once via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect")," value in test config."),(0,n.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds. Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/test-timeouts"},"various timeouts"),"."),(0,n.kt)("h2",{id:"expectlocatortobecheckedoptions"},"expect(locator).toBeChecked(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"checked")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to the checked input."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.subscribe');\nawait expect(locator).toBeChecked();\n")),(0,n.kt)("h2",{id:"expectlocatortobedisabledoptions"},"expect(locator).toBeDisabled(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to a disabled element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeDisabled();\n")),(0,n.kt)("h2",{id:"expectlocatortobeeditableoptions"},"expect(locator).toBeEditable(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an editable element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeEditable();\n")),(0,n.kt)("h2",{id:"expectlocatortobeemptyoptions"},"expect(locator).toBeEmpty(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an empty editable element or to a DOM node that has no text."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('div.warning');\nawait expect(locator).toBeEmpty();\n")),(0,n.kt)("h2",{id:"expectlocatortobeenabledoptions"},"expect(locator).toBeEnabled(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an enabled element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeEnabled();\n")),(0,n.kt)("h2",{id:"expectlocatortobefocusedoptions"},"expect(locator).toBeFocused(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to a focused DOM node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeFocused();\n")),(0,n.kt)("h2",{id:"expectlocatortobehiddenoptions"},"expect(locator).toBeHidden(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to a hidden DOM node, which is the opposite of ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/actionability#visible"},"visible"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeHidden();\n")),(0,n.kt)("h2",{id:"expectlocatortobevisibleoptions"},"expect(locator).toBeVisible(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to a ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/actionability#visible"},"visible")," DOM node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeVisible();\n")),(0,n.kt)("h2",{id:"expectlocatortocontaintextexpected-options"},"expect(locator).toContainText(expected","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expected")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"useInnerText")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"> Whether to use ",(0,n.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,n.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element that contains the given text. You can use regular expressions for the value as well."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toContainText('substring');\nawait expect(locator).toContainText(/\\d messages/);\n")),(0,n.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .list-item');\nawait expect(locator).toContainText(['Text 1', 'Text 4', 'Text 5']);\n")),(0,n.kt)("h2",{id:"expectlocatortohaveattributename-value-options"},"expect(locator).toHaveAttribute(name, value","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Attribute name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"> Attribute value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element with given attribute."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveAttribute('type', 'text');\n")),(0,n.kt)("h2",{id:"expectlocatortohaveclassexpected-options"},"expect(locator).toHaveClass(expected","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expected")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element with given CSS class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('#component');\nawait expect(locator).toHaveClass(/selected/);\n")),(0,n.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveClass(['component', 'component selected', 'component']);\n")),(0,n.kt)("h2",{id:"expectlocatortohavecountcount-options"},"expect(locator).toHaveCount(count","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"count")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," resolves to an exact number of DOM nodes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const list = page.locator('list > .component');\nawait expect(list).toHaveCount(3);\n")),(0,n.kt)("h2",{id:"expectlocatortohavecssname-value-options"},"expect(locator).toHaveCSS(name, value","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> CSS property name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"> CSS property value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," resolves to an element with the given computed CSS style."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button');\nawait expect(locator).toHaveCSS('display', 'flex');\n")),(0,n.kt)("h2",{id:"expectlocatortohaveidid-options"},"expect(locator).toHaveId(id","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Element id"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element with the given DOM Node ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveId('lastname');\n")),(0,n.kt)("h2",{id:"expectlocatortohavejspropertyname-value-options"},"expect(locator).toHaveJSProperty(name, value","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Property name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," <","[any]","> Property value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element with given JavaScript property. Note that this property can be of a primitive type as well as a plain serializable JavaScript object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.component');\nawait expect(locator).toHaveJSProperty('loaded', true);\n")),(0,n.kt)("h2",{id:"expectlocatortohavetextexpected-options"},"expect(locator).toHaveText(expected","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expected")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"useInnerText")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"> Whether to use ",(0,n.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,n.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element with the given text. You can use regular expressions for the value as well."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toHaveText(/Welcome, Test User/);\nawait expect(locator).toHaveText(/Welcome, .*/);\n")),(0,n.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveText(['Text 1', 'Text 2', 'Text 3']);\n")),(0,n.kt)("h2",{id:"expectlocatortohavevaluevalue-options"},"expect(locator).toHaveValue(value","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-locator",title:"Locator"},"Locator")," points to an element with the given input value. You can use regular expressions for the value as well."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input[type=number]');\nawait expect(locator).toHaveValue(/[0-9]/);\n")),(0,n.kt)("h2",{id:"expectpagetohavetitletitle-options"},"expect(page).toHaveTitle(title","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures page has a given title."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveTitle(/.*checkout/);\n")),(0,n.kt)("h2",{id:"expectpagetohaveurlurl-options"},"expect(page).toHaveURL(url","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures page is navigated to a given URL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveURL(/.*checkout/);\n")),(0,n.kt)("h2",{id:"expectvaluetomatchsnapshotname-options"},"expect(value).toMatchSnapshot(name","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">> Snapshot name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"threshold")," <","[float]","> Image matching threshold between zero (strict) and one (lax), default is configurable with ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect"),".")))),(0,n.kt)("p",null,"Ensures that passed value, either a ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," or a ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),", matches the expected snapshot stored in the test snapshots directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Basic usage.\nexpect(await page.screenshot()).toMatchSnapshot('landing-page.png');\n\n// Configure image matching threshold.\nexpect(await page.screenshot()).toMatchSnapshot('landing-page.png', { threshold: 0.3 });\n\n// Bring some structure to your snapshot files by passing file path segments.\nexpect(await page.screenshot()).toMatchSnapshot(['landing', 'step2.png']);\nexpect(await page.screenshot()).toMatchSnapshot(['landing', 'step3.png']);\n")),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.18/test-snapshots"},"visual comparisons"),"."))}u.isMDXComponent=!0}}]);