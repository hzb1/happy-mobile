!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.happyMobile=t():e.happyMobile=t()}(window,function(){return function(D){var n=window.webpackHotUpdatehappyMobile;window.webpackHotUpdatehappyMobile=function(e,t){!function(e,t){if(!L[e]||!p[e])return;for(var n in p[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(R[n]=t[n]);0==--s&&0===l&&y()}(e,t),n&&n(e,t)};var i,r=!0,H="40f47be0bf9378ff4c8e",t=1e4,M={},I=[],o=[];function c(t){var n=$[t];if(!n)return q;var r=function(e){return n.hot.active?($[e]?-1===$[e].parents.indexOf(t)&&$[e].parents.push(t):(I=[t],i=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),I=[]),q(e)},e=function(t){return{configurable:!0,enumerable:!0,get:function(){return q[t]},set:function(e){q[t]=e}}};for(var o in q)Object.prototype.hasOwnProperty.call(q,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===A&&C("prepare"),l++,q.e(e).then(t,function(e){throw t(),e});function t(){l--,"prepare"===A&&(f[e]||h(e),0===l&&0===s&&y())}},r.t=function(e,t){return 1&t&&(e=r(e)),q.t(e,-2&t)},r}var u=[],A="idle";function C(e){A=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var a,R,T,s=0,l=0,f={},p={},L={};function U(e){return+e+""===e?+e:e}function d(e){if("idle"!==A)throw new Error("check() is only allowed in idle status");return r=e,C("check"),(i=t,i=i||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=q.p+""+H+".hot-update.json";r.open("GET",o,!0),r.timeout=i,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})).then(function(e){if(!e)return C("idle"),null;p={},f={},L=e.c,T=e.h,C("prepare");var t=new Promise(function(e,t){a={resolve:e,reject:t}});R={};return h(3),"prepare"===A&&0===l&&0===s&&y(),t});var i}function h(e){var t,n;L[e]?(p[e]=!0,s++,t=e,(n=document.createElement("script")).charset="utf-8",n.src=q.p+""+t+"."+H+".hot-update.js",document.head.appendChild(n)):f[e]=!0}function y(){C("ready");var t=a;if(a=null,t)if(r)Promise.resolve().then(function(){return v(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in R)Object.prototype.hasOwnProperty.call(R,n)&&e.push(U(n));t.resolve(e)}}function v(n){if("ready"!==A)throw new Error("apply() is only allowed in ready status");var e,t,r,l,o;function i(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),i=o.id,c=o.chain;if((l=$[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<l.parents.length;u++){var a=l.parents[u],s=$[a];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===t.indexOf(a)&&(s.hot._acceptedDependencies[i]?(n[a]||(n[a]=[]),f(n[a],[i])):(delete n[a],t.push(a),r.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var c={},u=[],a={},s=function(){console.warn("[HMR] unexpected require("+d.moduleId+") to disposed module")};for(var p in R)if(Object.prototype.hasOwnProperty.call(R,p)){var d;o=U(p);var h=!1,y=!1,v=!1,b="";switch((d=R[p]?i(o):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+d.chain.join(" -> ")),d.type){case"self-declined":n.onDeclined&&n.onDeclined(d),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+d.moduleId+b));break;case"declined":n.onDeclined&&n.onDeclined(d),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+d.moduleId+" in "+d.parentId+b));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(d),n.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+b));break;case"accepted":n.onAccepted&&n.onAccepted(d),y=!0;break;case"disposed":n.onDisposed&&n.onDisposed(d),v=!0;break;default:throw new Error("Unexception type "+d.type)}if(h)return C("abort"),Promise.reject(h);if(y)for(o in a[o]=R[o],f(u,d.outdatedModules),d.outdatedDependencies)Object.prototype.hasOwnProperty.call(d.outdatedDependencies,o)&&(c[o]||(c[o]=[]),f(c[o],d.outdatedDependencies[o]));v&&(f(u,[d.moduleId]),a[o]=s)}var m,w=[];for(t=0;t<u.length;t++)o=u[t],$[o]&&$[o].hot._selfAccepted&&w.push({module:o,errorHandler:$[o].hot._selfAccepted});C("dispose"),Object.keys(L).forEach(function(e){!1===L[e]&&delete installedChunks[e]});for(var g,O,j=u.slice();0<j.length;)if(o=j.pop(),l=$[o]){var _={},E=l.hot._disposeHandlers;for(r=0;r<E.length;r++)(e=E[r])(_);for(M[o]=_,l.hot.active=!1,delete $[o],delete c[o],r=0;r<l.children.length;r++){var x=$[l.children[r]];x&&(0<=(m=x.parents.indexOf(o))&&x.parents.splice(m,1))}}for(o in c)if(Object.prototype.hasOwnProperty.call(c,o)&&(l=$[o]))for(O=c[o],r=0;r<O.length;r++)g=O[r],0<=(m=l.children.indexOf(g))&&l.children.splice(m,1);for(o in C("apply"),H=T,a)Object.prototype.hasOwnProperty.call(a,o)&&(D[o]=a[o]);var P=null;for(o in c)if(Object.prototype.hasOwnProperty.call(c,o)&&(l=$[o])){O=c[o];var S=[];for(t=0;t<O.length;t++)if(g=O[t],e=l.hot._acceptedDependencies[g]){if(-1!==S.indexOf(e))continue;S.push(e)}for(t=0;t<S.length;t++){e=S[t];try{e(O)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:o,dependencyId:O[t],error:e}),n.ignoreErrored||P||(P=e)}}}for(t=0;t<w.length;t++){var k=w[t];o=k.module,I=[o];try{q(o)}catch(t){if("function"==typeof k.errorHandler)try{k.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:t}),n.ignoreErrored||P||(P=e),P||(P=t)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:o,error:t}),n.ignoreErrored||P||(P=t)}}return P?(C("fail"),Promise.reject(P)):(C("idle"),new Promise(function(e){e(u)}))}var $={};function q(e){if($[e])return $[e].exports;var t,r,n=$[e]={i:e,l:!1,exports:{},hot:(t=e,r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},check:d,apply:v,status:function(e){if(!e)return A;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);0<=t&&u.splice(t,1)},data:M[t]},i=void 0,r),parents:(o=I,I=[],o),children:[]};return D[e].call(n.exports,n,n.exports,c(e)),n.l=!0,n.exports}return q.m=D,q.c=$,q.d=function(e,t,n){q.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},q.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},q.t=function(t,e){if(1&e&&(t=q(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(q.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)q.d(n,r,function(e){return t[e]}.bind(null,r));return n},q.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return q.d(t,"a",t),t},q.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},q.p="/dist/",q.h=function(){return H},c("./components/img/index.js")(q.s="./components/img/index.js")}({"./components/core/index.js":function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function u(e){var r="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return o(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)})(e)}function o(e,t,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,s(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,u(HTMLElement)),n=t,o=[{key:"register",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.prototype.$tag;try{if(window.customElements.get(e))return void console.warn("happy-mobile: ".concat(e,"标签不能重复注册"));window.customElements.define(e,this)}catch(e){throw e}}}],(r=[{key:"emit",value:function(e,t){var n,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];"function"==typeof CustomEvent?n=new CustomEvent(e,{detail:t,bubbles:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,r,!1,evtData),this.dispatchEvent(n)}},{key:"listen",value:function(e,t){this.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.removeEventListener(e,t)}}])&&i(n.prototype,r),o&&i(n,o),t}(),f=function(e){var n=e.tag,t=e.prop,r=void 0===t?[]:t,o=e.template,i=void 0===o?function(){return""}:o,c=e.styleUrl,u=void 0===c?function(){return""}:c;return function(c){var t;c.prototype.$tag=n,c.prototype.$prop=(t={},r.forEach(function(e){t[e.name]=e}),t),c.prototype.$template=i,c.prototype.$style=u,r.forEach(function(e){var n=e.name,t=e.type,r=void 0===t?String:t,o=e.has,i=void 0!==o&&o;Object.defineProperty(c.prototype,n,{get:function(){var e=this.getAttribute(n);if(i){if(!this.hasAttribute(n))return!1;if(""===e)return!0;if(!e)return!1}if(r===Boolean)return null===e?this.$prop[n].default:JSON.parse(e);if(r!==String)return r(e);var t=String(e);return"null"===t?this.$prop[n].default:t},set:function(e){this.setAttribute(n,e)}})})}};n.d(t,"b",function(){return f}),n.d(t,"a",function(){return l})},"./components/img/index.js":function(e,t,n){"use strict";n.r(t);var r,i=n("./components/core/index.js");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=Object(i.b)({tag:"h-img",prop:[{name:"src",type:String},{name:"alt",type:String}],template:function(e){return'\n       <img class="h-img-root" alt='.concat(e.alt," />\n    ")}})(r=function(e){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=this,(e=!(n=u(o).call(this))||"object"!==c(n)&&"function"!=typeof n?a(t):n).shadow=e.attachShadow({mode:"open"});var r=document.createElement("template");return r.innerHTML="\n      <style>.h-img-root{display: block;width: 100%;}</style>\n      ".concat(e.$template(a(e)),"\n    "),e.shadow.appendChild(r.content.cloneNode(!0)),e.root=e.shadow.querySelector(".h-img-root"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,i["a"]),s(o,null,[{key:"observedAttributes",get:function(){return["src"]}}]),s(o,[{key:"load",value:function(){this.root.src=this.src}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"init",value:function(){var n=this;this.io=new IntersectionObserver(function(e,t){e[0].isIntersecting&&(n.load(),n.removeIO())},{}),this.io.observe(this),this.firstLoad=!0,this.initAttribute()}},{key:"connectedCallback",value:function(){this.init()}},{key:"initAttribute",value:function(){this.src&&this.setAttribute("src",this.src)}},{key:"initMethod",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.firstLoad)switch(console.log(e,"oldVal:",t,"newVal:",n,"属性改变时调用",c(n),"attrName",this[e]),e){case"src":this.init()}}},{key:"disconnectedCallback",value:function(){this.removeIO()}}]),o}())||r;t.default=f}})});