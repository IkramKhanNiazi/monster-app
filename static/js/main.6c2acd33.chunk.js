(this["webpackJsonpcard-app"]=this["webpackJsonpcard-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(3),a=n.n(s),o=(n(13),n(4)),i=n(5),h=n(7),u=n(6),l=(n(14),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(c.jsx)("h2",{children:e.monster.name}),Object(c.jsx)("h2",{children:e.monster.email})]})}),d=(n(15),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(c.jsx)(l,{monster:e},e.id)}))})}),j=(n(16),function(e){return Object(c.jsx)("input",{type:"search",className:"search",placeholder:e.placeholder,onChange:e.handleChange})}),p=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchField:"",monsters:[]},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.monsters.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{type:"search",handleChange:this.handleChange,placeholder:"search monsters"}),Object(c.jsx)(d,{monsters:n})]})}}]),n}(r.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(c.jsx)(p,{}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.6c2acd33.chunk.js.map