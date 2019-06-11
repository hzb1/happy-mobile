### 注册
```javascript
import 'happy-mobile/dist/button/button'
```
### 基本使用
```html
<h-button>Button</h-button>
```

### 颜色 Color
支持`primary`、`white`、`green`、`yellow` `error` 默认为`primary`
```html
<h-button color="primary">primary</h-button>
<h-button color="white">white</h-button>
<h-button color="green">green</h-button>
<h-button color="yellow">yellow</h-button>
<h-button color="red">red</h-button>
```

### 内联 Inline
```html
<h-button inline>inline</h-button>
```

### 阴影 Shadow
```html
<h-button shadow>shadow</h-button>
```
### 边框 Outline
```html
<h-button outline inline>outline</h-button>
<h-button outline color="white" inline>outline</h-button>
<h-button outline color="green" inline>outline</h-button>
<h-button outline color="error" inline>outline</h-button>
```
### 大小 Size
```html
<h-button size="small" shadow inline>小 small</h-button>
<h-button size="medium" shadow inline>中 medium</h-button>
<h-button size="large" shadow inline>大 large</h-button>
```
### 禁用 Disabled
 disabled为true时，用户无法click
```html
<h-button disabled inline>禁用</h-button>
<h-button disabled color="white" inline>white</h-button>
<h-button disabled color="green" inline>green</h-button>
<h-button disabled color="error" inline>error</h-button>
```
### 加载 Loading
Loading时，disabled为true
```html
<h-button loading>Loading</h-button>
<h-button id="h-loading">Loading</h-button>
```
```javascript
// JavaScript
const loadingButton = document.querySelector('#h-loading');
loadingButton.addEventListener('click', () => {
  loadingButton.loading = true;
  setTimeout(() => { loadingButton.loading = false }, 1000);
})
```

### 图标按钮
需要使用搭配[h-icon](#icon)使用
```html
<!-- css -->
<style> h-button > h-icon+span{ margin-left: 4px; } </style>

<!-- html -->
<h-button size="small" color="white" inline>
    <h-icon type="check-circle"></h-icon>
    <span>Icon</span>
</h-button>
<h-button size="medium" color="yellow" inline>
    <h-icon type="check-circle"></h-icon>
    <span>Icon</span>
</h-button>
<h-button size="large" color="red" inline>
    <h-icon type="check-circle"></h-icon>
    <span>Icon</span>
</h-button>
```

### 属性 attribute
属性名 | 类型 | 默认值 | 说明
----|-----|------|------
color | string | `primary` | 按钮颜色，可选值为`primary` `white` `green` `yellow` `error`
size | string | `medium` | 按钮大小，可选值为`medium` `small` `large`
loading | boolean | `false` | 加载状态
outline | boolean | `false` | 镂空button
shadow | boolean | `false` | 阴影
inline | boolean | `false` | 内联Button
type | string | `button` `submit` `reset` | 原生Button的type

### 方法 method
方法名 | 返回值 | 说明
----|----|----
showLoading | `hideLoading` | 显示加载状态 | 
hideLoading | `void` | 隐藏加载状态 |

