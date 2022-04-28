(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{489:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(547)),l={title:"Delimited files"},o={unversionedId:"database/data-sources/library/delimited",id:"database/data-sources/library/delimited",isDocsHomePage:!1,title:"Delimited files",description:"Generic data loader for TSV or CSV files.",source:"@site/docs/database/data-sources/library/delimited.md",slug:"/database/data-sources/library/delimited",permalink:"/im-docs/docs/next/database/data-sources/library/delimited",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/delimited.md",version:"current",sidebar:"someSidebar",previous:{title:"Sequence Ontology (SO)",permalink:"/im-docs/docs/next/database/data-sources/library/so"},next:{title:"Uberon",permalink:"/im-docs/docs/next/database/data-sources/library/uberon"}},d=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[{value:"Add delimited to the list of datasources to be integrated",id:"add-delimited-to-the-list-of-datasources-to-be-integrated",children:[]}]}],c={toc:d};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Generic data loader for TSV or CSV files.\nIt can load more than one class (in the example below Gene, Organism and Protein) and create one to many, many to many relations between the entities loaded.\nAvailable from 5.0.7 release."),Object(i.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(i.b)("p",null,"TSV (Tab-Separated Values) or CSV (Comma-Separated Values) files"),Object(i.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(i.b)("p",null,"N/A - will parse any file in TSV/CSV format"),Object(i.b)("h3",{id:"add-delimited-to-the-list-of-datasources-to-be-integrated"},"Add delimited to the list of datasources to be integrated"),Object(i.b)("p",null,"Project XML example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="my-data-source" type="delimited">\n  <property name="delimited.dataSourceName" value="TSV Source Name"/>\n  <property name="delimited.dataSetTitle" value="TSV Data Set"/>\n  <property name="delimited.licence" value="http//usemydatalicence.com"/>\n  <property name="delimited.hasHeader" value="true"/>\n  <property name="delimited.columns" value="Gene.primaryIdentifier, Organism.taxonId, null,Protein.primaryIdentifier,Protein.primaryAccession"/>\n  <property name="delimited.includes" value="test.tsv"/>\n  <property name="src.data.dir" location="{directory containing delimited files}"/>\n</source>\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"content"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"mandatory"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"delimited.dataSourceName"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"name of dataset"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"determines name of dataset object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"delimited.dataSetTitle"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"name of datasource"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"determines name of datasource object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"delimited.columns"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"name of fields"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"determines the fields to load, use null to skip a value"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"src.data.dir"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"location of the TSV/CSV data file"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"these data will be loaded into the database"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"includes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"name of data file"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"this data file will be loaded into the database"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"delimited.separator"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Default value is: tab. Possible values: tab/TAB/comma/COMMA"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"type of separator file to be loaded"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"delimited.hasHeader"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Default value is: true. Possible values: true/false"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"detemines if the file has a header"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"licence"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"URL pointing to standard data licence for data"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updates DataSet.licence with value"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"no")))))}b.isMDXComponent=!0},547:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=b(a),p=r,u=m["".concat(l,".").concat(p)]||m[p]||s[p]||i;return a?n.a.createElement(u,o(o({ref:t},c),{},{components:a})):n.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);