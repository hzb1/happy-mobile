import '../../p/prism.css'
import Prism from 'prismjs'
// import Prism from '../../p/prism'
// const PrismJs = () => import(/* webpackChunkName: "prismmyjs" */ '../../p/prism')
// const PrismCss = () => import('../../p/prism.css')
const html = require('./index.html')

export default class Button extends HTMLElement {
  static get tagName() {
    return 'app-button'
  }

  constructor() {
    super()
  }

  init() {
    // this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      ${html}
    `
    this.appendChild(template.content.cloneNode(true))

    // script
    const script = document.createElement('script')
    const oldScript = this.removeChild(this.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.appendChild(script)

    // code
    // const cssCode = document.createElement('div')
    // cssCode.innerHTML = `
    //   <pre>
    //     <code class="language-markup" >
    //       <script type="text/plain" class="language-markup">
    //       ${this.querySelector('section').innerHTML}
    //       </script>
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
