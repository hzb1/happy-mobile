(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./page/swipe-action/index.html":function(n,i){n.exports='<style>\n    .my-swipe-action{\n        width: 100%;\n        height: 50px;\n        /*background-color: #eeeeee;*/\n        color: white;\n        padding: 0 12px;\n        box-sizing: border-box;\n    }\n    .my-swipe-action .content{\n        width: 100%;\n        height: 50px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 12px;\n        box-sizing: border-box;\n        background-color: #1f78ff;\n    }\n    .my-swipe-action .slot-right{\n        width: 100px;\n        height: 50px;\n        background-color: #333333;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n\n\x3c!--html 开始--\x3e\n<section>\n    <h4>最简单的swipe-action</h4>\n    <div>\n        <h-swipe-action class="my-swipe-action">\n            <div class="content">\n                <p>左右滑动</p>\n            </div>\n        </h-swipe-action>\n        <h-swipe-action class="my-swipe-action">\n            <div class="content">\n                <p>slot right</p>\n                <h-icon type="right"></h-icon>\n            </div>\n            <div slot="right" class="slot-right">\n                <span>编辑</span>\n            </div>\n        </h-swipe-action>\n    </div>\n</section>\n\x3c!--html 结束--\x3e\n'},"./page/swipe-action/index.js":function(n,i,t){"use strict";t.r(i),t.d(i,"default",function(){return s});const e=t("./page/swipe-action/index.html");class s extends HTMLElement{static get tagName(){return"app-swipe-action"}connectedCallback(){this.innerHTML=e}}}}]);