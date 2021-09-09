"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1148],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=c(t),d=o,b=v["".concat(i,".").concat(d)]||v[d]||p[d]||s;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=v;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(67294),o=t(79443);var s=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=t(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var r=e.lazy,t=e.block,o=e.defaultValue,p=e.values,v=e.groupId,d=e.className,b=s(),f=b.tabGroupChoices,m=b.setTabGroupChoices,w=(0,n.useState)(o),h=w[0],k=w[1],y=n.Children.toArray(e.children),g=[];if(null!=v){var S=f[v];null!=S&&S!==h&&p.some((function(e){return e.value===S}))&&k(S)}var O=function(e){var r=e.currentTarget,t=g.indexOf(r),n=p[t].value;k(n),null!=v&&(m(v,n),setTimeout((function(){var e,t,n,o,s,a,l,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,s=e.right,a=window,l=a.innerHeight,c=a.innerWidth,t>=0&&s<=c&&o<=l&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(i),setTimeout((function(){return r.classList.remove(i)}),2e3))}),150))},N=function(e){var r,t;switch(e.keyCode){case u:var n=g.indexOf(e.target)+1;t=g[n]||g[0];break;case c:var o=g.indexOf(e.target)-1;t=g[o]||g[g.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":h===r}),key:r,ref:function(e){return g.push(e)},onKeyDown:N,onFocus:O,onClick:O},t)}))),r?(0,n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},73278:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=t(22122),o=t(19756),s=(t(67294),t(3905)),a=(t(55064),t(58215),{id:"class-browserserver",title:"BrowserServer"}),l=void 0,i={unversionedId:"api/class-browserserver",id:"version-1.12/api/class-browserserver",isDocsHomePage:!1,title:"BrowserServer",description:"- browserServer.on('close')",source:"@site/versioned_docs/version-1.12/api/class-browserserver.mdx",sourceDirName:"api",slug:"/api/class-browserserver",permalink:"/docs/1.12/api/class-browserserver",version:"1.12",frontMatter:{id:"class-browserserver",title:"BrowserServer"},sidebar:"version-1.12/api",previous:{title:"BrowserContext",permalink:"/docs/1.12/api/class-browsercontext"},next:{title:"BrowserType",permalink:"/docs/1.12/api/class-browsertype"}},c=[{value:"browserServer.on(&#39;close&#39;)",id:"browser-server-event-close",children:[]},{value:"browserServer.close()",id:"browser-server-close",children:[]},{value:"browserServer.kill()",id:"browser-server-kill",children:[]},{value:"browserServer.process()",id:"browser-server-process",children:[]},{value:"browserServer.wsEndpoint()",id:"browser-server-ws-endpoint",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12/api/class-browserserver#browser-server-event-close"},"browserServer.on('close')")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12/api/class-browserserver#browser-server-close"},"browserServer.close()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12/api/class-browserserver#browser-server-kill"},"browserServer.kill()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12/api/class-browserserver#browser-server-process"},"browserServer.process()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12/api/class-browserserver#browser-server-ws-endpoint"},"browserServer.wsEndpoint()"))),(0,s.kt)("h2",{id:"browser-server-event-close"},"browserServer.on('close')"),(0,s.kt)("p",null,"Emitted when the browser server closes."),(0,s.kt)("h2",{id:"browser-server-close"},"browserServer.close()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,s.kt)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),(0,s.kt)("h2",{id:"browser-server-kill"},"browserServer.kill()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,s.kt)("p",null,"Kills the browser process and waits for the process to exit."),(0,s.kt)("h2",{id:"browser-server-process"},"browserServer.process()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: ","<",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"},"ChildProcess"),">")),(0,s.kt)("p",null,"Spawned browser application process."),(0,s.kt)("h2",{id:"browser-server-ws-endpoint"},"browserServer.wsEndpoint()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"Browser websocket url."),(0,s.kt)("p",null,"Browser websocket endpoint which can be used as an argument to ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.12/api/class-browsertype#browser-type-connect"},"browserType.connect(params)")," to establish connection to the browser."))}p.isMDXComponent=!0},86010:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);