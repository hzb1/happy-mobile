(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{22:function(n,o){n.exports='<link rel="stylesheet" href="../../../../dist/happy-mobile.css">\n<style>\n    .demo-page{\n        padding: 18px 18px 80px;\n        box-sizing: border-box;\n    }\n    h-button{\n        margin-bottom: 6px;\n    }\n</style>\n\n<section class="demo-page">\n    <h4>最简单的popover</h4>\n    <h-popover  title="hello Popover" >\n        <h-button inline shadow >Popover</h-button>\n    </h-popover>\n\n    <h4>最简单的popover</h4>\n    <h-popover title="my title2" style="display: block" >\n        <h-button shadow onclick="">Popover2</h-button>\n    </h-popover>\n\n    <h-popover style="display: block" title="my title3">\n        <h-button shadow onclick="">Popover</h-button>\n    </h-popover>\n    <h-popover>\n        <h-button shadow onclick="">Popover</h-button>\n    </h-popover>\n</section>\n\n<script>\n<\/script>\n'},39:function(n,o,t){"use strict";t.r(o),t.d(o,"default",function(){return p});const e=t(22);class p extends HTMLElement{static get tagName(){return"app-popover"}init(){if(this.innerHTML=`\n      ${e}\n    `,this.querySelector("script")){const n=document.createElement("script"),o=this.removeChild(this.querySelector("script"));n.innerHTML=o.innerText,this.appendChild(n)}}connectedCallback(){this.init()}}}}]);