(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(n,e){n.exports='<style>\n    .my-accordion1 .accordion-header{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 12px;\n        height: 42px;\n        border: 1px solid #eeeeee;\n    }\n</style>\n\n\x3c!--html 开始--\x3e\n<section>\n    <h4>最简单的Accordion</h4>\n    <h-accordion class="my-accordion1">\n        <div class="accordion-header">\n            <h3>title</h3>\n            \x3c!--<h-button size="small" inline onclick="toggle()">展开</h-button>--\x3e\n        </div>\n        <div slot="content">\n            <p>content p1</p>\n            <p>content p2</p>\n            <p>content p3</p>\n            <p>content p4</p>\n            <p>content p5</p>\n        </div>\n    </h-accordion>\n</section>\n\x3c!--html 结束--\x3e\n\n<script>\n    var toggle = function () {\n      var a = document.querySelector(\'.my-accordion1\')\n      a.toggle()\n      var btn = a.querySelector(\'h-button\')\n      btn.innerText = a.value ? \'hide\' : \'show\'\n    }\n<\/script>\n'},40:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return i});const c=t(23);class i extends HTMLElement{static get tagName(){return"app-accordion"}init(){if(this.innerHTML=`\n      ${c}\n    `,this.querySelector("script")){const n=document.createElement("script"),e=this.removeChild(this.querySelector("script"));n.innerHTML=e.innerText,this.appendChild(n)}}connectedCallback(){this.init()}}}}]);