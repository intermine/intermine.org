(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(703)),i={title:"Adding a New Page to InterMine Webapp"},l={unversionedId:"webapp/new-page",id:"version-5.0.0/webapp/new-page",isDocsHomePage:!1,title:"Adding a New Page to InterMine Webapp",description:"This tutorial describes how to add a new page to your InterMine webapp.",source:"@site/versioned_docs/version-5.0.0/webapp/new-page.md",slug:"/webapp/new-page",permalink:"/im-docs/docs/webapp/new-page",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/webapp/new-page.md",version:"5.0.0"},p=[{value:"Struts config",id:"struts-config",children:[]},{value:"model.properties",id:"modelproperties",children:[]},{value:"Java controller",id:"java-controller",children:[]}],c={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial describes how to add a new page to your InterMine webapp."),Object(o.b)("h3",{id:"struts-config"},"Struts config"),Object(o.b)("p",null,"Add your new page to your struts config located in your MINE","_","NAME/webapp directory."),Object(o.b)("p",null,"struts-config-model.xml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<action path="/initDataSummary" type="org.flymine.web.DataSummaryController" />\n<action path="/dataSummary" forward="dataSummary.page" />\n')),Object(o.b)("p",null,"tiles-defs-model.xml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<definition name="dataSummary.tile" path="/model/dataSummary.jsp" controllerUrl="/dataSummary.do"/>\n<definition name="dataSummary.page" extends="layout.template">\n    <put name="body" value="projectsSummary.tile"/>\n    <put name="pageName" value="dataSummary"/>\n</definition>\n')),Object(o.b)("p",null,"/model/dataSummary.jsp"),Object(o.b)("p",null,"name and location of your new JSP file"),Object(o.b)("p",null,"org.flymine.web.DataSummaryController"),Object(o.b)("p",null,"name and location of your new Java file"),Object(o.b)("p",null,"pageName"),Object(o.b)("p",null,"must match with the values set in ",Object(o.b)("inlineCode",{parentName:"p"},"model.properties")),Object(o.b)("h3",{id:"modelproperties"},"model.properties"),Object(o.b)("p",null,"Update your ",Object(o.b)("inlineCode",{parentName:"p"},"model.properties")," file to set which tab to use for this JSP."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),"dataSummary.title = Data sources loaded into FlyMine\ndataSummary.tab = dataCategories\n")),Object(o.b)("p",null,"To create a new tab, follow the instructions on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/webapp/layout/index"}),"General Layout"),"."),Object(o.b)("h3",{id:"java-controller"},"Java controller"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new Java class")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"It's name and location should match what you entered in your Struts"),Object(o.b)("p",{parentName:"li"},"configuration files. In the above example,"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"org.flymine.web.DataSummaryController"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n* Perform initialisation steps for displaying a tree\n* @author Mark Woodbridge\n* @author Kim Rutherford\n*/\n")))}u.isMDXComponent=!0},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,s=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return n?r.a.createElement(s,l(l({ref:t},c),{},{components:n})):r.a.createElement(s,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);