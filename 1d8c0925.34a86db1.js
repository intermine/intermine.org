(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),i=(a(0),a(704)),s={title:"Userprofile"},o={unversionedId:"webapp/user-accounts/userprofile",id:"webapp/user-accounts/userprofile",isDocsHomePage:!1,title:"Userprofile",description:"The user profile is an InterMine ObjectStore which stores profile information such as username and password, tags, queries, lists and templates.",source:"@site/docs/webapp/user-accounts/userprofile.md",slug:"/webapp/user-accounts/userprofile",permalink:"/im-docs/docs/next/webapp/user-accounts/userprofile",editUrl:"https://github.com/intermine/im-docs/docs/webapp/user-accounts/userprofile.md",version:"current",sidebar:"someSidebar",previous:{title:"Website Admin",permalink:"/im-docs/docs/next/webapp/admin/index"},next:{title:"Frictionless Specifications for InterMine",permalink:"/im-docs/docs/next/webapp/frictionless/index"}},l=[{value:"Creating a new UserProfile database",id:"creating-a-new-userprofile-database",children:[]},{value:"Releasing a webapp with a new production database",id:"releasing-a-webapp-with-a-new-production-database",children:[]},{value:"Templates and tags",id:"templates-and-tags",children:[]},{value:"Back ups",id:"back-ups",children:[]}],p={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The user profile is an InterMine ObjectStore which stores profile information such as username and password, tags, queries, lists and templates."),Object(i.b)("h2",{id:"creating-a-new-userprofile-database"},"Creating a new UserProfile database"),Object(i.b)("p",null,"First, you must create the empty database in Postgres."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# create the new empty database\n~/git/flymine $  createdb userprofile-biotestmine\n")),Object(i.b)("p",null,"These commands are needed in the webapp to initialise a userprofile database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# this comment populates superuser, default templates etc.\n~/git/flymine $ ./gradlew buildUserDB\n")),Object(i.b)("h2",{id:"releasing-a-webapp-with-a-new-production-database"},"Releasing a webapp with a new production database"),Object(i.b)("p",null,"If you already have a userprofile database and want to keep the data it contains, you can do this:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify that the ",Object(i.b)("inlineCode",{parentName:"p"},"serialNumber")," in the new production db and in the userprofile are different. Only in this case, the upgrading list process updates the lists when the user logs in."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# run in production and userprofile database.  when releasing a new product\nselect * from intermine_metadata where key='serialNumber';\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Release the webapp pointing to the new production db.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"savedbag")," table, the field ",Object(i.b)("inlineCode",{parentName:"p"},"intermine_state")," should be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the user logs in, the upgrading list process will update the list ","(","using ",Object(i.b)("inlineCode",{parentName:"p"},"bagvalues")," table",")",".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If there are no conflicts, the flag will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and the user will not have to take any action")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If there are issues ","(","eg. if a gene has merged with another",")"," the flag will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", and the user will have to manually upgrade their list."))),Object(i.b)("h2",{id:"templates-and-tags"},"Templates and tags"),Object(i.b)("p",null,"Default templates and tags are defined in ",Object(i.b)("inlineCode",{parentName:"p"},"default-template-queries.xml"),"."),Object(i.b)("p",null,"These are loaded when you build a userprofile database."),Object(i.b)("h2",{id:"back-ups"},"Back ups"),Object(i.b)("p",null,"For our mines, we have a script to back up the user databases every five minutes, but only if there has been a change."))}c.isMDXComponent=!0},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,o(o({ref:t},p),{},{components:a})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);