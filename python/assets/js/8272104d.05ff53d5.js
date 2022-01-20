"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4130],{7254:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return c},toc:function(){return g},default:function(){return d}});var s=a(7462),r=a(3366),n=(a(7294),a(3905)),o=a(6396),i=a(8215),l=["components"],p={id:"class-pageassertions",title:"PageAssertions"},h=void 0,c={unversionedId:"api/class-pageassertions",id:"version-1.18/api/class-pageassertions",isDocsHomePage:!1,title:"PageAssertions",description:"The PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests. A new instance of [PageAssertions] is created by calling [playwright_assertions.expect(page):",source:"@site/versioned_docs/version-1.18/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/python/docs/api/class-pageassertions",tags:[],version:"1.18",frontMatter:{id:"class-pageassertions",title:"PageAssertions"},sidebar:"version-1.18/api",previous:{title:"Page",permalink:"/python/docs/api/class-page"},next:{title:"PlaywrightAssertions",permalink:"/python/docs/api/class-playwrightassertions"}},g=[{value:"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)",id:"page-assertions-not-to-have-title",children:[],level:2},{value:"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)",id:"page-assertions-not-to-have-url",children:[],level:2},{value:"page_assertions.to_have_title(title_or_reg_exp, **kwargs)",id:"page-assertions-to-have-title",children:[],level:2},{value:"page_assertions.to_have_url(url_or_reg_exp, **kwargs)",id:"page-assertions-to-have-url",children:[],level:2}],u={toc:g};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/api/class-page",title:"Page"},"Page")," state in the tests. A new instance of ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," is created by calling ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/api/class-playwrightassertions#playwright-assertions-expect-page"},"playwright_assertions.expect(page)"),":"),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.sync_api import Page, expect\n\ndef test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    page.click("#login")\n    expect(page).to_have_url(re.compile(r".*/login"))\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.async_api import Page, expect\n\nasync def test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    await page.click("#login")\n    await expect(page).to_have_url(re.compile(r".*/login"))\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-not-to-have-title"},"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-not-to-have-url"},"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"))),(0,n.kt)("h2",{id:"page-assertions-not-to-have-title"},"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title_or_reg_exp"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-title-or-reg-exp"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,n.kt)("a",{href:"#page-assertions-not-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,n.kt)("a",{href:"#page-assertions-not-to-have-title-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,n.kt)("a",{href:"#page-assertions-not-to-have-title-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The opposite of ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)"),"."),(0,n.kt)("h2",{id:"page-assertions-not-to-have-url"},"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url_or_reg_exp"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-url-or-reg-exp"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,n.kt)("a",{href:"#page-assertions-not-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,n.kt)("a",{href:"#page-assertions-not-to-have-url-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,n.kt)("a",{href:"#page-assertions-not-to-have-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The opposite of ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"),"."),(0,n.kt)("h2",{id:"page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title_or_reg_exp"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,n.kt)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,n.kt)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,n.kt)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Ensures the page has the given title."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(page).to_have_title(re.compile(r".*checkout"))\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.async_api import expect\n\n# ...\nawait expect(page).to_have_title(re.compile(r".*checkout"))\n')))),(0,n.kt)("h2",{id:"page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url_or_reg_exp"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,n.kt)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,n.kt)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,n.kt)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Ensures the page is navigated to the given URL."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(page).to_have_url(re.compile(".*checkout"))\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.async_api import expect\n\n# ...\nawait expect(page).to_have_url(re.compile(".*checkout"))\n')))))}d.isMDXComponent=!0}}]);