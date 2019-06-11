### 注册
```javascript
import 'happy-mobile/dist/swipe-action/swipe-action'
```

### 基本使用
```html
<h-swipe-action class="my-swipe-action">
    <div class="content">
        <p>左右滑动</p>
    </div>
</h-swipe-action>
```

### 自定义 slot
```html
<h-swipe-action class="my-swipe-action">
    <div class="content">
        <p>slot right</p>
        <h-icon type="right"></h-icon>
    </div>
    <div slot="right" class="slot-right">
        <span>编辑</span>
    </div>
</h-swipe-action>
```

### 插槽 slot
名称 | 说明
----|------|
slot-default | 默认的插槽
slot-right | 右侧的插槽
slot-left | 左侧的插槽
