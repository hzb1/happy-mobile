(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(n,e,t){var a=t(11);"string"==typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,o);a.locals&&(n.exports=a.locals)},11:function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/* PrismJS 1.15.0\nhttps://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript&plugins=line-numbers */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n    font-size: 13px;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*="language-"],\n\tpre[class*="language-"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\t/*padding: 1em;*/\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n    /*white-space: pre;; !*换行*!*/\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\npre[class*="language-"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*="language-"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n\n',""])},12:function(n,e,t){(function(e){var t=function(n){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(n){return n instanceof o?new o(n.type,a.util.encode(n.content),n.alias):Array.isArray(n)?n.map(a.util.encode):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++t}),n.__id},clone:function n(e,t){var o,i,s=a.util.type(e);switch(t=t||{},s){case"Object":if(i=a.util.objId(e),t[i])return t[i];for(var r in o={},t[i]=o,e)e.hasOwnProperty(r)&&(o[r]=n(e[r],t));return o;case"Array":return i=a.util.objId(e),t[i]?t[i]:(o=[],t[i]=o,e.forEach(function(e,a){o[a]=n(e,t)}),o);default:return e}}},languages:{extend:function(n,e){var t=a.util.clone(a.languages[n]);for(var o in e)t[o]=e[o];return t},insertBefore:function(n,e,t,o){var i=(o=o||a.languages)[n],s={};for(var r in i)if(i.hasOwnProperty(r)){if(r==e)for(var l in t)t.hasOwnProperty(l)&&(s[l]=t[l]);t.hasOwnProperty(r)||(s[r]=i[r])}var c=o[n];return o[n]=s,a.languages.DFS(a.languages,function(e,t){t===c&&e!=n&&(this[e]=s)}),s},DFS:function n(e,t,o,i){i=i||{};var s=a.util.objId;for(var r in e)if(e.hasOwnProperty(r)){t.call(e,r,e[r],o||r);var l=e[r],c=a.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,n(l,t,r,i)):(i[s(l)]=!0,n(l,t,null,i))}}},plugins:{},highlightAll:function(n,e){a.highlightAllUnder(document,n,e)},highlightAllUnder:function(n,e,t){var o={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",o);for(var i,s=o.elements||n.querySelectorAll(o.selector),r=0;i=s[r++];)a.highlightElement(i,!0===e,o.callback)},highlightElement:function(t,o,i){for(var s,r,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),r=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var c={element:t,language:s,grammar:r,code:t.textContent},u=function(n){c.highlightedCode=n,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(o&&n.Worker){var d=new Worker(a.filename);d.onmessage=function(n){u(n.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(n,e,t){var i={code:n,grammar:e,language:t};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),o.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(n,e,t,i,s,r,l){for(var c in t)if(t.hasOwnProperty(c)&&t[c]){if(c==l)return;var u=t[c];u="Array"===a.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var p=u[d],g=p.inside,h=!!p.lookbehind,b=!!p.greedy,m=0,f=p.alias;if(b&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var k=i,w=s;k<e.length;w+=e[k].length,++k){var v=e[k];if(e.length>n.length)return;if(!(v instanceof o)){if(b&&k!=e.length-1){if(p.lastIndex=w,!($=p.exec(n)))break;for(var x=$.index+(h?$[1].length:0),F=$.index+$[0].length,A=k,S=w,z=e.length;A<z&&(S<F||!e[A].type&&!e[A-1].greedy);++A)x>=(S+=e[A].length)&&(++k,w=S);if(e[k]instanceof o)continue;j=A-k,v=n.slice(w,S),$.index-=w}else{p.lastIndex=0;var $=p.exec(v),j=1}if($){h&&(m=$[1]?$[1].length:0);F=(x=$.index+m)+($=$[0].slice(m)).length;var C=v.slice(0,x),E=v.slice(F),N=[k,j];C&&(++k,w+=C.length,N.push(C));var L=new o(c,g?a.tokenize($,g):$,f,$,b);if(N.push(L),E&&N.push(E),Array.prototype.splice.apply(e,N),1!=j&&a.matchGrammar(n,e,t,k,w,!0,c),r)break}else if(r)break}}}}},tokenize:function(n,e){var t=[n],o=e.rest;if(o){for(var i in o)e[i]=o[i];delete e.rest}return a.matchGrammar(n,t,e,0,0,!1),t},hooks:{all:{},add:function(n,e){var t=a.hooks.all;t[n]=t[n]||[],t[n].push(e)},run:function(n,e){var t=a.hooks.all[n];if(t&&t.length)for(var o,i=0;o=t[i++];)o(e)}},Token:o};function o(n,e,t,a,o){this.type=n,this.content=e,this.alias=t,this.length=0|(a||"").length,this.greedy=!!o}if(n.Prism=a,o.stringify=function(n,e,t){if("string"==typeof n)return n;if(Array.isArray(n))return n.map(function(t){return o.stringify(t,e,n)}).join("");var i={type:n.type,content:o.stringify(n.content,e,t),tag:"span",classes:["token",n.type],attributes:{},language:e,parent:t};if(n.alias){var s=Array.isArray(n.alias)?n.alias:[n.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(n){return n+'="'+(i.attributes[n]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),o=t.language,i=t.code,s=t.immediateClose;n.postMessage(a.highlight(i,a.languages[o],o)),s&&n.close()},!1),a):a;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});n.exports&&(n.exports=t),void 0!==e&&(e.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(n){"entity"===n.type&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(n,e){var a={};a["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[e]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+e]={pattern:/[\s\S]+/,inside:t.languages[e]};var i={};i[n]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,n),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",i)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(n){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+e.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+e.source+")*?(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var t=n.languages.markup;t&&(t.tag.addInlined("style","css"),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},t.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(n){n=n||document;var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(n.querySelectorAll("pre[data-src]")).forEach(function(n){if(!n.hasAttribute("data-src-loaded")){for(var a,o=n.getAttribute("data-src"),i=n,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(a=(n.className.match(s)||[,""])[1]),!a){var r=(o.match(/\.(\w+)$/)||[,""])[1];a=e[r]||r}var l=document.createElement("code");l.className="language-"+a,n.textContent="",l.textContent="Loading…",n.appendChild(l);var c=new XMLHttpRequest;c.open("GET",o,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),n.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(n){var e=n.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var t=e.getAttribute("data-src"),a=document.createElement("a");return a.textContent=e.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=t,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,t(13))},13:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},14:function(n,e){n.exports='<div class="code-css">\n    \x3c!--<link rel="stylesheet" href="../../../../dist/button/button.css">--\x3e\n    <style>\n\n\n\n    </style>\n</div>\n\n\x3c!--html 开始--\x3e\n<section class="demo-page">\n    <app-block title="基本使用">\n        <h-button id="h-btn1">组件 Button</h-button>\n    </app-block>\n\n    <app-block title="颜色 Color">\n        <h-button color="primary">primary</h-button>\n        <h-button color="secondary">secondary</h-button>\n        <h-button color="success">success</h-button>\n        <h-button color="error">error</h-button>\n    </app-block>\n\n    <app-block title="内联 Inline">\n        <h-button inline>inline</h-button>\n    </app-block>\n\n    <app-block title="阴影 Shadow">\n        <h-button shadow id="btn2" inline>shadow</h-button>\n        <h-button shadow color="secondary" inline>shadow</h-button>\n        <h-button shadow color="success" inline>shadow</h-button>\n        <h-button shadow color="warn" inline>shadow</h-button>\n        <h-button shadow color="error" inline>shadow</h-button>\n    </app-block>\n\n    <app-block title="边框 Outline">\n        <h-button outline inline>outline</h-button>\n        <h-button outline color="secondary" inline>outline</h-button>\n        <h-button outline color="warn" inline>outline</h-button>\n        <h-button outline color="error" inline>outline</h-button>\n    </app-block>\n\n    <app-block title="大小 Size">\n        <h-button size="small" shadow inline>小 small</h-button>\n        <h-button size="medium" shadow inline>中 medium</h-button>\n        <h-button size="large" shadow inline>大 large</h-button>\n    </app-block>\n\n    <app-block title="禁用 Disabled">\n        <h-button disabled inline id="btn3">禁用</h-button>\n        <h-button disabled color="secondary" inline>secondary</h-button>\n        <h-button disabled color="success" inline>success</h-button>\n        <h-button disabled color="warn" inline>warn</h-button>\n        <h-button disabled color="error" inline>error</h-button>\n    </app-block>\n\n    <app-block title="加载 Loading">\n        <h-button id="h-btn4" class="my-class">Loading</h-button>\n    </app-block>\n\n    <app-block title="图标按钮">\n        <style>\n            h-button > h-icon+span{\n                margin-left: 4px;\n            }\n        </style>\n        <h-button size="small" color="secondary" inline>\n            <h-icon type="check-circle"></h-icon>\n            <span>Icon</span>\n        </h-button>\n        <h-button size="medium" color="warn" inline>\n            <h-icon type="check-circle"></h-icon>\n            <span>Icon</span>\n        </h-button>\n        <h-button size="large" color="error" inline>\n            <h-icon type="check-circle"></h-icon>\n            <span>Icon</span>\n        </h-button>\n    </app-block>\n\n    <app-block title="自定义style">\n        <style>\n            .my-icon {\n                width: 50px;\n                height: 50px;\n                font-size: 24px;\n                background-color: #6853d8;\n                display: flex;\n                justify-content: center;\n                border-radius: 50%\n            }\n\n            .my-icon2 {\n                width: 120px;\n                height: 50px;\n                border-radius: 50px;\n            }\n\n            .my-icon2::before {\n                border-radius: 100px;\n            }\n        </style>\n        <h-button inline shadow class="my-icon">\n            <h-icon type="up"></h-icon>\n        </h-button>\n        <h-button inline class="my-icon2">\n            半圆\n        </h-button>\n    </app-block>\n</section>\n\x3c!--html 结束--\x3e\n\n<script>\n  var btn1 = document.querySelector(\'#h-btn1\')\n  var btn4 = document.querySelector(\'#h-btn4\')\n    btn4.addEventListener(\'click\', function () {\n      this.loading = true\n      setTimeout(function () {\n        btn4.loading = false\n      }, 1000)\n    }, false)\n<\/script>\n'},32:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return o});t(10),t(12);const a=t(14);class o extends HTMLElement{static get tagName(){return"app-button"}init(){this.i+=1,document.createElement("template").innerHTML=`\n      ${a}\n    `,this.innerHTML=`\n      ${a}\n    `;const n=document.createElement("script"),e=this.removeChild(this.querySelector("script"));n.innerHTML=e.innerText,this.appendChild(n);const t=document.createElement("app-table"),o=document.createElement("app-table"),i=document.createElement("app-table");t.type="attribute",o.type="method",i.type="slot",this.appendChild(t),this.appendChild(o),this.appendChild(i),t.data=[{name:"color",type:"String",value:["primary","secondary","success","error"],explain:"颜色"},{name:"size",type:"String",value:["medium","small","large"],explain:"大小"},{name:"icon",type:"String",value:"icon组件",explain:"图标"},{name:"loading",type:"boolean",value:!1,explain:"加载中..."},{name:"outline",type:"boolean",value:!1,explain:"镂空button"},{name:"shadow",type:"boolean",value:!1,explain:"阴影"},{name:"inline",type:"boolean",value:!1,explain:"内联Button"},{name:"type",type:"String",value:["button","submit","reset"],explain:"原生Button的type"}],o.data=[{name:"showLoading",backValue:"Function",explain:"开启加载状态"},{name:"hideLoading",backValue:"void",explain:"关闭加载状态"}],i.data=[{name:"default",explain:""}]}connectedCallback(){this.init()}}}}]);