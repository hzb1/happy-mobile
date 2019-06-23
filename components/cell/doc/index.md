
# 单位格 Cell

### 注册
```javascript
import 'happy-mobile/dist/cell/cell'
```
### 基本使用
```html
<h-cell name="名称" value="hi"></h-cell>
```

### Slot
```html
<h-cell>
    <div slot="name" style="display: flex; align-items: center;">
        <h-icon type="plus"></h-icon>
        <p style="margin-left: 5px">自定义name</p>
    </div>
</h-cell>

<h-cell name="自定义value" >
    <div slot="value" style="display: flex; align-items: center">
        <h-icon type="right"></h-icon>
    </div>
</h-cell>
```

### 单位格组 CellGroup
```html
<h-cell-group>
    <h-cell name="名称" >
        <h-icon type="right"></h-icon>
    </h-cell>
    <h-cell name="名称" >
        <h-icon type="right"></h-icon>
    </h-cell>
</h-cell-group>

<h-cell-group name="单位格组name">
    <h-cell name="名称" >
        <h-icon type="right"></h-icon>
    </h-cell>
    <h-cell name="名称" >
        <h-icon type="right"></h-icon>
    </h-cell>
    <h-cell name="名称" >
        <h-icon type="right"></h-icon>
    </h-cell>
</h-cell-group>
```

### 大小 Size
支持`small`、`medium`、`large` 默认为`medium`
```html
<h-cell name="小号 small" size="small"></h-cell>
<h-cell name="中号 medium" size="medium"></h-cell>
<h-cell name="大号 large" size="large"></h-cell>
```


### h-cell属性 attribute
属性名 | 类型 | 默认值 | 说明
----|-----|------|------
name | string、slot |  | 显示在左侧的名称，可用slot自定义
value | string、slot |  | 显示在右侧的内容，可用slot自定义
size | string | `medium` | 大小，可选值为`medium` `small` `large`

### h-cell插槽 slot
插槽名 | 说明
----|----
name | 显示在左侧的名称 | 
value | 显示在右侧的内容 |

---

### h-cell-group属性 attribute
属性名 | 类型 | 默认值 | 说明
----|-----|------|------
name | string |  | 名称
