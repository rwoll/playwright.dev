"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1102],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=s.createContext({}),c=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||h[f]||a;return r?s.createElement(d,o(o({ref:t},p),{},{components:r})):s.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8215:function(e,t,r){var s=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return h}});var s=r(7294),n=r(9443);var a=function(){var e=(0,s.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,p=39;var h=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,h=e.values,u=e.groupId,f=e.className,d=a(),m=d.tabGroupChoices,y=d.setTabGroupChoices,k=(0,s.useState)(n),b=k[0],v=k[1],x=s.Children.toArray(e.children),g=[];if(null!=u){var N=m[u];null!=N&&N!==b&&h.some((function(e){return e.value===N}))&&v(N)}var _=function(e){var t=e.currentTarget,r=g.indexOf(t),s=h[r].value;v(s),null!=u&&(y(u,s),setTimeout((function(){var e,r,s,n,a,o,l,c;(e=t.getBoundingClientRect(),r=e.top,s=e.left,n=e.bottom,a=e.right,o=window,l=o.innerHeight,c=o.innerWidth,r>=0&&a<=c&&n<=l&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case p:var s=g.indexOf(e.target)+1;r=g[s]||g[0];break;case c:var n=g.indexOf(e.target)-1;r=g[n]||g[g.length-1]}null==(t=r)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},h.map((function(e){var t=e.value,r=e.label;return s.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:w,onFocus:_,onClick:_},r)}))),t?(0,s.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){var s=(0,r(7294).createContext)(void 0);t.Z=s},4886:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return h}});var s=r(2122),n=r(9756),a=(r(7294),r(3905)),o=(r(5064),r(8215),{id:"class-fetchresponse",title:"FetchResponse"}),l=void 0,i={unversionedId:"api/class-fetchresponse",id:"api/class-fetchresponse",isDocsHomePage:!1,title:"FetchResponse",description:"FetchResponse] class represents responses received from [browsercontext.fetch(urlorrequest, **kwargs) and page.fetch(urlor_request, **kwargs) methods.",source:"@site/docs/api/class-fetchresponse.mdx",sourceDirName:"api",slug:"/api/class-fetchresponse",permalink:"/python/docs/next/api/class-fetchresponse",version:"current",frontMatter:{id:"class-fetchresponse",title:"FetchResponse"},sidebar:"api",previous:{title:"Error",permalink:"/python/docs/next/api/class-error"},next:{title:"FileChooser",permalink:"/python/docs/next/api/class-filechooser"}},c=[{value:"fetch_response.body()",id:"fetch-response-body",children:[]},{value:"fetch_response.dispose()",id:"fetch-response-dispose",children:[]},{value:"fetch_response.headers",id:"fetch-response-headers",children:[]},{value:"fetch_response.headers_array",id:"fetch-response-headers-array",children:[]},{value:"fetch_response.json()",id:"fetch-response-json",children:[]},{value:"fetch_response.ok",id:"fetch-response-ok",children:[]},{value:"fetch_response.status",id:"fetch-response-status",children:[]},{value:"fetch_response.status_text",id:"fetch-response-status-text",children:[]},{value:"fetch_response.text()",id:"fetch-response-text",children:[]},{value:"fetch_response.url",id:"fetch-response-url",children:[]}],p={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-fetchresponse",title:"FetchResponse"},"FetchResponse")," class represents responses received from ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext#browser-context-fetch"},"browser_context.fetch(url_or_request, **kwargs)")," and ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-fetch"},"page.fetch(url_or_request, **kwargs)")," methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-body"},"fetch_response.body()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-dispose"},"fetch_response.dispose()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-headers"},"fetch_response.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-headers-array"},"fetch_response.headers_array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-json"},"fetch_response.json()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-ok"},"fetch_response.ok")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-status"},"fetch_response.status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-status-text"},"fetch_response.status_text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-text"},"fetch_response.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-fetchresponse#fetch-response-url"},"fetch_response.url"))),(0,a.kt)("h2",{id:"fetch-response-body"},"fetch_response.body()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-body-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">",(0,a.kt)("a",{href:"#fetch-response-body-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the buffer with response body."),(0,a.kt)("h2",{id:"fetch-response-dispose"},"fetch_response.dispose()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-dispose-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,a.kt)("a",{href:"#fetch-response-dispose-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Disposes the body of this response. If not called then the body will stay in memory until the context closes."),(0,a.kt)("h2",{id:"fetch-response-headers"},"fetch_response.headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-headers-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">",(0,a.kt)("a",{href:"#fetch-response-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,a.kt)("h2",{id:"fetch-response-headers-array"},"fetch_response.headers_array"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-headers-array-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]","]",">",(0,a.kt)("a",{href:"#fetch-response-headers-array-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An array with all the request HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,a.kt)("h2",{id:"fetch-response-json"},"fetch_response.json()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-json-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",(0,a.kt)("a",{href:"#fetch-response-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the JSON representation of response body."),(0,a.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,a.kt)("h2",{id:"fetch-response-ok"},"fetch_response.ok"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-ok-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,a.kt)("a",{href:"#fetch-response-ok-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,a.kt)("h2",{id:"fetch-response-status"},"fetch_response.status"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-status-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">",(0,a.kt)("a",{href:"#fetch-response-status-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,a.kt)("h2",{id:"fetch-response-status-text"},"fetch_response.status_text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-status-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#fetch-response-status-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,a.kt)("h2",{id:"fetch-response-text"},"fetch_response.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#fetch-response-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the text representation of response body."),(0,a.kt)("h2",{id:"fetch-response-url"},"fetch_response.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-url-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#fetch-response-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the response."))}h.isMDXComponent=!0},6010:function(e,t,r){function s(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);