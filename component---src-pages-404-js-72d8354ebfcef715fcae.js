(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(t,a,e){"use strict";e.r(a),e.d(a,"pageQuery",function(){return o});var A=e(0),n=e.n(A),r=e(192),i=e(195);a.default=function(t){var a=t.location,e=t.data;return n.a.createElement(i.c,{location:a,title:e.site.siteMetadata.titleteTitle},n.a.createElement(r.a,{title:"404: Not Found"}),n.a.createElement("h1",null,"Not Found"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};var o="1097489062"},188:function(t,a,e){"use strict";var A=e(0),n=e.n(A),r=e(5),i=e.n(r),o=e(41),c=e.n(o);e.d(a,"a",function(){return c.a});e(190),n.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},190:function(t,a,e){var A;t.exports=(A=e(197))&&A.default||A},192:function(t,a,e){"use strict";var A=e(199),n=e(0),r=e.n(n),i=e(5),o=e.n(i),c=e(227),s=e.n(c);function l(t){var a=t.description,e=t.lang,n=t.meta,i=t.title,o=A.data.site.siteMetadata,c=a||o.description,l=[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(n);return r.a.createElement(s.a,{htmlAttributes:{lang:e},title:i,titleTemplate:"%s | "+o.title,meta:l})}l.defaultProps={lang:"ja",meta:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},a.a=l},195:function(t,a,e){"use strict";e.d(a,"a",function(){return d}),e.d(a,"b",function(){return m});var A=e(201),n=e(0),r=e.n(n),i=e(188),o=e(196),c=e(167),s=e.n(c),l=function(t){var a=t.title,e=t.social;return r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:s.a.headerInner},r.a.createElement("h3",{className:s.a.headerSiteTitle},r.a.createElement(i.a,{className:s.a.siteName,to:"/"},a)),r.a.createElement("ul",{className:s.a.headerSocials},r.a.createElement("li",{className:s.a.socialItem},r.a.createElement("a",{href:"https://github.com/"+e.twitter},"GitHub")),r.a.createElement("li",{className:s.a.socialItem},r.a.createElement("a",{href:"https://twitter.com/"+e.github},"Twitter")))))},u=function(t){var a=t.author;return r.a.createElement("footer",{className:s.a.footer},r.a.createElement("div",{className:s.a.footerInner},r.a.createElement("div",{className:s.a.footerAvatar},r.a.createElement(o.a,null),r.a.createElement(i.a,{to:"/",className:s.a.footerLink},"suzukalight.com")),r.a.createElement("p",{className:s.a.footerCopyright},"© 2019 by "+a)))},d=function(t){var a=t.children;return r.a.createElement("div",{className:s.a.centered},a)},m=function(t){var a=t.location,e=t.title,n=t.children,i=A.data.site.siteMetadata,o=i.author,c=i.social;return r.a.createElement("div",{className:s.a.root},r.a.createElement(l,{location:a,title:e,social:c}),r.a.createElement("main",{className:s.a.main},n),r.a.createElement(u,{author:o}))};a.c=m},196:function(t,a,e){"use strict";e(228);var A=e(200),n=e(0),r=e.n(n),i=e(204),o=e.n(i),c=e(234),s=e.n(c),l=e(235),u=e.n(l);u.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},u.a.baseFontSize="18px",u.a.baseLineHeight=1.66,u.a.blockMarginBottom=1;var d=new s.a(u.a);var m=d.rhythm;d.scale,a.a=function(){var t=A.data,a=t.site.siteMetadata.author;return r.a.createElement(o.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:m(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})}},197:function(t,a,e){"use strict";e.r(a);e(42);var A=e(0),n=e.n(A),r=e(5),i=e.n(r),o=e(65),c=function(t){var a=t.location,e=t.pageResources;return e?n.a.createElement(o.a,Object.assign({location:a,pageResources:e},e.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c},199:function(t){t.exports={data:{site:{siteMetadata:{title:"suzukalight.com",description:"A starter blog demonstrating what Gatsby can do.",author:"suzukalight"}}}}},200:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAB6mEaVsahEEwnSGp//8QAGhABAQADAQEAAAAAAAAAAAAAAQIAAxIRMv/aAAgBAQABBQJl2R8hHWd0Ze32os5LrGl2r4//xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIRECL/2gAIAQMBAT8Br6ci2GZjz//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/AXhSn//EABsQAAEFAQEAAAAAAAAAAAAAAAABESExMhBx/9oACAEBAAY/ApoYczCIJ4bYsnn/xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhUTFBYf/aAAgBAQABPyHIB47DPZR5Kd0L/JqLUG+z6wdbFiwuQ1N88lxVqRqCf//aAAwDAQACAAMAAAAQ/wDffv/EABoRAAICAwAAAAAAAAAAAAAAAAABESFBsfD/2gAIAQMBAT8QxND4lohSugR//8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAECH/2gAIAQIBAT8Q8LhC4aN5/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYXHw/9oACAEBAAE/EKhQKJ2Ma06MknOm/OsGjt+2VAc52acHpMc8QIEZ6ZKuUUe4ECItbky0oVXv9cTLDnZc/9k=",width:50,height:50,src:"/static/e6b234d5abb5aa087bcf203d357ad7a3/9b664/tarako.jpg",srcSet:"/static/e6b234d5abb5aa087bcf203d357ad7a3/9b664/tarako.jpg 1x,\n/static/e6b234d5abb5aa087bcf203d357ad7a3/06a10/tarako.jpg 1.5x,\n/static/e6b234d5abb5aa087bcf203d357ad7a3/f1b5a/tarako.jpg 2x"}}},site:{siteMetadata:{author:"suzukalight",social:{twitter:"suzukalight",github:"suzukalight"}}}}}},201:function(t){t.exports={data:{site:{siteMetadata:{author:"suzukalight",social:{twitter:"suzukalight",github:"suzukalight"}}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-72d8354ebfcef715fcae.js.map