
const html = require('./index.html')

export default class Icon extends HTMLElement {
  static get tagName() {
    return 'app-icon'
  }

  constructor() {
    super()
    this.init()
  }

  init() {
    this.shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      ${html}
    `
    this.shadow.appendChild(template.content.cloneNode(true))

    // script
    if (this.shadow.querySelector('script')) {
      const script = document.createElement('script')
      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))
      script.innerHTML = oldScript.innerText
      this.shadow.appendChild(script)
    }

    const iconList = [
      'appreciate', 'back', 'check', 'close', 'edit', 'emoji', 'favor', 'favorfill', 'loading', 'location',
      'locationfill', 'phone', 'right', 'roundcheck', 'roundcheckfill', 'roundclose', 'roundclosefill', 'roundright',
      'roundrightfill', 'search', 'taxi', 'timefill',
    ]
    const iconContent = this.shadow.querySelector('.icon-content')
    iconList.forEach((item) => {
      const div = document.createElement('div')
      const p = document.createElement('p')
      const icon = document.createElement('h-icon')

      div.classList.add('icon-item')
      p.innerText = item
      icon.type = item

      div.appendChild(icon)
      div.appendChild(p)
      iconContent.appendChild(div)
    })
  }

  connectedCallback() {
    // this.classList.add('view-show')
  }

  disconnectedCallback() {
  }
}
