import BaseComponent from '../core/base-component'
import Component from '../core/web-component'

@Component({
  tag: 'h-app-bar',
  prop: [
    {
      name: 'type',
      type: String,
      default: 'header',
    },
  ],
  template(data) {
    return `
        <div class="${data.$tag}-root" >
            <slot></slot>
        </div>
    `
  },
  styleUrl: require('./app-bar.inline.css'),
})
export default class AppBar extends BaseComponent {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
        <style>${this.$style()}</style>
        ${this.$template(this)}
    `
    this.root = this.shadowRoot.querySelector('div')
    this.win = window
    console.log('s')
  }

  connectedCallback() {
    // this.win.addEventListener('')
  }
}
