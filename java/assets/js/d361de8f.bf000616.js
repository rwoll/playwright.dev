(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3982],{3905:function(e,t,s){"use strict";s.d(t,{Zo:function(){return u},kt:function(){return m}});var r=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(s),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||n;return s?r.createElement(f,o(o({ref:t},u),{},{components:s})):r.createElement(f,o({ref:t},u))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,o=new Array(n);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=s[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},8215:function(e,t,s){"use strict";var r=s(7294);t.Z=function(e){var t=e.children,s=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:s,className:a},t)}},1395:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var r=s(7294),a=s(944),n=s(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,s=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,r.useState)(u),b=k[0],g=k[1],y=r.Children.toArray(e.children),j=[];if(null!=d){var N=h[d];null!=N&&N!==b&&c.some((function(e){return e.value===N}))&&g(N)}var R=function(e){var t=e.currentTarget,s=j.indexOf(t),r=c[s].value;g(r),null!=d&&(v(d,r),setTimeout((function(){var e,s,r,a,n,o,i,p;(e=t.getBoundingClientRect(),s=e.top,r=e.left,a=e.bottom,n=e.right,o=window,i=o.innerHeight,p=o.innerWidth,s>=0&&n<=p&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,s;switch(e.keyCode){case p:var r=j.indexOf(e.target)+1;s=j[r]||j[0];break;case i:var a=j.indexOf(e.target)-1;s=j[a]||j[j.length-1]}null==(t=s)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},m)},c.map((function(e){var t=e.value,s=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,n.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:w,onFocus:R,onClick:R},s)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,s){"use strict";var r=(0,s(7294).createContext)(void 0);t.Z=r},944:function(e,t,s){"use strict";var r=s(7294),a=s(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7147:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var r=s(2122),a=s(9756),n=(s(7294),s(3905)),o=(s(1395),s(8215),{id:"class-response",title:"Response"}),l={unversionedId:"api/class-response",id:"version-1.11.0/api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/versioned_docs/version-1.11.0/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/1.11.0/api/class-response",version:"1.11.0",frontMatter:{id:"class-response",title:"Response"},sidebar:"version-1.11.0/api",previous:{title:"Request",permalink:"/java/docs/1.11.0/api/class-request"},next:{title:"Route",permalink:"/java/docs/1.11.0/api/class-route"}},i=[{value:"Response.body()",id:"responsebody",children:[]},{value:"Response.finished()",id:"responsefinished",children:[]},{value:"Response.frame()",id:"responseframe",children:[]},{value:"Response.headers()",id:"responseheaders",children:[]},{value:"Response.ok()",id:"responseok",children:[]},{value:"Response.request()",id:"responserequest",children:[]},{value:"Response.status()",id:"responsestatus",children:[]},{value:"Response.statusText()",id:"responsestatustext",children:[]},{value:"Response.text()",id:"responsetext",children:[]},{value:"Response.url()",id:"responseurl",children:[]}],p={toc:i};function u(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsebody"},"Response.body()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsefinished"},"Response.finished()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseframe"},"Response.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseheaders"},"Response.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseok"},"Response.ok()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responserequest"},"Response.request()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsestatus"},"Response.status()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsestatustext"},"Response.statusText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsetext"},"Response.text()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseurl"},"Response.url()"))),(0,n.kt)("h2",{id:"responsebody"},"Response.body()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">")),(0,n.kt)("p",null,"Returns the buffer with response body."),(0,n.kt)("h2",{id:"responsefinished"},"Response.finished()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,"Waits for this response to finish, returns failure error if request failed."),(0,n.kt)("h2",{id:"responseframe"},"Response.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-frame",title:"Frame"},"Frame"),">")),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,n.kt)("h2",{id:"responseheaders"},"Response.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">>")),(0,n.kt)("p",null,"Returns the object with HTTP headers associated with the response. All header names are lower-case."),(0,n.kt)("h2",{id:"responseok"},"Response.ok()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">")),(0,n.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,n.kt)("h2",{id:"responserequest"},"Response.request()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-request",title:"Request"},"Request"),">")),(0,n.kt)("p",null,"Returns the matching ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-request",title:"Request"},"Request")," object."),(0,n.kt)("h2",{id:"responsestatus"},"Response.status()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">")),(0,n.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,n.kt)("h2",{id:"responsestatustext"},"Response.statusText()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,n.kt)("h2",{id:"responsetext"},"Response.text()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,"Returns the text representation of response body."),(0,n.kt)("h2",{id:"responseurl"},"Response.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,"Contains the URL of the response."))}u.isMDXComponent=!0},6010:function(e,t,s){"use strict";function r(e){var t,s,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=r(e[t]))&&(a&&(a+=" "),a+=s);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,s=0,a="";s<arguments.length;)(e=arguments[s++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}s.d(t,{Z:function(){return a}})}}]);