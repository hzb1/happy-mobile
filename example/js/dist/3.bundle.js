(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{26:function(n,t,o){"use strict";o.r(t),o.d(t,"default",function(){return i});const e=o(8);class i extends HTMLElement{static get tagName(){return"app-button"}connectedCallback(){this.innerHTML=e;const n=document.querySelector("#h-loading");n.addEventListener("click",()=>{n.loading=!0,setTimeout(()=>{n.loading=!1},1e3)})}}},8:function(n,t){n.exports='<div class="demo-css">\n    \x3c!--<link rel="stylesheet" href="../../../../dist/button/button.css">--\x3e\n</div>\n\n\x3c!--html 开始--\x3e\n<section class="demo-html">\n    <app-block title="基本使用">\n        <h-button id="h-btn1">Button</h-button>\n    </app-block>\n\n    <app-block title="颜色 Color">\n        <h-button color="primary">primary</h-button>\n        <h-button color="white">white</h-button>\n        <h-button color="green">green</h-button>\n        <h-button color="yellow">yellow</h-button>\n        <h-button color="red">red</h-button>\n    </app-block>\n\n    <app-block title="内联 Inline">\n        <h-button inline>inline</h-button>\n    </app-block>\n\n    <app-block title="阴影 Shadow">\n        <h-button shadow>shadow</h-button>\n    </app-block>\n\n    <app-block title="边框 Outline">\n        <h-button outline inline>outline</h-button>\n        <h-button outline color="white" inline>outline</h-button>\n        <h-button outline color="green" inline>outline</h-button>\n        \x3c!--<h-button outline color="yellow" inline>outline</h-button>--\x3e\n        <h-button outline color="red" inline>outline</h-button>\n    </app-block>\n\n    <app-block title="大小 Size">\n        <h-button size="small" shadow inline>小 small</h-button>\n        <h-button size="medium" shadow inline>中 medium</h-button>\n        <h-button size="large" shadow inline>大 large</h-button>\n    </app-block>\n\n    <app-block title="禁用 Disabled">\n        <h-button disabled inline id="btn3">禁用</h-button>\n        <h-button disabled color="white" inline>white</h-button>\n        <h-button disabled color="green" inline>green</h-button>\n        \x3c!--<h-button disabled color="yellow" inline>yellow</h-button>--\x3e\n        <h-button disabled color="red" inline>red</h-button>\n    </app-block>\n\n    <app-block title="加载 Loading">\n        <h-button loading >Loading</h-button>\n        <h-button id="h-loading" class="my-class">Loading</h-button>\n    </app-block>\n\n    <app-block title="图标按钮">\n        <style>\n            h-button > h-icon+span{\n                margin-left: 4px;\n            }\n        </style>\n        <h-button size="small" color="white" inline>\n            <h-icon type="check-circle"></h-icon>\n            <span>Icon</span>\n        </h-button>\n        <h-button size="medium" color="yellow" inline>\n            <h-icon type="check-circle"></h-icon>\n            <span>Icon</span>\n        </h-button>\n        <h-button size="large" color="red" inline>\n            <h-icon type="check-circle"></h-icon>\n            <span>Icon</span>\n        </h-button>\n    </app-block>\n\n    <app-block title="自定义style">\n        <style>\n            .my-icon {\n                width: 50px;\n                height: 50px;\n                font-size: 24px;\n                background-color: #6853d8;\n                display: flex;\n                justify-content: center;\n                border-radius: 50%\n            }\n\n            .my-icon2 {\n                width: 120px;\n                height: 50px;\n                border-radius: 50px;\n            }\n\n            .my-icon2::before {\n                border-radius: 100px;\n            }\n        </style>\n        <h-button inline shadow class="my-icon">\n            <h-icon type="up"></h-icon>\n        </h-button>\n        <h-button inline class="my-icon2">\n            半圆\n        </h-button>\n    </app-block>\n</section>\n\x3c!--html 结束--\x3e\n'}}]);