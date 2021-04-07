(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{615:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(704)),p={title:"How to set up your InterMine webapp to use https"},i={unversionedId:"webapp/https",id:"webapp/https",isDocsHomePage:!1,title:"How to set up your InterMine webapp to use https",description:"You will need to use a CDN delivering https content \\(see Performance\\). For example, https://cdn.intermine.org",source:"@site/docs/webapp/https.md",slug:"/webapp/https",permalink:"/im-docs/docs/next/webapp/https",editUrl:"https://github.com/intermine/im-docs/docs/webapp/https.md",version:"current",sidebar:"someSidebar",previous:{title:"Web pages markup",permalink:"/im-docs/docs/next/webapp/markup/index"},next:{title:"Cytoscape network viewer",permalink:"/im-docs/docs/next/webapp/third-party-tools/cytoscape"}},c=[{value:"Tomcat requirements",id:"tomcat-requirements",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You will need to use a CDN delivering https content ","(","see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../webapp/performance/index.md"}),"Performance"),")",". For example, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://cdn.intermine.org"}),"https://cdn.intermine.org")),Object(a.b)("p",null,"Set the corresponding entry in 'global.web.properties', for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"head.cdn.location = https://cdn.intermine.org\n")),Object(a.b)("p",null,"You can also override this property by setting it directly in your",Object(a.b)("inlineCode",{parentName:"p"},"mine.properties")," file."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),"\nIf you are moving your existing mine to https, please take care of also updating the following properties in the same ",Object(a.b)("inlineCode",{parentName:"p"},"mine.properties")," file:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"project.sitePrefix"),Object(a.b)("li",{parentName:"ul"},"webapp.deploy.url"),Object(a.b)("li",{parentName:"ul"},"webapp.baseurl")),Object(a.b)("p",null,"If you are using your own jbrowse server, this will now need to be served through https as well, and you will need to also adjust the property:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"jbrowse.install.url")),Object(a.b)("h2",{id:"tomcat-requirements"},"Tomcat requirements"),Object(a.b)("p",null,"You should add a configuration to your tomcat server.xml in the Engine section, specifying the address of your proxy like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<Valve className="org.apache.catalina.valves.RemoteIpValve"\n     protocolHeaderHttpsValue="https"\n     remoteIpHeader="x-forwarded-for"\n     requestAttributesEnabled="true"\n     internalProxies="\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"\n     protocolHeader="x-forwarded-proto" />\n')),Object(a.b)("p",null,"It is also good practice to limit access to tomcat port to only the host's loopback address ","(","localhost",")",". This is done like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<Connector port="8080" protocol="HTTP/1.1"\n        address="127.0.0.1"\n        connectionTimeout="20000"\n        URIEncoding="UTF-8"\n        redirectPort="8443" />\n')))}s.isMDXComponent=!0},704:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);