(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),o=a(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(140),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(142),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e){e.exports={data:{site:{siteMetadata:{title:"ReactWeek"}}}}},144:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(152),u=a.n(s),l=a(141);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"ReactWeek",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},150:function(e,t,a){"use strict";var n=a(143),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(141),u=(a(145),function(){return i.a.createElement("header",{className:"rw-header"},i.a.createElement("span",{className:"rw-header__subtitle"},"5 de Marzo - 9 de Marzo, Globant Medellin - Colombia"),i.a.createElement("h1",{className:"rw-header__title"},"Developer Week:",i.a.createElement("i",{className:"rw-header__react-icon"})," React"),i.a.createElement("a",{className:"rw-header__link",href:"https://www.youtube.com/",target:"_blank"},"Livestream"))}),l=(a(146),function(){return i.a.createElement("footer",{className:"rw-footer"},i.a.createElement("h3",null,"¡No te lo pierdas!"),i.a.createElement("a",{href:"#"},"Registrate Aquí"))}),d=(a(147),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(l,null))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-d39099c210ed7bd92b61.js.map