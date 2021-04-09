(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{431:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(703)),i={title:"JBrowse"},s={unversionedId:"webapp/jbrowse",id:"webapp/jbrowse",isDocsHomePage:!1,title:"JBrowse",description:"InterMine 1.3.1 supports the JBrowse REST web-service specification \\(see configuring JBrowse\\), which means that you can run a JBrowse installation directly off the InterMine web-services.",source:"@site/docs/webapp/jbrowse.md",slug:"/webapp/jbrowse",permalink:"/im-docs/docs/next/webapp/jbrowse",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/webapp/jbrowse.md",version:"current",sidebar:"someSidebar",previous:{title:"How to set up your InterMine webapp to use https",permalink:"/im-docs/docs/next/webapp/https"},next:{title:"Tool API Overview",permalink:"/im-docs/docs/next/webapp/tool-api/overview"}},c=[{value:"Build Your InterMine Database",id:"build-your-intermine-database",children:[]},{value:"Install JBrowse",id:"install-jbrowse",children:[]},{value:"Add JBrowse to InterMine",id:"add-jbrowse-to-intermine",children:[]},{value:"Point JBrowse at your InterMine",id:"point-jbrowse-at-your-intermine",children:[]},{value:"Configuring InterMine&#39;s JBrowse integration",id:"configuring-intermines-jbrowse-integration",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"InterMine 1.3.1 supports the JBrowse REST web-service specification ","(","see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GMOD/jbrowse/wiki/JBrowse_Configuration_Guide/"}),"configuring JBrowse"),")",", which means that you can run a JBrowse installation directly off the InterMine web-services."),Object(a.b)("p",null,"This documentation has been tested with JBrowse-1.16.4."),Object(a.b)("h2",{id:"build-your-intermine-database"},"Build Your InterMine Database"),Object(a.b)("p",null,"If you want to be able to have a hierarchical view of your features on JBrowse, add this to the ",Object(a.b)("inlineCode",{parentName:"p"},"<post-processing>")," section of your project XML file and then build your database:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<post-process name="populate-child-features"/>\n')),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../database/database-building/post-processing/index.md"}),"Post processing")," for details."),Object(a.b)("h2",{id:"install-jbrowse"},"Install JBrowse"),Object(a.b)("p",null,"You will need an installation of JBrowse for this task. Instructions on doing this can be found at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://jbrowse.org/code/latest-release/docs/tutorial/"}),"installing JBrowse"),"."),Object(a.b)("p",null,"Note: you need to set"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<div class="jbrowse" id="GenomeBrowser" data-config=\'"allowCrossOriginDataRoot": true\'>\n')),Object(a.b)("p",null,"in the index.html file of your JBrowse installation."),Object(a.b)("h2",{id:"add-jbrowse-to-intermine"},"Add JBrowse to InterMine"),Object(a.b)("p",null,"To add JBrowse to your report pages you need to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://intermine.org/intermine-user-docs/docs/admin-account#the-tools-store"}),"install the JBrowse BlueGenes tool"),". Please replace the default URL value (",Object(a.b)("inlineCode",{parentName:"p"},"https://jbrowse.intermine.org/?data="),") in the ",Object(a.b)("inlineCode",{parentName:"p"},"config.json")," configuration file with the URL of your JBrowse installation."),Object(a.b)("p",null,"Please note that if you are still using the old interface you should refer to the relevant documentation (4.0). "),Object(a.b)("h2",{id:"point-jbrowse-at-your-intermine"},"Point JBrowse at your InterMine"),Object(a.b)("p",null,"Add your new mine-based dataset to your configuration file. For example, to add ",Object(a.b)("em",{parentName:"p"},"D. melanogaster")," data from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.flymine.org"}),"FlyMine")," as a JBrowse dataset, the following configuration in ",Object(a.b)("inlineCode",{parentName:"p"},"jbrowse_conf.json")," would suffice:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'{ \n  "datasets": {\n     "FlyMine-7227": {\n      "url": "?data=https://www.flymine.org/query/service/jbrowse/config/7227",\n      "name": "FlyMine"\n    },\n    ...\n  }\n}\n')),Object(a.b)("p",null,"Once in place, you can visit your JBrowse ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," and see the data from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.flymine.org"}),"FlyMine"),"."),Object(a.b)("h2",{id:"configuring-intermines-jbrowse-integration"},"Configuring InterMine's JBrowse integration"),Object(a.b)("p",null,"By default, all InterMine classes that inherit from the SequenceFeature model class will have tracks."),Object(a.b)("p",null,"We intend to implement some JBrowse configuration properties in BlueGenes in the future (for a full list of such properties, please see the canvas section of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GMOD/jbrowse/wiki/JBrowse_Configuration_Guide/"}),"JBrowse Configuration Guide"),")."))}u.isMDXComponent=!0},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);