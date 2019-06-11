### 注册
```javascript
import 'happy-mobile/dist/icon/icon'
```
### 基本使用
```html
<h-icon type="check"></h-icon>
```

### 类型 Type
```html
<h-icon type="check-circle"></h-icon>
<!-- type: 'check' | 'check-circle' | 'check-circle-o' | 'cross' | 'cross-circle' | 'cross-circle-o' |
    'left' | 'right' | 'down' | 'up' | 'loading' | 'search' | 'ellipsis' | 'ellipsis-circle' | 
    'exclamation-circle' | 'info-circle' | 'question-circle' | 'voice' | 'plus' | 'minus'; -->
```

### 颜色 Color
```html
<h-icon type="check" color="#9c27b0"></h-icon>
```

### 大小 Size
```html
<h-icon type="check" size="50px"></h-icon>
```

### 属性 attribute
属性名 | 类型 | 默认值 | 说明
----|-----|------|------
type | string | 无 | 图标类型
color | string | `inherit` | 图标颜色
size | string | `1em` | 图标大小 可输入 `px` `rem` 等单位
