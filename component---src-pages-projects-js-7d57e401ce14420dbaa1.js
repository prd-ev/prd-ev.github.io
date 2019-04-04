(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(M,n,e){"use strict";e.r(n);e(165);var t=e(141),N=e.n(t),u=e(0),i=e.n(u),D=e(140),g=e(142),j=e(143),r=e(146),c=e(167),a=e(168),T=e.n(a);function z(){var M=N()(["\n  padding: 15px;\n"]);return z=function(){return M},M}function A(){var M=N()(["\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n"]);return A=function(){return M},M}function I(){var M=N()(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 375px) {\n    & {\n      flex-direction: column;\n    }\n  }\n"]);return I=function(){return M},M}var o=g.a.div(I()),x=g.a.img(A()),y=g.a.div(z());n.default=function(){return i.a.createElement(j.a,null,c.map(function(M){return i.a.createElement("section",{style:{color:"#0e0e0e"}},i.a.createElement("h2",{style:{textAlign:"center",fontSize:"48px"}},i.a.createElement("u",null,M.title)),i.a.createElement("p",{style:{textAlign:"center"}},M.description),i.a.createElement(o,null,i.a.createElement(y,null,i.a.createElement(r.a,{color:"#0e0e0e",href:"#"},M.github?M.github:i.a.createElement("s",null,M.title.toLowerCase())),i.a.createElement(x,{src:Object(D.withPrefix)("/gh.png"),alt:"Github",style:{paddingLeft:"10px"}})),i.a.createElement(y,null,i.a.createElement(x,{src:T.a,alt:"Link",style:{paddingRight:"10px"}}),i.a.createElement(r.a,{color:"#47ad23",href:"#"},M.link?M.link:i.a.createElement("s",null,M.title.toLowerCase())))))}))}},139:function(M,n,e){var t;M.exports=(t=e(144))&&t.default||t},140:function(M,n,e){"use strict";e.r(n),e.d(n,"graphql",function(){return z}),e.d(n,"StaticQueryContext",function(){return a}),e.d(n,"StaticQuery",function(){return T});var t=e(0),N=e.n(t),u=e(4),i=e.n(u),D=e(138),g=e.n(D);e.d(n,"Link",function(){return g.a}),e.d(n,"withPrefix",function(){return D.withPrefix}),e.d(n,"navigate",function(){return D.navigate}),e.d(n,"push",function(){return D.push}),e.d(n,"replace",function(){return D.replace}),e.d(n,"navigateTo",function(){return D.navigateTo});var j=e(139),r=e.n(j);e.d(n,"PageRenderer",function(){return r.a});var c=e(32);e.d(n,"parsePath",function(){return c.a});var a=N.a.createContext({}),T=function(M){return N.a.createElement(a.Consumer,null,function(n){return M.data||n[M.query]&&n[M.query].data?(M.render||M.children)(M.data?M.data.data:n[M.query].data):N.a.createElement("div",null,"Loading (StaticQuery)")})};function z(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}T.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(M,n,e){"use strict";var t=e(141),N=e.n(t),u=e(0),i=e.n(u),D=e(4),g=e.n(D),j=e(142),r=e(140),c=e(147);e(145);function a(){var M=N()(["\n  margin-bottom: 25px;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return a=function(){return M},M}function T(){var M=N()(["\n  font-size: 5rem;\n  margin: 0;\n"]);return T=function(){return M},M}function z(){var M=N()(["\n  margin: 5vmin;\n  color: #47ad23;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n"]);return z=function(){return M},M}function A(){var M=N()(["\n  margin: 10px;\n  color: #2fad1f;\n\n  &:before {\n    background-color: #2fad1f;\n  }\n"]);return A=function(){return M},M}function I(){var M=N()(["\n  display: flex;\n  flex-direction: row;\n"]);return I=function(){return M},M}function o(){var M=N()(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n"]);return o=function(){return M},M}function x(){var M=N()(["\n  display: flex;\n  min-height: 100vh;\n  font-size: 20px;\n  flex-direction: column;\n"]);return x=function(){return M},M}var y=j.a.div(x()),E=j.a.div(o()),O=j.a.div(I()),l=Object(j.a)(r.Link)(A()),L=j.a.div(z()),s=j.a.h1(T()),Q=j.a.footer(a()),d=function(M){var n=M.children,e=M.siteName;return i.a.createElement(y,null,i.a.createElement(c.Helmet,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Advent+Pro",rel:"stylesheet"}),i.a.createElement("title",null,"PRDev",e?" - "+e:"")),i.a.createElement(E,null,i.a.createElement("img",{src:Object(r.withPrefix)("/PRDev-big.png"),alt:"Logo",style:{width:"100px",height:"100px",marginTop:"1vmin",marginBottom:"1vmin"}}),i.a.createElement(s,null,"PRDev"),i.a.createElement(O,null,i.a.createElement(l,{to:"/",className:"link",activeClassName:"active"},"Home"),i.a.createElement(l,{to:"/projects/",className:"link",activeClassName:"active"},"Projects"),i.a.createElement(l,{to:"/resources/",className:"link",activeClassName:"active"},"Resources"))),i.a.createElement(L,null,n),i.a.createElement(Q,null,i.a.createElement("a",{href:"https://github.com/prd-ev/"},i.a.createElement("img",{src:Object(r.withPrefix)("/gh.png"),alt:"Logo",style:{width:"50px",height:"50px"}}))))};d.propTypes={children:g.a.node.isRequired},n.a=d},144:function(M,n,e){"use strict";e.r(n);e(33);var t=e(0),N=e.n(t),u=e(4),i=e.n(u),D=e(50),g=e(2),j=function(M){var n=M.location,e=g.default.getResourcesForPathnameSync(n.pathname);return N.a.createElement(D.a,Object.assign({location:n,pageResources:e},e.json))};j.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=j},145:function(M,n,e){},146:function(M,n,e){"use strict";var t=e(141),N=e.n(t),u=e(0),i=e.n(u);function D(){var M=N()(["\n  letter-spacing: 1px;\n  color: ",";\n  text-decoration: none;\n  padding: 3px;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: 2px;\n  margin-right: 2px;\n  background-image: linear-gradient(\n    to bottom,\n    "," 50%,\n    "," 50%\n  );\n  background-size: 100% 200%;\n  background-position: 0 -95%;\n  transition: color 0.5s, background-position 0.5s;\n\n  &:hover {\n    color: white;\n    text-decoration: none;\n    background-position: 0 0;\n  }\n"]);return D=function(){return M},M}var g=e(142).a.a(D(),function(M){return M.color||"black"},function(M){return M.color||"black"},function(M){return M.bgColor||"white"});n.a=function(M){return i.a.createElement(g,{href:M.href,color:M.color,bgColor:M.bgColor},M.children)}},165:function(M,n,e){"use strict";e(166)("link",function(M){return function(n){return M(this,"a","href",n)}})},166:function(M,n,e){var t=e(15),N=e(23),u=e(24),i=/"/g,D=function(M,n,e,t){var N=String(u(M)),D="<"+n;return""!==e&&(D+=" "+e+'="'+String(t).replace(i,"&quot;")+'"'),D+">"+N+"</"+n+">"};M.exports=function(M,n){var e={};e[M]=n(D),t(t.P+t.F*N(function(){var n=""[M]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},167:function(M){M.exports=[{title:"Pytatki 2.0",description:"Notes management web app made with django and vue.",github:"",website:""}]},168:function(M,n){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjM3MjQgOC42MDUyNkMxMC4zNjE4IDguMzIzMTggMTAuNDYxMiA4LjAzNTMxIDEwLjY4MzIgNy44MTMyNEwxMS41MDU3IDYuOTkwNzhDMTEuNTQ2MyA2Ljk1MDEgMTEuNjE0NCA2Ljk0MDg5IDExLjY2OTkgNi45Nzk1NkMxMS45MzIyIDcuMTYyNyAxMi4xNzc5IDcuMzY4NTUgMTIuNDA0MSA3LjU5NDc0QzE0LjU0MTUgOS43MzQzOCAxNC41MTI2IDEzLjE2NDQgMTIuNDE3MyAxNS4yNzEyTDEyLjQxMDIgMTUuMjc4NEwxMi40MDY0IDE1LjI4MjVMMTIuNDA0MyAxNS4yODQ3TDkuNzc5MjYgMTcuOTA5N0M3LjY1OTMgMjAuMDI5NiA0LjIwOTEzIDIwLjAyOTQgMi4wODk0OSAxNy45MDk3Qy0wLjAzMDQ0MSAxNS43OTAxIC0wLjAzMDQ3MTEgMTIuMzM5NSAyLjA4OTQ2IDEwLjIyTDMuNTM4OTQgOC43NzA0N0MzLjU2MjM5IDguNzQ3MDMgMy41ODM5MSA4LjczODE4IDMuNjAyNjIgOC43MzQ3QzMuNjIzODIgOC43MzA3NiAzLjY0OTE4IDguNzMyNjIgMy42NzQ0OSA4Ljc0MjQzQzMuNjk5NzggOC43NTIyMyAzLjcxODg3IDguNzY3NTcgMy43MzA4NyA4Ljc4MzU1QzMuNzQxMjcgOC43OTczOSAzLjc1MDcxIDguODE3MDYgMy43NTE5IDguODQ5NDZDMy43Nzg5NCA5LjU4OTAyIDMuOTExNTcgMTAuMzMyOSA0LjE1Njg0IDExLjA1MkM0LjE3NDUgMTEuMTAzNyA0LjE2MDM0IDExLjE1NDQgNC4xMjg3NSAxMS4xODZMMy42MTc1NCAxMS42OTcyQzIuMzM0NzggMTIuOTc5OSAyLjI4NzE5IDE1LjA3NjQgMy41Njg5NyAxNi4zODM2QzQuODU4NTQgMTcuNjk4NyA2Ljk3NzA4IDE3LjcwNjUgOC4yNzY1NyAxNi40MDcxTDEwLjkwMTYgMTMuNzgyNEMxMi4xOTg2IDEyLjQ4NTQgMTIuMTkyOSAxMC4zODg5IDEwLjkwMTYgOS4wOTc1OEMxMC43MzA3IDguOTI2OTkgMTAuNTU5OSA4Ljc5NTYxIDEwLjQyNzcgOC43MDQ1OEMxMC40MTE1IDguNjkzNDMgMTAuMzk3NSA4LjY3ODI5IDEwLjM4OCA4LjY2MTAyQzEwLjM3ODUgOC42NDM3NyAxMC4zNzMxIDguNjI0OTUgMTAuMzcyNCA4LjYwNTI2WiIgZmlsbD0iIzQ3QUQyMyIvPgo8cGF0aCBkPSJNMTcuOTA5NiAyLjA4OTRDMTUuNzkgLTAuMDMwMjY5NyAxMi4zMzk3IC0wLjAzMDU4MjUgMTAuMjE5OCAyLjA4OTM3TDcuNTk0NzYgNC43MTQzN0w3LjU5MjYgNC43MTY1NUw3LjU4ODg1IDQuNzIwNjNMNy41ODE2OCA0LjcyNzg0QzUuNDg2NDggNi44MzQ3MSA1LjQ1NzUyIDEwLjI2NDcgNy41OTQ5NSAxMi40MDQzQzcuODIxMTIgMTIuNjMwNSA4LjA2Njc0IDEyLjgzNjMgOC4zMjg5NyAxMy4wMTk0QzguMzg0NDcgMTMuMDU4MSA4LjQ1MjYzIDEzLjA0ODkgOC40OTMzMiAxMy4wMDgyTDkuMzE1NzMgMTIuMTg1OEM5LjUzNzggMTEuOTYzNyA5LjYzNzE3IDExLjY3NTggOS42MjY2IDExLjM5MzhDOS42MjU4NCAxMS4zNzQxIDkuNjIwNTEgMTEuMzU1MyA5LjYxMTAxIDExLjMzOEM5LjYwMTQ5IDExLjMyMDcgOS41ODgwOCAxMS4zMDU5IDkuNTcxODQgMTEuMjk0OEM5LjQzOTYzIDExLjIwMzggOS4yNjg2MyAxMS4wNzI0IDkuMDk3NzIgMTAuOTAxOEM3LjgwNjM5IDkuNjEwNTEgNy44MDAzOCA3LjUxMzYxIDkuMDk3MzggNi4yMTY2TDExLjcyMjQgMy41OTE5OUMxMy4wMjE5IDIuMjkyNSAxNS4xNDA0IDIuMzAwMjkgMTYuNDMgMy42MTUzOUMxNy43MTE4IDQuOTIyNTcgMTcuNjY0MyA3LjAxOTA3IDE2LjM4MTQgOC4zMDE4NEwxNS44NzAyIDguODEzMDVDMTUuODM4NiA4Ljg0NDYzIDE1LjgyNDUgOC44OTUyNSAxNS44NDIxIDguOTQ3QzE2LjA4NzQgOS42NjYxNiAxNi4yMiAxMC40MSAxNi4yNDcxIDExLjE0OTVDMTYuMjQ4MyAxMS4xODE5IDE2LjI1NzcgMTEuMjAxNiAxNi4yNjgxIDExLjIxNTVDMTYuMjgwMSAxMS4yMzE1IDE2LjI5OTIgMTEuMjQ2OCAxNi4zMjQ1IDExLjI1NjZDMTYuMzQ5OCAxMS4yNjY0IDE2LjM3NTIgMTEuMjY4MyAxNi4zOTY0IDExLjI2NDNDMTYuNDE1MSAxMS4yNjA4IDE2LjQzNjYgMTEuMjUyIDE2LjQ2IDExLjIyODZMMTcuOTA5NSA5Ljc3OTA3QzIwLjAyOTUgNy42NTk1MyAyMC4wMjk1IDQuMjA4OTggMTcuOTA5NiAyLjA4OTRaIiBmaWxsPSIjNDdBRDIzIi8+CjxwYXRoIGQ9Ik03LjU5NDc2IDQuNzE0MzdMMTAuMjE5OCAyLjA4OTM3QzEyLjMzOTcgLTAuMDMwNTgyNSAxNS43OSAtMC4wMzAyNjk3IDE3LjkwOTYgMi4wODk0QzIwLjAyOTUgNC4yMDg5OCAyMC4wMjk1IDcuNjU5NTMgMTcuOTA5NSA5Ljc3OTA3TDE2LjQ2IDExLjIyODZDMTYuNDM2NiAxMS4yNTIgMTYuNDE1MSAxMS4yNjA4IDE2LjM5NjQgMTEuMjY0M0MxNi4zNzUyIDExLjI2ODMgMTYuMzQ5OCAxMS4yNjY0IDE2LjMyNDUgMTEuMjU2NkMxNi4yOTkyIDExLjI0NjggMTYuMjgwMSAxMS4yMzE1IDE2LjI2ODEgMTEuMjE1NUMxNi4yNTc3IDExLjIwMTYgMTYuMjQ4MyAxMS4xODE5IDE2LjI0NzEgMTEuMTQ5NUMxNi4yMiAxMC40MSAxNi4wODc0IDkuNjY2MTYgMTUuODQyMSA4Ljk0N0MxNS44MjQ1IDguODk1MjUgMTUuODM4NiA4Ljg0NDYzIDE1Ljg3MDIgOC44MTMwNUwxNi4zODE0IDguMzAxODRDMTcuNjY0MyA3LjAxOTA3IDE3LjcxMTggNC45MjI1NyAxNi40MyAzLjYxNTM5QzE1LjE0MDQgMi4zMDAyOSAxMy4wMjE5IDIuMjkyNSAxMS43MjI0IDMuNTkxOTlMOS4wOTczOCA2LjIxNjZDNy44MDAzOCA3LjUxMzYxIDcuODA2MzkgOS42MTA1MSA5LjA5NzcyIDEwLjkwMThDOS4yNjg2MyAxMS4wNzI0IDkuNDM5NjMgMTEuMjAzOCA5LjU3MTg0IDExLjI5NDhDOS41ODgwOCAxMS4zMDU5IDkuNjAxNDkgMTEuMzIwNyA5LjYxMTAxIDExLjMzOEM5LjYyMDUxIDExLjM1NTMgOS42MjU4NCAxMS4zNzQxIDkuNjI2NiAxMS4zOTM4QzkuNjM3MTcgMTEuNjc1OCA5LjUzNzggMTEuOTYzNyA5LjMxNTczIDEyLjE4NThMOC40OTMzMiAxMy4wMDgyQzguNDUyNjMgMTMuMDQ4OSA4LjM4NDQ3IDEzLjA1ODEgOC4zMjg5NyAxMy4wMTk0QzguMDY2NzQgMTIuODM2MyA3LjgyMTEyIDEyLjYzMDUgNy41OTQ5NSAxMi40MDQzQzUuNDU3NTIgMTAuMjY0NyA1LjQ4NjQ4IDYuODM0NzEgNy41ODE2OCA0LjcyNzg0TDcuNTg4ODUgNC43MjA2M0w3LjU5MjYgNC43MTY1NUw3LjU5NDc2IDQuNzE0MzdaTTcuNTk0NzYgNC43MTQzN0w3LjU5NTcyIDQuNzEzMTRNMTAuMzcyNCA4LjYwNTI2QzEwLjM2MTggOC4zMjMxOCAxMC40NjEyIDguMDM1MzEgMTAuNjgzMiA3LjgxMzI0TDExLjUwNTcgNi45OTA3OEMxMS41NDYzIDYuOTUwMSAxMS42MTQ0IDYuOTQwODkgMTEuNjY5OSA2Ljk3OTU2QzExLjkzMjIgNy4xNjI3IDEyLjE3NzkgNy4zNjg1NSAxMi40MDQxIDcuNTk0NzRDMTQuNTQxNSA5LjczNDM4IDE0LjUxMjYgMTMuMTY0NCAxMi40MTczIDE1LjI3MTJMMTIuNDEwMiAxNS4yNzg0TDEyLjQwNjQgMTUuMjgyNUwxMi40MDQzIDE1LjI4NDdMOS43NzkyNiAxNy45MDk3QzcuNjU5MyAyMC4wMjk2IDQuMjA5MTMgMjAuMDI5NCAyLjA4OTQ5IDE3LjkwOTdDLTAuMDMwNDQxIDE1Ljc5MDEgLTAuMDMwNDcxMSAxMi4zMzk1IDIuMDg5NDYgMTAuMjJMMy41Mzg5NCA4Ljc3MDQ3QzMuNTYyMzkgOC43NDcwMyAzLjU4MzkxIDguNzM4MTggMy42MDI2MiA4LjczNDdDMy42MjM4MiA4LjczMDc2IDMuNjQ5MTggOC43MzI2MiAzLjY3NDQ5IDguNzQyNDNDMy42OTk3OCA4Ljc1MjIzIDMuNzE4ODcgOC43Njc1NyAzLjczMDg3IDguNzgzNTVDMy43NDEyNyA4Ljc5NzM5IDMuNzUwNzEgOC44MTcwNiAzLjc1MTkgOC44NDk0NkMzLjc3ODk0IDkuNTg5MDIgMy45MTE1NyAxMC4zMzI5IDQuMTU2ODQgMTEuMDUyQzQuMTc0NSAxMS4xMDM3IDQuMTYwMzQgMTEuMTU0NCA0LjEyODc1IDExLjE4NkwzLjYxNzU0IDExLjY5NzJDMi4zMzQ3OCAxMi45Nzk5IDIuMjg3MTkgMTUuMDc2NCAzLjU2ODk3IDE2LjM4MzZDNC44NTg1NCAxNy42OTg3IDYuOTc3MDggMTcuNzA2NSA4LjI3NjU3IDE2LjQwNzFMMTAuOTAxNiAxMy43ODI0QzEyLjE5ODYgMTIuNDg1NCAxMi4xOTI5IDEwLjM4ODkgMTAuOTAxNiA5LjA5NzU4QzEwLjczMDcgOC45MjY5OSAxMC41NTk5IDguNzk1NjEgMTAuNDI3NyA4LjcwNDU4QzEwLjQxMTUgOC42OTM0MyAxMC4zOTc1IDguNjc4MjkgMTAuMzg4IDguNjYxMDJDMTAuMzc4NSA4LjY0Mzc3IDEwLjM3MzEgOC42MjQ5NSAxMC4zNzI0IDguNjA1MjZaIiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-projects-js-7d57e401ce14420dbaa1.js.map