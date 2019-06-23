import Component from '../core/component'
import { MetaData, Watch } from '../core/decorator'
import styleUrl from './cell.inline.css'

const styleSize = new Map([
  ['null', ['h-cell-medium']],
  [null, ['h-cell-medium']],
  ['', ['h-cell-medium']],
  ['medium', ['h-cell-medium']],
  ['small', ['h-cell-small']],
  ['large', ['h-cell-large']],
])

@MetaData({
  tag: 'h-cell',
  props: [
    {
      name: 'name',
      type: String,
      default: '',
    },
    {
      name: 'value',
      type: String,
      default: '',
    },
    {
      name: 'size',
      type: String,
      default: 'medium', // medium、small、large
    },
  ],
})
export default class Cell extends Component {

  static get observedAttributes() {
    return ['color', 'size', 'raised', 'icon', 'loading', 'shadow', 'disabled', 'inline']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('div')
  }

  render() {
    return `
        <style>${styleUrl()}</style>
        <div class="${this.$tag} ${styleSize.get(this.size)}" >
            <div class="h-cell-line">
                <slot id="slot-name" name="name">
                    <h3>${this.name}</h3>
                </slot>
                <div class="right-slot-box">
                    <slot id="slot-value" name="value">
                        ${this.value}
                    </slot>
                </div>
            </div>
        </div>
    `
  }

  connectedCallback() {
  }


  // @Watch('loading')
  // _loadingWatch(attrName, oldVal, newVal) {
  //   this.loading ? this.showLoading() : this.hideLoading()
  // }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

  @Watch('size')
  _sizeWatch(attrName, oldVal, newVal) {
    if (styleSize.get(oldVal)) {
      styleSize.get(oldVal)
      .forEach((item) => this.root.classList.remove(item))
    }
    if (styleSize.get(newVal)) {
      styleSize.get(newVal)
      .forEach((item) => this.root.classList.add(item))
    }
  }

}
