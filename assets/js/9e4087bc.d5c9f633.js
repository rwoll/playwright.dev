"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[53608,46103],{63012:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(67294),u=t(11022),a=t(39960),o=t(95999);function i(e){var n=e.year,t=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,n),r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(a.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var n=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},n.map((function(e,n){return r.createElement("div",{key:n,className:"col col--4 margin-vert--lg"},r.createElement(i,e))})))))}function c(e){var n,t,a=e.archive,i=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),c=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=(n=a.blogPosts,t=n.reduceRight((function(e,n){var t=n.metadata.date.split("-")[0],r=e.get(t)||[];return e.set(t,[n].concat(r))}),new Map),Array.from(t,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(u.Z,{title:i,description:c},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},i),r.createElement("p",{className:"hero__subtitle"},c))),r.createElement("main",null,l.length>0&&r.createElement(s,{years:l})))}},48219:function(e,n,t){t.d(n,{O:function(){return F}});var r=t(87462),u=t(63366),a=t(67294),o=t(86010),i=t(39960),s=t(44996),c=t(76775),l=t(90541),h=t(13919),d=t(89521),p=t(47412),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],m=["className","isDropdownItem"],v=["className","isDropdownItem"],D=["mobile","position"];function F(e){var n,t=e.activeBasePath,o=e.activeBaseRegex,p=e.to,m=e.href,v=e.label,D=e.activeClassName,F=void 0===D?"":D,g=e.prependBaseUrlToHref,A=e["data-language-prefix"],E=(0,u.Z)(e,f),C=(0,s.Z)(p),k=(0,s.Z)(t),_=(0,s.Z)(m,{forcePrependBaseUrl:!0}),w=v&&m&&!(0,h.Z)(m),x="dropdown__link--active"===F,y=(0,c.TH)();if(A){m="pathname://"+A+y.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+y.hash,E.autoAddBaseUrl=!1,E.target="_self";var b=["java","dotnet","python"].some((function(e){return y.pathname.startsWith("/"+e)}));(y.pathname.startsWith(A)&&b&&A.length>1||1===A.length&&!b)&&(E.className+=" "+F)}return a.createElement(i.Z,(0,r.Z)({},m?{href:g?_:m}:Object.assign({isNavLink:!0,activeClassName:null!=(n=E.className)&&n.includes(F)?"":F,to:C},t||o?{isActive:function(e,n){return o?(0,d.Fx)(o,n.pathname):n.pathname.startsWith(k)}}:null),E),w?a.createElement("span",null,v,a.createElement(l.Z,x&&{width:12,height:12})):v)}function g(e){var n=e.className,t=e.isDropdownItem,i=void 0!==t&&t,s=(0,u.Z)(e,m),c=a.createElement(F,(0,r.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",n)},s));return i?a.createElement("li",null,c):c}function A(e){var n=e.className,t=(e.isDropdownItem,(0,u.Z)(e,v));return a.createElement("li",{className:"menu__list-item"},a.createElement(F,(0,r.Z)({className:(0,o.Z)("menu__link",n)},t)))}n.Z=function(e){var n,t=e.mobile,o=void 0!==t&&t,i=(e.position,(0,u.Z)(e,D)),s=o?A:g;return a.createElement(s,(0,r.Z)({},i,{activeClassName:null!=(n=i.activeClassName)?n:(0,p.E)(o)}))}},47412:function(e,n,t){t.d(n,{E:function(){return h},Z:function(){return d}});var r=t(63366),u=t(67294),a=t(48219),o=t(23154),i=t(55413),s=t(51093),c=["type"],l={default:function(){return a.Z},localeDropdown:function(){return i.Z},search:function(){return s.Z},dropdown:function(){return o.Z},docsVersion:function(){return t(47250).Z},docsVersionDropdown:function(){return t(59308).Z},doc:function(){return t(87548).Z}};var h=function(e){return e?"menu__link--active":"navbar__link--active"};function d(e){var n=e.type,t=(0,r.Z)(e,c),a=function(e,n){return e&&"default"!==e?e:n?"dropdown":"default"}(n,void 0!==t.items),o=function(e){var n=l[e];if(!n)throw new Error('No NavbarItem component found for type "'+e+'".');return n()}(a);return u.createElement(o,t)}},11359:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),u=t(78695),a="loadingRing_3atr";function o(e){var n=e.className;return r.createElement("div",{className:(0,u.Z)(a,n)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,n,t){t.d(n,{w:function(){return l}});var r=t(67855),u=t(15861),a=t(87757),o=t.n(a),i=t(35850),s=t.n(i),c=t(39376);function l(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(o().mark((function e(n){var t,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(n+"search-index.json?_="+c.rx);case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,u=t.map((function(e,n){var t=e.documents,r=e.index;return{type:n,documents:t,index:s().Index.load(r)}})),a=t.reduce((function(e,n){for(var t,u=(0,r.Z)(n.index.invertedIndex);!(t=u()).done;){var a=t.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},15779:function(e,n,t){t.d(n,{Z:function(){return Q}});var r=t(39376),u=t(67855),a=t(15861),o=t(87757),i=t.n(o),s=t(67294),c=t(78695),l=t(52263),h=t(10412),d=t(76775),p=t(3551),f=t(44241),m=t(86092),v=t(53318),D=t(85579),F="searchBar_2moK",g="dropdownMenu_17SC",A="suggestion_1kAZ",E="cursor_6rPN",C="hitTree_2sUa",k="hitIcon_3jP2",_="hitPath_3Lax",w="noResultsIcon_1rmk",x="hitFooter_1JML",y="hitWrapper_4Hzp",b="hitTitle_2AMl",Z="hitAction_2kg3",N="noResults_1vI5",I="searchBarContainer_2P1H",B="searchBarLoadingRing_1FtX",z="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",T="suggestions_1cWc",j="dataset_3Xc2",S="empty_2isC";function H(e){var n=e.document,t=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,s=0===t,c=1===t,l=[];o?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+C+'">'+e+"</span>"})),d='<span class="'+k+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':c?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+b+'">'+(0,v.o)(n.t,(0,D.m)(u,"t"),a)+"</span>"];return s||p.push('<span class="'+_+'">'+(0,m.C)(r.t||(n.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(h,[d,'<span class="'+y+'">'],p,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function M(){return'<span class="'+N+'"><span class="'+w+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=t(11359);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(24485),t.e(90213)]).then(t.t.bind(t,24485,23));case 2:return n=e.sent,(r=n.default).noConflict?r.noConflict():n.noConflict&&n.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var Q=function(e){var n,t=e.handleSearchBarToggle,o=(0,l.Z)().siteConfig.baseUrl,m=(0,d.k6)(),v=(0,d.TH)(),D=(0,s.useRef)(null),C=(0,s.useRef)("empty"),k=(0,s.useRef)(!1),_=(0,s.useState)(!1),w=_[0],y=_[1],b=(0,s.useState)(!1),Z=b[0],N=b[1],U=(0,s.useCallback)((0,a.Z)(i().mark((function e(){var n,t,a,s,c,l,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===C.current){e.next=2;break}return e.abrupt("return");case 2:return C.current="loading",y(!0),e.next=6,Promise.all([(0,p.w)(o),W()]);case 6:n=e.sent,t=n[0],a=t.wrappedIndexes,s=t.zhDictionary,c=n[1],l=c(D.current,{hint:!1,autoselect:!0,cssClasses:{root:F,noPrefix:!0,dropdownMenu:g,input:L,hint:R,suggestions:T,suggestion:A,cursor:E,dataset:j,empty:S}},[{source:(0,f.v)(a,s,r.qo),templates:{suggestion:H,empty:M,footer:function(e){var n=e.query;if(!e.isEmpty){var t=document.createElement("a"),u=o+"search?q="+encodeURIComponent(n);t.href=u,t.textContent=r.Iz.see_all_results,t.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),m.push(u))}));var a=document.createElement("div");return a.className=x,a.appendChild(t),a}}}}]).on("autocomplete:selected",(function(e,n){var t=n.document,a=t.u,o=t.h,i=n.tokens,s=a;if(r.vc&&i.length>0){for(var c,l=new URLSearchParams,h=(0,u.Z)(i);!(c=h()).done;){var d=c.value;l.append(O,d)}s+="?"+l.toString()}o&&(s+=o),m.push(s)})),C.current="done",y(!1),k.current&&((h=D.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[o,m]);(0,s.useEffect)((function(){if(r.vc){var e=h.default.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var n=document.querySelector("article");if(n){var t=new r.vc(n);t.unmark(),t.mark(e)}}))}}),[v.search]);var Q=(0,s.useCallback)((function(){k.current=!0,U(),null==t||t(!0)}),[t,U]),V=(0,s.useCallback)((function(){null==t||t(!1)}),[t]),X=(0,s.useCallback)((function(){U()}),[U]),q=(0,s.useCallback)((function(e){e.target.value&&N(!0)}),[]);return s.createElement("div",{className:(0,c.Z)("navbar__search",I,(n={},n[z]=w&&Z,n))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:Q,onBlur:V,onChange:q,ref:D}),s.createElement(P.Z,{className:B}))}},44241:function(e,n,t){t.d(n,{v:function(){return l}});var r=t(67855),u=t(35850),a=t.n(u);function o(e,n){var t=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,s=function(e,n){var t=[];return function e(u,a){for(var o,i=0,s=!1,c=(0,r.Z)(n);!(o=c()).done;){var l=o.value;if(u.substr(0,l.length)===l){var h={missed:a.missed,term:a.term.concat({value:l})};u.length>l.length?e(u.substr(l.length),h):t.push(h),s=!0}else for(var d=l.length-1;d>i;d-=1){var p=l.substr(0,d);if(u.substr(0,d)===p){i=d;var f={missed:a.missed,term:a.term.concat({value:p,trailing:!0})};u.length>d?e(u.substr(d),f):t.push(f),s=!0;break}}}s||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&t.push(a))}(e,{missed:0,term:[]}),t.sort((function(e,n){var t=e.missed>0?1:0,r=n.missed>0?1:0;return t!==r?t-r:e.term.length-n.term.length})).map((function(e){return e.term}))}(o,n),c=(0,r.Z)(s);!(i=c()).done;){var l=i.value,h=a.concat.apply(a,l);e(u.slice(1),h)}else{var d=a.concat({value:o});e(u.slice(1),d)}}else t.push(a)}(e,[]),t}var i=t(39376);function s(e){return c(e).concat(c(e.filter((function(e){var n=e[e.length-1];return!n.trailing&&n.maybeTyping})),!0))}function c(e,n){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(n?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function l(e,n,t){return function(u,c){var l=function(e,n){if(1===n.length&&["ja","jp","th"].includes(n[0]))return a()[n[0]].tokenizer(e).map((function(e){return e.toString()}));var t=/[^-\s]+/g;return n.includes("zh")&&(t=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(t)||[]}(u,i.dK);if(0!==l.length){var h=function(e,n){var t=o(e,n);if(0===t.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,c=(0,r.Z)(t);!(u=c()).done;){var l=u.value;l[l.length-1].maybeTyping=!0}for(var h,d,p=[],f=(0,r.Z)(i.dK);!(h=f()).done;){var m=h.value;if("en"===m)i._k||p.unshift(a().stopWordFilter);else{var v=a()[m];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var D=function(e){return p.reduce((function(e,n){return e.filter((function(e){return n(e.value)}))}),e)};d=[];for(var F,g=[],A=(0,r.Z)(t);!(F=A()).done;){var E=F.value,C=D(E);d.push(C),C.length<E.length&&C.length>0&&g.push(C)}t.push.apply(t,g)}else d=t.slice();for(var k,_=[],w=(0,r.Z)(d);!(k=w()).done;){var x=k.value;if(x.length>2)for(var y=x.length-1;y>=0;y-=1)_.push(x.slice(0,y).concat(x.slice(y+1)))}return s(t).concat(s(_))}(l,n),d=[],p=function(){for(var n,u=f.value,a=u.term,o=u.tokens,i=function(){var u=n.value,i=u.documents,s=u.index,c=u.type;if(d.push.apply(d,s.query((function(e){for(var n,t=(0,r.Z)(a);!(n=t()).done;){var u=n.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,t).filter((function(e){return!d.some((function(n){return n.document.i.toString()===e.ref}))})).slice(0,t-d.length).map((function(n){var t=i.find((function(e){return e.i.toString()===n.ref}));return{document:t,type:c,page:0!==c&&e[0].documents.find((function(e){return e.i===t.p})),metadata:n.matchData.metadata,tokens:o,score:n.score}}))),d.length>=t)return{v:"break|search"}},s=(0,r.Z)(e);!(n=s()).done;){var c=i();if("object"==typeof c)return c.v}};e:for(var f,m=(0,r.Z)(h);!(f=m()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,n){e.index=n})),e.sort((function(n,t){var r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index,u=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index;return-1===r&&(r=n.index),-1===u&&(u=t.index),r===u?0===n.type?-1:0===t.type?1:n.index-t.index:r-u}))}(d),function(e){e.forEach((function(n,t){t>0&&n.page&&e.some((function(e){return e.document===n.page}))&&(t<e.length-1&&e[t+1].page===n.page?n.isInterOfTree=!0:n.isLastOfTree=!0)}))}(d),c(d)}else c([])}}},98740:function(e,n,t){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}t.d(n,{X:function(){return r}})},85579:function(e,n,t){function r(e,n){for(var t=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[n]&&t.push.apply(t,a[n].position)}return t.sort((function(e,n){return e[0]-n[0]||n[1]-e[1]}))}t.d(n,{m:function(){return r}})},86092:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(67855),u=t(98740);function a(e,n,t){for(var o,i=[],s=(0,r.Z)(n);!(o=s()).done;){var c=o.value,l=e.toLowerCase().indexOf(c);if(l>=0){l>0&&i.push(a(e.substr(0,l),n)),i.push("<mark>"+(0,u.X)(e.substr(l,c.length))+"</mark>");var h=l+c.length;h<e.length&&i.push(a(e.substr(h),n));break}}return 0===i.length?t?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):i.join("")}},53318:function(e,n,t){t.d(n,{o:function(){return s}});var r=t(98740),u=t(86092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var n=[],t=0,r=e;r.length>0;){var u=r.match(a);if(!u){n.push(r);break}u.index>0&&n.push(r.substr(0,u.index)),n.push(u[0]),t+=u.index+u[0].length,r=e.substr(t)}return n}var i=t(39376);function s(e,n,t,r){void 0===r&&(r=i.Hk);for(var u={chunkIndex:-1},a=c(e,n,t,0,0,u),o=a.slice(0,u.chunkIndex),s=a[u.chunkIndex],l=[s.html],h=a.slice(u.chunkIndex+1),d=s.textLength,p=0,f=0,m=!1,v=!1;d<r;)if((p<=f||0===h.length)&&o.length>0){var D=o.pop();d+D.textLength<=r?(l.unshift(D.html),p+=D.textLength,d+=D.textLength):(m=!0,o.length=0)}else{if(!(h.length>0))break;var F=h.shift();d+F.textLength<=r?(l.push(F.html),f+=F.textLength,d+=F.textLength):(v=!0,h.length=0)}return(m||o.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function c(e,n,t,a,i,s){var l=[],h=n[a],d=h[0],p=h[1];if(d<i)(a+=1)<n.length&&l.push.apply(l,c(e,n,t,a,i));else{d>i&&l.push.apply(l,o(e.substring(i,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=l.length),l.push({html:(0,u.C)(e.substr(d,p),t,!0),textLength:p});var f=d+p;(a+=1)<n.length?l.push.apply(l,c(e,n,t,a,f)):f<e.length&&l.push.apply(l,o(e.substr(f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return l}},39376:function(e,n,t){t.d(n,{vc:function(){return i},rx:function(){return s},dK:function(){return a},_k:function(){return o},Hk:function(){return l},qo:function(){return c},Iz:function(){return h}});var r=t(35850),u=t.n(r);t(88465)(u()),t(72324).w(u()),t(93609)(u());var a=["en","zh"],o=!1,i=null,s="a9229354",c=8,l=50,h={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},72324:function(e,n,t){function r(e){var n=new RegExp("^[^"+e+"]+","u"),t=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(n,"").replace(t,"")}))}}function u(e,n){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),n&&(this.tokenizer=n)},n&&(e.zh.tokenizer=n),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}t.d(n,{w:function(){return u}})}}]);