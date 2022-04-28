(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var o=r(3),a=r(7),n=(r(0),r(547)),c={title:"Uberon"},i={unversionedId:"database/data-sources/library/uberon",id:"database/data-sources/library/uberon",isDocsHomePage:!1,title:"Uberon",description:"Types of data loaded",source:"@site/docs/database/data-sources/library/uberon.md",slug:"/database/data-sources/library/uberon",permalink:"/im-docs/docs/next/database/data-sources/library/uberon",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/uberon.md",version:"current",sidebar:"someSidebar",previous:{title:"TSV, CSV files",permalink:"/im-docs/docs/next/database/data-sources/library/delimited"},next:{title:"Data Sources",permalink:"/im-docs/docs/next/database/data-sources/library/data-sources"}},d=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],u={toc:d};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(n.b)("p",null,"ontology terms"),Object(n.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://purl.obolibrary.org/obo/uberon.obo"}),"http://purl.obolibrary.org/obo/uberon.obo")),Object(n.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(n.b)("p",null,"project XML example"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markup"}),'<source name="uberon" type="uberon">\n  <property name="src.data.file" location="/data/uberon/uberon.obo"/>\n</source>\n')))}l.isMDXComponent=!0},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(r),p=o,f=s["".concat(c,".").concat(p)]||s[p]||b[p]||n;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<n;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);