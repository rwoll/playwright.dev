"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[359],{128:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return c},default:function(){return u}});var n=t(87462),l=t(63366),s=(t(67294),t(3905)),r=t(26396),o=t(58215),i=["components"],p={id:"handles",title:"Handles"},d=void 0,h={unversionedId:"handles",id:"version-1.15/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.15/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/python/docs/1.15/handles",tags:[],version:"1.15",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.15/docs",previous:{title:"Extensibility",permalink:"/python/docs/1.15/extensibility"},next:{title:"Input",permalink:"/python/docs/1.15/input"}},c=[{value:"API reference",id:"api-reference",children:[],level:3},{value:"Element Handles",id:"element-handles",children:[],level:2},{value:"Handles as parameters",id:"handles-as-parameters",children:[],level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2}],m={toc:c};function u(e){var a=e.components,t=(0,l.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,s.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,s.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,s.kt)("p",null,"Here is the easiest way to obtain a ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,s.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"js_handle = page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"js_handle = await page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n")))),(0,s.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"ul_element_handle = page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n"))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"ul_element_handle = await page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n")))),(0,s.kt)("h2",{id:"element-handles"},"Element Handles"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-click"},"page.click(selector, **kwargs)")," rather than using the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),(0,s.kt)("p",null,"When ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)")," or ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-frame#frame-wait-for-selector"},"frame.wait_for_selector(selector, **kwargs)")," methods. These APIs wait for the element to be attached and visible."),(0,s.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = await element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = await element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n")))),(0,s.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,s.kt)("p",null,"Handles can be passed into the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,s.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# Create new array in page.\nmy_array_handle = page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\npage.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nmy_array_handle.dispose()\n'))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# Create new array in page.\nmy_array_handle = await page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = await page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\nawait page.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nawait my_array_handle.dispose()\n')))),(0,s.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,s.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-evaluate-handle"},"page.evaluate_handle(expression, **kwargs)"),", ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-query-selector"},"page.query_selector(selector, **kwargs)")," or ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-query-selector-all"},"page.query_selector_all(selector)")," or their frame counterparts ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-frame#frame-evaluate-handle"},"frame.evaluate_handle(expression, **kwargs)"),", ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-frame#frame-query-selector"},"frame.query_selector(selector, **kwargs)")," or ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-frame#frame-query-selector-all"},"frame.query_selector_all(selector)"),". Once created, handles will retain object from ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-jshandle#js-handle-dispose"},"js_handle.dispose()")," method."),(0,s.kt)("h3",{id:"api-reference-1"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle#element-handle-bounding-box"},"element_handle.bounding_box()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle#element-handle-get-attribute"},"element_handle.get_attribute(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle#element-handle-inner-text"},"element_handle.inner_text()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle#element-handle-inner-html"},"element_handle.inner_html()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle#element-handle-text-content"},"element_handle.text_content()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-jshandle#js-handle-evaluate"},"js_handle.evaluate(expression, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-evaluate-handle"},"page.evaluate_handle(expression, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-query-selector"},"page.query_selector(selector, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-query-selector-all"},"page.query_selector_all(selector)"))))}u.isMDXComponent=!0}}]);