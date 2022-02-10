"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[48610,46103],{78665:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(63366),a=n(67294),u=n(86010),o=n(11022),l=n(39960),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",h=n(95999);function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,u.Z)(i,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,u.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:c},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var g=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,n=e.toc,l=e.children,i=(0,r.Z)(e,g),s=t&&t.items.length>0;return a.createElement(o.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(f,{sidebar:t})),a.createElement("main",{className:(0,u.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},l),n&&a.createElement("div",{className:"col col--2"},n))))}},38561:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(67294),a=n(86010),u=n(3905),o=n(95999),l=n(39960),i=n(44996),s=n(89521),c=n(67707),m=n(86753),d="blogPostTitle_GeHD",p="blogPostData_291c",h="blogPostDetailsFull_3kfx",f=n(20062),g="image_1yU8";var v=function(e){var t=e.author,n=t.name,a=t.title,u=t.url,o=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(l.Z,{className:"avatar__photo-link avatar__photo",href:u},r.createElement("img",{className:g,src:o,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(l.Z,{href:u,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},D="authorCol_1R69";function F(e){var t=e.authors,n=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var u;return r.createElement("div",{className:(0,a.Z)("col col--6",D),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(u=n.authorsImageUrls[t])?u:e.imageURL})}))})))}var E=function(e){var t,n,g,v,D=(g=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return g(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,i.C)().withBaseUrl,b=e.children,_=e.frontMatter,k=e.assets,A=e.metadata,C=e.truncated,Z=e.isBlogPostPage,w=void 0!==Z&&Z,x=A.date,N=A.formattedDate,y=A.permalink,I=A.tags,P=A.readingTime,T=A.title,B=A.editUrl,L=A.authors,z=null!=(t=k.image)?t:_.image,M=!w&&C,R=I.length>0;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=w?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:d,itemProp:"headline"},w?T:r.createElement(l.Z,{itemProp:"url",to:y},T)),r.createElement("div",{className:(0,a.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:x,itemProp:"datePublished"},N),void 0!==P&&r.createElement(r.Fragment,null," \xb7 ",D(P))),r.createElement(F,{authors:L,assets:k}))),z&&r.createElement("meta",{itemProp:"image",content:E(z,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(u.Zo,{components:c.Z},b)),(R||C)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(n={},n[h]=w,n))},R&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":M})},r.createElement(f.Z,{tags:I})),w&&B&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:B})),M&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":R})},r.createElement(l.Z,{to:A.permalink,"aria-label":"Read more about "+T},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(67294),a=n(39960),u=n(78665),o=n(38561),l=n(95999),i=n(89521);function s(e){var t,n=e.metadata,s=e.items,c=e.sidebar,m=n.allTagsPath,d=n.name,p=n.count,h=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:d});return r.createElement(u.Z,{title:f,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(a.Z,{href:m},r.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),s.map((function(e){var t=e.content;return r.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},86753:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(95999),u=n(87462),o=n(63366),l=n(86010),i="iconEdit_2_ui",s=["className"],c=function(e){var t=e.className,n=(0,o.Z)(e,s);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(i,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=n(89521);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},r.createElement(c,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),u=n(39960),o="tag_1Okp",l="tagRegular_3MiF",i="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,c=e.count;return r.createElement(u.Z,{href:n,className:(0,a.Z)(o,(t={},t[l]=!c,t[i]=c,t))},s,c&&r.createElement("span",null,c))}},20062:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),u=n(95999),o=n(7774),l="tags_2ga9",i="tag_11ep";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(l,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:i},r.createElement(o.Z,{name:t,permalink:n}))}))))}},48219:function(e,t,n){n.d(t,{O:function(){return D}});var r=n(87462),a=n(63366),u=n(67294),o=n(86010),l=n(39960),i=n(44996),s=n(76775),c=n(90541),m=n(13919),d=n(89521),p=n(47412),h=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],f=["className","isDropdownItem"],g=["className","isDropdownItem"],v=["mobile","position"];function D(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,p=e.to,f=e.href,g=e.label,v=e.activeClassName,D=void 0===v?"":v,F=e.prependBaseUrlToHref,E=e["data-language-prefix"],b=(0,a.Z)(e,h),_=(0,i.Z)(p),k=(0,i.Z)(n),A=(0,i.Z)(f,{forcePrependBaseUrl:!0}),C=g&&f&&!(0,m.Z)(f),Z="dropdown__link--active"===D,w=(0,s.TH)();if(E){f="pathname://"+E+w.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+w.hash,b.autoAddBaseUrl=!1,b.target="_self";var x=["java","dotnet","python"].some((function(e){return w.pathname.startsWith("/"+e)}));(w.pathname.startsWith(E)&&x&&E.length>1||1===E.length&&!x)&&(b.className+=" "+D)}return u.createElement(l.Z,(0,r.Z)({},f?{href:F?A:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(D)?"":D,to:_},n||o?{isActive:function(e,t){return o?(0,d.Fx)(o,t.pathname):t.pathname.startsWith(k)}}:null),b),C?u.createElement("span",null,g,u.createElement(c.Z,Z&&{width:12,height:12})):g)}function F(e){var t=e.className,n=e.isDropdownItem,l=void 0!==n&&n,i=(0,a.Z)(e,f),s=u.createElement(D,(0,r.Z)({className:(0,o.Z)(l?"dropdown__link":"navbar__item navbar__link",t)},i));return l?u.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,g));return u.createElement("li",{className:"menu__list-item"},u.createElement(D,(0,r.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,l=(e.position,(0,a.Z)(e,v)),i=o?E:F;return u.createElement(i,(0,r.Z)({},l,{activeClassName:null!=(t=l.activeClassName)?t:(0,p.E)(o)}))}},47412:function(e,t,n){n.d(t,{E:function(){return m},Z:function(){return d}});var r=n(63366),a=n(67294),u=n(48219),o=n(23154),l=n(55413),i=n(51093),s=["type"],c={default:function(){return u.Z},localeDropdown:function(){return l.Z},search:function(){return i.Z},dropdown:function(){return o.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(87548).Z}};var m=function(e){return e?"menu__link--active":"navbar__link--active"};function d(e){var t=e.type,n=(0,r.Z)(e,s),u=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=c[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(u);return a.createElement(o,n)}},11359:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(78695),u="loadingRing_3atr";function o(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(67855),a=n(15861),u=n(87757),o=n.n(u),l=n(35850),i=n.n(l),s=n(39376);function c(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function e(t){var n,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+s.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:i().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},15779:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(39376),a=n(67855),u=n(15861),o=n(87757),l=n.n(o),i=n(67294),s=n(78695),c=n(52263),m=n(10412),d=n(76775),p=n(3551),h=n(44241),f=n(86092),g=n(53318),v=n(85579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",b="cursor_6rPN",_="hitTree_2sUa",k="hitIcon_3jP2",A="hitPath_3Lax",C="noResultsIcon_1rmk",Z="hitFooter_1JML",w="hitWrapper_4Hzp",x="hitTitle_2AMl",N="hitAction_2kg3",y="noResults_1vI5",I="searchBarContainer_2P1H",P="searchBarLoadingRing_1FtX",T="searchIndexLoading_1eRR",B="input_1tay",L="hint_1WuO",z="suggestions_1cWc",M="dataset_3Xc2",R="empty_2isC";function U(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,o=e.isInterOfTree,l=e.isLastOfTree,i=0===n,s=1===n,c=[];o?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):l&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var m=c.map((function(e){return'<span class="'+_+'">'+e+"</span>"})),d='<span class="'+k+'">'+(i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+x+'">'+(0,g.o)(t.t,(0,v.m)(a,"t"),u)+"</span>"];return i||p.push('<span class="'+A+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(m,[d,'<span class="'+w+'">'],p,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function S(){return'<span class="'+y+'"><span class="'+C+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var j=n(11359);function H(){return W.apply(this,arguments)}function W(){return(W=(0,u.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(24485),n.e(90213)]).then(n.t.bind(n,24485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var V=function(e){var t,n=e.handleSearchBarToggle,o=(0,c.Z)().siteConfig.baseUrl,f=(0,d.k6)(),g=(0,d.TH)(),v=(0,i.useRef)(null),_=(0,i.useRef)("empty"),k=(0,i.useRef)(!1),A=(0,i.useState)(!1),C=A[0],w=A[1],x=(0,i.useState)(!1),N=x[0],y=x[1],W=(0,i.useCallback)((0,u.Z)(l().mark((function e(){var t,n,u,i,s,c,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===_.current){e.next=2;break}return e.abrupt("return");case 2:return _.current="loading",w(!0),e.next=6,Promise.all([(0,p.w)(o),H()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,i=n.zhDictionary,s=t[1],c=s(v.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:B,hint:L,suggestions:z,suggestion:E,cursor:b,dataset:M,empty:R}},[{source:(0,h.v)(u,i,r.qo),templates:{suggestion:U,empty:S,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=o+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=Z,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,o=n.h,l=t.tokens,i=u;if(r.vc&&l.length>0){for(var s,c=new URLSearchParams,m=(0,a.Z)(l);!(s=m()).done;){var d=s.value;c.append(O,d)}i+="?"+c.toString()}o&&(i+=o),f.push(i)})),_.current="done",w(!1),k.current&&((m=v.current).value&&c.autocomplete.open(),m.focus());case 15:case"end":return e.stop()}}),e)}))),[o,f]);(0,i.useEffect)((function(){if(r.vc){var e=m.default.canUseDOM?new URLSearchParams(g.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[g.search]);var V=(0,i.useCallback)((function(){k.current=!0,W(),null==n||n(!0)}),[n,W]),q=(0,i.useCallback)((function(){null==n||n(!1)}),[n]),Q=(0,i.useCallback)((function(){W()}),[W]),X=(0,i.useCallback)((function(e){e.target.value&&y(!0)}),[]);return i.createElement("div",{className:(0,s.Z)("navbar__search",I,(t={},t[T]=C&&N,t))},i.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:Q,onFocus:V,onBlur:q,onChange:X,ref:v}),i.createElement(j.Z,{className:P}))}},44241:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(67855),a=n(35850),u=n.n(a);function o(e,t){var n=[];return function e(a,u){if(0!==a.length){var o=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var l,i=function(e,t){var n=[];return function e(a,u){for(var o,l=0,i=!1,s=(0,r.Z)(t);!(o=s()).done;){var c=o.value;if(a.substr(0,c.length)===c){var m={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),m):n.push(m),i=!0}else for(var d=c.length-1;d>l;d-=1){var p=c.substr(0,d);if(a.substr(0,d)===p){l=d;var h={missed:u.missed,term:u.term.concat({value:p,trailing:!0})};a.length>d?e(a.substr(d),h):n.push(h),i=!0;break}}}i||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(o,t),s=(0,r.Z)(i);!(l=s()).done;){var c=l.value,m=u.concat.apply(u,c);e(a.slice(1),m)}else{var d=u.concat({value:o});e(a.slice(1),d)}}else n.push(u)}(e,[]),n}var l=n(39376);function i(e){return s(e).concat(s(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function s(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,s){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,l.dK);if(0!==c.length){var m=function(e,t){var n=o(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,s=(0,r.Z)(n);!(a=s()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var m,d,p=[],h=(0,r.Z)(l.dK);!(m=h()).done;){var f=m.value;if("en"===f)l._k||p.unshift(u().stopWordFilter);else{var g=u()[f];g.stopWordFilter&&p.unshift(g.stopWordFilter)}}if(p.length>0){var v=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var b=D.value,_=v(b);d.push(_),_.length<b.length&&_.length>0&&F.push(_)}n.push.apply(n,F)}else d=n.slice();for(var k,A=[],C=(0,r.Z)(d);!(k=C()).done;){var Z=k.value;if(Z.length>2)for(var w=Z.length-1;w>=0;w-=1)A.push(Z.slice(0,w).concat(Z.slice(w+1)))}return i(n).concat(i(A))}(c,t),d=[],p=function(){for(var t,a=h.value,u=a.term,o=a.tokens,l=function(){var a=t.value,l=a.documents,i=a.index,s=a.type;if(d.push.apply(d,i.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=l.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:s,page:0!==s&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:o,score:t.score}}))),d.length>=n)return{v:"break|search"}},i=(0,r.Z)(e);!(t=i()).done;){var s=l();if("object"==typeof s)return s.v}};e:for(var h,f=(0,r.Z)(m);!(h=f()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),s(d)}else s([])}}},98740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},85579:function(e,t,n){function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},86092:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(67855),a=n(98740);function u(e,t,n){for(var o,l=[],i=(0,r.Z)(t);!(o=i()).done;){var s=o.value,c=e.toLowerCase().indexOf(s);if(c>=0){c>0&&l.push(u(e.substr(0,c),t)),l.push("<mark>"+(0,a.X)(e.substr(c,s.length))+"</mark>");var m=c+s.length;m<e.length&&l.push(u(e.substr(m),t));break}}return 0===l.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):l.join("")}},53318:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(98740),a=n(86092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var l=n(39376);function i(e,t,n,r){void 0===r&&(r=l.Hk);for(var a={chunkIndex:-1},u=s(e,t,n,0,0,a),o=u.slice(0,a.chunkIndex),i=u[a.chunkIndex],c=[i.html],m=u.slice(a.chunkIndex+1),d=i.textLength,p=0,h=0,f=!1,g=!1;d<r;)if((p<=h||0===m.length)&&o.length>0){var v=o.pop();d+v.textLength<=r?(c.unshift(v.html),p+=v.textLength,d+=v.textLength):(f=!0,o.length=0)}else{if(!(m.length>0))break;var D=m.shift();d+D.textLength<=r?(c.push(D.html),h+=D.textLength,d+=D.textLength):(g=!0,m.length=0)}return(f||o.length>0)&&c.unshift("\u2026"),(g||m.length>0)&&c.push("\u2026"),c.join("")}function s(e,t,n,u,l,i){var c=[],m=t[u],d=m[0],p=m[1];if(d<l)(u+=1)<t.length&&c.push.apply(c,s(e,t,n,u,l));else{d>l&&c.push.apply(c,o(e.substring(l,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),i&&(i.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(d,p),n,!0),textLength:p});var h=d+p;(u+=1)<t.length?c.push.apply(c,s(e,t,n,u,h)):h<e.length&&c.push.apply(c,o(e.substr(h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},39376:function(e,t,n){n.d(t,{vc:function(){return l},rx:function(){return i},dK:function(){return u},_k:function(){return o},Hk:function(){return c},qo:function(){return s},Iz:function(){return m}});var r=n(35850),a=n.n(r);n(88465)(a()),n(72324).w(a()),n(93609)(a());var u=["en","zh"],o=!1,l=null,i="a9229354",s=8,c=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},72324:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);