import Component from '../core/base-component'
import Component from '../core/web-component'
import { fadeInDown, fadeOutDown, slideInDown, slideOutDown } from '../core/animation'

@Component({
  tag: 'h-app-bar',
  prop: [
    {
      name: 'type',
      type: String,
      default: 'header',
    },
  ],
  styleUrl: require('./app-bar.inline.css'),
})
export default class AppBar extends Component {
  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-app-bar-root')
  }

  render() {
    return `
        <style>${this.$style()}</style>
        <div class="h-app-bar-root" >
            <slot></slot>
        </div>
    `
  }

  connectedCallback() {
    this.isHide = false
    this._listener()
    // fadeOutDown(this).then( res => {
    //   console.log('隐藏')
    // })
    // this.win.addEventListener('')
  }

  _listener() {
    const d = this.closest('section')
    // oldVal, newVal
    let oldScrollTop = document.body.scrollTop;
    window.addEventListener('scroll', (e) => {
      const newScrollTop = document.body.scrollTop
      if (newScrollTop > oldScrollTop) {
        if (!this.isHide && (newScrollTop - oldScrollTop) > 10) {
          this.isHide = true
          slideOutDown(this, { duration: 500 }).then( res => {
          })
        }
      } else {
        if (this.isHide && ( oldScrollTop - newScrollTop) > 10) {
          this.isHide = false
          slideInDown(this, { duration: 200 }).then( res => {
          })
        }
      }
      oldScrollTop = newScrollTop
    }, true);
    // d.onscroll = () => {
    //   console.log('a')
    // }
  }
}
