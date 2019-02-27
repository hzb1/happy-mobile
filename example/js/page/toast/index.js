

const html = require('./index.html')

export default class Toast extends HTMLElement {
  static get tagName() {
    return 'app-toast'
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    // script.src = '../../../../dist/happy-mobile.js'
    // script.load = () => {
    // }
    template.innerHTML = `
      ${html}
    `
    this.shadow.appendChild(template.content.cloneNode(true))

    // script
    const script = document.createElement('script')
    const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.shadow.appendChild(script)
  }

  connectedCallback() {
  }


  show1(time) {
    const { happy } = window
    console.log(happy)
    happy.Toast.show('嗨 toase', time)
  }

  hide1(time) {
    const { happy } = window
    const hide = happy.Toast.show('setTimeout 控制hide', 0)
    setTimeout(hide, time)
  }
}
