"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1974],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,m=e.className,k=o(),h=k.tabGroupChoices,f=k.setTabGroupChoices,v=(0,a.useState)(i),b=v[0],N=v[1],y=a.Children.toArray(e.children),C=[];if(null!=d){var g=h[d];null!=g&&g!==b&&p.some((function(e){return e.value===g}))&&N(g)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=p[n].value;N(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,i,o,l,r,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,l=window,r=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&i<=r&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case u:var i=C.indexOf(e.target)-1;n=C[i]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",r,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},2342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),l=(n(5064),n(8215),{id:"class-mouse",title:"Mouse"}),r=void 0,s={unversionedId:"api/class-mouse",id:"version-1.13/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.13/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/1.13/api/class-mouse",version:"1.13",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.13/api",previous:{title:"Keyboard",permalink:"/dotnet/docs/1.13/api/class-keyboard"},next:{title:"Page",permalink:"/dotnet/docs/1.13/api/class-page"}},u=[{value:"Mouse.ClickAsync(x, y, options)",id:"mouse-click",children:[]},{value:"Mouse.DblClickAsync(x, y, options)",id:"mouse-dblclick",children:[]},{value:"Mouse.DownAsync(options)",id:"mouse-down",children:[]},{value:"Mouse.MoveAsync(x, y, options)",id:"mouse-move",children:[]},{value:"Mouse.UpAsync(options)",id:"mouse-up",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page#page-mouse"},"Page.Mouse"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-mouse#mouse-click"},"Mouse.ClickAsync(x, y, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-mouse#mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"))),(0,o.kt)("h2",{id:"mouse-click"},"Mouse.ClickAsync(x, y, options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-param-x"})," ","<","[double]",">",(0,o.kt)("a",{href:"#mouse-click-param-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-param-y"})," ","<","[double]",">",(0,o.kt)("a",{href:"#mouse-click-param-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseClickOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<","[double]","?",">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,o.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,o.kt)("h2",{id:"mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-param-x"})," ","<","[double]",">",(0,o.kt)("a",{href:"#mouse-dblclick-param-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-param-y"})," ","<","[double]",">",(0,o.kt)("a",{href:"#mouse-dblclick-param-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseDblClickOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<","[double]","?",">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,o.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")," and ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,o.kt)("h2",{id:"mouse-down"},"Mouse.DownAsync(options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseDownOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,o.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,o.kt)("h2",{id:"mouse-move"},"Mouse.MoveAsync(x, y, options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-param-x"})," ","<","[double]",">",(0,o.kt)("a",{href:"#mouse-move-param-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-param-y"})," ","<","[double]",">",(0,o.kt)("a",{href:"#mouse-move-param-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseMoveOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Steps"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<","[int]","?",">"," defaults to 1. Sends intermediate ",(0,o.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,o.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,o.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,o.kt)("h2",{id:"mouse-up"},"Mouse.UpAsync(options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseUpOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,o.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}p.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);