(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{177:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a.n(A),r=a(181),i=a(211),c=(a(209),a(189),a(178)),l=a(187),s=a.n(l),o=a(212),m=a(175),u=a.n(m),E=function(e){var t=e.node,a=e.title;return n.a.createElement("div",{className:u.a.item,key:t.fields.slug},n.a.createElement("div",{className:u.a.description},n.a.createElement("h3",{className:u.a.title},n.a.createElement(c.a,{className:u.a.link,to:t.fields.slug},n.a.createElement("span",{className:u.a.linkText},a))),n.a.createElement("p",{className:u.a.excerpt,dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),n.a.createElement(o.a,{date:t.frontmatter.date,tags:t.frontmatter.tags})),n.a.createElement("div",{className:u.a.imageWrap},t.frontmatter.hero&&n.a.createElement(s.a,{fixed:t.frontmatter.hero.childImageSharp.fixed})))},d=function(e){return e.posts.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement(E,{key:t.fields.slug,node:t,title:a})})},g=a(183);a.d(t,"pageQuery",function(){return p});t.default=function(e){var t=e.location,a=e.data;return n.a.createElement(g.a,{location:t,title:a.site.siteMetadata.title},n.a.createElement(r.a,{title:"Index",description:"なければ作ればいいじゃない"}),n.a.createElement(i.a,null),n.a.createElement(d,{posts:a.allMarkdownRemark.edges}))};var p="3701995803"},178:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=a(5),i=a.n(r),c=a(41),l=a.n(c);a.d(t,"a",function(){return l.a});a(179),n.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},179:function(e,t,a){var A;e.exports=(A=a(180))&&A.default||A},180:function(e,t,a){"use strict";a.r(t);a(42);var A=a(0),n=a.n(A),r=a(5),i=a.n(r),c=a(65),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},181:function(e,t,a){"use strict";var A=a(182),n=a(0),r=a.n(n),i=a(5),c=a.n(i),l=a(185),s=a.n(l);function o(e){var t=e.description,a=e.lang,n=e.meta,i=e.title,c=A.data.site.siteMetadata,l=t||c.description,o=[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(n);return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.title,meta:o})}o.defaultProps={lang:"ja",meta:[],description:""},o.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=o},182:function(e){e.exports={data:{site:{siteMetadata:{title:"suzukalight.com",description:"A starter blog demonstrating what Gatsby can do.",author:"suzukalight"}}}}},183:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=a(178),i=a(166),c=a.n(i),l=function(e){var t=e.title;return n.a.createElement(r.a,{className:c.a.siteName,to:"/"},t)},s=function(e){var t=e.location,a=e.title;return"/"===t.pathname?n.a.createElement("header",null,n.a.createElement("h1",{className:c.a.headerBig},n.a.createElement(l,{title:a}))):n.a.createElement("header",null,n.a.createElement("h3",{className:c.a.headerSmall},n.a.createElement(l,{title:a})))},o=function(){return n.a.createElement("footer",{className:c.a.footer},n.a.createElement("p",{className:c.a.footerCopyright},"© 2019 by suzukalight"),n.a.createElement("p",{className:c.a.footerToHome},n.a.createElement(r.a,{to:"/"},"suzukalight.com")))};t.a=function(e){var t=e.location,a=e.title,A=e.children;return n.a.createElement("div",{className:c.a.root},n.a.createElement(s,{location:t,title:a}),n.a.createElement("main",null,A),n.a.createElement(o,null))}},210:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAYAQACAwAAAAAAAAAAAAAAAAABAgADBP/aAAwDAQACEAMQAAAB6mEaW2NQiCYTUEf/xAAaEAEBAAMBAQAAAAAAAAAAAAABAgADEhEy/9oACAEBAAEFAmXZHyEdZ3Rl7faizkusaXavj//EABkRAQADAQEAAAAAAAAAAAAAAAEAAhEQIv/aAAgBAwEBPwGvpyLYZmPP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8BeFKf/8QAGxAAAQUBAQAAAAAAAAAAAAAAAAERITEyEHH/2gAIAQEABj8CmhhzMIgnhtiyef/EABsQAQADAQEBAQAAAAAAAAAAAAEAESFRMUFh/9oACAEBAAE/IcgHjsM9lHkp3Qv8motQb7Prh1sWLC5DU3zyXFWpGoJ//9oADAMBAAIAAwAAABD/AN8+/8QAGhEBAQACAwAAAAAAAAAAAAAAAQAhMUGx8P/aAAgBAwEBPxDicTwOpAIezGr/xAAYEQEAAwEAAAAAAAAAAAAAAAABABEhEP/aAAgBAgEBPxDC4IXDRvn/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMUFhcfD/2gAIAQEAAT8QuFAonYca06MknOm/MGjt+2VAc52acHpMcqIECM9MlXqKPcCBEWtyZa0Kr3+uJlhzsuf/2Q==",width:50,height:50,src:"/static/e6b234d5abb5aa087bcf203d357ad7a3/9b664/tarako.jpg",srcSet:"/static/e6b234d5abb5aa087bcf203d357ad7a3/9b664/tarako.jpg 1x,\n/static/e6b234d5abb5aa087bcf203d357ad7a3/06a10/tarako.jpg 1.5x,\n/static/e6b234d5abb5aa087bcf203d357ad7a3/f1b5a/tarako.jpg 2x"}}},site:{siteMetadata:{author:"suzukalight",social:{twitter:"suzukalight"}}}}}},211:function(e,t,a){"use strict";a(209);var A=a(210),n=a(0),r=a.n(n),i=a(187),c=a.n(i),l=a(215),s=a.n(l),o=a(216),m=a.n(o);m.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},m.a.baseFontSize="18px",m.a.baseLineHeight=1.66,m.a.blockMarginBottom=1;var u=new s.a(m.a);var E=u.rhythm,d=(u.scale,a(169)),g=a.n(d);t.a=function(){var e=A.data,t=e.site.siteMetadata,a=t.author,n=t.social;return r.a.createElement("div",{className:g.a.root},r.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:E(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,a),".",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/"+n.twitter},"GitHub")," ",r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter")))}},212:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=(a(189),a(178)),i=a(188),c=a.n(i),l=a(167),s=a.n(l),o=function(e){var t=e.tag;return n.a.createElement(r.a,{className:s.a.link,to:"/tags/"+c()(t)+"/"},n.a.createElement("li",{className:s.a.tag},t))},m=function(e){var t=e.tags;return n.a.createElement("ul",{className:s.a.tags},(t||[]).map(function(e){return n.a.createElement(o,{key:e,tag:e})}))},u=a(168),E=a.n(u);t.a=function(e){var t=e.date,a=e.tags;return n.a.createElement("div",{className:E.a.root},n.a.createElement("small",{className:E.a.date},t),n.a.createElement(m,{className:E.a.tags,tags:a}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cd0dc02513bfe058b4bb.js.map