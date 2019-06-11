### 注册
```javascript
import 'happy-mobile/dist/carousel/swipe-action'
```

### 基本使用
```html
<h-carousel class="my-carousel" style="height: 31vw; width: 100%">
    <h-lazy-img src="https://img.alicdn.com/simba/img/TB1PcrTNiLaK1RjSZFxSuumPFXa.jpg_q50.jpg" threshold="0.1"></h-lazy-img>
    <h-lazy-img src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg" threshold="0.1"></h-lazy-img>
    <h-lazy-img src="https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg" threshold="0.1"></h-lazy-img>
</h-carousel>
<style>
    .my-carousel h1 {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: white;
    }
    .my-carousel .carousel1 {
        background-color: #6853d8;
    }
</style>
```

### 属性 attribute
属性名 | 类型 | 默认值 | 说明
----|-----|------|------
value | number | 0 | 当前显示的索引
selectedIndex | number | 0 | 当前显示的索引
height | string | 100% | 容器高度
autoplay | boolean | false | 是否自动切换
autoplayInterval | number | 3500 | 自动切换的时间间隔
infinite | boolean | true | 是否循环播放
vertical | boolean | false | 垂直显示
dots | boolean | true | 是否显示面板指示点
