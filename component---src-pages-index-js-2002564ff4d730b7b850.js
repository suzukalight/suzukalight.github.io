(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(t,e,a){"use strict";a.r(e);var A=a(8),n=a.n(A),r=a(0),i=a.n(r),o=a(180),c=a(208),l=a(177),s=a(187),u=a(174),m=a.n(u),d=function(t){var e=t.node,a=t.title;return i.a.createElement("div",{className:m.a.item,key:e.fields.slug},i.a.createElement("h3",{className:m.a.title},i.a.createElement(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{style:{marginBottom:"0.5em"},dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}),i.a.createElement(s.a,{tags:e.frontmatter.tags}))},E=function(t){var e=t.posts;t.title;return e.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement(d,{key:e.fields.slug,node:e,title:a})})},g=a(182);a.d(e,"pageQuery",function(){return h});var p=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(g.a,{location:this.props.location,title:e},i.a.createElement(o.a,{title:"Index",description:"なければ作ればいいじゃない"}),i.a.createElement(c.a,null),i.a.createElement(E,{posts:a}))},e}(i.a.Component),h=(e.default=p,"3493448931")},177:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(5),i=a.n(r),o=a(41),c=a.n(o);a.d(e,"a",function(){return c.a});a(178),n.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},178:function(t,e,a){var A;t.exports=(A=a(179))&&A.default||A},179:function(t,e,a){"use strict";a.r(e);a(42);var A=a(0),n=a.n(A),r=a(5),i=a.n(r),o=a(65),c=function(t){var e=t.location,a=t.pageResources;return a?n.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},180:function(t,e,a){"use strict";var A=a(181),n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(184),l=a.n(c);function s(t){var e=t.description,a=t.lang,n=t.meta,i=t.title,o=A.data.site.siteMetadata,c=e||o.description,s=[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(n);return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.title,meta:s})}s.defaultProps={lang:"ja",meta:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=s},181:function(t){t.exports={data:{site:{siteMetadata:{title:"suzukalight.com",description:"A starter blog demonstrating what Gatsby can do.",author:"suzukalight"}}}}},182:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(177),i=a(166),o=a.n(i),c=function(t){var e=t.title;return n.a.createElement(r.a,{className:o.a.siteName,to:"/"},e)},l=function(t){var e=t.location,a=t.title;return"/"===e.pathname?n.a.createElement("header",null,n.a.createElement("h1",{className:o.a.headerBig},n.a.createElement(c,{title:a}))):n.a.createElement("header",null,n.a.createElement("h3",{className:o.a.headerSmall},n.a.createElement(c,{title:a})))};e.a=function(t){var e=t.location,a=t.title,A=t.children;return n.a.createElement("div",{className:o.a.root},n.a.createElement(l,{location:e,title:a}),n.a.createElement("main",null,A),n.a.createElement("footer",null,"© 2019 by suzukalight"))}},187:function(t,e,a){"use strict";a(210);var A=a(0),n=a.n(A),r=a(177),i=a(186),o=a.n(i),c=a(167),l=a.n(c),s=function(t){var e=t.tag;return n.a.createElement(r.a,{className:l.a.link,to:"/tags/"+o()(e)+"/"},n.a.createElement("li",{className:l.a.tag},e))};e.a=function(t){var e=t.tags;return n.a.createElement("ul",{className:l.a.tags},(e||[]).map(function(t){return n.a.createElement(s,{key:t,tag:t})}))}},207:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAYAQACAwAAAAAAAAAAAAAAAAABAgADBP/aAAwDAQACEAMQAAAB6mEaW2NQiCYTUEf/xAAaEAEBAAMBAQAAAAAAAAAAAAABAgADEhEy/9oACAEBAAEFAmXZHyEdZ3Rl7faizkusaXavj//EABkRAQADAQEAAAAAAAAAAAAAAAEAAhEQIv/aAAgBAwEBPwGvpyLYZmPP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8BeFKf/8QAGxAAAQUBAQAAAAAAAAAAAAAAAAERITEyEHH/2gAIAQEABj8CmhhzMIgnhtiyef/EABsQAQADAQEBAQAAAAAAAAAAAAEAESFRMUFh/9oACAEBAAE/IcgHjsM9lHkp3Qv8motQb7Prh1sWLC5DU3zyXFWpGoJ//9oADAMBAAIAAwAAABD/AN8+/8QAGhEBAQACAwAAAAAAAAAAAAAAAQAhMUGx8P/aAAgBAwEBPxDicTwOpAIezGr/xAAYEQEAAwEAAAAAAAAAAAAAAAABABEhEP/aAAgBAgEBPxDC4IXDRvn/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMUFhcfD/2gAIAQEAAT8QuFAonYca06MknOm/MGjt+2VAc52acHpMcqIECM9MlXqKPcCBEWtyZa0Kr3+uJlhzsuf/2Q==",width:50,height:50,src:"/static/e6b234d5abb5aa087bcf203d357ad7a3/9b664/tarako.jpg",srcSet:"/static/e6b234d5abb5aa087bcf203d357ad7a3/9b664/tarako.jpg 1x,\n/static/e6b234d5abb5aa087bcf203d357ad7a3/06a10/tarako.jpg 1.5x,\n/static/e6b234d5abb5aa087bcf203d357ad7a3/f1b5a/tarako.jpg 2x"}}},site:{siteMetadata:{author:"suzukalight",social:{twitter:"suzukalight"}}}}}},208:function(t,e,a){"use strict";a(212);var A=a(207),n=a(0),r=a.n(n),i=a(213),o=a.n(i),c=a(214),l=a.n(c),s=a(215),u=a.n(s);u.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},u.a.baseFontSize="18px",u.a.baseLineHeight=1.66,u.a.blockMarginBottom=1;var m=new l.a(u.a);var d=m.rhythm,E=(m.scale,a(168)),g=a.n(E);e.a=function(){var t=A.data,e=t.site.siteMetadata,a=e.author,n=e.social;return r.a.createElement("div",{className:g.a.root},r.a.createElement(o.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:d(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,a),".",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/"+n.twitter},"GitHub")," ",r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2002564ff4d730b7b850.js.map