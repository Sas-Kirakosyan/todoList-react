(this["webpackJsonpmy-todo"]=this["webpackJsonpmy-todo"]||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),s=n.n(r),c=(n(15),n(7)),i=n(4),l=n(5),u=n(8),m=n(6),h=n(9),d=(n(1),function(e){return o.a.createElement("button",null,"X")}),f=function(e){return o.a.createElement("ul",{className:"ul"},e.items.map((function(e,t){return o.a.createElement("li",{className:"li",key:t},e," ",o.a.createElement(d,null))})))},p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){n.setState({terms:e.target.value})},n.submitHendle=function(e){e.preventDefault(),n.setState({items:[].concat(Object(c.a)(n.state.items),[n.state.terms])})},n.state={terms:"",items:[],close:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"h1"},"My todo list"),o.a.createElement("form",{className:"App",onSubmit:this.submitHendle},o.a.createElement("input",{type:"text",onChange:this.handleInput,value:this.state.terms}),o.a.createElement("button",null,"Add")),o.a.createElement(f,{items:this.state.items},o.a.createElement(d,null)))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7c5f7e8f.chunk.js.map