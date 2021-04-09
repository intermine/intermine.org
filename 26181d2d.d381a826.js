(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),o=r(7),n=(r(0),r(703)),i={title:"Homologue Data Sources Overview"},c={unversionedId:"database/data-sources/library/homologues/index",id:"database/data-sources/library/homologues/index",isDocsHomePage:!1,title:"Homologue Data Sources Overview",description:"InterMine comes with several data converters for homologue data, e.g. TreeFam, PANTHER, OrthoDB, Homlogene, etc. Follow the instructions below to include these datasets in your InterMine.",source:"@site/docs/database/data-sources/library/homologues/index.md",slug:"/database/data-sources/library/homologues/index",permalink:"/im-docs/docs/next/database/data-sources/library/homologues/index",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/homologues/index.md",version:"current",sidebar:"someSidebar",previous:{title:"GO OBO",permalink:"/im-docs/docs/next/database/data-sources/library/go/go-obo"},next:{title:"Treefam",permalink:"/im-docs/docs/next/database/data-sources/library/homologues/treefam"}},l=[{value:"Identifiers",id:"identifiers",children:[]},{value:"How to use an ID resolver",id:"how-to-use-an-id-resolver",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"InterMine comes with several data converters for homologue data, e.g. TreeFam, PANTHER, OrthoDB, Homlogene, etc. Follow the instructions below to include these datasets in your InterMine."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/treefam"}),"Treefam"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/treefam#data"}),"Data")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/treefam#project-xml"}),"Project XML")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/homologene"}),"Homologene")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/orthodb"}),"OrthoDB")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/panther"}),"Panther")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/compara"}),"Ensembl Compara"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/compara#download-data-from-biomart"}),"Download data from BioMart")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/compara#add-entry-to-project-xml-file"}),"Add entry to project XML file")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/compara#run-build"}),"Run build"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/compara#data-file"}),"Data file")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/im-docs/docs/next/database/data-sources/library/homologues/compara#download-script"}),"Download script"))))))),Object(n.b)("h2",{id:"identifiers"},"Identifiers"),Object(n.b)("p",null,"The default rule for bio-InterMine is to put the MOD identifiers ","(","eg. MGI:XXX or ZDB-GENE-XXX",")"," in the primaryIdentifier field. This is tricky because some homologue sources use the Ensembl identifiers ","(","Ensembl identifiers belong in the Gene.crossReferences collection",")","."),Object(n.b)("p",null,"To solve this problem, each homologue source uses the NCBI identifier resolver. This resolver takes the Ensembl ID and replaces it with the corresponding MOD identifier."),Object(n.b)("h2",{id:"how-to-use-an-id-resolver"},"How to use an ID resolver"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download the identifier file -"),Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"ftp://ftp.ncbi.nih.gov/gene/DATA/gene_info.gz"}),"ftp://ftp.ncbi.nih.gov/gene/DATA/gene","_","info.gz"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Unzip the file to ",Object(n.b)("inlineCode",{parentName:"p"},"/DATA_DIR/ncbi/gene_info")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Warning"),"\nMake sure permissions on the file are correct so the build process can read this file."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"  3. Download the identifier file for humans -[http://www.flymine.org/download/idresolver/humangene](http://www.flymine.org/download/idresolver/humangene) to another directory, eg. /DATA\\_DIR/human/identifiers\n\n  4. Create a sub directory `/DATA_DIR/idresolver/` as file root path and add symbolic links to the two files.\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd /DATA_DIR/idresolver/\n$ ln -s /DATA_DIR/ncbi/gene_info entrez \n$ ln -s /DATA_DIR/human/identifiers humangene\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"  5. Add the root path to the file in `~/.intermine/MINE.properties`\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"resolver.file.rootpath=/DATA_DIR/idresolver/\n")),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/next/database/data-sources/id-resolvers"}),"ID Resolvers")," for details on how ID resolvers work in InterMine."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Warning"),"\nThe entrez identifiers file appears to only have the sequence identifier for worm instead of the WBgene identifier"),Object(n.b)("p",null,"Alternately you can load identifier sources."),Object(n.b)("p",null,"Here are the download scripts we use here at InterMine:"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-scripts/tree/master/bio/DataDownloader"}),"Data Download")),Object(n.b)("p",null,"We use WormMart but are happy to hear of a better source for worm identifiers."),Object(n.b)("p",null,"Here are the project XML entries used by FlyMine:"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/intermine/flymine/blob/master/project.xml"}),"FlyMine Project XML")))}b.isMDXComponent=!0},703:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(r),m=a,p=d["".concat(i,".").concat(m)]||d[m]||u[m]||n;return r?o.a.createElement(p,c(c({ref:t},s),{},{components:r})):o.a.createElement(p,c({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);