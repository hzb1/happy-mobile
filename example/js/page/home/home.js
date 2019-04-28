const html = require('./home.html')

export default class Home extends HTMLElement {
  static get tagName() {
    return 'app-home'
  }

  constructor() {
    super()

    this.list = [
      {
        name: '基础',
        children: [
          {
            name: '按钮 Button',
            link: '#button',
          },
          {
            name: '图标 Icon',
            link: '#icon',
          },
          {
            name: '遮罩 Mask',
            link: '#mask',
          },
        ],
      },
      {
        name: '数据展示',
        children: [
          {
            name: '滑动操作 SwipeAction',
            link: '#swipe-action',
          },
          {
            name: '轮播 Carousel',
            link: '#carousel',
          },
          // {
          //   name: '手风琴 Accordion',
          //   link: '#accordion',
          // },
          {
            name: '图片懒加载 Img',
            link: '#img',
          },
        ],
      },
      {
        name: '反馈',
        children: [
          {
            name: '轻提示 Toast',
            link: '#toast',
          },
          // {
          //   name: '气泡 Popover',
          //   link: '#popover',
          // },
        ],
      },
      {
        name: '表单',
        children: [
          {
            name: '表单 Form',
            link: '#form',
          },
          // {
          //   name: '选择器 Select',
          //   link: '#select',
          // },
          {
            name: '开关 Switch',
            link: '#switch',
          },
          {
            name: '滑块 Slider',
            link: '#slider',
          },
          {
            name: '复选框 Checkbox',
            link: '#checkbox',
          },
          {
            name: '选择器 Picker',
            link: '#picker',
          },
        ],
      },
      // {
      //   name: '拉动',
      //   children: [
      //     {
      //       name: '拉动刷新 PullRefresh',
      //       link: '#pull-refresh',
      //     },
      //   ],
      // },
      // {
      //   name: '布局',
      //   children: [
      //     {
      //       name: 'AppBar',
      //       link: '#app-bar',
      //     },
      //   ],
      // },
    ]
  }

  connectedCallback() {
    this.innerHTML = html

    this._init()

    const script = document.createElement('script')
    const oldScript = this.removeChild(this.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.appendChild(script)
  }

  _init() {
    let cHtml = ''
    const forFun = (item) => {
      if (!item || !item.length) return ''
      let t = '<ul>'
      item.forEach((i) => {
        t += `
          <li>
            <a class="list" href="${i.link}">
              <p>${i.name}</p>
              <h-icon type="right"></h-icon>
            </a>
          </li>
        `
      })
      t += '</ul>'
      return t
    }
    this.list.forEach((item) => {
      cHtml += `
        <h3>${item.name}</h3>
        ${forFun(item.children)}
      `
    })

    const component = this.querySelector('.component')
    component.innerHTML = cHtml
  }

  disconnectedCallback() {
  }
}
