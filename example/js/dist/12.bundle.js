(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./page/select/index.html":function(e,t){e.exports='<link rel="stylesheet" href="../../../../dist/happy-mobile.css">\n<style>\n    .demo-page{\n        padding: 18px 18px 80px;\n        box-sizing: border-box;\n    }\n    h-select{\n        margin-bottom: 6px;\n    }\n</style>\n\n<section class="demo-page">\n    <h4>最简单的select</h4>\n    <h-select id="select1"></h-select>\n</section>\n\n<script>\n<\/script>\n'},"./page/select/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});const s=n("./page/select/index.html");class i extends HTMLElement{static get tagName(){return"app-select"}constructor(){super(),this.init()}init(){this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("template");if(e.innerHTML=`\n      ${s}\n    `,this.shadow.appendChild(e.content.cloneNode(!0)),this.shadow.querySelector("script")){const e=document.createElement("script"),t=this.shadow.removeChild(this.shadow.querySelector("script"));e.innerHTML=t.innerText,this.shadow.appendChild(e)}}connectedCallback(){}}}}]);