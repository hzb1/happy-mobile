import { Component, MetaData, Watch } from '../core'
import { styleShadow } from '../button/styleMap'

const style = require('./search-bar.inline.css');
@MetaData({
  tag: 'h-search-bar',
  props: [
    {
      name: 'value',
      type: String,
      default: '',
    },
    {
      name: 'isFocus',
      type: Boolean,
      default: false,
    },
    {
      name: 'placeholder',
      type: String,
      default: '搜索',
    },
    {
      name: 'cancelText',
      type: String,
      default: '取消',
    },
  ],
})
export default class SearchBar extends Component {

  static get observedAttributes() {
    return ['value', 'isFocus']
  }

  constructor() {
    super()

    this.root = this.shadowRoot.querySelector('.h-search-bar-form')
    this.searchInput = this.root.querySelector('#search-input')
  }

  render() {
    return `
        <style>${style()}</style>
        <form class="h-search-bar-form">
            <div class="h-search-input">
                <div class="h-search-placeholder-box">
                    <span>
                      <h-icon type="search"></h-icon>
                      <span class="placeholder-text">${this.placeholder}</span>
                    </span>
                </div>
                <input id="search-input" type="search">
            </div>
            <a class="h-search-text">${this.cancelText}</a>
        </form>
    `
  }

  connectedCallback() {
    this._initEventListener()
    this._initStyle()
  }

  _initEventListener() {
    const searchText = this.root.querySelector('.h-search-text')
    const placeholderBox = this.root.querySelector('.h-search-placeholder-box')
    const placeholderText = this.root.querySelector('.placeholder-text')
    const placeholderSpan = placeholderBox.querySelector('span')

    // 搜索事件
    this.root.addEventListener('submit', (ev) => {
      ev.preventDefault()
      console.log(this.value)
      this.emit('search', this.value)
    })

    // 获得焦点
    this.searchInput.addEventListener('focus', () => {
      this.root.classList.add('h-focus')
      console.log(placeholderSpan, placeholderSpan.offsetWidth)
      placeholderBox.style.width = `${placeholderSpan.offsetWidth + 1}px`
      placeholderText.style.opacity = 0
      this.emit('focus', this.value)
    })

    // 失去焦点
    this.searchInput.addEventListener('blur', () => {
      this.root.classList.remove('h-focus')
      placeholderBox.style.width = `100%`
      placeholderText.style.opacity = 1
      this.emit('blur', this.value)
    })

    // input事件
    this.searchInput.addEventListener('input', (ev) => {
      const value = ev.target.value
      if (value !== this.value) this.value = value
      if (value) {
        placeholderText.style.opacity = 0
      } else {
        placeholderText.style.opacity = 1
      }
      this.emit('h-input', value)
      // this.root.classList.add('h-focus')
    })

    // change事件
    this.searchInput.addEventListener('change', (ev) => {
      const value = ev.target.value
      this.emit('change', value)
    })

    // 取消搜索
    searchText.addEventListener('click', (ev) => { // 取消搜索
      this.value = ''
      this.emit('cancel')
    })
  }

  _initStyle() {

  }

  _focus() {
    this.searchInput.focus()
  }

  @Watch('value')
  _valueWatch(attrName, oldVal, newVal) {
    if (this.value !== this.searchInput.value) this.searchInput.value = this.value
  }

  @Watch('isFocus')
  _isFocusWatch(attrName, oldVal, newVal) {
    console.log('_isFocusWatch', this.isFocus)
    if (this.isFocus){
      this.searchInput.focus()
    } else {
      this.searchInput.blur()
    }
  }

}
