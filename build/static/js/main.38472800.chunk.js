(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(15),function(e){return r.a.createElement("div",{key:e.keys,className:"Card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=(n(17),function(e){return r.a.createElement("div",{className:"cardList"},e.monster.map(function(e){return r.a.createElement(h,{keys:e.id,monster:e})}))}),f=(n(19),n(21),function(e){return r.a.createElement("input",{className:"search",type:"search",placeholder:e.placeholder,onChange:e.SearchHandle})}),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monster:[],search:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({monster:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monster,a=t.search,o=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster RoloDex"),r.a.createElement(f,{placeholder:"Search monster",SearchHandle:function(t){e.setState({search:t.target.value})}}),r.a.createElement(d,{monster:o}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[8,2,1]]]);
//# sourceMappingURL=main.38472800.chunk.js.map