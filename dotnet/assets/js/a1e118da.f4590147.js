"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6285],{48:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=(a(6396),a(8215),["components"]),s={id:"docker",title:"Docker"},l=void 0,c={unversionedId:"docker",id:"version-1.18/docker",isDocsHomePage:!1,title:"Docker",description:"[Dockerfile.focal] can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/versioned_docs/version-1.18/docker.mdx",sourceDirName:".",slug:"/docker",permalink:"/dotnet/docs/docker",tags:[],version:"1.18",frontMatter:{id:"docker",title:"Docker"},sidebar:"version-1.18/docs",previous:{title:"Videos",permalink:"/dotnet/docs/videos"},next:{title:"Continuous Integration",permalink:"/dotnet/docs/ci"}},d=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[],level:3},{value:"Run the image",id:"run-the-image",children:[{value:"End-to-end tests",id:"end-to-end-tests",children:[],level:4},{value:"Crawling and scraping",id:"crawling-and-scraping",children:[],level:4}],level:3},{value:"Using on CI",id:"using-on-ci",children:[],level:3}],level:2},{value:"Image tags",id:"image-tags",children:[{value:"Base images",id:"base-images",children:[{value:"Alpine",id:"alpine",children:[],level:4}],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal",title:"Dockerfile.focal"},"Dockerfile.focal")," can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#image-tags"},"Image tags"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This image is published on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/microsoft-playwright",title:"Docker Hub"},"Docker Hub"),"."),(0,r.kt)("h3",{id:"pull-the-image"},"Pull the image"),(0,r.kt)("p",null,"or pinned to a specific Playwright version (recommended). Replace 1.15.0 with your Playwright version:"),(0,r.kt)("h3",{id:"run-the-image"},"Run the image"),(0,r.kt)("p",null,"By default, the Docker image will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),(0,r.kt)("h4",{id:"end-to-end-tests"},"End-to-end tests"),(0,r.kt)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),(0,r.kt)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),(0,r.kt)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"adduser")," for it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/main/utils/docker/seccomp_profile.json"},(0,r.kt)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"},"default Docker seccomp profile")," with extra user namespace cloning permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"},"Docker docs"),"). Chrome can run out of memory without this flag."))),(0,r.kt)("h3",{id:"using-on-ci"},"Using on CI"),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/ci"},"Continuous Integration guides")," for sample configs."),(0,r.kt)("h2",{id:"image-tags"},"Image tags"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://mcr.microsoft.com/v2/playwright/tags/list",title:"all available image tags"},"all available image tags"),"."),(0,r.kt)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish images with the following tags (",(0,r.kt)("inlineCode",{parentName:"p"},"v1.15.0")," in this case is an example:):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":next")," - tip-of-tree image version based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":next-focal")," - tip-of-tree image version based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":focal")," - last Playwright release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":v1.15.0")," - Playwright v1.15.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":v1.15.0-focal")," - Playwright v1.15.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"},"short sha")," (first 7 digits of the SHA commit).")),(0,r.kt)("p",null,"Status of push to MCR can be ",(0,r.kt)("a",{parentName:"p",href:"https://mcrflow-status-ui.azurewebsites.net/"},"verified here")," (internal link)."),(0,r.kt)("h3",{id:"base-images"},"Base images"),(0,r.kt)("p",null,"We currently publish images based on the following ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ubuntu"},"Ubuntu")," versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 20.04 LTS")," (Focal Fossa), image tags include ",(0,r.kt)("inlineCode",{parentName:"li"},"focal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 18.04 LTS")," (Bionic Beaver), image tags include ",(0,r.kt)("inlineCode",{parentName:"li"},"bionic")," (not published for Java)")),(0,r.kt)("h4",{id:"alpine"},"Alpine"),(0,r.kt)("p",null,"Browser builds for Firefox and WebKit are built for the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GNU_C_Library"},"glibc")," library. Alpine Linux and other distributions that are based on the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Musl"},"musl")," standard library are not supported."))}p.isMDXComponent=!0}}]);