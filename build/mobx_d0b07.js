(function(){"use strict";function e(e,n,r){(function(e,n){function o(e,n){if(!(e instanceof n))throw new t.TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new t.ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function l(e,n){if("function"!=typeof n&&null!==n)throw new t.TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=t.Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(t.Object.setPrototypeOf?t.Object.setPrototypeOf(e,n):e.__proto__=n)}var u,a=(r(486),r(491)),c=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(){function e(e,n){var r=[],o=!0,i=!1,l=void 0;try{for(var u,a=e[t.Symbol.iterator]();!(o=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);o=!0);}catch(e){i=!0,l=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw l}}return r}return function(n,r){if(t.Array.isArray(n))return n;if(t.Symbol.iterator in t.Object(n))return e(n,r);throw new t.TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),t.Object.defineProperty(e,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=r(141),m=r(539),b=(0,m.observer)(u=function(n){function r(){o(this,r);var e=i(this,(r.__proto__||t.Object.getPrototypeOf(r)).call(this));return e.plus=function(){e.store.number+=1},e.minus=function(){e.store.number-=1},e.search=function(){fetch("https://shuoshubao.github.io/src/data/article.json").then(function(e){return e.json()}).then(function(n){e.store.list=t.Object.entries(n).map(function(e){var t=s(e,2),n=t[0],r=t[1];return{name:n,num:r.length,text:r.map(function(e){return e.title}).join("、")}})})},e.remove=function(t){e.store.list.splice(t,1)},e.store=(0,p.observable)({number:0,list:[]}),e}return l(r,n),f(r,[{key:"render",value:function(){var n=this;t.console.log("render");var r=this.store,o=r.number,i=r.list;return e.createElement("div",null,e.createElement(c.default,{type:"primary",onClick:this.plus},"plus"),e.createElement(c.default,{type:"primary",onClick:this.minus},"minus"),e.createElement("br",null),e.createElement(c.default,{icon:"search",onClick:this.search},"搜索类别"),e.createElement("div",null,"store.number: "+o),e.createElement("div",null,"类别: "),e.createElement("ul",null,i.map(function(t,r){return e.createElement("li",{key:t.name},e.createElement("div",null,e.createElement("span",null,t.name+": "+t.num),e.createElement("span",{onClick:n.remove.bind(n,r)},"删除")),e.createElement("div",null,""+t.text))})))}}]),r}(e.Component))||u;n.render(e.createElement(b,null),t.document.body.appendChild(t.document.createElement("div")))}).call(n,r(12),r(41))}var t=this,n=this,r=n.webpackJsonp;if(n.webpackJsonp!==r)throw new Error("Prepack model invariant violation: "+n.webpackJsonp);r([2],{485:e},[485])}).call(this);