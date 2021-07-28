(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4760],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(k,l(l({ref:t},u),{},{components:n})):o.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},944:function(e,t,n){"use strict";var o=n(7294),a=n(9443);t.Z=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5603:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return s},default:function(){return u}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),l=(n(1395),n(8215),{id:"class-mouse",title:"Mouse"}),r={unversionedId:"api/class-mouse",id:"version-1.12.0/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.12.0/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/1.12.0/api/class-mouse",version:"1.12.0",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.12.0/api",previous:{title:"Keyboard",permalink:"/dotnet/docs/1.12.0/api/class-keyboard"},next:{title:"Page",permalink:"/dotnet/docs/1.12.0/api/class-page"}},s=[{value:"Mouse.ClickAsync(x, y, options)",id:"mouse-click",children:[]},{value:"Mouse.DblClickAsync(x, y, options)",id:"mouse-dblclick",children:[]},{value:"Mouse.DownAsync(options)",id:"mouse-down",children:[]},{value:"Mouse.MoveAsync(x, y, options)",id:"mouse-move",children:[]},{value:"Mouse.UpAsync(options)",id:"mouse-up",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-page#page-mouse"},"Page.Mouse"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-click"},"Mouse.ClickAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"))),(0,i.kt)("h2",{id:"mouse-click"},"Mouse.ClickAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<","[double]",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<","[double]",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseClickOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button")," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount")," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delay")," ","<","[double]","?",">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,i.kt)("h2",{id:"mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<","[double]",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<","[double]",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseDblClickOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button")," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delay")," ","<","[double]","?",">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")," and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,i.kt)("h2",{id:"mouse-down"},"Mouse.DownAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseDownOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button")," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount")," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,i.kt)("h2",{id:"mouse-move"},"Mouse.MoveAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<","[double]",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<","[double]",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseMoveOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Steps")," ","<","[int]","?",">"," defaults to 1. Sends intermediate ",(0,i.kt)("inlineCode",{parentName:"li"},"mousemove")," events."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,i.kt)("h2",{id:"mouse-up"},"Mouse.UpAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseUpOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button")," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount")," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}u.isMDXComponent=!0}}]);