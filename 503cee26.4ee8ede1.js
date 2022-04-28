(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{223:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),a=(o(0),o(547)),i={title:"Sequence Ontology (SO)"},c={unversionedId:"database/data-sources/library/so",id:"database/data-sources/library/so",isDocsHomePage:!1,title:"Sequence Ontology (SO)",description:"This source loads no data but adds a class in the data model for every term in the sequence ontology in your data model. SO terms represent biological features such as gene, exon, 3' UTR. You should include this source if you are loading genome annotation.",source:"@site/docs/database/data-sources/library/so.md",slug:"/database/data-sources/library/so",permalink:"/im-docs/docs/next/database/data-sources/library/so",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/so.md",version:"current",sidebar:"someSidebar",previous:{title:"Organisms",permalink:"/im-docs/docs/next/database/data-sources/library/organism"},next:{title:"Delimited files",permalink:"/im-docs/docs/next/database/data-sources/library/delimited"}},s=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:s};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This source loads no data but adds a class in the data model for every term in the sequence ontology in your data model. SO terms represent biological features such as gene, exon, 3' UTR. You should include this source if you are loading genome annotation."),Object(a.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(a.b)("p",null,"Sequence Ontology terms"),Object(a.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(a.b)("p",null,"Included in InterMine source code"),Object(a.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(a.b)("p",null,"project XML example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="so" type="so">\n  <property name=\u201dsrc.data.file\u201d location=\u201dso.obo\u201d />\n  <property name="licence" value="https://creativecommons.org/licenses/by/4.0/"/>\n</source>\n')),Object(a.b)("p",null,"To add or remove SO terms from your model, update your ",Object(a.b)("inlineCode",{parentName:"p"},"so_terms")," file in ",Object(a.b)("inlineCode",{parentName:"p"},"dbmodel/resources")))}l.isMDXComponent=!0},547:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return o?n.a.createElement(m,c(c({ref:t},d),{},{components:o})):n.a.createElement(m,c({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=o[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);