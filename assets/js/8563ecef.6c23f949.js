"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[76573],{53424:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=(a(26396),a(58215),["components"]),p={id:"actionability",title:"Auto-waiting"},d=void 0,s={unversionedId:"actionability",id:"version-1.17/actionability",isDocsHomePage:!1,title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/versioned_docs/version-1.17/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/docs/actionability",tags:[],version:"1.17",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"version-1.17/docs",previous:{title:"Library",permalink:"/docs/library"},next:{title:"Assertions",permalink:"/docs/assertions"}},c=[{value:"Forcing actions",id:"forcing-actions",children:[],level:2},{value:"Assertions",id:"assertions",children:[],level:2},{value:"Attached",id:"attached",children:[],level:2},{value:"Visible",id:"visible",children:[],level:2},{value:"Stable",id:"stable",children:[],level:2},{value:"Enabled",id:"enabled",children:[],level:2},{value:"Editable",id:"editable",children:[],level:2},{value:"Receives Events",id:"receives-events",children:[],level:2}],m={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutError"),"."),(0,i.kt)("p",null,"For example, for ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-click"},"page.click(selector[, options])"),", Playwright will ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#attached",title:"Attached"},"Attached")," to the DOM"),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#visible",title:"Visible"},"Visible")),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#stable",title:"Stable"},"Stable"),", as in not animating or completed animation"),(0,i.kt)("li",{parentName:"ul"},"element ",(0,i.kt)("a",{parentName:"li",href:"#receives-events",title:"Receives Events"},"Receives Events"),", as in not obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#enabled",title:"Enabled"},"Enabled"))),(0,i.kt)("p",null,"Here is the complete list of actionability checks performed for each action:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#attached",title:"Attached"},"Attached")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#visible",title:"Visible"},"Visible")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#stable",title:"Stable"},"Stable")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#receives-events",title:"Receives Events"},"Receives Events")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#enabled",title:"Enabled"},"Enabled")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#editable",title:"Editable"},"Editable")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"check"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"click"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dblclick"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"setChecked"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tap"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"uncheck"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hover"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scrollIntoViewIfNeeded"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"screenshot"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fill"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectText"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dispatchEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"focus"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"getAttribute"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"innerText"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"innerHTML"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"press"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"setInputFiles"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectOption"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"forcing-actions"},"Forcing actions"),(0,i.kt)("p",null,"Some actions like ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-click"},"page.click(selector[, options])")," support ",(0,i.kt)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",(0,i.kt)("inlineCode",{parentName:"p"},"force")," to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-click"},"page.click(selector[, options])")," method will not check that the target element actually receives click events."),(0,i.kt)("h2",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle#element-handle-is-checked"},"elementHandle.isChecked()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle#element-handle-is-disabled"},"elementHandle.isDisabled()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle#element-handle-is-editable"},"elementHandle.isEditable()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle#element-handle-is-enabled"},"elementHandle.isEnabled()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle#element-handle-is-hidden"},"elementHandle.isHidden()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle#element-handle-is-visible"},"elementHandle.isVisible()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-is-checked"},"page.isChecked(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-is-disabled"},"page.isDisabled(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-is-editable"},"page.isEditable(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-is-enabled"},"page.isEnabled(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-is-hidden"},"page.isHidden(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-is-visible"},"page.isVisible(selector[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"attached"},"Attached"),(0,i.kt)("p",null,"Element is considered attached when it is ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"},"connected")," to a Document or a ShadowRoot."),(0,i.kt)("h2",{id:"visible"},"Visible"),(0,i.kt)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",(0,i.kt)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),(0,i.kt)("h2",{id:"stable"},"Stable"),(0,i.kt)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),(0,i.kt)("h2",{id:"enabled"},"Enabled"),(0,i.kt)("p",null,"Element is considered enabled when it is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," property set."),(0,i.kt)("h2",{id:"editable"},"Editable"),(0,i.kt)("p",null,"Element is considered editable when it is ",(0,i.kt)("a",{parentName:"p",href:"#enabled",title:"Enabled"},"enabled")," and does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly")," property set."),(0,i.kt)("h2",{id:"receives-events"},"Receives Events"),(0,i.kt)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,i.kt)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,i.kt)("inlineCode",{parentName:"p"},"(10;10)"),"."),(0,i.kt)("p",null,"For example, consider a scenario where Playwright will click ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-click"},"page.click(selector[, options])")," call was made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"page is checking that user name is unique and ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),(0,i.kt)("li",{parentName:"ul"},"after checking with the server, the disabled ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}k.isMDXComponent=!0}}]);