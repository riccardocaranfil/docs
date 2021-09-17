"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[660],{9870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Installation",p={unversionedId:"create-store/installation",id:"create-store/installation",isDocsHomePage:!1,title:"Installation",description:"To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline",source:"@site/docs/create-store/installation.md",sourceDirName:"create-store",slug:"/create-store/installation",permalink:"/docs/docs/create-store/installation",editUrl:"https://github.com/metaplex/docs/docs/create-store/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Overview",permalink:"/docs/docs/architecture/overview"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Local setup",id:"local-setup",children:[{value:"Setting Up the Store ID",id:"setting-up-the-store-id",children:[]},{value:"Running store web server",id:"running-store-web-server",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline\nsteps you need to take to create your store."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 14.17.0 or above (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn"),". Yarn is a performant package manager for JavaScript and replaces the ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," client.")),(0,o.kt)("h2",{id:"local-setup"},"Local setup"),(0,o.kt)("p",null,"Clone the repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/metaplex-foundation/metaplex.git\n")),(0,o.kt)("h3",{id:"setting-up-the-store-id"},"Setting Up the Store ID"),(0,o.kt)("p",null,"To create a store, you must first derive the store ID given your public address. The Metaplex devs have already created\nan environment variable for you to utilize - ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP_STORE_OWNER_ADDRESS_ADDRESS")," - which you should set to be your\nwallet public address. To do this, you can edit a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"js/packages/web"),", and set\n",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP_STORE_OWNER_ADDRESS_ADDRESS")," to be your wallet public address in there. You can get setup on ",(0,o.kt)("a",{parentName:"p",href:"https://phantom.app/"},"Phantom")," and create your wallet address there"),(0,o.kt)("h3",{id:"running-store-web-server"},"Running store web server"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to spin up a web server locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd metaplex\n$ cd js\n$ yarn install\n$ yarn bootstrap\n$ yarn start\n")),(0,o.kt)("p",null,"After that you can open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," in browser to see a storefront."))}d.isMDXComponent=!0}}]);