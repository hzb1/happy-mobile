import Component from '../core/component'
import { MetaData, Watch } from '../core/decorator'

import styleUrl from './cell-group.inline.css'

// const styleSize = new Map([
//   ['medium', ['h-cell-medium']],
//   ['small', ['h-cell-small']],
//   ['large', ['h-cell-large']],
// ])

@MetaData({
  tag: 'h-cell-group',
  props: [
    {
      name: 'name',
      type: String,
      default: '',
    },
  ],
})
export default class CellGroup extends Component {

  static get observedAttributes() {
    return [ 'name' ]
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('div')

    const slotContent = this.root.querySelector('#slot-content')
    const cells = slotContent.assignedElements({flatten: true})
    cells.forEach((item, index) => {
      if (index !== (cells.length - 1)) {
        item.classList.add('h-cell-group-item')
      }
    })
    // console.log(1, slotContent.assignedElements())
    // console.log(2, slotContent.assignedElements({flatten: true}))
  }

  render() {
    return `
        <style>${styleUrl()}</style>
        <div class="${this.$tag}" >
            <p class="h-cell-group-name">${this.name}</p>
            <slot id="slot-content"></slot>
        </div>
    `
  }

  connectedCallback() {
  }

  // @Watch('name')
  // _nameWatch(attrName, oldVal, newVal) {
  //   // this.loading ? this.showLoading() : this.hideLoading()
  // }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

  adoptedCallback() {
    console.log('adoptedCallback')
  }

}
