(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,n,t){"use strict";t.r(n);var r=t(143),a=t.n(r),i=t(0),o=t.n(i),c=t(140),u=t(139),l=t(144);function s(){var e=a()(["\n  margin-bottom: 30px;\n"]);return s=function(){return e},e}function f(){var e=a()(["\n  color: #2fad1f;\n\n  & > a {\n    color: #2fad1f;\n  }\n"]);return f=function(){return e},e}var d=l.a.li(f()),m=l.a.h3(s());n.default=function(){return o.a.createElement(c.a,{siteName:"Resources"},o.a.createElement(m,null,"Machine Learning"),o.a.createElement(d,null,o.a.createElement("a",{href:Object(u.withPrefix)("/files/apple.tar.gz"),className:"text-link"},"apple.tar.gz")))}},138:function(e,n,t){var r;e.exports=(r=t(141))&&r.default||r},139:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return m});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(137),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var l=t(138),s=t.n(l);t.d(n,"PageRenderer",function(){return s.a});var f=t(32);t.d(n,"parsePath",function(){return f.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},140:function(e,n,t){"use strict";var r=t(143),a=t.n(r),i=t(0),o=t.n(i),c=t(4),u=t.n(c),l=t(144),s=t(139),f=t(145);t(142);function d(){var e=a()(["\n  margin-bottom: 25px;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return d=function(){return e},e}function m(){var e=a()(["\n  font-size: 5rem;\n  margin: 0;\n"]);return m=function(){return e},e}function p(){var e=a()(["\n  margin: 5vmin;\n  color: #47ad23;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n"]);return p=function(){return e},e}function g(){var e=a()(["\n  margin: 10px;\n  color: #2fad1f;\n\n  &:before {\n    background-color: #2fad1f;\n  }\n"]);return g=function(){return e},e}function h(){var e=a()(["\n  display: flex;\n  flex-direction: row;\n"]);return h=function(){return e},e}function v(){var e=a()(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n"]);return v=function(){return e},e}function x(){var e=a()(["\n  display: flex;\n  min-height: 100vh;\n  font-size: 20px;\n  flex-direction: column;\n"]);return x=function(){return e},e}var y=l.a.div(x()),b=l.a.div(v()),E=l.a.div(h()),w=Object(l.a)(s.Link)(g()),P=l.a.div(p()),R=l.a.h1(m()),k=l.a.footer(d()),q=function(e){var n=e.children,t=e.siteName;return o.a.createElement(y,null,o.a.createElement(f.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Advent+Pro",rel:"stylesheet"}),o.a.createElement("title",null,"PRDev",t?" - "+t:"")),o.a.createElement(b,null,o.a.createElement("img",{src:Object(s.withPrefix)("/PRDev-big.png"),alt:"Logo",style:{width:"100px",height:"100px",marginTop:"1vmin",marginBottom:"1vmin"}}),o.a.createElement(R,null,"PRDev"),o.a.createElement(E,null,o.a.createElement(w,{to:"/",className:"link",activeClassName:"active"},"Home"),o.a.createElement(w,{to:"/resources/",className:"link",activeClassName:"active"},"Resources"))),o.a.createElement(P,null,n),o.a.createElement(k,null,o.a.createElement("a",{href:"https://github.com/prd-ev/"},o.a.createElement("img",{src:Object(s.withPrefix)("/gh.png"),alt:"Logo",style:{width:"50px",height:"50px"}}))))};q.propTypes={children:u.a.node.isRequired},n.a=q},141:function(e,n,t){"use strict";t.r(n);t(33);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(50),u=t(2),l=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},142:function(e,n,t){}}]);
//# sourceMappingURL=component---src-pages-resources-js-23d1298e13ecbb692dd2.js.map