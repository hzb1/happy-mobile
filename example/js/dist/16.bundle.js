(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{18:function(n,t){n.exports='\n<style>\n    .demo-page{\n        padding: 18px 18px 80px;\n        box-sizing: border-box;\n    }\n    h-button{\n        margin-bottom: 6px;\n    }\n</style>\n\n<section class="demo-page">\n    <h4>最简单的toast</h4>\n    \x3c!--<h-button inline onclick="show1(0)">show</h-button>--\x3e\n    <h-button inline onclick="show1()">show Toase</h-button>\n    <h-button inline onclick="show1(1000)">show Toase</h-button>\n    <h-button inline onclick="hide1(4000)">5s后隐藏</h-button>\n    \x3c!--<h-button inline onclick="loading1()">loading</h-button>--\x3e\n    <h-button inline onclick="loading2()">loading2</h-button>\n</section>\n\n\x3c!--<script src="../../../../dist/happy-mobile.js"><\/script>--\x3e\n<script>\n    var Toast = window.happy.Toast\n    var show1 = function (time) {\n      Toast.show(\'嗨 toase\', time)\n    }\n    var hide1 = function (time) {\n      var hide = Toast.show(\'setTimeout 控制hide\', 0)\n      setTimeout(hide, time)\n    }\n    var loading1 = function () {\n      var hide = Toast.loading(\'loading...\')\n      // setTimeout(hide, 3000)\n    }\n    var loading2 = function () {\n      var hide = Toast.loading(\'loading...\')\n      setTimeout(hide, 3000)\n    }\n<\/script>\n'},35:function(n,t,i){"use strict";i.r(t),i.d(t,"default",function(){return e});const o=i(18);class e extends HTMLElement{static get tagName(){return"app-toast"}init(){if(this.innerHTML=`\n      ${o}\n    `,this.querySelector("script")){const n=document.createElement("script"),t=this.removeChild(this.querySelector("script"));n.innerHTML=t.innerText,this.appendChild(n)}}connectedCallback(){this.init()}}}}]);