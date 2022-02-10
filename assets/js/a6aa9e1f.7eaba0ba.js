"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[93089,46103],{78665:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(63366),a=n(67294),u=n(86010),i=n(11022),o=n(39960),l="sidebar_2ahu",s="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",h=n(95999);function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,u.Z)(l,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,u.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:c},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var v=["sidebar","toc","children"];var g=function(e){var t=e.sidebar,n=e.toc,o=e.children,l=(0,r.Z)(e,v),s=t&&t.items.length>0;return a.createElement(i.Z,l,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(f,{sidebar:t})),a.createElement("main",{className:(0,u.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},2754:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(67294),a=n(52263),u=n(78665),i=n(38561),o=n(39960),l=n(95999);var s=function(e){var t=e.metadata,n=t.previousPage,a=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=n(89521);var m=function(e){var t=e.metadata,n=e.items,o=e.sidebar,l=(0,a.Z)().siteConfig.title,m=t.blogDescription,d=t.blogTitle,p="/"===t.permalink?l:d;return r.createElement(u.Z,{title:p,description:m,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},n.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s,{metadata:t}))}},38561:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(67294),a=n(86010),u=n(3905),i=n(95999),o=n(39960),l=n(44996),s=n(89521),c=n(67707),m=n(86753),d="blogPostTitle_GeHD",p="blogPostData_291c",h="blogPostDetailsFull_3kfx",f=n(20062),v="image_1yU8";var g=function(e){var t=e.author,n=t.name,a=t.title,u=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:u},r.createElement("img",{className:v,src:i,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:u,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},D="authorCol_1R69";function F(e){var t=e.authors,n=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var u;return r.createElement("div",{className:(0,a.Z)("col col--6",D),key:t},r.createElement(g,{author:Object.assign({},e,{imageURL:null!=(u=n.authorsImageUrls[t])?u:e.imageURL})}))})))}var E=function(e){var t,n,v,g,D=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,l.C)().withBaseUrl,b=e.children,_=e.frontMatter,k=e.assets,A=e.metadata,Z=e.truncated,C=e.isBlogPostPage,w=void 0!==C&&C,x=A.date,N=A.formattedDate,y=A.permalink,I=A.tags,B=A.readingTime,T=A.title,P=A.editUrl,L=A.authors,z=null!=(t=k.image)?t:_.image,R=!w&&Z,M=I.length>0;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(g=w?"h1":"h2",r.createElement("header",null,r.createElement(g,{className:d,itemProp:"headline"},w?T:r.createElement(o.Z,{itemProp:"url",to:y},T)),r.createElement("div",{className:(0,a.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:x,itemProp:"datePublished"},N),void 0!==B&&r.createElement(r.Fragment,null," \xb7 ",D(B))),r.createElement(F,{authors:L,assets:k}))),z&&r.createElement("meta",{itemProp:"image",content:E(z,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(u.Zo,{components:c.Z},b)),(M||Z)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(n={},n[h]=w,n))},M&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":R})},r.createElement(f.Z,{tags:I})),w&&P&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:P})),R&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":M})},r.createElement(o.Z,{to:A.permalink,"aria-label":"Read more about "+T},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(95999),u=n(87462),i=n(63366),o=n(86010),l="iconEdit_2_ui",s=["className"],c=function(e){var t=e.className,n=(0,i.Z)(e,s);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(l,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=n(89521);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},r.createElement(c,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),u=n(39960),i="tag_1Okp",o="tagRegular_3MiF",l="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,c=e.count;return r.createElement(u.Z,{href:n,className:(0,a.Z)(i,(t={},t[o]=!c,t[l]=c,t))},s,c&&r.createElement("span",null,c))}},20062:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),u=n(95999),i=n(7774),o="tags_2ga9",l="tag_11ep";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:l},r.createElement(i.Z,{name:t,permalink:n}))}))))}},48219:function(e,t,n){n.d(t,{O:function(){return D}});var r=n(87462),a=n(63366),u=n(67294),i=n(86010),o=n(39960),l=n(44996),s=n(76775),c=n(90541),m=n(13919),d=n(89521),p=n(47412),h=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],g=["mobile","position"];function D(e){var t,n=e.activeBasePath,i=e.activeBaseRegex,p=e.to,f=e.href,v=e.label,g=e.activeClassName,D=void 0===g?"":g,F=e.prependBaseUrlToHref,E=e["data-language-prefix"],b=(0,a.Z)(e,h),_=(0,l.Z)(p),k=(0,l.Z)(n),A=(0,l.Z)(f,{forcePrependBaseUrl:!0}),Z=v&&f&&!(0,m.Z)(f),C="dropdown__link--active"===D,w=(0,s.TH)();if(E){f="pathname://"+E+w.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+w.hash,b.autoAddBaseUrl=!1,b.target="_self";var x=["java","dotnet","python"].some((function(e){return w.pathname.startsWith("/"+e)}));(w.pathname.startsWith(E)&&x&&E.length>1||1===E.length&&!x)&&(b.className+=" "+D)}return u.createElement(o.Z,(0,r.Z)({},f?{href:F?A:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(D)?"":D,to:_},n||i?{isActive:function(e,t){return i?(0,d.Fx)(i,t.pathname):t.pathname.startsWith(k)}}:null),b),Z?u.createElement("span",null,v,u.createElement(c.Z,C&&{width:12,height:12})):v)}function F(e){var t=e.className,n=e.isDropdownItem,o=void 0!==n&&n,l=(0,a.Z)(e,f),s=u.createElement(D,(0,r.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},l));return o?u.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return u.createElement("li",{className:"menu__list-item"},u.createElement(D,(0,r.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,i=void 0!==n&&n,o=(e.position,(0,a.Z)(e,g)),l=i?E:F;return u.createElement(l,(0,r.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,p.E)(i)}))}},47412:function(e,t,n){n.d(t,{E:function(){return m},Z:function(){return d}});var r=n(63366),a=n(67294),u=n(48219),i=n(23154),o=n(55413),l=n(51093),s=["type"],c={default:function(){return u.Z},localeDropdown:function(){return o.Z},search:function(){return l.Z},dropdown:function(){return i.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(87548).Z}};var m=function(e){return e?"menu__link--active":"navbar__link--active"};function d(e){var t=e.type,n=(0,r.Z)(e,s),u=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),i=function(e){var t=c[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(u);return a.createElement(i,n)}},11359:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(78695),u="loadingRing_3atr";function i(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(67855),a=n(15861),u=n(87757),i=n.n(u),o=n(35850),l=n.n(o),s=n(39376);function c(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function e(t){var n,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+s.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:l().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},15779:function(e,t,n){n.d(t,{Z:function(){return q}});var r=n(39376),a=n(67855),u=n(15861),i=n(87757),o=n.n(i),l=n(67294),s=n(78695),c=n(52263),m=n(10412),d=n(76775),p=n(3551),h=n(44241),f=n(86092),v=n(53318),g=n(85579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",b="cursor_6rPN",_="hitTree_2sUa",k="hitIcon_3jP2",A="hitPath_3Lax",Z="noResultsIcon_1rmk",C="hitFooter_1JML",w="hitWrapper_4Hzp",x="hitTitle_2AMl",N="hitAction_2kg3",y="noResults_1vI5",I="searchBarContainer_2P1H",B="searchBarLoadingRing_1FtX",T="searchIndexLoading_1eRR",P="input_1tay",L="hint_1WuO",z="suggestions_1cWc",R="dataset_3Xc2",M="empty_2isC";function U(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,i=e.isInterOfTree,o=e.isLastOfTree,l=0===n,s=1===n,c=[];i?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var m=c.map((function(e){return'<span class="'+_+'">'+e+"</span>"})),d='<span class="'+k+'">'+(l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+x+'">'+(0,v.o)(t.t,(0,g.m)(a,"t"),u)+"</span>"];return l||p.push('<span class="'+A+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(m,[d,'<span class="'+w+'">'],p,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function S(){return'<span class="'+y+'"><span class="'+Z+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var j=n(11359);function H(){return W.apply(this,arguments)}function W(){return(W=(0,u.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(24485),n.e(90213)]).then(n.t.bind(n,24485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var q=function(e){var t,n=e.handleSearchBarToggle,i=(0,c.Z)().siteConfig.baseUrl,f=(0,d.k6)(),v=(0,d.TH)(),g=(0,l.useRef)(null),_=(0,l.useRef)("empty"),k=(0,l.useRef)(!1),A=(0,l.useState)(!1),Z=A[0],w=A[1],x=(0,l.useState)(!1),N=x[0],y=x[1],W=(0,l.useCallback)((0,u.Z)(o().mark((function e(){var t,n,u,l,s,c,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===_.current){e.next=2;break}return e.abrupt("return");case 2:return _.current="loading",w(!0),e.next=6,Promise.all([(0,p.w)(i),H()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,l=n.zhDictionary,s=t[1],c=s(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:P,hint:L,suggestions:z,suggestion:E,cursor:b,dataset:R,empty:M}},[{source:(0,h.v)(u,l,r.qo),templates:{suggestion:U,empty:S,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=i+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=C,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,i=n.h,o=t.tokens,l=u;if(r.vc&&o.length>0){for(var s,c=new URLSearchParams,m=(0,a.Z)(o);!(s=m()).done;){var d=s.value;c.append(O,d)}l+="?"+c.toString()}i&&(l+=i),f.push(l)})),_.current="done",w(!1),k.current&&((m=g.current).value&&c.autocomplete.open(),m.focus());case 15:case"end":return e.stop()}}),e)}))),[i,f]);(0,l.useEffect)((function(){if(r.vc){var e=m.default.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var q=(0,l.useCallback)((function(){k.current=!0,W(),null==n||n(!0)}),[n,W]),V=(0,l.useCallback)((function(){null==n||n(!1)}),[n]),Q=(0,l.useCallback)((function(){W()}),[W]),X=(0,l.useCallback)((function(e){e.target.value&&y(!0)}),[]);return l.createElement("div",{className:(0,s.Z)("navbar__search",I,(t={},t[T]=Z&&N,t))},l.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:Q,onFocus:q,onBlur:V,onChange:X,ref:g}),l.createElement(j.Z,{className:B}))}},44241:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(67855),a=n(35850),u=n.n(a);function i(e,t){var n=[];return function e(a,u){if(0!==a.length){var i=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(i))for(var o,l=function(e,t){var n=[];return function e(a,u){for(var i,o=0,l=!1,s=(0,r.Z)(t);!(i=s()).done;){var c=i.value;if(a.substr(0,c.length)===c){var m={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),m):n.push(m),l=!0}else for(var d=c.length-1;d>o;d-=1){var p=c.substr(0,d);if(a.substr(0,d)===p){o=d;var h={missed:u.missed,term:u.term.concat({value:p,trailing:!0})};a.length>d?e(a.substr(d),h):n.push(h),l=!0;break}}}l||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(i,t),s=(0,r.Z)(l);!(o=s()).done;){var c=o.value,m=u.concat.apply(u,c);e(a.slice(1),m)}else{var d=u.concat({value:i});e(a.slice(1),d)}}else n.push(u)}(e,[]),n}var o=n(39376);function l(e){return s(e).concat(s(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function s(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,s){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,o.dK);if(0!==c.length){var m=function(e,t){var n=i(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,s=(0,r.Z)(n);!(a=s()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var m,d,p=[],h=(0,r.Z)(o.dK);!(m=h()).done;){var f=m.value;if("en"===f)o._k||p.unshift(u().stopWordFilter);else{var v=u()[f];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var g=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var b=D.value,_=g(b);d.push(_),_.length<b.length&&_.length>0&&F.push(_)}n.push.apply(n,F)}else d=n.slice();for(var k,A=[],Z=(0,r.Z)(d);!(k=Z()).done;){var C=k.value;if(C.length>2)for(var w=C.length-1;w>=0;w-=1)A.push(C.slice(0,w).concat(C.slice(w+1)))}return l(n).concat(l(A))}(c,t),d=[],p=function(){for(var t,a=h.value,u=a.term,i=a.tokens,o=function(){var a=t.value,o=a.documents,l=a.index,s=a.type;if(d.push.apply(d,l.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=o.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:s,page:0!==s&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:i,score:t.score}}))),d.length>=n)return{v:"break|search"}},l=(0,r.Z)(e);!(t=l()).done;){var s=o();if("object"==typeof s)return s.v}};e:for(var h,f=(0,r.Z)(m);!(h=f()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),s(d)}else s([])}}},98740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},85579:function(e,t,n){function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},86092:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(67855),a=n(98740);function u(e,t,n){for(var i,o=[],l=(0,r.Z)(t);!(i=l()).done;){var s=i.value,c=e.toLowerCase().indexOf(s);if(c>=0){c>0&&o.push(u(e.substr(0,c),t)),o.push("<mark>"+(0,a.X)(e.substr(c,s.length))+"</mark>");var m=c+s.length;m<e.length&&o.push(u(e.substr(m),t));break}}return 0===o.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):o.join("")}},53318:function(e,t,n){n.d(t,{o:function(){return l}});var r=n(98740),a=n(86092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function i(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var o=n(39376);function l(e,t,n,r){void 0===r&&(r=o.Hk);for(var a={chunkIndex:-1},u=s(e,t,n,0,0,a),i=u.slice(0,a.chunkIndex),l=u[a.chunkIndex],c=[l.html],m=u.slice(a.chunkIndex+1),d=l.textLength,p=0,h=0,f=!1,v=!1;d<r;)if((p<=h||0===m.length)&&i.length>0){var g=i.pop();d+g.textLength<=r?(c.unshift(g.html),p+=g.textLength,d+=g.textLength):(f=!0,i.length=0)}else{if(!(m.length>0))break;var D=m.shift();d+D.textLength<=r?(c.push(D.html),h+=D.textLength,d+=D.textLength):(v=!0,m.length=0)}return(f||i.length>0)&&c.unshift("\u2026"),(v||m.length>0)&&c.push("\u2026"),c.join("")}function s(e,t,n,u,o,l){var c=[],m=t[u],d=m[0],p=m[1];if(d<o)(u+=1)<t.length&&c.push.apply(c,s(e,t,n,u,o));else{d>o&&c.push.apply(c,i(e.substring(o,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),l&&(l.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(d,p),n,!0),textLength:p});var h=d+p;(u+=1)<t.length?c.push.apply(c,s(e,t,n,u,h)):h<e.length&&c.push.apply(c,i(e.substr(h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},39376:function(e,t,n){n.d(t,{vc:function(){return o},rx:function(){return l},dK:function(){return u},_k:function(){return i},Hk:function(){return c},qo:function(){return s},Iz:function(){return m}});var r=n(35850),a=n.n(r);n(88465)(a()),n(72324).w(a()),n(93609)(a());var u=["en","zh"],i=!1,o=null,l="a9229354",s=8,c=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},72324:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);