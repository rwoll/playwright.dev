"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[774],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var f=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,f=e.values,p=e.groupId,d=e.className,m=a(),v=m.tabGroupChoices,h=m.setTabGroupChoices,b=(0,r.useState)(o),g=b[0],y=b[1],k=r.Children.toArray(e.children),w=[];if(null!=p){var O=v[p];null!=O&&O!==g&&f.some((function(e){return e.value===O}))&&y(O)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;y(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"release-notes",title:"Release notes"}),l=void 0,s={unversionedId:"release-notes",id:"version-1.12/release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.12",source:"@site/versioned_docs/version-1.12/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/dotnet/docs/1.12/release-notes",version:"1.12",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"version-1.12/docs",previous:{title:"Supported languages",permalink:"/dotnet/docs/1.12/languages"},next:{title:"Test Runners",permalink:"/dotnet/docs/1.12/test-runners"}},u=[{value:"Version 1.12",id:"version-112",children:[]}],c={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12"))),(0,a.kt)("h2",{id:"version-112"},"Version 1.12"),(0,a.kt)("h4",{id:"highlights"},"Highlights"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Playwright for .NET v1.12 is now stable!"),(0,a.kt)("li",{parentName:"ul"},"Ships with the ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/cli#generate-code"},"codegen")," and ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/trace-viewer"},"trace viewer")," tools out-of-the-box")),(0,a.kt)("h4",{id:"browser-versions"},"Browser Versions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,a.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,a.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,a.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,a.kt)("li",{parentName:"ul"},"Microsoft Edge 91")))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);