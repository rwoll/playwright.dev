"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[594],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(67294),a=t(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var r=e.lazy,t=e.block,a=e.defaultValue,p=e.values,m=e.groupId,f=e.className,y=o(),d=y.tabGroupChoices,v=y.setTabGroupChoices,h=(0,n.useState)(a),g=h[0],b=h[1],w=n.Children.toArray(e.children),k=[];if(null!=m){var E=d[m];null!=E&&E!==g&&p.some((function(e){return e.value===E}))&&b(E)}var T=function(e){var r=e.currentTarget,t=k.indexOf(r),n=p[t].value;b(n),null!=m&&(v(m,n),setTimeout((function(){var e,t,n,a,o,i,c,s;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,t>=0&&o<=s&&a<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},O=function(e){var r,t;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;t=k[n]||k[0];break;case s:var a=k.indexOf(e.target)-1;t=k[a]||k[k.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},f)},p.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":g===r}),key:r,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:T,onClick:T},t)}))),r?(0,n.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},89001:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=t(55064),c=t(58215),l={id:"class-timeouterror",title:"TimeoutError"},s=void 0,u={unversionedId:"api/class-timeouterror",id:"version-1.14.0/api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.14.0/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/python/docs/api/class-timeouterror",version:"1.14.0",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.14.0/api",previous:{title:"Selectors",permalink:"/python/docs/api/class-selectors"},next:{title:"Touchscreen",permalink:"/python/docs/api/class-touchscreen"}},p=[],m={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-error",title:"Error"},"Error"))),(0,o.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)")," or ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),"."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    try:\n      page.click("text=Example", timeout=100)\n    except PlaywrightTimeoutError:\n      print("Timeout!")\n    browser.close()\n'))),(0,o.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeoutError\n\nasync def run(playwright):\n    browser = await playwright.chromium.launch()\n    page = await browser.new_page()\n    try:\n      await page.click("text=Example", timeout=100)\n    except PlaywrightTimeoutError:\n      print("Timeout!")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\nasyncio.run(main())\n')))))}f.isMDXComponent=!0},86010:function(e,r,t){function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})}}]);