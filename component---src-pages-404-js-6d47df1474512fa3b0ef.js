(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return u});var n=a(8),r=a.n(n),i=a(0),o=a.n(i),c=a(180),s=a(182),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=l;var u="1097489062"},177:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(41),s=a.n(c);a.d(e,"a",function(){return s.a});a(178),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},178:function(t,e,a){var n;t.exports=(n=a(179))&&n.default||n},179:function(t,e,a){"use strict";a.r(e);a(42);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(65),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},180:function(t,e,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(5),c=a.n(o),s=a(184),l=a.n(s);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,c=n.data.site.siteMetadata,s=e||c.description,u=[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r);return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.title,meta:u})}u.defaultProps={lang:"ja",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=u},181:function(t){t.exports={data:{site:{siteMetadata:{title:"suzukalight.com",description:"A starter blog demonstrating what Gatsby can do.",author:"suzukalight"}}}}},182:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(177),o=a(166),c=a.n(o),s=function(t){var e=t.title;return r.a.createElement(i.a,{className:c.a.siteName,to:"/"},e)},l=function(t){var e=t.location,a=t.title;return"/"===e.pathname?r.a.createElement("header",null,r.a.createElement("h1",{className:c.a.headerBig},r.a.createElement(s,{title:a}))):r.a.createElement("header",null,r.a.createElement("h3",{className:c.a.headerSmall},r.a.createElement(s,{title:a})))};e.a=function(t){var e=t.location,a=t.title,n=t.children;return r.a.createElement("div",{className:c.a.root},r.a.createElement(l,{location:e,title:a}),r.a.createElement("main",null,n),r.a.createElement("footer",null,"© 2019 by suzukalight"))}}}]);
//# sourceMappingURL=component---src-pages-404-js-6d47df1474512fa3b0ef.js.map