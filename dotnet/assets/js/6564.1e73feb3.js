(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6564],{4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),u=n(4543),a=n(4973);t.default=function(){return r.createElement(u.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},8219:function(e,t,n){"use strict";var r=n(2122),u=n(9756),a=n(7294),o=n(6010),i=n(6742),s=n(4996),l=n(5977),c=n(6700);function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,c=e.href,h=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,p=e.prependBaseUrlToHref,m=e["data-language-prefix"],v=(0,u.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),D=(0,s.Z)(o),F=(0,s.Z)(t),g=(0,s.Z)(c,{forcePrependBaseUrl:!0}),E=(0,l.TH)();if(m){c="pathname://"+m+E.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+E.hash,v.autoAddBaseUrl=!1,v.target="_self";var k=["java","dotnet","python"].some((function(e){return E.pathname.startsWith("/"+e)}));(E.pathname.startsWith(m)&&k&&m.length>1||1===m.length&&!k)&&(v.className+=" "+f)}return a.createElement(i.Z,(0,r.Z)({},c?{href:p?g:c}:Object.assign({isNavLink:!0,activeClassName:f,to:D},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(F)}}:null),v),h)}function d(e){var t,n=e.items,i=e.position,s=e.className,l=(0,u.Z)(e,["items","position","className"]),c=(0,a.useRef)(null),d=(0,a.useRef)(null),f=(0,a.useState)(!1),p=f[0],m=f[1];(0,a.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var v=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?a.createElement("div",{ref:c,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":p})},a.createElement(h,(0,r.Z)({className:v(s)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),m(!p))}}),null!=(t=l.children)?t:l.label),a.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,i=(0,u.Z)(e,["className"]);return a.createElement("li",{key:t},a.createElement(h,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),m(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:v(o,!0)},i)))})))):a.createElement(h,(0,r.Z)({className:v(s)},l))}function f(e){var t,n,i,s=e.items,d=e.className,f=(e.position,(0,u.Z)(e,["items","className","position"])),p=(0,a.useRef)(null),m=(0,l.TH)().pathname,v=(0,a.useState)((function(){var e;return null==(e=!(null!=s&&s.some((function(e){return(0,c.Mg)(e.to,m)}))))||e})),D=v[0],F=v[1],g=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!s)return a.createElement("li",{className:"menu__list-item"},a.createElement(h,(0,r.Z)({className:g(d)},f)));var E=null!=(t=p.current)&&t.scrollHeight?(null==(n=p.current)?void 0:n.scrollHeight)+"px":void 0;return a.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":D})},a.createElement(h,(0,r.Z)({role:"button",className:g(d,!0)},f,{onClick:function(e){e.preventDefault(),F((function(e){return!e}))}}),null!=(i=f.children)?i:f.label),a.createElement("ul",{className:"menu__list",ref:p,style:{height:D?void 0:E}},s.map((function(e,t){var n=e.className,o=(0,u.Z)(e,["className"]);return a.createElement("li",{className:"menu__list-item",key:t},a.createElement(h,(0,r.Z)({activeClassName:"menu__link--active",className:g(n)},o,{onClick:f.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,u.Z)(e,["mobile"]),o=n?f:d;return a.createElement(o,r)}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),u=n(8695),a="loadingRing_3atr";function o(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(8173),u=n(2137),a=n(7757),o=n.n(a),i=n(5850),s=n.n(i),l=n(8141);function c(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(o().mark((function e(t){var n,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:s().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var r=n(8141),u=n(8173),a=n(2137),o=n(7757),i=n.n(o),s=n(7294),l=n(8695),c=n(2263),h=n(412),d=n(5977),f=n(3551),p=n(8938),m=n(6092),v=n(5401),D=n(5579),F="searchBar_2moK",g="dropdownMenu_17SC",E="suggestion_1kAZ",k="cursor_6rPN",C="hitTree_2sUa",A="hitIcon_3jP2",_="hitPath_3Lax",w="noResultsIcon_1rmk",x="hitFooter_1JML",y="hitWrapper_4Hzp",b="hitTitle_2AMl",N="hitAction_2kg3",Z="noResults_1vI5",B="searchBarContainer_2P1H",z="searchBarLoadingRing_1FtX",I="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",S="suggestions_1cWc",T="dataset_3Xc2",H="empty_2isC";function j(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,s=0===n,l=1===n,c=[];o?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=c.map((function(e){return'<span class="'+C+'">'+e+"</span>"})),d='<span class="'+A+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",f=['<span class="'+b+'">'+(0,v.o)(t.t,(0,D.m)(u,"t"),a)+"</span>"];return s||f.push('<span class="'+_+'">'+(0,m.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(h,[d,'<span class="'+y+'">'],f,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function M(){return'<span class="'+Z+'"><span class="'+w+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=n(4535);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var K=function(e){var t,n=e.handleSearchBarToggle,o=(0,c.default)().siteConfig.baseUrl,m=(0,d.k6)(),v=(0,d.TH)(),D=(0,s.useRef)(null),C=(0,s.useRef)("empty"),A=(0,s.useRef)(!1),_=(0,s.useState)(!1),w=_[0],y=_[1],b=(0,s.useState)(!1),N=b[0],Z=b[1],U=(0,s.useCallback)((0,a.Z)(i().mark((function e(){var t,n,a,s,l,c,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===C.current){e.next=2;break}return e.abrupt("return");case 2:return C.current="loading",y(!0),e.next=6,Promise.all([(0,f.w)(o),W()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,s=n.zhDictionary,l=t[1],c=l(D.current,{hint:!1,autoselect:!0,cssClasses:{root:F,noPrefix:!0,dropdownMenu:g,input:L,hint:R,suggestions:S,suggestion:E,cursor:k,dataset:T,empty:H}},[{source:(0,p.v)(a,s,r.qo),templates:{suggestion:j,empty:M,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=o+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),m.push(u))}));var a=document.createElement("div");return a.className=x,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,o=n.h,i=t.tokens,s=a;if(r.vc&&i.length>0){for(var l,c=new URLSearchParams,h=(0,u.Z)(i);!(l=h()).done;){var d=l.value;c.append(O,d)}s+="?"+c.toString()}o&&(s+=o),m.push(s)})),C.current="done",y(!1),A.current&&((h=D.current).value&&c.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[o,m]);(0,s.useEffect)((function(){if(r.vc){var e=h.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];if(0!==e.length){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}}}),[v.search]);var K=(0,s.useCallback)((function(){A.current=!0,U(),null==n||n(!0)}),[n,U]),Q=(0,s.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,s.useCallback)((function(){U()}),[U]),q=(0,s.useCallback)((function(e){e.target.value&&Z(!0)}),[]);return s.createElement("div",{className:(0,l.Z)("navbar__search",B,(t={},t[I]=w&&N,t))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:K,onBlur:Q,onChange:q,ref:D}),s.createElement(P.Z,{className:z}))}},8938:function(e,t,n){"use strict";n.d(t,{v:function(){return c}});var r=n(8173),u=n(5850),a=n.n(u);function o(e,t){var n=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,s=function(e,t){var n=[];return function e(u,a){for(var o,i=0,s=!1,l=(0,r.Z)(t);!(o=l()).done;){var c=o.value;if(u.substr(0,c.length)===c){var h={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),h):n.push(h),s=!0}else for(var d=c.length-1;d>i;d-=1){var f=c.substr(0,d);if(u.substr(0,d)===f){i=d;var p={missed:a.missed,term:a.term.concat({value:f,trailing:!0})};u.length>d?e(u.substr(d),p):n.push(p),s=!0;break}}}s||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(o,t),l=(0,r.Z)(s);!(i=l()).done;){var c=i.value,h=a.concat.apply(a,c);e(u.slice(1),h)}else{var d=a.concat({value:o});e(u.slice(1),d)}}else n.push(a)}(e,[]),n}var i=n(8141);function s(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,l){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,i.dK);if(0!==c.length){var h=function(e,t){var n=o(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,l=(0,r.Z)(n);!(u=l()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var h,d,f=[],p=(0,r.Z)(i.dK);!(h=p()).done;){var m=h.value;if("en"===m)i._k||f.unshift(a().stopWordFilter);else{var v=a()[m];v.stopWordFilter&&f.unshift(v.stopWordFilter)}}if(f.length>0){var D=function(e){return f.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var F,g=[],E=(0,r.Z)(n);!(F=E()).done;){var k=F.value,C=D(k);d.push(C),C.length<k.length&&C.length>0&&g.push(C)}n.push.apply(n,g)}else d=n.slice();for(var A,_=[],w=(0,r.Z)(d);!(A=w()).done;){var x=A.value;if(x.length>2)for(var y=x.length-1;y>=0;y-=1)_.push(x.slice(0,y).concat(x.slice(y+1)))}return s(n).concat(s(_))}(c,t),d=[],f=function(){for(var t,u=p.value,a=u.term,o=u.tokens,i=function(){var u=t.value,i=u.documents,s=u.index,l=u.type;if(d.push.apply(d,s.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=i.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:o,score:t.score}}))),d.length>=n)return{v:"break|search"}},s=(0,r.Z)(e);!(t=s()).done;){var l=i();if("object"==typeof l)return l.v}};e:for(var p,m=(0,r.Z)(h);!(p=m()).done;){if("break|search"===f())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),l(d)}else l([])}}},8740:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(8173),u=n(8740);function a(e,t,n){for(var o,i=[],s=(0,r.Z)(t);!(o=s()).done;){var l=o.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&i.push(a(e.substr(0,c),t)),i.push("<mark>"+(0,u.X)(e.substr(c,l.length))+"</mark>");var h=c+l.length;h<e.length&&i.push(a(e.substr(h),t));break}}return 0===i.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):i.join("")}},5401:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(8740),u=n(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var i=n(8141);function s(e,t,n,r){void 0===r&&(r=i.Hk);for(var u={chunkIndex:-1},a=l(e,t,n,0,0,u),o=a.slice(0,u.chunkIndex),s=a[u.chunkIndex],c=[s.html],h=a.slice(u.chunkIndex+1),d=s.textLength,f=0,p=0,m=!1,v=!1;d<r;)if((f<=p||0===h.length)&&o.length>0){var D=o.pop();d+D.textLength<=r?(c.unshift(D.html),f+=D.textLength,d+=D.textLength):(m=!0,o.length=0)}else{if(!(h.length>0))break;var F=h.shift();d+F.textLength<=r?(c.push(F.html),p+=F.textLength,d+=F.textLength):(v=!0,h.length=0)}return(m||o.length>0)&&c.unshift("\u2026"),(v||h.length>0)&&c.push("\u2026"),c.join("")}function l(e,t,n,a,i,s){var c=[],h=t[a],d=h[0],f=h[1];if(d<i)(a+=1)<t.length&&c.push.apply(c,l(e,t,n,a,i));else{d>i&&c.push.apply(c,o(e.substring(i,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(d,f),n,!0),textLength:f});var p=d+f;(a+=1)<t.length?c.push.apply(c,l(e,t,n,a,p)):p<e.length&&c.push.apply(c,o(e.substr(p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){"use strict";n.d(t,{vc:function(){return i},rx:function(){return s},dK:function(){return a},_k:function(){return o},Hk:function(){return c},qo:function(){return l},Iz:function(){return h}});var r=n(5850),u=n.n(r);n(8465)(u()),n(4376).w(u()),n(3609)(u());var a=["en","zh"],o=!1,i=null,s="4fc3c962",l=10,c=50,h={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){"use strict";function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);