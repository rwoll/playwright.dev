(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1812],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return t?n.createElement(f,o(o({ref:a},s),{},{components:t})):n.createElement(f,o({ref:a},s))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,a,t){"use strict";var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},1395:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var n=t(7294),l=t(944),r=t(6010),o="tabItem_1uMI",p="tabItemActive_2DSg";var i=37,u=39;var s=function(e){var a=e.lazy,t=e.block,s=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=(0,l.Z)(),y=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,n.useState)(s),h=v[0],b=v[1],g=n.Children.toArray(e.children),N=[];if(null!=m){var T=y[m];null!=T&&T!==h&&c.some((function(e){return e.value===T}))&&b(T)}var w=function(e){var a=e.currentTarget,t=N.indexOf(a),n=c[t].value;b(n),null!=m&&(k(m,n),setTimeout((function(){var e,t,n,l,r,o,i,u;(e=a.getBoundingClientRect(),t=e.top,n=e.left,l=e.bottom,r=e.right,o=window,i=o.innerHeight,u=o.innerWidth,t>=0&&r<=u&&l<=i&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(p),setTimeout((function(){return a.classList.remove(p)}),2e3))}),150))},x=function(e){var a,t;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case i:var l=N.indexOf(e.target)-1;t=N[l]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},d)},c.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":h===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},t)}))),a?(0,n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},9443:function(e,a,t){"use strict";var n=(0,t(7294).createContext)(void 0);a.Z=n},944:function(e,a,t){"use strict";var n=t(7294),l=t(9443);a.Z=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8389:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=t(2122),l=t(9756),r=(t(7294),t(3905)),o=t(1395),p=t(8215),i={id:"cheat-sheet",title:"Cheat Sheet"},u={unversionedId:"cheat-sheet",id:"cheat-sheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"- Download & Upload",source:"@site/docs/cheat-sheet.mdx",sourceDirName:".",slug:"/cheat-sheet",permalink:"/python/docs/next/cheat-sheet",version:"current",frontMatter:{id:"cheat-sheet",title:"Cheat Sheet"},sidebar:"docs",previous:{title:"Pytest plugin",permalink:"/python/docs/next/test-runners"},next:{title:"Auto-waiting",permalink:"/python/docs/next/actionability"}},s=[{value:"Download &amp; Upload",id:"download--upload",children:[{value:"Download file",id:"download-file",children:[]},{value:"Upload file",id:"upload-file",children:[]},{value:"Upload multiple files",id:"upload-multiple-files",children:[]},{value:"Upload from memory",id:"upload-from-memory",children:[]},{value:"Remove selected files",id:"remove-selected-files",children:[]},{value:"Handle file picker",id:"handle-file-picker",children:[]}]},{value:"Manage &lt;iframe&gt;s",id:"manage-iframes",children:[{value:"List frames",id:"list-frames",children:[]},{value:"Frame by <code>name</code> attribute",id:"frame-by-name-attribute",children:[]},{value:"Frame by URL",id:"frame-by-url",children:[]},{value:"Frame by selector",id:"frame-by-selector",children:[]}]}],c={toc:s};function m(e){var a=e.components,t=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#download--upload"},"Download & Upload"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#download-file"},"Download file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upload-file"},"Upload file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upload-multiple-files"},"Upload multiple files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upload-from-memory"},"Upload from memory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#remove-selected-files"},"Remove selected files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#handle-file-picker"},"Handle file picker")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#manage-60iframe62s"},"Manage ","<","iframe",">","s"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#list-frames"},"List frames")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#frame-by-name-attribute"},"Frame by ",(0,r.kt)("inlineCode",{parentName:"a"},"name")," attribute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#frame-by-url"},"Frame by URL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#frame-by-selector"},"Frame by selector"))))),(0,r.kt)("h2",{id:"download--upload"},"Download & Upload"),(0,r.kt)("h3",{id:"download-file"},"Download file"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_download() as download_info:\n    page.click("button")\ndownload = download_info.value\npath = download.path()\n'))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_download() as download_info:\n    await page.click("button")\ndownload = await download_info.value\npath = await download.path()\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/python/docs/next/downloads"},"Learn more")),(0,r.kt)("h3",{id:"upload-file"},"Upload file"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page.set_input_files('input#upload', 'myfile.pdf')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await page.set_input_files('input#upload', 'myfile.pdf')\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,r.kt)("h3",{id:"upload-multiple-files"},"Upload multiple files"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page.set_input_files('input#upload', ['file1.txt', 'file2.txt'])\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await page.set_input_files('input#upload', ['file1.txt', 'file2.txt'])\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,r.kt)("h3",{id:"upload-from-memory"},"Upload from memory"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'page.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n'))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'await page.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,r.kt)("h3",{id:"remove-selected-files"},"Remove selected files"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page.set_input_files('input#upload', [])\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await page.set_input_files('input#upload', [])\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,r.kt)("h3",{id:"handle-file-picker"},"Handle file picker"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,r.kt)("h2",{id:"manage-iframes"},"Manage ","<","iframe",">","s"),(0,r.kt)("h3",{id:"list-frames"},"List frames"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frames = page.frames\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frames = page.frames\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,r.kt)("h3",{id:"frame-by-name-attribute"},"Frame by ",(0,r.kt)("inlineCode",{parentName:"h3"},"name")," attribute"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frame = page.frame('frame-login')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frame = page.frame('frame-login')\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,r.kt)("h3",{id:"frame-by-url"},"Frame by URL"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frame = page.frame(url=r'.*domain.*')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frame = page.frame(url=r'.*domain.*')\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,r.kt)("h3",{id:"frame-by-selector"},"Frame by selector"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frame_element_handle = page.query_selector('.frame-class')\nframe = frame_element_handle.content_frame()\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"frame_element_handle = await page.query_selector('.frame-class')\nframe = await frame_element_handle.content_frame()\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")))}m.isMDXComponent=!0},6010:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function l(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}t.d(a,{Z:function(){return l}})}}]);