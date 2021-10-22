"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4666],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(9443);var s=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,u=e.values,d=e.groupId,h=e.className,m=s(),g=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,r.useState)(n),k=v[0],b=v[1],y=r.Children.toArray(e.children),N=[];if(null!=d){var x=g[d];null!=x&&x!==k&&u.some((function(e){return e.value===x}))&&b(x)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),r=u[a].value;b(r),null!=d&&(f(d,r),setTimeout((function(){var e,a,r,n,s,i,o,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,s=e.right,i=window,o=i.innerHeight,c=i.innerWidth,a>=0&&s<=c&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case c:var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:j,onClick:j},a)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},9438:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-pageassertions",title:"PageAssertions"}),o=void 0,l={unversionedId:"api/class-pageassertions",id:"api/class-pageassertions",isDocsHomePage:!1,title:"PageAssertions",description:"The [PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests.",source:"@site/docs/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/java/docs/next/api/class-pageassertions",version:"current",frontMatter:{id:"class-pageassertions",title:"PageAssertions"}},c=[{value:"PageAssertions.hasTitle(titleOrRegExp, options)",id:"page-assertions-has-title",children:[]},{value:"PageAssertions.hasURL(urlOrRegExp, options)",id:"page-assertions-has-url",children:[]},{value:"PageAssertions.not()",id:"page-assertions-not",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page",title:"Page"},"Page")," state in the tests."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-pageassertions#page-assertions-has-title"},"PageAssertions.hasTitle(titleOrRegExp[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-pageassertions#page-assertions-has-url"},"PageAssertions.hasURL(urlOrRegExp[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-pageassertions#page-assertions-not"},"PageAssertions.not()"))),(0,s.kt)("h2",{id:"page-assertions-has-title"},"PageAssertions.hasTitle(titleOrRegExp","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"titleOrRegExp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-has-title-option-title-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,s.kt)("a",{href:"#page-assertions-has-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("inlineCode",{parentName:"li"},"PageAssertions.HasTitleOptions"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-has-title-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to retry assertion for.",(0,s.kt)("a",{href:"#page-assertions-has-title-option-timeout",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-has-title-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,s.kt)("a",{href:"#page-assertions-has-title-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page has a given title."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'assertThat(page).hasTitle("Playwright");\n')),(0,s.kt)("h2",{id:"page-assertions-has-url"},"PageAssertions.hasURL(urlOrRegExp","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"urlOrRegExp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-has-url-option-url-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,s.kt)("a",{href:"#page-assertions-has-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("inlineCode",{parentName:"li"},"PageAssertions.HasURLOptions"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-has-url-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-has-url-option-timeout",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-has-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,s.kt)("a",{href:"#page-assertions-has-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page is navigated to the given URL."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"assertThat(page).hasURL('.com');\n")),(0,s.kt)("h2",{id:"page-assertions-not"},"PageAssertions.not()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,s.kt)("a",{href:"#page-assertions-not-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the page URL doesn't contain ",(0,s.kt)("inlineCode",{parentName:"p"},'"error"'),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"assertThat(page).not().hasURL('error');\n")))}u.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);