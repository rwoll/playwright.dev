"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5449],{12326:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return d},default:function(){return y}});var a=i(87462),n=i(63366),l=(i(67294),i(3905)),s=i(26396),r=i(58215),o=["components"],p={id:"class-accessibility",title:"Accessibility"},c=void 0,h={unversionedId:"api/class-accessibility",id:"version-1.19/api/class-accessibility",isDocsHomePage:!1,title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-1.19/api/class-accessibility.mdx",sourceDirName:"api",slug:"/api/class-accessibility",permalink:"/python/docs/api/class-accessibility",tags:[],version:"1.19",frontMatter:{id:"class-accessibility",title:"Accessibility"},sidebar:"version-1.19/api",previous:{title:"APIResponse",permalink:"/python/docs/api/class-apiresponse"},next:{title:"Browser",permalink:"/python/docs/api/class-browser"}},d=[{value:"accessibility.snapshot(**kwargs)",id:"accessibility-snapshot",children:[],level:2}],m={toc:d};function y(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Screen_reader"},"screen readers")," or ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Switch_access"},"switches"),"."),(0,l.kt)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),(0,l.kt)("p",null,'Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'),(0,l.kt)("p",null,'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-accessibility#accessibility-snapshot"},"accessibility.snapshot(**kwargs)"))),(0,l.kt)("h2",{id:"accessibility-snapshot"},"accessibility.snapshot(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interesting_only"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-interesting-only"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Prune uninteresting nodes from the tree. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".",(0,l.kt)("a",{href:"#accessibility-snapshot-option-interesting-only",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"root"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-root"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">"," The root DOM element for the snapshot. Defaults to the whole page.",(0,l.kt)("a",{href:"#accessibility-snapshot-option-root",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,l.kt)("a",{href:"#accessibility-snapshot-return",class:"list-anchor"},"#"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"role")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," The ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#usage_intro"},"role"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A human readable name for the node."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," The current value of the node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," An additional human readable description of the node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keyshortcuts")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Keyboard shortcuts associated with this node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roledescription")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A human readable alternative to the role, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valuetext")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A description of the current value, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disabled")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is disabled, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expanded")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is expanded or collapsed, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"focused")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is focused, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modal")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Modal_window"},"modal"),", if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"multiline")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node text input supports multiline, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"multiselectable")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether more than one child can be selected, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"readonly")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is read only, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"required")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is required, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selected")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether the node is selected in its parent node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checked")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),'|"mixed"',">",' Whether the checkbox is checked, or "mixed", if applicable.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pressed")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),'|"mixed"',">",' Whether the toggle button is checked, or "mixed", if applicable.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," The level of a heading, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valuemin")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," The minimum value in a node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valuemax")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," The maximum value in a node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"autocomplete")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," What kind of autocomplete is supported by a control, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"haspopup")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," What kind of popup is currently being shown for a node, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"invalid")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Whether and in what way this node's value is invalid, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"orientation")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Whether the node is oriented horizontally or vertically, if applicable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"children")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">"," Child nodes, if any, if applicable.")))),(0,l.kt)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",(0,l.kt)("inlineCode",{parentName:"p"},"interesting_only")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,l.kt)("p",null,"An example of dumping the entire accessibility tree:"),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"snapshot = page.accessibility.snapshot()\nprint(snapshot)\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"snapshot = await page.accessibility.snapshot()\nprint(snapshot)\n")))),(0,l.kt)("p",null,"An example of logging the focused node's name:"),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'def find_focused_node(node):\n    if (node.get("focused"))\n        return node\n    for child in (node.get("children") or []):\n        found_node = find_focused_node(child)\n        return found_node\n    return None\n\nsnapshot = page.accessibility.snapshot()\nnode = find_focused_node(snapshot)\nif node:\n    print(node["name"])\n'))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'def find_focused_node(node):\n    if (node.get("focused"))\n        return node\n    for child in (node.get("children") or []):\n        found_node = find_focused_node(child)\n        return found_node\n    return None\n\nsnapshot = await page.accessibility.snapshot()\nnode = find_focused_node(snapshot)\nif node:\n    print(node["name"])\n')))))}y.isMDXComponent=!0}}]);