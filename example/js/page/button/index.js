import '../../plugin/prism.css'
import Prism from 'prismjs'
// import Prism from '../../p/prism'
// const PrismJs = () => import(/* webpackChunkName: "prismmyjs" */ '../../p/prism')
// const PrismCss = () => import('../../p/prism.css')
const html = require('./index.html')

export default class Button extends HTMLElement {
  static get tagName() {
    return 'app-button'
  }

  init() {
    this.i += 1
    // this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      ${html}
    `
    this.innerHTML = `
      ${html}
    `

    // script
    const script = document.createElement('script')
    const oldScript = this.removeChild(this.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.appendChild(script)

    const attributeTable = document.createElement('app-table') // 属性表格
    const methodTable = document.createElement('app-table') // 方法表格
    const slotTable = document.createElement('app-table') // 方法表格
    attributeTable.type = 'attribute'
    methodTable.type = 'method'
    slotTable.type = 'slot'
    this.appendChild(attributeTable)
    this.appendChild(methodTable)
    this.appendChild(slotTable)
    attributeTable.data = [
      {
        name: 'color',
        type: 'String',
        value: ['primary', 'secondary', 'success', 'error'],
        explain: '颜色',
      },
      {
        name: 'size',
        type: 'String',
        value: ['medium', 'small', 'large'],
        explain: '大小',
      },
      {
        name: 'icon',
        type: 'String',
        value: 'icon组件',
        explain: '图标',
      },
      {
        name: 'loading',
        type: 'boolean',
        value: false,
        explain: '加载中...',
      },
      {
        name: 'outline',
        type: 'boolean',
        value: false,
        explain: '镂空button',
      },
      {
        name: 'shadow',
        type: 'boolean',
        value: false,
        explain: '阴影',
      },
      {
        name: 'inline',
        type: 'boolean',
        value: false,
        explain: '内联Button',
      },
      {
        name: 'type',
        type: 'String',
        value: ['button', 'submit', 'reset'],
        explain: '原生Button的type',
      },
    ]
    methodTable.data = [
      {
        name: 'showLoading',
        backValue: 'Function',
        explain: '开启加载状态',
      },
      {
        name: 'hideLoading',
        backValue: 'void',
        explain: '关闭加载状态',
      },
    ]
    slotTable.data = [
      {
        name: 'default',
        explain: '',
      },
    ]

    // console.log(html)
    // const from = html.indexOf('<!--html 开始-->')
    // const to = html.indexOf('<!--html 结束-->')
    // // code
    // const cssCode = document.createElement('div')
    // cssCode.innerHTML = `
    //   <pre>
    //     <code class="language-markup" >
    //       <script type="text/plain" class="language-markup">${html.substring(from + 14, to)}</script>
    //     </code>
    //   </pre>
    //   <pre>
    //     <code class="language-js">
    //       ${this.querySelector('script').innerHTML}
    //     </code>
    //   </pre>
    //   <pre>
    //     <code class="language-css">
    //       ${this.querySelector('style').innerHTML}
    //     </code>
    //   </pre>
    // `
    // this.appendChild(cssCode)
  }

  connectedCallback() {
    this.init()
  }
}
