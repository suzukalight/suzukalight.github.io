(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(177),c=a(182),s=a(180),u=function(t){var e=t.location,a=t.pageContext,n=t.data,i=a.tag,o=n.allMarkdownRemark,u=o.edges,m=o.totalCount,p=m+" post"+(1===m?"":"s")+' tagged with "'+i+'"',d=n.site.siteMetadata.title;return r.a.createElement(c.a,{location:e,title:d},r.a.createElement(s.a,{title:p}),r.a.createElement("h1",null,p),r.a.createElement("ul",null,u.map(function(t){var e=t.node,a=e.fields.slug,n=e.frontmatter.title;return r.a.createElement("li",{key:a},r.a.createElement(l.a,{to:a},n))})),r.a.createElement("p",null,r.a.createElement(l.a,{to:"/tags"},"All tags")))};u.propTypes={pageContext:o.a.object,data:o.a.object},e.default=u;var m="3155271447"},177:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(41),c=a.n(l);a.d(e,"a",function(){return c.a});a(178),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},178:function(t,e,a){var n;t.exports=(n=a(179))&&n.default||n},179:function(t,e,a){"use strict";a.r(e);a(42);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(65),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},180:function(t,e,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(5),l=a.n(o),c=a(184),s=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,l=n.data.site,c=e||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"ja",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=u},181:function(t){t.exports={data:{site:{siteMetadata:{title:"suzukalight.com",description:"A starter blog demonstrating what Gatsby can do.",author:"suzukalight"}}}}},182:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(177),o=a(166),l=a.n(o),c=function(t){var e=t.title;return r.a.createElement(i.a,{className:l.a.siteName,to:"/"},e)},s=function(t){var e=t.location,a=t.title;return"/"===e.pathname?r.a.createElement("header",null,r.a.createElement("h1",{className:l.a.headerBig},r.a.createElement(c,{title:a}))):r.a.createElement("header",null,r.a.createElement("h3",{className:l.a.headerSmall},r.a.createElement(c,{title:a})))};e.a=function(t){var e=t.location,a=t.title,n=t.children;return r.a.createElement("div",{className:l.a.root},r.a.createElement(s,{location:e,title:a}),r.a.createElement("main",null,n),r.a.createElement("footer",null,"© 2019 by suzukalight"))}}}]);
//# sourceMappingURL=component---src-components-templates-tags-index-js-b5ed94fd9c621f789661.js.map